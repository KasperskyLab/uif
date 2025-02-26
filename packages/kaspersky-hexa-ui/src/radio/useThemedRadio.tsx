import { useThemedComponent } from '@helpers/useThemedComponent'

import { RadioCssConfig, RadioProps, RadioThemeProps, RadioViewProps } from './types'

export const useThemedRadio = (props: RadioProps): RadioViewProps => (
  useThemedComponent<RadioProps, RadioCssConfig, RadioThemeProps>(props, {
    componentName: 'radio',
    defaultValues: {}
  })
)
