import styled from 'styled-components'
import React, { useState } from 'react'
import classnames from 'classnames'
import { TableModule } from '.'
import { ArrowDown1, ArrowRight } from '@kaspersky/icons/16'
import { TableCssConfig } from '../types'
import { useTableContext } from '../context/TableContext'
import { fromTableProps } from '../tableCss'
import { isColumnReadonly } from '../helpers/common'

const AccordionWrapper = styled.div``

const AccordionHeader = styled.div`
  &:hover {
    cursor: pointer;
  }

  padding-top: 4px;
  padding-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
`

const AccordionIcon = styled.span.withConfig<{ cssConfig: TableCssConfig }>({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: transparent;

  svg {
    color: ${fromTableProps('root.color')};
  }
`

const AccordionContent = styled.div`
  margin-top: 8px;
`

interface AccordionProps {
  title: React.ReactNode,
  cssConfig: TableCssConfig
}

const Accordion = (props: React.PropsWithChildren<AccordionProps>) => {
  const [show, setShow] = useState(false)

  return (
    <AccordionWrapper>
      <AccordionHeader onClick={() => setShow(!show)}>
        <AccordionIcon className='table-accordion-icon' cssConfig={props.cssConfig}>
          {show ? <ArrowDown1 /> : <ArrowRight />}
        </AccordionIcon>
        {props.title}
      </AccordionHeader>
      {show ? <AccordionContent>{props.children}</AccordionContent> : null}
    </AccordionWrapper>
  )
}

export const accordionRenderer = (columnIndex: number, columnsCount: number, cssConfig: TableCssConfig) => (value: any, row: any): any => {
  const columnData = {
    children: value,
    props: { className: 'table-cell-with-accordeon', colSpan: 1 }
  }

  if (row.accordeon) {
    columnData.props.colSpan = columnIndex === 0 ? columnsCount : 0
    columnData.children = <Accordion title={row.accordeon.title} cssConfig={cssConfig}>{row.accordeon.children}</Accordion>
    columnData.props.className = classnames(columnData.props.className, 'accordeon-row')
  }

  return columnData
}

export const TableAccordion: TableModule = Component => (props: any) => {
  const { cssConfig } = useTableContext()

  if (!cssConfig) {
    return null
  }

  if (!props.useAccordion) {
    return <Component { ...props } />
  }

  const columns = props.columns.map((column: any, index: number) => {
    return isColumnReadonly(column) ? column : { ...column, render: accordionRenderer(index, props.columns.length, cssConfig) }
  })

  return <Component { ...props } columns={columns} />
}
