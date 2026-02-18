import { useLocalization } from '@helpers/localization/useLocalization'
import { navCss, navSeparator } from '@src/menu/navCss'
import { NavItemData, NavItemProps, NavProps, StateActions } from '@src/menu/types'
import cn from 'classnames'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import { Pin } from '@kaspersky/hexa-ui-icons/16'

import { MenuContext } from './Menu'
import { NavCaptionItem } from './NavCaptionItem'
import { NavItem } from './NavItem'
import { NavUserItem } from './NavUserItem'

const EMPTY_ITEMS: NavItemData[] = []
export const FAVORITES_ITEM_STATE = 'favorites'

const NavComponent = ({
  beforeItems = EMPTY_ITEMS,
  navItems = EMPTY_ITEMS,
  favItems = EMPTY_ITEMS,
  favsEnabled,
  favsExpanded = true,
  className,
  minimized,
  childPop,
  inert,
  onItemsChanged,
  onFavChanged,
  onFavToggle,
  pinIcon,
  unpinIcon,
  favIcon
}: NavProps) => {
  const [navFavItems, setNavFavItems] = useState(favItems)
  const {
    menuActiveItem,
    setMenuActiveItem,
    setMenuActivePopupItem
  } = useContext(MenuContext)

  const favSection: NavItemData = {
    state: 'favorites',
    weight: 0,
    key: useLocalization('menu.favoritesNavItem'),
    expanded: favsExpanded,
    icon: favIcon || Pin,
    itemClass: 'favorites-item',
    klId: 'navigation.main.favorites',
    isRoot: true,
    items: navFavItems
  }

  const processingFavSection = (favSection: NavItemData) => {
    favSection?.items?.forEach((item: NavItemData) => item.active = false)
    return favSection
  }

  const resolveNavStateArr = () => {
    return [
      Boolean(navFavItems.length) && processingFavSection(favSection),
      ...navItems
        .filter((el:NavItemData) => el.state !== FAVORITES_ITEM_STATE)
    ].filter(Boolean)
  }

  const [navState, setNavState] = useState(resolveNavStateArr())
  const collapseAll = () => {
    setMenuActivePopupItem('' as string)
  }

  const updateNavState = ({
    toggleExpandItem,
    activateItem,
    collapseAll
  }: StateActions) => {
    const updateLevel = (navItem: NavItemData) => {
      const { state: currentItem, expanded = false, items = undefined } = navItem

      if (collapseAll) {
        navItem.expanded = false
        if (navItem.items) navItem.items.map(updateLevel)
        return navItem
      }

      if (toggleExpandItem && (currentItem === toggleExpandItem)) {
        navItem.expanded = !expanded
        if (minimized || childPop) {
          setMenuActivePopupItem(currentItem)
        }
        return navItem
      }

      if (!inert && menuActiveItem) {
        navItem.active = false
        if (currentItem === menuActiveItem) {
          navItem.active = true
          setMenuActiveItem(activateItem as string)
        }
      }

      items && navItem.items?.map(updateLevel)

      return navItem
    }
    const updatedNavState = navState.map(updateLevel)
    setNavState(updatedNavState)
    onItemsChanged && updatedNavState.length && onItemsChanged()
    if (onFavToggle && toggleExpandItem === FAVORITES_ITEM_STATE) {
      const favoritesStatus = updatedNavState?.find(i => i.state === FAVORITES_ITEM_STATE)?.expanded
      onFavToggle(!!favoritesStatus)
    }
  }
  const updateFavState = () => {
    favSection.items = navFavItems
    setNavState(resolveNavStateArr())
  }

  const handleClickOutside = useCallback((event) => {
    if (
      (minimized || !!childPop) &&
      !document.querySelectorAll('.ant-layout-sider')[0].contains(event.target)
    ) {
      collapseAll()
    }
  }, [minimized])

  useEffect(() => {
    const { addEventListener, removeEventListener } = document
    addEventListener('click', handleClickOutside)
    return () => {
      removeEventListener('click', handleClickOutside)
    }
  }, [minimized])

  useEffect(() => {
    updateFavState()
  }, [navFavItems, navItems])

  useEffect(() => {
    updateNavState({ collapseAll: false })
  }, [menuActiveItem])

  useEffect(() => {
    minimized && collapseAll()
  }, [minimized])

  useEffect(() => {
    setNavFavItems(favItems)
  }, [favItems])

  const menuState = {
    updateNavState,
    collapseAll,
    minimized,
    childPop,
    favsEnabled,
    navFavItems,
    setNavFavItems: (favs: Array<NavItemData>) => {
      setNavFavItems(favs)
      const favsKeys = favs
        .filter((fav) => !!fav.id)
        .map((fav) => fav.id) as Array<string>
      onFavChanged?.(favsKeys)
    },
    updateFavState
  }

  return (<nav className={cn(
    className,
    'uif-nav',
    {
      'nav-minimized': minimized,
      'nav-child-pop': childPop
    }
  )}>
    {
      [...beforeItems, ...navState].map((item: NavItemProps) => {
        const ItemCustomComponent = item.component
        if (ItemCustomComponent) return <ItemCustomComponent key={item.key} />
        if (item.userProps) return <NavUserItem key={item.key} data={item} menuState={menuState} />
        if (item.isCaption) return <NavCaptionItem key={item.key} data={item} />
        return (
          <NavItem 
            key={item.key} 
            data={item} 
            testId={item.klId} 
            menuState={menuState} 
            pinIcon={pinIcon}
            unpinIcon={unpinIcon}
          />
        )
      })
    }
  </nav>)
}

export const Nav = styled(NavComponent)`
  ${navCss}
`

export const UserNav = styled(NavComponent)`
  margin-top: auto;
  ${navCss}
  ${navSeparator}
`
