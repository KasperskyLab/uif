import React from 'react'

import { Grid as HexaGrid } from '@src/grid'
import { GridProps } from '@src/grid/types'

const Grid = ({ children, ...props }: GridProps): JSX.Element => (
  <HexaGrid {...props}>
    {children ?? (
      <>
        <HexaGrid.Item span={6}>
          <div style={{ padding: 16, borderRadius: 12, background: 'rgba(0, 0, 0, 0.04)' }}>
            Column 1
          </div>
        </HexaGrid.Item>
        <HexaGrid.Item span={6}>
          <div style={{ padding: 16, borderRadius: 12, background: 'rgba(0, 0, 0, 0.04)' }}>
            Column 2
          </div>
        </HexaGrid.Item>
      </>
    )}
  </HexaGrid>
)

export default Grid
