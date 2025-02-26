import { productColors } from '@kaspersky/hexa-ui-core/colors/js'

const { icon: iconColorTokens } = productColors
const colorValues = Object.entries(iconColorTokens).reduce((arrColors: string[], [section, sectionValue]) => {
  return [...arrColors, ...Object.keys(sectionValue).map(color => `${section}.${color}`)]
}, [])
export const sbIconColors = {
  options: colorValues,
  control: { type: 'select' },
  description: colorValues.join(', ')
}
