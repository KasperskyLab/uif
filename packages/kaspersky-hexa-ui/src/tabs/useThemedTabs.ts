import { useComponentCssConfig } from '@design-system/css-configs/helpers/useComponentCssConfig'

import { TabsCssConfig, TabsProps, TabsThemeProps, TabsViewProps } from './types'

export const useThemedTabs = (props: TabsProps): TabsViewProps => (
  useComponentCssConfig<TabsProps, TabsCssConfig, TabsThemeProps>(props, {
    componentName: 'tabs',
    defaultValues: {},
    propsToDrill: ['theme']
  })
)
