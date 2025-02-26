import { useComponentCssConfig } from '@design-system/css-configs/helpers/useComponentCssConfig'

import { StatusCardCssConfig, StatusCardProps, StatusCardThemeProps, StatusCardViewProps } from './types'

export const useThemedStatusCard = (props: StatusCardProps): StatusCardViewProps => (
  useComponentCssConfig<StatusCardProps, StatusCardCssConfig, StatusCardThemeProps>(props, {
    componentName: 'statusCard',
    defaultValues: { mode: 'critical', size: 'medium' },
    propsToDrill: ['mode']
  })
)
