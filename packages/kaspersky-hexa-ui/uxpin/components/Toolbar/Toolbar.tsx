import React from 'react'

import { Toolbar as HexaToolbar } from '@src/toolbar'
import { ToolbarProps } from '@src/toolbar/types'

import { previewToolbarLeft, previewToolbarRight } from '../../preview'

const Toolbar = ({
  left = previewToolbarLeft,
  right = previewToolbarRight,
  ...props
}: ToolbarProps): JSX.Element => <HexaToolbar left={left} right={right} {...props} />

export default Toolbar
