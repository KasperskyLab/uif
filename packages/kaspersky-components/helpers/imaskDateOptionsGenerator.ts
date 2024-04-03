import { DEFAULT_DATE_FORMAT, DEFAULT_TIME_FORMAT } from '@design-system/tokens'
import { IMask } from 'react-imask'
import { format as dateFNSFormat, parse as dateFNSParse } from 'date-fns'

const generateIMaskFormat = (format: string): string => {
  return format
    .replace('YYYY', '`y')
    .replace('MM', '`m')
    .replace('DD', '`d')
    .replace('HH', '`h')
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
  h: {
    mask: IMask.MaskedRange,
    from: 0,
    to: 23,
    maxLength: 2
  },
  mm: {
    mask: IMask.MaskedRange,
    from: 0,
    to: 59,
    maxLength: 2
  },
  s: {
    mask: IMask.MaskedRange,
    from: 0,
    to: 59,
    maxLength: 2
  },
  ms: {
    mask: IMask.MaskedRange,
    from: 0,
    to: 999,
    maxLength: 3
  }
}

export const generateDateIMaskOptions = (format: string = DEFAULT_DATE_FORMAT): IMask.MaskedDateOptions => {
  const preparedFormatForDateFNS = format
    .replace('YYYY', 'yyyy')
    .replace('DD', 'dd')
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
