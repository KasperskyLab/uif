import type { ArgTypes as SBArgTypes } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { StorybookDocs } from '../../adapters/storybook'
import type { StorybookArgType } from '../../adapters/storybook'
import storybookTheme from '../../kaspersky-theme'

const { PureArgsTable, ThemeProvider, ensure } = StorybookDocs

const toArgsTableSummaryCell = (
  field?: { summary?: unknown; name?: string }
) => {
  if (!field) {
    return undefined
  }

  const summary = typeof field.summary === 'string'
    ? field.summary
    : field.summary != null
      ? String(field.summary)
      : typeof field.name === 'string'
        ? field.name
        : undefined

  return summary ? { summary } : undefined
}

export const sanitizeArgTypeForArgsTable = (row: StorybookArgType): StorybookArgType => {
  const table = row.table

  if (!table) {
    return row
  }

  const type = toArgsTableSummaryCell(table.type)
  const defaultValue = toArgsTableSummaryCell(table.defaultValue)

  return {
    ...row,
    table: {
      ...table,
      ...(type ? { type } : {}),
      ...(defaultValue ? { defaultValue } : {})
    }
  }
}

export const DocumentationArgsTableWrapper = styled.div`
  margin-top: 8px;

  .docblock-argstable {
    margin-top: 0;
    margin-bottom: 0;
  }
`

/** PureArgsTable renders row.name, not the ArgTypes object key. */
export const withRowNames = (rows: SBArgTypes): SBArgTypes =>
  Object.fromEntries(
    Object.entries(rows).map(([key, row]) => [
      key,
      sanitizeArgTypeForArgsTable({ ...row, name: row.name ?? key })
    ])
  )

export type DocumentationArgsTableProps = {
  rows: SBArgTypes
  sort?: 'alpha' | 'requiredFirst' | 'none'
  /** Без ThemeProvider и обёртки — для нескольких таблиц в одной секции (PropsTable). */
  embedded?: boolean
}

const ArgsTableBody: React.FC<Pick<DocumentationArgsTableProps, 'rows' | 'sort'>> = ({
  rows,
  sort = 'none'
}) => (
  <PureArgsTable rows={withRowNames(rows)} sort={sort} inTabPanel />
)

/** Единая визуализация таблицы пропов (Storybook PureArgsTable + тема DS). */
export const DocumentationArgsTable: React.FC<DocumentationArgsTableProps> = ({
  rows,
  sort = 'none',
  embedded = false
}) => {
  if (embedded) {
    return <ArgsTableBody rows={rows} sort={sort} />
  }

  return (
    <ThemeProvider theme={ensure(storybookTheme)}>
      <DocumentationArgsTableWrapper className="sb-unstyled">
        <ArgsTableBody rows={rows} sort={sort} />
      </DocumentationArgsTableWrapper>
    </ThemeProvider>
  )
}
