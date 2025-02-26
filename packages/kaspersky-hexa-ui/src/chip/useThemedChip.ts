import { useThemedComponent } from '@helpers/useThemedComponent'

import { ChipCssConfig, ChipProps, ChipStyleProps, ChipViewProps } from './types'

export const useThemedChip = (props: ChipProps): ChipViewProps => (
  useThemedComponent<ChipProps, ChipCssConfig, ChipStyleProps>(props, {
    componentName: 'chip',
    defaultValues: { size: 'medium' },
    propsToDrill: ['size']
  })
)
