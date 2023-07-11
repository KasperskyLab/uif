import { useMemo } from 'react'
import { useTheme } from '../../design-system/theme/hooks'
import { THEME_CONFIG } from '../../design-system/theme/themes/config'
import { AccordionCssConfig, IAccordionProps } from './types'

export const useThemedAccordion = (props: IAccordionProps) => {
  const {
    state = 'default',
    expandIconPosition = 'right',
    theme: themeFromProps,
    ...rest
  } = props

  const theme = useTheme({ theme: themeFromProps })

  const cssConfig = useMemo<AccordionCssConfig>(() => ({
    ...(THEME_CONFIG[theme.key].components.accordion.colors),
    ...(THEME_CONFIG[theme.key].components.accordion.colors[state])
  }), [state, theme])

  return { expandIconPosition, ...rest, cssConfig }
}
