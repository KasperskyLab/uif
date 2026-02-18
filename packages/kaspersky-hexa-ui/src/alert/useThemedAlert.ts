import { showDeprecationWarn } from '@helpers/showDeprecationWarn'
import { useThemedComponent } from '@helpers/useThemedComponent'

import { 
  AlertCssConfig,
  alertModes,
  AlertProps,
  AlertThemeProps,
  AlertViewProps
} from './types'

export const useThemedAlert = (props: AlertProps): AlertViewProps => {
  let mode = props.mode

  if (!alertModes.includes(mode)) {
    showDeprecationWarn('mode', mode)
    mode = 'info'
  }

  return useThemedComponent<AlertProps, AlertCssConfig, AlertThemeProps>({ ...props, mode }, {
    componentName: 'alert',
    defaultValues: { mode: 'info' },
    propsToDrill: ['mode']
  })
}
