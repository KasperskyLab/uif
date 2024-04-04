import { AnchorProps, AnchorViewProps, AnchorCssConfig, AnchorThemeProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedAnchor = (props: AnchorProps): AnchorViewProps => (
  useThemedComponent<AnchorProps, AnchorCssConfig, AnchorThemeProps>(props, {
    componentName: 'anchors',
    defaultValues: {}
  })
)
