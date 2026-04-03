import React from 'react'

import { ProgressBar as HexaProgressBar } from '@src/progress-bar'
import { ProgressBarProps } from '@src/progress-bar/types'

const ProgressBar = ({
  mode = 'accent',
  track = 60,
  width = 240,
  ...props
}: ProgressBarProps): JSX.Element => (
  <HexaProgressBar mode={mode} track={track} width={width} {...props} />
)

export default ProgressBar
