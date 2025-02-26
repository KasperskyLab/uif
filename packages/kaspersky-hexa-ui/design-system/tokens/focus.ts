import { ComponentThemeContext } from '@design-system/theme/themes/config'

export type Focus = {
  focus?: {
    boxShadow: string
  }
}

export const focus = ({ colors, effects }: ComponentThemeContext): Focus => {
  return {
    focus: {
      boxShadow: `${effects.focus[1]} ${colors.focus.stroke}`
    }
  }
}
