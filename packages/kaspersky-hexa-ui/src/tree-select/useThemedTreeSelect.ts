import { useThemedComponent } from '@helpers/useThemedComponent'

import { TreeSelectCssConfig, TreeSelectProps, TreeSelectThemeProps, TreeSelectViewProps } from './types'

export const useThemedTreeSelect = (props: TreeSelectProps): TreeSelectViewProps => (
  useThemedComponent<TreeSelectProps, TreeSelectCssConfig, TreeSelectThemeProps>(props, {
    componentName: 'treeSelect',
    defaultValues: {}
  })
)
