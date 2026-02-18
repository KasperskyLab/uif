import { ITableProps } from '@src/table'
import { render, screen } from '@testing-library/react'
import React from 'react'

import { generatedData, groups, tableColumns } from '../__mocks__/filtersMockData'
import { Table } from '../test-utils/shared'

const DefaultTable = (props: ITableProps) => (
  <Table
    dataSource={generatedData}
    columns={tableColumns}
    pagination={false}
    groupBy="group"
    {...props}
  />
)

const getGroupTitles = (container: HTMLElement): string[] => {
  const groupTitleElements = container.querySelectorAll('.group-title-row')
  return Array.from(groupTitleElements)
    .map(el => el.textContent)
    .filter((text): text is string => !!text)
}

describe('Groups module', () => {
  it('should render table without groups when groupBy is not provided', () => {
    const { container } = render(<DefaultTable groupBy={undefined} />)

    const tableRows = container.querySelectorAll('.ant-table-row')
    expect(tableRows.length).toBeGreaterThan(0)

    const groupTitleRows = container.querySelectorAll('.group-title-row')
    expect(groupTitleRows.length).toBe(0)
  })

  it('should group rows by specified field', () => {
    const { container } = render(<DefaultTable />)

    const groupTitles = getGroupTitles(container)

    groups.forEach(group => {
      expect(groupTitles).toContain(group)
    })
  })

  it('should render custom group titles when groupTitleRender is provided', () => {
    const customGroupTitleRender = (title: string) => <div kl-id="custom-group-title">{title}</div>

    const { container } = render(<DefaultTable groupTitleRender={customGroupTitleRender} />)

    const customTitles = screen.getAllByTestId('custom-group-title')
    expect(customTitles.length).toBeGreaterThan(0)

    const customTitlesInContainer = container.querySelectorAll('[kl-id="custom-group-title"]')
    expect(customTitlesInContainer.length).toBeGreaterThan(0)
  })

  it('should sort groups alphabetically by default when groupComparer is not provided', () => {
    const { container } = render(<DefaultTable />)

    const displayedGroupTitles = getGroupTitles(container)
    const ascSortedGroups = [...groups].sort()

    displayedGroupTitles.forEach((group, index) => {
      expect(group).toBe(ascSortedGroups[index])
    })
  })

  it('should sort groups using custom comparer', () => {
    const descendingComparer = (valueA: any, valueB: any): number => -valueA.localeCompare(valueB)

    const { container } = render(<DefaultTable customGroupSorter={descendingComparer} />)

    const displayedGroupTitles = getGroupTitles(container)
    const descSortedGroups = [...groups].sort((a, b) => -a.localeCompare(b))

    displayedGroupTitles.forEach((group, index) => {
      expect(group).toBe(descSortedGroups[index])
    })
  })

  it('should handle empty group values with default title', () => {
    const dataWithEmptyValues = [
      ...generatedData,
      {
        _uniqueId: 'empty-group',
        group: '',
        fullname: 'Test User',
        salary: 100000,
        isTrainee: false,
        dateHired: '2024-01-01',
        datetime: '2024-01-01',
        ip: 0,
        details: { email: 'test@test.com', city: 'Moscow' }
      },
      {
        _uniqueId: 'null-group',
        group: null as any,
        fullname: 'Test User 2',
        salary: 100000,
        isTrainee: false,
        dateHired: '2024-01-01',
        datetime: '2024-01-01',
        ip: 0,
        details: { email: 'test2@test.com', city: 'Moscow' }
      }
    ]

    const { container } = render(<DefaultTable dataSource={dataWithEmptyValues} />)

    const groupTitles = getGroupTitles(container)

    expect(groupTitles).toContain('Other')
  })
})
