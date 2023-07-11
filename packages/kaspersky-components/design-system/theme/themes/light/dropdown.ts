import { DropdownColorConfig, DropdownSizeConfig } from '../../../../src/dropdown/types'
import { ComponentThemeContext } from '../config'
import { BORDER_RADIUS, SPACES } from '../variables'
import { getTextSizes, TextTypes } from './typography'

export const dropdown = ({ colors }: ComponentThemeContext): DropdownColorConfig => ({
  normal: {
    background: colors.background,
    color: colors.textIconsElements.primary
  },
  hover: {
    background: colors.bg.alternative2
  },
  item: {
    selected: {
      background: colors.background
    },
    hover: {
      background: colors.textIconsElements['secondary2-invert']
    },
    disabled: {
      color: colors.textIconsElements.disabled,
      background: colors.bg.alternative
    }
  }
})

export const dropdownSize: DropdownSizeConfig = {
  padding: `${SPACES[2]}px ${SPACES[8]}px ${SPACES[2]}px ${SPACES[6]}px`,
  gap: `${SPACES[5]}px`,
  borderRadius: `${BORDER_RADIUS[2]}px`,
  itemPadding: `${SPACES[3]}px ${SPACES[6]}px`,
  itemTextSizes: getTextSizes(TextTypes.BTR4),
  ...getTextSizes(TextTypes.BTR3)
}
