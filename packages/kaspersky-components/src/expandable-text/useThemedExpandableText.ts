import {
  ExpandableTextProps,
  ExpandableTextViewProps,
  ExpandableTextCssConfig,
  ExpandableTextThemeProps
} from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedExpandableText = (props: ExpandableTextProps): ExpandableTextViewProps => (
  useThemedComponent<ExpandableTextProps, ExpandableTextCssConfig, ExpandableTextThemeProps>(props, {
    componentName: 'expandableText',
    defaultValues: {}
  })
)
