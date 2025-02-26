import { focus } from '@design-system/tokens/focus'
import { getTextSizes } from '@design-system/tokens/typography'
import { Size } from '@design-system/types'
import {
  InformationCardColorConfig,
  InformationCardSizeConfig,
  InformationCardSize
} from '@src/informationCard/types'

import { textLevels } from '@kaspersky/hexa-ui-core/typography/js'

import { ComponentThemeContext } from '../config'
import { SPACES } from '../variables'

export const informationCard = ({ colors, effects }: ComponentThemeContext): InformationCardColorConfig => ({
  unselected: {
    enabled: {
      background: colors.information_card.base.bg.enabled,
      color: colors.information_card.base.text.title_enabled,
      descriptionColor: colors.information_card.base.text.text_enabled,
      border: colors.information_card.base.border.enabled
    },
    hover: {
      background: colors.information_card.base.bg.hover
    },
    pressed: {
      background: colors.information_card.base.bg.active
    },
    disabled: {
      background: colors.information_card.base.bg.disabled,
      color: colors.information_card.base.text.title_disabled,
      border: colors.information_card.base.border.disabled
    },
    ...focus({ colors, effects })
  },
  selected: {
    enabled: {
      background: colors.information_card.selected.bg.enabled,
      color: colors.information_card.selected.text.title_enabled,
      descriptionColor: colors.information_card.selected.text.text_enabled,
      border: colors.information_card.selected.border.enabled
    },
    hover: {
      background: colors.information_card.selected.bg.hover
    },
    pressed: {
      background: colors.information_card.selected.bg.active
    },
    disabled: {
      background: colors.information_card.selected.bg.disabled,
      color: colors.information_card.selected.text.title_disabled,
      border: colors.information_card.base.border.disabled
    },
    ...focus({ colors, effects })
  }
})

export const informationCardSize: Record<InformationCardSize, InformationCardSizeConfig> = {
  [Size.Small]: {
    padding: `${SPACES[8]}px ${SPACES[12]}px`,
    ...getTextSizes(textLevels.H6)
  },
  [Size.Medium]: {
    padding: `${SPACES[12]}px`,
    ...getTextSizes(textLevels.H5)
  }
}
