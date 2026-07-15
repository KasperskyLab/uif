import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'

import { TablePaginationProps, TableRecord } from '../../types'
import { useVT } from '../../virtualizedtableforantd4'

type PageData = {
  page: number
  data: TableRecord[]
}

type DataWindow = {
  prev?: PageData,
  current?: PageData,
  next?: PageData
}

const useInfiniteScrollPageGetter = ({ infiniteScrollPageGetter }: Required<Pick<TablePaginationProps, 'infiniteScrollPageGetter'>>) => (
  useCallback(async (page: number) => {
    const result = infiniteScrollPageGetter(page)

    if (result === null) {
      return []
    }

    if (!(result instanceof Promise)) {
      return result
    }

    try {
      return await result ?? []
    } catch (error) {
      console.error(`Error fetching page ${page}:`, error)
      throw error
    }
  }, [infiniteScrollPageGetter])
)

export const useVirtualInfiniteScroll = <T extends TableRecord = TableRecord>({
  virtualInfiniteScroll,
  pageSize,
  rowHeight,
  tableBodyHeight,
  infiniteScrollPageGetter,
  total
}: Pick<
  TablePaginationProps<T>,
  'pageSize' |
  'rowHeight' |
  'tableBodyHeight' |
  'infiniteScrollPageGetter' |
  'virtualInfiniteScroll' |
  'total'
>) => {
  if (
    !total ||
    !virtualInfiniteScroll ||
    !pageSize ||
    !rowHeight ||
    !tableBodyHeight ||
    !infiniteScrollPageGetter
  ) return

  const [dataWindow, setDataWindow] = useState<DataWindow>()

  const [page, setPage] = useState<number>(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const isProgramScroll = useRef(false)
  const hardReset = useRef(false)

  const pageGetter = useInfiniteScrollPageGetter({ infiniteScrollPageGetter })

  const totalPages = Math.ceil(total / pageSize)

  const dataSource = useMemo(() => (
    [
      ...(Array.from({ length: (page - 2) * pageSize }, () => ({})) ?? []),
      ...(dataWindow?.prev?.data ?? []),
      ...(dataWindow?.current?.data ?? []),
      ...(dataWindow?.next?.data ?? [])
    ] as T[]
  ), [dataWindow, pageSize])

  const loadPage = useCallback(async (newPage: number, totalPages: number) => {
    if ((newPage - 1) * pageSize >= total) return
    if (loading) return

    const shouldResetAll = hardReset.current
    if (hardReset.current) {
      hardReset.current = false
    }

    setLoading(true)
    setError(null)

    try {
      const requiredPages = [newPage - 1, newPage, newPage + 1].filter(p => p >= 1 && p <= totalPages)

      const loaded = new Map<number, any[]>()
      Object.values(dataWindow || {}).forEach(p => {
        if (p) loaded.set(p.page, p.data)
      })

      const missingPages = shouldResetAll ? [...requiredPages] : requiredPages.filter(page => !loaded.has(page))

      if (missingPages.length === 0) {
        updateWindowFromMap(loaded, newPage, totalPages)
        return
      }

      const results = await Promise.all(
        missingPages.map(async page => {
          const data = await pageGetter(page)
          return { page, data }
        })
      )

      if (!results.every(result => result.data.length > 0)) return

      const newLoaded = new Map(loaded)
      results.forEach((result, i) => { newLoaded.set(missingPages[i], result.data) })

      updateWindowFromMap(newLoaded, newPage, totalPages)
    } catch (error) {
      console.error('Error:', error)
      setError(error instanceof Error ? error : new Error(String(error)))
    } finally {
      setLoading(false)
    }
  }, [dataWindow, loading, pageGetter])

  const updateWindowFromMap = (
    loaded: Map<number, any[]>,
    newPage: number,
    totalPages: number
  ) => {
    const getPageData = (page: number) => {
      const data = loaded.get(page)
      return data ? { page, data } : undefined
    }

    setDataWindow({
      prev: newPage - 1 >= 1 ? getPageData(newPage - 1) : undefined,
      current: getPageData(newPage),
      next: newPage + 1 <= totalPages ? getPageData(newPage + 1) : undefined
    })
  }

  useEffect(() => {
    setLoading(false)
    hardReset.current = true
    isProgramScroll.current = true
    setPage(1)
  }, [pageGetter])

  useEffect(() => {
    loadPage(page, totalPages)
      .then(() => {
        if (isProgramScroll.current) {
          vtRef.current.scrollTo((page - 1) * rowHeight * pageSize)
        }
      })
  }, [page, pageGetter])

  const [vt, , vtRef] = useVT(() => ({
    onScroll: async ({ top }) => {
      if (isProgramScroll.current) {
        isProgramScroll.current = false
        return
      }

      const pageHeight = rowHeight * pageSize
      const middlePosition = top + tableBodyHeight / 2
      const currentPage = Math.round(middlePosition / pageHeight)
      const newPage = Math.min(Math.max(currentPage, 1), totalPages)

      if (newPage !== page) {
        setPage(newPage)
      }
    },
    scroll: { y: tableBodyHeight }
  }), [page, rowHeight, pageSize, tableBodyHeight, totalPages])

  const handlePaginationChange = useCallback(async (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || newPage === page) {
      return
    }

    setPage(newPage)
    isProgramScroll.current = true
  }, [page, pageSize, totalPages, rowHeight, vtRef])

  return {
    dataSource,
    error,
    loading,
    vt,
    vtRef,
    pagination: {
      current: page,
      onChange: handlePaginationChange
    }
  }
}
