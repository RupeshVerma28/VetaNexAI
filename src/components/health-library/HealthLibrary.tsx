import { useEffect, useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, SlidersHorizontal, RotateCcw, Info } from 'lucide-react'
import { healthLibraryItems, HEALTH_CATEGORIES } from '../../data/healthData'
import type { HealthInfo, HealthCategory, AgeGroup, SexCategory } from '../../types/health'
import { HealthInfoCard } from './HealthInfoCard'
import { HealthDetailModal } from './HealthDetailModal'
import { HealthCheckModal } from './HealthCheckModal'

export function HealthLibrary() {
  const [searchParams, setSearchParams] = useSearchParams()
  const requestedCheck = searchParams.get('check')
  const requestedCategory = searchParams.get('category') as HealthCategory | null

  // Active state
  const [selectedCategory, setSelectedCategory] = useState<HealthCategory | 'All'>(
    requestedCategory || 'All'
  )
  const [searchQuery, setSearchQuery] = useState('')
  const [globalAge, setGlobalAge] = useState<AgeGroup>('Adult')
  const [globalSex, setGlobalSex] = useState<SexCategory>('Male')

  // Modals state
  const [detailModalItem, setDetailModalItem] = useState<HealthInfo | null>(null)
  const [checkModalItem, setCheckModalItem] = useState<HealthInfo | null>(null)

  // Handle URL search parameter on load
  useEffect(() => {
    if (requestedCheck) {
      const matched = healthLibraryItems.find(
        item => item.id.toLowerCase() === requestedCheck.toLowerCase()
      )
      if (matched) setCheckModalItem(matched)
    }
  }, [requestedCheck])

  useEffect(() => {
    if (requestedCategory && HEALTH_CATEGORIES.includes(requestedCategory)) {
      setSelectedCategory(requestedCategory)
    }
  }, [requestedCategory])

  // Filter items based on category and search query
  const filteredItems = useMemo(() => {
    return healthLibraryItems.filter(item => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory
      
      const query = searchQuery.trim().toLowerCase()
      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.shortDescription.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.whatIsIt.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const handleResetFilters = () => {
    setSelectedCategory('All')
    setSearchQuery('')
    setGlobalAge('Adult')
    setGlobalSex('Male')
    setSearchParams({})
  }

  return (
    <section id="library" className="section-space bg-[#f2faf8] min-h-screen">
      <div className="container-page">
        {/* Header Intro */}
        <div className="max-w-3xl">
          <span className="eyebrow">VitaNexAI Health Library</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink">
            Comprehensive Health & Laboratory Reference
          </h2>
          <p className="mt-3 text-base sm:text-lg leading-7 text-slate-600">
            Learn about common health measurements, complete blood counts (CBC), blood chemistry, liver and kidney markers, vitamins, and minerals with age and sex specific reference ranges.
          </p>
        </div>

        {/* Controls & Filters Bar */}
        <div className="mt-10 rounded-3xl border border-white bg-white/80 p-5 sm:p-7 shadow-sm backdrop-blur-md space-y-6">
          
          {/* Search Bar & Global Demographic Controls */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-xl">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search parameters, vitamins, CBC, tests (e.g. Hemoglobin, eGFR, B12)..."
                className="w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 py-3 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Global Quick Demographic Filter */}
            <div className="flex flex-wrap items-center gap-3 rounded-2xl bg-teal-50/70 p-2.5 border border-teal-100/70">
              <div className="flex items-center gap-1.5 text-xs font-bold text-teal-900 px-2">
                <SlidersHorizontal size={15} />
                <span>Reference Profile:</span>
              </div>
              
              {/* Age selector */}
              <select
                value={globalAge}
                onChange={e => setGlobalAge(e.target.value as AgeGroup)}
                className="rounded-xl border border-teal-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
              >
                <option value="Newborn">Newborn (0–28d)</option>
                <option value="Infant">Infant (1–12m)</option>
                <option value="Child">Child (1–11y)</option>
                <option value="Adolescent">Adolescent (12–17y)</option>
                <option value="Adult">Adult (18–64y)</option>
                <option value="Older Adult">Older Adult (65y+)</option>
              </select>

              {/* Sex selector */}
              <div className="flex items-center gap-1 bg-white rounded-xl p-1 border border-teal-200">
                {(['Male', 'Female'] as SexCategory[]).map(sex => (
                  <button
                    key={sex}
                    type="button"
                    onClick={() => setGlobalSex(sex)}
                    className={`rounded-lg px-2.5 py-1 text-xs font-bold transition ${
                      globalSex === sex
                        ? 'bg-teal-700 text-white'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {sex}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="border-t border-slate-100 pt-5">
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                Categories ({healthLibraryItems.length} Total Parameters)
              </span>
              {(selectedCategory !== 'All' || searchQuery) && (
                <button
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 hover:text-teal-800"
                >
                  <RotateCcw size={13} /> Reset Filters
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSelectedCategory('All')}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
                  selectedCategory === 'All'
                    ? 'bg-teal-700 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All Categories ({healthLibraryItems.length})
              </button>

              {HEALTH_CATEGORIES.map(cat => {
                const count = healthLibraryItems.filter(i => i.category === cat).length
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-xl px-3.5 py-2 text-xs font-bold transition ${
                      selectedCategory === cat
                        ? 'bg-teal-700 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-teal-50 hover:text-teal-800'
                    }`}
                  >
                    {cat} ({count})
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Results Counter & Info */}
        <div className="mt-8 flex items-center justify-between text-xs text-slate-500 font-semibold px-1">
          <span>
            Showing <strong className="text-ink font-extrabold">{filteredItems.length}</strong> parameters
            {selectedCategory !== 'All' && <span> in <strong className="text-teal-700 font-bold">{selectedCategory}</strong></span>}
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-slate-400">
            <Info size={14} /> Click "Learn More" on any card for detailed diagnostic guides
          </span>
        </div>

        {/* Cards Grid */}
        {filteredItems.length > 0 ? (
          <div className="mt-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map(item => (
              <HealthInfoCard
                key={item.id}
                item={item}
                onLearnMore={setDetailModalItem}
                onCheckYours={setCheckModalItem}
                selectedGlobalAge={globalAge}
                selectedGlobalSex={globalSex}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-xs">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-teal-600">
              <Search size={28} />
            </div>
            <h3 className="mt-4 text-xl font-bold text-ink">No health parameters found</h3>
            <p className="mt-2 text-sm text-slate-500 max-w-md mx-auto">
              We couldn't find any parameters matching your search query "{searchQuery}". Try searching for another blood test or reset filters.
            </p>
            <button
              onClick={handleResetFilters}
              className="btn-primary mt-6 text-xs py-2.5 px-5 inline-flex items-center gap-2"
            >
              <RotateCcw size={16} /> Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Detailed Learn More Modal */}
      <HealthDetailModal
        item={detailModalItem}
        onClose={() => setDetailModalItem(null)}
        onOpenCheckModal={setCheckModalItem}
      />

      {/* Interactive Check Modal */}
      <HealthCheckModal
        topic={checkModalItem}
        onClose={() => setCheckModalItem(null)}
      />
    </section>
  )
}
