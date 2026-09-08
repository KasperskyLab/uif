import { useImmutableRef } from '@helpers/useImmutableRef'
import { useResizeObserver } from '@helpers/useResizeObserver'
import { Popover } from '@src/popover'
import { Tooltip } from '@src/tooltip'
import cn from 'classnames'
import React, { FC, useEffect, useMemo, useState } from 'react'

import Tag from './Tag'
import styles from './Tag.module.scss'
import { TagProps, TagReductionGroupProps } from './types'

type TagGroupItems = TagReductionGroupProps['items']

const MIN_TAG_SIZE = 50
const MAX_TRUNC_TAG_SIZE = 34
const PADDING = 8

export const TagReductionGroup: FC<TagReductionGroupProps> = ({
  isMultiline = false,
  items,
  reductionTag
}) => {
  const [itemsToShow, setItemsToShow] = useState<TagGroupItems>(items)
  const [centralItem, setCentralItem] = useState<TagProps | undefined>()
  const [itemsToHide, setItemsToHide] = useState<TagGroupItems>([])

  const [containerRef, setContainerRef] = useImmutableRef<HTMLDivElement>()
  const { right: containerRight } = useResizeObserver(containerRef) ?? { right: 0 }

  const lastFittingItemIndex = useMemo<number | undefined>(() => {
    if (isMultiline) return undefined
    if (containerRight < MIN_TAG_SIZE + PADDING + MAX_TRUNC_TAG_SIZE) return -1
    if (!containerRef.current) return undefined

    const childrenWrapper = containerRef.current.querySelector('.hexa-tag-reduction-group-hidden-elements')
    const children = Array.from(childrenWrapper?.children ?? [])

    const res = children.findIndex(child => child.getBoundingClientRect().right + PADDING > containerRight)

    if (res === -1) return undefined

    const avialableSpace = containerRight - children[res].getBoundingClientRect().left
    const condition = res === children.length - 1
      ? avialableSpace > MIN_TAG_SIZE
      : avialableSpace > MIN_TAG_SIZE + PADDING + MAX_TRUNC_TAG_SIZE

    return condition ? res : res - 1
  }, [containerRight, containerRef.current, PADDING, isMultiline])

  const showTruncTag = !isMultiline && lastFittingItemIndex !== undefined && !!itemsToHide.length

  useEffect(() => {
    switch (lastFittingItemIndex) {
      case undefined:
        setItemsToShow(items)
        setCentralItem(undefined)
        setItemsToHide([])
        break
      case -1:
        setItemsToShow([])
        setCentralItem(undefined)
        setItemsToHide(items)
        break
      default:
        setItemsToShow(items.slice(0, lastFittingItemIndex))
        setCentralItem(items[lastFittingItemIndex])
        setItemsToHide(items.slice(lastFittingItemIndex + 1))
    }
  }, [lastFittingItemIndex, items])

  return (
    <div
      ref={setContainerRef}
      className={cn(styles.reductionGroup, isMultiline && styles.multiline)}
    >
      {!isMultiline && (
        <div className="hexa-tag-reduction-group-hidden-elements">
          {items.map((item, index) => (
            <Tag key={index} {...item} className={cn(item.className, styles.tagWithReduction)} />
          ))}
        </div>
      )}
      {Boolean(itemsToShow && itemsToShow.length) && (
        <div className="hexa-tag-reduction-group-shown-tags">
          {itemsToShow.map((item, index) => (
            <Tag key={index} {...item} className={cn(item.className, styles.tagWithReduction)} />
          ))}
        </div>
      )}
      {centralItem && (
        <Tooltip text={centralItem.label}>
          <Tag {...centralItem} className={cn(centralItem.className, styles.tagWithReduction)} />
        </Tooltip>
      )}
      {showTruncTag && (
        <Popover content={<Tag.Group items={itemsToHide} />}>
          <Tag
            {...reductionTag}
            className="hexa-tag-reduction-group-trunc-tag"
          >
            {`+${itemsToHide.length}`}
          </Tag>
        </Popover>
      )}
    </div>
  )
}
