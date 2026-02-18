import { TextLevel, TextSizes, typography } from '@kaspersky/hexa-ui-core/typography/js'

export const getTextSizes = (level: TextLevel): TextSizes => {
  const { htmlTag, ...textSizes } = typography[level]
  return textSizes
}

export const getTextCssSizes = (level: TextLevel): Record<string, string | number> => {
  const { htmlTag, ...textSizes } = typography[level]

  const cssTextSizes = Object.keys(textSizes).reduce((acc, key) => {
    const cssKey = key.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
    acc[cssKey] = textSizes[key as keyof TextSizes]
    return acc
  }, {} as Record<string, string | number>)
  return cssTextSizes
}

export const convertToCssString = (styles: { [s: string]: unknown } | ArrayLike<unknown>) => {
  const cssString = Object.entries(styles)
    .map(([key, value]) => {
      const cssKey = key.split(/(?=[A-Z])/).join('-').toLowerCase()
      return `${cssKey}: ${value};\n`
    })
    .join(' ')

  return cssString
}

export type LabelPosition = 'none' | 'top' | 'aside' | 'right'
export type LabelType = 'default' | 'full' | 'stretch'
