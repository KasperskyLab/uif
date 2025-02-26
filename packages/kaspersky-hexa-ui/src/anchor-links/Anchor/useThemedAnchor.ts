import { useThemedComponent } from '@helpers/useThemedComponent'

import { AnchorCssConfig, AnchorProps, AnchorThemeProps, AnchorViewProps } from './types'

export const useThemedAnchor = (props: AnchorProps): AnchorViewProps => (
  useThemedComponent<AnchorProps, AnchorCssConfig, AnchorThemeProps>(props, {
    componentName: 'anchors',
    defaultValues: {}
  })
)
