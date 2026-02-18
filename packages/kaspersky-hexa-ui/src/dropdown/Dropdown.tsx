import { showDeprecationWarn } from '@helpers/showDeprecationWarn'
import { usePopupConfig } from '@helpers/components/PopupConfigProvider'
import cn from 'classnames'
import isObject from 'lodash/isObject'
import RcDropdown, { DropdownProps as RcDropdownProps } from 'rc-dropdown'
import { MenuProps as RcMenuProps } from 'rc-menu'
import useMergedState from 'rc-util/lib/hooks/useMergedState'
import React, { FC, useCallback, useEffect, useMemo } from 'react'

import { DropdownItem } from './DropdownItem'
import styles from './styles/Dropdown.module.scss'
import { DropdownProps, DropdownVariants, Placement } from './types'
import { useMappedContent } from './useMappedContent'
import { DropdownDivider, DropdownGroup, DropdownMenu, DropdownSubmenu, DropdownInnerActions } from './wrappers'

const getPopupMaxHeight = (popupMaxHeight: number | undefined) => popupMaxHeight && (popupMaxHeight > 100 ? popupMaxHeight : 100)

const getPlacement = (placement: Placement): RcDropdownProps['placement'] => {
  if (placement === 'topCenter' || placement === 'bottomCenter') {
    const newPlacement = placement.slice(0, placement.indexOf('Center'))
    showDeprecationWarn('mode', placement)
    return newPlacement as RcDropdownProps['placement']
  }
  return placement
}

export const Dropdown: FC<DropdownProps> & DropdownVariants = (rawProps: DropdownProps) => {
  const {
    visible: rawVisible,
    onVisibleChange: rawOnVisibleChange,
    onOverlaySelect: rawOnOverlaySelect,
    overlayClassName: rawOverlayClassName,
    placement,
    trigger,
    disabled,
    popupMaxHeight,
    children,
    getPopupContainer,
    usePortal,
    ...rest
  } = rawProps

  const [visible, setVisible] = useMergedState(false, { value: rawVisible })
  const config = usePopupConfig({ usePortal: true })

  const dropdownMaxHeight = useMemo(() => getPopupMaxHeight(popupMaxHeight), [popupMaxHeight])
  
  const handleOverlaySelect: RcMenuProps['onSelect'] = (info) => {
    setVisible(false)
    rawOnOverlaySelect?.(info)
  }
  
  const overlayClassName = cn(
    rawOverlayClassName,
    dropdownMaxHeight && styles.dropdownMaxHeight
  )
  const rootOverlayClassName = cn(
    styles.dropdownOverlay,
    overlayClassName,
    placement === 'top' && 'ant-dropdown-placement-topCenter',
    placement === 'bottom' && 'ant-dropdown-placement-bottomCenter'
  )

  const props = useMappedContent({ ...rest, overlayClassName, onOverlaySelect: handleOverlaySelect })

  useEffect(() => {
    setDropdownMaxHeight()
  }, [dropdownMaxHeight])

  const setDropdownMaxHeight = useCallback(() => {
    setTimeout(() => {
      const dropdown = document.querySelector('.ant-dropdown') as HTMLElement
      dropdown?.style?.setProperty('--dropdown-max-height', `${dropdownMaxHeight}px`)
    }, 0)
  }, [dropdownMaxHeight])

  const focusOnFirstItem = useCallback(() => {
    setTimeout(() => {
      const elementFoFocus = document.querySelector('.ant-dropdown:not(.ant-dropdown-hidden) li')?.firstChild as HTMLElement
      elementFoFocus?.focus?.()
    }, 0)
  }, [])

  const handleVisibleChange = useCallback((opened: boolean) => {
    focusOnFirstItem()
    opened && setDropdownMaxHeight()
    setVisible(opened)
    rawOnVisibleChange?.(opened)
  }, [rawOnVisibleChange, focusOnFirstItem, setDropdownMaxHeight])

  const child = React.Children.only(
    !isObject(children) ? <span className={styles.dropdownChildren}>{children}</span> : children
  ) as React.ReactElement<{
    className?: string;
    disabled?: boolean;
  }>

  return (
    <RcDropdown
      {...props}
      getPopupContainer={
        getPopupContainer ??
        config.getPopupContainer ??
        (triggerNode => (usePortal ?? config.usePortal) ? document.body : triggerNode.parentElement!)
      }
      prefixCls="ant-dropdown"
      overlayClassName={rootOverlayClassName}
      visible={visible}
      onVisibleChange={handleVisibleChange}
      autoFocus
      trigger={disabled ? [] : trigger as RcDropdownProps['trigger']}
      placement={getPlacement(placement)}
      animation="slide-up"
    >
      {React.cloneElement(child, {
        disabled: child.props.disabled ?? disabled,
        className: cn(child.props.className, 'ant-dropdown-trigger')
      })}
    </RcDropdown>
  )
}

Dropdown.Menu = DropdownMenu
Dropdown.SubMenu = DropdownSubmenu
Dropdown.MenuItem = DropdownItem
Dropdown.MenuDivider = DropdownDivider
Dropdown.GroupTitle = DropdownGroup
Dropdown.InnerActions = DropdownInnerActions

Dropdown.displayName = 'Dropdown'
Dropdown.Menu.displayName = 'Dropdown.Menu'
Dropdown.SubMenu.displayName = 'Dropdown.SubMenu'
Dropdown.MenuItem.displayName = 'Dropdown.MenuItem'
Dropdown.MenuDivider.displayName = 'Dropdown.MenuDivider'
Dropdown.GroupTitle.displayName = 'Dropdown.GroupTitle'
Dropdown.InnerActions.displayName = 'Dropdown.InnerActions'
