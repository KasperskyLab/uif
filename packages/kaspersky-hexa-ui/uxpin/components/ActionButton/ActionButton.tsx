import React from 'react'

import { ActionButton as HexaActionButton } from '@src/action-button'
import { ActionButtonProps } from '@src/action-button/types'

import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

const ActionButton = ({ icon = <Placeholder />, ...props }: ActionButtonProps): JSX.Element => (
  <HexaActionButton icon={icon} {...props} />
)

export default ActionButton
