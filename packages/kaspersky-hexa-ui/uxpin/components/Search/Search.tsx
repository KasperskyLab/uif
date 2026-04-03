import React from 'react'

import { Search as HexaSearch } from '@src/search'
import { SearchProps } from '@src/search/types'

import { mergeFrameStyle } from '../../preview'

const Search = ({
  placeholder = 'Search',
  style,
  ...props
}: SearchProps): JSX.Element => (
  <HexaSearch placeholder={placeholder} style={mergeFrameStyle(style)} {...props} />
)

export default Search
