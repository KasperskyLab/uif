import { Size, Theme } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { DrawerProps } from 'antd'
import { KeyboardEvent, MouseEvent, PropsWithChildren, ReactNode } from 'react'

export type SidebarSize = `${Exclude<Size, Size.ExtraLarge>}`

type StateProps = {
  background?: string,
  color?: string,
  border?: string
}

export type SidebarColorConfig = {
  drawer: StateProps,
  mask: StateProps
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
  /** @deprecated use footerLeft / footerRight */
  footer?: ReactNode,
  /** The footerRight of the Sidebar */
  footerLeft?: ReactNode,
  /** The footerLeft of the Sidebar */
  footerRight?: ReactNode,
  /** Whether to show mask or not */
  mask?: boolean,
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
  /** Specify a callback that will be called when a user clicks mask, close button or Cancel button */
  onClose?: (e: KeyboardEvent<HTMLDivElement> | MouseEvent<HTMLDivElement | HTMLButtonElement>) => void,
  /** Whether to unmount child components on closing Sidebar or not */
  destroyOnClose?: DrawerProps['destroyOnClose'],
  /** An element placed below the Title at the bottom of the Header */
  subHeader?: ReactNode,
  /** @deprecated use titleLineClamp. If titleLineClamp >= 1 then truncateTitle: true */
  truncateTitle?: boolean,
  /** Number of not truncated lines, see https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/line-clamp */
  titleLineClamp?: number,
  /** Remove padding from content */
  noPaddingContent?: boolean
}> & SidebarThemeProps & TestingProps

export type SidebarViewProps = ToViewProps<SidebarProps, SidebarCssConfig, SidebarThemeProps>
