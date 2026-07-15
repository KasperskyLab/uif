import React from 'react'
import styled from 'styled-components'
import type { ArgTypes } from '@storybook/react'

import { StorybookDocs } from '../../adapters/storybook'
import type { StorybookArgType } from '../../adapters/storybook'
import storybookTheme from '../../kaspersky-theme'
import {
  DocumentationArgsTable,
  DocumentationArgsTableWrapper
} from './DocumentationArgsTable'
import {
  PropPresentation,
  PropPresentationMap,
  ReusablePropPresentation
} from './types'

const { ThemeProvider, ensure, useOf } = StorybookDocs

const SectionTable = styled.div`
  margin-top: 32px;
`

export const defaultDeprecatedSectionLabel = 'УСТАРЕВШИЕ'

const toArgTypeSummary = (value?: string) => (
  value == null
    ? undefined
    : { summary: value }
)

const normalizeControl = (
  control?: PropPresentation['control']
): StorybookArgType['control'] => {
  if (typeof control === 'string') {
    return { type: control }
  }

  return control
}

const getPresentationLabel = (
  presentation: PropPresentation | undefined,
  key: string
) => presentation?.label ?? key

const getPresentationSortOrder = (
  presentation: PropPresentation | undefined,
  declarationIndex: number
) => presentation?.order ?? declarationIndex

const getPresentationType = (presentation?: PropPresentation) =>
  presentation?.type ?? presentation?.table?.type

const getPresentationDefaultValue = (presentation?: PropPresentation) => {
  if (presentation?.defaultValue !== undefined) {
    return String(presentation.defaultValue)
  }

  return presentation?.table?.defaultValue
}

/** PureArgsTable accepts only string summaries; docgen may attach non-renderable `detail`. */
const toTableTypeCell = (
  argType: StorybookArgType,
  presentation?: PropPresentation
) => {
  const override = getPresentationType(presentation)
  const raw = argType.table?.type

  if (override) {
    return { summary: String(override) }
  }

  if (!raw) {
    return undefined
  }

  const rawName = (raw as { name?: string }).name
  const summary = typeof raw.summary === 'string'
    ? raw.summary
    : raw.summary != null
      ? String(raw.summary)
      : typeof rawName === 'string'
        ? rawName
        : undefined

  return summary ? { summary } : undefined
}

const toTableDefaultValueCell = (
  argType: StorybookArgType,
  presentation?: PropPresentation
) => {
  const override = getPresentationDefaultValue(presentation)
  const raw = argType.table?.defaultValue

  if (override) {
    return { summary: override }
  }

  if (!raw) {
    return undefined
  }

  const summary = typeof raw.summary === 'string'
    ? raw.summary
    : raw.summary != null
      ? String(raw.summary)
      : undefined

  return summary ? { summary } : undefined
}

const mergeArgTypeRow = (
  name: string,
  argType: StorybookArgType,
  presentation: PropPresentation | undefined
): StorybookArgType => {
  const type = toTableTypeCell(argType, presentation)
  const defaultValue = toTableDefaultValueCell(argType, presentation)

  return {
    ...argType,
    name: getPresentationLabel(presentation, name),
    ...(presentation?.description ? { description: presentation.description } : {}),
    table: {
      ...argType.table,
      ...(type ? { type } : {}),
      ...(defaultValue ? { defaultValue } : {})
    }
  }
}

export const buildStoryArgTypes = (presentation: PropPresentationMap): ArgTypes =>
  Object.entries(presentation).reduce<ArgTypes>((argTypes, [name, config]) => {
    const nextArgType: StorybookArgType = {
      ...(config.label ? { name: getPresentationLabel(config, name) } : {}),
      ...(config.description ? { description: config.description } : {}),
      ...(config.options ? { options: config.options } : {}),
      ...(config.control !== undefined ? { control: normalizeControl(config.control) } : {}),
      ...(getPresentationType(config)
        ? {
            table: {
              type: toArgTypeSummary(getPresentationType(config))
            }
          }
        : {})
    }

    argTypes[name] = nextArgType
    return argTypes
  }, {})

