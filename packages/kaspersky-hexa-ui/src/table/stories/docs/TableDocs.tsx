import { Markdown } from '@src/markdown'
import React from 'react'

import Docs from './TableDocs.md?raw'

export const TableDocs = () => {
  return <Markdown value={`${Docs}`} />
}
