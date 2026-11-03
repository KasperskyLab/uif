import { GRAPHICAL_BYTES } from '../constants'
import { HexadecimalViewProps, ViewContent } from '../types'

import { fromHex } from './fromHex'

export const bufferToView = (content: HexadecimalViewProps['content'], bytesPerRow: number): ViewContent => {
  const decoder = new TextDecoder('cp866')
  const rows: ViewContent['rows'] = []
  const buffer = typeof content === 'string' ? fromHex(content) : new Uint8Array(content)
  const text = decoder.decode(buffer)

  for (let i = 0; i < buffer.length; i += bytesPerRow) {
    const hexRow: string[] = Array.from({ length: bytesPerRow })
    const unicodeRow: string[] = Array.from({ length: bytesPerRow })
    let pos = 0

    for (let j = i; j < Math.min(i + bytesPerRow, buffer.length); j++) {
      const bufValue = buffer[j]
      const shouldReplace = bufValue < 0x20 || bufValue > 0xff
      hexRow[pos] = bufValue.toString(16).padStart(2, '0')
      const unicodeSymbol = GRAPHICAL_BYTES.get(bufValue) ?? (shouldReplace ? '.' : text[j])
      unicodeRow[pos++] = unicodeSymbol
    }

    rows.push({
      hex: hexRow,
      decoded: unicodeRow,
      addr: i.toString(16).padStart(8, '0')
    })
  }

  return { rows }
}