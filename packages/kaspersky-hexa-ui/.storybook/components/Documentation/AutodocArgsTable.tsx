import { SBArgTypes } from '@sb/helpers'
import { useOf } from '@storybook/addon-docs/blocks'
import React from 'react'
import styled from 'styled-components'

import { StorybookDocs } from '../../adapters/storybook'
import storybookTheme from '../../kaspersky-theme'
import { Heading } from '@src/typography'
import {
  DocumentationArgsTable,
  DocumentationArgsTableWrapper
} from './DocumentationArgsTable'
import { getPropsTableRows } from './propPresentation'
import type { PropPresentationMap } from './types'

const { ThemeProvider, ensure } = StorybookDocs

const SectionTable = styled.div`
  margin-top: 32px;
`

const PropertyTableSection = styled.div`
  display: grid;
  gap: 8px;
  width: 100%;

  > * {
    width: 100%;
  }
`

type AutodocArgsTableProps = {
  sort?: 'alpha' | 'requiredFirst' | 'none'
  of?: any
  components?: React.ComponentType<any> | React.ComponentType<any>[]
  presentation?: PropPresentationMap
}

type DocgenComponent = React.ComponentType<any> & {
  __docgenInfo?: {
    props?: Record<string, { description?: string }>
  }
}

const getMetaArgTypes = (metaResolved: any): SBArgTypes => {
  if (metaResolved?.type !== 'meta') {
    return {}
  }

  return metaResolved.preparedMeta?.argTypes || {}
}

const getComponentArgTypes = (
  metaResolved: any,
  component: React.ComponentType<any>
): SBArgTypes => {
  if (metaResolved?.type !== 'meta') {
    return {}
  }

  const extractArgTypes = metaResolved.preparedMeta?.parameters?.docs?.extractArgTypes

  if (typeof extractArgTypes !== 'function') {
    return {}
  }

  return extractArgTypes(component) || {}
}

const mergeArgTypes = (argTypesList: SBArgTypes[]): SBArgTypes => (
  Object.assign({}, ...argTypesList)
)

const getComponentsArgTypes = (
  metaResolved: any,
  components: React.ComponentType<any> | React.ComponentType<any>[]
): SBArgTypes => {
  const componentList = Array.isArray(components) ? components : [components]

  return mergeArgTypes(
    componentList.map((component) => getComponentArgTypes(metaResolved, component))
  )
}

export const getAutodocTableRows = (
  argTypes: SBArgTypes,
  presentation: PropPresentationMap = {}
) => getPropsTableRows(argTypes, presentation)

export const getComponentsPresentation = (
  components: React.ComponentType<any> | React.ComponentType<any>[],
  presentation: PropPresentationMap = {}
): PropPresentationMap => {
  const componentList = Array.isArray(components) ? components : [components]

  return componentList.reduce<PropPresentationMap>((result, component) => {
    const props = (component as DocgenComponent).__docgenInfo?.props || {}

    Object.entries(props).forEach(([name, prop]) => {
      if (typeof prop.description === 'string' && /^\s*@deprecated\b/i.test(prop.description)) {
        result[name] = {
          ...result[name],
          deprecated: true
        }
      }
    })

    return result
  }, { ...presentation })
}

export const AutodocArgsTable: React.FC<AutodocArgsTableProps> = ({
  sort = 'alpha',
  of,
  components,
  presentation
}) => {
  const metaResolved = useOf(of ?? 'meta')
  const rows = components
    ? getComponentsArgTypes(metaResolved, components)
    : getMetaArgTypes(metaResolved)

  const resolvedPresentation = components
    ? getComponentsPresentation(components, presentation)
    : presentation
  const { rows: activeRows, deprecatedRows } = getAutodocTableRows(rows, resolvedPresentation)

  return (
    <ThemeProvider theme={ensure(storybookTheme)}>
      <DocumentationArgsTableWrapper className="sb-unstyled">
        {Object.keys(activeRows).length > 0 && (
          <PropertyTableSection>
            <Heading type="H5">Properties</Heading>
            <DocumentationArgsTable embedded rows={activeRows} sort={sort} />
          </PropertyTableSection>
        )}
        {Object.keys(deprecatedRows).length > 0 && (
          <SectionTable>
            <PropertyTableSection>
              <Heading type="H5">Deprecated properties</Heading>
              <DocumentationArgsTable embedded rows={deprecatedRows} sort={sort} />
            </PropertyTableSection>
          </SectionTable>
        )}
      </DocumentationArgsTableWrapper>
    </ThemeProvider>
  )
}
