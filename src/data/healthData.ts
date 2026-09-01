import { Activity, BedDouble, Droplets, HeartPulse, Gauge, Moon, Scale, Thermometer, Wind, TestTube2, Utensils } from 'lucide-react'
import type { HealthTopic } from '../types/health'

export const healthTopics: HealthTopic[] = [
  { id: 'temperature', name: 'Body temperature', description: 'A quick guide to common adult temperature readings.', range: 'Often around 36.1–37.2 °C', icon: Thermometer, unit: '°C', min: 36.1, max: 37.2 },
  { id: 'pressure', name: 'Blood pressure', description: 'Understand the two numbers in a blood-pressure reading.', range: 'Typical adult target: under 120/80', icon: Gauge, unit: ' mmHg', min: 90, max: 120 },
  { id: 'sugar', name: 'Blood sugar', description: 'General fasting glucose reference information.', range: 'Fasting: 70–99 mg/dL', icon: TestTube2, unit: ' mg/dL', min: 70, max: 99 },
  { id: 'heart-rate', name: 'Heart rate', description: 'Resting pulse varies with fitness, medicines and context.', range: 'Adults at rest: 60–100 bpm', icon: HeartPulse, unit: ' bpm', min: 60, max: 100 },
  { id: 'spo2', name: 'Oxygen saturation', description: 'A pulse oximeter estimates oxygen saturation.', range: 'Often 95–100%', icon: Wind, unit: '%', min: 95, max: 100 },
  { id: 'hemoglobin', name: 'Hemoglobin', description: 'Carries oxygen in blood; lab ranges vary by person.', range: 'Approx. 12–17.5 g/dL', icon: Activity, unit: ' g/dL', min: 12, max: 17.5 },
  { id: 'bmi', name: 'BMI', description: 'A screening measure based on height and weight.', range: 'General reference: 18.5–24.9', icon: Scale },
  { id: 'hydration', name: 'Hydration', description: 'Fluid needs change with activity, climate and health.', range: 'Use our daily water estimate', icon: Droplets },
  { id: 'sleep', name: 'Sleep', description: 'Regular, restorative sleep supports daily wellbeing.', range: 'Many adults need 7–9 hours', icon: Moon },
  { id: 'calories', name: 'Calories', description: 'Energy needs depend on body, goals and movement.', range: 'Use BMR as a starting point', icon: Utensils },
  { id: 'movement', name: 'Daily movement', description: 'Small, regular activity supports long-term wellbeing.', range: 'Build toward 150 min/week', icon: BedDouble }
]
