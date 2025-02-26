import { useThemedComponent } from '@helpers/useThemedComponent'

import { SelectCssConfig, SelectProps, SelectThemeProps, SelectViewProps } from './types'

export const useThemedSelect = (props: SelectProps): SelectViewProps => (
  useThemedComponent<SelectProps, SelectCssConfig, SelectThemeProps>({ ...props, mode: undefined }, {
    componentName: 'select',
    defaultValues: {}
  })
)
