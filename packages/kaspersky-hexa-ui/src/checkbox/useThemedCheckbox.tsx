import { useComponentCssConfig } from '@design-system/css-configs/helpers/useComponentCssConfig'

import { CheckboxCssConfig, CheckboxProps, CheckboxThemeProps, CheckboxViewProps } from './types'

export const useThemedCheckbox = (props: CheckboxProps): CheckboxViewProps => (
  useComponentCssConfig<CheckboxProps, CheckboxCssConfig, CheckboxThemeProps>({ ...props, mode: undefined }, {
    componentName: 'checkbox',
    defaultValues: {}
  })
)
