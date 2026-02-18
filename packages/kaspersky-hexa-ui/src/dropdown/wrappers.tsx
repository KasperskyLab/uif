import { Divider, DividerProps } from '@src/divider'
import cn from 'classnames'
import Menu, { MenuProps, SubMenuProps } from 'rc-menu'
import React, { FC } from 'react'

import { ArrowRight } from '@kaspersky/hexa-ui-icons/16'

import styles from './styles/Dropdown.module.scss'
import { DropdownItemActionsProps } from './types'

export const DropdownMenu: FC<MenuProps> = (props) => <Menu {...props} prefixCls="ant-dropdown-menu" />

export const DropdownSubmenu: FC<SubMenuProps> = ({ popupClassName, ref, ...props }) => (
  <Menu.SubMenu
    ref={ref as React.Ref<HTMLLIElement> | undefined}
    expandIcon={<ArrowRight />} 
    popupClassName={cn(popupClassName, styles.dropdownOverlay)}
    popupOffset={[16, -10]}
    {...props}
  />
)

export const DropdownGroup: FC = (props) => <li {...props} className={styles.dropdownGroupTitle} />

export const DropdownDivider: FC<DividerProps> = ({ className, ...props }) => <Divider className={cn(className, styles.dropdownDivider)} mode="light" {...props} />

export const DropdownInnerActions: FC<DropdownItemActionsProps> = ({ className, ...props }) => <div className={cn(className, styles.dropdownInnerActions)} {...props} />
