export function checkValue(name: string, value: number, min: number, max: number, unit = '') {
  const state = value < min ? 'Lower than' : value > max ? 'Higher than' : 'Within'
  return { state, message: `${name} is ${state.toLowerCase()} the selected general reference range of ${min}–${max}${unit ? ` ${unit}` : ''}.` }
}
