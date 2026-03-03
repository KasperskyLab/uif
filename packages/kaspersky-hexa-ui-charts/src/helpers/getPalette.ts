import { memoize } from 'lodash'

import { widgetColors } from '@kaspersky/hexa-ui-core/colors/js'

export const getCommonPalette = memoize((): string[] => {
  return [
    'var(--chart--base--series--marina--primary--400)',
    'var(--chart--base--series--violet--primary--400)',
    'var(--chart--base--series--marengo--primary--400)',
    'var(--chart--base--series--grass--primary--400)',
    'var(--chart--base--series--purple--primary--400)',
    'var(--chart--base--series--yellow--primary--400)',
    'var(--chart--base--series--coldgrey--primary--400)',
    'var(--chart--base--series--emerald--primary--400)',
    'var(--chart--base--series--orange--primary--400)',
    'var(--chart--base--series--marina--primary--300)',
    'var(--chart--base--series--violet--primary--300)',
    'var(--chart--base--series--marengo--primary--300)',
    'var(--chart--base--series--grass--primary--300)',
    'var(--chart--base--series--purple--primary--300)',
    'var(--chart--base--series--coldgrey--primary--300)',
    'var(--chart--base--series--orange--primary--300)',
    'var(--chart--base--series--marina--primary--700)',
    'var(--chart--base--series--violet--primary--700)',
    'var(--chart--base--series--marengo--primary--700)',
    'var(--chart--base--series--grass--primary--700)',
    'var(--chart--base--series--purple--primary--700)',
    'var(--chart--base--series--coldgrey--primary--700)',
    'var(--chart--base--series--orange--primary--700)'
  ]
})

export const getPiePalette = memoize((): string[] => {
  return [
    'var(--chart--base--series--marina--primary--500)',
    'var(--chart--base--series--violet--primary--500)',
    'var(--chart--base--series--marengo--primary--500)',
    'var(--chart--base--series--grass--primary--500)',
    'var(--chart--base--series--purple--primary--500)',
    'var(--chart--base--series--coldgrey--primary--500)',
    'var(--chart--base--series--orange--primary--500)',
    'var(--chart--base--series--marina--primary--300)',
    'var(--chart--base--series--violet--primary--300)',
    'var(--chart--base--series--marengo--primary--300)',
    'var(--chart--base--series--grass--primary--300)',
    'var(--chart--base--series--purple--primary--300)',
    'var(--chart--base--series--coldgrey--primary--300)',
    'var(--chart--base--series--orange--primary--300)',
    'var(--chart--base--series--marina--primary--700)',
    'var(--chart--base--series--violet--primary--700)',
    'var(--chart--base--series--marengo--primary--700)',
    'var(--chart--base--series--grass--primary--700)',
    'var(--chart--base--series--purple--primary--700)',
    'var(--chart--base--series--coldgrey--primary--700)',
    'var(--chart--base--series--orange--primary--700)'
  ]
})

export const getSpeedometerPalette = memoize((): string[] => {
  // TODO support theme
  return [
    widgetColors.chart.base.series.marina.primary[400].light,
    widgetColors.chart.base.series.red.primary[400].light
  ]
})

export function getColorFromPalette (palette: string[], index: number): string {
  return palette[index % palette.length]
}
