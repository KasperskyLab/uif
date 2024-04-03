import { ComponentThemeContext } from '../config'
import {
  ChipSize,
  ChipSizeConfig,
  ChipColorConfig
} from '@src/chip/types'
import { Size } from '@design-system/types'
import { SPACES } from '../variables'
import { focus } from '@design-system/tokens/focus'

export const chip = ({ colors }: ComponentThemeContext): ChipColorConfig => ({
  normal: {
    background: colors.tags['neutral-bg-base'],
    crossColor: colors.textIconsElements.secondary,
    color: colors.textIconsElements.primary
  },
  hover: {
    background: colors.tags['neutral-bg-hover']
  },
  active: {
    background: colors.tags['neutral-bg-active']
  },
  disabled: {
    background: colors.tags['neutral-bg-base'],
    crossColor: colors.textIconsElements.disabled,
    color: colors.textIconsElements.disabled
  },
  ...focus({ colors })
})

export const chipSize: Record<ChipSize, ChipSizeConfig> = {
  [Size.Medium]: {
    height: `${SPACES[12]}px`,
    padding: `${SPACES[2]}px ${SPACES[4]}px`
  },
  [Size.Large]: {
    height: `${SPACES[16]}px`,
    padding: `${SPACES[2]}px ${SPACES[6]}px`
  }
}
