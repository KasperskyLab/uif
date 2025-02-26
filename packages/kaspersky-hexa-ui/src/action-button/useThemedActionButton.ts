import { useThemedComponent } from '@helpers/useThemedComponent'

import { ActionButtonCssConfig, ActionButtonProps, ActionButtonThemeProps, ActionButtonViewProps } from './types'

export const useThemedActionButton = (props: ActionButtonProps): ActionButtonViewProps => (
  useThemedComponent<ActionButtonProps, ActionButtonCssConfig, ActionButtonThemeProps>(props, {
    componentName: 'actionButton',
    defaultValues: { mode: 'ghost', size: 'medium' },
    propsToDrill: ['size']
  })
)
