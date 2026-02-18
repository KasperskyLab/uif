import { Text } from '@src/typography'
import React from 'react'

import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

import { FilterType, TableColumn } from '..'
import { FilterApi, TableCustomFilterFunction } from '../modules/Filters'
import { TableDataSourceFunction } from '../types'

export const groups = [
  'CEO',
  'Managers',
  'HR',
  'Teamleads',
  'Developers',
  'Financials',
  'Sales',
  'Unmanaged'
] as const

export const cities = [
  'Moscow',
  'Saint-Petersburg',
  'Novosibirsk',
  'Ekaterinburg',
  'Kazan',
  'Nizhniy Novgorod',
  'Krasnoyarsk',
  'Chelyabinsk',
  'Samara',
  'Ufa',
  'Rostov',
  'Omsk',
  'Krasnodar',
  'Voronezh',
  'Perm',
  'Volgograd'
] as const

const createColumn = (dataIndex: string): TableColumn => ({
  title: `table.columns.${dataIndex}`,
  key: dataIndex,
  dataIndex,
  show: true
})

type MockRowFields = keyof MockRow

export const createMockDataSourceFunction = (dataSource: MockRow[]): TableDataSourceFunction<MockRow> => {
  return async ({
    page,
    pageSize,
    params,
    sorting
  }) => {
    let processedData = [...dataSource]
    
    if (params?.searchString) {
      processedData = applySearch(processedData, params.searchString)
    }
    
    if (params?.filters && params.filters.length > 0) {
      // use your filter system instead of FilterApi
      const filterApi = new FilterApi({ predefinedFilters: params.filters, columns: tableColumns })
      processedData = filterApi.filterRows(processedData) as MockRow[]
    }
    
    if (sorting) {
      const sortField = (sorting.field || sorting.attribute) as MockRowFields
      if (sortField) {
        processedData = applySorting(processedData, sortField, sorting.isAsc)
      }
    }
    
    if (params?.groupBy) {
      processedData = applyGrouping(processedData, params.groupBy as MockRowFields)
    }
    
    const totalCount = processedData.length
    const startIndex = page * pageSize
    const endIndex = startIndex + pageSize
    
    const rows = processedData.slice(startIndex, endIndex)

    return {
      rows,
      totalCount
    }
  }
}


const applySearch = (data: MockRow[], searchString?: string): MockRow[] => {
  if (!searchString?.trim()) return data
  
  const searchLower = searchString.toLowerCase().trim()
  return data.filter(item => (
    Object.values(item).some(value => (
      value !== null &&
      value !== undefined &&
      String(value).toLowerCase().includes(searchLower)
    ))
  ))
}

const applySorting = (data: MockRow[], sortField: MockRowFields, isAsc: boolean): MockRow[] => {
  return [...data].sort((a, b) => {
    const aValue = a[sortField]
    const bValue = b[sortField]
    
    if (aValue == null && bValue == null) return 0
    if (aValue == null) return isAsc ? -1 : 1
    if (bValue == null) return isAsc ? 1 : -1
    
    const comparison = aValue < bValue ? -1 : aValue > bValue ? 1 : 0
    return isAsc ? comparison : -comparison
  })
}

const applyGrouping = (data: MockRow[], groupBy: MockRowFields): MockRow[] => {
  return [...data].sort((a, b) => {
    const aGroupValue = a[groupBy] || ''
    const bGroupValue = b[groupBy] || ''
    
    if (aGroupValue < bGroupValue) return -1
    if (aGroupValue > bGroupValue) return 1
    return 0
  })
}

export const mockCustomFilterFunction: TableCustomFilterFunction = (rows, filters, renderList, { rowMatchesFilter }) => {
  const filteredRows = rows.filter(row => 
    filters.every(filter => rowMatchesFilter(row, filter))
  )
  renderList(filteredRows)
}

export const tableColumns: TableColumn[] = [
  {
    ...createColumn('fullname'),
    allowMultipleFilters: true,
    filterType: { type: FilterType.Text },
    filters: [
      {
        name: 'Should start with A (example of a long filter name that wraps to the next line when the maximum width of the dropdown is reached - 600 pixels)',
        elementBefore: <Placeholder />,
        filter: row => !!row.fullname.match(/^A.*$/g)
      },
      {
        name: 'Should contain "Evgenija"',
        filter: row => !!row.fullname.match(/Evgenija/g)
      }
    ],
    isSortable: true,
    width: 160
  },
  {
    ...createColumn('group'),
    filterType: {
      type: FilterType.Enum,
      getAvailableOptions: async () => groups.map(group => ({ value: group.toLowerCase(), label: <>{group}</> }))
    },
    groupingAvailable: true,
    width: 100
  },
  {
    ...createColumn('salary'),
    filterType: { type: FilterType.Number },
    filters: [
      {
        name: 'Should be >300000',
        filter: row => row.salary > 300000
      },
      {
        name: 'Should be <300000',
        filter: row => row.salary < 300000
      }
    ],
    width: 100
  },
  {
    ...createColumn('dateHired'),
    filterType: { type: FilterType.DateTime, dateOnly: true },
    width: 120
  },
  {
    ...createColumn('datetime'),
    title: 'Datetime',
    filterType: { type: FilterType.DateTime },
    width: 200
  },
  {
    ...createColumn('isTrainee'),
    filterType: { type: FilterType.Boolean },
    groupingAvailable: true,
    render: function IsTraineeCell (value) {
      return value ? 'Yes' : 'No'
    },
    width: 100
  },
  {
    ...createColumn('details'),
    sortingAttributes: [
      {
        label: 'Email',
        attribute: 'email',
        field: 'details'
      },
      {
        label: 'City',
        attribute: 'city',
        field: 'details'
      }
    ],
    filterAttributes: [
      {
        label: 'Email',
        name: 'email',
        filter: {
          type: FilterType.Text
        }
      },
      {
        label: 'City',
        name: 'city',
        filter: {
          type: FilterType.Enum,
          getAvailableOptions: async () => cities.map(city => ({ value: city, label: city }))
        }
      }
    ],
    render: function DetailsCell (value) {
      return (
        <div>
          <div>
            <Text color="secondary">Email: </Text>
            <Text>{value?.email}</Text>
          </div>
          <div>
            <Text color="secondary">City: </Text>
            <Text>{value?.city}</Text>
          </div>
        </div>
      )
    }
  }
]

export type MockRow = {
  _uniqueId: string,
  key: string,
  group: typeof groups[number],
  fullname: string,
  salary: number,
  isTrainee: boolean,
  dateHired: string,
  datetime: string,
  ip: number,
  details: {
    email: string,
    city: typeof cities[number]
  }
}

