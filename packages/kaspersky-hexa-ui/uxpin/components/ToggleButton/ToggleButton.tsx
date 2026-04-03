import React from 'react'

import { ToggleButton as HexaToggleButton } from '@src/toggle-button'
import { ToggleButtonProps } from '@src/toggle-button/types'

const ToggleButton = ({
  text = 'Toggle',
  value = 'toggle',
  ...props
}: ToggleButtonProps): JSX.Element => (
  <HexaToggleButton text={text} value={value} {...props} />
)

export default ToggleButton
