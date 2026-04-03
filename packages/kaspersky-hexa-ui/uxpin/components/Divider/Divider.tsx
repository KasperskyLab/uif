import React from 'react'

import { Divider as HexaDivider } from '@src/divider'
import { DividerProps } from '@src/divider/types'

const Divider = ({
  direction = 'horizontal',
  ...props
}: DividerProps): JSX.Element => <HexaDivider direction={direction} {...props} />

export default Divider
