import { ThemeKey } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import React from 'react'

export type TenantFilterThemeProps = {
  /** Custom theme */
  theme?: ThemeKey
}

export type ProcessedTreeDataItem = Omit<TenantFilterTreeDataItem, 'title' | 'key' | 'children'> & {
  title: React.ReactNode,
  key: string,
  children?: ProcessedTreeDataItem[]
}

export type TenantFilterTreeDataItem = {
  title: string,
  key: string,
  disabled?: boolean,
  children?: TenantFilterTreeDataItem[]
}

export type TenantFilterTreeDataMapItem = {
  title: string,
  parent: string,
  children?: string[]
}

export type TenantFilterData = {
  /** Tree data */
  data: TenantFilterTreeDataItem[],
  /** Keys of the default selected items */
  defaultSelectedKeys: string[],
  /** All tenant keys */
  allTenantsKeys: string[],
  /** Called when the apply button is clicked */
  applyHandler?: (keys: string[]) => void
}

export type TenantFilterProps = TenantFilterThemeProps & TenantFilterData & {
  /** Custom class name */
  className?: string,
  /** Title */
  titleText?: string,
  /** Text displayed next to the counter of selected items in the tree */
  counterText?: string,
  /** Text of the apply button */
  buttonText?: string,
  /** Whether to show button */
  withButton?: boolean,
  /** Whether to show search */
  withSearch?: boolean,
  /** Whether to show icon */
  withIcon?: boolean
} & TestingProps

export type TenantFilterViewProps = ToViewProps<TenantFilterProps, TenantFilterCssConfig>

export type TenantFilterCssConfig = {
  highlight: string
}

export type TenantFilterTreeDataMap = Map<TenantFilterTreeDataItem['key'], TenantFilterTreeDataMapItem>

export type Tenant = {
  id: string,
  name: string,
  subtenants?: Tenant[]
}
