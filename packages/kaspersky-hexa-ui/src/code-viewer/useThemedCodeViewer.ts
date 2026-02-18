import { useComponentCssConfig } from '@design-system/css-configs/helpers/useComponentCssConfig'

import {
  CodeViewerCssConfig,
  CodeViewerProps,
  CodeViewerThemeProps,
  CodeViewerViewProps,
  CustomLanguages
} from './types'

export const useThemedCodeViewer = <T extends CustomLanguages>(props: CodeViewerProps<T>): CodeViewerViewProps<T> => (
  useComponentCssConfig<CodeViewerProps<T>, CodeViewerCssConfig, CodeViewerThemeProps>(props, {
    componentName: 'codeViewer',
    defaultValues: {}
  })
)
