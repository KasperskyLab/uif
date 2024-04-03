import { LinkProps, LinkViewProps, LinkCssConfig, LinkThemeProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedLink = (props: LinkProps): LinkViewProps => (
  useThemedComponent<LinkProps, LinkCssConfig, LinkThemeProps>(props, {
    componentName: 'link',
    defaultValues: { size: 'noSize' }
  })
)
