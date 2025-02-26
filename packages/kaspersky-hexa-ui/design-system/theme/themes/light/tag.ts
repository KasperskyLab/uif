import { generateTagColorConfig } from '@design-system/theme/themes/helpers/generateTagColorConfig'
import { Size } from '@design-system/types'
import {
  TagColorConfig,
  TagMode,
  TagSize,
  TagSizeConfig,
  tagModes
} from '@src/tag/types'

import { ComponentThemeContext } from '../config'
import { SPACES } from '../variables'

export const tagSize: Record<TagSize, TagSizeConfig> = {
  [Size.Small]: {
    padding: `${SPACES[1]}px ${SPACES[2]}px`,
    gap: `${SPACES[2]}px`,
    borderRadius: `${SPACES[2]}px`,
    height: `${SPACES[10]}px`
  },
  [Size.Medium]: {
    padding: `${SPACES[2]}px ${SPACES[3]}px`,
    gap: `${SPACES[2]}px`,
    borderRadius: `${SPACES[2]}px`,
    height: `${SPACES[12]}px`
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
