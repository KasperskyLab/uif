import { TagSize, TagSizeConfig } from '../../../../src/tag/types'
import { tagSize as tagCommonSize } from '../light/tag'

export const tagSize: Record<TagSize, TagSizeConfig> = {
  ...tagCommonSize
}
