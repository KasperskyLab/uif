import {
  colors as defaultPalette,
  shortcuts
} from '../../../tokens/palette'
import {
  colors as defaultColors,
  fixedNeutralColors
} from '../light/colors'
const {
  dark: {
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

export const colors = {
  ...defaultColors,
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
