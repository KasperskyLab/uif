import { useComponentCssConfig } from '@design-system/css-configs/helpers/useComponentCssConfig'

import { UploaderCssConfig, UploaderProps, UploaderThemeProps } from './types'

export const useThemedUploader = <T extends UploaderProps>(props: T) => (
  useComponentCssConfig<T, UploaderCssConfig, UploaderThemeProps>(props, {
    componentName: 'upload',
    defaultValues: {}
  })
)
