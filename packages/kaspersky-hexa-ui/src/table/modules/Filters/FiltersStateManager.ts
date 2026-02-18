import { MakePartial } from '@helpers/typesHelpers'
import cloneDeep from 'lodash/cloneDeep'

import { mergeFilterStructures } from './filterUtils'
import {
  assertCorrectFilters,
  isFilter,
  isFilterConfig,
  isGroup,
  isSameItem,
  prefix
} from './helpers'
import { FilterConfig, FilterFromColumn, FilterGroup, UnitedFilter } from './types'

export type FiltersStateManagerConstructor = {
  logicOperation?: 'AND' | 'OR'
}

type ResetFilterFunction = (filterItem: UnitedFilter) => boolean 

export class FiltersStateManager {
  private listeners: Array<() => void> = []
  protected rootGroup: FilterGroup

  constructor (props: FiltersStateManagerConstructor = {}) {
    const rootGroup: FilterGroup = {
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

  public initPredefinedFilters (predefinedFilters: UnitedFilter[]) {
    assertCorrectFilters({
      filters: predefinedFilters,
      message: 'Failed to initialize predefined filters. Format is not correct',
      shouldThrowError: true,
      withPredicate: false
    })

    const newRootGroup = Array.isArray(predefinedFilters)
      ? {
          id: 'root',
          logicOperation: this.rootGroup.logicOperation,
          items: cloneDeep(predefinedFilters)
        }
      : cloneDeep(this.rootGroup)

    this.rootGroup = mergeFilterStructures(this.rootGroup, newRootGroup)
  } 

  public setExternalFilters (externalFilters: UnitedFilter[], groupId: string = 'root') {
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

  public setExternalSidebarFilters (externalFilters: FilterConfig[]) {
    const nonSidebarFilters = this.rootGroup.items.filter(filter => !isFilterConfig(filter))
    this.rootGroup.items = [...nonSidebarFilters, ...cloneDeep(externalFilters)]
    this.notifyListeners()
  }

  public addFilter (filter: FilterConfig | FilterFromColumn, groupId: string = 'root'): void {
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

  public removeFilter (filter: FilterConfig | FilterFromColumn, groupId: string = 'root'): void {
    const targetGroup = this.findGroup(this.rootGroup, groupId)
    if (!targetGroup) {
      console.warn(`${prefix} Filter wasn't removed, because group ${groupId} wasn't found. \n Filter: ${filter}`)
      return
    }

    targetGroup.items = targetGroup.items.filter((item) => !(isFilter(item) && isSameItem(item, filter)))
    this.notifyListeners()
  }

  // TODO: добавить как аргумент itemsToGroup, и если они есть, то удалять их из своих групп и добавлять в новую
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

  resetFilters (groupId: string = 'root', filterFunction: ResetFilterFunction = () => false) {
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
    
    const parentGroup = this.findParentGroup(this.rootGroup, {
      id: groupId,
      items: []
    })
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

  public getGroupItems (groupId: string): UnitedFilter[] {
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

  private findGroup (group: FilterGroup, groupId: string): FilterGroup | null {
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

  private findParentGroup (group: FilterGroup, item: UnitedFilter): FilterGroup | null {
    const itemIndex = group.items.findIndex(i => isSameItem(i, item))
    if (itemIndex !== -1) return group

    for (const groupItem of group.items) {
      if (isGroup(groupItem)) {
        const found = this.findParentGroup(groupItem, item)
        if (found) return found
      }
    }

    return null
  }
}
