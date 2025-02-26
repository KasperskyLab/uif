const isValidHex = (hex: string) => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hex)

const getChunksFromString = (st: string, chunkSize: number) => st.match(new RegExp(`.{${chunkSize}}`, 'g')) as RegExpMatchArray

const convertHexUnitTo256 = (hexStr: string) => parseInt(hexStr.repeat(2 / hexStr.length), 16)

const getAlphaFloat = (a: number | undefined): number => {
  if (typeof a !== 'undefined') return a / 255
  return 1
}

export const hexToRGBA = (hex: string) => {
  if (!isValidHex(hex)) { return '' }
  const chunkSize = Math.floor((hex.length - 1) / 3)
  const hexArr = getChunksFromString(hex.slice(1), chunkSize)
  const [r, g, b, a] = hexArr.map(convertHexUnitTo256)
  return `rgba(${r}, ${g}, ${b}, ${String(getAlphaFloat(a)).slice(0, 3)})`
}

export const isColorsEqual = (color1: string, color2: string) => {
  if (!color1.startsWith('#') || !color2.startsWith('#')) {
    return (hexToRGBA(color1) || color1) === (hexToRGBA(color2) || color2)
  }
  return color1 === color2
}