type DocgenPropInfo = {
  defaultValue?: { value?: string | null } | null
  description?: string
  name?: string
  required?: boolean
  type?: {
    name?: string
    raw?: string
    value?: unknown
  } | null
}

type DocgenComponent = React.ComponentType<any> & {
  __docgenInfo?: {
    props?: Record<string, DocgenPropInfo>
  }
}

const toDocgenTypeSummary = (type?: DocgenPropInfo['type']) => {
  if (!type) {
    return undefined
  }

  if (typeof type.raw === 'string' && type.raw.length > 0) {
    return type.raw
  }

  if (typeof type.name === 'string' && type.name.length > 0) {
    return type.name
  }

  return undefined
}

const buildDocgenArgTypes = (
  components: DocgenComponent | DocgenComponent[]
): ArgTypes => {
  const componentList = Array.isArray(components) ? components : [components]

  return componentList.reduce<ArgTypes>((argTypes, component) => {
    const props = component.__docgenInfo?.props || {}

    Object.entries(props).forEach(([name, prop]) => {
      const typeSummary = toDocgenTypeSummary(prop.type)
      const defaultValue = prop.defaultValue?.value

      argTypes[name] = {
        name: prop.name || name,
        ...(prop.description ? { description: prop.description } : {}),
        table: {
          ...(typeSummary ? { type: { summary: typeSummary } } : {}),
          ...(defaultValue ? { defaultValue: { summary: defaultValue } } : {})
        }
      }
    })

    return argTypes
  }, {})
}

export const buildStoryArgTypesFromComponents = (
  components: DocgenComponent | DocgenComponent[],
  presentation: PropPresentationMap
): ArgTypes => {
  const docgenArgTypes = buildDocgenArgTypes(components)
  const presentationArgTypes = buildStoryArgTypes(presentation)

  return Object.entries(presentationArgTypes).reduce<ArgTypes>((argTypes, [name, config]) => {
    const docgenConfig = docgenArgTypes[name]

    argTypes[name] = {
      ...docgenConfig,
      ...config,
      description: config.description ?? docgenConfig?.description,
      table: {
        ...docgenConfig?.table,
        ...config.table
      }
    }

    return argTypes
  }, { ...docgenArgTypes })
}

export const extendPropPresentation = (
  base: ReusablePropPresentation,
  overrides: PropPresentation = {}
): PropPresentation => {
  const baseTable = {
    ...(base.type !== undefined
      ? { type: String(base.type) }
      : {}),
    ...(base.defaultValue !== undefined
      ? { defaultValue: String(base.defaultValue) }
      : {}),
    ...base.table
  }

  const nextTable = {
    ...baseTable,
    ...overrides.table
  }

  return {
    ...base,
    ...overrides,
    ...(
      Object.keys(nextTable).length > 0
        ? { table: nextTable }
        : {}
    )
  }
}

export const getControlsInclude = (presentation: PropPresentationMap): string[] =>
  Object.keys(presentation)

export const getPropsTableRows = (
  argTypes: ArgTypes,
  presentation: PropPresentationMap = {},
  deprecatedSection = defaultDeprecatedSectionLabel
) => {
  const entries = Object.entries(argTypes)
    .filter(([name, argType]) => !argType.table?.disable && !presentation[name]?.hidden)
    .map(([name, argType], declarationIndex) => ({
      name,
      argType,
      presentation: presentation[name],
      declarationIndex
    }))
    .sort((left, right) => {
      const leftDeprecated = Boolean(left.presentation?.deprecated)
      const rightDeprecated = Boolean(right.presentation?.deprecated)

      if (leftDeprecated !== rightDeprecated) {
        return leftDeprecated ? 1 : -1
      }

      const leftOrder = getPresentationSortOrder(left.presentation, left.declarationIndex)
      const rightOrder = getPresentationSortOrder(right.presentation, right.declarationIndex)

      if (leftOrder !== rightOrder) {
        return leftOrder - rightOrder
      }

      return left.name.localeCompare(right.name)
    })

  return entries.reduce<{
    rows: ArgTypes
    deprecatedRows: ArgTypes
  }>((rows, entry) => {
    if (entry.presentation?.deprecated) {
      rows.deprecatedRows[entry.name] = mergeArgTypeRow(
        entry.name,
        entry.argType,
        entry.presentation
      )
    } else {
      rows.rows[entry.name] = mergeArgTypeRow(
        entry.name,
        entry.argType,
        entry.presentation
      )
    }

    return rows
  }, {
    rows: {},
    deprecatedRows: {}
  })
}

