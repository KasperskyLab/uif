import { useMemo } from 'react'

import { ILoaderProps, ILoaderViewProps, LoaderCssConfig } from './types'

import { useTheme } from '../../design-system/theme/hooks'
import { THEME_CONFIG } from '../../design-system/theme/themes/config'

export const useThemedLoader = (props: ILoaderProps): ILoaderViewProps => {
  const { size = 'small', mode = 'default' } = props

  const theme = useTheme(props)

  const cssConfig = useMemo<LoaderCssConfig>(() => ({
    ...THEME_CONFIG[theme.key].components.loader.colors[mode],
    ...THEME_CONFIG[theme.key].components.loader.sizes[size]
  }), [theme, mode, size])

  return { ...props, cssConfig }
}
