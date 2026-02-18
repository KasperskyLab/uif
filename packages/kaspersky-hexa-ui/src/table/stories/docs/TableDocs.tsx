import { Markdown } from '@src/markdown'
import React from 'react'

import Docs from './TableDocs.md'

export const TableDocs = () => {
  return <Markdown value={`${Docs}`} />
}
