const unitPrefixes: Array<{value: number, symbol: string}> = [
  // --- end of type number
  { value: 1e15, symbol: 'P' },
  { value: 1e12, symbol: 'T' },
  { value: 1e9, symbol: 'G' },
  { value: 1e6, symbol: 'M' },
  { value: 1e3, symbol: 'k' },
  { value: 1, symbol: '' },
  { value: 1e-3, symbol: 'm' }
]

export const getShortNumber = (value: number, digits = 0): string => {
  const prefix = unitPrefixes.find(pref => value >= pref.value)
  return !prefix
    ? value.toString()
    : (value / prefix.value).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + prefix.symbol
}
