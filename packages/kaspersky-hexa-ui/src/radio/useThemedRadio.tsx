import { useComponentCssConfig } from '@design-system/css-configs/helpers/useComponentCssConfig'

import { RadioCssConfig, RadioProps, RadioThemeProps, RadioViewProps } from './types'

export const useThemedRadio = (props: RadioProps): RadioViewProps => (
  useComponentCssConfig<RadioProps, RadioCssConfig, RadioThemeProps>(props, {
    componentName: 'radio',
    defaultValues: {}
  })
)
