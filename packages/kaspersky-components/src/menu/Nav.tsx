import { navCss, navSeparator } from '@src/menu/navCss'
import { NavItemData, NavItemProps, NavProps, StateActions } from '@src/menu/types'
import cn from 'classnames'
import React, { useEffect, useState, useRef, useCallback } from 'react'
import styled from 'styled-components'

import { Pin } from '@kaspersky/icons/16'

import { NavCaptionItem } from './NavCaptionItem'
import { NavItem } from './NavItem'
import { NavUserItem } from './NavUserItem'

const NavComponent = ({ beforeItems = [], navItems = [], favItems = [], favsEnabled, className, minimized, childPop, inert }: NavProps) => {
  const [active, setActive] = useState('')
  const [navFavItems, setNavFavItems] = useState(favItems)
  const favSection = {
    state: 'favorites',
    weight: 0,
    key: 'Favorites',
    expanded: true,
    icon: Pin,
    itemClass: 'favorites-item',
    klId: 'navigation.main.favorites',
    isRoot: true,
    items: navFavItems
  }
  const resolveNavStateArr = () => {
    return [
      Boolean(navFavItems.length) && favSection,
      ...navItems
        .filter((el:NavItemData) => el.state !== 'favorites')
    ].filter(Boolean)
  }

  const [navState, setNavState] = useState(resolveNavStateArr())
  const collapseAll = () => {
    updateNavState({ collapseAll: true })
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
        return navItem
      }

      if (!inert && activateItem) {
        navItem.active = false
        if (currentItem === activateItem) {
          navItem.active = true
          setActive(activateItem as string)
        }
      }

      items && navItem.items?.map(updateLevel)

      return navItem
    }
    const updatedNavState = navState.map(updateLevel)
    setNavState(updatedNavState)
  }
  const updateFavState = () => {
    favSection.items = navFavItems
    setNavState(resolveNavStateArr())
  }

  const documentRef = useRef(document)

  const handleClickOutside = useCallback((event) => {
    if ((minimized || !!childPop) && !document.querySelectorAll('.ant-layout-sider')[0].contains(event.target)) collapseAll()
  }, [minimized])

  useEffect(() => {
    documentRef.current.addEventListener('click', handleClickOutside)
    return () => {
      documentRef.current.removeEventListener('click', handleClickOutside)
    }
  }, [minimized])

  useEffect(() => {
    updateFavState()
  }, [navFavItems, navItems])

  useEffect(() => {
    minimized && collapseAll()
  }, [minimized])

  const menuState = {
    updateNavState,
    collapseAll,
    setActive,
    active,
    minimized,
    childPop,
    favsEnabled,
    navFavItems,
    setNavFavItems,
    updateFavState
  }

  return (<nav className={cn(className, 'uif-nav', minimized && 'nav-minimized', childPop && 'nav-child-pop')}>
    {
      [...beforeItems, ...navState].map((item: NavItemProps) => {
        const ItemCustomComponent = item.component
        if (ItemCustomComponent) return <ItemCustomComponent key={item.key} />
        if (item.userProps) return <NavUserItem key={item.key} data={item} menuState={menuState} />
        if (item.isCaption) return <NavCaptionItem key={item.key} data={item} />
        return <NavItem key={item.key} data={item} menuState={menuState} />
      })
    }
  </nav>)
}

export const Nav = styled(NavComponent).withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`
  ${navCss}
`

export const UserNav = styled(NavComponent).withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`
  margin-top: auto;
  ${navCss}
  ${navSeparator}
`
