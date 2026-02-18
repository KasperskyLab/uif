import { useComponentCssConfig } from '@design-system/css-configs/helpers/useComponentCssConfig'

import { LinkCssConfig, LinkProps, LinkThemeProps, LinkViewProps } from './types'

export const useThemedLink = (props: LinkProps): LinkViewProps => (
  useComponentCssConfig<LinkProps, LinkCssConfig, LinkThemeProps>(props, {
    componentName: 'link',
    defaultValues: { size: 'noSize' }
  })
)
