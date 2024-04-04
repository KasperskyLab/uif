import {
  PropsWithChildren, FC,
  ReactElement, ReactNode,
  ReactInstance, MouseEvent,
  KeyboardEvent
} from 'react'
import {
  MenuProps,
  SubMenuProps,
  DropDownProps as AntdDropdownProps,
  MenuItemProps
} from 'antd'
import { DividerProps } from '@src/divider/types'
import { Theme } from '@design-system/types'
import { ToViewProps, TestingProps } from '@helpers/typesHelpers'

// Css config
type StateProps = {
  bgColor?: string,
  color?: string,
  actionColor?: string
}
export type DropdownColorConfig = {
  normal: StateProps,
  hover: StateProps,
  selected: StateProps,
  disabled: StateProps,
  group: StateProps,
  boxShadow: string,
  boxShadowLine: string
}

// Helpers
export type DropdownThemeProps = {
  /** Custom theme */
  theme?: Theme
}

export type Trigger = Exclude<AntdDropdownProps['trigger'], undefined>[number]

export type Placement = AntdDropdownProps['placement']

export type DropdownOverlayProp = DropdownItemProps[] | ReactElement | (() => ReactElement)

// Dropdown props
export type DropdownProps = PropsWithChildren<{
  /** The dropdown menu */
  overlay: DropdownOverlayProp,
  /** The trigger mode which executes the dropdown action. Note that hover can't be used on touchscreens */
  trigger?: Trigger[],
  /** Called when the visible state is changed. Not trigger when hidden by click item */
  onVisibleChange?: (visible: boolean) => void,
  /** Called when overlay is clicked */
  onOverlayClick?: () => void,
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
  /** Css class */
  className?: string,
  /** To set the container of the dropdown menu */
  getPopupContainer?: AntdDropdownProps['getPopupContainer']
} & DropdownThemeProps & TestingProps>

export type DropdownViewProps = ToViewProps<DropdownProps, DropdownColorConfig, DropdownThemeProps> & { rootHashClass?: string }

export type DropdownVariants = {
  Menu: FC<MenuProps>,
  SubMenu: FC<SubMenuProps>,
  MenuItem: FC<DropdownItemProps>,
  MenuDivider: FC<DividerProps>,
  GroupTitle: FC<any>
}

// Dropdown item props
export type DropdownItemInnerProps = {
  children: ReactNode | DropdownItemProps[],
  type?: 'group' | 'submenu' | 'action' | 'divider',
  componentsBefore?: ReactNode[],
  componentsAfter?: ReactNode[]
}

export type DropdownItemProps = Omit<MenuItemProps, 'onClick'> & DropdownItemInnerProps & {
  // copy-paste from antd non-exported type
  onClick?: (info: {
    key: string,
    keyPath: string[],
    /** @deprecated This will not be supported in the future. You should avoid using this */
    item: ReactInstance,
    domEvent: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>
  }) => void
} & DropdownThemeProps

/** @deprecated Use DropdownProps instead */
export type IDropdownProps = DropdownProps
/** @deprecated Use DropdownVariants instead */
export type IDropdownAdditionalComponents = DropdownVariants
