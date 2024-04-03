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
    tagsoutlined,
    surface,
    'main-interact': mainInteract,
    'danger-interact': dangerInteract
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

  mainInteractPrimary: mainInteract.primary,
  mainInteractSecondary: mainInteract.secondary,
  mainInteractTertiary: mainInteract.tertiary,
  mainInteractFocus: mainInteract.focus,
  mainInteractPressed: defaultPalette.marina200,

  mainInteractPrimaryInverted: mainInteract['primary-invert'],
  mainInteractSecondaryInverted: mainInteract['secondary-invert'],
  mainInteractTertiaryInverted: mainInteract['tertiary-invert'],
  mainInteractBorderInverted: mainInteract['border-invert'],

  dangerInteractPrimary: dangerInteract.primary,
  dangerInteractSecondary: dangerInteract.secondary,
  dangerInteractTertiary: dangerInteract.tertiary,

  dangerInteractPrimaryInverted: dangerInteract['primary-invert'],
  dangerInteractSecondaryInverted: dangerInteract['secondary-invert'],
  dangerInteractTertiaryInverted: dangerInteract['tertiary-invert'],
  dangerInteractBorderInverted: dangerInteract['border-invert'],

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
  tagsoutlined,
  surface,
  mainInteract,
  dangerInteract,
  defaultPalette
}
