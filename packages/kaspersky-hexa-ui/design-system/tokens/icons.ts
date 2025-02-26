import iconTypes48 from '@kaspersky/icons/48'
import iconTypes24 from '@kaspersky/icons/24'
import iconTypes16 from '@kaspersky/icons/16'
import iconTypes8 from '@kaspersky/icons/8'
import iconTypes12 from '@kaspersky/icons/12'

export const icons = {
  extraSmall: [...Object.keys(iconTypes8), ...Object.keys(iconTypes12)],
  small: Object.keys(iconTypes16),
  medium: Object.keys(iconTypes24),
  large: Object.keys(iconTypes48)
} as const
