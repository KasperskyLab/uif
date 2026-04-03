import React from 'react'

import { Terminal as HexaTerminal } from '@src/terminal'
import { TerminalProps } from '@src/terminal/types'

import { createPreviewTerminalAddons, PreviewSurface } from '../../preview'

const Terminal = ({
  customAddons,
  dataTransferAddon,
  style,
  ...props
}: TerminalProps): JSX.Element => {
  const previewAddons = React.useMemo(() => createPreviewTerminalAddons(), [])

  return (
    <PreviewSurface minHeight={260} style={{ padding: 0, overflow: 'hidden' }}>
      <HexaTerminal
        customAddons={customAddons ?? previewAddons.customAddons}
        dataTransferAddon={dataTransferAddon ?? previewAddons.dataTransferAddon}
        style={{ height: 260, ...style }}
        {...props}
      />
    </PreviewSurface>
  )
}

export default Terminal
