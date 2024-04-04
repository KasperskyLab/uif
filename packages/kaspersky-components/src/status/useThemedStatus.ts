import { useThemedComponent } from '@helpers/useThemedComponent'
import { StatusProps, StatusViewProps, StatusCssConfig, StatusStyleProps } from './types'

export const useThemedStatus = (props: StatusProps): StatusViewProps => (
  useThemedComponent<StatusProps, StatusCssConfig, StatusStyleProps>(props, {
    componentName: 'status',
    defaultValues: { mode: 'default' },
    propsToDrill: ['mode']
  })
)
