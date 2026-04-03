import React from 'react'

import { Loader as HexaLoader } from '@src/loader'
import { LoaderProps } from '@src/loader/types'

const Loader = ({
  spinning = true,
  tip = 'Loading',
  ...props
}: LoaderProps): JSX.Element => <HexaLoader spinning={spinning} tip={tip} {...props} />

export default Loader
