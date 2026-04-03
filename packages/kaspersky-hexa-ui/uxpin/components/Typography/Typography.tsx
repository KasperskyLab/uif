import React from 'react'

import { Text as HexaTypography } from '@src/typography'
import { TextProps } from '@src/typography/text'

const Typography = ({
  children = 'Typography preview',
  type = 'BTR3',
  ...props
}: TextProps): JSX.Element => (
  <HexaTypography type={type} {...props}>
    {children}
  </HexaTypography>
)

export default Typography
