import {
  TagColorConfig,
  TagMode,
  TagSize,
  TagSizeConfig,
  tagModes
} from '@src/tag/types'
import { Size, Theme } from '../../../types'
import { ComponentThemeContext } from '../config'
import { generateColorVariables } from '../helpers/generate-color-variables'
import { SPACES } from '../variables'
import { getTextSizes, TextTypes } from './typography'

export const tagSize: Record<TagSize, TagSizeConfig> = {
  [Size.Small]: {
    ...getTextSizes(TextTypes.L4),
    padding: `${SPACES[1]}px ${SPACES[2]}px`,
    gap: `${SPACES[2]}px`,
    borderRadius: `${SPACES[2]}px`,
    height: `${SPACES[10]}px`
  },
  [Size.Medium]: {
    ...getTextSizes(TextTypes.L4),
    padding: `${SPACES[2]}px ${SPACES[3]}px`,
    gap: `${SPACES[2]}px`,
    borderRadius: `${SPACES[2]}px`,
    height: `${SPACES[12]}px`
  }
}

type ColorReturnType = Record<TagMode, TagColorConfig>

export const tag = ({ colors }: ComponentThemeContext, theme: Theme = 'light'): ColorReturnType => {
  const otherStates = {
    disabled: {
      background: colors.elements.seporator,
      color: colors.textIconsElements.disabled,
      border: 'none'
    },
    readOnly: {
      background: colors.elements.seporator,
      color: colors.tags['neutral-invert'],
      border: 'none'
    },
    invalid: {
      background: colors.tagsoutlined['red-bg-base'],
      color: colors.tagsoutlined.neutral,
      iconColor: colors.criticalitystatuses.critical,
      border: 'none'
    }
  }
  const colorVariables = tagModes.reduce((acc: Partial<ColorReturnType>, item: TagMode) => {
    acc[item] = {
      ...generateColorVariables<TagMode>(colors, item)[theme],
      ...otherStates
    }
    return acc
  }, {}) as ColorReturnType

  return colorVariables
}
