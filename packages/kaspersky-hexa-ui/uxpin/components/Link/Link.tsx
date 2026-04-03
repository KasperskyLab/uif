import React from 'react'

import { Link as HexaLink } from '@src/link'
import { LinkProps } from '@src/link/types'

const Link = ({
  href = '#',
  text = 'Open documentation',
  ...props
}: LinkProps): JSX.Element => <HexaLink href={href} text={text} {...props} />

export default Link
