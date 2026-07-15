import { getTextSizes } from '@design-system/tokens'
import { MonoTextTypes } from '@kaspersky/hexa-ui-core/typography/js'

/** Вертикальный padding блока кода (`pre` в editorCss). */
export const CODE_EDITOR_PADDING_Y_PX = 20

const parsePx = (value: string | number): number =>
  typeof value === 'number' ? value : Number.parseInt(String(value), 10) || 0

export const getCodeEditorLineHeightPx = (): number =>
  parsePx(getTextSizes(MonoTextTypes.MTR3).lineHeight)

/** Максимальная высота панели кода для заданного числа видимых строк. */
export const getMaxHeightForCodeLines = (maxCodeLines: number): number =>
  maxCodeLines * getCodeEditorLineHeightPx() + CODE_EDITOR_PADDING_Y_PX
