import { ComponentThemeContext } from '../config'
import { SelectColorConfig, SelectSizeConfig } from '../../../../src/select/types'
import { BORDER_RADIUS } from '../variables'
import { getTextSizes, textLevels } from './typography'

export const select = ({ colors }: ComponentThemeContext): SelectColorConfig => ({
  normal: {
    background: colors.background,
    focusBorder: colors.mainInteractFocus,
    color: colors.textIconsElements.primary,
    borderColor: colors.elements.seporatorbold,
    placeholder: {
      color: colors.textIconsElements.secondary2
    },
    dropdown: {
      background: colors.background,
      alignTop: 8
    },
    option: {
      color: colors.textIconsElements.primary
    },
    icon: {
      color: colors.textIconsElements.secondary
    }
  },
  hover: {
    option: {
      background: colors.textIconsElements['secondary2-invert'],
      color: colors.textIconsElements.primary
    }
  },
  disabled: {
    color: colors.textIconsElements.disabled,
    background: colors.elements.seporator
  },
  selected: {
    color: colors.textIconsElements.primary,
    background: colors.textIconsElements['secondary-invert'],
    option: {
      background: colors.background
    }
  },
  active: {
    focusBorder: colors.mainInteractFocus,
    option: {
      background: colors.bg.alternative2
    }
  },
  error: {
    borderColor: colors.criticalitystatuses.high,
  }
})

export const selectSizes: SelectSizeConfig = {
  input: {
    borderRadius: `${BORDER_RADIUS[4]}px`
  },
  dropdown: {
    borderRadius: `${BORDER_RADIUS[2]}px`
  },
  ...getTextSizes(textLevels.BTR3)
}
