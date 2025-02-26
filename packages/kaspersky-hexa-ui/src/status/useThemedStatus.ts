import { useThemedComponent } from '@helpers/useThemedComponent'

import { StatusCssConfig, StatusProps, StatusStyleProps, StatusViewProps } from './types'

export const useThemedStatus = (props: StatusProps): StatusViewProps => (
  useThemedComponent<StatusProps, StatusCssConfig, StatusStyleProps>(props, {
    componentName: 'status',
    defaultValues: { mode: 'default' },
    propsToDrill: ['mode']
  })
)
