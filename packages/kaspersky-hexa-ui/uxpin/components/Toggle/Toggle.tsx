import React from 'react'

import { Toggle as HexaToggle } from '@src/toggle'
import { ToggleProps } from '@src/toggle/types'

const Toggle = ({
  children = 'Toggle',
  ...props
}: ToggleProps): JSX.Element => <HexaToggle {...props}>{children}</HexaToggle>

export default Toggle
