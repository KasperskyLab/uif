import { AlertProps, AlertThemeProps, AlertViewProps, AlertCssConfig } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedAlert = (props: AlertProps): AlertViewProps => (
  useThemedComponent<AlertProps, AlertCssConfig, AlertThemeProps>(props, {
    componentName: 'alert',
    defaultValues: { mode: 'info' },
    propsToDrill: ['mode']
  })
)
