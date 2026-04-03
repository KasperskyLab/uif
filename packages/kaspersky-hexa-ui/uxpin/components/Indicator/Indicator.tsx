import React from 'react'

import { Indicator as HexaIndicator } from '@src/indicator'
import { IndicatorProps } from '@src/indicator/types'

const Indicator = ({ mode = 'info', ...props }: IndicatorProps): JSX.Element => (
  <HexaIndicator mode={mode} {...props} />
)

export default Indicator
