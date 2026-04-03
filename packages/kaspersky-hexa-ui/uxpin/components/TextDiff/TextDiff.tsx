import React from 'react'

import { TextDiff as HexaTextDiff } from '@src/text-diff'
import { TextDiffProps } from '@src/text-diff/types'

import { previewCode, previewUpdatedCode } from '../../preview'

const TextDiff = ({
  newText = previewUpdatedCode,
  oldText = previewCode,
  ...props
}: TextDiffProps): JSX.Element => (
  <HexaTextDiff newText={newText} oldText={oldText} {...props} />
)

export default TextDiff
