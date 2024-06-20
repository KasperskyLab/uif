import { useThemedComponent } from '@helpers/useThemedComponent'
import { MenuProps, MenuViewProps, MenuCssConfig, MenuThemeProps } from '@src/menu/types'

export const useThemedMenu = (props: MenuProps): MenuViewProps => (
  useThemedComponent<MenuProps, MenuCssConfig, MenuThemeProps>({ ...props, theme: 'dark' }, {
    componentName: 'menu',
    defaultValues: {}
  })
)
