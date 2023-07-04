import { PaginationColorConfig, PaginationSize as Size, PaginationSizeConfig as SizeConfig } from '../../../../src/pagination/types'
import { ComponentThemeContext } from '../config'
import { BORDER_RADIUS, SPACES } from '../variables'
import { getTextSizes, TextTypes } from './typography'

export const pagination = ({ colors }: ComponentThemeContext): PaginationColorConfig => ({
  normal: {
    color: colors.textIconsElements.primary,
    background: colors.background,
    border: colors.elements.seporatorbold
  },
  disabled: {
    color: colors.textIconsElements.disabled,
    background: colors.elements.seporator,
    border: colors.elements.seporatorbold
  },
  active: {
    border: colors.mainInteractPrimary
  },
  hover: {
    background: colors.bg.alternative2
  }
})

const commonSizes = {
  selectItemPadding: `0 ${SPACES[6]}px`,
  paginationItemBorderRadius: `${BORDER_RADIUS[3]}px`,
  dropdownBorderRadius: `${BORDER_RADIUS[2]}px`
}

export const paginationSize: Record<Size, SizeConfig> = {
  medium: {
    padding: `${SPACES[3]}px`,
    size: `${SPACES[16]}px`,
    selectPadding: `${SPACES[3]}px ${SPACES[6]}px`,
    ...getTextSizes(TextTypes.BTR3),
    ...commonSizes
  },
  small: {
    padding: `${SPACES[2]}px ${SPACES[4]}px`,
    size: `${SPACES[12]}px`,
    selectPadding: `${SPACES[2]}px ${SPACES[6]}px`,
    ...getTextSizes(TextTypes.BTM4),
    ...commonSizes
  }
}
