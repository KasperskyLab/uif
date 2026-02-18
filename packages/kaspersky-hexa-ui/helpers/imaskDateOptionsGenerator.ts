import { DEFAULT_DATE_FORMAT, DEFAULT_TIME_FORMAT } from '@design-system/tokens'
import { format as dateFNSFormat, parse as dateFNSParse } from 'date-fns'
import { IMask } from 'react-imask'

export const prepareFormatForDateFNS = (format: string) =>
  format
    .replace('YYYY', 'yyyy')
    .replace('DD', 'dd')

const generateIMaskFormat = (format: string): string => {
  return format
    .replace('YYYY', '`y')
    .replace('MM', '`m')
    .replace('DD', '`d')
    .replace('/HH/', '`h')
    .replace('/h/', '`h')
    .replace('mm', '`mm')
    .replace('ss', '`s')
    .replace('ms', '`ms')
}

const blocks = {
  y: {
    mask: IMask.MaskedRange,
    from: 0,
    to: 9999
  },
  HH: {
    mask: IMask.MaskedRange,
    from: 0,
    to: 23,
    maxLength: 2,
    autofix: 'pad'
  },
  h: {
    mask: IMask.MaskedRange,
    from: 1,
    to: 12,
    maxLength: 2,
    autofix: 'pad'
  },
  mm: {
    mask: IMask.MaskedRange,
    from: 0,
    to: 59,
    maxLength: 2,
    autofix: 'pad'
  },
  s: {
    mask: IMask.MaskedRange,
    from: 0,
    to: 59,
    maxLength: 2,
    autofix: 'pad'
  },
  ms: {
    mask: IMask.MaskedRange,
    from: 0,
    to: 999,
    maxLength: 3
  },
  aaa: {
    mask: '#m',
    definitions: {
      '#': /[a|p]/
    },
    autofix: 'pad'
  }
}

export const generateDateIMaskOptions = (format: string = DEFAULT_DATE_FORMAT): IMask.MaskedDateOptions => {
  const preparedFormatForDateFNS = prepareFormatForDateFNS(format)

  return {
    mask: Date,
    lazy: false,
    blocks: blocks,
    pattern: generateIMaskFormat(format),
    format: (date: Date): string => {
      if (!isNaN(date.getTime())) return dateFNSFormat(date, preparedFormatForDateFNS)
      return ''
    },
    parse: (value: string): Date => dateFNSParse(value, preparedFormatForDateFNS, new Date())
  }
}

export const generateTimeIMaskOptions = (format: string = DEFAULT_TIME_FORMAT) => {
  return {
    mask: generateIMaskFormat(format),
    overwrite: true,
    autofix: true,
    blocks: blocks,
    pattern: generateIMaskFormat(format)
  }
}
