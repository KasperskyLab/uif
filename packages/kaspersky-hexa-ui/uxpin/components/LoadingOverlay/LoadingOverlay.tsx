import React from 'react'

import { LoadingOverlay as HexaLoadingOverlay } from '@src/loading-overlay'
import { LoadingOverlayProps } from '@src/loading-overlay/types'

import { PreviewSurface } from '../../preview'

const LoadingOverlay = ({
  description = 'Loading data',
  ...props
}: LoadingOverlayProps): JSX.Element => (
  <PreviewSurface minHeight={220}>
    <div style={{ position: 'relative', minHeight: 172 }}>
      <div style={{ padding: 16 }}>Canvas content</div>
      <HexaLoadingOverlay description={description} {...props} />
    </div>
  </PreviewSurface>
)

export default LoadingOverlay
