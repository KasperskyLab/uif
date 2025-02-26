import { useComponentCssConfig } from '@design-system/css-configs/helpers/useComponentCssConfig'

import { BaseThemedButtonProps, ButtonCssConfig, ButtonProps, ButtonViewProps } from './types'

export const useThemedButton = (props: ButtonProps): ButtonViewProps => (
  useComponentCssConfig<ButtonProps, ButtonCssConfig, BaseThemedButtonProps>(props, {
    componentName: 'button',
    defaultValues: { mode: 'primary', size: 'medium' }
  })
)
