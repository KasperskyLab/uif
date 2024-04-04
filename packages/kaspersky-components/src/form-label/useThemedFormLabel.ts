import { FormLabelProps, FormLabelViewProps, FormLabelColorConfig, FormLabelThemeProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedFormLabel = (props: FormLabelProps): FormLabelViewProps => (
  useThemedComponent<FormLabelProps, FormLabelColorConfig, FormLabelThemeProps>(props, {
    componentName: 'formLabel',
    defaultValues: { mode: 'primary' }
  })
)
