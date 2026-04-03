import React from 'react'

import { Placeholder as HexaPlaceholder } from '@src/placeholder'
import { PlaceholderProps } from '@src/placeholder/types'

const Placeholder = ({
  description = 'No data is available yet',
  title = 'Nothing to show',
  ...props
}: PlaceholderProps): JSX.Element => (
  <HexaPlaceholder description={description} title={title} {...props} />
)

export default Placeholder
