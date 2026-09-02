import { render } from '@testing-library/react'
import React from 'react'

import { generatedData, tableColumns } from '../__mocks__/filtersMockData'
import { STICKY_HEADER_CLASS, StickyHeaderWrapper } from '../helpers/stickyHeader'
import { TableTestingClass } from '../test-utils/TableTestingClass'

describe('Table StickyHeader', () => {
  it('removes the sticky-header portal table on unmount', () => {
    const table = TableTestingClass.render({ columns: tableColumns, dataSource: generatedData, stickyHeader: 0 })

    const stickyHost = table.query(`.${STICKY_HEADER_CLASS} .ant-table`) as HTMLElement
    const portalTable = stickyHost?.querySelector('table')

    expect(portalTable).toBeTruthy()
    expect(portalTable!.parentNode).toBe(stickyHost)

    table.unmount()

    expect(portalTable!.parentNode).toBeNull()
  })

  it('creates the portal table only once across re-renders', () => {
    const createElementSpy = jest.spyOn(document, 'createElement')

    try {
      const ui = (
        <StickyHeaderWrapper className="sticky-thead">
          <tr><th>col</th></tr>
        </StickyHeaderWrapper>
      )
      const { rerender } = render(ui)
      rerender(ui)
      rerender(ui)

      const tableCreations = createElementSpy.mock.calls.filter(([tag]) => tag === 'table')
      expect(tableCreations).toHaveLength(1)
    } finally {
      createElementSpy.mockRestore()
    }
  })
})
