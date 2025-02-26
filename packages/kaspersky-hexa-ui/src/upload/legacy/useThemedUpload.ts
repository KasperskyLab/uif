import { useThemedComponent } from '@helpers/useThemedComponent'

import { BasicUploadProps, UploadColorConfig, UploadThemeProps, UploadToViewProps } from './types'

export const useThemedUpload = <T extends BasicUploadProps>(props: T): UploadToViewProps<T> => (
  useThemedComponent<T, UploadColorConfig, UploadThemeProps>(props, {
    componentName: 'upload',
    defaultValues: {}
  })
)
