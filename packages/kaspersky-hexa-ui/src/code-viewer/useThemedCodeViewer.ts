import { useThemedComponent } from '@helpers/useThemedComponent'

import {
  CodeViewerCssConfig,
  CodeViewerProps,
  CodeViewerThemeProps,
  CodeViewerViewProps,
  CustomLanguages
} from './types'

export const useThemedCodeViewer = <T extends CustomLanguages>(props: CodeViewerProps<T>): CodeViewerViewProps<T> => (
  useThemedComponent<CodeViewerProps<T>, CodeViewerCssConfig, CodeViewerThemeProps>(props, {
    componentName: 'codeViewer',
    defaultValues: {}
  })
)
