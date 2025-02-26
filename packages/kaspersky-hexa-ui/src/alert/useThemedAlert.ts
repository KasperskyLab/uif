import { useThemedComponent } from '@helpers/useThemedComponent'

import { AlertCssConfig, AlertProps, AlertThemeProps, AlertViewProps } from './types'

export const useThemedAlert = (props: AlertProps): AlertViewProps => (
  useThemedComponent<AlertProps, AlertCssConfig, AlertThemeProps>(props, {
    componentName: 'alert',
    defaultValues: { mode: 'info' },
    propsToDrill: ['mode']
  })
)
