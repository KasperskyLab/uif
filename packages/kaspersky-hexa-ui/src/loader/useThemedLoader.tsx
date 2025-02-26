import { useThemedComponent } from '@helpers/useThemedComponent'

import { LoaderCssConfig, LoaderProps, LoaderThemeProps, LoaderViewProps } from './types'

export const useThemedLoader = (props: LoaderProps): LoaderViewProps => (
  useThemedComponent<LoaderProps, LoaderCssConfig, LoaderThemeProps>(props, {
    componentName: 'loader',
    defaultValues: { mode: 'default', size: 'small' }
  })
)
