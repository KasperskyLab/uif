// copied from core-js uint8array polyfill since es2019 uint8array does not support static .fromHex method
export const fromHex = (string: string) => {
  const stringLength = string.length

  if (stringLength % 2 !== 0) {
    throw new SyntaxError('String should be an even number of characters')
  }

  const maxLength = stringLength / 2
  const bytes = new Uint8Array(maxLength)
  const segments = string.match(/[\S\s]{2}/g) as string[]

  for (let written = 0; written < maxLength; written++) {
    const result = +('0x' + segments[written] + '0')

    if (result !== result) {
      throw new SyntaxError('String should only contain hex characters')
    }
    bytes[written] = result >> 4
  }

  return bytes
}