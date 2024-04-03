import { ComponentThemeContext } from '../config'
import { ToolbarColorConfig } from '@src/toolbar/types'
import { focus } from '@design-system/tokens/focus'

export const toolbar = ({ colors }: ComponentThemeContext): ToolbarColorConfig => ({
  background: colors.elements.separator,
  divider: {
    background: colors.elements.line
  },
  button: {
    hover: {
      background: colors.elements.separator
    },
    active: {
      background: colors.elements['separator-bold']
    }
  },
  input: {
    normal: {
      background: colors.bg.base,
      color: colors.textIconsElements.primary
    },
    hover: {
      background: colors.elements.separator,
      border: colors.mainInteractSecondary
    },
    ...focus({ colors })
  }
})
