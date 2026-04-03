import React from 'react'

import { Badge as HexaBadge } from '@src/badge'
import { BadgeProps } from '@src/badge/types'

const Badge = ({ text = 'New', ...props }: BadgeProps): JSX.Element => (
  <HexaBadge text={text} {...props} />
)

export default Badge
