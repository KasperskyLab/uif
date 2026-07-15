import { MakePartial } from '@helpers/typesHelpers'
import { TableRecord } from '@src/table/types'
import cloneDeep from 'lodash/cloneDeep'

import { mergeFilterStructures } from './filterUtils'
import {
  assertCorrectFilters,
  isFilter,
  isFilterConfig,
  isGroup,
  isSameItem,
  isSidebarFilter,
  prefix
} from './helpers'
import {
  FilterConfig,
  FilterFromColumn,
  FilterGroup,
  FilterLogicOperation,
  SidebarFilter,
  SidebarFilterInternal,
  UnitedFilter
} from './types'

export type FiltersStateManagerConstructor = {
  logicOperation?: FilterLogicOperation
}

type ResetFilterFunction<T extends TableRecord = TableRecord> = (filterItem: UnitedFilter<T>) => boolean

export class FiltersStateManager<T extends TableRecord = TableRecord> {
  private listeners: Array<() => void> = []
  protected rootGroup: FilterGroup<T>

  constructor (props: FiltersStateManagerConstructor = {}) {
    const rootGroup: FilterGroup<T> = {
      id: 'root',
      items: [],
      logicOperation: props.logicOperation || 'AND'
    }

    this.rootGroup = rootGroup
  }

