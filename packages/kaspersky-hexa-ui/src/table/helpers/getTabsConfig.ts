import { TabConfigBase, ToolbarProps } from '../modules/ToolbarIntegration'

type ParsedTabConfig = {
  enabled: boolean,
  showHeader: boolean
}

function parseTabConfig (config?: TabConfigBase): ParsedTabConfig {
  if (config === false || config === undefined) {
    return { enabled: false, showHeader: false }
  }
  if (config === true) {
    return { enabled: true, showHeader: true }
  }

  const showHeader = !config.hideTabHeader
  return { enabled: true, showHeader }
}

export function getTabsConfig (toolbar?: ToolbarProps) {
  const {
    enabled: showColumnsTab,
    showHeader: showColumnsHeader
  } = parseTabConfig(toolbar?.showColumns)

  const {
    enabled: showGroupingTab,
    showHeader: showGroupingHeader
  } = parseTabConfig(toolbar?.showGrouping)

  return {
    showColumnsTab,
    showColumnsHeader,
    showGroupingTab,
    showGroupingHeader
  }
}
