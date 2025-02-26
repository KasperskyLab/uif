import { useImmutableRef } from '@helpers/useImmutableRef'
import { useResizeObserver } from '@helpers/useResizeObserver'
import { Popover } from '@src/popover'
import { Tooltip } from '@src/tooltip'
import React, { FC, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'

import Tag from './Tag'
import { TagProps, TagReductionGroupProps } from './types'

const StyledTagReductionGroup = styled.div.withConfig<{ isMultiline: boolean }>({
  shouldForwardProp: prop => !['isMultiline'].includes(prop)
})`
  width: 100%;
  display: flex;
  flex-grow: 1;
  ${({ isMultiline }) => !isMultiline && 'overflow: hidden;'}
  gap: 8px;

  .hexa-tag-reduction-group-shown-tags {
    display: flex;
    gap: 8px;
    ${({ isMultiline }) => isMultiline && 'flex-wrap: wrap;'}
  }

  .hexa-tag-reduction-group-hidden-elements {
    display: flex;
    gap: 8px;
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
`

const TagWithReduction = styled(Tag)`
  display: flex;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 1;

  > span {
    display: block;
  }

  &.hexa-tag-reduction-group-trunc-tag {
    overflow: visible;
  }
`

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
  }, [lastFittingItemIndex])

  return (
    <StyledTagReductionGroup ref={setContainerRef} isMultiline={isMultiline}>
      {!isMultiline && <div className="hexa-tag-reduction-group-hidden-elements">
        {items.map((item, index) => <TagWithReduction key={index} {...item}/>)}
      </div>}
      {Boolean(itemsToShow && itemsToShow.length) && (
        <div className="hexa-tag-reduction-group-shown-tags">
          {itemsToShow.map((item, index) => <TagWithReduction key={index} {...item}/>)}
        </div>
      )}
      {centralItem && <Tooltip text={centralItem.label}><TagWithReduction {...centralItem} /></Tooltip>}
      {showTruncTag && (
        <Popover content={<Tag.Group items={itemsToHide}/>}>
          <TagWithReduction {...reductionTag} className="hexa-tag-reduction-group-trunc-tag">
            {`+${itemsToHide.length}`}
          </TagWithReduction>
        </Popover>
      )}
    </StyledTagReductionGroup>
  )
}
