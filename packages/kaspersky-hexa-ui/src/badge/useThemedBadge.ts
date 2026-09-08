import { useThemedComponent } from '@helpers/useThemedComponent'

import {
  BadgeCssConfig,
  badgeModes,
  BadgeProps,
  BadgeThemeProps,
  badgeTransparentModes,
  BadgeViewProps
} from './types'

export const useThemedBadge = (props: BadgeProps): BadgeViewProps => {
  let mode = props.mode || 'neutral'

  if (props.size === 'large' && mode === 'neutral') {
    mode = 'neutral_transparent'
  }

  const isModeNotSupported = props.size === 'large'
    ? !badgeTransparentModes.includes(mode as any)
    : !badgeModes.includes(mode)

  if (props.mode && isModeNotSupported) {
    const newMode = props.size === 'large' ? 'neutral_transparent' : 'neutral'
    console.warn(`'mode' = '${mode}' is not supported for size '${props.size}', changed to '${newMode}'`)
    mode = newMode
  }

  const newProps = {
    ...props,
    mode
  }

  return useThemedComponent<BadgeProps, BadgeCssConfig, BadgeThemeProps>(newProps as BadgeProps, {
    componentName: 'badge',
    defaultValues: {
      mode: 'neutral',
      size: 'medium'
    }
  })
}
