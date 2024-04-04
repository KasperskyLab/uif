import { AnchorLinkProps, AnchorLinkViewProps, AnchorLinkCssConfig, AnchorLinkThemeProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedAnchorLink = (props: AnchorLinkProps): AnchorLinkViewProps => (
  useThemedComponent<AnchorLinkProps, AnchorLinkCssConfig, AnchorLinkThemeProps>(props, {
    componentName: 'anchors',
    defaultValues: {}
  })
)
