import { useComponentCssConfig } from '@design-system/css-configs/helpers/useComponentCssConfig'

import { SelectCssConfig, SelectProps, SelectThemeProps, SelectViewProps } from './types'

export const useThemedSelect = (props: SelectProps): SelectViewProps => (
  useComponentCssConfig<SelectProps, SelectCssConfig, SelectThemeProps>({ ...props, mode: undefined }, {
    componentName: 'select',
    defaultValues: {}
  })
)
