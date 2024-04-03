import { ChipProps, ChipViewProps, ChipCssConfig, ChipStyleProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedChip = (props: ChipProps): ChipViewProps => (
  useThemedComponent<ChipProps, ChipCssConfig, ChipStyleProps>(props, {
    componentName: 'chip',
    defaultValues: { size: 'medium' }
  })
)
