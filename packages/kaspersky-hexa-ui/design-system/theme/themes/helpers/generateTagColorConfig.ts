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
  const actualVariant = camelToKebabCase(variant) as Exclude<TagMode, 'ai'>

  const aiColorConfig = {
    enabled: `linear-gradient(90deg, ${colors.tag.ai.bg.green.enabled} 0%, ${colors.tag.ai.bg.green.green_0} 45%), linear-gradient(45.68deg, ${colors.tag.ai.bg.marina.enabled} 40.93%, ${colors.tag.ai.bg.violet.enabled} 89.87%)`,
    hover: `linear-gradient(90deg, ${colors.tag.ai.bg.green.enabled} 0%, ${colors.tag.ai.bg.green.green_0} 45%), linear-gradient(45.68deg, ${colors.tag.ai.bg.marina.hover} 40.93%, ${colors.tag.ai.bg.violet.hover} 89.87%)`,
    active: `linear-gradient(90deg, ${colors.tag.ai.bg.green.active} 0%, ${colors.tag.ai.bg.green.active_0} 45%), linear-gradient(45.68deg, ${colors.tag.ai.bg.marina.active} 40.93%, ${colors.tag.ai.bg.violet.active} 89.87%)`
  }

  const filled = {
    enabled: {
      background: variant === 'ai'
        ? aiColorConfig.enabled
        : `${colors.tag[actualVariant].bg.enabled}`,
      color: `${colors.tag[actualVariant].text}`,
      icon: `${colors.tag[actualVariant].icon}`,
      border: 'none'
    },
    hover: {
      background: variant === 'ai'
        ?  aiColorConfig.hover
        : `${colors.tag[actualVariant].bg.hover}`,
      color: `${colors.tag[actualVariant].text}`,
      border: 'none'
    },
    active: {
      background: variant === 'ai'
        ? aiColorConfig.active
        : `${colors.tag[actualVariant].bg.active}`,
      color: `${colors.tag[actualVariant]}`,
      border: 'none'
    },
    ...focus({ effects })
  }

  const outlined = {
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
    ...focus({ effects })
  }

  return {
    filled,
    outlined: variant === 'ai' ? filled : outlined
  }
}
