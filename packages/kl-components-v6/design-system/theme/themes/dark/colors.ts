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
    surface
  }
} = shortcuts

export const colors = {
  ...defaultColors,
  foregroundColor: textIconsElements.primary,
  foregroundInvertedColor: textIconsElements['primary-invert'],
  background: bg.base,
  mainInteractPrimary: defaultPalette.marina500,
  mainInteractSecondary: defaultPalette.marina400,
  mainInteractTertiary: defaultPalette.marina600,
  mainInteractFocus: defaultPalette.marina300,
  mainInteractPressed: defaultPalette.marina200,

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
