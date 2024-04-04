import { SidebarProps, SidebarViewProps, SidebarCssConfig, SidebarThemeProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedSidebar = (props: SidebarProps): SidebarViewProps => (
  useThemedComponent<SidebarProps, SidebarCssConfig, SidebarThemeProps>(props, {
    componentName: 'sidebar',
    defaultValues: { size: 'medium' }
  })
)
