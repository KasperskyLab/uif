import React from 'react'

import { Chip as HexaChip } from '@src/chip'
import { ChipProps } from '@src/chip/types'

const Chip = ({ label = 'Chip', ...props }: ChipProps): JSX.Element => (
  <HexaChip label={label} {...props} />
)

export default Chip
