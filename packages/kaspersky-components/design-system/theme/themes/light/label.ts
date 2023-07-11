import { ComponentThemeContext } from '../config'

export const label = ({ colors }: ComponentThemeContext): any => ({
  requiredColor: colors.criticalitystatuses.high
})
