import { getIconPackFromWindows } from '@helpers/getIconPackFrowWindows'

/** @deprecated Use direct imports from kl-hexa-ui-icons */
export const icons = {
  extraSmall: [...Object.keys(getIconPackFromWindows(8)), ...Object.keys(getIconPackFromWindows(12))],
  small: Object.keys(getIconPackFromWindows(16)),
  medium: Object.keys(getIconPackFromWindows(24)),
  large: Object.keys(getIconPackFromWindows(48))
} as const
