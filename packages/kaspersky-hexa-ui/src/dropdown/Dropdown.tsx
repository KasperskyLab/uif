import { mirrorPlacement, useBodyDirection } from '@helpers/bodyDirection'
import { usePopupConfig } from '@helpers/components/PopupConfigProvider'
import { showDeprecationWarn } from '@helpers/showDeprecationWarn'
import cn from 'classnames'
import isObject from 'lodash/isObject'
import RcDropdown, { DropdownProps as RcDropdownProps } from 'rc-dropdown'
import { MenuProps as RcMenuProps } from 'rc-menu'
import useMergedState from 'rc-util/lib/hooks/useMergedState'
import React, { FC, useCallback, useEffect } from 'react'

import { DropdownItem } from './DropdownItem'
import styles from './styles/Dropdown.module.scss'
import { DropdownProps, DropdownVariants, Placement } from './types'
import { useMappedContent } from './useMappedContent'
import {
  DropdownDivider,
  DropdownGroup,
  DropdownInnerActions,
  DropdownMenu,
  DropdownSubmenu,
  DropdownToggle
} from './wrappers'

const MIN_HEIGHT = 100
const MAX_WIDTH = 600

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
    placement: rawPlacement = 'bottomLeft',
    trigger,
    disabled,
    popupMaxHeight,
    popupMaxWidth,
    children,
    getPopupContainer,
    usePortal,
    closeOnScroll,
    closeOnWindowBlur,
    ...rest
  } = rawProps

  const [visible, setVisible] = useMergedState(false, { value: rawVisible })
  const config = usePopupConfig({ usePortal: true })

  const dropdownMaxHeight = popupMaxHeight && Math.max(popupMaxHeight, MIN_HEIGHT)
  const dropdownMaxWidth = popupMaxWidth && Math.min(popupMaxWidth, MAX_WIDTH)

  const { direction } = useBodyDirection()

  const placement = mirrorPlacement(rawPlacement, direction) as RcDropdownProps['placement']

  const handleOverlaySelect: RcMenuProps['onSelect'] = (info) => {
    setVisible(false)
    rawOnOverlaySelect?.(info)
  }

  const overlayClassName = cn(
    rawOverlayClassName,
    dropdownMaxHeight && styles.dropdownMaxHeight,
    dropdownMaxWidth && styles.dropdownMaxWidth
  )
  const rootOverlayClassName = cn(
    styles.dropdownOverlay,
    overlayClassName,
    placement === 'top' && 'ant-dropdown-placement-topCenter',
    placement === 'bottom' && 'ant-dropdown-placement-bottomCenter'
  )

  const props = useMappedContent({ ...rest, overlayClassName, onOverlaySelect: handleOverlaySelect })

  useEffect(() => {
    setDropdownAttributes()
  }, [dropdownMaxHeight, dropdownMaxWidth])

  const setDropdownAttributes = useCallback(() => {
    setTimeout(() => {
      const dropdowns: NodeListOf<HTMLElement> = document.querySelectorAll('.ant-dropdown')
      dropdowns.forEach(d => {
        const currentMinWidth = Number(d.style.getPropertyValue('min-width').split('px')[0])
        if (currentMinWidth > MAX_WIDTH) {
          d.style.setProperty('min-width', '600px')
        }
        if (dropdownMaxHeight) {
          d.style.setProperty('--dropdown-max-height', `${dropdownMaxHeight}px`)
        }
        if (dropdownMaxWidth) {
          d.style.setProperty('--dropdown-max-width', `${dropdownMaxWidth}px`)
        }
      })
    }, 0)
  }, [dropdownMaxHeight, dropdownMaxWidth])

  const focusOnFirstItem = useCallback(() => {
    setTimeout(() => {
      const elementFoFocus = document.querySelector('.ant-dropdown:not(.ant-dropdown-hidden) li')?.firstChild as HTMLElement
      elementFoFocus?.focus?.()
    }, 0)
  }, [])

  const handleVisibleChange = useCallback((opened: boolean) => {
    focusOnFirstItem()
    opened && setDropdownAttributes()
    setVisible(opened)
    rawOnVisibleChange?.(opened)
  }, [focusOnFirstItem, setDropdownAttributes, setVisible, rawOnVisibleChange])

  const closeDropdown = useCallback(() => {
    setVisible(false),
    rawOnVisibleChange?.(false)
  }, [setVisible, rawOnVisibleChange])

  useEffect(() => {
    if (!visible) return

    const handleScroll = (event: Event) => {
      const target = event.target

      if (target instanceof Element && target.closest('.ant-dropdown')) return

      closeDropdown()
    }

    if (closeOnScroll) window.addEventListener('scroll', handleScroll, true)
    if (closeOnWindowBlur) window.addEventListener('blur', closeDropdown)

    return () => {
      if (closeOnScroll) window.removeEventListener('scroll', handleScroll, true)
      if (closeOnWindowBlur) window.removeEventListener('blur', closeDropdown)
    }
  }, [visible, closeOnScroll, closeOnWindowBlur, closeDropdown])

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
Dropdown.Toggle = DropdownToggle

Dropdown.displayName = 'Dropdown'
Dropdown.Menu.displayName = 'Dropdown.Menu'
Dropdown.SubMenu.displayName = 'Dropdown.SubMenu'
Dropdown.MenuItem.displayName = 'Dropdown.MenuItem'
Dropdown.MenuDivider.displayName = 'Dropdown.MenuDivider'
Dropdown.GroupTitle.displayName = 'Dropdown.GroupTitle'
Dropdown.InnerActions.displayName = 'Dropdown.InnerActions'
Dropdown.Toggle.displayName = 'Dropdown.Toggle'
