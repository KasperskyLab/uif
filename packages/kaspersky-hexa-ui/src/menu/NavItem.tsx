import { TextWithTruncation } from '@helpers/components/TextWithTruncation'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { ActionButton } from '@src/action-button'
import { Badge } from '@src/badge'
import { Indicator } from '@src/indicator'
import { Tooltip } from '@src/tooltip'
import cn from 'classnames'
import React, { Dispatch, ReactNode, SetStateAction, useContext } from 'react'
import styled from 'styled-components'

import { ArrowRightMini, Pin, Unpin } from '@kaspersky/hexa-ui-icons/16'

import { MenuContext } from './Menu'
import { NavCaptionItem } from './NavCaptionItem'
import { navItemCss } from './navCss'
import { ItemDivider, MenuViewProps, NavItemData, NavItemProps } from './types'
import { useThemedMenu } from './useThemedMenu'
import { NavDivider } from './wrappers'

export const NavItem = (rawProps: NavItemProps): JSX.Element => {
  const { applyAppTheme } = useContext(MenuContext)
  const themedProps: MenuViewProps = useThemedMenu({ ...rawProps, applyAppTheme })
  const { testAttributes, ...rest } = useTestAttribute(themedProps)
  return <StyledNavItem {...testAttributes} {...rest} {...rawProps}/>
}
const NavItemComponent = ({
  data,
  className,
  menuState,
  _isChild,
  pinIcon,
  unpinIcon
}: NavItemProps) => {
  const {
    icon,
    items,
    state,
    onClick,
    key,
    expanded,
    disabled,
    active,
    isNew,
    isCaption,
    itemDivider,
    elementAfter,
    submenuItems,
    canBeAddedAsFav = true,
    skipActivation = false,
    lineClamp
  } = data
  const NavItemIcon = icon
  const hasChild = Boolean(items && items.length)
  const submenuChild = Boolean(submenuItems)
  const {
    setSubmenuItems,
    setSubmenuMarginActive,
    setSubmenuActive,
    setMenuActiveItem,
    setMenuActivePopupItem,
    menuActivePopupItem
  } = useContext(MenuContext)
  const {
    minimized,
    collapseAll,
    updateNavState,
    childPop,
    favsEnabled,
    navFavItems,
    setNavFavItems
  } = menuState

  const toggleItem = (item: string) => {
    minimized && setMenuActivePopupItem(state as string)
    updateNavState({ toggleExpandItem: item })
  }

  const itemClick = () => {
    if (!skipActivation) {
      updateNavState({ activateItem: state })
      setMenuActiveItem(state as string)
    }
    if (minimized || childPop) {
      collapseAll()
    }
    onClick && onClick()
  }

  const expandSubmenu = () => {
    if (submenuItems && setSubmenuItems && setSubmenuMarginActive && setSubmenuActive) {
      updateNavState({ activateItem: state })
      setMenuActiveItem(state as string)
      setSubmenuItems(submenuItems)
      setSubmenuMarginActive(true)
      setSubmenuActive(true)
    }
  }

  const entryClick = () => {
    if (disabled) return
    if (hasChild) {
      toggleItem(state as string)
      return
    }
    if (submenuChild) {
      expandSubmenu()
      return
    }
    if (setSubmenuMarginActive && setSubmenuActive) {
      setSubmenuMarginActive(false)
      setSubmenuActive(false)
    }
    itemClick()
  }

  const isItemFavEnabled = canBeAddedAsFav && !hasChild && favsEnabled && key !== 'Fav'
  const favsProps = {
    data,
    navFavItems: navFavItems,
    setNavFavItems: setNavFavItems,
    updateFavState: updateNavState,
    pinIcon,
    unpinIcon
  }
  
  const lookForNewItems = (items: NavItemData[]) => {
    for (let i = 0; i < items.length; i++) {
      const item = items[i]

      if (item.isNew) {
        return true
      }

      if (item.items && lookForNewItems(item.items)) {
        return true
      }
    }

    return false
  }
 
  const hasItems = items?.length
  const hasNew = hasItems ? lookForNewItems(items) : false
  const shouldBeMarkedAsNewIndicator = hasNew
  const shouldBeMarkedAsNewBadge = !hasItems && isNew

  const navEntry = (
    <div
      className={cn(
        className,
        'uif-nav-item-entry',
        { active, disabled }
      )}
      kl-id={data.klId}
      data-testid={data.klId}
      onClick={entryClick}
    >
      { icon && <div className="uif-nav-item-entry-icon">
        <NavItemIcon/>
      </div> }
      <div className={cn(
        'uif-nav-item-entry-title',
        {'title-wo-icon': !icon}
      )}>
        <TextWithTruncation text={key} lineClamp={lineClamp}>
          <span>{key}</span>
        </TextWithTruncation>
      </div>
      <div className="uif-nav-item-entry-props">
        { shouldBeMarkedAsNewIndicator && NewIndicator }
        { shouldBeMarkedAsNewBadge && NewBadge }
        { elementAfter }
        { isItemFavEnabled && <AddToFavs { ...favsProps }/> }
        { hasChild && <ArrowRightMini className="uif-nav-item-entry-arrow"/> }
      </div>
    </div>
  )

  return (
    <>
      { itemDivider === ItemDivider.Before && <NavDivider /> }
      <div className={cn(
        className,
        'uif-nav-item',
        {
          'uif-nav-caption': isCaption,
          'expanded': !minimized && expanded,
          'popup-expanded': menuActivePopupItem === state
        }
      )}>
        {
          minimized && !_isChild
            ? <Tooltip text={key} placement="right">
                {navEntry}
              </Tooltip>
            : navEntry
        }
        {
          hasChild && <div className="uif-nav-item-child">
            <div className="uif-nav-item-child-wrapper">
              { items?.map((item: NavItemData) => {
                const { isCaption, isRoot } = item
                if (isCaption) {
                  return <NavCaptionItem
                    className={cn({ 'caption-root': isRoot })}
                    key={`${item.key}-child`}
                    data={item}
                    menuState={menuState} />
                }
                return (
                  <NavItem
                    key={`${item.key}-child`}
                    data={item}
                    menuState={menuState}
                    pinIcon={pinIcon}
                    unpinIcon={unpinIcon}
                    _isChild
                  />
                )
              })}
            </div>
          </div>
        }
      </div>
      { itemDivider === ItemDivider.After && <NavDivider/> }
    </>
  )
}

export const StyledNavItem = styled(NavItemComponent).withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`
  ${navItemCss};
`

const AddToFavs = ({
  data,
  navFavItems,
  setNavFavItems,
  pinIcon = <Pin />,
  unpinIcon = <Unpin />
}: {
  data: NavItemData,
  navFavItems: NavItemData[],
  setNavFavItems: Dispatch<SetStateAction<NavItemData[]>>,
  updateFavState: () => void,
  pinIcon?: ReactNode
  unpinIcon?: ReactNode
}) => {
  const isPinned = navFavItems.some((item: NavItemData) => item.key === data.key)

  const favHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    e.stopPropagation()
    isPinned
      ? setNavFavItems([...navFavItems.filter((item: NavItemData) => item.key !== data.key)])
      : setNavFavItems([data, ...navFavItems])
  }

  return <ActionButton
    className="uif-nav-fav-add"
    mode="ghost"
    onClick={favHandler}
    icon={ isPinned ? unpinIcon : pinIcon }
  />
}

const NewBadge = <Badge mode="new" size="medium" text="NEW" />
const NewIndicator = <Indicator mode="new" />

export { NavDivider }
