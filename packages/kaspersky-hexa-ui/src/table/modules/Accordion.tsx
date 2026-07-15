import cn from 'classnames'
import React, { useState } from 'react'
import styled from 'styled-components'

import { ArrowDown1, ArrowRight } from '@kaspersky/hexa-ui-icons/16'

import { isColumnReadonly, isRenderCellObject } from '../helpers/common'
import { TableColumn, TableRecord } from '../types'

import { TableModule } from './index'

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

const AccordionIcon = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: transparent;

  svg {
    color: var(--table_cell--text--enabled);
  }
`

const AccordionContent = styled.div`
  margin-top: 8px;
`

interface AccordionProps {
  title: React.ReactNode
}

const Accordion = (props: React.PropsWithChildren<AccordionProps>) => {
  const [show, setShow] = useState(false)

  return (
    <AccordionWrapper>
      <AccordionHeader onClick={() => setShow(!show)}>
        <AccordionIcon className="table-accordion-icon">
          {show ? <ArrowDown1 /> : <ArrowRight />}
        </AccordionIcon>
        {props.title}
      </AccordionHeader>
      {show ? <AccordionContent>{props.children}</AccordionContent> : null}
    </AccordionWrapper>
  )
}

export const accordionRenderer = (
  columnIndex: number,
  columnsCount: number,
  predefinedRender?: TableColumn['render']
) => (value: any, row: TableRecord, index: number): any => {
  const predefinedResult = predefinedRender?.(value, row, index) ?? value
  const predefinedChildren = isRenderCellObject(predefinedRender) ? predefinedResult.children : predefinedResult

  const columnData = {
    children: predefinedChildren,
    props: { className: 'table-cell-with-accordeon', colSpan: 1 }
  }

  if (row.accordeon) {
    columnData.props.colSpan = columnIndex === 0 ? columnsCount : 0
    columnData.children = <Accordion title={row.accordeon.title}>{row.accordeon.children}</Accordion>
    columnData.props.className = cn(columnData.props.className, 'accordeon-row')
  }

  return columnData
}

export const TableAccordion: TableModule = Component => function TableAccordionModule (props: any) {
  if (!props.useAccordion) {
    return <Component {...props} />
  }

  const columns = props.columns.map((column: any, index: number) => {
    return isColumnReadonly(column)
      ? column
      : { ...column, render: accordionRenderer(index, props.columns.length, column.render) }
  })

  return <Component {...props} columns={columns} />
}
