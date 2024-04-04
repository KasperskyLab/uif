import { RadioProps, RadioViewProps, RadioCssConfig, RadioThemeProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedRadio = (props: RadioProps): RadioViewProps => (
  useThemedComponent<RadioProps, RadioCssConfig, RadioThemeProps>(props, {
    componentName: 'radio',
    defaultValues: { mode: 'default' }
  })
)
