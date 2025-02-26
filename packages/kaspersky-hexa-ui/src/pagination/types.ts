import { Focus } from '@design-system/tokens/focus'
import { Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'

type StateProps = {
  background?: string,
  color?: string
}

export type PaginationColorStateConfig = Record<'enabled' | 'hover' | 'active' | 'disabled', StateProps>

export type PaginationColorConfig = Record<'selected' | 'unselected', PaginationColorStateConfig> & Focus

export type PaginationCssConfig = PaginationColorConfig

export type PaginationThemeProps = {
  /** Custom theme */
  theme?: Theme
}

export type PaginationProps = {
  /** Current page number */
  current?: number,
  /** Number of data items per page */
  pageSize?: number,
  /** Disabled state */
  disabled?: boolean,
  /** Whether to hide pager on single page */
  hideOnSinglePage?: boolean,
  /** Specify the sizeChanger options */
  pageSizeOptions?: string[],
  /** Determine whether to show pageSize select, it will be true when total > 50 */
  showSizeChanger?: boolean,
  /** Show less pagination items: 3 or 5 */
  showLessItems?: boolean,
  /**
   * Total number of data items, including children, if data is tree-like structure
   */
  total?: number,
  /**
   * Total number of root data items.
   * Used to calculate the correct number of pages if data is tree-like structure.
   * Equals to **total** if data is a flat array and should be ignored
   */
  totalRoot?: number,
  /** Number of selected data items */
  selected?: number,
  /** Show number of selected data items */
  showSelected?: boolean,
  /** Called when the page number or pageSize is changed, and it takes the resulting page number and pageSize as its arguments */
  onChange?: (page: number, pageSize: number) => void,
  /** Called when pageSize is changed */
  onShowSizeChange?: (current: number, size: number) => void,
  /** Simple Table mode. Without total, size changer and quick jumper */
  simple?: boolean
} & PaginationThemeProps & TestingProps

export type PaginationViewProps = ToViewProps<PaginationProps, PaginationCssConfig, PaginationThemeProps>
