export const bmiFor = (heightCm: number, weightKg: number) => weightKg / ((heightCm / 100) ** 2)
export const bmiCategory = (bmi: number) => bmi < 18.5 ? 'Below reference range' : bmi < 25 ? 'Within reference range' : bmi < 30 ? 'Above reference range' : 'High range'
export const bmrFor = (age: number, gender: string, heightCm: number, weightKg: number) => Math.round(10 * weightKg + 6.25 * heightCm - 5 * age + (gender === 'male' ? 5 : -161))
export const idealWeight = (heightCm: number, gender: string) => {
  const inches = heightCm / 2.54
  const base = gender === 'male' ? 50 : 45.5
  const estimate = base + 2.3 * (inches - 60)
  return [Math.max(35, estimate * .9), estimate * 1.1]
}
export const waterFor = (weightKg: number, activity: string) => Math.round(weightKg * ({ low: 30, moderate: 35, high: 40 }[activity] ?? 35) / 100) / 10
export const bodyFatFor = (gender: string, height: number, waist: number, neck: number, hip: number) => {
  const log = Math.log10
  return gender === 'male' ? 495 / (1.0324 - .19077 * log(waist - neck) + .15456 * log(height)) - 450 : 495 / (1.29579 - .35004 * log(waist + hip - neck) + .221 * log(height)) - 450
}
export const leanMassFor = (gender: string, heightCm: number, weightKg: number) => gender === 'male' ? 1.1 * weightKg - 128 * (weightKg / heightCm) ** 2 : 1.07 * weightKg - 148 * (weightKg / heightCm) ** 2
export const calorieNeedFor = (bmr: number, activity: string) => Math.round(bmr * ({ low: 1.2, light: 1.375, moderate: 1.55, high: 1.725 }[activity] ?? 1.55))
export const calorieBurnFor = (met: number, weightKg: number, minutes: number) => Math.round(met * 3.5 * weightKg / 200 * minutes)
export const maxHeartRateFor = (age: number) => Math.round(208 - .7 * age)
