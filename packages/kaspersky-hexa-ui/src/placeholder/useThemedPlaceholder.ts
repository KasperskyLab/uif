import { useComponentCssConfig } from '@design-system/css-configs/helpers/useComponentCssConfig'

import { PlaceholderCssConfig, PlaceholderProps, PlaceholderThemeProps, PlaceholderViewProps } from './types'

export const useThemedPlaceholder = (props: PlaceholderProps): PlaceholderViewProps => (
  useComponentCssConfig<PlaceholderProps, PlaceholderCssConfig, PlaceholderThemeProps>(props, {
    componentName: 'placeholder',
    defaultValues: { mode: 'base', size: 'medium' },
    propsToDrill: ['size']
  })
)
