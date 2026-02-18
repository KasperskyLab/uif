import { PopupConfigProvider } from '@helpers/components/PopupConfigProvider'
import { TextReducer } from '@helpers/components/TextReducer'
import {
  StyledRow,
  StyledRowBlock,
  StyledRowText,
  StyledRowTextCol
} from '@src/submenu/SubComponents'
import { Text } from '@src/typography'
import cn from 'classnames'
import React, { useEffect, useRef, useState } from 'react'

import styles from './AnchorNavigation.module.scss'
import {
  AnchorItem,
  AnchorNavigationProps,
  NavigationItemProps,
  NavigationProps
} from './types'
import { flatten, getScrollParent, getStickyStyle } from './utils'

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function NavigationItem ({
  item,
  level,
  onClick,
  selected
}: NavigationItemProps) {
  return (
    <StyledRow
      className={cn(styles.item, selected && styles.selected)}
      data-section={item.id}
      leftOffset={8 + level * 20}
      onClick={onClick}
      onKeyDown={e => e.key === 'Enter' ? onClick() : undefined}
      selected={selected}
      tabIndex={0}
    >
      <StyledRowTextCol>
        <StyledRowText type="BTR4">
          <TextReducer lineClamp={2}>{item.label}</TextReducer>
        </StyledRowText>
      </StyledRowTextCol>
      {item.elementAfter && (
        <StyledRowBlock className={styles.elementAfter}>{item.elementAfter}</StyledRowBlock>
      )}
    </StyledRow>
  )
}

function Navigation ({
  items,
  style,
  title
}: NavigationProps) {
  const [selected, setSelected] = useState(items[0]?.id)
  const [stickyStyle, setStickyStyle] = useState<React.CSSProperties>({})
  const ref = useRef<HTMLElement>(null)
  const isScrollTriggeredByNavClick = useRef(false)

  useEffect(() => {
    if (!items.length) return

    const scrollElement = getScrollParent(ref.current!)
    const eventDispacher = scrollElement === document.documentElement
      ? window
      : scrollElement

    const handler = () => {
      const viewportHeight = scrollElement.clientHeight
      const documentHeight = scrollElement.scrollHeight
      const scrollY = scrollElement.scrollTop
      // check if the element is the last one
      const isAtBottom = scrollY + viewportHeight >= documentHeight - 64
      const flatItems = flatten(items)

      let currentId = ''

      if (isAtBottom && flatItems.length > 0) {
        currentId = flatItems[flatItems.length - 1].id
      } else {
        const probeY = scrollY + viewportHeight * 0.2
        currentId = flatItems[0]?.id

        for (const item of flatItems) {
          const block = document.getElementById(item.id)
          if (!block) continue

          const top = block.offsetTop

          if (top <= probeY) {
            currentId = item.id
          } else {
            break
          }
        }
      }

      setSelected(prev => {
        if (prev !== currentId && !isScrollTriggeredByNavClick.current) {
          if (currentId === flatItems[0].id) {
            ref.current?.scrollTo({ top: 0, behavior: 'smooth' })
          } else {
            ref.current
              ?.querySelector(`[data-section="${currentId}"]`)
              ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
          }
        }

        return currentId
      })
    }

    const resetScrollTriggeredByNavClick = () => {
      isScrollTriggeredByNavClick.current = false
    }

    eventDispacher.addEventListener('scroll', handler)
    eventDispacher.addEventListener('scrollend', resetScrollTriggeredByNavClick)
    handler()

    setStickyStyle(getStickyStyle(scrollElement))

    return () => {
      eventDispacher.removeEventListener('scroll', handler)
      eventDispacher.removeEventListener('scrollend', resetScrollTriggeredByNavClick)
    }
  }, [items])

  if (!items.length) return null

  function renderItem (item: AnchorItem, level: number = 0): JSX.Element {
    return (
      <React.Fragment key={item.id}>
        <NavigationItem
          item={item}
          level={level}
          onClick={() => {
            isScrollTriggeredByNavClick.current = true
            scrollTo(item.id)
          }}
          selected={item.id === selected}
        />
        {item.children && item.children.map(child => renderItem(child, level + 1))}
      </React.Fragment>
    )
  }

  return (
    <PopupConfigProvider getPopupContainer={trigger => trigger.parentElement!}>
      <nav ref={ref} className={styles.navigation} style={{
        ...style,
        ...stickyStyle
      }}>
        {title && <Text type="BTM3">{title}</Text>}

        <div className={styles.items}>
          {items.map(item => renderItem(item))}
        </div>
      </nav>
    </PopupConfigProvider>
  )
}

export function AnchorNavigation ({
  children,
  className,
  items,
  title,
  ...props
}: AnchorNavigationProps) {
  return (
    <div {...props} className={cn(styles.anchorLink, className)}>
      <div className={styles.content}>
        {children}
      </div>

      <Navigation items={items} title={title} />
    </div>
  )
}
