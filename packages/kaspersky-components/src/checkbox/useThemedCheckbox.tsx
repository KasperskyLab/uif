import { useThemedComponent } from '@helpers/useThemedComponent'
import { CheckboxCssConfig, CheckboxThemeProps, CheckboxToViewProps } from './types'

export const useThemedCheckbox = <Props, >(props: Props): CheckboxToViewProps<Props> => (
  useThemedComponent<Props, CheckboxCssConfig, CheckboxThemeProps>({ ...props, mode: undefined }, {
    componentName: 'checkbox',
    defaultValues: {}
  })
)
