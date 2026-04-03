import React from 'react'

import { InformationCard as HexaInformationCard } from '@src/informationCard'
import { InformationCardProps } from '@src/informationCard/types'

const InformationCard = ({
  description = 'Card description',
  title = 'Information card',
  value = '42',
  ...props
}: InformationCardProps): JSX.Element => (
  <HexaInformationCard
    description={description}
    title={title}
    value={value}
    {...props}
  />
)

export default InformationCard
