import styled from 'styled-components'
import React, { useState } from 'react'
import classnames from 'classnames'
import { TableModule } from '.'
import { Icon } from '../../icon'
import { TableCssConfig } from '../types'
import { useTableContext } from '../context/TableContext'
import { fromTableProps } from '../tableCss'
import { SPACES } from '../../../design-system/theme/themes/variables'
import { isColumnReadonly } from '../helpers'

const AccordeonWrapper = styled.div`
`

const AccordeonHeader = styled.div`
  &:hover {
    cursor: pointer;
  }

  padding-top: ${SPACES[2]}px;
  padding-bottom: ${SPACES[2]}px;
  
`

const AccordeonIcon = styled.span.withConfig<{ className: string, cssConfig: TableCssConfig }>({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${fromTableProps('root.backgroundColor')};

  svg {
    color: ${fromTableProps('root.color')};
  }
`

const AccordeonContent = styled.div`
  margin-top: ${SPACES[4]}px;
`

interface AccordionProps {
  title: React.ReactNode,
  cssConfig: TableCssConfig
}

const Accordion = (props: React.PropsWithChildren<AccordionProps>) => {
  const [show, setShow] = useState(false)

  return (
    <AccordeonWrapper>
      <AccordeonHeader onClick={() => setShow(!show)}>
        <AccordeonIcon className='table-accordion-icon' cssConfig={props.cssConfig}>
          <Icon size='small' name={show ? 'DownMini' : 'RightMini'} />
        </AccordeonIcon>
        {props.title}
      </AccordeonHeader>
      {show ? <AccordeonContent>{props.children}</AccordeonContent> : null}
    </AccordeonWrapper>
  )
}

export const accordeonRenderer = (columnIndex: number, columnsCount: number, cssConfig: TableCssConfig) => (value: any, row: any): any => {
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
    return isColumnReadonly(column) ? column : { ...column, render: accordeonRenderer(index, props.columns.length, cssConfig) }
  })

  return <Component { ...props } columns={columns} />
}
