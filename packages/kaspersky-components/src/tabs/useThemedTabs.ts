import { TabsProps, TabsViewProps, TabsCssConfig, TabsThemeProps } from './types'
import { useThemedComponent } from '@helpers/useThemedComponent'

export const useThemedTabs = (props: TabsProps): TabsViewProps => (
  useThemedComponent<TabsProps, TabsCssConfig, TabsThemeProps>(props, {
    componentName: 'tabs',
    defaultValues: {},
    propsToDrill: ['theme']
  })
)
