import { useComponentCssConfig } from '@design-system/css-configs/helpers/useComponentCssConfig'

import {
  CardCssConfig,
  CardProps,
  CardThemeProps,
  CardViewProps
} from './types'

export const useThemedCard = (props: CardProps): CardViewProps => (
  useComponentCssConfig<CardProps, CardCssConfig, CardThemeProps>(props, {
    componentName: 'card',
    defaultValues: { size: 'medium', mode: 'base' },
    propsToDrill: ['size']
  })
)
