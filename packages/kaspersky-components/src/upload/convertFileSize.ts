export const getLocalizedUnits = () => ['B', 'KB', 'MB', 'GB', 'TB', 'PB']

export const convertFileSize = (size: number): string => {
  const units = getLocalizedUnits()

  let result = size
  let level = 0
  while (result > 1024 && level < units.length - 1) {
    level += 1
    result /= 1024
  }
  return `${result.toFixed(2)} ${units[level]}`
}
