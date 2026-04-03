import React from 'react'

import { Icon as HexaIcon } from '@src/icon'
import { IconProps } from '@src/icon/types'

const Icon = ({
  name = 'Map',
  size = 'medium',
  ...props
}: IconProps): JSX.Element => (
  <HexaIcon name={name} size={size} {...props} />
)

export default Icon
