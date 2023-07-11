import { useMemo } from 'react'
import { useTheme } from '../../design-system/theme/hooks'
import { THEME_CONFIG } from '../../design-system/theme/themes/config'
import { IRadioProps } from './types'

export enum Mode {
  'Default' = 'default',
  'Button' = 'button'
}

export const useThemedRadio = (props: IRadioProps): IRadioProps => {
  const {
    optionType = Mode.Default,
    theme: themeFromProps
  } = props
  const theme = useTheme({ theme: themeFromProps })
  const cssConfig = useMemo<any>(() => ({
    ...(THEME_CONFIG[theme.key].components.radio.colors[optionType])
  }), [theme, optionType])
  return { ...props, cssConfig }
}
