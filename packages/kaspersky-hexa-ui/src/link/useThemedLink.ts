import { useThemedComponent } from '@helpers/useThemedComponent'

import { LinkCssConfig, LinkProps, LinkThemeProps, LinkViewProps } from './types'

export const useThemedLink = (props: LinkProps): LinkViewProps => (
  useThemedComponent<LinkProps, LinkCssConfig, LinkThemeProps>(props, {
    componentName: 'link',
    defaultValues: { size: 'noSize' }
  })
)
