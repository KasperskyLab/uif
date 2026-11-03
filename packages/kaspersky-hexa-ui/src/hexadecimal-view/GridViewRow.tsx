import cn from 'classnames'
import React, { FC } from 'react'

import { prefixClass } from './hexadecimalViewCss'
import { ViewRow } from './types'

interface GridViewRowProps extends ViewRow {
  offsetTop: number;
  bytesPerRow: number;
  testId: string;
}

export const GridViewRow: FC<GridViewRowProps> = ({ addr, hex, decoded, offsetTop, bytesPerRow, testId }) => {
  return (
    <div style={{ transform: `translateY(${offsetTop}px)` }} className={`${prefixClass}-grid-row`}>
      <span className={`${prefixClass}-address`}>{addr}</span>
      <div
        style={{
          '--bytes-per-row': bytesPerRow
        }}
        className={`${prefixClass}-symbols-row`}
        data-testid={`hexadecimal-hex-row-${testId}`}
      >
        {hex.map((hexVal, idx) => (
          <span key={`${hexVal}-${idx}`}>{hexVal}</span>
        ))}
      </div>
      <div
        style={{
          '--bytes-per-row': bytesPerRow
        }}
        className={cn(`${prefixClass}-symbols-row`, `${prefixClass}-decoded-text`)}
        data-testid={`hexadecimal-unicode-row-${testId}`}
      >
        {decoded.map((unicodeSymbol, idx) => (
          <span key={`${unicodeSymbol}-${idx}`}>{unicodeSymbol}</span>
        ))}
      </div>
    </div>
  )
}
