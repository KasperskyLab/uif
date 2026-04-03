import React from 'react'

import { LockGroup as HexaLockGroup } from '@src/lock-group'
import { LockGroupProps } from '@src/lock-group/types'

const LockGroup = ({
  children = 'Nested content',
  title = 'Inheritance',
  ...props
}: LockGroupProps): JSX.Element => (
  <HexaLockGroup title={title} {...props}>
    {children}
  </HexaLockGroup>
)

export default LockGroup
