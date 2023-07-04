import { ReactNode, KeyboardEvent, MouseEvent } from 'react'
import { Size, Theme } from '../../design-system/types'

export type SidebarSize = Extract<Size, Size.ExtraSmall | Size.Small | Size.Medium | Size.Large>

type StateProps = {
  background?: string,
  color?: string,
  borderColor?: string
}

export type SidebarColorConfig = {
  normal: {
    drawer: StateProps,
    mask: StateProps,
    icon: StateProps
  }
}

export type SidebarSizeConfig = {
  width: number,
  padding: string,
  gap: string
}

export type SidebarCssConfig = SidebarColorConfig & SidebarSizeConfig

export type SidebarStyleProps = {
  /** Size */
  size?: SidebarSize,
  /** Custom theme */
  theme?: Theme
}

export type ISidebarProps = {
  /** The class name of the container of the Sidebar dialog */
  className?: string,
  /** Whether a close (x) button is visible on top left or not */
  closable?: boolean,
  /** Custom close icon */
  closeIcon?: ReactNode,
  /** The footer for Sidebar */
  footer?: ReactNode,
  /** Whether support press esc to close */
  keyboard?: boolean,
  /** Whether to show mask or not */
  mask?: boolean,
  /** Clicking on the mask (area outside the Sidebar) to close the Sidebar or not */
  maskClosable?: boolean,
  /** The title for Drawer */
  title?: ReactNode,
  /** Whether the Sidebar dialog is visible or not */
  visible?: boolean,
  /** The z-index of the Drawer */
  zIndex?: number,
  /** Specify a callback that will be called when a user clicks mask, close button or Cancel button */
  onClose?: (e: KeyboardEvent<HTMLDivElement> | MouseEvent<HTMLDivElement | HTMLButtonElement>) => void,
  /** Test id */
  klId?: string
} & SidebarStyleProps
