import { TreeSelectProps, TreeSelectViewProps, TreeSelectCssConfig, TreeSelectThemeProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedTreeSelect = (props: TreeSelectProps): TreeSelectViewProps => (
  useThemedComponent<TreeSelectProps, TreeSelectCssConfig, TreeSelectThemeProps>(props, {
    componentName: 'treeSelect',
    defaultValues: {}
  })
)
