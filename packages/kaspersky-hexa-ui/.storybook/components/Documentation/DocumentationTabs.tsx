import { Tabs } from '@src/tabs'
import React from 'react'

import type { TabsProps } from '@src/tabs/types'

/**
 * Tabs for MDX documentation pages.
 * Keeps inactive panes mounted so react-live editors and ArgsTable do not tear down mid-async work.
 */
export const DocumentationTabs: React.FC<TabsProps> & typeof Tabs = (props) => (
  <Tabs {...props} destroyInactiveTabPane={false} />
)

DocumentationTabs.TabPane = Tabs.TabPane
DocumentationTabs.TabPaneHead = Tabs.TabPaneHead
