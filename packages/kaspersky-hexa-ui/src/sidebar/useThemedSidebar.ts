import { useThemedComponent } from '@helpers/useThemedComponent'

import { SidebarCssConfig, SidebarProps, SidebarThemeProps, SidebarViewProps } from './types'

export const useThemedSidebar = (props: SidebarProps): SidebarViewProps => (
  useThemedComponent<SidebarProps, SidebarCssConfig, SidebarThemeProps>(props, {
    componentName: 'sidebar',
    defaultValues: { size: 'medium' }
  })
)
