import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { act } from 'react-test-renderer'
import { ConfigProvider } from '../../../design-system/context/provider/ConfigProvider'
import { ThemeKey } from '../../../design-system/types/ThemeKey'
import { getPageSizeOptions, Pagination } from '../Pagination'
import { IPaginationProps } from '../types'

const defaultProps = {
  klId: 'test-pagination',
  defaultCurrent: 1,
  total: 500
}

const getByComponentId = (container: HTMLElement, klId = defaultProps.klId) => container.querySelector(
  `[data-component-id="${klId}"]`
)

const DefaultPagination = (props: IPaginationProps) => (
  <ConfigProvider theme={ThemeKey.Light} locale='en'>
    <Pagination {...defaultProps} {...props} />
  </ConfigProvider>
)

describe('Pagination', () => {
  /**
   * Antd Pagination uses window.watchMedia, we need to mock it
   */
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
      }))
    })
  })

  test('should render', () => {
    const { container } = render(<DefaultPagination />)
    expect(getByComponentId(container)).toBeInTheDocument()
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

  test('should correctly set defaultPageSize', () => {
    const total = 40
    const defaultPageSize = 10
    const numberOfPages = Math.ceil(total / defaultPageSize)

    const { container } = render(<DefaultPagination total={total} defaultPageSize={defaultPageSize} />)

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

    expect(getByComponentId(container)).not.toBeInTheDocument()
  })

  test('should correctly set pageSizeOptions', async () => {
    const pageSizeOptions = ['10', '20']
    const { container } = render(<DefaultPagination pageSizeOptions={pageSizeOptions} showSizeChanger />)

    act(() => {
      const select = getByComponentId(container, 'select')?.firstElementChild
      if (select) {
        fireEvent.mouseDown(select)
      }
    })
    const options = container.querySelectorAll('.ant-select-item') || []
    const optionsContent = Array.from(options).map(({ textContent }) => textContent)

    const t = () => 'page'

    expect(optionsContent)
      .toStrictEqual(
        getPageSizeOptions(t, pageSizeOptions).map(({ label }) => label)
      )
  })

  test('should show quick jumper with showQuickJumper true', () => {
    const { container } = render(<DefaultPagination showQuickJumper />)

    expect(getByComponentId(container, 'jumper')).toBeInTheDocument()
  })

  test('should show select with showSizeChanger true', () => {
    const { container } = render(<DefaultPagination showSizeChanger />)

    expect(getByComponentId(container, 'select')).toBeInTheDocument()
  })

  test('should show total with showTotal true', () => {
    const { container } = render(<DefaultPagination showTotal />)

    expect(getByComponentId(container, 'total')).toBeInTheDocument()
  })

  test('should correctly show total number of elements', () => {
    const total = 1000
    const { container } = render(<DefaultPagination showTotal total={total} />)

    const totalContainer = getByComponentId(container, 'total')
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
      const select = getByComponentId(container, 'select')?.firstElementChild
      if (select) {
        fireEvent.mouseDown(select)
      }
    })
    const secondOption = container.querySelectorAll('.ant-select-item')?.[1] as HTMLDivElement
    secondOption.click()

    expect(onShowSizeChange).toHaveBeenCalledTimes(1)
  })
})
