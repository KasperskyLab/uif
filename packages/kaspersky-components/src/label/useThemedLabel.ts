import { LabelProps, LabelViewProps, LabelCssConfig, LabelThemeProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedLabel = (props: LabelProps): LabelViewProps => (
  useThemedComponent<LabelProps, LabelCssConfig, LabelThemeProps>(props, {
    componentName: 'label',
    defaultValues: {}
  })
)