  public subscribe (listener: () => void): () => void {
    this.listeners.push(listener)
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener)
    }
  }

  private notifyListeners (): void {
    this.listeners.forEach(listener => listener())
  }

  public initDefaultFilters (defaultFilters: UnitedFilter<T>[]) {
    assertCorrectFilters({
      filters: defaultFilters,
      message: 'Failed to initialize predefined filters. Format is not correct',
      shouldThrowError: true,
      withPredicate: false
    })

    const newRootGroup = Array.isArray(defaultFilters)
      ? {
          id: 'root',
          logicOperation: this.rootGroup.logicOperation,
          items: cloneDeep(defaultFilters)
        }
      : cloneDeep(this.rootGroup)

    this.rootGroup = mergeFilterStructures(this.rootGroup, newRootGroup)

    this.notifyListeners()
  }

  public setExternalFilters (externalFilters: UnitedFilter<T>[], groupId: string = 'root') {
    const targetGroup = this.findGroup(this.rootGroup, groupId)
    if (!targetGroup) {
      console.warn(`${prefix} External filters wasn't set, because group ${groupId} wasn't found.
        \n ExternalFilters: ${externalFilters}`)
      return
    }

    assertCorrectFilters({
      filters: externalFilters,
      message: 'Failed to set external filters. Format is not correct',
      shouldThrowError: true
    })

    targetGroup.items = cloneDeep(externalFilters)
    this.notifyListeners()
  }

  public setExternalSidebarFilters (externalFilters: (SidebarFilter<T> | SidebarFilterInternal<T>)[]) {
    const nonSidebarFilters = this.rootGroup.items.filter(filter => !isSidebarFilter(filter))
    this.rootGroup.items = [...nonSidebarFilters, ...cloneDeep(externalFilters)]
    this.notifyListeners()
  }

  public addFilter (filter: FilterConfig | FilterFromColumn<T>, groupId: string = 'root'): void {
    const targetGroup = this.findGroup(this.rootGroup, groupId)
    if (!targetGroup) {
      console.warn(`${prefix} Filter wasn't added, because group ${groupId} wasn't found. \n Filter: ${filter}`)
      return
    }
    targetGroup.items.push(cloneDeep(filter))
    this.notifyListeners()
  }

  public updateFilter (
    filter: FilterConfig,
    updates: Partial<FilterConfig>,
    groupId: string = 'root'
  ): void {
    const targetGroup = this.findGroup(this.rootGroup, groupId)
    if (!targetGroup) {
      console.warn(`${prefix} Filter wasn't updated, because group ${groupId} wasn't found.
        \n Filter: ${filter} \n Changes: ${updates}`)
      return
    }

    const index = targetGroup.items.findIndex(item => isFilterConfig(item) && isSameItem(item, filter))

    if (index !== -1) {
      targetGroup.items[index] = {
        ...targetGroup.items[index],
        ...updates
      } as FilterConfig
    }
    this.notifyListeners()
  }

  public removeFilter (filter: UnitedFilter<T>, groupId: string = 'root'): void {
    const targetGroup = this.findGroup(this.rootGroup, groupId)
    if (!targetGroup) {
      console.warn(`${prefix} Filter wasn't removed, because group ${groupId} wasn't found. \n Filter: ${filter}`)
      return
    }

    targetGroup.items = targetGroup.items.filter(item => !isSameItem(item, filter))
    this.notifyListeners()
  }

  // TODO: добавить как аргумент itemsToGroup, и еѝли они еѝть, то удалѝть их из ѝвоих групп и добавлѝть в новую
  public createGroup (groupProps: MakePartial<FilterGroup, 'items'>, parentGroupId: string = 'root'): void {
    const targetGroup = this.findGroup(this.rootGroup, parentGroupId)
    if (!targetGroup) {
      console.warn(
        `${prefix} Group wasn't created, because parent group ${parentGroupId} wasn't found.
        \n Group props: ${groupProps}`
      )
      return
    }
    if (this.isGroupExists(groupProps.id, parentGroupId)) {
      console.warn(
        `${prefix} Group ${groupProps.id} wasn't created, because parent group ${parentGroupId} already have group with
        this id. \n Group props: ${groupProps}`
      )
      return
    }
    targetGroup.items.push({
      id: groupProps.id,
      items: cloneDeep(groupProps.items) || [],
      logicOperation: groupProps.logicOperation || 'AND'
    })
    this.notifyListeners()
  }

  public removeGroup (groupId: string): void {
    if (groupId === 'root') {
      console.warn(`${prefix} Can't remove root group`)
      return
    }

    const parentGroup = this.findParentGroup(groupId)
    if (!parentGroup) {
      console.warn(`${prefix} Group ${groupId} wasn't removed. Parent group not found`)
      return
    }

    if (!parentGroup.items.find(item => isGroup(item) && item.id === groupId)) {
      console.warn(`${prefix} Group ${groupId} wasn't removed. It wasn't found in FilterApi structure`)
      return
    }

    parentGroup.items = parentGroup.items.filter(item => !(isGroup(item) && item.id === groupId))
    this.notifyListeners()
  }

  public setGroupLogicOperation (groupId: string, logicOperation: FilterLogicOperation): void {
    const targetGroup = this.findGroup(this.rootGroup, groupId)
    if (!targetGroup) {
      console.warn(`${prefix} Group logic operation wasn't updated, because group ${groupId} wasn't found`)
      return
    }

    targetGroup.logicOperation = logicOperation
    this.notifyListeners()
  }

  resetFilters (groupId: string = 'root', filterFunction: ResetFilterFunction<T> = () => false) {
    const targetGroup = this.findGroup(this.rootGroup, groupId)
    if (!targetGroup) {
      console.warn(`${prefix} Filters wasn't reset, because group ${groupId} wasn't found.`)
      return
    }
    targetGroup.items = targetGroup.items.filter(filterFunction)
    this.notifyListeners()
  }

  public ungroupGroup (groupId: string): void {
    if (groupId === 'root') {
      console.warn(`${prefix} Can't ungroup root group`)
      return
    }

    const parentGroup = this.findParentGroup(groupId)
    if (!parentGroup) {
      console.warn(`${prefix} Group ${groupId} wasn't ungrouped. Parent group not found`)
      return
    }

    const groupIndex = parentGroup.items.findIndex((item) => !isFilter(item) && item.id === groupId)
    if (groupIndex === -1) {
      console.warn(`${prefix} Group ${groupId} wasn't ungrouped. It wasn't found in FilterApi structure.`)
      return
    }

    const groupItems = (parentGroup.items[groupIndex] as FilterGroup).items
    parentGroup.items.splice(groupIndex, 1, ...groupItems)
    this.notifyListeners()
  }

  public getGroupItems (groupId: string): UnitedFilter<T>[] {
    const targetGroup = this.findGroup(this.rootGroup, groupId)

    if (!targetGroup) {
      console.warn(`${prefix} Can't get group, because group ${groupId} wasn't found.`)
      return []
    }

    return cloneDeep(targetGroup.items)
  }

  public getRootGroupFilters () {
    return this.getGroupItems('root')
  }

  public getSidebarFilters () {
    return this.getRootGroupFilters().filter(isSidebarFilter)
  }

  private findGroup (group: FilterGroup<T>, groupId: string): FilterGroup<T> | null {
    if (group.id === groupId) return group
    for (const item of group.items) {
      if (isGroup(item)) {
        const found = this.findGroup(item, groupId)
        if (found) return found
      }
    }
    return null
  }

  public isGroupExists (groupToCheckId: string, parentGroupId: string = 'root') {
    const parentGroup = this.findGroup(this.rootGroup, parentGroupId)
    if (!parentGroup) {
      console.warn(
        `${prefix} Can't check is group exists, because parent group ${parentGroupId} wasn't found.
        \n Group to check ID: ${groupToCheckId}`
      )
      return
    }
    return !!this.findGroup(parentGroup, groupToCheckId)
  }

  private findParentGroup (groupId: string): FilterGroup<T> | null {
    const item = { id: groupId, items: [] }

    const findParent = (group: FilterGroup<T>): FilterGroup<T> | null => {
      const itemIndex = group.items.findIndex(i => isSameItem(i, item))
      if (itemIndex !== -1) return group

      for (const groupItem of group.items) {
        if (isGroup(groupItem)) {
          const found = findParent(groupItem)
          if (found) return found
        }
      }

      return null
    }

    return findParent(this.rootGroup)
  }
}
