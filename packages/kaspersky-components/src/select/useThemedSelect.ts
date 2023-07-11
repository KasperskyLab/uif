import { useMemo } from 'react'

import { ISelectProps, ISelectViewProps } from './types'

import { useTheme } from '../../design-system/theme/hooks'
import { THEME_CONFIG } from '../../design-system/theme/themes/config'
import { getTextSizes, TextTypes } from '@design-system/tokens'
import { SPACES } from '@design-system/theme/themes/variables'

export const useThemedSelect = (props: ISelectProps): ISelectViewProps => {
  const theme = useTheme(props)

  const cssConfig = useMemo(() => ({
    ...THEME_CONFIG[theme.key].components.select.colors,
    ...THEME_CONFIG[theme.key].components.select.sizes,
    tags: {
      background: THEME_CONFIG[theme.key].colors.tags.neutral,
      ...getTextSizes(TextTypes.L4),
      padding: `${SPACES[2]}px ${SPACES[3]}px`,
      gap: `${SPACES[2]}px`,
      borderRadius: `${SPACES[2]}px`
    }
  }), [theme])

  return { ...props, cssConfig }
}
