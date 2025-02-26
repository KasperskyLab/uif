import { ThemeConfig, ThemeKey } from '@design-system/types'
import { useThemedComponent } from '@helpers/useThemedComponent'
import { MenuApplyTheme, MenuCssConfig, MenuProps, MenuThemeProps, MenuViewProps } from '@src/menu/types'
import { useTheme as useStyledTheme } from 'styled-components'

export const useThemedMenu = <P extends MenuThemeProps & MenuApplyTheme = MenuProps, >({ applyAppTheme, ...props }: P): MenuViewProps => {
  const { key = ThemeKey.Light } = useStyledTheme() as ThemeConfig || {}
  const menuProps = { ...props, theme: (applyAppTheme && key) || ThemeKey.Dark }
  return useThemedComponent<Omit<P, 'applyAppTheme'>, MenuCssConfig, MenuThemeProps>(menuProps, {
    componentName: 'menu',
    defaultValues: {},
    propsToDrill: ['theme']
  })
}
