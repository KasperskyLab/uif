import { useThemedComponent } from '@helpers/useThemedComponent'

import { KeyValueCssConfig, KeyValueProps, KeyValueThemeProps, KeyValueToViewProps, KeyWithIconProps } from './types'

type CommonProps = KeyValueProps | KeyWithIconProps
export const useThemedKeyValue = (props: CommonProps): KeyValueToViewProps<CommonProps> => (
  useThemedComponent<CommonProps, KeyValueCssConfig, KeyValueThemeProps>(props, {
    componentName: 'keyValue',
    defaultValues: {}
  })
)
