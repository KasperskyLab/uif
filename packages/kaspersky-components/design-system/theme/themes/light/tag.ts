import { TagSize, TagSizeConfig } from '../../../../src/tag/types'
import { Size } from '../../../types'
import { SPACES } from '../variables'
import { getTextSizes, TextTypes } from './typography'

export const tagSize: Record<TagSize, TagSizeConfig> = {
  [Size.Small]: {
    ...getTextSizes(TextTypes.L4),
    padding: `0px ${SPACES[2]}px 0px ${SPACES[2]}px`,
    gap: `${SPACES[2]}px`,
    borderRadius: `${SPACES[1]}px`
  },
  [Size.Medium]: {
    ...getTextSizes(TextTypes.L4),
    padding: `${SPACES[2]}px ${SPACES[3]}px`,
    gap: `${SPACES[2]}px`,
    borderRadius: `${SPACES[2]}px`
  }
}
