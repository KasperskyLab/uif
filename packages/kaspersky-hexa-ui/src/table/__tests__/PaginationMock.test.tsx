import { Pagination, PaginationProps } from '@src/pagination'

import { generatedData, tableColumns } from '../__mocks__/filtersMockData'
import { getTotalRowCount } from '../helpers/getTotalRowCount'
import { TableTestingClass } from '../test-utils/TableTestingClass'

jest.mock('@src/pagination', () => {
  return {
    Pagination: jest.fn(() => null)
  }
})

const rowsCount = getTotalRowCount(generatedData)

const getPaginationParamsToCheck = (propsToCheck: Partial<PaginationProps>) => {
  return {
    props: expect.objectContaining<PaginationProps>(propsToCheck),
    context: expect.anything()
  }
}

const defaultProps = {
  columns: tableColumns,
  dataSource: generatedData
}

describe('Table pagination module', () => {
  it('should render by default', () => {
    const table = TableTestingClass.render(defaultProps)
    expect(table.pagination.getRoot()).toBeInTheDocument()
  })

  it('should not render if it is disabled', () => {
    const table = TableTestingClass.render({ ...defaultProps, pagination: false })
    expect(table.pagination.getRoot()).not.toBeInTheDocument()
  })

  describe('when called Pagination component', () => {
    it('should set correct default props', () => {
      TableTestingClass.render(defaultProps)

      const { props, context } = getPaginationParamsToCheck({
        simple: false,
        showSelected: false,
        total: rowsCount
      })
      expect(Pagination).toHaveBeenCalledWith(props, context)
    })

    it('should set prop \'simple\' to true if it is specified in config', () => {
      TableTestingClass.render({ ...defaultProps, pagination: { simple: true } })

      const { props, context } = getPaginationParamsToCheck({
        simple: true
      })
      expect(Pagination).toHaveBeenCalledWith(props, context)
    })

    it('should set prop \'showSelected\' to true if selection is possible', () => {
      TableTestingClass.render({ ...defaultProps, rowSelection: {} })

      const { props, context } = getPaginationParamsToCheck({
        showSelected: true
      })
      expect(Pagination).toHaveBeenCalledWith(props, context)
    })

    it('should set prop \'showSizeChanger\' to true if it is specified in config', () => {
      TableTestingClass.render({ ...defaultProps, pagination: { showSizeChanger: true } })

      const { props, context } = getPaginationParamsToCheck({
        showSizeChanger: true
      })
      expect(Pagination).toHaveBeenCalledWith(props, context)
    })

    it('should set prop \'showSizeChanger\' to false if pagination is simple', () => {
      TableTestingClass.render({ ...defaultProps, pagination: { simple: true, showSizeChanger: true } })

      const { props, context } = getPaginationParamsToCheck({
        simple: true,
        showSizeChanger: false
      })
      expect(Pagination).toHaveBeenCalledWith(props, context)
    })
  })
})
