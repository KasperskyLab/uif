import { Pagination, PaginationProps } from '@src/pagination'
import { render } from '@testing-library/react'
import React from 'react'

import { rowsCount, Table } from '../test-utils/shared'

jest.mock('@src/pagination', () => {
  return {
    Pagination: jest.fn(() => null)
  }
})

const getPaginationParamsToCheck = (propsToCheck: Partial<PaginationProps>) => {
  return {
    props: expect.objectContaining<PaginationProps>(propsToCheck),
    context: expect.anything()
  }
}

describe('Table pagination module', () => {
  const klId = 'table-pagination'

  it('should render by default', () => {
    const { container } = render(<Table />)
    expect(container.querySelector(`[kl-id="${klId}"]`)).toBeInTheDocument()
  })

  it('should not render if it is disabled', () => {
    const { container } = render(<Table pagination={false} />)
    expect(
      container.querySelector(`[kl-id="${klId}"]`)
    ).not.toBeInTheDocument()
  })

  describe('when called Pagination component', () => {
    it('should set correct default props', () => {
      render(<Table />)

      const { props, context } = getPaginationParamsToCheck({
        simple: false,
        showSelected: false,
        total: rowsCount
      })
      expect(Pagination).toHaveBeenCalledWith(props, context)
    })

    it('should set prop \'simple\' to true if it is specified in config', () => {
      render(<Table pagination={{ simple: true }}/>)

      const { props, context } = getPaginationParamsToCheck({
        simple: true
      })
      expect(Pagination).toHaveBeenCalledWith(props, context)
    })

    it('should set prop \'showSelected\' to true if selection is possible', () => {
      render(<Table rowSelection={{}}/>)

      const { props, context } = getPaginationParamsToCheck({
        showSelected: true
      })
      expect(Pagination).toHaveBeenCalledWith(props, context)
    })

    it('should set prop \'showSizeChanger\' to true if it is specified in config', () => {
      render(<Table pagination={{ showSizeChanger: true }}/>)

      const { props, context } = getPaginationParamsToCheck({
        showSizeChanger: true
      })
      expect(Pagination).toHaveBeenCalledWith(props, context)
    })

    it('should set prop \'showSizeChanger\' to false if pagination is simple', () => {
      render(<Table pagination={{ simple: true, showSizeChanger: true }}/>)

      const { props, context } = getPaginationParamsToCheck({
        simple: true,
        showSizeChanger: false
      })
      expect(Pagination).toHaveBeenCalledWith(props, context)
    })
  })
})
