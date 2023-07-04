import { useMemo } from 'react'
import { IAnchorProps, AnchorLinkProps } from './types'
import { THEME_CONFIG } from '../../design-system/theme/themes/config'
import { useTheme } from '../../design-system/theme/hooks/useTheme'

export const useThemedAnchor = (props: IAnchorProps) => {
  const { theme: themeFromProps, ...rest } = props
  const theme = useTheme(themeFromProps)

  const cssConfig = useMemo(() => ({
    ...(THEME_CONFIG[theme.key].components.anchors.colors),
    ...(THEME_CONFIG[theme.key].components.anchors.sizes)
  }), [theme])

  return { ...rest, cssConfig }
}

export const useThemedAnchorLink = (props: AnchorLinkProps) => {
  const { theme: themeFromProps, ...rest } = props
  const theme = useTheme(themeFromProps)

  const cssConfig = useMemo(() => ({
    ...(THEME_CONFIG[theme.key].components.anchors.colors),
    ...(THEME_CONFIG[theme.key].components.anchors.sizes)
  }), [theme])

  return { ...rest, cssConfig }
}
