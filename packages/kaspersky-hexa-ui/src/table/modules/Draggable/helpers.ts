import type { Active, Collision, Over } from '@dnd-kit/core'
import { TableRecord } from '@src/table'

import { ArrayGroupMove, ChildrenPath, PropertyPathArgs } from './types'

export const findChildrenKey = <T extends TableRecord>({ arr, id, forceLastPosition }: {
  arr: T[],
  id: React.Key,
  forceLastPosition?: boolean
}): ChildrenPath | null => {
  for (const [index, group] of arr.entries()) {
    if (!group.children) continue

    const itemIndex = group.children.findIndex(child => child.key === id)
    if (itemIndex !== -1) {
      return {
        groupKey: group.key,
        groupIndex: index,
        itemIndex: forceLastPosition ? group.children.length : itemIndex
      }
    }
  }
  return null
}

export const isOverGroup = (id?: string | number) => typeof id === 'string' && id.includes('group_')

export const getPropertyPath = <T extends TableRecord = TableRecord>({ groupBy, columns }: PropertyPathArgs<T>) => {
  if (!groupBy) return []
  const [{ groupingPropertyPath } = {}] = columns.filter(({ dataIndex }) => dataIndex === groupBy)
  return groupingPropertyPath && groupingPropertyPath.split('.') || [groupBy]
}

const updateByPropertyPath = (row: TableRecord, pathArray: string[], newValue: string) => {
  const lastKey = pathArray[pathArray.length - 1]
  const stringKeys = pathArray.slice(0, -1)

  const target = stringKeys.reduce((acc, key) => {
    if (!(key in acc)) acc[key] = {}
    return acc[key]
  }, row)

  target[lastKey] = newValue
  return { ...row }
}

export const arrayGroupMove = <T extends TableRecord>({ array, from, to, groupingPropertyPath }: ArrayGroupMove<T>) => {
  if (!groupingPropertyPath) return
  if ((from.groupKey === to.groupKey && from.itemIndex === to.itemIndex) || !to.groupKey) return array
  let activeItem: T | undefined

  const updatedArray = array.map((group) => {
    if (group.key !== from.groupKey) return group

    const newChildrenArray = (group.children ? [...group.children] : []) as T[]

    if (from.groupKey === to.groupKey) {
      const [moved] = newChildrenArray.splice(from.itemIndex, 1)
      if (moved) newChildrenArray.splice(to.itemIndex, 0, moved)

      return { ...group, children: newChildrenArray }
    } else {
      const [moved] = newChildrenArray.splice(from.itemIndex, 1)
      activeItem = moved

      return { ...group, children: newChildrenArray, count: newChildrenArray.length }
    }
  })

  if (activeItem) {
    const [, groupByValue] = to.groupKey.split('group_')

    const updatedActiveItem = updateByPropertyPath(activeItem, groupingPropertyPath, groupByValue)

    return updatedArray.map((group) => {
      if (group.key !== to.groupKey) return group

      const newChildrenArrayTo = group.children ? [...group.children] : []
      const updatedIndexTo = from.groupIndex < to.groupIndex ? to.itemIndex + 1 : to.itemIndex
      newChildrenArrayTo.splice(updatedIndexTo, 0, updatedActiveItem)

      return { ...group, children: newChildrenArrayTo, count: newChildrenArrayTo.length }
    })
  }

  return updatedArray
}

export const resolveEmptyGroupCollision = ({ collisions, over, active }: {
  collisions: Collision[],
  over: Over,
  active: Active
}) => {
  const [firstCollision, secondCollision] = collisions
  const items = over.data.current?.sortable.items
  const activeIndex = items.findIndex((item: string | number) => item === active?.id)
  const overIndex = items.findIndex((item: string | number) => item === over?.id)
  const isFromGroupBelow = activeIndex < overIndex
  if (collisions.every(({ id }) => String(id).includes('group_'))) {
    return isFromGroupBelow ? firstCollision : secondCollision
  }
}

export const resolveLastInGroupCollision = ({ collisions, over, active }: {
  collisions: Collision[],
  over: Over,
  active: Active
}) => {
  if (!collisions) return
  const [firstCollision, secondCollision] = collisions
  const items = over.data.current?.sortable.items
  const activeIndex = items.findIndex((item: string | number) => item === active?.id)
  const overIndex = items.findIndex((item: string | number) => item === over?.id)
  const nextCollisionIndex = items.findIndex((item: string | number) => item === secondCollision?.id)
  const isDropBetweenCollisions = nextCollisionIndex === overIndex + 1
  const isFromGroupBelow = activeIndex < overIndex
  if (isDropBetweenCollisions || isFromGroupBelow) return
  if (String(over.id).includes('group_') && firstCollision.id === over.id) {
    return secondCollision.id !== active.id && secondCollision
  }
}
