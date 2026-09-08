import type { ArgTypes as SBArgTypes } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { StorybookDocs } from '../../adapters/storybook'
import type { StorybookArgType } from '../../adapters/storybook'
import storybookTheme from '../../kaspersky-theme'
import { Text } from '@src/typography'

import { isPresentationOnlyRows } from './presentationOnlyRows'

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

export const DocumentationArgsTableWrapper = styled.div<{ $withPixsoTitle?: boolean }>`
  ${({ $withPixsoTitle }) => $withPixsoTitle && `
    display: grid;
    gap: 8px;
    margin-top: 8px;
  `}

  &&& :is(.docblock-argstable, .sb-argstableBlock) {
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
    background-color: var(--bg--neutral--level_0);
    color: var(--fg--neutral--primary);
    border-color: var(--border--neutral--bold);

    thead th:first-of-type,
    tbody td:first-of-type {
      width: 20%;
    }

    thead th:nth-of-type(2),
    tbody td:nth-of-type(2) {
      width: 60%;
    }

    thead th:nth-of-type(3),
    tbody td:nth-of-type(3) {
      width: 20%;
    }

    th,
    td {
      background-color: var(--bg--neutral--level_0) !important;
      color: var(--fg--neutral--primary) !important;
      border-color: var(--border--neutral--medium) !important;
      border-right: 1px solid var(--border--neutral--medium) !important;
    }

    tbody > tr > td, thead > tr > th {
      padding: 10px !important;
    }

    code,
    tbody td:nth-child(2) > div span[class],
    tbody td:nth-child(3) > span[class] {
      background-color: var(--bg--neutral--level_2) !important;
      color: var(--fg--neutral--muted) !important;
    }

    thead th {
      border-top: 1px solid var(--border--neutral--medium) !important;
      border-bottom: 1px solid var(--border--neutral--medium) !important;

      &:first-child {
        border-left: 1px solid var(--border--neutral--medium) !important;
      }

      &:last-child {
        border-right: 1px solid var(--border--neutral--medium) !important;
      }
    }

    tbody {
      filter: none !important;
    }

    td table:has(strong) td {
      background-color: var(--bg--danger_subtle--enabled) !important;
      padding: 8px !important;
      border: 0 !important;
    }
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
  const withPixsoTitle = isPresentationOnlyRows(rows)

  if (embedded) {
    return <ArgsTableBody rows={rows} sort={sort} />
  }

  return (
    <ThemeProvider theme={ensure(storybookTheme)}>
      <DocumentationArgsTableWrapper className="sb-unstyled" $withPixsoTitle={withPixsoTitle}>
        {withPixsoTitle && <Text type="H5">Properties в Pixso</Text>}
        <ArgsTableBody rows={rows} sort={sort} />
      </DocumentationArgsTableWrapper>
    </ThemeProvider>
  )
}
