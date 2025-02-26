import { useThemedComponent } from '@helpers/useThemedComponent'

import { TabsCssConfig, TabsProps, TabsThemeProps, TabsViewProps } from './types'

export const useThemedTabs = (props: TabsProps): TabsViewProps => (
  useThemedComponent<TabsProps, TabsCssConfig, TabsThemeProps>(props, {
    componentName: 'tabs',
    defaultValues: {},
    propsToDrill: ['theme']
  })
)
