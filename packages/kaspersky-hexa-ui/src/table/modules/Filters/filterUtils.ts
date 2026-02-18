import cloneDeep from 'lodash/cloneDeep'

import { isFilter, isGroup, isSameItem, prefix } from './helpers'
import { FilterGroup } from './types'

type FilterStructure = FilterGroup['items'] | FilterGroup

export const mergeFilterStructures = <T extends FilterStructure>(base: T, toMerge: T): T => {
  if (Array.isArray(base) && Array.isArray(toMerge)) {
    return mergeArrays(base, toMerge) as T
  }

  if (!Array.isArray(base) && !Array.isArray(toMerge)) {
    return mergeGroups(base, toMerge) as T
  }

  throw new Error(`${prefix} Cannot merge array with group directly`)
}

const mergeArrays = (base: FilterGroup['items'], toMerge: FilterGroup['items']): FilterGroup['items'] => {
  const groupsMap = new Map<string, FilterGroup>()
  const result: FilterGroup['items'] = []

  base.forEach((item) => {
    if (isGroup(item)) {
      groupsMap.set(item.id, cloneDeep(item))
      result.push(item)
    } else {
      result.push(item)
    }
  })

  toMerge.forEach(item => {
    if (isGroup(item)) {
      const existingGroup = groupsMap.get(item.id)

      if (existingGroup) {
        const mergedGroup = mergeGroups(existingGroup, item)
        const index = result.findIndex((i) => isGroup(i) && i.id === item.id)
        if (index !== -1) {
          result[index] = mergedGroup
        }
        groupsMap.set(item.id, mergedGroup)
      } else {
        const newGroup = cloneDeep(item)
        groupsMap.set(item.id, newGroup)
        result.push(newGroup)
      }
    } else if (!result.some(filter => isFilter(filter) && isSameItem(item, filter))) {
      result.push(item)
    }
  })

  return result
}

const mergeGroups = (base: FilterGroup, toMerge: FilterGroup): FilterGroup => ({
  ...cloneDeep(base),
  ...cloneDeep(toMerge),
  items: mergeArrays(base.items, toMerge.items)
})
