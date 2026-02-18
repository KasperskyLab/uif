import { ComponentThemeContext } from '@design-system/theme'
import { helpMessage as defaultHelpMessage } from '@design-system/theme/themes/light/helpMessage'
import { HelpMessageMode, HelpMessageStateProps } from '@src/help-message/types'

export const helpMessage = ({ colors, effects }: ComponentThemeContext): Record<HelpMessageMode, HelpMessageStateProps> =>
  defaultHelpMessage({ colors, effects })
