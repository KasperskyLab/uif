import { useThemedComponent } from '@helpers/useThemedComponent'

import { ITreeProps, TreeCssConfig, TreeThemeProps, TreeViewProps } from './types'

export const useThemedTree = (props: ITreeProps): TreeViewProps => (useThemedComponent<ITreeProps, TreeCssConfig, TreeThemeProps>(props, {
  componentName: 'tree',
  defaultValues: {}
}))
