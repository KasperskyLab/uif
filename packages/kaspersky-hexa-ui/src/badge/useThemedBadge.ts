import { showDeprecationWarn } from '@helpers/showDeprecationWarn'
import { useThemedComponent } from '@helpers/useThemedComponent'

import { BadgeCssConfig, badgeModes, BadgeProps, BadgeThemeProps, BadgeViewProps } from './types'

export const useThemedBadge = (props: BadgeProps): BadgeViewProps => {
  let newMode = props.mode || 'neutral'
  const isModeNotSupported = Boolean(!badgeModes.includes(newMode))

  if (props.mode && isModeNotSupported) {
    showDeprecationWarn('mode', props.mode)
    newMode = 'neutral'
  }

  if (!props.mode && props.size === 'large') {
    newMode = 'neutral_transparent'
  }

  const newProps = {
    ...props,
    mode: props.mode
  }

  return useThemedComponent<BadgeProps, BadgeCssConfig, BadgeThemeProps>(newProps as BadgeProps, {
    componentName: 'badge',
    defaultValues: {
      mode: 'neutral',
      size: 'medium'
    }
  })
}
