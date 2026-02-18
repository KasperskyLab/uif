import iconTypes12 from '@kaspersky/hexa-ui-icons/12'
import iconTypes16 from '@kaspersky/hexa-ui-icons/16'
import iconTypes24 from '@kaspersky/hexa-ui-icons/24'
import iconTypes48 from '@kaspersky/hexa-ui-icons/48'
import iconTypes8 from '@kaspersky/hexa-ui-icons/8'

export const icons = {
  extraSmall: [...Object.keys(iconTypes8), ...Object.keys(iconTypes12)],
  small: Object.keys(iconTypes16),
  medium: Object.keys(iconTypes24),
  large: Object.keys(iconTypes48)
} as const
