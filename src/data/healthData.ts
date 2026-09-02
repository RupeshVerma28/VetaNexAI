import {
  Activity,
  Apple,
  BedDouble,
  Brain,
  CheckCircle2,
  Droplets,
  Dumbbell,
  Eye,
  Feather,
  Flame,
  Gauge,
  Heart,
  HeartPulse,
  LineChart,
  Moon,
  Pill,
  Scale,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Sun,
  TestTube2,
  Thermometer,
  Utensils,
  Wind,
  Zap,
  Microscope,
  Salad
} from 'lucide-react'
import type { HealthInfo, HealthTopic, HealthCategory } from '../types/health'

export const HEALTH_CATEGORIES: HealthCategory[] = [
  'Vital Signs',
  'Complete Blood Count (CBC)',
  'Blood Chemistry',
  'Liver Function',
  'Kidney Function',
  'Lipid Profile',
  'Vitamins',
  'Minerals & Electrolytes',
  'Blood Sugar & Diabetes',
  'General Health Measurements',
  'Nutrition & Wellness'
]

export const healthLibraryItems: HealthInfo[] = [
  // ==========================================
  // 1. VITAL SIGNS
  // ==========================================
  {
    id: 'temperature',
    title: 'Body Temperature',
    category: 'Vital Signs',
    icon: Thermometer,
    shortDescription: 'Measures the body’s ability to generate and dissipate heat.',
    whatIsIt: 'Body temperature reflects the balance between heat produced by metabolic body processes and heat lost to the environment.',
    whyItMatters: 'Monitoring temperature helps detect fever, infection, systemic inflammation, or hypothermia.',
    howMeasured: 'Measured using oral, tympanic (ear), temporal artery, or axillary (underarm) digital thermometers.',
    referenceRanges: [
      { ageGroup: 'Newborn', range: '36.5 – 37.5', unit: '°C', notes: 'Axillary or rectal reading' },
      { ageGroup: 'Infant', range: '36.5 – 37.5', unit: '°C', notes: 'Core body temperature' },
      { ageGroup: 'Child', range: '36.1 – 37.2', unit: '°C' },
      { ageGroup: 'Adolescent', range: '36.1 – 37.2', unit: '°C' },
      { ageGroup: 'Adult', range: '36.1 – 37.2', unit: '°C', min: 36.1, max: 37.2 },
      { ageGroup: 'Older Adult', range: '35.8 – 36.8', unit: '°C', notes: 'Baseline may run lower in older individuals' }
    ],
    highMeaning: 'Fever (hyperthermia) may be associated with viral or bacterial infections, inflammatory conditions, heat exhaustion, or certain medications.',
    lowMeaning: 'Hypothermia may be associated with prolonged cold exposure, hypothyroidism, severe sepsis, or metabolic compromise.',
    factorsAffecting: ['Time of day (circadian rhythm)', 'Physical exercise', 'Ambient room temperature', 'Measurement site (oral vs. axillary)', 'Hormonal fluctuations'],
    whenToSeekCare: 'Seek medical evaluation for high fevers (>38.5°C persistent in adults, or >38.0°C in infants <3 months), fevers accompanied by severe headache, stiff neck, shortness of breath, or confusion.',
    isMeasurableInModal: true,
    disclaimer: 'Oral, rectal, tympanic, and axillary methods yield slightly different normal ranges.'
  },
  {
    id: 'pressure',
    title: 'Blood Pressure',
    category: 'Vital Signs',
    icon: Gauge,
    shortDescription: 'The force exerted by circulating blood against vessel walls.',
    whatIsIt: 'Blood pressure consists of two values: Systolic (peak pressure during heart contraction) over Diastolic (resting pressure between beats).',
    whyItMatters: 'Key cardiovascular indicator used to screen for hypertension, hypotension, and cardiovascular disease risks.',
    howMeasured: 'Measured in mmHg using an upper-arm automated oscillometric monitor or manual sphygmomanometer.',
    referenceRanges: [
      { ageGroup: 'Newborn', range: '60–90 / 20–60', unit: 'mmHg' },
      { ageGroup: 'Infant', range: '85–105 / 35–65', unit: 'mmHg' },
      { ageGroup: 'Child', range: '90–110 / 55–75', unit: 'mmHg' },
      { ageGroup: 'Adolescent', range: '100–120 / 60–80', unit: 'mmHg' },
      { ageGroup: 'Adult', range: 'Under 120 / Under 80', unit: 'mmHg', min: 90, max: 120 },
      { ageGroup: 'Older Adult', range: '120–130 / 70–80', unit: 'mmHg', notes: 'Slightly higher systolic targets may apply' }
    ],
    pregnancyNote: 'Blood pressure is routinely monitored during pregnancy to watch for gestational hypertension or preeclampsia (SBP ≥140 or DBP ≥90).',
    highMeaning: 'Elevated blood pressure (hypertension) may be associated with cardiovascular strain, arterial stiffness, renal disease, stress, or high sodium intake.',
    lowMeaning: 'Low blood pressure (hypotension) may be associated with dehydration, acute blood loss, endocrine dysfunction, prolonged bed rest, or side effects of medications.',
    factorsAffecting: ['Caffeine intake within 30 min', 'Acute mental stress or anxiety ("white coat effect")', 'Full bladder', 'Arm positioning relative to heart level', 'Recent physical activity'],
    whenToSeekCare: 'Seek urgent emergency medical care for BP readings >180/120 mmHg (hypertensive crisis), especially if accompanied by chest pain, shortness of breath, blurred vision, or severe headache.',
    isMeasurableInModal: true,
    disclaimer: 'A single high reading does not diagnose hypertension; multiple clinical measurements over time are required.'
  },
  {
    id: 'heart-rate',
    title: 'Resting Heart Rate',
    category: 'Vital Signs',
    icon: HeartPulse,
    shortDescription: 'The number of heart contractions per minute while fully at rest.',
    whatIsIt: 'Resting heart rate (RHR) measures basal cardiac frequency when a person is seated, quiet, and relaxed.',
    whyItMatters: 'Reflects overall autonomic nervous system balance, cardiorespiratory fitness, and heart muscle efficiency.',
    howMeasured: 'Measured manually via radial pulse check for 60 seconds or automatically via pulse oximeter or ECG.',
    referenceRanges: [
      { ageGroup: 'Newborn', range: '100 – 160', unit: 'bpm' },
      { ageGroup: 'Infant', range: '90 – 150', unit: 'bpm' },
      { ageGroup: 'Child', range: '70 – 110', unit: 'bpm' },
      { ageGroup: 'Adolescent', range: '60 – 100', unit: 'bpm' },
      { ageGroup: 'Adult', range: '60 – 100', unit: 'bpm', min: 60, max: 100, notes: 'Athletes may naturally measure 40–60 bpm' },
      { ageGroup: 'Older Adult', range: '60 – 100', unit: 'bpm' }
    ],
    highMeaning: 'Elevated resting pulse (tachycardia) may be associated with physical exertion, stress, fever, dehydration, caffeine, anemia, thyroid overactivity, or cardiac conditions.',
    lowMeaning: 'Low resting pulse (bradycardia) is common in trained endurance athletes, but may also be associated with heart block, hypothyroidism, or beta-blocker medication.',
    factorsAffecting: ['Aerobic fitness level', 'Hydration status', 'Stress and anxiety', 'Fever or active illness', 'Medications (e.g. beta blockers, stimulants)'],
    whenToSeekCare: 'Consult a physician if you experience persistent resting pulse >100 bpm or <50 bpm accompanied by dizziness, fainting, shortness of breath, or chest pain.',
    relatedCalculatorId: 'target-heart-rate',
    isMeasurableInModal: true,
    disclaimer: 'Heart rate varies continuously throughout the day based on posture, exertion, and emotional state.'
  },
  {
    id: 'spo2',
    title: 'SpO₂ / Oxygen Saturation',
    category: 'Vital Signs',
    icon: Wind,
    shortDescription: 'Percentage of oxygen-saturated hemoglobin relative to total hemoglobin.',
    whatIsIt: 'Oxygen saturation measures how effectively oxygen is being carried from lungs to peripheral tissues by red blood cells.',
    whyItMatters: 'Essential marker for respiratory and pulmonary function, airway patency, and tissue oxygenation.',
    howMeasured: 'Measured non-invasively using a fingertip pulse oximeter utilizing spectrophotometry.',
    referenceRanges: [
      { ageGroup: 'Newborn', range: '95 – 100', unit: '%' },
      { ageGroup: 'Infant', range: '95 – 100', unit: '%' },
      { ageGroup: 'Child', range: '95 – 100', unit: '%' },
      { ageGroup: 'Adolescent', range: '95 – 100', unit: '%' },
      { ageGroup: 'Adult', range: '95 – 100', unit: '%', min: 95, max: 100 },
      { ageGroup: 'Older Adult', range: '94 – 98', unit: '%', notes: 'Slightly lower baseline acceptable in chronic lung disease' }
    ],
    highMeaning: 'High oxygen saturation (99-100%) is typical and expected in healthy individuals breathing ambient room air.',
    lowMeaning: 'Low oxygen saturation (hypoxemia, <95%) may be associated with respiratory infections (pneumonia), asthma exacerbation, COPD, pulmonary embolism, or high altitude.',
    factorsAffecting: ['Dark nail polish or artificial nails', 'Cold hands / poor peripheral circulation', 'Excessive movement during test', 'Carbon monoxide exposure'],
    whenToSeekCare: 'Seek immediate emergency attention for SpO₂ levels consistently below 92%, or if accompanied by severe breathing difficulty, chest tightness, or bluish skin tone.',
    isMeasurableInModal: true,
    disclaimer: 'Pulse oximeters provide estimates and can be affected by skin pigment, low perfusion, or movement.'
  },
  {
    id: 'respiratory-rate',
    title: 'Respiratory Rate',
    category: 'Vital Signs',
    icon: Stethoscope,
    shortDescription: 'Number of breaths taken per minute at rest.',
    whatIsIt: 'Respiratory rate counts full ventilation cycles (one inhalation and one exhalation) per 60 seconds.',
    whyItMatters: 'A vital physiological sign indicating pulmonary function, acid-base homeostasis, and neurological respiratory drive.',
    howMeasured: 'Observed by counting chest rises for 60 seconds while patient is relaxed and unawares.',
    referenceRanges: [
      { ageGroup: 'Newborn', range: '30 – 60', unit: 'breaths/min' },
      { ageGroup: 'Infant', range: '24 – 40', unit: 'breaths/min' },
      { ageGroup: 'Child', range: '18 – 30', unit: 'breaths/min' },
      { ageGroup: 'Adolescent', range: '12 – 16', unit: 'breaths/min' },
      { ageGroup: 'Adult', range: '12 – 20', unit: 'breaths/min', min: 12, max: 20 },
      { ageGroup: 'Older Adult', range: '12 – 24', unit: 'breaths/min' }
    ],
    highMeaning: 'Rapid breathing (tachypnea) may be associated with fever, respiratory infection, anxiety, asthma, hypoxia, metabolic acidosis, or heart failure.',
    lowMeaning: 'Slow breathing (bradypnea) may be associated with narcotic/sedative medication use, central nervous system depression, or metabolic alkalosis.',
    factorsAffecting: ['Awareness of breathing check', 'Physical exertion', 'Anxiety / hyperventilation', 'Pain level'],
    whenToSeekCare: 'Seek emergency evaluation if resting breathing rate exceeds 25 breaths/min or is under 8 breaths/min with shortness of breath, wheezing, or lip cyanosis.',
    isMeasurableInModal: true,
    disclaimer: 'Best measured when unaware to prevent conscious alteration of breathing pattern.'
  },

  // ==========================================
  // 2. COMPLETE BLOOD COUNT (CBC)
  // ==========================================
  {
    id: 'hemoglobin',
    title: 'Hemoglobin (Hb)',
    category: 'Complete Blood Count (CBC)',
    icon: Activity,
    shortDescription: 'Iron-rich protein in red blood cells that transports oxygen.',
    whatIsIt: 'Hemoglobin is the specialized oxygen-binding protein inside red blood cells responsible for delivering oxygen to body tissues.',
    whyItMatters: 'Primary marker used to diagnose anemia, polycythemia, and evaluate oxygen-carrying capacity of blood.',
    howMeasured: 'Measured via venous blood sample as part of a Complete Blood Count (CBC).',
    referenceRanges: [
      { ageGroup: 'Newborn', sex: 'Both', range: '14.5 – 22.5', unit: 'g/dL' },
      { ageGroup: 'Child', sex: 'Both', range: '11.0 – 14.5', unit: 'g/dL' },
      { ageGroup: 'Adult', sex: 'Male', range: '13.8 – 17.2', unit: 'g/dL', min: 13.8, max: 17.2 },
      { ageGroup: 'Adult', sex: 'Female', range: '12.1 – 15.1', unit: 'g/dL', min: 12.1, max: 15.1 },
      { ageGroup: 'Older Adult', sex: 'Male', range: '12.4 – 14.9', unit: 'g/dL' },
      { ageGroup: 'Older Adult', sex: 'Female', range: '11.7 – 13.8', unit: 'g/dL' }
    ],
    pregnancyNote: 'During pregnancy, plasma volume expands significantly, lowering normal target range to ≥11.0 g/dL in 1st/3rd trimesters and ≥10.5 g/dL in 2nd trimester.',
    highMeaning: 'Elevated hemoglobin (erythrocytosis/polycythemia) may be associated with chronic hypoxia, smoking, high altitude residence, dehydration, or bone marrow disorders.',
    lowMeaning: 'Low hemoglobin (anemia) may be associated with iron deficiency, vitamin B12/folate deficiency, chronic blood loss, kidney disease, or hemolysis.',
    factorsAffecting: ['Hydration state (hemoconcentration)', 'High altitude living', 'Carette smoking', 'Pregnancy-induced hemodilution'],
    whenToSeekCare: 'Consult a physician if hemoglobin falls below 10 g/dL or if experiencing severe fatigue, dizziness, pale skin, or shortness of breath.',
    isMeasurableInModal: true,
    disclaimer: 'Normal ranges vary by laboratory and patient gender. Interpret alongside RBC indices.'
  },
  {
    id: 'rbc',
    title: 'Red Blood Cell Count (RBC)',
    category: 'Complete Blood Count (CBC)',
    icon: TestTube2,
    shortDescription: 'Total number of red blood cells (erythrocytes) per microliter of blood.',
    whatIsIt: 'RBC count measures the total number of circulating erythrocytes which carry hemoglobin throughout the body.',
    whyItMatters: 'Evaluates red cell production in bone marrow and identifies anemias or polycythemic disorders.',
    howMeasured: 'Automated flow cytometry or aperture impedance counting in a laboratory CBC analyzer.',
    referenceRanges: [
      { ageGroup: 'Newborn', sex: 'Both', range: '4.8 – 7.1', unit: 'x10^6 / µL' },
      { ageGroup: 'Child', sex: 'Both', range: '4.0 – 5.3', unit: 'x10^6 / µL' },
      { ageGroup: 'Adult', sex: 'Male', range: '4.7 – 6.1', unit: 'x10^6 / µL', min: 4.7, max: 6.1 },
      { ageGroup: 'Adult', sex: 'Female', range: '4.2 – 5.4', unit: 'x10^6 / µL', min: 4.2, max: 5.4 },
      { ageGroup: 'Older Adult', sex: 'Both', range: '3.9 – 5.3', unit: 'x10^6 / µL' }
    ],
    highMeaning: 'High RBC count may be associated with congenital heart disease, COPD, dehydration, sleep apnea, or polycythemia vera.',
    lowMeaning: 'Low RBC count may be associated with nutritional anemia, acute or chronic hemorrhage, bone marrow suppression, or chronic kidney disease.',
    factorsAffecting: ['High altitude exposure', 'Dehydration', 'Heavy smoking'],
    whenToSeekCare: 'Discuss abnormal RBC counts with a medical doctor during routine blood test review.',
    isMeasurableInModal: true
  },
  {
    id: 'wbc',
    title: 'White Blood Cell Count (WBC)',
    category: 'Complete Blood Count (CBC)',
    icon: ShieldCheck,
    shortDescription: 'Total count of immune cells (leukocytes) defending the body.',
    whatIsIt: 'WBC count measures the total number of white blood cells (neutrophils, lymphocytes, monocytes, eosinophils, basophils).',
    whyItMatters: 'Primary indicator of immune system response, active infection, inflammation, or bone marrow disorders.',
    howMeasured: 'Measured as part of a routine automated Complete Blood Count.',
    referenceRanges: [
      { ageGroup: 'Newborn', range: '9.0 – 30.0', unit: 'x10^3 / µL', notes: 'Higher baseline at birth' },
      { ageGroup: 'Infant', range: '6.0 – 17.5', unit: 'x10^3 / µL' },
      { ageGroup: 'Child', range: '5.0 – 14.5', unit: 'x10^3 / µL' },
      { ageGroup: 'Adult', range: '4.5 – 11.0', unit: 'x10^3 / µL', min: 4.5, max: 11.0 },
      { ageGroup: 'Older Adult', range: '3.9 – 10.0', unit: 'x10^3 / µL' }
    ],
    highMeaning: 'Elevated WBC (leukocytosis) may be associated with bacterial infection, physical trauma, severe psychological stress, acute inflammation, or leukemia.',
    lowMeaning: 'Low WBC (leukopenia) may be associated with viral infections, autoimmune conditions, chemotherapy, severe sepsis, or bone marrow dysfunction.',
    factorsAffecting: ['Recent physical exercise', 'Corticosteroid therapy', 'Acute emotional stress', 'Smoking'],
    whenToSeekCare: 'Seek prompt medical advice if WBC is significantly elevated (>15.0) or low (<3.0), especially if accompanied by fever, chills, or sore throat.',
    isMeasurableInModal: true
  },
  {
    id: 'platelets',
    title: 'Platelet Count',
    category: 'Complete Blood Count (CBC)',
    icon: Zap,
    shortDescription: 'Cell fragments essential for blood clotting and wound healing.',
    whatIsIt: 'Platelets (thrombocytes) are small, disk-shaped cell fragments produced in bone marrow that aggregate to form blood clots.',
    whyItMatters: 'Critical for evaluating hemostasis, bleeding risk, and thrombotic risk.',
    howMeasured: 'Counted automatically in a laboratory automated CBC analyzer.',
    referenceRanges: [
      { ageGroup: 'Newborn', range: '150 – 450', unit: 'x10^3 / µL' },
      { ageGroup: 'Child', range: '150 – 450', unit: 'x10^3 / µL' },
      { ageGroup: 'Adult', range: '150 – 450', unit: 'x10^3 / µL', min: 150, max: 450 },
      { ageGroup: 'Older Adult', range: '140 – 400', unit: 'x10^3 / µL' }
    ],
    highMeaning: 'High platelets (thrombocytosis) may be associated with acute inflammation, iron deficiency, infection, tissue trauma, or essential thrombocythemia.',
    lowMeaning: 'Low platelets (thrombocytopenia) may be associated with viral infections, autoimmune destruction (ITP), liver disease, medication side effects, or bone marrow disorders.',
    factorsAffecting: ['Recent intense exercise', 'High altitude', 'Certain medications (aspirin, heparin)'],
    whenToSeekCare: 'Seek care for platelet counts <50,000 /µL or if experiencing unexpected bruising, petechiae (small red spots), or prolonged bleeding.',
    isMeasurableInModal: true
  },
  {
    id: 'hematocrit',
    title: 'Hematocrit (Hct)',
    category: 'Complete Blood Count (CBC)',
    icon: Scale,
    shortDescription: 'Percentage of total blood volume occupied by red blood cells.',
    whatIsIt: 'Hematocrit measures the proportion of blood made up of red cells following centrifugation.',
    whyItMatters: 'Complements hemoglobin to evaluate hydration, anemia, and red cell concentration.',
    howMeasured: 'Centrifugation or micro-hematocrit calculation based on RBC count and MCV.',
    referenceRanges: [
      { ageGroup: 'Newborn', sex: 'Both', range: '44 – 64', unit: '%' },
      { ageGroup: 'Child', sex: 'Both', range: '35 – 45', unit: '%' },
      { ageGroup: 'Adult', sex: 'Male', range: '41 – 50', unit: '%', min: 41, max: 50 },
      { ageGroup: 'Adult', sex: 'Female', range: '36 – 44', unit: '%', min: 36, max: 44 },
      { ageGroup: 'Older Adult', sex: 'Both', range: '37 – 48', unit: '%' }
    ],
    highMeaning: 'High hematocrit indicates hemoconcentration due to dehydration, or red cell overproduction (polycythemia).',
    lowMeaning: 'Low hematocrit indicates anemia or fluid overload (hemodilution).',
    factorsAffecting: ['Dehydration status', 'Living at high altitude', 'Recent blood loss'],
    whenToSeekCare: 'Discuss abnormal levels with your healthcare provider alongside hemoglobin.',
    isMeasurableInModal: true
  },
  {
    id: 'mcv',
    title: 'Mean Corpuscular Volume (MCV)',
    category: 'Complete Blood Count (CBC)',
    icon: Microscope,
    shortDescription: 'Average physical size/volume of individual red blood cells.',
    whatIsIt: 'MCV measures the average size of red blood cells in femtoliters (fL).',
    whyItMatters: 'Classifies anemias into microcytic (small), normocytic (normal), or macrocytic (large).',
    howMeasured: 'Calculated in CBC analyzers (Hct ÷ RBC count).',
    referenceRanges: [
      { ageGroup: 'Newborn', range: '96 – 108', unit: 'fL' },
      { ageGroup: 'Child', range: '75 – 90', unit: 'fL' },
      { ageGroup: 'Adult', range: '80 – 100', unit: 'fL', min: 80, max: 100 },
      { ageGroup: 'Older Adult', range: '81 – 101', unit: 'fL' }
    ],
    highMeaning: 'High MCV (macrocytosis, >100 fL) may be associated with Vitamin B12 deficiency, Folate deficiency, liver disease, or alcohol intake.',
    lowMeaning: 'Low MCV (microcytosis, <80 fL) may be associated with Iron deficiency anemia or Thalassemia trait.',
    factorsAffecting: ['Reticulocytosis (new large RBCs)', 'Alcohol consumption', 'Thyroid disorders'],
    whenToSeekCare: 'Evaluated by a doctor when investigating causes of anemia.',
    isMeasurableInModal: true
  },
  {
    id: 'mch',
    title: 'Mean Corpuscular Hemoglobin (MCH)',
    category: 'Complete Blood Count (CBC)',
    icon: TestTube2,
    shortDescription: 'Average amount of hemoglobin per single red blood cell.',
    whatIsIt: 'MCH calculates the average mass of hemoglobin inside each red cell in picograms (pg).',
    whyItMatters: 'Helps characterize cell color and hemoglobin content in anemias.',
    howMeasured: 'Calculated in CBC: (Hemoglobin ÷ RBC count) × 10.',
    referenceRanges: [
      { ageGroup: 'Newborn', range: '32 – 34', unit: 'pg' },
      { ageGroup: 'Child', range: '25 – 31', unit: 'pg' },
      { ageGroup: 'Adult', range: '27 – 33', unit: 'pg', min: 27, max: 33 }
    ],
    highMeaning: 'High MCH mirrors macrocytosis (large red cells carrying more absolute Hb).',
    lowMeaning: 'Low MCH (hypochromia) reflects impaired hemoglobin synthesis (e.g. iron deficiency).',
    factorsAffecting: ['Co-existing B12/Folate and Iron deficiencies'],
    whenToSeekCare: 'Interpreted in conjunction with MCV and MCHC.'
  },
  {
    id: 'mchc',
    title: 'Mean Corpuscular Hemoglobin Concentration (MCHC)',
    category: 'Complete Blood Count (CBC)',
    icon: Activity,
    shortDescription: 'Average concentration of hemoglobin in a given volume of red cells.',
    whatIsIt: 'MCHC measures the average concentration of hemoglobin within red cells relative to cell volume.',
    whyItMatters: 'Evaluates hypochromia and hyperchromia in red cell disorders.',
    howMeasured: 'Calculated in CBC: (Hemoglobin ÷ Hematocrit) × 100.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '32 – 36', unit: 'g/dL', min: 32, max: 36 }
    ],
    highMeaning: 'High MCHC (>36 g/dL) is rare; may indicate hereditary spherocytosis or cold agglutinin red cell clumping.',
    lowMeaning: 'Low MCHC (<32 g/dL) indicates hypochromic red cells seen in severe iron deficiency or hemoglobinopathies.',
    factorsAffecting: ['Lipemia or high triglycerides interfering with lab spectrophotometry']
  },
  {
    id: 'rdw',
    title: 'Red Cell Distribution Width (RDW)',
    category: 'Complete Blood Count (CBC)',
    icon: Sparkles,
    shortDescription: 'Measures variation in size (anisocytosis) among red blood cells.',
    whatIsIt: 'RDW indicates how uniform red blood cells are in size. A high RDW means wide cell size variation.',
    whyItMatters: 'Helps differentiate iron deficiency anemia (high RDW) from thalassemia trait (often normal RDW).',
    howMeasured: 'Standard deviation of RBC volume divided by MCV in automated CBC.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '11.5 – 14.5', unit: '%', min: 11.5, max: 14.5 }
    ],
    highMeaning: 'High RDW indicates mixed red cell sizes, commonly associated with early iron, B12, or folate deficiency, or recent blood transfusion.',
    lowMeaning: 'Low RDW indicates highly uniform red cell size and is generally clinically normal.'
  },
  {
    id: 'neutrophils',
    title: 'Neutrophils (Absolute & %)',
    category: 'Complete Blood Count (CBC)',
    icon: ShieldCheck,
    shortDescription: 'Primary white blood cells defending against bacterial infections.',
    whatIsIt: 'Neutrophils are the most abundant leukocyte type, acting as first responders to acute tissue damage and bacterial invasion.',
    whyItMatters: 'Essential marker for acute bacterial infection, neutrophil-driven inflammation, or neutropenia risks.',
    howMeasured: 'Reported in WBC differential as percentage (%) and Absolute Neutrophil Count (ANC in x10^3/µL).',
    referenceRanges: [
      { ageGroup: 'Adult', sex: 'Both', range: '2.0 – 7.0 (40 – 60%)', unit: 'x10^3 / µL', min: 2.0, max: 7.0 }
    ],
    highMeaning: 'High neutrophils (neutrophilia) may be associated with acute bacterial infection, tissue trauma, physical stress, or steroid use.',
    lowMeaning: 'Low neutrophils (neutropenia, ANC <1.5) increases vulnerability to opportunistic bacterial infections; associated with viral infections, chemotherapy, or bone marrow suppression.',
    whenToSeekCare: 'Fever in a person with known low ANC (<1.0) requires urgent emergency evaluation.'
  },
  {
    id: 'lymphocytes',
    title: 'Lymphocytes (Absolute & %)',
    category: 'Complete Blood Count (CBC)',
    icon: ShieldCheck,
    shortDescription: 'Immune cells (T-cells, B-cells, NK cells) fighting viral infections.',
    whatIsIt: 'Lymphocytes mediate adaptive immunity and produce targeted antibodies against viruses and pathogens.',
    whyItMatters: 'Key marker in evaluating viral illnesses, chronic immune conditions, and lymphoid disorders.',
    howMeasured: 'WBC differential reported in x10^3 / µL and % of total WBC.',
    referenceRanges: [
      { ageGroup: 'Child', range: '3.0 – 9.5 (50 – 70%)', unit: 'x10^3 / µL' },
      { ageGroup: 'Adult', range: '1.0 – 3.0 (20 – 40%)', unit: 'x10^3 / µL', min: 1.0, max: 3.0 }
    ],
    highMeaning: 'Elevated lymphocytes (lymphocytosis) may be associated with acute viral infections (mononucleosis, hepatitis), pertussis, or chronic lymphocytic leukemia.',
    lowMeaning: 'Low lymphocytes (lymphopenia) may be associated with corticosteroid therapy, acute severe viral illness, HIV infection, or immunodeficiency conditions.'
  },
  {
    id: 'monocytes',
    title: 'Monocytes (Absolute & %)',
    category: 'Complete Blood Count (CBC)',
    icon: ShieldCheck,
    shortDescription: 'Phagocytic cells that clear debris and fight chronic infections.',
    whatIsIt: 'Monocytes circulate in blood before differentiating into macrophages in tissues to engulf pathogens and cellular debris.',
    whyItMatters: 'Evaluates response to subacute or chronic inflammatory processes.',
    howMeasured: 'WBC differential count.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '0.2 – 0.8 (2 – 8%)', unit: 'x10^3 / µL', min: 0.2, max: 0.8 }
    ],
    highMeaning: 'High monocytes (monocytosis) may be associated with chronic infections (tuberculosis, endocarditis), autoimmune disorders, or recovery phase of acute infection.',
    lowMeaning: 'Low monocytes are rare and may occur with bone marrow failure or immunosuppressive therapy.'
  },
  {
    id: 'eosinophils',
    title: 'Eosinophils (Absolute & %)',
    category: 'Complete Blood Count (CBC)',
    icon: ShieldCheck,
    shortDescription: 'Leukocytes active in allergic reactions and parasite defense.',
    whatIsIt: 'Eosinophils release specialized granules to combat parasitic infections and regulate allergic inflammatory responses.',
    whyItMatters: 'Key marker for allergic asthma, drug reactions, atopic diseases, and parasitic infections.',
    howMeasured: 'WBC differential count.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '0.0 – 0.5 (1 – 4%)', unit: 'x10^3 / µL', min: 0.0, max: 0.5 }
    ],
    highMeaning: 'High eosinophils (eosinophilia) may be associated with allergic asthma, eczema, seasonal allergies, drug hypersensitivity, or parasitic infections.',
    lowMeaning: 'Low eosinophils are generally considered clinically normal.'
  },
  {
    id: 'basophils',
    title: 'Basophils (Absolute & %)',
    category: 'Complete Blood Count (CBC)',
    icon: ShieldCheck,
    shortDescription: 'Granulocytes containing histamine involved in hypersensitivity.',
    whatIsIt: 'Basophils release histamine and heparin during hypersensitivity reactions and inflammatory responses.',
    whyItMatters: 'Evaluates allergic responses and myeloproliferative disorders.',
    howMeasured: 'WBC differential count.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '0.0 – 0.2 (0.5 – 1%)', unit: 'x10^3 / µL', min: 0.0, max: 0.2 }
    ],
    highMeaning: 'High basophils (basophilia) may be associated with severe allergic responses, chronic inflammation, or myeloproliferative neoplasms (e.g. CML).',
    lowMeaning: 'Low basophils are non-specific and generally clinically normal.'
  },

  // ==========================================
  // 3. BLOOD CHEMISTRY
  // ==========================================
  {
    id: 'fasting-glucose',
    title: 'Fasting Blood Glucose',
    category: 'Blood Chemistry',
    icon: TestTube2,
    shortDescription: 'Concentration of glucose in blood after an overnight fast.',
    whatIsIt: 'Measures circulating blood sugar levels after abstaining from calorie intake for at least 8 hours.',
    whyItMatters: 'Primary screening parameter for diabetes mellitus, impaired fasting glucose, and hypoglycemia.',
    howMeasured: 'Venous plasma draw or fingerstick glucose meter following fast.',
    referenceRanges: [
      { ageGroup: 'Child', range: '70 – 100', unit: 'mg/dL' },
      { ageGroup: 'Adult', range: '70 – 99', unit: 'mg/dL', min: 70, max: 99, notes: 'Normal fasting glucose: 70-99 mg/dL' },
      { ageGroup: 'Older Adult', range: '70 – 105', unit: 'mg/dL' }
    ],
    highMeaning: 'Elevated fasting glucose (100–125 mg/dL = Prediabetes; ≥126 mg/dL = Diabetes threshold) may be associated with insulin resistance, acute illness, stress, or endocrine disorders.',
    lowMeaning: 'Low fasting glucose (<70 mg/dL, hypoglycemia) may be associated with excessive insulin/diabetic medications, prolonged starvation, liver failure, or adrenal insufficiency.',
    factorsAffecting: ['Length of fast', 'Acute physical or emotional stress', 'Recent carbohydrate intake', 'Medications (corticosteroids, beta blockers)'],
    whenToSeekCare: 'Seek urgent medical evaluation for glucose <55 mg/dL or persistent fasting glucose ≥126 mg/dL.',
    isMeasurableInModal: true
  },
  {
    id: 'hba1c-chem',
    title: 'HbA1c (Glycated Hemoglobin)',
    category: 'Blood Chemistry',
    icon: LineChart,
    shortDescription: 'Measures average blood sugar levels over the past 2–3 months.',
    whatIsIt: 'HbA1c measures the percentage of hemoglobin coated with glucose, reflecting long-term glycemic control.',
    whyItMatters: 'Gold standard metric for diagnosing diabetes and monitoring long-term glycemic control.',
    howMeasured: 'Venous blood sample analyzed via HPLC or immunoassay.',
    referenceRanges: [
      { ageGroup: 'Adult', range: 'Under 5.7', unit: '%', min: 4.0, max: 5.7, notes: '5.7–6.4%: Prediabetes; ≥6.5%: Diabetes' }
    ],
    highMeaning: 'HbA1c ≥5.7% indicates elevated average blood sugar; values ≥6.5% meet the clinical diagnostic threshold for diabetes mellitus.',
    lowMeaning: 'Low HbA1c (<4.5%) is uncommon; may occur in conditions shortening red blood cell lifespan (hemolytic anemia, recent blood transfusion).',
    factorsAffecting: ['Hemoglobin variants (sickle cell trait)', 'Anemia or iron deficiency', 'Recent blood transfusions', 'Pregnancy'],
    whenToSeekCare: 'Discuss HbA1c results with a primary care physician to tailor diet, exercise, or glycemic management.'
  },
  {
    id: 'total-protein',
    title: 'Total Protein',
    category: 'Blood Chemistry',
    icon: TestTube2,
    shortDescription: 'Total concentration of albumin and globulin proteins in plasma.',
    whatIsIt: 'Total Protein evaluates the combined concentration of the two major blood protein classes: albumin and globulins.',
    whyItMatters: 'Assesses nutritional status, liver synthetic capacity, kidney function, and plasma volume.',
    howMeasured: 'Serum chemistry panel.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '6.0 – 8.3', unit: 'g/dL', min: 6.0, max: 8.3 }
    ],
    highMeaning: 'High total protein may be associated with chronic inflammation, chronic infections (hepatitis C), dehydration, or plasma cell disorders (multiple myeloma).',
    lowMeaning: 'Low total protein may be associated with severe malnourishment, malabsorption, liver dysfunction, or protein-losing nephropathy/enteropathy.'
  },
  {
    id: 'albumin',
    title: 'Albumin',
    category: 'Blood Chemistry',
    icon: TestTube2,
    shortDescription: 'Major plasma protein produced by the liver maintaining oncotic pressure.',
    whatIsIt: 'Albumin accounts for over 50% of total plasma protein, regulating fluid balance and transporting hormones, vitamins, and drugs.',
    whyItMatters: 'Key marker for liver synthetic function, kidney excretion, and nutritional state.',
    howMeasured: 'Venous blood serum chemistry panel.',
    referenceRanges: [
      { ageGroup: 'Child', range: '3.8 – 5.4', unit: 'g/dL' },
      { ageGroup: 'Adult', range: '3.5 – 5.0', unit: 'g/dL', min: 3.5, max: 5.0 },
      { ageGroup: 'Older Adult', range: '3.2 – 4.8', unit: 'g/dL' }
    ],
    highMeaning: 'High albumin is almost exclusively associated with significant dehydration (hemoconcentration).',
    lowMeaning: 'Low albumin (hypoalbuminemia) may be associated with liver disease, nephrotic syndrome, systemic inflammation, severe burn injury, or malnutrition.'
  },
  {
    id: 'total-bilirubin',
    title: 'Total Bilirubin',
    category: 'Blood Chemistry',
    icon: Eye,
    shortDescription: 'Yellow pigment byproduct of normal red blood cell breakdown.',
    whatIsIt: 'Bilirubin is formed when heme from aged red blood cells is broken down, processed by the liver, and excreted in bile.',
    whyItMatters: 'Screens for liver dysfunction, bile duct obstruction, and red blood cell hemolysis.',
    howMeasured: 'Serum blood test.',
    referenceRanges: [
      { ageGroup: 'Newborn', range: '1.0 – 12.0', unit: 'mg/dL', notes: 'Neonatal physiological jaundice baseline' },
      { ageGroup: 'Adult', range: '0.1 – 1.2', unit: 'mg/dL', min: 0.1, max: 1.2 }
    ],
    highMeaning: 'High total bilirubin (hyperbilirubinemia, >2.0 mg/dL causing jaundice) may be associated with liver inflammation, gallstones, bile duct blockages, or excessive RBC destruction.',
    lowMeaning: 'Low bilirubin levels are generally considered clinically benign.'
  },
  {
    id: 'direct-bilirubin',
    title: 'Direct (Conjugated) Bilirubin',
    category: 'Blood Chemistry',
    icon: Eye,
    shortDescription: 'Bilirubin that has been processed and water-solubilized by the liver.',
    whatIsIt: 'Direct bilirubin has been conjugated with glucuronic acid in liver cells, rendering it water-soluble for biliary excretion.',
    whyItMatters: 'Differentiates liver/biliary tract disease from pre-hepatic hemolysis.',
    howMeasured: 'Serum blood chemistry panel.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '0.0 – 0.3', unit: 'mg/dL', min: 0.0, max: 0.3 }
    ],
    highMeaning: 'Elevated direct bilirubin indicates impaired bile flow (cholestasis, gallstones, hepatitis, liver cirrhosis).',
    lowMeaning: 'Low levels are clinically normal.'
  },
  {
    id: 'creatinine',
    title: 'Creatinine',
    category: 'Blood Chemistry',
    icon: Activity,
    shortDescription: 'Waste product from normal muscle breakdown excreted by kidneys.',
    whatIsIt: 'Creatinine is produced at a steady rate from muscle creatine metabolism and filtered out of blood by renal glomeruli.',
    whyItMatters: 'Primary serum biomarker used to estimate kidney filtration efficiency.',
    howMeasured: 'Serum blood chemistry test.',
    referenceRanges: [
      { ageGroup: 'Child', sex: 'Both', range: '0.3 – 0.7', unit: 'mg/dL' },
      { ageGroup: 'Adult', sex: 'Male', range: '0.7 – 1.3', unit: 'mg/dL', min: 0.7, max: 1.3 },
      { ageGroup: 'Adult', sex: 'Female', range: '0.6 – 1.1', unit: 'mg/dL', min: 0.6, max: 1.1 },
      { ageGroup: 'Older Adult', sex: 'Both', range: '0.6 – 1.2', unit: 'mg/dL' }
    ],
    highMeaning: 'Elevated creatinine may be associated with reduced kidney function (acute kidney injury or chronic renal disease), urinary tract obstruction, severe dehydration, or high muscle mass / creatine supplementation.',
    lowMeaning: 'Low creatinine may be associated with low muscle mass, advanced age, severe liver disease, or malnutrition.',
    isMeasurableInModal: true
  },
  {
    id: 'bun',
    title: 'Blood Urea Nitrogen (BUN) / Urea',
    category: 'Blood Chemistry',
    icon: TestTube2,
    shortDescription: 'Nitrogenous waste product from protein breakdown in the liver.',
    whatIsIt: 'BUN measures the amount of urea nitrogen in blood, produced during dietary and cellular protein metabolism.',
    whyItMatters: 'Evaluates renal excretory function, fluid status, and protein intake.',
    howMeasured: 'Serum chemistry panel.',
    referenceRanges: [
      { ageGroup: 'Child', range: '7 – 18', unit: 'mg/dL' },
      { ageGroup: 'Adult', range: '7 – 20', unit: 'mg/dL', min: 7, max: 20 },
      { ageGroup: 'Older Adult', range: '8 – 23', unit: 'mg/dL' }
    ],
    highMeaning: 'High BUN (azotemia) may be associated with kidney impairment, dehydration, gastrointestinal bleeding, heart failure, or high-protein diets.',
    lowMeaning: 'Low BUN may be associated with low-protein diets, severe liver disease, overhydration, or pregnancy.'
  },
  {
    id: 'uric-acid',
    title: 'Uric Acid',
    category: 'Blood Chemistry',
    icon: Activity,
    shortDescription: 'Waste product from the breakdown of purines in foods and body cells.',
    whatIsIt: 'Uric acid is generated when the body breaks down purine compounds found in certain foods and nucleic acids.',
    whyItMatters: 'Primary risk factor for gout (uric acid crystal arthritis) and kidney stone formation.',
    howMeasured: 'Venous blood test.',
    referenceRanges: [
      { ageGroup: 'Adult', sex: 'Male', range: '3.4 – 7.0', unit: 'mg/dL', min: 3.4, max: 7.0 },
      { ageGroup: 'Adult', sex: 'Female', range: '2.4 – 6.0', unit: 'mg/dL', min: 2.4, max: 6.0 }
    ],
    highMeaning: 'Elevated uric acid (hyperuricemia, >7.0 mg/dL) increases risk for gouty arthritis, kidney stones, metabolic syndrome, and kidney dysfunction.',
    lowMeaning: 'Low uric acid is uncommon; may occur with Wilson disease, SIADH, low purine intake, or medications (allopurinol).'
  },
  {
    id: 'sodium',
    title: 'Sodium',
    category: 'Blood Chemistry',
    icon: Droplets,
    shortDescription: 'Primary extracellular electrolyte regulating fluid balance and nerve impulses.',
    whatIsIt: 'Sodium is the dominant cation in extracellular fluid, controlling osmotic pressure, fluid distribution, and electrical signaling.',
    whyItMatters: 'Essential for maintaining blood volume, blood pressure, and neuromuscular signaling.',
    howMeasured: 'Serum electrolyte panel.',
    referenceRanges: [
      { ageGroup: 'Newborn', range: '133 – 146', unit: 'mEq/L' },
      { ageGroup: 'Adult', range: '135 – 145', unit: 'mEq/L', min: 135, max: 145 }
    ],
    highMeaning: 'High sodium (hypernatremia, >145 mEq/L) is usually associated with severe dehydration, excessive water loss, or diabetes insipidus.',
    lowMeaning: 'Low sodium (hyponatremia, <135 mEq/L) may be associated with fluid retention, heart failure, diuretic medication, kidney disease, or SIADH.'
  },
  {
    id: 'potassium',
    title: 'Potassium',
    category: 'Blood Chemistry',
    icon: Zap,
    shortDescription: 'Critical intracellular electrolyte controlling cardiac rhythm and muscle contraction.',
    whatIsIt: 'Potassium is the major intracellular electrolyte, regulating cell membrane electrical potential, heart rhythm, and nerve conduction.',
    whyItMatters: 'Tight regulation is critical; both high and low levels can cause dangerous heart arrhythmias.',
    howMeasured: 'Serum or plasma electrolyte test.',
    referenceRanges: [
      { ageGroup: 'Newborn', range: '3.7 – 5.9', unit: 'mEq/L' },
      { ageGroup: 'Adult', range: '3.5 – 5.0', unit: 'mEq/L', min: 3.5, max: 5.0 }
    ],
    highMeaning: 'Elevated potassium (hyperkalemia, >5.0 mEq/L) may be associated with renal failure, ACE inhibitors/ARBs, cell breakdown, or tissue trauma.',
    lowMeaning: 'Low potassium (hypokalemia, <3.5 mEq/L) may be associated with diuretic use, vomiting, diarrhea, hyperaldosteronism, or inadequate dietary intake.',
    whenToSeekCare: 'Potassium levels <3.0 or >6.0 mEq/L represent critical lab values requiring immediate medical emergency care.'
  },
  {
    id: 'calcium',
    title: 'Calcium',
    category: 'Blood Chemistry',
    icon: ShieldCheck,
    shortDescription: 'Essential mineral for bone strength, blood clotting, and nerve signaling.',
    whatIsIt: 'Measures total serum calcium (bound to albumin and ionized/free calcium).',
    whyItMatters: 'Evaluates bone metabolism, parathyroid gland function, and kidney disease.',
    howMeasured: 'Serum chemistry panel.',
    referenceRanges: [
      { ageGroup: 'Child', range: '8.8 – 10.8', unit: 'mg/dL' },
      { ageGroup: 'Adult', range: '8.5 – 10.2', unit: 'mg/dL', min: 8.5, max: 10.2 }
    ],
    highMeaning: 'High calcium (hypercalcemia) may be associated with hyperparathyroidism, vitamin D toxicity, or bone malignancy.',
    lowMeaning: 'Low calcium (hypocalcemia) may be associated with vitamin D deficiency, hypoparathyroidism, renal failure, or low serum albumin.'
  },
  {
    id: 'chloride',
    title: 'Chloride',
    category: 'Blood Chemistry',
    icon: Droplets,
    shortDescription: 'Major anion in extracellular fluid maintaining acid-base equilibrium.',
    whatIsIt: 'Chloride works closely with sodium and bicarbonate to maintain cellular electrical neutrality and systemic pH.',
    whyItMatters: 'Evaluates electrolyte imbalances and acid-base disturbances.',
    howMeasured: 'Serum electrolyte panel.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '96 – 106', unit: 'mEq/L', min: 96, max: 106 }
    ],
    highMeaning: 'High chloride (hyperchloremia) may be associated with dehydration, kidney dysfunction, or metabolic acidosis.',
    lowMeaning: 'Low chloride (hypochloremia) may be associated with prolonged vomiting, diuretic therapy, or respiratory acidosis.'
  },
  {
    id: 'bicarbonate',
    title: 'Bicarbonate / CO₂',
    category: 'Blood Chemistry',
    icon: Wind,
    shortDescription: 'Primary chemical buffer maintaining physiological blood pH.',
    whatIsIt: 'Bicarbonate (measured as total CO₂ in venous blood) acts as the principal chemical buffer preventing blood from becoming too acidic or basic.',
    whyItMatters: 'Key component of metabolic acid-base status.',
    howMeasured: 'Serum chemistry panel (Total CO₂).',
    referenceRanges: [
      { ageGroup: 'Adult', range: '22 – 29', unit: 'mEq/L', min: 22, max: 29 }
    ],
    highMeaning: 'High bicarbonate indicates metabolic alkalosis (vomiting, diuretic excess) or respiratory compensation for chronic lung disease.',
    lowMeaning: 'Low bicarbonate indicates metabolic acidosis (diabetic ketoacidosis, chronic renal failure, severe diarrhea).'
  },
  {
    id: 'magnesium-chem',
    title: 'Magnesium',
    category: 'Blood Chemistry',
    icon: Zap,
    shortDescription: 'Cation involved in 300+ enzymatic reactions, nerve function, and ATP energy production.',
    whatIsIt: 'Magnesium is an essential mineral required for enzymatic phosphorylation, muscle relaxation, and nucleic acid synthesis.',
    whyItMatters: 'Evaluates neuromuscular irritability, cardiac stability, and electrolyte homeostasis.',
    howMeasured: 'Serum chemistry test.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '1.7 – 2.2', unit: 'mg/dL', min: 1.7, max: 2.2 }
    ],
    highMeaning: 'High magnesium (hypermagnesemia) may be associated with renal failure or excessive antacid/laxative intake.',
    lowMeaning: 'Low magnesium (hypomagnesemia) may be associated with chronic alcoholism, malabsorption, diuretic use, or chronic diarrhea.'
  },
  {
    id: 'phosphorus-chem',
    title: 'Phosphorus (Phosphate)',
    category: 'Blood Chemistry',
    icon: ShieldCheck,
    shortDescription: 'Mineral key for bone structure, cellular energy (ATP), and cell membranes.',
    whatIsIt: 'Phosphorus works synergistically with calcium to build bone mass and generate cellular ATP energy.',
    whyItMatters: 'Monitored closely in kidney disease, parathyroid disorders, and bone disease.',
    howMeasured: 'Serum chemistry panel.',
    referenceRanges: [
      { ageGroup: 'Child', range: '4.0 – 7.0', unit: 'mg/dL', notes: 'Higher during periods of active bone growth' },
      { ageGroup: 'Adult', range: '2.5 – 4.5', unit: 'mg/dL', min: 2.5, max: 4.5 }
    ],
    highMeaning: 'High phosphorus (hyperphosphatemia) is most commonly caused by end-stage renal disease or hypoparathyroidism.',
    lowMeaning: 'Low phosphorus (hypophosphatemia) may be associated with hyperparathyroidism, vitamin D deficiency, or refeeding syndrome.'
  },

  // ==========================================
  // 4. LIVER FUNCTION TESTS
  // ==========================================
  {
    id: 'alt',
    title: 'ALT / SGPT (Alanine Aminotransferase)',
    category: 'Liver Function',
    icon: Stethoscope,
    shortDescription: 'Enzyme primarily localized in liver cells released upon hepatocellular injury.',
    whatIsIt: 'ALT is an enzyme found mostly inside liver hepatocytes that catalyzes amino acid metabolism.',
    whyItMatters: 'Highly specific indicator of acute liver cell damage or inflammation.',
    howMeasured: 'Standard serum liver function test (LFT) panel.',
    referenceRanges: [
      { ageGroup: 'Adult', sex: 'Male', range: '7 – 55', unit: 'U/L', min: 7, max: 55 },
      { ageGroup: 'Adult', sex: 'Female', range: '7 – 45', unit: 'U/L', min: 7, max: 45 }
    ],
    highMeaning: 'Elevated ALT may be associated with viral hepatitis, fatty liver disease (MASLD/NAFLD), alcohol-induced liver injury, gallstones, or medication hepatotoxicity.',
    lowMeaning: 'Low ALT values are generally considered normal and expected.',
    disclaimer: 'Healthcare professionals interpret ALT alongside AST, ALP, bilirubin, and clinical history.'
  },
  {
    id: 'ast',
    title: 'AST / SGOT (Aspartate Aminotransferase)',
    category: 'Liver Function',
    icon: Stethoscope,
    shortDescription: 'Enzyme found in liver, heart, skeletal muscle, and kidneys.',
    whatIsIt: 'AST is an enzyme involved in amino acid metabolism present in liver cells as well as cardiac muscle and red blood cells.',
    whyItMatters: 'Evaluates liver parenchymal damage and muscle trauma when compared with ALT.',
    howMeasured: 'Serum LFT panel.',
    referenceRanges: [
      { ageGroup: 'Adult', sex: 'Male', range: '8 – 48', unit: 'U/L', min: 8, max: 48 },
      { ageGroup: 'Adult', sex: 'Female', range: '8 – 43', unit: 'U/L', min: 8, max: 43 }
    ],
    highMeaning: 'Elevated AST may be associated with acute hepatitis, alcoholic liver disease (AST:ALT ratio often >2), strenuous muscle exercise, or cardiac injury.',
    lowMeaning: 'Low AST is clinically normal.'
  },
  {
    id: 'alp',
    title: 'ALP (Alkaline Phosphatase)',
    category: 'Liver Function',
    icon: Stethoscope,
    shortDescription: 'Enzyme located in bile ducts and bone tissue.',
    whatIsIt: 'Alkaline phosphatase is an enzyme associated with the cell membranes lining bile canaliculi and osteoblasts in bone.',
    whyItMatters: 'Primary marker for biliary tract obstruction (cholestasis) and bone remodeling.',
    howMeasured: 'Serum LFT panel.',
    referenceRanges: [
      { ageGroup: 'Child', range: '140 – 420', unit: 'U/L', notes: 'Elevated during active childhood bone development' },
      { ageGroup: 'Adult', range: '40 – 129', unit: 'U/L', min: 40, max: 129 }
    ],
    pregnancyNote: 'Placental ALP production causes normal elevations during the 3rd trimester of pregnancy.',
    highMeaning: 'High ALP may be associated with gallstones, bile duct obstruction, liver disease, Paget’s bone disease, or healing bone fractures.',
    lowMeaning: 'Low ALP may occur with zinc deficiency, malnutrition, or hypophosphatasia.'
  },
  {
    id: 'ggt',
    title: 'GGT (Gamma-Glutamyl Transferase)',
    category: 'Liver Function',
    icon: Stethoscope,
    shortDescription: 'Biliary enzyme sensitive to alcohol consumption and bile duct disease.',
    whatIsIt: 'GGT is a microsomal enzyme found in liver cell membranes and biliary epithelial cells.',
    whyItMatters: 'Confirms whether elevated ALP originates from the liver (biliary system) rather than bone.',
    howMeasured: 'Serum blood test.',
    referenceRanges: [
      { ageGroup: 'Adult', sex: 'Male', range: '8 – 61', unit: 'U/L', min: 8, max: 61 },
      { ageGroup: 'Adult', sex: 'Female', range: '5 – 36', unit: 'U/L', min: 5, max: 36 }
    ],
    highMeaning: 'Elevated GGT may be associated with heavy alcohol consumption, cholestasis, fatty liver, pancreatic disease, or enzyme-inducing drugs (e.g., anticonvulsants).',
    lowMeaning: 'Low GGT levels are clinically normal.'
  },
  {
    id: 'bilirubin-liver',
    title: 'Bilirubin (Liver Function)',
    category: 'Liver Function',
    icon: Eye,
    shortDescription: 'Measures total, direct, and indirect clearance of hemoglobin breakdown products.',
    whatIsIt: 'Assesses the liver’s capacity to conjugate and clear breakdown products of heme into bile.',
    whyItMatters: 'Essential for evaluating jaundice and hepatic excretory function.',
    howMeasured: 'Serum liver panel.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '0.1 – 1.2', unit: 'mg/dL', min: 0.1, max: 1.2 }
    ],
    highMeaning: 'High values suggest hepatitis, cirrhosis, biliary blockage, or hemolysis.',
    lowMeaning: 'Normal finding.'
  },
  {
    id: 'albumin-liver',
    title: 'Albumin (Liver Synthetic)',
    category: 'Liver Function',
    icon: TestTube2,
    shortDescription: 'Primary serum protein synthesized exclusively by hepatocytes.',
    whatIsIt: 'Measures the liver’s long-term synthetic capacity over weeks.',
    whyItMatters: 'Declines in chronic liver disease (cirrhosis) or severe hepatic failure.',
    howMeasured: 'Serum LFT panel.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '3.5 – 5.0', unit: 'g/dL', min: 3.5, max: 5.0 }
    ],
    highMeaning: 'Associated with hemoconcentration/dehydration.',
    lowMeaning: 'May indicate chronic liver failure, cirrhosis, or malnutrition.'
  },
  {
    id: 'total-protein-liver',
    title: 'Total Protein (Liver Function)',
    category: 'Liver Function',
    icon: TestTube2,
    shortDescription: 'Combined measurement of liver-synthesized proteins and globulins.',
    whatIsIt: 'Reflects total serum protein balance, combining albumin and globulins.',
    whyItMatters: 'Provides systemic context for liver synthetic health and immune globulins.',
    howMeasured: 'Serum LFT panel.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '6.0 – 8.3', unit: 'g/dL', min: 6.0, max: 8.3 }
    ],
    highMeaning: 'High levels may reflect chronic liver inflammation or autoimmune disease.',
    lowMeaning: 'Low levels suggest impaired liver protein synthesis or malabsorption.'
  },

  // ==========================================
  // 5. KIDNEY FUNCTION
  // ==========================================
  {
    id: 'egfr',
    title: 'eGFR (Estimated Glomerular Filtration Rate)',
    category: 'Kidney Function',
    icon: Activity,
    shortDescription: 'Calculated estimate of the volume of blood filtered by kidneys per minute.',
    whatIsIt: 'eGFR is calculated using serum creatinine, age, and sex (using equations such as CKD-EPI) to estimate overall kidney function.',
    whyItMatters: 'The premier mathematical estimate used to screen, stage, and monitor Chronic Kidney Disease (CKD).',
    howMeasured: 'Calculated mathematically from a serum creatinine blood test.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '90 or higher', unit: 'mL/min/1.73m²', min: 90, max: 120, notes: 'eGFR ≥90 indicates normal or high kidney filtration' },
      { ageGroup: 'Older Adult', range: '60 or higher', unit: 'mL/min/1.73m²', notes: 'eGFR naturally decreases slightly with age' }
    ],
    highMeaning: 'eGFR >90 mL/min/1.73m² indicates normal kidney filtration capacity (or hyperfiltration in early diabetes).',
    lowMeaning: 'Low eGFR (<60 for >3 months indicates CKD; <15 indicates kidney failure) reflects impaired filtration capacity.',
    factorsAffecting: ['eGFR is an estimate rather than a direct measurement', 'Age and muscle mass extremes', 'Extreme dietary protein intake', 'Creatine supplementation'],
    whenToSeekCare: 'Consult a nephrologist if eGFR is persistently below 60 mL/min/1.73m².',
    disclaimer: 'eGFR is a calculated estimate. Interpretation depends on age, muscle mass, and clinical context.'
  },
  {
    id: 'creatinine-kidney',
    title: 'Creatinine (Kidney Function)',
    category: 'Kidney Function',
    icon: TestTube2,
    shortDescription: 'Serum marker inversely proportional to glomerular filtration.',
    whatIsIt: 'Evaluates renal clearance of muscle breakdown waste products.',
    whyItMatters: 'Primary input metric for estimating eGFR and renal health.',
    howMeasured: 'Serum renal chemistry panel.',
    referenceRanges: [
      { ageGroup: 'Adult', sex: 'Male', range: '0.7 – 1.3', unit: 'mg/dL', min: 0.7, max: 1.3 },
      { ageGroup: 'Adult', sex: 'Female', range: '0.6 – 1.1', unit: 'mg/dL', min: 0.6, max: 1.1 }
    ],
    highMeaning: 'Elevated creatinine correlates with impaired renal filtration.',
    lowMeaning: 'Low creatinine correlates with muscle wasting or hyperfiltration.'
  },
  {
    id: 'urea-bun-kidney',
    title: 'Urea / BUN (Kidney Function)',
    category: 'Kidney Function',
    icon: TestTube2,
    shortDescription: 'Measures nitrogenous renal waste accumulation.',
    whatIsIt: 'Evaluates renal clearance of protein waste.',
    whyItMatters: 'High BUN:Creatinine ratio helps differentiate prerenal azotemia from intrinsic kidney injury.',
    howMeasured: 'Serum renal panel.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '7 – 20', unit: 'mg/dL', min: 7, max: 20 }
    ],
    highMeaning: 'Associated with renal failure, dehydration, or gastrointestinal bleeding.',
    lowMeaning: 'Associated with low protein intake or liver disease.'
  },
  {
    id: 'uric-acid-kidney',
    title: 'Uric Acid (Renal Clearance)',
    category: 'Kidney Function',
    icon: Activity,
    shortDescription: 'Purine metabolite filtered by renal tubules.',
    whatIsIt: 'Reflects renal handling of purine metabolic waste.',
    whyItMatters: 'Impaired renal uric acid excretion promotes hyperuricemia and gout.',
    howMeasured: 'Serum chemistry panel.',
    referenceRanges: [
      { ageGroup: 'Adult', sex: 'Male', range: '3.4 – 7.0', unit: 'mg/dL' },
      { ageGroup: 'Adult', sex: 'Female', range: '2.4 – 6.0', unit: 'mg/dL' }
    ],
    highMeaning: 'High levels indicate decreased renal clearance or purine overproduction.',
    lowMeaning: 'Low levels are clinically normal.'
  },
  {
    id: 'sodium-kidney',
    title: 'Sodium (Renal Electrolyte)',
    category: 'Kidney Function',
    icon: Droplets,
    shortDescription: 'Electrolyte reabsorbed and excreted by renal tubules.',
    whatIsIt: 'Measures renal regulation of extracellular water balance.',
    whyItMatters: 'Key marker for renal concentrating ability and renin-angiotensin-aldosterone axis.',
    howMeasured: 'Serum chemistry test.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '135 – 145', unit: 'mEq/L', min: 135, max: 145 }
    ],
    highMeaning: 'Hypernatremia associated with renal free-water loss.',
    lowMeaning: 'Hyponatremia associated with renal sodium wasting or water retention.'
  },
  {
    id: 'potassium-kidney',
    title: 'Potassium (Renal Excretion)',
    category: 'Kidney Function',
    icon: Zap,
    shortDescription: 'Electrolyte actively excreted by renal distal tubules.',
    whatIsIt: 'Measures renal excretion of intracellular cations.',
    whyItMatters: 'Advanced renal failure impairs potassium excretion leading to life-threatening hyperkalemia.',
    howMeasured: 'Serum electrolyte test.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '3.5 – 5.0', unit: 'mEq/L', min: 3.5, max: 5.0 }
    ],
    highMeaning: 'Hyperkalemia (>5.0) is a major complication of declining kidney function.',
    lowMeaning: 'Hypokalemia (<3.5) may occur with renal tubular acidosis or diuretic use.'
  },
  {
    id: 'uacr-kidney',
    title: 'Urine Albumin-to-Creatinine Ratio (uACR)',
    category: 'Kidney Function',
    icon: TestTube2,
    shortDescription: 'Sensitive spot urine test for early glomerular kidney damage.',
    whatIsIt: 'Measures trace amounts of albumin spilled into urine relative to urine creatinine concentration.',
    whyItMatters: 'Earliest clinical detector of diabetic kidney disease and hypertensive nephropathy.',
    howMeasured: 'Random spot urine collection.',
    referenceRanges: [
      { ageGroup: 'Adult', range: 'Under 30', unit: 'mg/g', min: 0, max: 30, notes: '30–300 mg/g: Microalbuminuria; >300 mg/g: Macroalbuminuria' }
    ],
    highMeaning: 'uACR ≥30 mg/g indicates microalbuminuria, reflecting early damage to glomerular filtration barriers.',
    lowMeaning: 'Normal finding (<30 mg/g).'
  },

  // ==========================================
  // 6. LIPID PROFILE
  // ==========================================
  {
    id: 'total-cholesterol',
    title: 'Total Cholesterol',
    category: 'Lipid Profile',
    icon: Scale,
    shortDescription: 'Sum of all circulating cholesterol carrying lipoproteins.',
    whatIsIt: 'Measures the total amount of cholesterol contained in HDL, LDL, VLDL, and other lipoproteins in blood.',
    whyItMatters: 'Core screening component for atherosclerotic cardiovascular disease (ASCVD) risk.',
    howMeasured: 'Fasting or non-fasting lipid panel blood test.',
    referenceRanges: [
      { ageGroup: 'Child', range: 'Under 170', unit: 'mg/dL' },
      { ageGroup: 'Adult', range: 'Under 200', unit: 'mg/dL', min: 120, max: 200, notes: 'Desirable: <200 mg/dL; Borderline high: 200–239 mg/dL; High: ≥240 mg/dL' }
    ],
    highMeaning: 'Elevated total cholesterol (≥200 mg/dL) may be associated with increased risk of plaque buildup in arteries (atherosclerosis), high saturated fat diets, genetics (familial hypercholesterolemia), or hypothyroidism.',
    lowMeaning: 'Very low total cholesterol (<120 mg/dL) is uncommon; may be associated with severe hyperthyroidism, malabsorption, liver disease, or malnutrition.',
    factorsAffecting: ['Saturated & trans fat dietary intake', 'Physical activity level', 'Genetics / family history', 'Fasting state (affects triglycerides & calculated LDL)'],
    whenToSeekCare: 'Discuss lipid profile results with a doctor to calculate overall 10-year cardiovascular risk scores.'
  },
  {
    id: 'ldl-cholesterol',
    title: 'LDL Cholesterol ("Bad" Cholesterol)',
    category: 'Lipid Profile',
    icon: Scale,
    shortDescription: 'Low-density lipoprotein that deposits cholesterol into arterial walls.',
    whatIsIt: 'LDL particles carry cholesterol from the liver to peripheral tissues and tend to deposit in vessel walls forming atherosclerotic plaques.',
    whyItMatters: 'Primary therapeutic target for reducing cardiovascular events and stroke risk.',
    howMeasured: 'Calculated via Friedewald equation or measured directly in a lipid panel.',
    referenceRanges: [
      { ageGroup: 'Adult', range: 'Under 100', unit: 'mg/dL', min: 50, max: 100, notes: 'Optimal: <100 mg/dL; Near optimal: 100–129 mg/dL; High: 160–189 mg/dL' }
    ],
    highMeaning: 'High LDL cholesterol (≥130 mg/dL) is strongly associated with coronary artery disease and ischemic heart disease.',
    lowMeaning: 'Low LDL cholesterol (<50 mg/dL) is generally favorable for heart health, though extremely low levels warrant clinical context review.',
    factorsAffecting: ['Diet high in saturated fats', 'Physical inactivity', 'Smoking', 'Statins or lipid-lowering medications']
  },
  {
    id: 'hdl-cholesterol',
    title: 'HDL Cholesterol ("Good" Cholesterol)',
    category: 'Lipid Profile',
    icon: ShieldCheck,
    shortDescription: 'High-density lipoprotein that scavenges excess cholesterol from arteries.',
    whatIsIt: 'HDL transports excess cholesterol from peripheral arterial walls back to the liver for excretion (reverse cholesterol transport).',
    whyItMatters: 'Higher levels are generally protective against coronary artery disease.',
    howMeasured: 'Serum lipid panel.',
    referenceRanges: [
      { ageGroup: 'Adult', sex: 'Male', range: '40 or higher', unit: 'mg/dL', min: 40, max: 80, notes: 'Desirable: ≥40 mg/dL (Male); ≥50 mg/dL (Female)' },
      { ageGroup: 'Adult', sex: 'Female', range: '50 or higher', unit: 'mg/dL', min: 50, max: 80 }
    ],
    highMeaning: 'High HDL (≥60 mg/dL) is considered protective against cardiovascular disease.',
    lowMeaning: 'Low HDL (<40 mg/dL in men, <50 mg/dL in women) is an independent risk factor for coronary heart disease.',
    factorsAffecting: ['Aerobic exercise (increases HDL)', 'Carette smoking (decreases HDL)', 'Trans fats', 'Obesity']
  },
  {
    id: 'triglycerides',
    title: 'Triglycerides',
    category: 'Lipid Profile',
    icon: Flame,
    shortDescription: 'Main form of fat stored in the body derived from unburned calories.',
    whatIsIt: 'Triglycerides are blood fats stored in adipose tissue and released between meals for energy demands.',
    whyItMatters: 'Elevated levels contribute to arterial hardening and severe pancreatitis risk when extremely high.',
    howMeasured: 'Fasting lipid panel (requires 9–12 hour fast for accurate baseline).',
    referenceRanges: [
      { ageGroup: 'Adult', range: 'Under 150', unit: 'mg/dL', min: 40, max: 150, notes: 'Normal: <150 mg/dL; Borderline: 150–199 mg/dL; High: 200–499 mg/dL; Very high: ≥500 mg/dL' }
    ],
    highMeaning: 'High triglycerides (≥150 mg/dL) may be associated with metabolic syndrome, refined sugar/carbohydrate intake, excess alcohol, diabetes, or physical inactivity. Very high levels (≥500 mg/dL) increase risk of acute pancreatitis.',
    lowMeaning: 'Low triglycerides (<40 mg/dL) may occur with low-fat diets, hyperthyroidism, or malabsorption.'
  },
  {
    id: 'non-hdl-cholesterol',
    title: 'Non-HDL Cholesterol',
    category: 'Lipid Profile',
    icon: Scale,
    shortDescription: 'Total cholesterol minus HDL; measures all atherogenic lipoproteins.',
    whatIsIt: 'Non-HDL cholesterol equals Total Cholesterol minus HDL Cholesterol, incorporating LDL, VLDL, IDL, and remnant lipoproteins.',
    whyItMatters: 'Strong predictor of cardiovascular risk, especially in individuals with high triglycerides or diabetes.',
    howMeasured: 'Calculated directly from standard lipid panel (Total Cholesterol – HDL).',
    referenceRanges: [
      { ageGroup: 'Adult', range: 'Under 130', unit: 'mg/dL', min: 50, max: 130 }
    ],
    highMeaning: 'Elevated non-HDL cholesterol (≥130 mg/dL) indicates increased burden of plaque-forming lipoproteins in bloodstream.',
    lowMeaning: 'Desirable target for cardiovascular preservation.'
  },

  // ==========================================
  // 7. VITAMINS
  // ==========================================
  {
    id: 'vitamin-a',
    title: 'Vitamin A (Retinol / Beta-Carotene)',
    category: 'Vitamins',
    icon: Eye,
    shortDescription: 'Fat-soluble vitamin essential for vision, immune function, and skin integrity.',
    whatIsIt: 'Vitamin A supports rod and cone photoreceptors in the retina, mucosal cell differentiation, and immune defenses.',
    whyItMatters: 'Prevents night blindness, supports skin and mucosal linings, and maintains vision.',
    howMeasured: 'Serum retinol level (mcg/dL).',
    referenceRanges: [
      { ageGroup: 'Adult', range: '38 – 98', unit: 'µg/dL', min: 38, max: 98 }
    ],
    foodSources: ['Beef liver', 'Carrots', 'Sweet potatoes', 'Spinach', 'Eggs', 'Dairy products'],
    highMeaning: 'Excessive intake (hypervitaminosis A) from high-dose supplements can cause liver toxicity, bone pain, double vision, and birth defects.',
    lowMeaning: 'Deficiency may be associated with night blindness (nyctalopia), dry eyes (xerophthalmia), impaired wound healing, and frequent infections.',
    disclaimer: 'Do not take high-dose Vitamin A supplements during pregnancy due to teratogenic risk.'
  },
  {
    id: 'vitamin-b1',
    title: 'Vitamin B1 (Thiamine)',
    category: 'Vitamins',
    icon: Zap,
    shortDescription: 'Water-soluble vitamin essential for carbohydrate metabolism and neural function.',
    whatIsIt: 'Thiamine functions as coenzyme thiamine pyrophosphate (TPP) in glucose oxidation and neurotransmitter synthesis.',
    whyItMatters: 'Essential for cardiac muscle function and central/peripheral nervous system integrity.',
    howMeasured: 'Whole blood thiamine diphosphate or erythrocyte transketolase activity.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '2.5 – 7.5', unit: 'µg/dL', min: 2.5, max: 7.5 }
    ],
    foodSources: ['Whole grains', 'Pork', 'Legumes', 'Nuts and seeds', 'Fortified cereals'],
    highMeaning: 'Excess thiamine is excreted in urine; oral toxicity is extremely rare.',
    lowMeaning: 'Deficiency leads to Beriberi (wet beriberi causing heart failure; dry beriberi causing neuropathy) and Wernicke-Korsakoff syndrome in chronic alcoholism.'
  },
  {
    id: 'vitamin-b2',
    title: 'Vitamin B2 (Riboflavin)',
    category: 'Vitamins',
    icon: Zap,
    shortDescription: 'Precursor for FAD and FMN coenzymes involved in cellular energy production.',
    whatIsIt: 'Riboflavin is integral to flavoprotein coenzymes driving cellular respiration and fatty acid breakdown.',
    whyItMatters: 'Supports skin integrity, red blood cell production, and cellular energy release.',
    howMeasured: 'Erythrocyte glutathione reductase activity coefficient or urinary riboflavin.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '4 – 19', unit: 'µg/dL', min: 4, max: 19 }
    ],
    foodSources: ['Milk and dairy', 'Eggs', 'Lean meats', 'Green leafy vegetables', 'Enriched grains'],
    highMeaning: 'Nontoxic; excess causes harmless bright yellow fluorescence of urine.',
    lowMeaning: 'Deficiency (ariboflavinosis) causes cheilosis (cracked lip corners), glossitis (swollen tongue), and angular stomatitis.'
  },
  {
    id: 'vitamin-b3',
    title: 'Vitamin B3 (Niacin)',
    category: 'Vitamins',
    icon: Zap,
    shortDescription: 'Precursor to NAD and NADP coenzymes driving redox energy reactions.',
    whatIsIt: 'Niacin (nicotinic acid / nicotinamide) underpins NAD/NADP cofactors required for DNA repair and cellular energy.',
    whyItMatters: 'Crucial for skin health, digestive lining, nerve function, and lipid metabolism.',
    howMeasured: 'Urinary N-methylnicotinamide or plasma niacin levels.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '0.5 – 8.45', unit: 'µg/mL' }
    ],
    foodSources: ['Poultry', 'Beef', 'Fish (tuna, salmon)', 'Peanuts', 'Whole grains'],
    highMeaning: 'High-dose supplements may cause flushing, itching, gastrointestinal distress, or hepatotoxicity.',
    lowMeaning: 'Severe deficiency causes Pellagra, characterized by the 3 Ds: Diarrhea, Dermatitis, and Dementia.'
  },
  {
    id: 'vitamin-b5',
    title: 'Vitamin B5 (Pantothenic Acid)',
    category: 'Vitamins',
    icon: Zap,
    shortDescription: 'Essential building block of Coenzyme A (CoA) in metabolic pathways.',
    whatIsIt: 'Pantothenic acid forms Coenzyme A, which is essential for fatty acid synthesis and Krebs cycle energy production.',
    whyItMatters: 'Supports cellular energy production and steroid hormone synthesis.',
    howMeasured: 'Blood or urinary pantothenic acid.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '0.2 – 1.8', unit: 'µg/mL' }
    ],
    foodSources: ['Avocados', 'Mushrooms', 'Organ meats', 'Whole grains', 'Eggs'],
    highMeaning: 'Oral toxicity is practically non-existent; high doses may cause mild diarrhea.',
    lowMeaning: 'Deficiency is very rare due to widespread dietary presence; causes "burning feet" syndrome and fatigue.'
  },
  {
    id: 'vitamin-b6',
    title: 'Vitamin B6 (Pyridoxine)',
    category: 'Vitamins',
    icon: Brain,
    shortDescription: 'Coenzyme for amino acid metabolism, neurotransmitter synthesis, and Hb production.',
    whatIsIt: 'Pyridoxal 5\'-phosphate (PLP) is the active form of B6 involved in over 100 enzymatic reactions.',
    whyItMatters: 'Essential for serotonin/dopamine synthesis, immune function, and hemoglobin formation.',
    howMeasured: 'Plasma pyridoxal 5\'-phosphate (PLP) level.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '5 – 50', unit: 'µg/L', min: 5, max: 50 }
    ],
    foodSources: ['Chickpeas', 'Tuna & salmon', 'Poultry', 'Bananas', 'Potatoes'],
    highMeaning: 'Long-term megadosing (>200 mg/day) can cause sensory peripheral neuropathy and ataxia.',
    lowMeaning: 'Deficiency may be associated with peripheral neuropathy, microcytic anemia, depression, and oral inflammation.'
  },
  {
    id: 'vitamin-b7',
    title: 'Vitamin B7 (Biotin)',
    category: 'Vitamins',
    icon: Sparkles,
    shortDescription: 'Cofactor for carboxylase enzymes in fatty acid and amino acid synthesis.',
    whatIsIt: 'Biotin acts as an essential coenzyme for carboxylases driving gluconeogenesis and lipid synthesis.',
    whyItMatters: 'Supports keratin structure in hair, skin, and nails, as well as macronutrient breakdown.',
    howMeasured: 'Serum biotin levels or urinary excretion.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '200 – 1200', unit: 'pg/mL' }
    ],
    foodSources: ['Egg yolks', 'Almonds', 'Walnuts', 'Salmon', 'Sweet potatoes'],
    highMeaning: 'High oral doses do not cause known clinical toxicity, but high supplement doses interfere significantly with lab immunoassay tests (e.g. troponin, thyroid panels).',
    lowMeaning: 'Deficiency can cause hair thinning (alopecia), skin rashes around facial orifices, and brittle nails.',
    disclaimer: 'Inform your lab before blood draws if taking Biotin supplements as they alter laboratory assay readings.'
  },
  {
    id: 'vitamin-b9',
    title: 'Vitamin B9 (Folate / Folic Acid)',
    category: 'Vitamins',
    icon: Feather,
    shortDescription: 'Essential for DNA synthesis, cell division, and red blood cell maturation.',
    whatIsIt: 'Folate donates one-carbon units for nucleotide synthesis and amino acid remethylation.',
    whyItMatters: 'Critical during rapid cell growth and early pregnancy to prevent neural tube defects.',
    howMeasured: 'Serum folate (recent intake) or Red Blood Cell (RBC) folate (long-term stores).',
    referenceRanges: [
      { ageGroup: 'Adult', range: '2.7 – 17.0', unit: 'ng/mL', min: 2.7, max: 17.0 }
    ],
    pregnancyNote: 'Folic acid supplementation (400–800 mcg/day) is recommended prior to conception and early pregnancy to prevent spina bifida.',
    foodSources: ['Dark leafy greens (spinach, kale)', 'Lentils & beans', 'Asparagus', 'Fortified grains', 'Oranges'],
    highMeaning: 'Excess folic acid intake from supplements can mask Vitamin B12 deficiency symptoms.',
    lowMeaning: 'Deficiency causes megaloblastic anemia, fatigue, neural tube defects in fetus, and elevated homocysteine.'
  },
  {
    id: 'vitamin-b12',
    title: 'Vitamin B12 (Cobalamin)',
    category: 'Vitamins',
    icon: Brain,
    shortDescription: 'Cobalt-containing vitamin vital for myelin sheath preservation and RBC formation.',
    whatIsIt: 'Vitamin B12 is essential for myelin synthesis around nerves and DNA synthesis in hematopoiesis.',
    whyItMatters: 'Prevents neurological degeneration and megaloblastic anemia.',
    howMeasured: 'Serum Vitamin B12 level (pg/mL) or Methylmalonic Acid (MMA).',
    referenceRanges: [
      { ageGroup: 'Adult', range: '200 – 900', unit: 'pg/mL', min: 200, max: 900 }
    ],
    foodSources: ['Clams & oysters', 'Beef liver & meat', 'Fish (salmon, trout)', 'Milk & cheese', 'Eggs', 'Fortified nutritional yeast'],
    highMeaning: 'High B12 is non-toxic; elevated levels may sometimes reflect liver dysfunction or myeloproliferative disorders.',
    lowMeaning: 'Deficiency (<200 pg/mL) causes pernicious/megaloblastic anemia, numbness/tingling in hands and feet (neuropathy), memory impairment, and balance issues.',
    disclaimer: 'Vegans and older adults should monitor B12 levels as it is naturally found almost exclusively in animal foods.'
  },
  {
    id: 'vitamin-c',
    title: 'Vitamin C (Ascorbic Acid)',
    category: 'Vitamins',
    icon: Apple,
    shortDescription: 'Potent water-soluble antioxidant essential for collagen synthesis and immune defense.',
    whatIsIt: 'Ascorbic acid acts as an electron donor in collagen hydroxylation, iron absorption, and free-radical neutralization.',
    whyItMatters: 'Maintains skin, blood vessel integrity, wound healing, and immune resistance.',
    howMeasured: 'Plasma ascorbic acid level.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '0.4 – 2.0', unit: 'mg/dL', min: 0.4, max: 2.0 }
    ],
    foodSources: ['Citrus fruits (oranges, lemons)', 'Bell peppers', 'Strawberries', 'Broccoli', 'Kiwi'],
    highMeaning: 'High oral doses (>2000 mg) may cause diarrhea, stomach cramps, and increased risk of kidney stones in susceptible individuals.',
    lowMeaning: 'Severe deficiency causes Scurvy, marked by bleeding gums, petechiae, impaired wound healing, and joint pain.'
  },
  {
    id: 'vitamin-d',
    title: 'Vitamin D (25-Hydroxyvitamin D)',
    category: 'Vitamins',
    icon: Sun,
    shortDescription: 'Hormonal vitamin essential for intestinal calcium absorption and bone density.',
    whatIsIt: 'Synthesized in skin upon sun exposure or ingested; converted in liver to 25(OH)D and kidneys to active calcitriol.',
    whyItMatters: 'Critical for bone mineralization, muscle strength, and immune regulation.',
    howMeasured: 'Serum 25-hydroxyvitamin D [25(OH)D] test.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '30 – 100', unit: 'ng/mL', min: 30, max: 100, notes: '<20 ng/mL: Deficient; 20–29 ng/mL: Insufficient; 30–100 ng/mL: Adequate' }
    ],
    foodSources: ['Sunlight exposure', 'Fatty fish (salmon, mackerel)', 'Fortified milk', 'Egg yolks', 'Cod liver oil'],
    highMeaning: 'Excessive high-dose supplementation (>100 ng/mL) can cause hypercalcemia, kidney stones, nausea, and arterial calcification.',
    lowMeaning: 'Deficiency (<20 ng/mL) leads to rickets in children, osteomalacia/osteoporosis in adults, muscle weakness, and bone pain.',
    isMeasurableInModal: true
  },
  {
    id: 'vitamin-e',
    title: 'Vitamin E (Alpha-Tocopherol)',
    category: 'Vitamins',
    icon: ShieldCheck,
    shortDescription: 'Fat-soluble antioxidant protecting cell membranes from lipid peroxidation.',
    whatIsIt: 'Alpha-tocopherol inserts into lipid cell membranes to neutralize reactive oxygen species and prevent oxidative damage.',
    whyItMatters: 'Protects polyunsaturated fatty acids in cell membranes and maintains red blood cell integrity.',
    howMeasured: 'Serum alpha-tocopherol level.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '5.5 – 17.0', unit: 'mg/L', min: 5.5, max: 17.0 }
    ],
    foodSources: ['Sunflower seeds', 'Almonds', 'Spinach', 'Avocados', 'Vegetable oils'],
    highMeaning: 'High-dose supplementation may interfere with Vitamin K action and increase bleeding risk in patients taking anticoagulants.',
    lowMeaning: 'Deficiency causes hemolytic anemia, peripheral neuropathy, ataxia, and retinopathy.'
  },
  {
    id: 'vitamin-k',
    title: 'Vitamin K (Phylloquinone / Menaquinone)',
    category: 'Vitamins',
    icon: ShieldCheck,
    shortDescription: 'Essential cofactor for gamma-carboxylation of clotting factors (II, VII, IX, X).',
    whatIsIt: 'Vitamin K activates blood coagulation proteins in the liver and osteocalcin in bone matrix.',
    whyItMatters: 'Essential for normal blood clotting and bone mineralization.',
    howMeasured: 'Evaluated indirectly via Prothrombin Time (PT / INR) or direct plasma phylloquinone.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '0.2 – 3.2', unit: 'ng/mL' }
    ],
    foodSources: ['Kale', 'Spinach', 'Broccoli', 'Brussels sprouts', 'Green tea'],
    highMeaning: 'Low oral toxicity; however, sudden dietary fluctuations alter Warfarin / Coumadin anticoagulant efficacy.',
    lowMeaning: 'Deficiency causes easy bruising, mucosal bleeding, hematomas, and prolonged clotting times.',
    disclaimer: 'Patients taking Warfarin should maintain consistent daily Vitamin K intake.'
  },

  // ==========================================
  // 8. MINERALS & ELECTROLYTES
  // ==========================================
  {
    id: 'iron-ferritin',
    title: 'Iron & Serum Ferritin',
    category: 'Minerals & Electrolytes',
    icon: TestTube2,
    shortDescription: 'Trace mineral essential for hemoglobin production and cellular respiration.',
    whatIsIt: 'Iron is the central atom in heme groups. Ferritin measures total intracellular iron storage reserves in the body.',
    whyItMatters: 'Primary evaluation metric for iron-deficiency anemia and hemochromatosis (iron overload).',
    howMeasured: 'Serum Iron (µg/dL) and Serum Ferritin (ng/mL).',
    referenceRanges: [
      { ageGroup: 'Adult', sex: 'Male', range: '30 – 300 (Ferritin)', unit: 'ng/mL', min: 30, max: 300 },
      { ageGroup: 'Adult', sex: 'Female', range: '15 – 200 (Ferritin)', unit: 'ng/mL', min: 15, max: 200 }
    ],
    foodSources: ['Red meat', 'Lentils & beans', 'Fortified cereals', 'Spinach', 'Dark chocolate', 'Tofu'],
    highMeaning: 'High ferritin / iron overload (hemochromatosis) can cause tissue iron deposition in liver, heart, and pancreas.',
    lowMeaning: 'Low ferritin (<30 ng/mL) indicates depleted iron stores, leading to iron-deficiency anemia, microcytic RBCs, and fatigue.',
    isMeasurableInModal: true
  },
  {
    id: 'calcium-min',
    title: 'Calcium (Mineral)',
    category: 'Minerals & Electrolytes',
    icon: ShieldCheck,
    shortDescription: 'Most abundant mineral in the body building skeletal structure and driving signaling.',
    whatIsIt: '99% of body calcium resides in bones and teeth; 1% circulates in blood driving muscle contractions and neural firing.',
    whyItMatters: 'Essential for bone density, cardiac rhythm, blood coagulation, and neuromuscular impulse transmission.',
    howMeasured: 'Serum total calcium or ionized calcium.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '8.5 – 10.2', unit: 'mg/dL', min: 8.5, max: 10.2 }
    ],
    foodSources: ['Milk & yogurt', 'Fortified plant milks', 'Canned sardines with bones', 'Tofu', 'Kale & broccoli'],
    highMeaning: 'Hypercalcemia may cause kidney stones, bone pain, confusion, and abdominal cramps.',
    lowMeaning: 'Hypocalcemia causes muscle twitching (tetany), numbness/tingling around mouth, cramps, and osteopenia.'
  },
  {
    id: 'magnesium-min',
    title: 'Magnesium (Mineral)',
    category: 'Minerals & Electrolytes',
    icon: Zap,
    shortDescription: 'Essential intracellular mineral stabilizing ATP and neuromuscular function.',
    whatIsIt: 'Required for nucleic acid synthesis, muscle contraction/relaxation, and over 300 enzyme systems.',
    whyItMatters: 'Prevents muscle cramps, supports blood pressure regulation, and maintains cardiac sinus rhythm.',
    howMeasured: 'Serum magnesium blood test.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '1.7 – 2.2', unit: 'mg/dL', min: 1.7, max: 2.2 }
    ],
    foodSources: ['Pumpkin seeds', 'Dark chocolate', 'Almonds & cashews', 'Spinach', 'Black beans'],
    highMeaning: 'Hypermagnesemia causes muscle weakness, hypotension, and bradycardia.',
    lowMeaning: 'Hypomagnesemia causes muscle cramps, tremors, palpitations, and hypokalemia.'
  },
  {
    id: 'potassium-min',
    title: 'Potassium (Electrolyte)',
    category: 'Minerals & Electrolytes',
    icon: Zap,
    shortDescription: 'Dominant intracellular electrolyte regulating resting membrane potential.',
    whatIsIt: 'Controls electrical potential across cardiac and skeletal muscle membranes.',
    whyItMatters: 'Crucial for preventing fatal heart arrhythmias and controlling nerve signaling.',
    howMeasured: 'Serum electrolyte panel.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '3.5 – 5.0', unit: 'mEq/L', min: 3.5, max: 5.0 }
    ],
    foodSources: ['Bananas', 'Avocados', 'Potatoes with skin', 'Spinach', 'Coconut water', 'White beans'],
    highMeaning: 'Hyperkalemia (>5.0 mEq/L) poses severe cardiac arrhythmia risks.',
    lowMeaning: 'Hypokalemia (<3.5 mEq/L) causes muscle weakness, fatigue, and ECG changes.'
  },
  {
    id: 'sodium-min',
    title: 'Sodium (Electrolyte)',
    category: 'Minerals & Electrolytes',
    icon: Droplets,
    shortDescription: 'Dominant extracellular cation maintaining blood volume and fluid balance.',
    whatIsIt: 'Regulates total body water volume, blood pressure, and osmotic pressure.',
    whyItMatters: 'Key electrolyte determining serum osmolality and cellular volume.',
    howMeasured: 'Serum electrolyte panel.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '135 – 145', unit: 'mEq/L', min: 135, max: 145 }
    ],
    foodSources: ['Table salt', 'Pickled foods', 'Soups', 'Cheese', 'Cured meats'],
    highMeaning: 'Hypernatremia (>145) causes severe thirst, lethargy, and neurological signs.',
    lowMeaning: 'Hyponatremia (<135) causes nausea, headache, confusion, and seizures.'
  },
  {
    id: 'zinc',
    title: 'Zinc',
    category: 'Minerals & Electrolytes',
    icon: ShieldCheck,
    shortDescription: 'Essential trace element for immune cellular response, wound healing, and DNA synthesis.',
    whatIsIt: 'Zinc acts as a catalytic coenzyme for over 300 metalloenzymes and zinc-finger transcription factors.',
    whyItMatters: 'Vital for immune cell maturation, wound healing, taste perception, and growth.',
    howMeasured: 'Serum or plasma zinc level.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '60 – 120', unit: 'µg/dL', min: 60, max: 120 }
    ],
    foodSources: ['Oysters', 'Beef & lamb', 'Pumpkin seeds', 'Lentils', 'Cashews'],
    highMeaning: 'High zinc intake (>40 mg/day chronic) interferes with copper absorption, causing copper deficiency and anemia.',
    lowMeaning: 'Deficiency causes impaired immune function, delayed wound healing, loss of taste/smell, and skin lesions.'
  },
  {
    id: 'phosphorus-min',
    title: 'Phosphorus (Mineral)',
    category: 'Minerals & Electrolytes',
    icon: ShieldCheck,
    shortDescription: 'Structural element in bone hydroxyapatite and cellular energy transfer.',
    whatIsIt: 'Forms bone mineral matrix alongside calcium and stores cellular energy in ATP molecules.',
    whyItMatters: 'Essential for skeletal strength and energy metabolism.',
    howMeasured: 'Serum phosphate panel.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '2.5 – 4.5', unit: 'mg/dL', min: 2.5, max: 4.5 }
    ],
    foodSources: ['Poultry & meat', 'Dairy products', 'Fish', 'Nuts', 'Whole grains'],
    highMeaning: 'Hyperphosphatemia promotes vascular calcification in renal failure.',
    lowMeaning: 'Hypophosphatemia causes muscle weakness, bone pain, and rhabdomyolysis.'
  },
  {
    id: 'copper',
    title: 'Copper',
    category: 'Minerals & Electrolytes',
    icon: Sparkles,
    shortDescription: 'Trace mineral required for iron metabolism, collagen synthesis, and neuropeptides.',
    whatIsIt: 'Copper is a cofactor for ceruloplasmin, cytochrome c oxidase, and superoxide dismutase.',
    whyItMatters: 'Enables iron absorption and red cell production; maintains connective tissue.',
    howMeasured: 'Serum copper and ceruloplasmin levels.',
    referenceRanges: [
      { ageGroup: 'Adult', sex: 'Male', range: '70 – 140', unit: 'µg/dL' },
      { ageGroup: 'Adult', sex: 'Female', range: '80 – 155', unit: 'µg/dL' }
    ],
    foodSources: ['Organ meats', 'Shellfish', 'Dark chocolate', 'Nuts & seeds', 'Whole grains'],
    highMeaning: 'Toxicity or Wilson disease causes copper accumulation in liver and basal ganglia.',
    lowMeaning: 'Deficiency causes anemia, leukopenia, and neurological deficits mimicking B12 deficiency.'
  },
  {
    id: 'selenium',
    title: 'Selenium',
    category: 'Minerals & Electrolytes',
    icon: ShieldCheck,
    shortDescription: 'Antioxidant trace mineral incorporated into selenoproteins and thyroid enzymes.',
    whatIsIt: 'Selenium forms active sites of glutathione peroxidase and iodothyronine deiodinases converting T4 to T3.',
    whyItMatters: 'Protects cells from oxidative stress and supports thyroid hormone activation.',
    howMeasured: 'Serum or plasma selenium level.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '70 – 150', unit: 'µg/L', min: 70, max: 150 }
    ],
    foodSources: ['Brazil nuts (extremely rich)', 'Tuna & halibut', 'Eggs', 'Turkey', 'Sunflower seeds'],
    highMeaning: 'High intake (>400 µg/day, Selenosis) causes garlic breath, hair loss, brittle nails, and neuropathy.',
    lowMeaning: 'Deficiency is associated with Keshan cardiomyopathy, impaired immunity, and thyroid dysfunction.'
  },
  {
    id: 'iodine',
    title: 'Iodine',
    category: 'Minerals & Electrolytes',
    icon: ShieldCheck,
    shortDescription: 'Essential trace mineral required for thyroid hormone (T3 and T4) synthesis.',
    whatIsIt: 'Iodine is taken up by the thyroid gland to construct triiodothyronine (T3) and thyroxine (T4).',
    whyItMatters: 'Essential for basal metabolic rate regulation and fetal neurological growth.',
    howMeasured: 'Urinary iodine concentration (µg/L).',
    referenceRanges: [
      { ageGroup: 'Adult', range: '100 – 299', unit: 'µg/L', min: 100, max: 299 }
    ],
    foodSources: ['Iodized salt', 'Seaweed (kelp, nori)', 'Cod & tuna', 'Dairy products', 'Eggs'],
    highMeaning: 'Excessive iodine intake can paradoxically trigger thyroid dysfunction (Wolff-Chaikoff effect or Jod-Basedow effect).',
    lowMeaning: 'Deficiency causes goiter (enlarged thyroid gland), hypothyroidism, fatigue, weight gain, and cretinism in offspring.'
  },

  // ==========================================
  // 9. BLOOD SUGAR & DIABETES
  // ==========================================
  {
    id: 'fasting-plasma-glucose',
    title: 'Fasting Plasma Glucose',
    category: 'Blood Sugar & Diabetes',
    icon: TestTube2,
    shortDescription: 'Standard baseline blood sugar measurement following an 8+ hour fast.',
    whatIsIt: 'Evaluates liver glucose output and basal insulin effectiveness in the fasting state.',
    whyItMatters: 'Primary screening test for prediabetes and diabetes mellitus.',
    howMeasured: 'Venous blood plasma sample drawn in morning before food.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '70 – 99', unit: 'mg/dL', min: 70, max: 99, notes: '70–99 mg/dL: Normal; 100–125 mg/dL: Prediabetes; ≥126 mg/dL: Diabetes threshold' }
    ],
    highMeaning: 'Fasting glucose 100–125 mg/dL indicates impaired fasting glucose (prediabetes); ≥126 mg/dL on two separate tests diagnoses diabetes.',
    lowMeaning: 'Fasting glucose <70 mg/dL indicates hypoglycemia.',
    isMeasurableInModal: true
  },
  {
    id: 'hba1c-diabetes',
    title: 'HbA1c (Glycated Hemoglobin)',
    category: 'Blood Sugar & Diabetes',
    icon: LineChart,
    shortDescription: 'Reflects 90-day average blood glucose concentration.',
    whatIsIt: 'Measures the proportion of hemoglobin chemically bound to glucose over red cell lifespan.',
    whyItMatters: 'Gold standard metric for diabetes diagnosis and long-term glycemic management tracking.',
    howMeasured: 'Venous blood test.',
    referenceRanges: [
      { ageGroup: 'Adult', range: 'Under 5.7', unit: '%', min: 4.0, max: 5.7, notes: '<5.7%: Normal; 5.7–6.4%: Prediabetes; ≥6.5%: Diabetes' }
    ],
    highMeaning: 'Values 5.7–6.4% signify prediabetes; values ≥6.5% meet diagnostic criteria for diabetes mellitus.',
    lowMeaning: 'Low levels may indicate shortened RBC lifespan or frequent hypoglycemic episodes.',
    isMeasurableInModal: true
  },
  {
    id: 'ogtt-glucose',
    title: 'Postprandial Glucose (2-Hour OGTT)',
    category: 'Blood Sugar & Diabetes',
    icon: TestTube2,
    shortDescription: 'Blood glucose level 2 hours after consuming a 75g standardized glucose drink.',
    whatIsIt: 'Evaluates the body’s acute insulin secretion and peripheral tissue glucose clearance under a carbohydrate load.',
    whyItMatters: 'Sensitive test for impaired glucose tolerance and gestational diabetes.',
    howMeasured: 'Blood sample drawn exactly 2 hours post 75g oral glucose load.',
    referenceRanges: [
      { ageGroup: 'Adult', range: 'Under 140', unit: 'mg/dL', min: 70, max: 140, notes: '<140 mg/dL: Normal; 140–199 mg/dL: Prediabetes; ≥200 mg/dL: Diabetes' }
    ],
    pregnancyNote: 'Used routinely between 24–28 weeks gestation to screen for gestational diabetes mellitus.',
    highMeaning: 'Values 140–199 mg/dL indicate Impaired Glucose Tolerance (prediabetes); ≥200 mg/dL indicates diabetes.',
    lowMeaning: 'Postprandial reactive hypoglycemia.'
  },
  {
    id: 'random-glucose',
    title: 'Random Blood Glucose',
    category: 'Blood Sugar & Diabetes',
    icon: TestTube2,
    shortDescription: 'Blood sugar reading taken at any time regardless of recent meals.',
    whatIsIt: 'Measures circulating blood sugar at an unspecified time of day.',
    whyItMatters: 'Used for quick clinical screening, especially when symptoms of diabetes are present.',
    howMeasured: 'Fingerstick glucometer or venous blood draw.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '70 – 140', unit: 'mg/dL', min: 70, max: 140 }
    ],
    highMeaning: 'Random glucose ≥200 mg/dL accompanied by classic diabetes symptoms (polyuria, polydipsia, unexplained weight loss) strongly suggests diabetes.',
    lowMeaning: 'Random glucose <70 mg/dL suggests hypoglycemia requiring quick-acting carbohydrates.'
  },

  // ==========================================
  // 10. GENERAL HEALTH MEASUREMENTS
  // ==========================================
  {
    id: 'bmi-gen',
    title: 'Body Mass Index (BMI)',
    category: 'General Health Measurements',
    icon: Scale,
    shortDescription: 'Ratio of weight to height square used to categorize body mass.',
    whatIsIt: 'BMI is calculated as weight in kilograms divided by height in meters squared (kg/m²).',
    whyItMatters: 'Population-level screening tool to classify underweight, normal weight, overweight, and obesity categories.',
    howMeasured: 'Calculated from accurate standing height and weight measurements.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '18.5 – 24.9', unit: 'kg/m²', min: 18.5, max: 24.9, notes: '<18.5: Underweight; 18.5–24.9: Normal weight; 25.0–29.9: Overweight; ≥30.0: Obesity' }
    ],
    highMeaning: 'BMI ≥25.0 indicates overweight; BMI ≥30.0 indicates obesity, associated with higher risks of cardiovascular disease, type 2 diabetes, and hypertension.',
    lowMeaning: 'BMI <18.5 indicates underweight, associated with nutritional deficiency, osteoporosis, and immune compromise.',
    factorsAffecting: ['BMI does not directly measure body fat vs. muscle mass (athletes may have high BMI with low fat)'],
    relatedCalculatorId: 'bmi',
    isMeasurableInModal: true,
    disclaimer: 'BMI is a general screening index and does not account for muscle mass or fat distribution.'
  },
  {
    id: 'waist-height-gen',
    title: 'Waist Circumference & Ratio',
    category: 'General Health Measurements',
    icon: LineChart,
    shortDescription: 'Measures abdominal visceral adiposity independent of overall weight.',
    whatIsIt: 'Measures waist circumference at the midpoint between lower rib cage and iliac crest, or Waist-to-Height Ratio (WHtR).',
    whyItMatters: 'Abdominal fat (visceral fat) is strongly linked to cardiometabolic disease risk.',
    howMeasured: 'Measuring tape placed horizontally around abdomen above hip bones.',
    referenceRanges: [
      { ageGroup: 'Adult', sex: 'Male', range: 'Under 102 cm (WHtR <0.50)', unit: 'cm', notes: 'Waist <102 cm (40 in) for men; <88 cm (35 in) for women' },
      { ageGroup: 'Adult', sex: 'Female', range: 'Under 88 cm (WHtR <0.50)', unit: 'cm' }
    ],
    highMeaning: 'Waist >102 cm (men) or >88 cm (women) indicates central obesity and elevated metabolic syndrome risk.',
    lowMeaning: 'Generally favorable regarding cardiometabolic risk.',
    relatedCalculatorId: 'waist-height',
    isMeasurableInModal: true
  },
  {
    id: 'temp-gen',
    title: 'Body Temperature (General)',
    category: 'General Health Measurements',
    icon: Thermometer,
    shortDescription: 'Core physiological thermoregulation indicator.',
    whatIsIt: 'Baseline core metabolic heat indicator.',
    whyItMatters: 'Essential vital sign for infection and metabolic state.',
    howMeasured: 'Digital thermometer.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '36.1 – 37.2', unit: '°C', min: 36.1, max: 37.2 }
    ],
    highMeaning: 'Indicates fever response.',
    lowMeaning: 'Indicates hypothermia exposure or lowered baseline.',
    isMeasurableInModal: true
  },
  {
    id: 'hr-gen',
    title: 'Resting Pulse (General)',
    category: 'General Health Measurements',
    icon: HeartPulse,
    shortDescription: 'Basal heart rate indicating cardiorespiratory conditioning.',
    whatIsIt: 'Basal cardiac pulse count at rest.',
    whyItMatters: 'Reflects cardiac stroke volume and autonomic balance.',
    howMeasured: 'Pulse check or oximeter.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '60 – 100', unit: 'bpm', min: 60, max: 100 }
    ],
    highMeaning: 'High resting pulse may indicate stress, poor conditioning, or thyroid activity.',
    lowMeaning: 'Low resting pulse often indicates athletic conditioning or beta blocker action.',
    relatedCalculatorId: 'target-heart-rate',
    isMeasurableInModal: true
  },
  {
    id: 'hydration-gen',
    title: 'Hydration & Daily Water Baseline',
    category: 'General Health Measurements',
    icon: Droplets,
    shortDescription: 'Daily fluid intake required for cellular hydration and renal clearance.',
    whatIsIt: 'Fluid replenishment needed to replace daily water lost via urine, sweat, respiration, and bowel movements.',
    whyItMatters: 'Essential for kidney function, joint lubrication, cognitive alertness, and thermoregulation.',
    howMeasured: 'Tracked via daily fluid volume consumed and urine color observation.',
    referenceRanges: [
      { ageGroup: 'Adult', sex: 'Male', range: '2.5 – 3.7', unit: 'Liters/day', notes: 'Approx. 3.7L total fluids (Men); 2.7L total fluids (Women)' },
      { ageGroup: 'Adult', sex: 'Female', range: '2.0 – 2.7', unit: 'Liters/day' }
    ],
    highMeaning: 'Overhydration is rare in healthy adults with normal kidney function.',
    lowMeaning: 'Inadequate fluid intake leads to dehydration, concentrated dark urine, fatigue, constipation, and headache.',
    relatedCalculatorId: 'water',
    isMeasurableInModal: true
  },

  // ==========================================
  // 11. NUTRITION & WELLNESS
  // ==========================================
  {
    id: 'protein-intake',
    title: 'Daily Protein Requirement',
    category: 'Nutrition & Wellness',
    icon: Utensils,
    shortDescription: 'Baseline daily dietary protein intake for muscle maintenance and tissue repair.',
    whatIsIt: 'Protein supplies amino acids needed for muscle synthesis, enzymatic reactions, and immune antibody formation.',
    whyItMatters: 'Prevents sarcopenia, supports post-exercise recovery, and maintains lean tissue.',
    howMeasured: 'Calculated in grams per kilogram of body weight (g/kg/day).',
    referenceRanges: [
      { ageGroup: 'Adult', range: '0.8 – 1.6', unit: 'g/kg body weight', min: 0.8, max: 1.6, notes: 'RDA baseline: 0.8 g/kg; Active adults: 1.2–2.0 g/kg' }
    ],
    foodSources: ['Chicken breast', 'Eggs', 'Greek yogurt', 'Fish', 'Tofu & tempeh', 'Lentils & beans'],
    highMeaning: 'High protein intake is safe for individuals with healthy kidneys, but should be monitored in chronic kidney disease.',
    lowMeaning: 'Inadequate protein intake leads to muscle loss, weakness, delayed healing, and thinned hair.',
    relatedCalculatorId: 'protein'
  },
  {
    id: 'fiber-intake',
    title: 'Dietary Fiber Target',
    category: 'Nutrition & Wellness',
    icon: Salad,
    shortDescription: 'Indigestible plant carbohydrates promoting gut motility and microbiome health.',
    whatIsIt: 'Dietary fiber consists of soluble and insoluble plant polysaccharides that resist small intestine digestion.',
    whyItMatters: 'Lowers LDL cholesterol, improves glycemic control, promotes bowel regularity, and feeds beneficial gut microbiota.',
    howMeasured: 'Tracked in dietary food logs (grams/day).',
    referenceRanges: [
      { ageGroup: 'Adult', sex: 'Male', range: '30 – 38', unit: 'g/day', min: 30, max: 38 },
      { ageGroup: 'Adult', sex: 'Female', range: '21 – 25', unit: 'g/day', min: 21, max: 25 }
    ],
    foodSources: ['Oats & barley', 'Chia & flaxseeds', 'Beans & chickpeas', 'Berries', 'Apples & pears', 'Whole grains'],
    highMeaning: 'Sudden large increases in fiber without adequate fluid may cause gas, bloating, and abdominal cramping.',
    lowMeaning: 'Low fiber intake is associated with constipation, hemorrhoids, diverticular disease, and higher blood cholesterol.'
  },
  {
    id: 'caloric-baseline',
    title: 'Daily Caloric Baseline (BMR / TDEE)',
    category: 'Nutrition & Wellness',
    icon: Flame,
    shortDescription: 'Energy required for basal metabolism and total daily physical activity.',
    whatIsIt: 'BMR (Basal Metabolic Rate) is the energy expended at rest; TDEE (Total Daily Energy Expenditure) accounts for activity level.',
    whyItMatters: 'Fundamental baseline for weight management, energy balance, and athletic performance.',
    howMeasured: 'Calculated using Mifflin-St Jeor or Harris-Benedict formulas based on age, sex, height, and weight.',
    referenceRanges: [
      { ageGroup: 'Adult', sex: 'Male', range: '2000 – 2800', unit: 'kcal/day', notes: 'Varies with weight, height, age, and physical movement' },
      { ageGroup: 'Adult', sex: 'Female', range: '1600 – 2200', unit: 'kcal/day' }
    ],
    highMeaning: 'Calorie intake exceeding expenditure leads to weight gain and adipose tissue accumulation.',
    lowMeaning: 'Calorie intake below BMR leads to energy deficit, fatigue, muscle wasting, and metabolic slowdown.',
    relatedCalculatorId: 'daily-calories'
  },
  {
    id: 'physical-activity',
    title: 'Physical Activity & Exercise Volume',
    category: 'Nutrition & Wellness',
    icon: Dumbbell,
    shortDescription: 'Recommended weekly aerobic and muscle-strengthening exercise volume.',
    whatIsIt: 'Measures total minutes of moderate-to-vigorous physical activity performed per week.',
    whyItMatters: 'Significantly reduces all-cause mortality, cardiovascular disease, diabetes, and clinical depression.',
    howMeasured: 'Monitored via wearable activity trackers or self-reported exercise minutes.',
    referenceRanges: [
      { ageGroup: 'Adult', range: '150 – 300', unit: 'min/week moderate exercise', notes: 'Or 75–150 min/week of vigorous aerobic exercise + 2 strength days' }
    ],
    highMeaning: 'Extremely excessive training without adequate recovery can cause overtraining syndrome and overuse injuries.',
    lowMeaning: 'Physical inactivity (sedentary lifestyle) is a major modifiable risk factor for chronic diseases.',
    relatedCalculatorId: 'calorie-burn'
  },
  {
    id: 'sleep-quality',
    title: 'Sleep Duration & Quality',
    category: 'Nutrition & Wellness',
    icon: Moon,
    shortDescription: 'Nightly duration of restorative sleep essential for cellular and neurological repair.',
    whatIsIt: 'Measures hours of nocturnal sleep and cycles through REM and deep non-REM stages.',
    whyItMatters: 'Critical for memory consolidation, immune defense, hormonal balance, and cardiovascular restoration.',
    howMeasured: 'Tracked using sleep journals or wearable sleep trackers.',
    referenceRanges: [
      { ageGroup: 'Newborn', range: '14 – 17', unit: 'hours/night' },
      { ageGroup: 'Infant', range: '12 – 15', unit: 'hours/night' },
      { ageGroup: 'Child', range: '9 – 11', unit: 'hours/night' },
      { ageGroup: 'Adolescent', range: '8 – 10', unit: 'hours/night' },
      { ageGroup: 'Adult', range: '7 – 9', unit: 'hours/night', min: 7, max: 9 },
      { ageGroup: 'Older Adult', range: '7 – 8', unit: 'hours/night' }
    ],
    highMeaning: 'Consistently needing >10 hours of sleep may indicate sleep apnea, depression, or underlying medical conditions.',
    lowMeaning: 'Chronic sleep deprivation (<6 hours/night) increases risks for obesity, hypertension, impaired immune function, and cognitive decline.',
    relatedCalculatorId: 'sleep'
  }
]

// Backward compatibility export mapping HealthInfo items to HealthTopic structure
export const healthTopics: HealthTopic[] = healthLibraryItems.map(item => {
  const defaultRange = item.referenceRanges && item.referenceRanges.length > 0
    ? `${item.referenceRanges[0].range} ${item.referenceRanges[0].unit}`
    : 'See details'
  const adultRange = item.referenceRanges?.find(r => r.ageGroup === 'Adult')
  return {
    id: item.id,
    name: item.title,
    description: item.shortDescription,
    range: adultRange ? `${adultRange.range} ${adultRange.unit}` : defaultRange,
    icon: item.icon,
    unit: adultRange?.unit,
    min: adultRange?.min,
    max: adultRange?.max
  }
})
