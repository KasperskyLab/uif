import { ScrollbarCssConfig, ScrollbarThemeProps, ScrollbarToViewProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedScrollbar = <Props extends ScrollbarThemeProps>(props: Props): ScrollbarToViewProps<Props> => (
  useThemedComponent<Props, ScrollbarCssConfig, ScrollbarThemeProps>(props, {
    componentName: 'scrollbar',
    defaultValues: {}
  })
)
