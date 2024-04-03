import { KeyValueProps, KeyWithIconProps, KeyValueToViewProps, KeyValueCssConfig, KeyValueThemeProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

type CommonProps = KeyValueProps | KeyWithIconProps
export const useThemedKeyValue = (props: CommonProps): KeyValueToViewProps<CommonProps> => (
  useThemedComponent<CommonProps, KeyValueCssConfig, KeyValueThemeProps>(props, {
    componentName: 'keyValue',
    defaultValues: {}
  })
)
