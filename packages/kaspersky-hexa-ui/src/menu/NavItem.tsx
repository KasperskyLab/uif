import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { Indicator } from '@src/indicator'
import { NavCaptionItem } from '@src/menu/NavCaptionItem'
import { useThemedMenu } from '@src/menu/useThemedMenu'
import { Tooltip } from '@src/tooltip'
import cn from 'classnames'
import React, { useContext } from 'react'
import styled from 'styled-components'

import { ArrowRightMini, Pin, Unpin } from '@kaspersky/icons/16'

import { AppThemeContext } from './Menu'
import { navDividerCss, navItemCss, newIndicatorCss } from './navCss'
import { ItemDivider, MenuViewProps, NavItemData, NavItemProps } from './types'

export const NavItem = (rawProps: NavItemProps): JSX.Element => {
  const applyAppTheme = useContext(AppThemeContext)
  const themedProps: MenuViewProps = useThemedMenu({ ...rawProps, applyAppTheme })
  const { testAttributes, ...rest } = useTestAttribute(themedProps)
  return <StyledNavItem {...testAttributes} {...rest} {...rawProps}/>
}
const NavItemComponent = ({
  data,
  className,
  menuState,
  _isChild
}: NavItemProps) => {
  const { icon, items, state, onClick, key, expanded, active, isNew, isCaption, itemDivider } = data
  const NavItemIcon = icon
  const hasChild = Boolean(items && items.length)

  const toggleItem = (item: string) => {
    menuState.minimized && menuState.collapseAll()
    menuState.updateNavState({ toggleExpandItem: item })
  }

  const itemClick = () => {
    menuState.updateNavState({ activateItem: state })
    menuState.setActive(state)
    if (menuState.minimized || menuState.childPop) {
      menuState.collapseAll()
    }
    onClick && onClick()
  }

  const entryClick = () => {
    hasChild ? toggleItem(state as string) : itemClick()
  }

  const isItemFavEnabled = !hasChild && menuState.favsEnabled && key !== 'Fav'
  const favsProps = {
    data,
    navFavItems: menuState.navFavItems,
    setNavFavItems: menuState.setNavFavItems,
    updateFavState: menuState.updateFavState
  }

  const navEntry = (
    <div
      className={cn(className, 'uif-nav-item-entry', active && 'active')}
      kl-id={data.klId}
      data-testid={data.klId}
      onClick={entryClick}
    >
      { icon && <div className="uif-nav-item-entry-icon">
        <NavItemIcon/>
      </div> }
      <div className="uif-nav-item-entry-title">
        <span className="title-ellipsis">{key}</span>
      </div>
      <div className="uif-nav-item-entry-props">
        { isNew && <NewIndicator mode="high" /> }
        { isItemFavEnabled && <AddToFavs { ...favsProps }/> }
        { hasChild && <ArrowRightMini className="uif-nav-item-entry-arrow"/> }
      </div>
    </div>
  )

  return (
    <>
      { itemDivider === ItemDivider.Before && <NavDivider /> }
      <div className={cn(className, 'uif-nav-item', isCaption && 'uif-nav-caption', expanded && 'expanded')}>
        {
          menuState.minimized && !_isChild
            ? <Tooltip text={key} placement="right">
                {navEntry}
              </Tooltip>
            : navEntry
        }
        {
          hasChild && <div className="uif-nav-item-child">
            <div className="uif-nav-item-child-wrapper">
              { items?.map((item: NavItemData) => {
                if (item.isCaption) return <NavCaptionItem key={`${item.key}-child`} data={item} menuState={menuState} />
                return <NavItem key={`${item.key}-child`} data={item} menuState={menuState} _isChild />
              }) }
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
  setNavFavItems
}: {
  data: NavItemData,
  navFavItems: NavItemData[],
  setNavFavItems: any,
  updateFavState: any
}) => {
  const isPinned = navFavItems.some((item: NavItemData) => item.key === data.key)
  const favHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    e.stopPropagation()
    isPinned
      ? setNavFavItems([...navFavItems.filter((item: NavItemData) => item.key !== data.key)])
      : setNavFavItems([data, ...navFavItems])
  }

  return <div className="uif-nav-fav-add" onClick={favHandler}>
    { isPinned
      ? <Unpin />
      : <Pin />
    }
  </div>
}

const NewIndicator = styled(Indicator)`
  ${newIndicatorCss}
`

export const NavDivider = styled.div`
  ${navDividerCss};
`
