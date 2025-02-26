export const getLocalizedUnits = () => ['B', 'KB', 'MB', 'GB', 'TB', 'PB']

export const convertFileSize = (sizeInBytes: number): string => {
  const units = getLocalizedUnits()

  let result = sizeInBytes
  let level = 0

  while (result > 1024 && level < units.length - 1) {
    level += 1
    result /= 1024
  }

  const sizeWithDecimal = result.toFixed(2)
  const sizeWithoutDecimal = result.toFixed(0)
  const decimal = +sizeWithDecimal - Math.floor(+sizeWithDecimal)

  const sizeToShow = decimal === 0
    ? sizeWithoutDecimal
    : sizeWithDecimal

  return `${sizeToShow} ${units[level]}`
}
