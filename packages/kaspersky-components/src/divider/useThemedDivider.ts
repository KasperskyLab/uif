import { DividerProps, DividerViewProps, DividerCssConfig, DividerStyleProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedDivider = (props: DividerProps): DividerViewProps => (
  useThemedComponent<DividerProps, DividerCssConfig, DividerStyleProps>(props, {
    componentName: 'divider',
    defaultValues: { mode: 'normal' }
  })
)
