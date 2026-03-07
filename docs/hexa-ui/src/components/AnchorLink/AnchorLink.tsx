import cn from 'classnames'
import React, { useEffect, useState } from 'react'

import { Text } from '@kaspersky/hexa-ui'

import styles from './AnchorLink.module.scss'

type AnchorItem = {
  id: string
  label: string
}

type AnchorLinkProps = {
  items: AnchorItem[]
  title?: string
  style?: React.CSSProperties
}

export function AnchorLink ({
  items,
  title = 'Содержание страницы',
  style
}: AnchorLinkProps) {
  const [selected, setSelected] = useState(items[0]?.id)

  useEffect(() => {
    if (!items.length) return

    const handler = () => {
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollY = window.scrollY
      //Проверка на последний элемент
      const isAtBottom = scrollY + viewportHeight >= documentHeight - 64

      if (isAtBottom && items.length > 0) {
        setSelected(items[items.length - 1].id)
        return
      }

      const probeY = scrollY + viewportHeight * 0.2
      let currentId = items[0]?.id

      for (const item of items) {
        const block = document.getElementById(item.id)
        if (!block) continue

        const top = block.offsetTop

        if (top <= probeY) {
          currentId = item.id
        } else {
          break
        }
      }

      setSelected(currentId)
    }

    window.addEventListener('scroll', handler)
    handler()

    return () => window.removeEventListener('scroll', handler)
  }, [items])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return

    const isLastItem = items[items.length - 1]?.id === id

    if (isLastItem) {
      window.scrollTo({
        top: document.documentElement.scrollHeight - window.innerHeight,
        behavior: 'smooth'
      })
    } else {
      window.scrollTo({
        top: el.offsetTop,
        behavior: 'smooth'
      })
    }
  }

  if (!items.length) return null

  const selectedIndex = Math.max(
    0,
    items.findIndex((i) => i.id === selected)
  )

  return (
    <nav
      className={styles.anchorLink}
      style={style}
    >
      <Text>{title}</Text>

      <div className={styles.list}>
        <div className={styles.line}>
          <div
            className={styles.marker}
            style={{ '--selected-index': selectedIndex } as React.CSSProperties}
          />
        </div>

        <div className={styles.items}>
          {items.map((item) => {
            const isSelected = item.id === selected

            return (
              <button
                key={item.id}
                className={cn(styles.btn, isSelected && styles.selected)}
                onClick={() => scrollTo(item.id)}
                type="button"
              >
                <Text type="BTM4" className={cn(styles.text, isSelected && styles.selected)}>
                  {item.label}
                </Text>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
