import { ThemeKey } from '@design-system/types'
import { useThemedComponent } from '@helpers/useThemedComponent'
import { useThemedTextbox } from '@src/input/useThemedTextbox'
import { useMemo } from 'react'

import { PaginationCssConfig, PaginationProps, PaginationThemeProps, PaginationViewProps } from './types'

const themeMap = {
  'light': ThemeKey.Light,
  'dark': ThemeKey.Dark
}

export const useThemedPagination = (props: PaginationProps): PaginationViewProps => {
  const { cssConfig: paginationCssConfig, ...rest } = useThemedComponent<PaginationProps, PaginationCssConfig, PaginationThemeProps>(props, {
    componentName: 'pagination',
    defaultValues: {}
  })
  
  const { cssConfig: inputCssConfig } = useThemedTextbox({ ...props, theme: props.theme && themeMap[props.theme] })
  
  const cssConfig = useMemo(
    () => ({ ...inputCssConfig, ...paginationCssConfig }),
    [inputCssConfig, paginationCssConfig]
  )
  
  return { ...rest, cssConfig }
}
