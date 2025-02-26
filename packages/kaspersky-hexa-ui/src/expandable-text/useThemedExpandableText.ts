import { useThemedComponent } from '@helpers/useThemedComponent'

import {
  ExpandableTextCssConfig,
  ExpandableTextProps,
  ExpandableTextThemeProps,
  ExpandableTextViewProps
} from './types'

export const useThemedExpandableText = (props: ExpandableTextProps): ExpandableTextViewProps => (
  useThemedComponent<ExpandableTextProps, ExpandableTextCssConfig, ExpandableTextThemeProps>(props, {
    componentName: 'expandableText',
    defaultValues: {}
  })
)
