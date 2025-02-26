import { useThemedComponent } from '@helpers/useThemedComponent'

import { CheckboxCssConfig, CheckboxProps, CheckboxThemeProps, CheckboxViewProps } from './types'

export const useThemedCheckbox = (props: CheckboxProps): CheckboxViewProps => (
  useThemedComponent<CheckboxProps, CheckboxCssConfig, CheckboxThemeProps>({ ...props, mode: undefined }, {
    componentName: 'checkbox',
    defaultValues: {}
  })
)
