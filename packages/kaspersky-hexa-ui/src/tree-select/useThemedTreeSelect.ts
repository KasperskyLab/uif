import { useComponentCssConfig } from '@design-system/css-configs/helpers/useComponentCssConfig'

import { TreeSelectCssConfig, TreeSelectProps, TreeSelectThemeProps, TreeSelectViewProps } from './types'

export const useThemedTreeSelect = (props: TreeSelectProps): TreeSelectViewProps => (
  useComponentCssConfig<TreeSelectProps, TreeSelectCssConfig, TreeSelectThemeProps>(props, {
    componentName: 'treeSelect',
    defaultValues: {}
  })
)
