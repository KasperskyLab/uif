import { focus } from '@design-system/tokens/focus'
import { TagMode } from '@src/tag'

import { ComponentThemeContext } from '../config'

function camelToKebabCase (str: string) {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1$2').toLowerCase()
}

export function generateTagColorConfig (
  { colors, effects }: ComponentThemeContext,
  variant: TagMode
) : Record<'filled' | 'outlined', any> {
  const actualVariant = camelToKebabCase(variant) as TagMode

  const result = {
    filled: {
      enabled: {
        background: `${colors.tag[actualVariant].bg.enabled}`,
        color: `${colors.tag[actualVariant].text}`,
        icon: `${colors.tag[actualVariant].icon}`,
        border: 'none'
      },
      hover: {
        background: `${colors.tag[actualVariant].bg.hover}`,
        color: `${colors.tag[actualVariant].text}`,
        border: 'none'
      },
      active: {
        background: `${colors.tag[actualVariant].bg.active}`,
        color: `${colors.tag[actualVariant]}`,
        border: 'none'
      },
      ...focus({ colors, effects })
    },
    outlined: {
      enabled: {
        background: `${colors.tag[actualVariant].bg.enabled_outlined}`,
        color: `${colors.tag[actualVariant].text_outlined}`,
        icon: `${colors.tag[actualVariant].icon_outlined}`,
        border: `1px solid ${colors.tag[actualVariant].border_outlined}`
      },
      hover: {
        background: `${colors.tag[actualVariant].bg.hover_outlined}`,
        color: `${colors.tag[actualVariant].text_outlined}`,
        border: `1px solid ${colors.tag[actualVariant].border_outlined}`
      },
      active: {
        background: `${colors.tag[actualVariant].bg.active_outlined}`,
        color: `${colors.tag[actualVariant].text_outlined}`,
        border: `1px solid ${colors.tag[actualVariant].border_outlined}`
      },
      ...focus({ colors, effects })
    }
  }

  return result
}