export const generatedData: MockRow[] = [
  {
    _uniqueId: 'f7afc71a-42c5-46f2-8634-0697a4a03c7e',
    group: 'Unmanaged',
    fullname: 'Valentin Shestakov',
    salary: 138900,
    isTrainee: true,
    dateHired: '2025-02-12T04:00:04.000Z',
    datetime: '2025-02-12T04:00:04.000Z',
    ip: 4294967295,
    details: {
      email: 'valentin_shestakov@somebox.com',
      city: 'Ekaterinburg'
    }
  },
  {
    _uniqueId: '32359963-000a-417d-93c7-00476ca970ff',
    group: 'Sales',
    fullname: 'Anna Efimova',
    salary: 370900,
    isTrainee: true,
    dateHired: '2024-01-01T07:08:37.804Z',
    datetime: '2024-01-01T07:08:37.804Z',
    ip: 0,
    details: {
      email: 'anna_efimova@somebox.com',
      city: 'Perm'
    }
  },
  {
    _uniqueId: '83db386c-c7f3-454d-90df-e0d2507813ee',
    group: 'Teamleads',
    fullname: 'Dmitrij Vorobev',
    salary: 230300,
    isTrainee: false,
    dateHired: '2024-04-17T08:46:49.395Z',
    datetime: '2024-04-17T08:46:49.395Z',
    ip: 0,
    details: {
      email: 'dmitrij_vorobev@somebox.com',
      city: 'Chelyabinsk'
    }
  },
  {
    _uniqueId: 'b4314ea3-b301-4d15-9160-80e4793de7f3',
    group: 'Teamleads',
    fullname: 'Vasilij Antonov',
    salary: 98600,
    isTrainee: true,
    dateHired: '2023-09-05T16:45:10.582Z',
    datetime: '2023-09-05T16:45:10.582Z',
    ip: 0,
    details: {
      email: 'vasilij_antonov@somebox.com',
      city: 'Volgograd'
    }
  },
  {
    _uniqueId: '7573bd23-5a3d-4344-8990-c8da45329fda',
    group: 'Developers',
    fullname: 'Konstantin Dorofeev',
    salary: 432400,
    isTrainee: false,
    dateHired: '2024-02-02T22:26:37.025Z',
    datetime: '2024-02-02T22:26:37.025Z',
    ip: 0,
    details: {
      email: 'konstantin_dorofeev@somebox.com',
      city: 'Ufa'
    }
  },
  {
    _uniqueId: 'f6b0290f-d60b-4881-bae2-d773871b2afa',
    group: 'Developers',
    fullname: 'Darja Tolmacheva',
    salary: 100300,
    isTrainee: true,
    dateHired: '2024-04-17T18:52:29.309Z',
    datetime: '2024-04-17T18:52:29.309Z',
    ip: 0,
    details: {
      email: 'darja_tolmacheva@somebox.com',
      city: 'Novosibirsk'
    }
  },
  {
    _uniqueId: '2688890a-d0eb-42cb-bf18-01ae39d530a1',
    group: 'Developers',
    fullname: 'Evgenija Shevchenko',
    salary: 275400,
    isTrainee: true,
    dateHired: '2023-11-08T09:05:20.234Z',
    datetime: '2023-11-08T09:05:20.234Z',
    ip: 4294967295,
    details: {
      email: 'evgenija_shevchenko@somebox.com',
      city: 'Omsk'
    }
  },
  {
    _uniqueId: '2cc40a15-2ac0-46c7-ad58-a1a0b8714049',
    group: 'HR',
    fullname: 'Kristina Matveeva',
    salary: 293400,
    isTrainee: true,
    dateHired: '2023-09-27T23:20:24.108Z',
    datetime: '2023-09-27T23:20:24.108Z',
    ip: 4294967295,
    details: {
      email: 'kristina_matveeva@somebox.com',
      city: 'Perm'
    }
  },
  {
    _uniqueId: '97b0afee-0859-4e4d-8d43-fb0947c98270',
    group: 'CEO',
    fullname: 'Natalja Shevchenko',
    salary: 348200,
    isTrainee: false,
    dateHired: '2025-02-21T17:52:26.830Z',
    datetime: '2025-02-21T17:52:26.830Z',
    ip: 0,
    details: {
      email: 'natalja_shevchenko@somebox.com',
      city: 'Nizhniy Novgorod'
    }
  },
  {
    _uniqueId: 'ce1a6cd9-4a5e-454f-9bb6-a0224e4efd2c',
    group: 'Developers',
    fullname: 'Petr Tsvetkov',
    salary: 111000,
    isTrainee: true,
    dateHired: '2024-03-06T09:42:35.202Z',
    datetime: '2024-03-06T09:42:35.202Z',
    ip: 4294967295,
    details: {
      email: 'petr_tsvetkov@somebox.com',
      city: 'Nizhniy Novgorod'
    }
  },
  {
    _uniqueId: 'cff09e8f-2cea-4637-8598-2ac1e6c84e6a',
    group: 'HR',
    fullname: 'Vitalij Sokolov',
    salary: 261300,
    isTrainee: true,
    dateHired: '2024-01-27T12:25:26.448Z',
    datetime: '2024-01-27T12:25:26.448Z',
    ip: 0,
    details: {
      email: 'vitalij_sokolov@somebox.com',
      city: 'Perm'
    }
  },
  {
    _uniqueId: 'cc20baf7-901d-406d-82a0-c2aa31a587e1',
    group: 'HR',
    fullname: 'Alina Simonova',
    salary: 413400,
    isTrainee: false,
    dateHired: '2024-08-13T00:16:28.805Z',
    datetime: '2024-08-13T00:16:28.805Z',
    ip: 4294967295,
    details: {
      email: 'alina_simonova@somebox.com',
      city: 'Omsk'
    }
  },
  {
    _uniqueId: '42518e05-3170-4605-a1e7-eccdd9d65aa9',
    group: 'Unmanaged',
    fullname: 'Konstantin Belov',
    salary: 359000,
    isTrainee: false,
    dateHired: '2025-02-21T16:38:29.872Z',
    datetime: '2025-02-21T16:38:29.872Z',
    ip: 4294967295,
    details: {
      email: 'konstantin_belov@somebox.com',
      city: 'Moscow'
    }
  },
  {
    _uniqueId: '6ea1e2b8-6521-40ee-aa2a-02c4fb299f09',
    group: 'CEO',
    fullname: 'Roman Kalinin',
    salary: 496900,
    isTrainee: true,
    dateHired: '2024-08-12T06:40:28.830Z',
    datetime: '2024-08-12T06:40:28.830Z',
    ip: 0,
    details: {
      email: 'roman_kalinin@somebox.com',
      city: 'Omsk'
    }
  },
  {
    _uniqueId: '65750b14-1849-4838-8336-ef6389458e21',
    group: 'Managers',
    fullname: 'Petr Smirnov',
    salary: 162000,
    isTrainee: false,
    dateHired: '2023-10-22T05:55:05.585Z',
    datetime: '2023-10-22T05:55:05.585Z',
    ip: 0,
    details: {
      email: 'petr_smirnov@somebox.com',
      city: 'Omsk'
    }
  },
  {
    _uniqueId: '3c4df422-ee25-469d-aeea-45e14af8393b',
    group: 'Unmanaged',
    fullname: 'Gleb Baranov',
    salary: 209700,
    isTrainee: false,
    dateHired: '2024-02-06T17:37:28.523Z',
    datetime: '2024-02-06T17:37:28.523Z',
    ip: 0,
    details: {
      email: 'gleb_baranov@somebox.com',
      city: 'Kazan'
    }
  },
  {
    _uniqueId: '7f3e6d83-924a-4e80-be33-345ceb2f31c5',
    group: 'Financials',
    fullname: 'Marina Kotova',
    salary: 311600,
    isTrainee: false,
    dateHired: '2024-07-05T12:32:24.642Z',
    datetime: '2024-07-05T12:32:24.642Z',
    ip: 4294967295,
    details: {
      email: 'marina_kotova@somebox.com',
      city: 'Novosibirsk'
    }
  },
  {
    _uniqueId: '6eaa0ea5-37b1-4fe1-95e0-9f2114db88ee',
    group: 'Teamleads',
    fullname: 'Boris Ershov',
    salary: 247400,
    isTrainee: false,
    dateHired: '2024-02-25T09:19:35.930Z',
    datetime: '2024-02-25T09:19:35.930Z',
    ip: 0,
    details: {
      email: 'boris_ershov@somebox.com',
      city: 'Novosibirsk'
    }
  },
  {
    _uniqueId: '1b9963a2-f236-4a24-a2b9-93499741e198',
    group: 'Managers',
    fullname: 'Vasilij Nikiforov',
    salary: 214500,
    isTrainee: false,
    dateHired: '2023-07-11T11:48:21.497Z',
    datetime: '2023-07-11T11:48:21.497Z',
    ip: 0,
    details: {
      email: 'vasilij_nikiforov@somebox.com',
      city: 'Chelyabinsk'
    }
  },
  {
    _uniqueId: 'ce2d5d83-f3ae-4852-9fdf-b00cae81176f',
    group: 'Managers',
    fullname: 'Mihail Golubev',
    salary: 352800,
    isTrainee: true,
    dateHired: '2025-03-11T01:39:53.410Z',
    datetime: '2025-03-11T01:39:53.410Z',
    ip: 4294967295,
    details: {
      email: 'mihail_golubev@somebox.com',
      city: 'Nizhniy Novgorod'
    }
  },
  {
    _uniqueId: '40d6e2a7-06be-41eb-b313-ea8cd0f18c9c',
    group: 'Unmanaged',
    fullname: 'Gleb Bolshakov',
    salary: 161500,
    isTrainee: true,
    dateHired: '2023-02-11T13:35:53.009Z',
    datetime: '2023-02-11T13:35:53.009Z',
    ip: 4294967295,
    details: {
      email: 'gleb_bolshakov@somebox.com',
      city: 'Voronezh'
    }
  },
  {
    _uniqueId: 'f73a591d-24b7-4521-af21-2a8f973e2fbe',
    group: 'Managers',
    fullname: 'Stepan Sidorov',
    salary: 445300,
    isTrainee: false,
    dateHired: '2023-06-30T00:25:20.836Z',
    datetime: '2023-06-30T00:25:20.836Z',
    ip: 0,
    details: {
      email: 'stepan_sidorov@somebox.com',
      city: 'Krasnodar'
    }
  },
  {
    _uniqueId: 'd145eca1-0ec3-418d-b511-ac141d889e60',
    group: 'CEO',
    fullname: 'Antonina Oblomova',
    salary: 497600,
    isTrainee: true,
    dateHired: '2023-06-16T18:25:15.512Z',
    datetime: '2023-06-16T18:25:15.512Z',
    ip: 4294967295,
    details: {
      email: 'antonina_oblomova@somebox.com',
      city: 'Omsk'
    }
  },
  {
    _uniqueId: '4a7ef3ea-4c08-402c-a877-817fb99ee8c9',
    group: 'Teamleads',
    fullname: 'Jaroslav Egorov',
    salary: 226900,
    isTrainee: false,
    dateHired: '2023-08-22T00:27:04.959Z',
    datetime: '2023-08-22T00:27:04.959Z',
    ip: 0,
    details: {
      email: 'jaroslav_egorov@somebox.com',
      city: 'Omsk'
    }
  },
  {
    _uniqueId: '099d21c8-fb77-4a60-a98d-8ff9aec8a679',
    group: 'Financials',
    fullname: 'Olga Volkova',
    salary: 497700,
    isTrainee: true,
    dateHired: '2025-01-24T12:32:55.128Z',
    datetime: '2025-01-24T12:32:55.128Z',
    ip: 4294967295,
    details: {
      email: 'olga_volkova@somebox.com',
      city: 'Kazan'
    }
  },
  {
    _uniqueId: '841c8e61-b3be-4f02-8057-ea1b9574704b',
    group: 'Developers',
    fullname: 'Valerij Krylov',
    salary: 436400,
    isTrainee: true,
    dateHired: '2023-02-26T16:47:34.979Z',
    datetime: '2023-02-26T16:47:34.979Z',
    ip: 4294967295,
    details: {
      email: 'valerij_krylov@somebox.com',
      city: 'Kazan'
    }
  },
  {
    _uniqueId: 'b88c75e2-5730-4d08-ac24-d44c90e1d413',
    group: 'Teamleads',
    fullname: 'Evdokija Volkova',
    salary: 310400,
    isTrainee: true,
    dateHired: '2024-05-29T18:47:43.645Z',
    datetime: '2024-05-29T18:47:43.645Z',
    ip: 0,
    details: {
      email: 'evdokija_volkova@somebox.com',
      city: 'Novosibirsk'
    }
  },
  {
    _uniqueId: '2d5cd069-fa24-4c51-9948-179e1ed66f65',
    group: 'Financials',
    fullname: 'Gleb Ilin',
    salary: 339500,
    isTrainee: false,
    dateHired: '2024-01-28T05:19:46.020Z',
    datetime: '2024-01-28T05:19:46.020Z',
    ip: 0,
    details: {
      email: 'gleb_ilin@somebox.com',
      city: 'Perm'
    }
  },
  {
    _uniqueId: '5d14155d-a20f-4a86-b1b8-fc0c672180b8',
    group: 'HR',
    fullname: 'Marija Lenskaja',
    salary: 383200,
    isTrainee: true,
    dateHired: '2024-03-23T23:34:38.751Z',
    datetime: '2024-03-23T23:34:38.751Z',
    ip: 4294967295,
    details: {
      email: 'marija_lenskaja@somebox.com',
      city: 'Novosibirsk'
    }
  },
  {
    _uniqueId: '4430381f-9f50-4899-aa30-84d38ce8c2c0',
    group: 'Teamleads',
    fullname: 'Konstantin Smirnov',
    salary: 158500,
    isTrainee: true,
    dateHired: '2024-08-25T04:16:13.798Z',
    datetime: '2024-08-25T04:16:13.798Z',
    ip: 0,
    details: {
      email: 'konstantin_smirnov@somebox.com',
      city: 'Samara'
    }
  },
  {
    _uniqueId: 'e4d3461c-494b-4eb0-bf63-6879ab787349',
    group: 'Developers',
    fullname: 'Natalja Bezrukova',
    salary: 91100,
    isTrainee: true,
    dateHired: '2025-02-07T01:54:03.848Z',
    datetime: '2025-02-07T01:54:03.848Z',
    ip: 4294967295,
    details: {
      email: 'natalja_bezrukova@somebox.com',
      city: 'Nizhniy Novgorod'
    }
  },
  {
    _uniqueId: '9ef44ffe-2694-4d27-9a47-ae8601df9136',
    group: 'Sales',
    fullname: 'Roman Tarasov',
    salary: 313300,
    isTrainee: true,
    dateHired: '2023-10-07T01:13:22.560Z',
    datetime: '2023-10-07T01:13:22.560Z',
    ip: 4294967295,
    details: {
      email: 'roman_tarasov@somebox.com',
      city: 'Krasnodar'
    }
  },
  {
    _uniqueId: '08d281fa-920e-48cd-aeb1-264d25bd6c5e',
    group: 'Unmanaged',
    fullname: 'Ljubov Orlova',
    salary: 86900,
    isTrainee: true,
    dateHired: '2023-09-26T14:34:57.209Z',
    datetime: '2023-09-26T14:34:57.209Z',
    ip: 4294967295,
    details: {
      email: 'ljubov_orlova@somebox.com',
      city: 'Nizhniy Novgorod'
    }
  },
  {
    _uniqueId: '269d8ac7-e2b8-4ead-a76f-db6400ca7a10',
    group: 'Managers',
    fullname: 'Anastasija Bezrukova',
    salary: 146900,
    isTrainee: false,
    dateHired: '2025-01-31T02:02:42.521Z',
    datetime: '2025-01-31T02:02:42.521Z',
    ip: 0,
    details: {
      email: 'anastasija_bezrukova@somebox.com',
      city: 'Moscow'
    }
  },
  {
    _uniqueId: 'fe8fe4f9-f559-473c-87cf-452a6c45c09b',
    group: 'Financials',
    fullname: 'Ivanna Romanova',
    salary: 233200,
    isTrainee: false,
    dateHired: '2024-01-26T13:50:24.842Z',
    datetime: '2024-01-26T13:50:24.842Z',
    ip: 4294967295,
    details: {
      email: 'ivanna_romanova@somebox.com',
      city: 'Novosibirsk'
    }
  },
  {
    _uniqueId: 'c5fba29e-e96c-447b-9081-676f754d6222',
    group: 'CEO',
    fullname: 'Denis Nikiforov',
    salary: 204400,
    isTrainee: false,
    dateHired: '2023-03-03T10:24:42.647Z',
    datetime: '2023-03-03T10:24:42.647Z',
    ip: 4294967295,
    details: {
      email: 'denis_nikiforov@somebox.com',
      city: 'Moscow'
    }
  },
  {
    _uniqueId: '42e720e8-1a64-4328-a748-3da37d314b6d',
    group: 'Financials',
    fullname: 'Svetlana Kamenskih',
    salary: 359800,
    isTrainee: true,
    dateHired: '2023-08-14T11:16:16.308Z',
    datetime: '2023-08-14T11:16:16.308Z',
    ip: 0,
    details: {
      email: 'svetlana_kamenskih@somebox.com',
      city: 'Volgograd'
    }
  },
  {
    _uniqueId: '56de7e51-537c-4d96-a786-d13e7074f86f',
    group: 'Teamleads',
    fullname: 'Vasilisa Lenskaja',
    salary: 375700,
    isTrainee: false,
    dateHired: '2024-05-09T01:37:29.689Z',
    datetime: '2024-05-09T01:37:29.689Z',
    ip: 0,
    details: {
      email: 'vasilisa_lenskaja@somebox.com',
      city: 'Rostov'
    }
  },
  {
    _uniqueId: 'de18a51e-ddc7-4b0c-8e70-3006f71798bf',
    group: 'Teamleads',
    fullname: 'Vitalij Belov',
    salary: 456600,
    isTrainee: true,
    dateHired: '2023-04-19T05:02:36.265Z',
    datetime: '2023-04-19T05:02:36.265Z',
    ip: 4294967295,
    details: {
      email: 'vitalij_belov@somebox.com',
      city: 'Krasnoyarsk'
    }
  },
  {
    _uniqueId: 'a8581cdb-a60e-4f7b-b00f-fb6893226b97',
    group: 'Financials',
    fullname: 'Vasilisa Kovalevskaja',
    salary: 193100,
    isTrainee: false,
    dateHired: '2024-04-09T06:39:52.793Z',
    datetime: '2024-04-09T06:39:52.793Z',
    ip: 0,
    details: {
      email: 'vasilisa_kovalevskaja@somebox.com',
      city: 'Novosibirsk'
    }
  },
  {
    _uniqueId: 'e6428821-4846-4d7c-8a3a-303cc9ebaa3f',
    group: 'Developers',
    fullname: 'Zoja Kozhevnikova',
    salary: 147600,
    isTrainee: false,
    dateHired: '2024-08-18T20:55:34.522Z',
    datetime: '2024-08-18T20:55:34.522Z',
    ip: 4294967295,
    details: {
      email: 'zoja_kozhevnikova@somebox.com',
      city: 'Saint-Petersburg'
    }
  },
  {
    _uniqueId: '19670cf9-0fa0-4e56-b37f-97bbd9c7679f',
    group: 'HR',
    fullname: 'Nikolaj Lazarev',
    salary: 488400,
    isTrainee: true,
    dateHired: '2024-04-20T03:24:04.902Z',
    datetime: '2024-04-20T03:24:04.902Z',
    ip: 0,
    details: {
      email: 'nikolaj_lazarev@somebox.com',
      city: 'Omsk'
    }
  },
  {
    _uniqueId: '13e2318a-5167-4626-8f90-779d5336e55c',
    group: 'HR',
    fullname: 'Vladislav Antonov',
    salary: 79900,
    isTrainee: true,
    dateHired: '2024-12-01T22:47:53.045Z',
    datetime: '2024-12-01T22:47:53.045Z',
    ip: 4294967295,
    details: {
      email: 'vladislav_antonov@somebox.com',
      city: 'Voronezh'
    }
  },
  {
    _uniqueId: '0b18c81d-ad21-48b6-84bf-56b9d704667d',
    group: 'Developers',
    fullname: 'Evdokija Tarasova',
    salary: 132800,
    isTrainee: true,
    dateHired: '2024-04-24T01:03:07.170Z',
    datetime: '2024-04-24T01:03:07.170Z',
    ip: 0,
    details: {
      email: 'evdokija_tarasova@somebox.com',
      city: 'Ekaterinburg'
    }
  },
  {
    _uniqueId: '7fecbe3c-235f-4302-a76e-16fa761e9af7',
    group: 'Teamleads',
    fullname: 'Makar Kuzmin',
    salary: 184100,
    isTrainee: true,
    dateHired: '2023-02-26T06:39:52.191Z',
    datetime: '2023-02-26T06:39:52.191Z',
    ip: 0,
    details: {
      email: 'makar_kuzmin@somebox.com',
      city: 'Kazan'
    }
  },
  {
    _uniqueId: '15ca09fb-caf0-40e1-812b-1441e1a88c14',
    group: 'Unmanaged',
    fullname: 'Viktorija Uljanova',
    salary: 294900,
    isTrainee: false,
    dateHired: '2023-07-30T14:59:48.439Z',
    datetime: '2023-07-30T14:59:48.439Z',
    ip: 0,
    details: {
      email: 'viktorija_uljanova@somebox.com',
      city: 'Omsk'
    }
  },
  {
    _uniqueId: '1d4a6633-8c32-4ee7-98f5-cf6b7ae3bc53',
    group: 'Managers',
    fullname: 'Alina Kozhevnikova',
    salary: 415900,
    isTrainee: true,
    dateHired: '2023-08-08T05:31:13.138Z',
    datetime: '2023-08-08T05:31:13.138Z',
    ip: 0,
    details: {
      email: 'alina_kozhevnikova@somebox.com',
      city: 'Saint-Petersburg'
    }
  },
  {
    _uniqueId: 'cbf39593-b4e3-4d9f-9b37-6d7f2ce60f53',
    group: 'HR',
    fullname: 'Arina Novitskaja',
    salary: 260400,
    isTrainee: false,
    dateHired: '2023-03-03T14:12:43.158Z',
    datetime: '2023-03-03T14:12:43.158Z',
    ip: 0,
    details: {
      email: 'arina_novitskaja@somebox.com',
      city: 'Ufa'
    }
  },
  {
    _uniqueId: '46ab8807-387b-42ee-8f5a-91d723b3c808',
    group: 'HR',
    fullname: 'Tamara Denisova',
    salary: 325300,
    isTrainee: true,
    dateHired: '2024-03-06T03:03:20.039Z',
    datetime: '2024-03-06T03:03:20.039Z',
    ip: 4294967295,
    details: {
      email: 'tamara_denisova@somebox.com',
      city: 'Perm'
    }
  },
  {
    _uniqueId: 'fb1770bf-019f-4d96-bb81-1a797605bb20',
    group: 'Sales',
    fullname: 'Timofej Efimov',
    salary: 316300,
    isTrainee: true,
    dateHired: '2024-11-07T13:19:48.247Z',
    datetime: '2024-11-07T13:19:48.247Z',
    ip: 0,
    details: {
      email: 'timofej_efimov@somebox.com',
      city: 'Rostov'
    }
  },
  {
    _uniqueId: '5547ff9e-bdca-4f18-b63f-36c081361d30',
    group: 'Developers',
    fullname: 'Kristina Novitskaja',
    salary: 335500,
    isTrainee: true,
    dateHired: '2024-10-24T19:45:16.036Z',
    datetime: '2024-10-24T19:45:16.036Z',
    ip: 0,
    details: {
      email: 'kristina_novitskaja@somebox.com',
      city: 'Ufa'
    }
  },
  {
    _uniqueId: '4a363983-0192-4654-9d09-08f57f19e9e4',
    group: 'Sales',
    fullname: 'Anastasija Koroleva',
    salary: 435900,
    isTrainee: false,
    dateHired: '2023-04-14T16:36:02.363Z',
    datetime: '2023-04-14T16:36:02.363Z',
    ip: 4294967295,
    details: {
      email: 'anastasija_koroleva@somebox.com',
      city: 'Novosibirsk'
    }
  },
  {
    _uniqueId: '217a0a4f-8a1c-4b72-b3f8-5cbf567152bb',
    group: 'HR',
    fullname: 'Gleb Timofeev',
    salary: 260500,
    isTrainee: true,
    dateHired: '2024-11-05T02:57:56.074Z',
    datetime: '2024-11-05T02:57:56.074Z',
    ip: 4294967295,
    details: {
      email: 'gleb_timofeev@somebox.com',
      city: 'Volgograd'
    }
  },
  {
    _uniqueId: '677b4fc6-a8d6-4511-9dcd-9b48007bb94e',
    group: 'CEO',
    fullname: 'Nikolaj Lazarev',
    salary: 275400,
    isTrainee: false,
    dateHired: '2025-02-24T15:21:25.374Z',
    datetime: '2025-02-24T15:21:25.374Z',
    ip: 0,
    details: {
      email: 'nikolaj_lazarev@somebox.com',
      city: 'Rostov'
    }
  },
  {
    _uniqueId: 'd5009ead-a49a-4c00-b3b3-1cb83c3e5c4b',
    group: 'CEO',
    fullname: 'Angelina Andreeva',
    salary: 461300,
    isTrainee: false,
    dateHired: '2023-10-30T14:07:14.715Z',
    datetime: '2023-10-30T14:07:14.715Z',
    ip: 0,
    details: {
      email: 'angelina_andreeva@somebox.com',
      city: 'Saint-Petersburg'
    }
  },
  {
    _uniqueId: '625f319a-13ad-44ae-9613-379637c8e883',
    group: 'Financials',
    fullname: 'Dmitrij Markov',
    salary: 99800,
    isTrainee: false,
    dateHired: '2024-05-12T19:25:22.497Z',
    datetime: '2024-05-12T19:25:22.497Z',
    ip: 4294967295,
    details: {
      email: 'dmitrij_markov@somebox.com',
      city: 'Omsk'
    }
  },
  {
    _uniqueId: 'f5aab790-483b-4db8-bac3-79656e54e474',
    group: 'Sales',
    fullname: 'Alena Shevchenko',
    salary: 136100,
    isTrainee: false,
    dateHired: '2025-03-09T02:32:17.089Z',
    datetime: '2025-03-09T02:32:17.089Z',
    ip: 4294967295,
    details: {
      email: 'alena_shevchenko@somebox.com',
      city: 'Ufa'
    }
  },
  {
    _uniqueId: '7389f352-69ae-4369-addd-97890fc0fc27',
    group: 'Financials',
    fullname: 'Tatjana Volkova',
    salary: 352700,
    isTrainee: true,
    dateHired: '2023-04-09T21:46:19.446Z',
    datetime: '2023-04-09T21:46:19.446Z',
    ip: 4294967295,
    details: {
      email: 'tatjana_volkova@somebox.com',
      city: 'Volgograd'
    }
  },
  {
    _uniqueId: '8ab99940-0854-4ce9-b939-7abb770501ed',
    group: 'Teamleads',
    fullname: 'Anastasija Bezrukova',
    salary: 102100,
    isTrainee: true,
    dateHired: '2023-07-26T04:47:11.626Z',
    datetime: '2023-07-26T04:47:11.626Z',
    ip: 0,
    details: {
      email: 'anastasija_bezrukova@somebox.com',
      city: 'Volgograd'
    }
  },
  {
    _uniqueId: 'c45f9c50-63be-422d-87fa-8c3aeab151f9',
    group: 'Teamleads',
    fullname: 'Natalja Novikova',
    salary: 418000,
    isTrainee: true,
    dateHired: '2023-11-07T01:48:08.575Z',
    datetime: '2023-11-07T01:48:08.575Z',
    ip: 0,
    details: {
      email: 'natalja_novikova@somebox.com',
      city: 'Volgograd'
    }
  },
  {
    _uniqueId: '18c0dd97-8917-46e1-9626-5441619993fd',
    group: 'Developers',
    fullname: 'Ljudmila Malysheva',
    salary: 487100,
    isTrainee: true,
    dateHired: '2023-05-04T00:24:19.246Z',
    datetime: '2023-05-04T00:24:19.246Z',
    ip: 4294967295,
    details: {
      email: 'ljudmila_malysheva@somebox.com',
      city: 'Krasnodar'
    }
  },
  {
    _uniqueId: '32360813-b822-43c2-8efe-497fbe743ecb',
    group: 'Teamleads',
    fullname: 'Marina Bratislavskaja',
    salary: 342900,
    isTrainee: false,
    dateHired: '2024-06-09T00:34:47.116Z',
    datetime: '2024-06-09T00:34:47.116Z',
    ip: 4294967295,
    details: {
      email: 'marina_bratislavskaja@somebox.com',
      city: 'Ekaterinburg'
    }
  },
  {
    _uniqueId: '7a9de6ab-6549-4256-9b5c-61d4db9d684d',
    group: 'Sales',
    fullname: 'Eva Tarasova',
    salary: 174700,
    isTrainee: false,
    dateHired: '2024-09-18T10:59:28.344Z',
    datetime: '2024-09-18T10:59:28.344Z',
    ip: 0,
    details: {
      email: 'eva_tarasova@somebox.com',
      city: 'Voronezh'
    }
  },
  {
    _uniqueId: 'b7d5eb82-48f1-4289-a9c4-68cede15e09e',
    group: 'CEO',
    fullname: 'Egor Kuznetsov',
    salary: 427100,
    isTrainee: false,
    dateHired: '2024-07-05T22:58:24.409Z',
    datetime: '2024-07-05T22:58:24.409Z',
    ip: 4294967295,
    details: {
      email: 'egor_kuznetsov@somebox.com',
      city: 'Saint-Petersburg'
    }
  },
  {
    _uniqueId: 'c592ca14-1f8e-4c96-97eb-10137ad7328f',
    group: 'Sales',
    fullname: 'Elizaveta Andreeva',
    salary: 245400,
    isTrainee: true,
    dateHired: '2023-05-14T17:47:11.209Z',
    datetime: '2023-05-14T17:47:11.209Z',
    ip: 4294967295,
    details: {
      email: 'elizaveta_andreeva@somebox.com',
      city: 'Rostov'
    }
  },
  {
    _uniqueId: '7f18828a-43b0-451a-883c-001fb6a519b3',
    group: 'CEO',
    fullname: 'Alena Gronskaja',
    salary: 243200,
    isTrainee: false,
    dateHired: '2024-04-22T18:35:44.535Z',
    datetime: '2024-04-22T18:35:44.535Z',
    ip: 0,
    details: {
      email: 'alena_gronskaja@somebox.com',
      city: 'Saint-Petersburg'
    }
  },
  {
    _uniqueId: 'ef432204-f537-4cf4-bf9a-8df4b63f0858',
    group: 'Teamleads',
    fullname: 'Denis Ilin',
    salary: 433000,
    isTrainee: true,
    dateHired: '2023-04-25T21:10:28.620Z',
    datetime: '2023-04-25T21:10:28.620Z',
    ip: 4294967295,
    details: {
      email: 'denis_ilin@somebox.com',
      city: 'Kazan'
    }
  },
  {
    _uniqueId: 'e3f004f7-23e3-48a8-b88a-09cfc318eb58',
    group: 'Financials',
    fullname: 'Darja Oblomova',
    salary: 249100,
    isTrainee: false,
    dateHired: '2023-11-25T20:09:40.514Z',
    datetime: '2023-11-25T20:09:40.514Z',
    ip: 0,
    details: {
      email: 'darja_oblomova@somebox.com',
      city: 'Perm'
    }
  },
  {
    _uniqueId: '1f0eea57-e572-43d2-ad5c-b786e0323351',
    group: 'Teamleads',
    fullname: 'Elena Bratislavskaja',
    salary: 458100,
    isTrainee: false,
    dateHired: '2024-10-31T23:46:54.542Z',
    datetime: '2024-10-31T23:46:54.542Z',
    ip: 0,
    details: {
      email: 'elena_bratislavskaja@somebox.com',
      city: 'Novosibirsk'
    }
  },
  {
    _uniqueId: '20635857-5d89-424d-8453-de8bf8e60749',
    group: 'Managers',
    fullname: 'Mark Pavlov',
    salary: 235200,
    isTrainee: false,
    dateHired: '2024-08-07T18:59:43.525Z',
    datetime: '2024-08-07T18:59:43.525Z',
    ip: 4294967295,
    details: {
      email: 'mark_pavlov@somebox.com',
      city: 'Ufa'
    }
  },
  {
    _uniqueId: 'dee56762-5b41-41b6-a45f-f94c9ff6ba12',
    group: 'CEO',
    fullname: 'Viktor Nikolaev',
    salary: 472000,
    isTrainee: false,
    dateHired: '2024-02-22T15:17:04.524Z',
    datetime: '2024-02-22T15:17:04.524Z',
    ip: 4294967295,
    details: {
      email: 'viktor_nikolaev@somebox.com',
      city: 'Chelyabinsk'
    }
  },
  {
    _uniqueId: 'a369622b-ca25-485a-96dc-6b56c6413711',
    group: 'HR',
    fullname: 'Vladislav Aleksandrov',
    salary: 377400,
    isTrainee: true,
    dateHired: '2023-05-20T00:19:29.291Z',
    datetime: '2023-05-20T00:19:29.291Z',
    ip: 4294967295,
    details: {
      email: 'vladislav_aleksandrov@somebox.com',
      city: 'Omsk'
    }
  },
  {
    _uniqueId: 'e1661b70-4452-4a79-a96a-9a94a7aa26df',
    group: 'Teamleads',
    fullname: 'Tamara Istomina',
    salary: 181900,
    isTrainee: false,
    dateHired: '2024-10-27T05:54:30.621Z',
    datetime: '2024-10-27T05:54:30.621Z',
    ip: 0,
    details: {
      email: 'tamara_istomina@somebox.com',
      city: 'Krasnodar'
    }
  },
  {
    _uniqueId: 'b8508625-69cc-4b48-9793-4ed47ac9d6d4',
    group: 'CEO',
    fullname: 'Pavel Kuzmin',
    salary: 184800,
    isTrainee: true,
    dateHired: '2023-05-08T20:07:27.366Z',
    datetime: '2023-05-08T20:07:27.366Z',
    ip: 0,
    details: {
      email: 'pavel_kuzmin@somebox.com',
      city: 'Moscow'
    }
  },
  {
    _uniqueId: '88bddcf2-9d45-4ac2-a565-17bf7e3e6ec4',
    group: 'HR',
    fullname: 'Kirill Kazakov',
    salary: 172300,
    isTrainee: false,
    dateHired: '2024-06-13T19:13:48.365Z',
    datetime: '2024-06-13T19:13:48.365Z',
    ip: 0,
    details: {
      email: 'kirill_kazakov@somebox.com',
      city: 'Krasnoyarsk'
    }
  },
  {
    _uniqueId: '314ebd9c-9048-4f60-8a55-dc3c456def25',
    group: 'Managers',
    fullname: 'Daniil Gusev',
    salary: 263700,
    isTrainee: true,
    dateHired: '2024-06-06T00:41:18.040Z',
    datetime: '2024-06-06T00:41:18.040Z',
    ip: 0,
    details: {
      email: 'daniil_gusev@somebox.com',
      city: 'Omsk'
    }
  },
  {
    _uniqueId: '2ef22ced-ed0b-4e83-9c42-1fc4c3d8678e',
    group: 'Managers',
    fullname: 'Valerija Lionova',
    salary: 428500,
    isTrainee: true,
    dateHired: '2024-07-23T10:31:44.508Z',
    datetime: '2024-07-23T10:31:44.508Z',
    ip: 0,
    details: {
      email: 'valerija_lionova@somebox.com',
      city: 'Saint-Petersburg'
    }
  },
  {
    _uniqueId: 'ebe9f76b-d571-4b48-9dca-084815b5bffc',
    group: 'HR',
    fullname: 'Kirill Stepanov',
    salary: 349600,
    isTrainee: true,
    dateHired: '2024-09-14T18:10:18.125Z',
    datetime: '2024-09-14T18:10:18.125Z',
    ip: 0,
    details: {
      email: 'kirill_stepanov@somebox.com',
      city: 'Rostov'
    }
  },
  {
    _uniqueId: '9c533dce-2dae-48be-9d9d-12ea68dab292',
    group: 'Financials',
    fullname: 'Valerij Zajtsev',
    salary: 258300,
    isTrainee: false,
    dateHired: '2024-01-14T00:32:24.065Z',
    datetime: '2024-01-14T00:32:24.065Z',
    ip: 4294967295,
    details: {
      email: 'valerij_zajtsev@somebox.com',
      city: 'Rostov'
    }
  },
  {
    _uniqueId: '3a114d1e-0aaf-4df4-bf32-1143ccbbc5ce',
    group: 'Unmanaged',
    fullname: 'Kira Panchenko',
    salary: 265100,
    isTrainee: false,
    dateHired: '2023-12-10T04:56:00.703Z',
    datetime: '2023-12-10T04:56:00.703Z',
    ip: 0,
    details: {
      email: 'kira_panchenko@somebox.com',
      city: 'Chelyabinsk'
    }
  },
  {
    _uniqueId: '263be607-c8ad-4895-abf9-0ade276d9ac4',
    group: 'CEO',
    fullname: 'Jaroslav Zhukov',
    salary: 118000,
    isTrainee: true,
    dateHired: '2025-02-15T07:33:51.694Z',
    datetime: '2025-02-15T07:33:51.694Z',
    ip: 4294967295,
    details: {
      email: 'jaroslav_zhukov@somebox.com',
      city: 'Krasnodar'
    }
  },
  {
    _uniqueId: '3cc44aa1-46dd-4dfd-8bf8-afe547da4f62',
    group: 'Teamleads',
    fullname: 'Uljana Tarasova',
    salary: 57600,
    isTrainee: true,
    dateHired: '2025-01-22T02:17:10.204Z',
    datetime: '2025-01-22T02:17:10.204Z',
    ip: 4294967295,
    details: {
      email: 'uljana_tarasova@somebox.com',
      city: 'Krasnoyarsk'
    }
  },
  {
    _uniqueId: '6da8ed79-2b97-4017-a1e5-d7c2b4a87dd5',
    group: 'Developers',
    fullname: 'Nikolaj Ponomarev',
    salary: 59200,
    isTrainee: true,
    dateHired: '2024-04-12T03:07:20.502Z',
    datetime: '2024-04-12T03:07:20.502Z',
    ip: 0,
    details: {
      email: 'nikolaj_ponomarev@somebox.com',
      city: 'Voronezh'
    }
  },
  {
    _uniqueId: '0b8fe35a-e7af-4580-a028-aa550b7bcae8',
    group: 'Sales',
    fullname: 'Gennadij Kovalev',
    salary: 401300,
    isTrainee: true,
    dateHired: '2024-03-02T14:41:27.041Z',
    datetime: '2024-03-02T14:41:27.041Z',
    ip: 0,
    details: {
      email: 'gennadij_kovalev@somebox.com',
      city: 'Krasnoyarsk'
    }
  },
  {
    _uniqueId: 'a8bdeddd-6336-4110-82bc-b806f6891706',
    group: 'CEO',
    fullname: 'Vladimir Nikolaev',
    salary: 184800,
    isTrainee: false,
    dateHired: '2024-07-16T16:57:41.335Z',
    datetime: '2024-07-16T16:57:41.335Z',
    ip: 0,
    details: {
      email: 'vladimir_nikolaev@somebox.com',
      city: 'Rostov'
    }
  },
  {
    _uniqueId: '84e57d4c-de95-4ff0-a886-11b461f5dead',
    group: 'Unmanaged',
    fullname: 'Viktorija Orlova',
    salary: 250500,
    isTrainee: false,
    dateHired: '2023-11-04T16:30:03.682Z',
    datetime: '2023-11-04T16:30:03.682Z',
    ip: 0,
    details: {
      email: 'viktorija_orlova@somebox.com',
      city: 'Saint-Petersburg'
    }
  },
  {
    _uniqueId: '84a7c89d-c9af-4e8f-8bb5-a8e4f95a494f',
    group: 'CEO',
    fullname: 'Zinaida Novikova',
    salary: 67800,
    isTrainee: false,
    dateHired: '2023-06-18T23:57:54.940Z',
    datetime: '2023-06-18T23:57:54.940Z',
    ip: 0,
    details: {
      email: 'zinaida_novikova@somebox.com',
      city: 'Ekaterinburg'
    }
  },
  {
    _uniqueId: 'a243dd6b-b06d-41f2-a070-87983dce6944',
    group: 'HR',
    fullname: 'Alina Kamenskih',
    salary: 137300,
    isTrainee: false,
    dateHired: '2025-02-08T13:13:43.545Z',
    datetime: '2025-02-08T13:13:43.545Z',
    ip: 0,
    details: {
      email: 'alina_kamenskih@somebox.com',
      city: 'Kazan'
    }
  },
  {
    _uniqueId: 'bcf2d88e-f75e-44bf-81c8-3b7681fa8823',
    group: 'Teamleads',
    fullname: 'Zoja Panchenko',
    salary: 359000,
    isTrainee: false,
    dateHired: '2024-01-15T17:14:54.946Z',
    datetime: '2024-01-15T17:14:54.946Z',
    ip: 0,
    details: {
      email: 'zoja_panchenko@somebox.com',
      city: 'Saint-Petersburg'
    }
  },
  {
    _uniqueId: '866f10d5-7a6d-4743-9118-c8899720f68d',
    group: 'Developers',
    fullname: 'Roman Tsvetkov',
    salary: 490100,
    isTrainee: false,
    dateHired: '2024-11-12T20:43:14.048Z',
    datetime: '2024-11-12T20:43:14.048Z',
    ip: 4294967295,
    details: {
      email: 'roman_tsvetkov@somebox.com',
      city: 'Samara'
    }
  },
  {
    _uniqueId: 'e9e7599f-316b-435e-832a-4db6ad5ac8fb',
    group: 'Teamleads',
    fullname: 'Egor Vorobev',
    salary: 324900,
    isTrainee: false,
    dateHired: '2023-03-05T12:01:36.576Z',
    datetime: '2023-03-05T12:01:36.576Z',
    ip: 0,
    details: {
      email: 'egor_vorobev@somebox.com',
      city: 'Krasnodar'
    }
  },
  {
    _uniqueId: 'cb1bb7dd-3b92-4500-a8e0-a69670145a79',
    group: 'Unmanaged',
    fullname: 'Kirill Krylov',
    salary: 242500,
    isTrainee: true,
    dateHired: '2023-04-01T08:53:25.772Z',
    datetime: '2023-04-01T08:53:25.772Z',
    ip: 0,
    details: {
      email: 'kirill_krylov@somebox.com',
      city: 'Nizhniy Novgorod'
    }
  },
  {
    _uniqueId: 'b4689e63-73e5-41b3-973f-49c1487c5668',
    group: 'CEO',
    fullname: 'Zhanna Oblomova',
    salary: 406400,
    isTrainee: true,
    dateHired: '2024-10-13T22:48:30.178Z',
    datetime: '2024-10-13T22:48:30.178Z',
    ip: 4294967295,
    details: {
      email: 'zhanna_oblomova@somebox.com',
      city: 'Krasnoyarsk'
    }
  },
  {
    _uniqueId: 'a6a734a9-47c9-41a1-8148-935cf17c85be',
    group: 'Managers',
    fullname: 'Anna Oblomova',
    salary: 451900,
    isTrainee: false,
    dateHired: '2024-02-24T02:38:16.222Z',
    datetime: '2024-02-24T02:38:16.222Z',
    ip: 0,
    details: {
      email: 'anna_oblomova@somebox.com',
      city: 'Volgograd'
    }
  },
  {
    _uniqueId: '8aba70bf-d75b-4870-9f2e-eee4bc7abb9d',
    group: 'CEO',
    fullname: 'Mihail Grigorev',
    salary: 141400,
    isTrainee: false,
    dateHired: '2024-10-31T18:23:33.095Z',
    datetime: '2024-10-31T18:23:33.095Z',
    ip: 0,
    details: {
      email: 'mihail_grigorev@somebox.com',
      city: 'Krasnoyarsk'
    }
  },
  {
    _uniqueId: '14e9e51b-0999-4fe3-a714-f4da04bc8629',
    group: 'Teamleads',
    fullname: 'Ilja Kozlov',
    salary: 494400,
    isTrainee: true,
    dateHired: '2024-12-20T10:34:31.208Z',
    datetime: '2024-12-20T10:34:31.208Z',
    ip: 0,
    details: {
      email: 'ilja_kozlov@somebox.com',
      city: 'Voronezh'
    }
  },
  {
    _uniqueId: '81cb540d-e09e-4ec9-9c13-948d38224d7b',
    group: 'Managers',
    fullname: 'Eva Lebedeva',
    salary: 440900,
    isTrainee: false,
    dateHired: '2023-01-07T10:50:20.266Z',
    datetime: '2023-01-07T10:50:20.266Z',
    ip: 0,
    details: {
      email: 'eva_lebedeva@somebox.com',
      city: 'Voronezh'
    }
  },
  {
    _uniqueId: '6bdeca35-9373-4151-acbd-823339c5d391',
    group: 'Developers',
    fullname: 'Evgenija Shevchenko',
    salary: 370000,
    isTrainee: false,
    dateHired: '2023-07-14T00:19:03.703Z',
    datetime: '2023-07-14T00:19:03.703Z',
    ip: 4294967295,
    details: {
      email: 'evgenija_shevchenko@somebox.com',
      city: 'Rostov'
    }
  },
  {
    _uniqueId: 'bdf34e5e-7a57-4a68-ba8d-7b83d7d8fb90',
    group: 'CEO',
    fullname: 'Matvej Grigorev',
    salary: 455900,
    isTrainee: true,
    dateHired: '2023-08-19T03:31:24.893Z',
    datetime: '2023-08-19T03:31:24.893Z',
    ip: 4294967295,
    details: {
      email: 'matvej_grigorev@somebox.com',
      city: 'Ufa'
    }
  },
  {
    _uniqueId: '5915e1ef-7fc5-45a6-bb6c-9306a2983fa9',
    group: 'Teamleads',
    fullname: 'Denis Popov',
    salary: 145000,
    isTrainee: true,
    dateHired: '2023-08-03T04:40:22.096Z',
    datetime: '2023-08-03T04:40:22.096Z',
    ip: 0,
    details: {
      email: 'denis_popov@somebox.com',
      city: 'Chelyabinsk'
    }
  }
].map(row => ({ ...row, key: row._uniqueId, dateHired: row.dateHired.split('T')[0] })) as MockRow[]
