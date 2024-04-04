import {
  CodeViewerProps,
  CodeViewerViewProps,
  CodeViewerThemeProps,
  CodeViewerCssConfig,
  CustomLanguages
} from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedCodeViewer = <T extends CustomLanguages>(props: CodeViewerProps<T>): CodeViewerViewProps<T> => (
  useThemedComponent<CodeViewerProps<T>, CodeViewerCssConfig, CodeViewerThemeProps>(props, {
    componentName: 'codeViewer',
    defaultValues: {}
  })
)