type PropsTableProps = {
  of?: unknown
  presentation?: PropPresentationMap
  deprecatedSection?: string
  sort?: 'alpha' | 'requiredFirst' | 'none'
  /**
   * @deprecated Категории в таблице больше не используются.
   */
  showCategories?: boolean
  /**
   * @deprecated Группы в таблице больше не используются.
   */
  sections?: unknown
}

const stripRowCategories = (rows: Record<string, any>) => Object.fromEntries(
  Object.entries(rows).map(([name, row]) => [
    name,
    {
      ...row,
      table: row.table
        ? {
            ...row.table,
            category: undefined
          }
        : row.table
    }
  ])
)

/** Строки таблицы только из presentation (вкладка «Дизайнеру», без docgen и без групп). */
export const buildPresentationOnlyRows = (
  presentation: PropPresentationMap
): ArgTypes => {
  const argTypes = buildStoryArgTypes(presentation)

  const rows = Object.entries(presentation).reduce<ArgTypes>((acc, [name, config]) => {
    if (config.hidden) {
      return acc
    }

    const argType = argTypes[name]
    if (!argType || argType.table?.disable) {
      return acc
    }

    acc[name] = mergeArgTypeRow(
      name,
      argType,
      config
    )
    return acc
  }, {})

  return stripRowCategories(rows)
}

const getStoryArgTypes = (resolved: any) => {
  if (resolved.type === 'story') {
    return resolved.story.argTypes
  }

  if (resolved.type === 'meta') {
    const extractArgTypes = resolved.parameters?.docs?.extractArgTypes

    return extractArgTypes
      ? extractArgTypes(resolved.component)
      : resolved.preparedMeta?.argTypes
  }

  if (resolved.type === 'component') {
    const extractArgTypes = resolved.projectAnnotations?.parameters?.docs?.extractArgTypes

    return extractArgTypes
      ? extractArgTypes(resolved.component)
      : {}
  }

  return {}
}

export const PropsTable: React.FC<PropsTableProps> = ({
  of,
  presentation = {},
  deprecatedSection = defaultDeprecatedSectionLabel,
  sort = 'none',
  showCategories = false
}) => {
  const resolved = useOf(of || 'meta')
  const { rows, deprecatedRows } = getPropsTableRows(
    getStoryArgTypes(resolved),
    presentation,
    deprecatedSection
  )
  const stripCategories = (rows: ArgTypes) => (
    showCategories ? rows : stripRowCategories(rows)
  )
  const visibleRows = stripCategories(rows)
  const visibleDeprecatedRows = stripCategories(deprecatedRows)

  return (
    <ThemeProvider theme={ensure(storybookTheme)}>
      <DocumentationArgsTableWrapper className="sb-unstyled">
        {Object.keys(visibleRows).length > 0 && (
          <DocumentationArgsTable embedded rows={visibleRows} sort={sort} />
        )}
        {Object.keys(visibleDeprecatedRows).length > 0 && (
          <SectionTable>
            <DocumentationArgsTable embedded rows={visibleDeprecatedRows} sort={sort} />
          </SectionTable>
        )}
      </DocumentationArgsTableWrapper>
    </ThemeProvider>
  )
}
