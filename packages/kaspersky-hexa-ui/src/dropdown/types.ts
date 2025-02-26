import { Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { DividerProps } from '@src/divider/types'
import {
  DropDownProps as AntdDropdownProps,
  MenuItemProps,
  MenuProps,
  SubMenuProps
} from 'antd'
import {
  FC,
  KeyboardEvent,
  MouseEvent,
  ReactElement,
  ReactInstance,
  ReactNode
} from 'react'

type StateProps = {
  background?: string,
  color?: string,
  descriptionColor?: string
}

type DropdownStateConfig = Record<'enabled' | 'hover' | 'active' | 'disabled', StateProps>

export type DropdownColorConfig = Record<'unselected' | 'selected', DropdownStateConfig> & {
  groupTitleColor: string,
  background: string,
  boxShadow: string,
  popupMaxHeight?: number
}

export type DropdownThemeProps = {
  /** Custom theme */
  theme?: Theme
}

export type Trigger = Exclude<AntdDropdownProps['trigger'], undefined>[number]

export type Placement = AntdDropdownProps['placement']

export type DropdownOverlayProp = DropdownItemProps[] | ReactElement | (() => ReactElement)

export type DropdownProps = {
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
  /** Set max height for dropdownMenu in pixels */
  popupMaxHeight?: number,
  /** To set the container of the dropdown menu */
  getPopupContainer?: AntdDropdownProps['getPopupContainer'],
  /** React children */
  children?: ReactNode
} & DropdownThemeProps & TestingProps

export type DropdownViewProps = ToViewProps<DropdownProps, DropdownColorConfig, DropdownThemeProps> & { rootHashClass?: string }

export type DropdownVariants = {
  Menu: FC<MenuProps>,
  SubMenu: FC<SubMenuProps>,
  MenuItem: FC<DropdownItemProps>,
  MenuDivider: FC<DividerProps>,
  GroupTitle: FC<any>
}

export type DropdownItemInnerProps = {
  children: ReactNode | DropdownItemProps[],
  type?: 'group' | 'submenu' | 'action' | 'divider',
  description?: string,
  tooltip?: string,
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
