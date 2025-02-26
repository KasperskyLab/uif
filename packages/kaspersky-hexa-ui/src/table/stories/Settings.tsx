import { Text } from '@src/typography'
import React from 'react'

import mockData from '../__mocks__/table-mock-data.json'
import { FilterOperation, FilterType } from '../modules/Filters/types'
import { TableColumn } from '../types'

import { BasicTableStory, Story } from './_commonConstants'

const createColumn = (name: string, width?: number, show = true) => ({
  key: name,
  title: name,
  dataIndex: name,
  width: `${width}%`,
  show,
  hideColumnAvailable: true,
  groupingAvailable: true
})

const countries = [
  'Ireland',
  'Sweden',
  'Italy',
  'Pakistan',
  'Brazil',
  'Russian Federation',
  'Australia',
  'Netherlands',
  'Singapore',
  'Poland',
  'Germany',
  'Austria',
  'Colombia',
  'India',
  'Vietnam',
  'Spain',
  'South Africa',
  'United States',
  'France',
  'Costa Rica',
  'South Korea',
  'New Zealand',
  'Philippines',
  'Mexico',
  'United Kingdom',
  'Ukraine',
  'Norway',
  'China',
  'Indonesia',
  'Nigeria',
  'Belgium',
  'Turkey',
  'Peru',
  'Chile'
]

const columns = [
  createColumn('name', 19),
  {
    ...createColumn('country', 13),
    filterType: {
      type: FilterType.Enum,
      getAvailableValues: () => {
        return new Promise(resolve => {
          resolve(countries)
        })
      }
    },
    filters: [
      {
        name: 'Longer then 5',
        filter: (element: any): boolean => {
          const text = element.country
          if (text) return text.length > 5
          return false
        }
      },
      {
        name: 'Shorter than 5',
        filter: (element: any): boolean => {
          const text = element.country
          if (text) return text.length < 5
          return false
        }
      }
    ]
  },
  {
    ...createColumn('numberrange', 10),
    filterType: {
      type: FilterType.Number
    },
    isSortable: true,
    allowMultipleFilters: true,
    filters: [
      {
        name: 'Even',
        filter: (element: any): boolean => {
          const numbers = Number(element.numberrange)
          if (numbers) return numbers % 2 === 0
          return false
        }
      },
      {
        name: 'Greater than 5',
        filter: (element: any): boolean => {
          const numbers = Number(element.numberrange)
          if (numbers) return numbers > 5
          return false
        }
      }
    ]
  },
  {
    ...createColumn('city', 17),
    isSortable: true
  },
  {
    ...createColumn('date', 18),
    isSortable: true,
    sorter: function (a: any, b:any, isAsc: boolean) {
      const aDate = new Date(a.date).getTime()
      const bDate = new Date(b.date).getTime()
      if (isAsc) {
        return aDate > bDate
      }
      return aDate < bDate
    },
    filterType: {
      type: FilterType.DateRange
    }
  },
  {
    ...createColumn('isSortable', 10),
    isSortable: true
  },
  {
    ...createColumn('sorter', 10),
    sorter: function (a: any, b:any, isAsc: boolean) {
      if (isAsc) {
        return a.sorter.length > b.sorter.length ? -1 : 1
      }
      return a.sorter.length < b.sorter.length ? -1 : 1
    }
  },
  {
    ...createColumn('sorterIsSortable', 10),
    isSortable: true,
    sorter: function (a: any, b:any, isAsc: boolean) {
      if (isAsc) {
        return a.sorterIsSortable.length < b.sorterIsSortable.length ? -1 : 1
      }
      return a.sorterIsSortable.length > b.sorterIsSortable.length ? -1 : 1
    }
  }
]

const dataSource = mockData.map((el, i) => {
  return {
    ...el,
    date: i === 2 ? new Date().toDateString() : new Date(Number(i.toString() + '0000000000')).toDateString(),
    isSortable: i === 3 ? 'aaaaaaaaaaa' : new Array(i).fill('a').join(''),
    sorter: i === 4 ? 'aaaaaaaaaaaa' : new Array(i).fill('a').join(''),
    sorterIsSortable: i === 5 ? 'aaaaaaaaaaaaa' : new Array(i).fill('a').join('')
  }
})

export const Settings: Story = {
  render: BasicTableStory.bind({}),
  args: {
    columns: columns as TableColumn[],
    dataSource,
    useFiltersSidebar: true,
    toolbar: {
      showColumns: true,
      showGrouping: true,
      showFilterSidebar: true,
      left: [
        {
          type: 'children',
          key: 'toolbar',
          children: <Text type="BTM2">Toolbar</Text>
        }
      ]
    },
    defaultFiltersConfig: [
      {
        name: 'name',
        condition: FilterOperation.ncont,
        type: FilterType.Text,
        value: 'a'
      },
      {
        name: 'country',
        condition: FilterOperation.cont,
        type: FilterType.Text,
        value: 'a'
      },
      {
        name: 'numberrange',
        condition: FilterOperation.neq,
        type: FilterType.Number,
        value: 7
      }
    ],
    onFiltersChange: (val) => console.log(val, 'onFiltersChange')
  }
}
