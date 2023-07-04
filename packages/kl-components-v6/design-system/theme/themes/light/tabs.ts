import { TabsColorConfig, TabsSizeConfig } from '../../../../src/tabs/types'
import { ComponentThemeContext } from '../config'
import { BORDER_RADIUS, SPACES } from '../variables'
import { getTextSizes, textLevels } from './typography'

export const tabs = ({ colors }: ComponentThemeContext): TabsColorConfig => ({
  active: {
    color: colors.textIconsElements.primary,
    border: colors.criticalitystatuses.positive
  },
  normal: {
    color: colors.textIconsElements.secondary,
    border: colors.elements.seporator,
    background: colors.background,
    paneNumber: {
      color: colors.textIconsElements.baseicon
    }
  },
  hover: {
    color: colors.textIconsElements.secondary2,
    border: colors.elements.seporator,
    dropdown: {
      background: colors.textIconsElements['secondary2-invert']
    }
  },
  disabled: {
    color: colors.textIconsElements.disabled
  }
})

export const tabsSize: TabsSizeConfig = {
  card: {
    padding: `${SPACES[3]}px ${SPACES[6]}px`,
    borderRadius: `${BORDER_RADIUS[2]}px ${BORDER_RADIUS[2]}px 0 0`
  },
  leftTabs: {
    padding: `${SPACES[6]}px ${SPACES[8]}px`,
    borderRadius: `${BORDER_RADIUS[2]}px`,
    textSizes: getTextSizes(textLevels.L3)
  },
  tabs: {
    list: {
      padding: `${SPACES[1]}px`
    },
    more: {
      padding: `0 ${SPACES[8]}px`
    },
    linkBar: {
      borderRadius: `${SPACES[1]}px`
    },
    disabled: {
      borderRadius: `${SPACES[1]}px`
    }
  },
  pane: {
    gap: `${SPACES[4]}px`
  },
  dropdown: {
    borderRadius: `${BORDER_RADIUS[2]}px`
  },
  ...getTextSizes(textLevels.L2)
}
