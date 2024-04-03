import { LoaderProps, LoaderViewProps, LoaderCssConfig, LoaderThemeProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedLoader = (props: LoaderProps): LoaderViewProps => (
  useThemedComponent<LoaderProps, LoaderCssConfig, LoaderThemeProps>(props, {
    componentName: 'loader',
    defaultValues: { mode: 'default', size: 'small' }
  })
)
