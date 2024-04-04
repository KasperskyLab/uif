import { FieldProps, FieldViewProps, FieldCssConfig, FieldThemeProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedField = (props: FieldProps): FieldViewProps => (
  useThemedComponent<FieldProps, FieldCssConfig, FieldThemeProps>(props, {
    componentName: 'field',
    defaultValues: {}
  })
)
