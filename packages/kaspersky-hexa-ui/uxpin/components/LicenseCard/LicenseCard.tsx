import React from 'react'

import { LicenseCard as HexaLicenseCard } from '@src/license-card'
import { LicenseCardProps } from '@src/license-card/types'

const LicenseCard = ({
  daysRemaining = 30,
  number = 'KL-1234-5678',
  term = 365,
  title = 'Preview license',
  ...props
}: LicenseCardProps): JSX.Element => (
  <HexaLicenseCard
    daysRemaining={daysRemaining}
    number={number}
    term={term}
    title={title}
    {...props}
  />
)

export default LicenseCard
