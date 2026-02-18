import { generateTagColorConfig } from '@design-system/theme/themes/helpers/generateTagColorConfig'
import { Size } from '@design-system/types'
import {
  TagColorConfig,
  TagMode,
  tagModes,
  TagSize,
  TagSizeConfig
} from '@src/tag/types'

import { ComponentThemeContext } from '../config'

export const tagSize: Record<TagSize, TagSizeConfig> = {
  [Size.Small]: {
    padding: '1px 4px',
    gap: '4px',
    borderRadius: '4px',
    height: '20px'
  },
  [Size.Medium]: {
    padding: '4px 6px',
    gap: '4px',
    borderRadius: '4px',
    height: '24px'
  }
}

type ColorReturnType = Record<TagMode, TagColorConfig>

export const tag = ({ colors, effects }: ComponentThemeContext): ColorReturnType => {
  const otherStates = {
    disabled: {
      background: colors.tag.neutral.bg.disabled,
      color: colors.tag.neutral.text_disabled,
      icon: colors.tag.neutral.icon_disabled,
      border: 'none'
    },
    readOnly: {
      background: colors.tag.neutral.bg.readonly,
      color: colors.tag.neutral.text_readonly,
      border: 'none'
    },
    invalid: {
      background: colors.tag.neutral.bg.invalid,
      color: colors.tag.neutral.text_invalid,
      iconStatus: colors.tag.neutral.icon_invalid_status,
      border: 'none'
    }
  }

  const colorVariables = tagModes.reduce((acc: Partial<ColorReturnType>, mode: TagMode) => {
    acc[mode] = {
      ...generateTagColorConfig({ colors, effects }, mode),
      ...otherStates
    }
    return acc
  }, {}) as ColorReturnType

  return colorVariables
}
