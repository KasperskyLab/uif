import { useTestAttribute } from '@helpers/index'
import { useVirtualizer } from '@tanstack/react-virtual'
import cn from 'classnames'
import React, { useMemo, useRef } from 'react'
import styled from 'styled-components'

import { BYTES_HEADER, OVERSCAN_DEFAULT, ROW_HEIGHT } from './constants'
import { GridViewRow } from './GridViewRow'
import { hexadecimalViewCss, prefixClass } from './hexadecimalViewCss'
import { HexadecimalViewProps } from './types'
import { bufferToView } from './utils/bufferToView'
import { useRowWidth } from './utils/useRowWidth'

const StyledHexadecimalView = styled.div`
  ${hexadecimalViewCss}
`

export const HexadecimalView: React.FC<HexadecimalViewProps> = ({ content, overscan, className, ...props }) => {
  const { testAttributes } = useTestAttribute(props)
  const tableRef = useRef<HTMLDivElement>(null)
  const bytesPerRow = useRowWidth(tableRef)
  const { rows } = useMemo(() => {
    return bufferToView(content, bytesPerRow)
  }, [content, bytesPerRow])
  const header = useMemo(() => {
    return BYTES_HEADER.slice(0, bytesPerRow)
  }, [bytesPerRow])

  const { getTotalSize, getVirtualItems } = useVirtualizer({
    count: rows.length,
    getScrollElement: () => tableRef.current,
    estimateSize: () => ROW_HEIGHT,
    overscan: overscan ?? OVERSCAN_DEFAULT
  })

  return (
    <StyledHexadecimalView className={cn(className, prefixClass)} {...props} {...testAttributes}>
      <div className={cn(`${prefixClass}-grid-row`, `${prefixClass}-header-row`)}>
        <span />
        <div style={{ '--bytes-per-row': bytesPerRow }} className={`${prefixClass}-symbols-row`}>
          {header.map((byte, idx) => (
            <span key={`${byte}-${idx}`}>{byte}</span>
          ))}
        </div>
        <span className={`${prefixClass}-text-title`}>decoded text</span>
      </div>
      <div className={`${prefixClass}-view-table-virtual`} ref={tableRef}>
        <div style={{ height: `${getTotalSize()}px` }} className={`${prefixClass}-view-table`}>
          {getVirtualItems().map((row) => {
            return (
              <GridViewRow
                {...rows[row.index]}
                offsetTop={row.start}
                key={row.key}
                bytesPerRow={bytesPerRow}
                testId={testAttributes['data-testid']!}
              />
            )
          })}
        </div>
      </div>
    </StyledHexadecimalView>
  )
}
