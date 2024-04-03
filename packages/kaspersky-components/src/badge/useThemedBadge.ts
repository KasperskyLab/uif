import { BadgeProps, BadgeViewProps, BadgeCssConfig, BadgeThemeProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedBadge = (props: BadgeProps): BadgeViewProps => (
  useThemedComponent<BadgeProps, BadgeCssConfig, BadgeThemeProps>(props, {
    componentName: 'badge',
    defaultValues: { mode: 'black' }
  })
)
