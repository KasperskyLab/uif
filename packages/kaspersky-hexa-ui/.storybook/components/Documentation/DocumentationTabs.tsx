import { Tabs } from '@src/tabs'
import React from 'react'

import type { TabsProps } from '@src/tabs/types'
import { getDocumentationPageHash, parseDocumentationHash } from './documentationSectionUrl'

/**
 * Tabs for MDX documentation pages.
 * Keeps inactive panes mounted so react-live editors and ArgsTable do not tear down mid-async work.
 * Opens the pane from a heading-link hash (`#composition/current`).
 */
export const DocumentationTabs: React.FC<TabsProps> & typeof Tabs = ({
  defaultActiveKey,
  ...props
}) => (
  <Tabs
    {...props}
    destroyInactiveTabPane={false}
    defaultActiveKey={parseDocumentationHash(getDocumentationPageHash()).tabKey ?? defaultActiveKey}
  />
)

DocumentationTabs.TabPane = Tabs.TabPane
DocumentationTabs.TabPaneHead = Tabs.TabPaneHead
