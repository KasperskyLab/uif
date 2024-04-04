import { InputCssConfig, TextboxProps, TextboxThemedProps, TextboxToViewProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedTextbox = <Props, >(props: Props): TextboxToViewProps<Props> & { size?: TextboxProps['size'] } => (
  useThemedComponent<Props, InputCssConfig, TextboxThemedProps>(props, {
    componentName: 'input',
    defaultValues: { size: 'medium' },
    propsToDrill: ['size']
  })
)
