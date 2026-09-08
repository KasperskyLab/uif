export const shallowEqual = (objA: unknown, objB: unknown): boolean => {
  if (Object.is(objA, objB)) return true
  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) return false

  const keysA = Object.keys(objA as Record<string, unknown>)
  const keysB = Object.keys(objB as Record<string, unknown>)
  if (keysA.length !== keysB.length) return false

  for (const key of keysA) {
    if (
      !Object.prototype.hasOwnProperty.call(objB, key) ||
      !Object.is((objA as Record<string, unknown>)[key], (objB as Record<string, unknown>)[key])
    ) {
      return false
    }
  }

  return true
}
