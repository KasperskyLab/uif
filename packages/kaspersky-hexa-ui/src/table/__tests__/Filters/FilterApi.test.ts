import { createElement } from 'react'

import { generatedData, mockCustomFilterFunction, tableColumns } from '../../__mocks__/filtersMockData'
import { 
  BooleanFilter, 
  BooleanOperations, 
  DateRangeFilter, 
  DateTimeFilter,
  DateTimeFilterValue,
  DateTimeOperations,
  EnumFilter, 
  EnumOperations, 
  FilterApi, 
  FilterFromColumn, 
  FilterGroup, 
  FilterOperation, 
  FilterType, 
  NumberFilter,
  NumberOperations,
  TextFilter,
  TextOperations
} from '../../modules/Filters'
import { isGroup, parseDate } from '../../modules/Filters/helpers'

type DescribeData<Operations, ValueToFilter> = [
  string, // test name
  Operations,
  [
    any, // value in the row
    ValueToFilter,
    boolean // expected result
  ][]
]

describe('FilterApi Integration Tests', () => {
  const testData = generatedData

  const textFilter: TextFilter = {
    name: 'fullname',
    type: FilterType.Text,
    condition: FilterOperation.eq,
    value: 'Evgenija Shevchenko'
  }
  const textFilterCont: TextFilter = {
    ...textFilter,
    value: 'Shevchenko',
    condition: FilterOperation.cont
  }
  const enumFilter: EnumFilter = {
    name: 'group',
    type: FilterType.Enum,
    condition: FilterOperation.eq,
    value: 'Developers'
  }
  const booleanFilter: BooleanFilter = {
    name: 'isTrainee',
    type: FilterType.Boolean,
    condition: FilterOperation.eq,
    value: true
  }

  const fullnameColumnFilter: FilterFromColumn = {
    name: 'fullname',
    filterName: 'fullnameFilter',
    predicate: record => record.fullname.includes('Evgenija')
  }
  const groupColumnFilter: FilterFromColumn = {
    name: 'details.email',
    filterName: 'emailDomainFilter',
    predicate: row => row.group === 'Developers'
  }
  const isTraineeColumnFilter: FilterFromColumn = {
    name: 'isTrainee',
    filterName: 'isTraineeFilter',
    predicate: row => row.isTrainee === true
  }

  describe('Text filters', () => {
    describe.each<DescribeData<TextOperations, any>>([
      [
        'should filter by text with "="',
        FilterOperation.eq,
        // TODO: утвердить поведение фильтров с nullish значениями. Пока зафиксирован текущий контракт
        [
          [undefined, undefined, true],
          [null, undefined, false],
          ['', undefined, true],
          ['test', '', false],
          ['test', 'tes', false],
          ['test', 'test', true]
        ]
      ],
      [
        'should filter by text with "≠"',
        FilterOperation.neq,
        [
          [undefined, undefined, false],
          [null, undefined, true],
          ['', undefined, false],
          ['test', '', true],
          ['test', 'tes', true],
          ['test', 'test', false]
        ]
      ],
      [
        'should filter by text with "Contain"',
        FilterOperation.cont,
        [
          [undefined, undefined, false],
          [null, undefined, false],
          ['', undefined, false],
          ['test', '', true],
          ['test', 'tes', true],
          ['test', 'tet', false],
          ['test', 'test', true]
        ]
      ],
      [
        'should filter by text with "Doesn\'t contain"',
        FilterOperation.ncont,
        [
          [undefined, undefined, true],
          [null, undefined, true],
          ['', undefined, true],
          ['test', '', false],
          ['test', 'tes', false],
          ['test', 'tet', true],
          ['test', 'test', false]
        ]
      ],
      [
        'should filter by text with "Regexp"',
        FilterOperation.regexp,
        [
          ['teeest', 'e{4}', false],
          ['teeest', 'e{3}', true]
        ]
      ],
      [
        'should filter by text with "Empty"',
        FilterOperation.empty,
        ([
          [undefined, true],
          [null, true],
          ['', true],
          ['test', false],
          ['0', false]
        ] as const).map(([fullname, expected]) => [fullname, undefined, expected])
      ],
      [
        'should filter by text with "Not empty"',
        FilterOperation.nempty,
        ([
          [undefined, false],
          [null, false],
          ['', false],
          ['test', true],
          ['0', true]
        ] as const).map(([fullname, expected]) => [fullname, undefined, expected])
      ]
    ])('%s', (_, condition, data) => {
      it.each(data)('%#', async (fullname, value, expected) => {
        const api = new FilterApi({ 
          predefinedFilters: [{ ...textFilter, condition, value }],
          columns: tableColumns 
        })

        expect(api.filterRows([{ fullname }]).length === 1).toBe(expected)
      })
    })
  })

  describe('Number filters', () => {
    const numberFilter: NumberFilter = {
      name: 'salary',
      type: FilterType.Number,
      condition: FilterOperation.lt,
      value: 138900
    }

    describe.each<DescribeData<NumberOperations, number | null>>([
      [
        'should filter by number filter with "="',
        FilterOperation.eq,
        [
          [undefined, 100, false],
          [null, 100, false],
          ['', 100, false],
          [100, 99, false],
          [100, 100, true],
          [100, 101, false]
        ]
      ],
      [
        'should filter by number filter with "≠"',
        FilterOperation.neq,
        [
          [undefined, 100, false],
          [null, 100, false],
          ['', 100, false],
          [100, 99, true],
          [100, 100, false],
          [100, 101, true]
        ]
      ],
      [
        'should filter by number filter with "<"',
        FilterOperation.lt,
        [
          [undefined, 100, false],
          [null, 100, false],
          ['', 100, false],
          [100, 99, false],
          [100, 100, false],
          [100, 101, true]
        ]
      ],
      [
        'should filter by number with "≤"',
        FilterOperation.le,
        [
          [undefined, 100, false],
          [null, 100, false],
          ['', 100, false],
          [100, 99, false],
          [100, 100, true],
          [100, 101, true]
        ]
      ],
      [
        'should filter by number with ">"',
        FilterOperation.gt,
        [
          [undefined, 100, false],
          [null, 100, false],
          ['', 100, false],
          [100, 99, true],
          [100, 100, false],
          [100, 101, false]
        ]
      ],
      [
        'should filter by number with "≥"',
        FilterOperation.ge,
        [
          [undefined, 100, false],
          [null, 100, false],
          ['', 100, false],
          [100, 99, true],
          [100, 100, true],
          [100, 101, false]
        ]
      ],
      [
        'should filter by number with "Empty"',
        FilterOperation.empty,
        ([
          [undefined, true],
          [null, true],
          ['', true],
          ['100', false],
          [0, false],
          [1, false],
          [-1, false]
        ] as const).map(([salary, expected]) => [salary, null, expected])
      ],
      [
        'should filter by number with "Not empty"',
        FilterOperation.nempty,
        ([
          [undefined, false],
          [null, false],
          ['', false],
          ['100', true],
          [0, true],
          [1, true],
          [-1, true]
        ] as const).map(([salary, expected]) => [salary, null, expected])
      ]
    ])('%s', (_, condition, data) => {
      it.each(data)('%#', async (salary, value, expected) => {
        const api = new FilterApi({
          predefinedFilters: [{ ...numberFilter, condition, value }],
          columns: tableColumns 
        })

        expect(api.filterRows([{ salary }]).length === 1).toBe(expected)
      })
    })
  })

  describe('Boolean filters', () => {
    describe.each<DescribeData<BooleanOperations, boolean>>([
      [
        'should filter with "="',
        FilterOperation.eq,
        [
          [false, false, true],
          [true, false, false],
          [false, true, false],
          [true, true, true]
        ]
      ],
      [
        'should filter with "≠"',
        FilterOperation.neq,
        [
          [false, false, false],
          [true, false, true],
          [false, true, true],
          [true, true, false]
        ]
      ]
    ])('%s', (_, condition, data) => {
      it.each(data)('%#', async (isTrainee, value, expected) => {
        const api = new FilterApi({
          predefinedFilters: [{ ...booleanFilter, condition, value }],
          columns: tableColumns 
        })

        expect(api.filterRows([{ isTrainee }]).length === 1).toBe(expected)
      })
    })
  })

  describe('Enum filters', () => {
    describe.each<DescribeData<EnumOperations, any>>([
      [
        'should filter with "="',
        FilterOperation.eq,
        [
          [undefined, 'Sales', false],
          [null, 'Sales', false],
          ['', 'Sales', false],
          ['HR', 'Sales', false],
          ['Sales', 'Sales', true]
        ]
      ],
      [
        'should filter with "≠"',
        FilterOperation.neq,
        [
          [undefined, 'Sales', true],
          [null, 'Sales', true],
          ['', 'Sales', true],
          ['HR', 'Sales', true],
          ['Sales', 'Sales', false]
        ]
      ],
      [
        'should filter with "Contains (OR)"',
        FilterOperation.cont_or,
        [
          [undefined, ['HR', 'Sales'], false],
          [null, ['HR', 'Sales'], false],
          ['', ['HR', 'Sales'], false],
          ['CEO', ['HR', 'Sales'], false],
          ['HR', ['HR', 'Sales'], true],
          ['Sales', ['HR', 'Sales'], true]
        ]
      ],
      [
        'should filter with "Doesn\'t contain"',
        FilterOperation.ncont_or,
        [
          [undefined, ['HR', 'Sales'], true],
          [null, ['HR', 'Sales'], true],
          ['', ['HR', 'Sales'], true],
          ['CEO', ['HR', 'Sales'], true],
          ['HR', ['HR', 'Sales'], false],
          ['Sales', ['HR', 'Sales'], false]
        ]
      ],
      [
        'should filter by text with "Regexp"',
        FilterOperation.regexp,
        [
          ['teeest', 'e{4}', false],
          ['teeest', 'e{3}', true],
          ['itemHasStringLabel', 'e{3}', true],
          ['itemHasReactNodeLabel', 'e{3}', false]
        ]
      ]
    ])('%s', (_, condition, data) => {
      it.each(data)('%#', async (group, value, expected) => {
        const api = new FilterApi({
          predefinedFilters: [{ ...enumFilter, condition, value }],
          columns: tableColumns 
        })
        api.setEnumOptionsMap({
          group: [
            { value: 'teeest' },
            { value: 'itemHasStringLabel', label: 'teeest' },
            { value: 'itemHasReactNodeLabel', label: createElement('span', {}, 'teeest') }
          ]
        })

        expect(api.filterRows([{ group }]).length === 1).toBe(expected)
      })
    })
  })

  describe('DateRange filters', () => {
    const dateRangeFilter: DateRangeFilter = {
      name: 'dateHired',
      type: FilterType.DateRange,
      condition: FilterOperation.eq,
      value: {
        from: new Date('01/01/2025'),
        to: new Date()
      }
    }

    it('should filter by date filter with "="', () => {
      const api = new FilterApi({ predefinedFilters: [dateRangeFilter], columns: tableColumns })
      const filteredRows = api.filterRows(testData)
      expect(filteredRows.length).toBe(12)
    })

    it('should filter by date filter with "≠"', () => {
      const api = new FilterApi({ 
        predefinedFilters: [{ ...dateRangeFilter, condition: FilterOperation.neq }],
        columns: tableColumns
      })
      const filteredRows = api.filterRows(testData)
      expect(filteredRows.length).toBe(88)
    })
  })

  describe('DateTime filters', () => {
    const datetimeFilter: DateTimeFilter = {
      name: 'datetime',
      type: FilterType.DateTime,
      condition: FilterOperation.eq,
      value: null
    }

    const rangeData: [any, any, boolean][] = [
      ['2025-10-18', { from: parseDate('2025-10-19'), to: parseDate('2025-10-21') }, false],
      ['2025-10-22', { from: parseDate('2025-10-19'), to: parseDate('2025-10-21') }, false],
      ['2025-10-20', { from: parseDate('2025-10-19'), to: parseDate('2025-10-21') }, true],
      ['2025-10-19', { from: parseDate('2025-10-19'), to: parseDate('2025-10-21') }, true],
      ['2025-10-21', { from: parseDate('2025-10-19'), to: parseDate('2025-10-21') }, true]
    ]

    describe.each<DescribeData<DateTimeOperations, DateTimeFilterValue>>([
      [
        'should filter with "="',
        FilterOperation.eq,
        [
          [undefined, parseDate('2025-10-20 12:00:00'), false],
          [null, parseDate('2025-10-20 12:00:00'), false],
          ['', parseDate('2025-10-20 12:00:00'), false],
          ['2025-10-19 23:59:59', parseDate('2025-10-20 12:00:00'), false],
          ['2025-10-21 00:00:00', parseDate('2025-10-20 12:00:00'), false],
          ['2025-10-20 00:00:00', parseDate('2025-10-20 12:00:00'), true],
          ['2025-10-20 12:00:00', parseDate('2025-10-20 12:00:00'), true],
          ['2025-10-20 23:59:59', parseDate('2025-10-20 12:00:00'), true]
        ]
      ],
      [
        'should filter with "≠"',
        FilterOperation.neq,
        [
          [undefined, parseDate('2025-10-20 12:00:00'), true],
          [null, parseDate('2025-10-20 12:00:00'), true],
          ['', parseDate('2025-10-20 12:00:00'), true],
          ['2025-10-19 23:59:59', parseDate('2025-10-20 12:00:00'), true],
          ['2025-10-21 00:00:00', parseDate('2025-10-20 12:00:00'), true],
          ['2025-10-20 00:00:00', parseDate('2025-10-20 12:00:00'), false],
          ['2025-10-20 12:00:00', parseDate('2025-10-20 12:00:00'), false],
          ['2025-10-20 23:59:59', parseDate('2025-10-20 12:00:00'), false]
        ]
      ],
      [
        'should filter with "<"',
        FilterOperation.lt,
        [
          [undefined, parseDate('2025-10-21'), false],
          [null, parseDate('2025-10-21'), false],
          ['', parseDate('2025-10-21'), false],
          ['2025-10-20', parseDate('2025-10-19'), false],
          ['2025-10-20', parseDate('2025-10-20'), false],
          ['2025-10-20', parseDate('2025-10-21'), true]
        ]
      ],
      [
        'should filter with "≤"',
        FilterOperation.le,
        [
          [undefined, parseDate('2025-10-21'), false],
          [null, parseDate('2025-10-21'), false],
          ['', parseDate('2025-10-21'), false],
          ['2025-10-20', parseDate('2025-10-19'), false],
          ['2025-10-20', parseDate('2025-10-20'), true],
          ['2025-10-20', parseDate('2025-10-21'), true]
        ]
      ],
      [
        'should filter with ">"',
        FilterOperation.gt,
        [
          [undefined, parseDate('2025-10-21'), false],
          [null, parseDate('2025-10-21'), false],
          ['', parseDate('2025-10-21'), false],
          ['2025-10-20', parseDate('2025-10-19'), true],
          ['2025-10-20', parseDate('2025-10-20'), false],
          ['2025-10-20', parseDate('2025-10-21'), false]
        ]
      ],
      [
        'should filter with "≥"',
        FilterOperation.ge,
        [
          [undefined, parseDate('2025-10-21'), false],
          [null, parseDate('2025-10-21'), false],
          ['', parseDate('2025-10-21'), false],
          ['2025-10-20', parseDate('2025-10-19'), true],
          ['2025-10-20', parseDate('2025-10-20'), true],
          ['2025-10-20', parseDate('2025-10-21'), false]
        ]
      ],
      [
        'should filter with "Empty"',
        FilterOperation.empty,
        ([
          [undefined, true],
          [null, true],
          ['', true],
          ['2025-10-20', false]
        ] as const).map(([fieldValue, expected]) => [fieldValue, null, expected])
      ],
      [
        'should filter with "Not empty"',
        FilterOperation.nempty,
        ([
          [undefined, false],
          [null, false],
          ['', false],
          ['2025-10-20', true]
        ] as const).map(([fieldValue, expected]) => [fieldValue, null, expected])
      ],
      [
        'should filter with "Between"',
        FilterOperation.range,
        rangeData
      ],
      [
        'should filter with "Not between"',
        FilterOperation.nrange,
        rangeData.map(([fieldValue, value, expected]) => [fieldValue, value, !expected])
      ]
    ])('%s', (_, condition, data) => {
      it.each(data)('%#', async (datetime, value, expected) => {
        const api = new FilterApi({
          predefinedFilters: [{ ...datetimeFilter, condition, value }],
          columns: tableColumns 
        })

        expect(api.filterRows([{ datetime }]).length === 1).toBe(expected)
      })
    })
  })

  describe('Attribute filters', () => {
    it('should filter by filter with "="', () => {
      const api = new FilterApi({
        predefinedFilters: [{
          name: 'details',
          attribute: { name: 'city' },
          type: FilterType.Text,
          condition: FilterOperation.eq,
          value: 'Ekaterinburg'
        }],
        columns: tableColumns
      })
      const filteredRows = api.filterRows(testData)
      expect(filteredRows.length).toBe(4)
    })
  })

  describe('FilterFromColumn filters', () => {
    it('should filter by column-like filter', () => {
      const api = new FilterApi({ predefinedFilters: [groupColumnFilter], columns: tableColumns })
      const filteredRows = api.filterRows(testData)
      expect(filteredRows.length).toBe(13)
    })
  })

  describe('Complex conditions', () => {
    it('should filter with multiple sidebar-like filters', () => {
      const api = new FilterApi({ 
        predefinedFilters: [textFilterCont, enumFilter, booleanFilter],
        columns: tableColumns
      })
      const filteredRows = api.filterRows(testData)
      expect(filteredRows.length).toBe(1)
    })

    it('should filter with multiple column-like filters', () => {
      const api = new FilterApi({
        predefinedFilters: [fullnameColumnFilter, groupColumnFilter, isTraineeColumnFilter],
        columns: tableColumns
      })
      const filteredRows = api.filterRows(testData)
      expect(filteredRows.length).toBe(1)
    })

    it('should combine sidebar-like and column-like filters', () => {
      const api = new FilterApi({ 
        predefinedFilters: [textFilterCont, groupColumnFilter, isTraineeColumnFilter],
        columns: tableColumns
      })
      const filteredRows = api.filterRows(testData)
      expect(filteredRows.length).toBe(1)
    })
  })

  describe('Custom filter function', () => {
    it('should use custom filter function when provided', () => {
      const mockCustomFilter = jest.fn<any, any>(mockCustomFilterFunction)
      const api = new FilterApi({ 
        customFilterFunction: mockCustomFilter,
        predefinedFilters: [textFilter],
        columns: tableColumns 
      })

      const rows1 = [{ fullname: 'Evgenija Shevchenko' }]
      const result1 = api.filterRows(rows1)
      expect(result1).toEqual(rows1)

      const rows2 = [{ fullname: 'Evgenija 123' }]
      const result2 = api.filterRows(rows2)
      expect(result2).toEqual([])

      expect(mockCustomFilter).toHaveBeenCalledTimes(2)
    })
  })

  describe('Edge cases', () => {
    it('should return all rows when no filters applied', () => {
      const api = new FilterApi({ columns: tableColumns })
      const filteredRows = api.filterRows(testData)
      expect(filteredRows.length).toBe(100)
    })

    it('should handle empty FilterFromColumn predicate', () => {
      const trueFilter: FilterFromColumn = {
        name: 'fullname',
        filterName: 'trueFilter',
        predicate: () => true
      }
      const api = new FilterApi({ predefinedFilters: [trueFilter], columns: tableColumns })
      const filteredRows = api.filterRows(testData)
      expect(filteredRows.length).toBe(100)
    })

    it('should handle restrictive FilterFromColumn predicate', () => {
      const falseFilter: FilterFromColumn = {
        name: 'fullname',
        filterName: 'falseFilter',
        predicate: () => false
      }
      const api = new FilterApi({ predefinedFilters: [falseFilter], columns: tableColumns })
      const filteredRows = api.filterRows(testData)
      expect(filteredRows.length).toBe(0)
    })

    it('should not set filter as default if there is no such column', () => {
      const wrongColumnFilter: FilterGroup = {
        id: 'column.wrongColumn',
        items: [{
          name: 'wrongColumn',
          filterName: 'filterWrongColumn',
          predicate: () => false
        }]
      }
      const api = new FilterApi({ predefinedFilters: [wrongColumnFilter], columns: tableColumns })

      expect(api.getRootGroupFilters().find(el => isGroup(el) && el.id === 'column.wrongColumn')).toBeFalsy()

      const filteredRows = api.filterRows(testData)
      expect(filteredRows.length).toBe(100)
    })
  })
})
