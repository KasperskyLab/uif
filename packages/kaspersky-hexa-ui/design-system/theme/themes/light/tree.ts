import { TreeColorConfig } from '@src/tree/types'

import { ComponentThemeContext } from '../config'

export const tree = ({ colors }: ComponentThemeContext): TreeColorConfig => ({
  enabled: {
    color: colors.tree.text.enabled,
    lineColor: colors.tree.icon.dnd,
    arrowColor: colors.action_button.icon.ghost.enabled
  },
  hover: {
    color: colors.tree.text.hover
  },
  active: {
    color: colors.tree.text.active
  },
  focus: {
    color: colors.focus.stroke
  },
  disabled: {
    color: colors.tree.text.disabled
  },
  error: {
    border: colors.input_text.border.error
  }
})
