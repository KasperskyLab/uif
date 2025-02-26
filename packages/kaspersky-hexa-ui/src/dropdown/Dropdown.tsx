import { WithGlobalComponentStyles } from '@helpers/hocs/WithGlobalComponentStyles'
import { WithGlobalStyles } from '@helpers/hocs/WithGlobalStyles'
import { DividerProps } from '@src/divider'
import { Dropdown as AntDropdown, Menu, MenuProps, SubMenuProps } from 'antd'
import cn from 'classnames'
import React, { FC, useCallback } from 'react'

import { getDropdownCss, StyledDivider } from './dropdownCss'
import { DropdownItem } from './DropdownItem'
import { DropdownProps, DropdownVariants, DropdownViewProps } from './types'
import { useMappedContent } from './useMappedContent'
import { useThemedDropdown } from './useThemedDropdown'

export const Dropdown: FC<DropdownProps> & DropdownVariants = (rawProps: DropdownProps) => {
  const props = useThemedDropdown(rawProps)
  return <DropdownView {...props} />
}

const DropdownViewComponent: FC<DropdownViewProps> = ({
  onVisibleChange,
  overlayClassName,
  rootHashClass,
  ...rest
}: DropdownViewProps) => {
  const newOverlayClassName = cn(overlayClassName, rootHashClass, 'kl6-dropdown-popup')
  const props = useMappedContent({ ...rest, overlayClassName: newOverlayClassName })

  const focusOnFirstItem = useCallback(() => {
    setTimeout(() => {
      const elementFoFocus = document.querySelector('.ant-dropdown:not(.ant-dropdown-hidden) li')?.firstChild as HTMLElement
      elementFoFocus?.focus?.()
    }, 0)
  }, [])
  const newOnVisibleChange = useCallback((opened: boolean) => {
    focusOnFirstItem()
    onVisibleChange?.(opened)
  }, [onVisibleChange, focusOnFirstItem])
  return <AntDropdown {...props} onVisibleChange={newOnVisibleChange} />
}

DropdownViewComponent.displayName = 'DropdownView'

const DropdownView = WithGlobalComponentStyles(
  WithGlobalStyles(DropdownViewComponent),
  (cssConfig, rootHashClass) => getDropdownCss(cssConfig, rootHashClass).join('')
)

export const DropdownMenu: FC<MenuProps> = (props: MenuProps) => <Menu {...props} />

export const DropdownSubmenu: FC<SubMenuProps> = ({ className, ...rest }: SubMenuProps) => (
  <Menu.SubMenu popupClassName={className} {...rest} />
)

export const DropdownGroup: FC = (props) => <li {...props} className="kl6-dropdown-group-title" />

export const DropdownDivider: FC<DividerProps> = (props) => <StyledDivider {...props} />

Dropdown.Menu = DropdownMenu
Dropdown.SubMenu = DropdownSubmenu
Dropdown.MenuItem = DropdownItem
Dropdown.MenuDivider = DropdownDivider
Dropdown.GroupTitle = DropdownGroup

Dropdown.displayName = 'Dropdown'
Dropdown.Menu.displayName = 'Dropdown.Menu'
Dropdown.SubMenu.displayName = 'Dropdown.SubMenu'
Dropdown.MenuItem.displayName = 'Dropdown.MenuItem'
Dropdown.MenuDivider.displayName = 'Dropdown.MenuDivider'
Dropdown.GroupTitle.displayName = 'Dropdown.GroupTitle'
