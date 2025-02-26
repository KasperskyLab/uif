import { useThemedComponent } from '@helpers/useThemedComponent'

import { FieldCssConfig, FieldProps, FieldThemeProps, FieldViewProps } from './types'

export const useThemedField = (props: FieldProps): FieldViewProps => (
  useThemedComponent<FieldProps, FieldCssConfig, FieldThemeProps>(props, {
    componentName: 'field',
    defaultValues: {}
  })
)
