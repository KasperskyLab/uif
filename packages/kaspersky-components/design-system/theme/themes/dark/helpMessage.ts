import { ComponentThemeContext } from '@design-system/theme'
import { helpMessage as defaultHelpMessage } from '@design-system/theme/themes/light/helpMessage'

export const helpMessage = ({ colors }: ComponentThemeContext) => defaultHelpMessage({ colors })
