import { TextboxNumberProps } from './types'

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

export const toExactNumber = (
  value: TextboxNumberProps['value']
): TextboxNumberProps['value'] => {
  if (typeof value === 'number') {
    return value
  }

  return String(Number(value)) === value ? Number(value) : value
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

  const numeric = Number(result)
  const trimmedResult = trimmedValue(numeric, { min, max })

  if (typeof value === 'number') {
    return trimmedResult
  }

  return trimmedResult !== numeric ? trimmedResult.toString() : result
}

export const getNumberSeparators = (locale: string) => {
  const parts = new Intl.NumberFormat(
    locale === 'hash-id' ? 'en-US' : locale
  ).formatToParts(12345.6)

  return {
    group: parts.find(part => part.type === 'group')?.value ?? '',
    decimal: parts.find(part => part.type === 'decimal')?.value ?? '.'
  }
}