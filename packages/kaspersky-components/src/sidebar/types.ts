import { KeyboardEvent, MouseEvent, PropsWithChildren, ReactNode } from 'react'
import { Size, Theme } from '@design-system/types'
import { ToViewProps, TestingProps } from '@helpers/typesHelpers'
import { DrawerProps } from 'antd'

export type SidebarSize = `${Exclude<Size, Size.ExtraLarge>}`

type StateProps = {
  background?: string,
  color?: string,
  borderColor?: string
}

export type SidebarColorConfig = {
  normal: {
    drawer: StateProps,
    mask: StateProps
  }
}

export type SidebarSizeConfig = {
  width: number,
  padding: string,
  flexMarginLeft: number,
  gap: string
}

export type SidebarCssConfig = SidebarColorConfig & SidebarSizeConfig

export type SidebarThemeProps = {
  /** Size */
  size?: SidebarSize,
  /** Custom theme */
  theme?: Theme
}

export type SidebarProps = PropsWithChildren<{
  /** The class name of the container of the Sidebar dialog */
  className?: string,
  /** The footer of the Sidebar */
  footer?: ReactNode,
  /** @deprecated Whether to support press esc to close or not. No effect - always true */
  keyboard?: boolean,
  /** Whether to show mask or not */
  mask?: boolean,
  /** @deprecated Clicking on the mask (area outside the Sidebar) to close the Sidebar or not. No effect - always true */
  maskClosable?: boolean,
  /** The title of the Sidebar */
  title?: ReactNode,
  /** Whether the Sidebar dialog is visible or not */
  visible?: boolean,
  /** The z-index of the Sidebar */
  zIndex?: number,
  /** Is Sidebar adaptive to viewport */
  flex?: boolean,
  /** Header actions should be placed at corner of Sidebar */
  headerActions?: ReactNode,
  /** The subtitle of the Sidebar */
  subtitle?: ReactNode,
  /** The element that is showing before the title */
  titlePrefix?: ReactNode,
  /** The element that is showing after the title */
  titlePostfix?: ReactNode,
  /** Style of the Sidebar content part */
  bodyStyle?: DrawerProps['bodyStyle'],
  /** @deprecated Sidebar is always closable */
  closable?: DrawerProps['closable'],
  /** @deprecated Close Icon can't be changed */
  closeIcon?: DrawerProps['closeIcon'],
  /** Specify a callback that will be called when a user clicks mask, close button or Cancel button */
  onClose?: (e: KeyboardEvent<HTMLDivElement> | MouseEvent<HTMLDivElement | HTMLButtonElement>) => void,
  /** Whether to unmount child components on closing Sidebar or not */
  destroyOnClose?: DrawerProps['destroyOnClose'],
  /** An element placed below the Title at the bottom of the Header */
  subHeader?: ReactNode
}> & SidebarThemeProps & TestingProps

export type SidebarViewProps = ToViewProps<SidebarProps, SidebarCssConfig, SidebarThemeProps>

/** @deprecated Use SidebarProps instead */
export type ISidebarProps = SidebarProps
/** @deprecated Use SidebarThemeProps instead */
export type SidebarStyleProps = SidebarThemeProps
