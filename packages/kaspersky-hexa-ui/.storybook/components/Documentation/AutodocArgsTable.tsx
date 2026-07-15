import { SBArgTypes } from '@sb/helpers'
import { useOf } from '@storybook/addon-docs/blocks'
import React from 'react'

import { DocumentationArgsTable } from './DocumentationArgsTable'

type AutodocArgsTableProps = {
  sort?: 'alpha' | 'requiredFirst' | 'none'
  of?: any
  components?: React.ComponentType<any> | React.ComponentType<any>[]
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

export const AutodocArgsTable: React.FC<AutodocArgsTableProps> = ({
  sort = 'alpha',
  of,
  components
}) => {
  const metaResolved = useOf(of ?? 'meta')
  const rows = components
    ? getComponentsArgTypes(metaResolved, components)
    : getMetaArgTypes(metaResolved)

  return <DocumentationArgsTable rows={rows} sort={sort} />
}
