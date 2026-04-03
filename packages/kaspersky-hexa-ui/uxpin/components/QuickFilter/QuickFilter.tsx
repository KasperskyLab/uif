import React from 'react'

import { QuickFilter as HexaQuickFilter } from '@src/quick-filter'
import { QuickFilterProps } from '@src/quick-filter/types'

import { FrameFill, previewQuickFilterFilters } from '../../preview'

const QuickFilter = ({
  filters = previewQuickFilterFilters,
  ...props
}: QuickFilterProps): JSX.Element => (
  <FrameFill>
    <HexaQuickFilter filters={filters} {...props} />
  </FrameFill>
)

export default QuickFilter
