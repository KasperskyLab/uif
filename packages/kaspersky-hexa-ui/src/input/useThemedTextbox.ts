import { useComponentCssConfig } from '@design-system/css-configs/helpers/useComponentCssConfig'

import { InputCssConfig, TextboxThemedProps, TextboxToViewProps } from './types'

export const useThemedTextbox = <Props extends TextboxThemedProps, >(props: Props): TextboxToViewProps<Props> => (
  useComponentCssConfig<Props, InputCssConfig, TextboxThemedProps>(props, {
    componentName: 'input',
    defaultValues: {}
  })
)
