import { SelectProps, SelectViewProps, SelectCssConfig, SelectThemeProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedSelect = (props: SelectProps): SelectViewProps => (
  useThemedComponent<SelectProps, SelectCssConfig, SelectThemeProps>({ ...props, mode: undefined }, {
    componentName: 'select',
    defaultValues: {}
  })
)
