import { ConfigProvider } from '@design-system/context'
import { ThemeKey } from '@design-system/types'
import { fireEvent, render, screen } from '@testing-library/react'
import { TFunction } from 'i18next'
import React from 'react'
import { act } from 'react-test-renderer'

import { getPageSizeOptions, Pagination } from '../Pagination'
import { PaginationProps } from '../types'

const defaultProps = {
  klId: 'test-pagination',
  defaultCurrent: 1,
  onChange: () => undefined,
  testId: 'test-pagination',
  total: 500
}

const getByComponentId = (container: HTMLElement, testId = defaultProps.testId) => container.querySelector(
  `[data-testid="${testId}"]`
)

const DefaultPagination = (props: PaginationProps) => (
  <ConfigProvider theme={ThemeKey.Light} locale="en-us">
    <Pagination {...defaultProps} {...props} />
  </ConfigProvider>
)

const getSummaryRegex = (total: number) => new RegExp(`total ${total} / selected 0`, 'i')

describe('Pagination', () => {
  test('should render', () => {
    const { container } = render(<DefaultPagination />)

    expect(getByComponentId(container)).toBeInTheDocument()
    expect(container.querySelector(`[data-testid="${defaultProps.testId}"]`)).toBeInTheDocument()
  })

  test('should correctly set current value', () => {
    const current = 2
    const { container } = render(<DefaultPagination current={current} />)

    const activeItem = getByComponentId(container)
      ?.querySelectorAll('.ant-pagination-item')
      ?.[current - 1]

    expect(activeItem).toHaveClass('ant-pagination-item-active')
  })

  test('should correctly set pageSize', () => {
    const total = 40
    const pageSize = 10
    const numberOfPages = Math.ceil(total / pageSize)

    const { container } = render(<DefaultPagination total={total} pageSize={pageSize} />)

    const pages = getByComponentId(container)
      ?.querySelectorAll('.ant-pagination-item')

    expect(pages?.length).toBe(numberOfPages)
  })

  test('should be disabled with disabled true', () => {
    const { container } = render(<DefaultPagination disabled />)
    expect(getByComponentId(container)).toHaveAttribute('aria-disabled', 'true')
  })

  test('should hide paged with hideOnSinglePage true', () => {
    const total = 10
    const pageSize = 100
    const { container } = render(<DefaultPagination total={total} pageSize={pageSize} hideOnSinglePage />)

    expect(container.querySelector('.ant-pagination')).not.toBeInTheDocument()
  })

  test('should correctly set pageSizeOptions', async () => {
    const pageSizeOptions = ['10', '20']
    const { container } = render(<DefaultPagination pageSizeOptions={pageSizeOptions} showSizeChanger />)

    act(() => {
      const select = container.querySelector('[data-testid="select"]')?.firstElementChild
      if (select) {
        fireEvent.mouseDown(select)
      }
    })
    const options = container.querySelectorAll('.ant-select-item') || []
    const optionsContent = Array.from(options).map(({ textContent }) => textContent)

    const t = () => 'page'

    expect(optionsContent)
      .toStrictEqual(
        getPageSizeOptions(t as unknown as TFunction<'translation', undefined>, pageSizeOptions).map(({ label }) => label)
      )
  })

  test('should show select with showSizeChanger true', () => {
    const { container } = render(<DefaultPagination showSizeChanger />)

    expect(container.querySelector('[data-testid="select"]')).toBeInTheDocument()
  })

  test('should correctly show total number of elements', () => {
    const total = 1000
    const { container } = render(<DefaultPagination total={total} />)

    const totalContainer = container.querySelector('[data-testid="total"]')
    expect(totalContainer?.textContent?.includes(total.toString())).toBeTruthy()
  })

  test('should call onChange when the page number is changed', () => {
    const onChange = jest.fn()
    const { container } = render(<DefaultPagination onChange={onChange} />)

    const secondPage = getByComponentId(container)
      ?.querySelectorAll('.ant-pagination-item')?.[1] as HTMLDivElement

    secondPage.click()

    expect(onChange).toHaveBeenCalledTimes(1)
  })

  test('should call onShowSizeChange when the page', () => {
    const onShowSizeChange = jest.fn()
    const { container } = render(<DefaultPagination showSizeChanger onShowSizeChange={onShowSizeChange} />)

    act(() => {
      const select = container.querySelector('[data-testid="select"]')?.firstElementChild
      if (select) {
        fireEvent.mouseDown(select)
      }
    })
    const secondOption = container.querySelectorAll('.ant-select-item')?.[1] as HTMLDivElement
    secondOption.click()

    expect(onShowSizeChange).toHaveBeenCalledTimes(1)
  })

  test('should render summary by default', () => {
    const total = 10
    render(<DefaultPagination total={total}/>)
    expect(screen.getByText(getSummaryRegex(total))).toBeInTheDocument()
  })

  test('should not render summary if it is in simple mode', () => {
    const total = 10
    render(<DefaultPagination total={10} simple={true}/>)
    expect(screen.queryByText(getSummaryRegex(total))).not.toBeInTheDocument()
  })

  describe('when rendered summary', () => {
    const total = 100
    const totalRegex = new RegExp(`total ${total}`, 'i')
    const totalAndSelectedRegex = new RegExp(`total ${total} / selected 0`, 'i')

    test('should show selected value by default', () => {
      render(<DefaultPagination total={100}/>)
      expect(screen.getByText(totalAndSelectedRegex)).toBeInTheDocument()
    })

    test('should not show selected value if selection is not possible', () => {
      render(<DefaultPagination total={100} showSelected={false}/>)
      expect(screen.getByText(totalRegex)).toBeInTheDocument()
      expect(screen.queryByText(totalAndSelectedRegex)).not.toBeInTheDocument()
    })
  })

  // Codium AI
  it('should handle case when total is 0', () => {
    const total = 0
    const { container } = render(<DefaultPagination total={total} />)
    const totalContainer = container.querySelector('[data-testid="total"]')

    expect(totalContainer?.textContent).toContain(`Total ${total} / Selected ${total}`)
  })

  it('should handle case when pageSizeOptions is an empty array', () => {
    const pageSizeOptions: any[] = []
    const { container } = render(<DefaultPagination pageSizeOptions={pageSizeOptions} showSizeChanger />)
    act(() => {
      const select = container.querySelector('[data-testid="select"]')?.firstElementChild
      if (select) {
        fireEvent.mouseDown(select)
      }
    })
    const options = container.querySelectorAll('.ant-select-item')
    expect(options.length).toBe(0)
  })
})
