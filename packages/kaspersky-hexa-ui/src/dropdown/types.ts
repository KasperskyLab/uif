import { Theme } from '@design-system/types'
import { TestingProps } from '@helpers/typesHelpers'
import { DividerProps } from '@src/divider/types'
import { ToggleProps } from '@src/toggle'
import type { DropdownProps as RcDropdownProps } from 'rc-dropdown'
import type { MenuItemProps, MenuProps, SubMenuProps } from 'rc-menu'
import {
  CSSProperties,
  FC,
  Key,
  ReactElement,
  ReactNode
} from 'react'

export type DropdownThemeProps = {
  /** Custom theme */
  theme?: Theme
}

export type Trigger = Exclude<RcDropdownProps['trigger'], undefined>[number]

export type Placement = RcDropdownProps['placement'] | 'bottomCenter' | 'topCenter'

export type DropdownOverlayProp = DropdownItemProps[] | ReactElement | (() => ReactElement)

export type DropdownConfigProviderProps = Pick<DropdownProps, 'children' | 'getPopupContainer' | 'usePortal'>

type StickyProps = { sticky?: boolean }

export type DropdownProps = {
  /** The dropdown menu */
  overlay: DropdownOverlayProp,
  /** Header element of dropdown menu */
  header?: DropdownItemProps & StickyProps,
  /** Footer element of dropdown menu */
  footer?: DropdownItemProps & StickyProps,
  /** The dropdown menu selected keys */
  selectedItemsKeys?: string[],
  /** The trigger mode which executes the dropdown action. Note that hover can't be used on touchscreens */
  trigger?: Trigger[],
  /** Called when the visible state is changed. Not trigger when hidden by click item */
  onVisibleChange?: (visible: boolean) => void,
  /** Called when overlay is clicked */
  onOverlayClick?: () => void,
  /** Called when menu item is selected */
  onOverlaySelect?: MenuProps['onSelect'],
  /** Whether the dropdown menu is currently visible */
  visible?: boolean,
  /** Whether the dropdown menu is disabled */
  disabled?: boolean,
  /** Is loading */
  loading?: boolean,
  /** Placement of popup menu */
  placement?: Placement,
  /** The class name of the dropdown root element */
  overlayClassName?: string,
  overlayStyle?: CSSProperties,
  /** Css class */
  className?: string,
  /** Set max height for dropdownMenu in pixels */
  popupMaxHeight?: number,
  /** To set the container of the dropdown menu */
  getPopupContainer?: RcDropdownProps['getPopupContainer'],
  /** React children */
  children?: ReactNode,
  /** Shorthand getPopupContainer={() => document.body} */
  usePortal?: boolean
} & DropdownThemeProps & TestingProps

export type DropdownVariants = {
  Menu: FC<MenuProps>,
  SubMenu: FC<SubMenuProps>,
  MenuItem: FC<DropdownItemProps>,
  MenuDivider: FC<DividerProps>,
  GroupTitle: FC<any>,
  InnerActions: FC<DropdownItemActionsProps>,
  Toggle: FC<ToggleProps>
}

type DropdownItemBaseProps = {
  children: ReactNode | DropdownItemProps[],
  /** @deprecated Use 'componentsBefore' prop instead */
  icon?: ReactNode,
  key?: string | Key | null,
  description?: string,
  tooltip?: string,
  componentsBefore?: ReactNode[],
  componentsAfter?: ReactNode[],
  truncateItemWidth?: number,
}

type DropdownItemStandardProps = DropdownItemBaseProps & {
  type?: 'group' | 'submenu' | 'action' | 'divider' | 'innerActions'
}

export type DropdownItemToggleProps = DropdownItemBaseProps & {
  type: 'toggle'
} & Omit<ToggleProps, keyof DropdownThemeProps | 'labelPosition'>

export type DropdownItemInnerProps = DropdownItemStandardProps | DropdownItemToggleProps

export type DropdownItemProps = Omit<MenuItemProps, 'type' | 'title' | 'children' | 'itemIcon' | 'extra'> & DropdownItemInnerProps & {
  title?: ReactNode
} & DropdownThemeProps & TestingProps

export type DropdownItemActionsProps = {
  children: ReactNode,
  className?: string,
  key?: string | Key | null
} & TestingProps
