import { ComponentThemeContext } from '@design-system/theme/themes/config'
import { SPACES } from '@design-system/theme/themes/variables'

export type Focus = {
  focus?: {
    boxShadow: string
  }
}

export const focus = ({ colors }: ComponentThemeContext): Focus => {
  return {
    focus: {
      boxShadow: `0 0 0 ${SPACES[1]}px ${colors.mainInteractFocus}`
    }
  }
}
