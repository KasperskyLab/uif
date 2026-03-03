export const preciseAdd = (numbers: number[]): number => {
  const factor = Math.pow(10, Math.max(...numbers.map(n => {
    const decimals = n.toString().split('.')[1]
    return decimals?.length ?? 0
  })))

  return numbers.reduce((sum, num) => sum + Math.round(num * factor), 0) / factor
}
