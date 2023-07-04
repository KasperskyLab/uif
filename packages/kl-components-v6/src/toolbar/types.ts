import React, { ForwardRefExoticComponent, MouseEventHandler, ReactNode, RefAttributes } from 'react'
import { ThemeKey } from '../../design-system/types'
import { IDropdownProps } from '../dropdown/types'
import { IconProps } from '../icon'
import { ILinkProps } from '../link/types'

export type ToolbarStyleProps = {
  theme?: ThemeKey
}

export enum ToolbarItemKey {
  BUTTON = 'button',
  LINK = 'link',
  ICON = 'icon',
  DROPDOWN = 'dropdown',
  CHILDREN = 'children',
}

export type ToolbarItems<T extends ToolbarItemKey = ToolbarItemKey> = {
  readonly key: string,
  readonly children?: React.ReactNode,
  readonly type: T
} & (
  {
    readonly type: ToolbarItemKey.BUTTON,
    readonly label?: React.ReactNode,
    readonly className?: string,
    readonly icon?: JSX.Element,
    readonly disabled?: boolean,
    readonly onClick?: MouseEventHandler<HTMLElement>
  } | IDropdownProps & {
    readonly type: ToolbarItemKey.DROPDOWN,
    readonly label?: React.ReactNode,
    readonly className?: string
  } | Omit<IconProps, 'name'> & {
    readonly type: ToolbarItemKey.ICON,
    readonly icon?: IconProps['name'],
    readonly label?: React.ReactNode,
    readonly className?: string
  } | ForwardRefExoticComponent<ILinkProps & {
    children?: ReactNode
  } & RefAttributes<HTMLAnchorElement>> & {
    readonly type: ToolbarItemKey.LINK,
    readonly label?: React.ReactNode,
    readonly href?: string
  } | {
    readonly type: ToolbarItemKey.CHILDREN
  }
)

export type ToolbarProps = {
  /** unique id */
  componentId: string,
  /** items in left part */
  left?: ToolbarItems[],
  /** items in right part */
  right?: ToolbarItems[],
  /** Limit of left part items */
  leftLimit?: number,
  /** sticky position */
  sticky?: number
} & ToolbarStyleProps

type StateProps = {
  background?: string,
  color?: string,
  iconColor?: string
};

export type ToolbarColorConfig = {
  mode: {
    normal: StateProps
  }
};

export type ToolbarCssConfig = ToolbarColorConfig;
