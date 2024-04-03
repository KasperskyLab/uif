import {
  TagColorConfig,
  TagMode,
  TagSize,
  TagSizeConfig
} from '@src/tag/types'
import { ComponentThemeContext } from '../config'
import { tag as defaultTagCreator, tagSize as tagCommonSize } from '../light/tag'

export const tag = ({ colors }: ComponentThemeContext): Record<TagMode, TagColorConfig> => defaultTagCreator({ colors }, 'dark')

export const tagSize: Record<TagSize, TagSizeConfig> = tagCommonSize
