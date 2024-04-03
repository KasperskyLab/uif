import { Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { Focus } from '@design-system/tokens/focus'

type StateProps = {
  background?: string,
  color?: string
}

export type PaginationColorStateConfig = Record<'normal' | 'hover' | 'active' | 'disabled', StateProps>

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
  /** Total number of data items */
  total?: number,
  /** Number of selected data items */
  selected?: number,
  /** Called when the page number or pageSize is changed, and it takes the resulting page number and pageSize as its arguments */
  onChange?: (page: number, pageSize: number) => void,
  /** Called when pageSize is changed */
  onShowSizeChange?: (current: number, size: number) => void,
  /** Simple Table mode. Without total, size changer and quick jumper */
  simple?: boolean
} & PaginationThemeProps & TestingProps

export type PaginationViewProps = ToViewProps<PaginationProps, PaginationCssConfig, PaginationThemeProps>

/** @deprecated Use PaginationProps instead */
export type IPaginationProps = PaginationProps
/** @deprecated Use PaginationProps instead */
export type IPaginationViewProps = PaginationViewProps
/** @deprecated Use PaginationProps instead */
export type PaginationStyleProps = PaginationThemeProps
