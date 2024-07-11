import React from 'react'
import styled from 'styled-components'
import cn from 'classnames'
import { ArrowRightMini, Pin, Unpin } from '@kaspersky/icons/16'
import { navItemCss, navDividerCss, newIndicatorCss } from './navCss'
import { NavItemProps, NavItemData, MenuViewProps, ItemDivider } from './types'
import { Indicator } from '@src/indicator'
import { useThemedMenu } from '@src/menu/useThemedMenu'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { NavCaptionItem } from '@src/menu/NavCaptionItem'

export const NavItem = (rawProps: NavItemProps): JSX.Element => {
  const themedProps: MenuViewProps = useThemedMenu(rawProps)
  const props = useTestAttribute(themedProps)
  return <StyledNavItem {...props} {...rawProps}/>
}
const NavItemComponent = ({
  data,
  className,
  menuState
}: NavItemProps) => {
  const { icon, items, state, onClick, key, expanded, active, isNew, isCaption, itemDivider } = data
  const NavItemIcon = icon
  const haveChild = Boolean(items && items.length)

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
    haveChild ? toggleItem(state as string) : itemClick()
  }

  const isItemFavEnabled = !haveChild && menuState.favsEnabled && key !== 'Fav'
  const favsProps = {
    data,
    navFavItems: menuState.navFavItems,
    setNavFavItems: menuState.setNavFavItems,
    updateFavState: menuState.updateFavState
  }

  return (
    <>
      { itemDivider === ItemDivider.Before && <NavDivider/> }
      <div className={cn(className, 'uif-nav-item', isCaption && 'uif-nav-caption', expanded && 'expanded')}>
        <div className={cn(className, 'uif-nav-item-entry', active && 'active')} onClick={entryClick}>
          { icon && <div className='uif-nav-item-entry-icon'>
            <NavItemIcon/>
          </div> }
          <div className='uif-nav-item-entry-title'>
            <span className='title-ellipsis'>{key}</span>
          </div>
          <div className='uif-nav-item-entry-props'>
            { isNew && <NewIndicator mode={'high'} /> }
            { isItemFavEnabled && <AddToFavs { ...favsProps }/> }
            { haveChild && <ArrowRightMini className='uif-nav-item-entry-arrow'/> }
          </div>
        </div>
        {
          haveChild && <div className='uif-nav-item-child'>
            <div className='uif-nav-item-child-wrapper'>
              { items?.map((item: NavItemData) => {
                if (item.isCaption) return <NavCaptionItem key={`${item.key}-child`} data={item} menuState={menuState} />
                return <NavItem key={`${item.key}-child`} data={item} menuState={menuState}/>
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
  setNavFavItems,
  updateFavState
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

  return <div className='uif-nav-fav-add' onClick={favHandler}>
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
