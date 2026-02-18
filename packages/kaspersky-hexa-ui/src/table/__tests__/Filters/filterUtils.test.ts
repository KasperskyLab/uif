import { mergeFilterStructures } from '../../modules/Filters/filterUtils'
import { FilterConfig, FilterGroup, FilterOperation, FilterType } from '../../modules/Filters/types'

const createFilter = ({
  name,
  value,
  condition = FilterOperation.eq,
  type = FilterType.Number,
  attribute
}: Partial<FilterConfig>): FilterConfig => ({ name, value, condition, type, attribute }) as FilterConfig

describe('mergeFilterStructures', () => {
  const filterA = createFilter({ name: 'A', value: 1 })
  const filterB = createFilter({ name: 'B', value: 2 })
  const filterC = createFilter({ name: 'C', value: 3 })
  const filterD = createFilter({ name: 'D', value: 4 })
  const filterE = createFilter({ name: 'E', value: 5 })
  const filterF = createFilter({ name: 'F', value: 6 })

  const group1: FilterGroup = { id: 'g1', items: [filterD] }
  const group2: FilterGroup = { id: 'g2', items: [filterE, filterF] }
  const group3: FilterGroup = { id: 'g3', items: [] }
  const group4: FilterGroup = { id: 'g4', items: [] }

  describe('Complex scenario with nested groups and duplicates', () => {
    it('should correctly merge structures with nested groups and filter duplicates', () => {
      const filterWithUserDefined = { ...filterB, isUserDefined: true }
      const base: FilterGroup['items'] = [filterA, filterWithUserDefined, group1, group2]
      const toMerge: FilterGroup['items'] = [
        filterB,
        filterC,
        { ...group2, items: [filterF, group3] },
        group4
      ]

      expect(mergeFilterStructures(base, toMerge)).toEqual([
        filterA,
        filterWithUserDefined,
        group1,
        { ...group2, items: [...group2.items, group3] },
        filterC,
        group4
      ])
    })
  })

  describe('Basic merge operations', () => {
    it('should merge unique filters', () => {
      const result = mergeFilterStructures([filterA], [filterB])
      expect(result).toEqual([filterA, filterB])
    })

    it('should skip duplicate filters', () => {
      const result = mergeFilterStructures([filterA], [filterA])
      expect(result).toEqual([filterA])
    })

    it('should handle filters with different attributes as unique', () => {
      const filterWithAttr = createFilter({
        name: 'A',
        value: 1,
        attribute: { name: 'test' }
      })
      const result = mergeFilterStructures([filterA], [filterWithAttr])
      expect(result).toEqual([filterA, filterWithAttr])
    })

    it('should merge groups with same ID and same filters', () => {
      const result = mergeFilterStructures(group1, group1)
      expect(result).toEqual({ ...group1, items: [...group1.items] })
    })

    it('should merge groups with same ID and different filters', () => {
      const result = mergeFilterStructures(group1, {
        ...group1,
        items: [filterE]
      })
      expect(result).toEqual({ ...group1, items: [filterD, filterE] })
    })

    it('should preserve groups with different IDs', () => {
      const result = mergeFilterStructures([group1], [group2])
      expect(result).toEqual([group1, group2])
    })

    it('should merge nested groups recursively', () => {
      const nestedGroup1: FilterGroup = {
        id: 'nested1',
        items: [filterA, { id: 'nested2', items: [filterB, filterC] }]
      }
      const nestedGroup2: FilterGroup = {
        id: 'nested1',
        items: [filterD, { id: 'nested2', items: [filterB, filterE] }]
      }
      const result = mergeFilterStructures(nestedGroup1, nestedGroup2)
      expect(result).toEqual({
        id: 'nested1',
        items: [
          filterA,
          {
            id: 'nested2',
            items: [filterB, filterC, filterE]
          },
          filterD
        ]
      })
    })

    it('should correctly merge group properties and items', () => {
      const result = mergeFilterStructures(
        { ...group1, label: 'Old', logicOperation: 'AND' },
        { ...group1, label: 'New', logicOperation: 'OR', items: [filterE] }
      )
      expect(result).toEqual({
        ...group1,
        label: 'New',
        logicOperation: 'OR',
        items: [filterD, filterE]
      })
    })
  })

  describe('Edge cases', () => {
    it('should handle empty arrays', () => {
      const result = mergeFilterStructures([], [])
      expect(result).toEqual([])
    })

    it('should not overwrite group items with empty array', () => {
      const result = mergeFilterStructures(group1, { ...group1, items: [] })
      expect(result).toEqual({ ...group1, items: [filterD] })
    })

    it('should throw when merging array with group', () => {
      // @ts-ignore test should throw error, so types is incorrect
      expect(() => mergeFilterStructures([filterA], group1)).toThrow('Cannot merge array with group directly')
    })
  })
})
