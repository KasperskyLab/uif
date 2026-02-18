import { Pagination } from '@src/pagination'
import { Text } from '@src/typography'
import { Empty } from 'antd'
import React, {
  useCallback,
  useEffect,
  useState
} from 'react'
import styled from 'styled-components'

import { PerPage } from '../../types'

const ListContainer = styled.div`
  display: flex;
  width: min-content;
  flex-direction: column;
  gap: 12px;
`

const PaginationWrapper = styled.div`
  display: flex;
  width: 100%;
  min-width: max-content;
  justify-content: center;
`

type GalleryPaginationProviderProps<T> = {
  children: (screensOnPage: T[]) => React.ReactNode,
  screensList: T[],
  perPage: PerPage,
  noDataText?: string,
  hasConditionalPaging: boolean
}

export function GalleryPaginationProvider<T> ({
  children,
  screensList,
  perPage,
  noDataText,
  hasConditionalPaging
}: GalleryPaginationProviderProps<T>) {
  const calcScreensOnPage = useCallback((page: number) => {
    const startIndex = (page - 1) * perPage
    const endIndex = page * perPage
    return screensList.slice(startIndex, endIndex)
  }, [screensList, perPage])

  const [page, setPage] = useState(1)
  const [screensOnPage, setScreensOnPage] = useState(calcScreensOnPage(page))

  useEffect(() => {
    setScreensOnPage(calcScreensOnPage(page))
  }, [calcScreensOnPage, page])

  const handlePageChange = useCallback((newPage: number) => {
    setPage(newPage)
  }, [setPage])

  const isEmpty = screensOnPage.length === 0
  const isPaginationHidden = hasConditionalPaging && screensList.length <= perPage

  return (
    <ListContainer>
      {children(screensOnPage)}
      {isEmpty && <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description={(
          <Text
            type="BTR4"
            themedColor="primary"
          >
            {noDataText}
          </Text>
        )}
      />}

      {!isPaginationHidden && <PaginationWrapper>
        <Pagination
          current={page}
          pageSize={perPage}
          total={screensList.length}
          simple
          onChange={handlePageChange}
        />
      </PaginationWrapper>}
    </ListContainer>
  )
}
