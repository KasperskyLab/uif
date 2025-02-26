import { useThemedComponent } from '@helpers/useThemedComponent'

import { HelpMessageCssConfig, HelpMessageProps, HelpMessageThemeProps, HelpMessageViewProps } from './types'

export const useThemedHelpMessage = (props: HelpMessageProps): HelpMessageViewProps => (
  useThemedComponent<HelpMessageProps, HelpMessageCssConfig, HelpMessageThemeProps>(props, {
    componentName: 'helpMessage',
    defaultValues: { mode: 'common' }
  })
)
