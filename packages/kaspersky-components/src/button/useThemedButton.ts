import { useThemedComponent } from '@helpers/useThemedComponent'
import { BaseThemedButtonProps, ButtonCssConfig, ButtonViewProps, ButtonProps } from './types'

export const useThemedButton = (props: ButtonProps): ButtonViewProps => (
  useThemedComponent<ButtonProps, ButtonCssConfig, BaseThemedButtonProps>(props, {
    componentName: 'button',
    defaultValues: { mode: 'primary', size: 'medium' }
  })
)
