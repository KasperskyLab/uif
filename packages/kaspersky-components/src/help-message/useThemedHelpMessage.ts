import { HelpMessageProps, HelpMessageViewProps, HelpMessageCssConfig, HelpMessageThemeProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedHelpMessage = (props: HelpMessageProps): HelpMessageViewProps => (
  useThemedComponent<HelpMessageProps, HelpMessageCssConfig, HelpMessageThemeProps>(props, {
    componentName: 'helpMessage',
    defaultValues: { mode: 'common' }
  })
)
