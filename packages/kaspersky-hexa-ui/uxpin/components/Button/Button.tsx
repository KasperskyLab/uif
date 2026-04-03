import React from 'react'

import { Button as HexaButton } from '@src/button'
import { ButtonProps } from '@src/button/types'

import { FrameFill, mergeFrameStyle } from '../../preview'

const Button = ({
  children = 'Button',
  text,
  mode = 'primary',
  size = 'medium',
  style,
  ...props
}: ButtonProps): JSX.Element => {
  const resolvedText = text ?? (typeof children === 'string' ? children : 'Button')

  return (
    <FrameFill>
      <HexaButton
        mode={mode}
        size={size}
        text={resolvedText}
        style={mergeFrameStyle(style)}
        {...props}
      />
    </FrameFill>
  )
}

export default Button
