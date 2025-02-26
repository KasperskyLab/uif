import { productColors } from '@kaspersky/hexa-ui-core/colors/js'

const { icon: iconColorTokens } = productColors
export const sbIconColors = {
  options: Object.entries(iconColorTokens).reduce((arrColors: string[], [section, sectionValue]) => {
    return [...arrColors, ...Object.keys(sectionValue).map(color => `${section}.${color}`)]
  }, []),
  control: { type: 'select' }
}
