import { useThemedComponent } from '@helpers/useThemedComponent'

import { FormLabelColorConfig, FormLabelProps, FormLabelThemeProps, FormLabelViewProps } from './types'

export const useThemedFormLabel = (props: FormLabelProps): FormLabelViewProps => (
  useThemedComponent<FormLabelProps, FormLabelColorConfig, FormLabelThemeProps>(props, {
    componentName: 'formLabel',
    defaultValues: { mode: 'primary' },
    propsToDrill: ['mode']
  })
)
