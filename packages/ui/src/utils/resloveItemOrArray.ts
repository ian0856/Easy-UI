export function resolveItemOrArray<T>(value: T | T[]) {
  if(!value) return []
  if(Array.isArray(value)) return value
  return [value] as T[]
}