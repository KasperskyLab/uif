const isValidHex = (hex) => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hex)

const getChunksFromString = (st, chunkSize) => st.match(new RegExp(`.{${chunkSize}}`, 'g'))

const convertHexUnitTo256 = (hexStr) => parseInt(hexStr.repeat(2 / hexStr.length), 16)

const getAlphaFloat = (a) => {
  if (typeof a !== 'undefined') return a / 255
  return 1
}

export const hexToRGBA = (hex) => {
  if (!isValidHex(hex)) { return '' }
  const chunkSize = Math.floor((hex.length - 1) / 3)
  const hexArr = getChunksFromString(hex.slice(1), chunkSize)
  const [r, g, b, a] = hexArr.map(convertHexUnitTo256)
  // @ts-ignore
  return `rgba(${r}, ${g}, ${b}, ${getAlphaFloat(a).toPrecision(2) * 1})`
}

export const isColorsEqual = (color1, color2) => {
  if (!color1.startsWith('#') || !color2.startsWith('#')) {
    return (hexToRGBA(color1) || color1) === (hexToRGBA(color2) || color2)
  }
  return color1 === color2
}
