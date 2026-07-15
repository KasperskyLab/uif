import { waitFor } from '@testing-library/react'
import { act, renderHook } from '@testing-library/react-hooks/dom'

import { useVirtualInfiniteScroll } from '../modules/hooks/useVirtualInfiniteScroll'
import { useVT } from '../virtualizedtableforantd4'

jest.mock('../virtualizedtableforantd4', () => ({
  useVT: jest.fn()
}))

const mockUseVT = useVT as jest.MockedFunction<typeof useVT>

describe('useVirtualInfiniteScroll', () => {
  const defaultProps = {
    virtualInfiniteScroll: true,
    pageSize: 10,
    rowHeight: 30,
    tableBodyHeight: 500,
    total: 50
  }

  const mockVtRef = { current: { scrollTo: jest.fn() } }
  const mockVt = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    // @ts-expect-error было неохота ради тестов заниматься сложными типами
    mockUseVT.mockImplementation(() => ([mockVt, null, mockVtRef]))
  })

  it('should reset and reload data when infiniteScrollPageGetter changes', async () => {
    const initialGetter = jest.fn().mockResolvedValue(Array.from({ length: 10 }, (_, i) => ({ key: `initial-${i}` })))
    const newGetter = jest.fn().mockResolvedValue(Array.from({ length: 10 }, (_, i) => ({ key: `new-${i}` })))

    const { result, rerender } = renderHook(
      ({ props }) => useVirtualInfiniteScroll(props),
      { initialProps: { props: { ...defaultProps, infiniteScrollPageGetter: initialGetter } } }
    )

    await waitFor(() => {
      expect(result.current?.dataSource).toHaveLength(20)
      expect(result.current?.dataSource[0].key).toBe('initial-0')
    })
    expect(initialGetter).toHaveBeenCalled()
    expect(initialGetter).toHaveBeenCalledWith(1)

    rerender({ props: { ...defaultProps, infiniteScrollPageGetter: newGetter } })

    await waitFor(() => {
      expect(result.current?.dataSource).toHaveLength(20)
      expect(result.current?.dataSource[0].key).toBe('new-0')
    })
    expect(newGetter).toHaveBeenCalled()
    expect(newGetter).toHaveBeenCalledWith(1)
  })

  it('should reset and reload when total changes', async () => {
    const getter = jest.fn().mockResolvedValue(Array.from({ length: 10 }, (_, i) => ({ key: `item-${i}` })))

    const { result, rerender } = renderHook(
      ({ props }) => useVirtualInfiniteScroll(props),
      { initialProps: { props: { ...defaultProps, infiniteScrollPageGetter: getter, total: 50 } } }
    )

    await waitFor(() => {
      expect(result.current?.dataSource).toHaveLength(20)
    })
    expect(getter).toHaveBeenCalled()
    expect(getter).toHaveBeenCalledWith(1)

    rerender({ props: { ...defaultProps, infiniteScrollPageGetter: getter, total: 30 } })

    await waitFor(() => {
      expect(result.current?.dataSource).toHaveLength(20)
    })
    expect(getter).toHaveBeenCalled()
    expect(getter).toHaveBeenCalledWith(1)
  })

  it('should handle pagination change correctly after infiniteScrollPageGetter update', async () => {
    const initialGetter = jest.fn().mockResolvedValue(Array.from({ length: 10 }, (_, i) => ({ key: `initial-${i}` })))
    const newGetter = jest.fn().mockResolvedValue(Array.from({ length: 10 }, (_, i) => ({ key: `new-${i}` })))

    const { result, rerender } = renderHook(
      ({ props }) => useVirtualInfiniteScroll(props),
      { initialProps: { props: { ...defaultProps, infiniteScrollPageGetter: initialGetter } } }
    )

    await waitFor(() => {
      expect(result.current?.dataSource).toHaveLength(20)
      expect(result.current?.dataSource[0].key).toBe('initial-0')
    })

    rerender({ props: { ...defaultProps, infiniteScrollPageGetter: newGetter } })
    await waitFor(() => {
      expect(result.current?.dataSource).toHaveLength(20)
      expect(result.current?.dataSource[0].key).toBe('new-0')
    })

    await act(async () => {
      await result.current?.pagination.onChange(2)
    })

    await waitFor(() => {
      expect(result.current?.dataSource).toHaveLength(30)
      expect(result.current?.dataSource[0].key).toBe('new-0')
    })
    expect(newGetter).toHaveBeenCalled()
    expect(newGetter).toHaveBeenCalledWith(1)
  })
})
