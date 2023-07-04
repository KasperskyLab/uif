import {
  allColors,
  colors as defaultPalette,
  extendedColorType,
  shortcuts
} from '../../../tokens/palette'
const {
  light: {
    bg,
    elements,
    'text-icons-elements': textIconsElements,
    statestatuses,
    criticalitystatuses,
    tags,
    surface
  }
} = shortcuts

const neutralColorsList = (Object.keys(allColors) as Array<keyof typeof allColors>).filter((key) => {
  return key.includes('fixedneutralcolor')
})

export type ColorKey = keyof typeof allColors;
export type FilterUnionByStringIncludes<T, K extends string> = T & K;
export type NeutralColor = FilterUnionByStringIncludes<extendedColorType, `fixedneutralcolor_${string}`>;

export const fixedNeutralColors = neutralColorsList
  .reduce<Record<NeutralColor, string>>(
    (acc, key) => {
      return { ...acc, [key]: allColors[key as keyof typeof allColors] }
    },
  {} as Record<NeutralColor, string>
  )

export const colors = {
  foregroundColor: textIconsElements.primary,
  foregroundInvertedColor: textIconsElements['primary-invert'],
  background: bg.base,

  mainInteractPrimary: defaultPalette.marina500,
  mainInteractSecondary: defaultPalette.marina400,
  mainInteractTertiary: defaultPalette.marina600,
  mainInteractFocus: defaultPalette.marina300,
  mainInteractPressed: defaultPalette.marina200,

  dangerPrimary: criticalitystatuses.critical,
  dangerSecondary: defaultPalette.red600,
  dangerPressed: defaultPalette.red800,

  positiveBackgroundPrimary: defaultPalette.emerald600,
  errorBackgroundPrimary: defaultPalette.red600,

  fixedNeutralColors,
  bg,
  elements,
  textIconsElements,
  'text-icons-elements': textIconsElements,
  statestatuses,
  criticalitystatuses,
  tags,
  surface,
  defaultPalette
}
