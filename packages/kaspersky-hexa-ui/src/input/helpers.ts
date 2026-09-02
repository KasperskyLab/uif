import { TextboxNumberProps } from './types'

export type UseHandleKeyDownProps = Pick<TextboxNumberProps, 'min' | 'integerOnly' | 'decimalSeparator' | 'precision'>

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

export const getValidator = ({
  min,
  integerOnly,
  decimalSeparator = '.',
  precision
}: UseHandleKeyDownProps): RegExp => {
  const sign = min !== undefined && min >= 0 ? '' : '-?'

  const escapedSep = escape(decimalSeparator)
  const decimalPart = integerOnly
    ? ''
    : `(?:${escapedSep}\\d{0,${precision ?? ''}})?`

  const pattern = `^${sign}\\d*${decimalPart}$`

  return new RegExp(pattern)
}

export const trimmedValue = (value: number, { min, max }: Pick<TextboxNumberProps, 'min' | 'max'>) => {
  if (min !== undefined && max !== undefined && min > max) {
    return 0
  } else if (min !== undefined && value < min) {
    return min
  } else if (max !== undefined && value > max) {
    return max
  } else {
    return value
  }
}

export const getDecimalPrecision = (num: number) => {
  if (Number.isInteger(num) || !Number.isFinite(num)) {
    return 0
  }
  const parts = num.toString().split('.')
  return parts[1] ? parts[1].length : 0
}

export const normalizeValue = (
  value: TextboxNumberProps['value'],
  {
    allowEmpty,
    min,
    max
  }: Pick<TextboxNumberProps, 'allowEmpty' | 'min' | 'max'>
): TextboxNumberProps['value'] => {
  if (!value) {
    if (allowEmpty) return ''
    return min !== undefined ? min.toString() : '0'
  }

  const valueString = value.toString()

  const sign = valueString.startsWith('-') ? '-' : ''
  const raw = valueString.replace(/^[-+]/, '')

  const [intRaw, fracRaw = ''] = raw.split('.')

  const intPart = intRaw.replace(/^0+(?=\d)/, '') || '0'

  const fracPart = fracRaw.replace(/0+$/g, '')
  const result = fracPart ? `${sign}${intPart}.${fracPart}` : `${sign}${intPart}`

  const trimmedResult = trimmedValue(Number(result), { min, max })

  return typeof value === 'number' ? trimmedResult : trimmedResult.toString()
}
