import { useThemedComponent } from '@helpers/useThemedComponent'

import { ScrollbarCssConfig, ScrollbarThemeProps, ScrollbarToViewProps } from './types'

export const useThemedScrollbar = <Props extends ScrollbarThemeProps>(props: Props): ScrollbarToViewProps<Props> => (
  useThemedComponent<Props, ScrollbarCssConfig, ScrollbarThemeProps>(props, {
    componentName: 'scrollbar',
    defaultValues: {}
  })
)
