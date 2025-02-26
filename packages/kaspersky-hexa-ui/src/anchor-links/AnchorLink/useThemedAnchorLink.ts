import { useThemedComponent } from '@helpers/useThemedComponent'

import { AnchorLinkCssConfig, AnchorLinkProps, AnchorLinkThemeProps, AnchorLinkViewProps } from './types'

export const useThemedAnchorLink = (props: AnchorLinkProps): AnchorLinkViewProps => (
  useThemedComponent<AnchorLinkProps, AnchorLinkCssConfig, AnchorLinkThemeProps>(props, {
    componentName: 'anchors',
    defaultValues: {}
  })
)
