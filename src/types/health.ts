import type { LucideIcon } from 'lucide-react'

export type HealthTopic = { id: string; name: string; description: string; range: string; icon: LucideIcon; unit?: string; min?: number; max?: number }
export type ChatSection = { title: string; content?: string; items?: string[] }
export type RelatedTool = { label: string; href: string; detail: string }
export type ChatMessage = { id: string; role: 'assistant' | 'user'; content: string; timestamp: string; sections?: ChatSection[]; relatedTool?: RelatedTool; emergency?: boolean }
export type ChatMode = 'basic' | 'api'
export type ApiConfig = { endpoint: string; apiKey: string; model: string }
export type CalculatorCategory = 'Body & BMI' | 'Nutrition' | 'Lifestyle'
export type CalculatorId = 'bmi' | 'bmr' | 'ideal-weight' | 'body-fat' | 'lean-mass' | 'waist-height' | 'daily-calories' | 'calorie-change' | 'protein' | 'macros' | 'calorie-burn' | 'water' | 'sleep' | 'target-heart-rate' | 'heart-rate-zones'
export type CalculatorDefinition = { id: CalculatorId; title: string; description: string; category: CalculatorCategory; icon: LucideIcon }
