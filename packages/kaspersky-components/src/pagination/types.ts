import { TextSizes } from '../../design-system/tokens'
import { Size, Theme } from '../../design-system/types'

export type PaginationSize = Extract<Size, Size.Small | Size.Medium>

export type PaginationSizeConfig = TextSizes & {
  padding: string,
  size: string,
  selectPadding: string,
  selectItemPadding: string,
  paginationItemBorderRadius: string,
  dropdownBorderRadius: string
}

type StateProps = {
  background?: string,
  color?: string,
  border?: string
}

export type PaginationColorConfig = {
  normal: StateProps,
  disabled: StateProps,
  active: StateProps,
  hover: StateProps
}

export type PaginationCssConfig = PaginationColorConfig & PaginationSizeConfig

export type PaginationStyleProps = {
  /** Custom theme */
  theme?: Theme,
  /** Size */
  size?: PaginationSize
}

export type IPaginationProps = {
  /** Current page number */
  current?: number,
  /** Number of data items per page */
  pageSize?: number,
  /** Default number of data items per page */
  defaultPageSize?: number,
  /** Disabled state */
  disabled?: boolean,
  /** Whether to hide pager on single page */
  hideOnSinglePage?: boolean,
  /** Specify the sizeChanger options */
  pageSizeOptions?: string[],
  /** Determine whether you can jump to pages directly */
  showQuickJumper?: boolean,
  /** Determine whether to show pageSize select, it will be true when total > 50 */
  showSizeChanger?: boolean,
  /** To display the total number */
  showTotal?: boolean,
  /** Total number of data items */
  total?: number,
  /** Called when the page number or pageSize is changed, and it takes the resulting page number and pageSize as its arguments */
  onChange?: (page: number, pageSize: number) => void,
  /** Called when pageSize is changed */
  onShowSizeChange?: (current: number, size: number) => void,
  /** Test id */
  klId?: string,
  /** Simple Table mode. Without total, size changer and quick jumper */
  simple?: boolean
} & PaginationStyleProps

export type IPaginationViewProps = Omit<IPaginationProps, keyof PaginationStyleProps> & { cssConfig: PaginationCssConfig }
