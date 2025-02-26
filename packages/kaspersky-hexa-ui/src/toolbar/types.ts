import { Focus } from '@design-system/tokens/focus'
import { ThemeKey } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { ButtonProps } from '@src/button/types'
import { DropdownItemProps, DropdownProps } from '@src/dropdown/types'
import { IconProps } from '@src/icon/types'
import { LinkProps } from '@src/link/types'
import { SearchProps } from '@src/search/types'
import { FC, ForwardRefExoticComponent, MouseEventHandler, ReactNode, RefAttributes } from 'react'

export type ToolbarThemeProps = {
  /** Custom theme */
  theme?: ThemeKey
}

export const ToolbarItemKeyConst = {
  BUTTON: 'button',
  LINK: 'link',
  ICON: 'icon',
  DROPDOWN: 'dropdown',
  DIVIDER: 'divider',
  CHILDREN: 'children'
} as const

export type ToolbarItemKey = (typeof ToolbarItemKeyConst)[keyof typeof ToolbarItemKeyConst]

type ToolbarButtonCommonProps = {
  className?: string,
  iconBefore?: ReactNode,
  iconAfter?: ReactNode,
  disabled?: boolean,
  onClick?: MouseEventHandler<HTMLElement>,
  tooltip?: string,
  handler?: string,
  showIndicator?: boolean
}

export type ToolbarButtonProps = ToolbarButtonCommonProps & {
  type: (typeof ToolbarItemKeyConst)['BUTTON'],
  label?: ReactNode
}

type ToolbarDropdownProps = ToolbarButtonCommonProps & DropdownProps & {
  type: (typeof ToolbarItemKeyConst)['DROPDOWN'],
  label?: ReactNode
}

type ToolbarIconProps = Omit<IconProps, 'name'> & {
  type: (typeof ToolbarItemKeyConst)['ICON'],
  icon?: IconProps['name'],
  label?: ReactNode,
  className?: string
}

type ToolbarLinkProps = ForwardRefExoticComponent<LinkProps & {
  children?: ReactNode
} & RefAttributes<HTMLAnchorElement>> & {
  type: (typeof ToolbarItemKeyConst)['LINK'],
  label?: ReactNode,
  href?: string
}

type ToolbarDividerProps = {
  type: (typeof ToolbarItemKeyConst)['DIVIDER']
}

type ToolbarChildrenProps = {
  type: (typeof ToolbarItemKeyConst)['CHILDREN']
}

export type ToolbarItems<T extends ToolbarItemKey = ToolbarItemKey> = {
  key: string,
  children?: ReactNode,
  type: T,
  testId?: string,
  visible?: boolean
} & (
  | ToolbarButtonProps
  | ToolbarDropdownProps
  | ToolbarIconProps
  | ToolbarLinkProps
  | ToolbarDividerProps
  | ToolbarChildrenProps
)

export type ToolbarVariantButtonProps = Omit<ButtonProps, keyof ToolbarButtonCommonProps> & ToolbarButtonCommonProps

interface ImportExportButtonProps extends ToolbarVariantButtonProps {
  /** Switch ImportExportButton, true - dropdown, false - button */
  dropdown: false,
  /** Called after clicking on ImportExportButton */
  onClick?: MouseEventHandler<HTMLElement>
}

interface ImportExportDropdownProps extends Omit<DropdownProps, 'overlay'> {
  /** Called after clicking on ImportExportButton */
  onClick?: MouseEventHandler<HTMLElement>,
  /** Switch ImportExportButton, true - dropdown, false - button */
  dropdown: true,
  /** Called after clicking on ImportButton */
  onImport?: DropdownItemProps['onClick'],
  /** Called after clicking on ExportButton */
  onExport?: DropdownItemProps['onClick']
}

export type ToolbarVariants = {
  Search: FC<SearchProps>,
  ImportExportItem: FC<ImportExportButtonProps | ImportExportDropdownProps>,
  ExportItem: FC<ToolbarVariantButtonProps>,
  ImportItem: FC<ToolbarVariantButtonProps>,
  CollapsibleSearch: FC<SearchProps>,
  FilterItem: FC<ToolbarVariantButtonProps>,
  FilterActiveItem: FC<ToolbarVariantButtonProps>,
  SettingsItem: FC<ToolbarVariantButtonProps>,
  FilterSidebar: FC<ToolbarVariantButtonProps>,
  ScaleItem: FC<ToolbarVariantButtonProps>,
  Divider: FC
}

export type ToolbarProps = {
  /** Items in left part */
  left?: ToolbarItems[],
  /** Style properties for items in left part */
  styleLeft?: React.CSSProperties,
  /** Items in right part */
  right?: ToolbarItems[],
  /** Style properties for items in right part */
  styleRight?: React.CSSProperties,
  /** Limit of left part items */
  leftLimit?: number,
  /** Sticky position */
  sticky?: number,
  /** Automatic dropdown enabled */
  autoDropdown?: boolean,
  /** React children */
  children?: ReactNode
} & ToolbarThemeProps & TestingProps

export type ToolbarViewProps = ToViewProps<ToolbarProps, ToolbarCssConfig, ToolbarThemeProps>

export type ToolbarSearchViewProps = ToViewProps<SearchProps, ToolbarCssConfig, ToolbarThemeProps>

type StateProps = {
  background?: string,
  color?: string,
  border?: string
}

export type ToolbarColorConfig = StateProps & {
  divider: StateProps,
  search: Focus & {
    enabled: StateProps,
    hover: StateProps
  },
  button: {
    hover: StateProps,
    active: StateProps
  }
}

export type ToolbarCssConfig = ToolbarColorConfig

export type ToolbarBlockSide = 'left' | 'right'

export type StyledToolbarProps = {
  cssConfig: ToolbarCssConfig,
  sticky?: number,
  autoDropdown?: boolean,
  dropdownedCount?: number
}

export type AutoDropdownProps = {
  enabled: boolean,
  keyProperty: string,
  items: ToolbarItems[]
}

export type AutoDropdownResultProps = {
  containerRef: React.RefObject<HTMLDivElement>,
  dropdowned: string[]
}
