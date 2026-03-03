export function getGlobalId (prefix: string, name: string | number): string {
  return `${prefix}-${name}`
}
