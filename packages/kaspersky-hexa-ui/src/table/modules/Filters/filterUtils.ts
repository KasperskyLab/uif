import { TableRecord } from '@src/table/types'
import cloneDeep from 'lodash/cloneDeep'

import { isFilter, isGroup, isSameItem, prefix } from './helpers'
import { FilterGroup } from './types'

export type FilterStructure<T extends TableRecord = TableRecord> = FilterGroup<T>['items'] | FilterGroup<T>

export function mergeFilterStructures<T extends TableRecord> (
  base: FilterGroup<T>['items'],
  toMerge: FilterGroup<T>['items']
): FilterGroup<T>['items']

export function mergeFilterStructures<T extends TableRecord> (
  base: FilterGroup<T>,
  toMerge: FilterGroup<T>
): FilterGroup<T>

export function mergeFilterStructures <T extends TableRecord> (base: FilterStructure<T>, toMerge: FilterStructure<T>): FilterStructure<T> {
  if (Array.isArray(base) && Array.isArray(toMerge)) {
    return mergeArrays(base, toMerge)
  }

  if (!Array.isArray(base) && !Array.isArray(toMerge)) {
    return mergeGroups(base, toMerge)
  }

  throw new Error(`${prefix} Cannot merge array with group directly`)
}

const mergeArrays = <T extends TableRecord = TableRecord> (
  base: FilterGroup<T>['items'],
  toMerge: FilterGroup<T>['items']
): FilterGroup<T>['items'] => {
  const groupsMap = new Map<string, FilterGroup<T>>()
  const result: FilterGroup<T>['items'] = []

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

const mergeGroups = <T extends TableRecord = TableRecord>(base: FilterGroup<T>, toMerge: FilterGroup<T>): FilterGroup<T> => ({
  ...cloneDeep(base),
  ...cloneDeep(toMerge),
  items: mergeArrays(base.items, toMerge.items)
})
