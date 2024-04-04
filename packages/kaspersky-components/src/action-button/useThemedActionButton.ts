import { ActionButtonProps, ActionButtonViewProps, ActionButtonCssConfig, ActionButtonThemeProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedActionButton = (props: ActionButtonProps): ActionButtonViewProps => (
  useThemedComponent<ActionButtonProps, ActionButtonCssConfig, ActionButtonThemeProps>(props, {
    componentName: 'actionButton',
    defaultValues: { mode: 'ghost', size: 'medium' },
    propsToDrill: ['size']
  })
)
