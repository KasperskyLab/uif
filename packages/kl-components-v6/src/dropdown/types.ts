import React from 'react'
import { MenuItemProps } from 'antd/es/menu/MenuItem'
import { TextSizes } from '../../design-system/tokens'
import { Theme } from '../../design-system/types'

type StateProps = {
  background?: string,
  color?: string
}

export type DropdownColorConfig = {
  normal?: StateProps,
  hover?: StateProps,
  item?: {
    selected: StateProps,
    hover: StateProps,
    disabled: StateProps
  }
}

export type DropdownSizeConfig = TextSizes & {
  padding: string,
  gap: string,
  borderRadius: string,
  itemPadding: string,
  itemTextSizes: TextSizes
}

export type DropdownCssConfig = DropdownColorConfig & DropdownSizeConfig

export type DropdownStyleProps = {
  /** Custom theme */
  theme?: Theme
}

type OverlayFunc = () => React.ReactElement

export type Trigger = 'click' | 'hover' | 'contextMenu'

export type Placement = 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' |'bottomRight'

export type IDropdownProps = {
  /** The dropdown menu */
  overlay: MenuItemProps[] | React.ReactElement | OverlayFunc,
  /** The trigger mode which executes the dropdown action. Note that hover can't be used on touchscreens */
  trigger?: Trigger[],
  /** Called when the visible state is changed. Not trigger when hidden by click item */
  onVisibleChange?: (visible: boolean) => void,
  /** Whether the dropdown menu is currently visible */
  visible?: boolean,
  /** Whether the dropdown menu is disabled */
  disabled?: boolean,
  /** Placement of popup menu */
  placement?: Placement,
  /** The class name of the dropdown root element */
  overlayClassName?: string,
  /** Test id */
  klId?: string,
  /** React children */
  children?: React.ReactNode | undefined,
  /** Css class */
  className?: string,
  /** Whether Portal is used to render popup */
  shouldUsePortal?: boolean,
  /** Function to set popup container  */
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement
} & DropdownStyleProps
