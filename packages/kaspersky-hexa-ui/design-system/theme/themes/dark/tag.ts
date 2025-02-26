import {
  TagColorConfig,
  TagMode,
  TagSize,
  TagSizeConfig
} from '@src/tag/types'

import { ComponentThemeContext } from '../config'
import { tag as defaultTag, tagSize as tagCommonSize } from '../light/tag'

export const tag = ({ colors, effects }: ComponentThemeContext): Record<TagMode, TagColorConfig> => defaultTag({ colors, effects })

export const tagSize: Record<TagSize, TagSizeConfig> = tagCommonSize
