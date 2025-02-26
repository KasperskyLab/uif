import { useThemedComponent } from '@helpers/useThemedComponent'

import { DividerCssConfig, DividerProps, DividerStyleProps, DividerViewProps } from './types'

export const useThemedDivider = (props: DividerProps): DividerViewProps => (
  useThemedComponent<DividerProps, DividerCssConfig, DividerStyleProps>(props, {
    componentName: 'divider',
    defaultValues: { mode: 'normal' }
  })
)
