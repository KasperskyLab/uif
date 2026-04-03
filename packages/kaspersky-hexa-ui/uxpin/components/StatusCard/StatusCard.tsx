import React from 'react'

import { StatusCard as HexaStatusCard } from '@src/status-card'
import { StatusCardProps } from '@src/status-card/types'

import { previewStatusCardActions } from '../../preview'

const StatusCard = ({
  actions = previewStatusCardActions,
  description = 'Status card description',
  mode = 'success',
  title = 'Status card',
  ...props
}: StatusCardProps): JSX.Element => (
  <HexaStatusCard
    actions={actions}
    description={description}
    mode={mode}
    title={title}
    {...props}
  />
)

export default StatusCard
