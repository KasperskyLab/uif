import { TreeCssConfig, ITreeProps, TreeViewProps, TreeThemeProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedTree = (props: ITreeProps): TreeViewProps => (useThemedComponent<ITreeProps, TreeCssConfig, TreeThemeProps>(props, {
  componentName: 'tree',
  defaultValues: {}
}))
