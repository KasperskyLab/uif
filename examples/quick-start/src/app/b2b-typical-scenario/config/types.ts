/**
 * Config types for B2B typical scenario.
 * Tables, card toolbar, tabs and summary are driven by these configs.
 */

import type { ReactNode } from 'react'

export type ListColumnRenderType =
  | 'text'
  | 'link'
  | 'status'
  | 'tag'
  | 'nameWithTag'
  | 'technologyPopover'

export type AlertListColumnDescriptor = {
  key: string
  title: string
  dataIndex: string
  width: number
  hideColumnAvailable?: boolean
  isSortable?: boolean
  renderType?: ListColumnRenderType
  /** For link: path pattern, e.g. "/b2b-typical-scenario/entity/:id" */
  linkPath?: string
}

export type ToolbarButtonSpec = {
  type: 'button'
  key: string
  label: string
  iconId?: string
  handlerKey?: string
  size?: 'small'
}

export type ToolbarChildrenSpec = {
  type: 'children'
  key: string
  childrenKey: string
}

export type AlertListToolbarItemSpec = ToolbarButtonSpec | ToolbarChildrenSpec

export type AlertListTableConfig = {
  columns: AlertListColumnDescriptor[]
  toolbarLeft: AlertListToolbarItemSpec[]
  showSearch?: boolean
  showColumns?: boolean
  showFilterSidebar?: boolean
}

/** Card: header toolbar spec (same shape as list toolbar) */
export type AlertCardToolbarSpec = AlertListToolbarItemSpec[]

export type CardTabType = 'summary' | 'table' | 'placeholder'

export type AlertCardTabDescriptor = {
  key: string
  label: string
  type: CardTabType
  /** For type 'table': id into tableConfigs map */
  tableId?: string
  /** For type 'placeholder' */
  placeholderText?: string
}

export type TableColumnDescriptor = {
  key: string
  title: string
  dataIndex: string
  width: number
}

export type AlertCardTableConfig = {
  columns: TableColumnDescriptor[]
  toolbarLeft: AlertListToolbarItemSpec[]
}

export type SummaryFieldRender = 'text' | 'tag'

export type SummaryFieldDescriptor = {
  name: string
  label: string
  render: SummaryFieldRender
  /** Optional: for computed display (e.g. assets) — not a form field */
  getValue?: (alert: { summary: unknown }) => ReactNode
}

export type AlertCardConfig = {
  toolbarLeft: AlertCardToolbarSpec
  tabs: AlertCardTabDescriptor[]
  tableConfigs: Record<string, AlertCardTableConfig>
  summaryFields: SummaryFieldDescriptor[]
  footer: {
    submitLabel: string
  }
}
