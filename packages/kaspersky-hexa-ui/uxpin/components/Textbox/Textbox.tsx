import React from 'react'

import { Textbox as HexaTextbox } from '@src/input'
import { TextboxProps } from '@src/input/types'

import { mergeFrameStyle } from '../../preview'

const Textbox = ({
  placeholder = 'Input value',
  style,
  ...props
}: TextboxProps): JSX.Element => (
  <HexaTextbox placeholder={placeholder} style={mergeFrameStyle(style)} {...props} />
)

export default Textbox
