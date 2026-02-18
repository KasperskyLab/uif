import { isFilterConfig } from '@src/table/modules/Filters/helpers'

import { FiltersStateManager } from '../../modules/Filters/FiltersStateManager'
import { FilterConfig, FilterFromColumn, FilterGroup, FilterOperation, FilterType } from '../../modules/Filters/types'

describe('FiltersStateManager', () => {
  const mockFilter1: FilterConfig = {
    name: 'name',
    type: FilterType.Text,
    condition: FilterOperation.eq,
    value: 'test'
  }
  const mockFilter2: FilterConfig = {
    name: 'age',
    type: FilterType.Number,
    condition: FilterOperation.gt,
    value: 25
  }

  const mockPredicate = (row: Record<string, unknown>) => !!row
  const mockColumnFilter1: FilterFromColumn = {
    name: 'name',
    filterName: 'mock filter 1',
    predicate: mockPredicate
  }
  const mockColumnFilter2: FilterFromColumn = {
    name: 'name',
    filterName: 'mock filter 2',
    predicate: mockPredicate
  }

  describe('operations with filters', () => {
    describe('predefined and external filters', () => {
      it('should initialize with empty predefined filters', () => {
        const api = new FiltersStateManager()
        expect(api.getRootGroupFilters()).toEqual([])
      })

      it('should initialize with array of filters', () => {
        const api = new FiltersStateManager()
        api.initPredefinedFilters([mockFilter1, mockFilter2, mockColumnFilter1])
        expect(api.getRootGroupFilters()).toEqual([mockFilter1, mockFilter2, mockColumnFilter1])
      })

      it('should set external filters', () => {
        const api = new FiltersStateManager()
        const listener = jest.fn()
        api.subscribe(listener)
        
        api.setExternalFilters([mockFilter1, mockFilter2, mockColumnFilter1])
        
        expect(api.getRootGroupFilters()).toEqual([mockFilter1, mockFilter2, mockColumnFilter1])
        expect(listener).toHaveBeenCalledTimes(1)
      })

      it('should replace predefined filters by external filters', () => {
        const api = new FiltersStateManager()
        api.initPredefinedFilters([mockFilter1])
        const listener = jest.fn()
        api.subscribe(listener)
        
        api.setExternalFilters([mockFilter2, mockColumnFilter1])
        
        expect(api.getRootGroupFilters()).toEqual([mockFilter2, mockColumnFilter1])
        expect(listener).toHaveBeenCalledTimes(1)
      })
    })

    describe('addFilter', () => {
      it('should add sidebar-like filter to root group', () => {
        const api = new FiltersStateManager()
        const listener = jest.fn()
        api.subscribe(listener)
        
        api.addFilter(mockFilter1)
        
        expect(api.getRootGroupFilters()).toEqual([mockFilter1])
        expect(listener).toHaveBeenCalledTimes(1)
      })

      it('should add column-filter to root group', () => {
        const api = new FiltersStateManager()
        const listener = jest.fn()
        api.subscribe(listener)
        
        api.addFilter(mockColumnFilter1)
        
        expect(api.getRootGroupFilters()).toEqual([mockColumnFilter1])
        expect(listener).toHaveBeenCalledTimes(1)
      })

      it('should add filter to nested group', () => {
        const nestedGroup: FilterGroup = {
          id: 'nested',
          items: [],
          logicOperation: 'AND'
        }
        const api = new FiltersStateManager()
        api.initPredefinedFilters([nestedGroup])

        const listener = jest.fn()
        api.subscribe(listener)
  
        api.addFilter(mockFilter1, 'nested')
        
        expect(api.getRootGroupFilters()).toEqual([
          {
            id: 'nested',
            items: [mockFilter1],
            logicOperation: 'AND'
          }
        ])
        expect(listener).toHaveBeenCalledTimes(1)
      })
    })

    describe('removeFilter', () => {
      it('should remove existing sidebar-like filter', () => {
        const api = new FiltersStateManager()
        api.initPredefinedFilters([mockFilter1, mockFilter2])

        const listener = jest.fn()
        api.subscribe(listener)
        
        api.removeFilter(mockFilter1)
        
        expect(api.getRootGroupFilters()).toEqual([mockFilter2])
        expect(listener).toHaveBeenCalledTimes(1)
      })

      it('should remove existing column-like filter', () => {
        const api = new FiltersStateManager()
        api.initPredefinedFilters([mockColumnFilter1, mockColumnFilter2])

        const listener = jest.fn()
        api.subscribe(listener)
        
        api.removeFilter(mockColumnFilter1)
        
        expect(api.getRootGroupFilters()).toEqual([mockColumnFilter2])
        expect(listener).toHaveBeenCalledTimes(1)
      })

      it('should remove filter from nested group', () => {
        const nestedGroup: FilterGroup = {
          id: 'nested',
          items: [mockFilter1, mockFilter2],
          logicOperation: 'AND'
        }
        const api = new FiltersStateManager()
        api.initPredefinedFilters([nestedGroup])

        const listener = jest.fn()
        api.subscribe(listener)
  
        api.removeFilter(mockFilter1, 'nested')
        
        expect(api.getRootGroupFilters()).toEqual([
          {
            id: 'nested',
            items: [mockFilter2],
            logicOperation: 'AND'
          }
        ])
        expect(listener).toHaveBeenCalledTimes(1)
      })
    })

    describe('updateFilter', () => {
      it('should update filter value (only sidebar-like filters)', () => {
        const api = new FiltersStateManager()
        api.initPredefinedFilters([mockFilter1])

        const listener = jest.fn()
        api.subscribe(listener)
        
        api.updateFilter(mockFilter1, { value: 'updated' })
        
        expect(api.getRootGroupFilters()).toEqual([
          {
            ...mockFilter1,
            value: 'updated'
          }
        ])
        expect(listener).toHaveBeenCalledTimes(1)
      })

      it('should update filter in nested group', () => {
        const nestedGroup: FilterGroup = {
          id: 'nested',
          items: [mockFilter1],
          logicOperation: 'AND'
        }
        const api = new FiltersStateManager()
        api.initPredefinedFilters([nestedGroup])

        const listener = jest.fn()
        api.subscribe(listener)
  
        api.updateFilter(mockFilter1, { value: 'nested-updated' }, 'nested')
        
        expect(api.getRootGroupFilters()).toEqual([
          {
            id: 'nested',
            items: [
              {
                ...mockFilter1,
                value: 'nested-updated'
              }
            ],
            logicOperation: 'AND'
          }
        ])
      })
    })

    describe('resetFilters', () => {
      it('should reset all filters when no filter function is provided', () => {
        const api = new FiltersStateManager()
        api.initPredefinedFilters([mockFilter1, mockFilter2, mockColumnFilter1])

        const listener = jest.fn()
        api.subscribe(listener)
        
        api.resetFilters()
        
        expect(api.getRootGroupFilters()).toEqual([])
        expect(listener).toHaveBeenCalledTimes(1)
      })

      it('should reset filters with custom filter function', () => {
        const api = new FiltersStateManager()
        api.initPredefinedFilters([mockFilter1, mockFilter2, mockColumnFilter1])

        const listener = jest.fn()
        api.subscribe(listener)
        
        api.resetFilters('root', isFilterConfig)
        
        expect(api.getRootGroupFilters()).toEqual([mockFilter1, mockFilter2])
        expect(listener).toHaveBeenCalledTimes(1)
      })

      it('should reset filters in nested group with custom filter function', () => {
        const nestedGroup: FilterGroup = {
          id: 'nested',
          items: [mockFilter1, mockColumnFilter2],
          logicOperation: 'AND'
        }
        const api = new FiltersStateManager()
        api.initPredefinedFilters([mockColumnFilter1, nestedGroup])

        const listener = jest.fn()
        api.subscribe(listener)
        
        
        api.resetFilters('nested', isFilterConfig)
        
        expect(api.getRootGroupFilters()).toEqual([
          mockColumnFilter1,
          {
            id: 'nested',
            items: [mockFilter1],
            logicOperation: 'AND'
          }
        ])
        expect(listener).toHaveBeenCalledTimes(1)
      })

      it('should handle reset when group is not found', () => {
        const api = new FiltersStateManager()
        api.initPredefinedFilters([mockFilter1])

        const listener = jest.fn()
        api.subscribe(listener)
        
        api.resetFilters('nonExistentGroup', () => true)
        
        expect(api.getRootGroupFilters()).toEqual([mockFilter1])
        expect(listener).not.toHaveBeenCalled()
      })
    })
  })

  describe('operations with groups', () => {  
    describe('createGroup', () => {
      it('should create group in root', () => {
        const api = new FiltersStateManager()
        api.initPredefinedFilters([mockFilter1, mockColumnFilter1])

        const listener = jest.fn()
        api.subscribe(listener)
        
        const newGroup: FilterGroup = {
          id: 'newGroup',
          logicOperation: 'OR',
          items: [mockColumnFilter2, mockFilter2]
        }
        api.createGroup(newGroup)
  
        expect(api.getRootGroupFilters()).toEqual([
          mockFilter1,
          mockColumnFilter1,
          newGroup
        ])
        expect(listener).toHaveBeenCalledTimes(1)
      })

      it('should create group in nested level', () => {
        const nestedGroup: FilterGroup = {
          id: 'nested',
          items: [mockFilter1, mockFilter2],
          logicOperation: 'AND'
        }
        const api = new FiltersStateManager()
        api.initPredefinedFilters([nestedGroup])

        const listener = jest.fn()
        api.subscribe(listener)
        
        const newGroup: FilterGroup = {
          id: 'newGroup',
          logicOperation: 'OR',
          items: [mockColumnFilter2, mockFilter2]
        }
        api.createGroup(newGroup, 'nested')
  
        expect(api.getRootGroupFilters()).toEqual([
          {
            ...nestedGroup,
            items: [
              ...nestedGroup.items,
              newGroup
            ],
            logicOperation: 'AND'
          }
        ])
        expect(listener).toHaveBeenCalledTimes(1)
      })
    })

    describe('ungroupGroup', () => {
      it('should ungroup and preserve nested items in root', () => {
        const groupToUngroup: FilterGroup = {
          id: 'groupToUngroup',
          items: [mockFilter1, mockFilter2],
          logicOperation: 'AND'
        }
        const api = new FiltersStateManager()
        api.initPredefinedFilters([mockColumnFilter1, groupToUngroup, mockColumnFilter2])

        const listener = jest.fn()
        api.subscribe(listener)

        api.ungroupGroup('groupToUngroup')

        expect(api.getRootGroupFilters()).toEqual([mockColumnFilter1, mockFilter1, mockFilter2, mockColumnFilter2])
        expect(listener).toHaveBeenCalledTimes(1)
      })

      it('should ungroup in nested group', () => {
        const groupToUngroup: FilterGroup = {
          id: 'nestedTarget',
          items: [mockFilter1, mockFilter2],
          logicOperation: 'AND'
        }
        const parentGroup: FilterGroup = {
          id: 'parent',
          items: [groupToUngroup, mockColumnFilter1],
          logicOperation: 'OR'
        }
        const api = new FiltersStateManager()
        api.initPredefinedFilters([parentGroup])

        const listener = jest.fn()
        api.subscribe(listener)

        api.ungroupGroup('nestedTarget')

        expect(api.getRootGroupFilters()).toEqual([
          {
            id: 'parent',
            items: [mockFilter1, mockFilter2, mockColumnFilter1],
            logicOperation: 'OR'
          }
        ])
        expect(listener).toHaveBeenCalledTimes(1)
      })
    })
  })
})
