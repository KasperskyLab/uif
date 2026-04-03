import React from 'react'

import { CodeViewer as HexaCodeViewer } from '@src/code-viewer'
import { CodeViewerProps } from '@src/code-viewer/types'

import { previewCode } from '../../preview'

type CodeViewerPreviewProps = CodeViewerProps<Record<string, any>>

const CodeViewer = ({
  height = 240,
  initialValue = previewCode,
  language = 'javascript',
  ...props
}: CodeViewerPreviewProps): JSX.Element => (
  <HexaCodeViewer
    height={height}
    initialValue={initialValue}
    language={language}
    {...props}
  />
)

export default CodeViewer
