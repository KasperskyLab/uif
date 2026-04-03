import React from 'react'

import { Pagination as HexaPagination } from '@src/pagination'
import { PaginationProps } from '@src/pagination/types'

const Pagination = ({
  current,
  onChange,
  pageSize = 10,
  total = 120,
  ...props
}: PaginationProps): JSX.Element => {
  const [previewPage, setPreviewPage] = React.useState(current ?? 1)

  React.useEffect(() => {
    if (current !== undefined) {
      setPreviewPage(current)
    }
  }, [current])

  const resolvedCurrent = current ?? previewPage

  return (
    <HexaPagination
      current={resolvedCurrent}
      onChange={(page, nextPageSize) => {
        if (current === undefined) {
          setPreviewPage(page)
        }
        onChange?.(page, nextPageSize)
      }}
      pageSize={pageSize}
      total={total}
      {...props}
    />
  )
}

export default Pagination
