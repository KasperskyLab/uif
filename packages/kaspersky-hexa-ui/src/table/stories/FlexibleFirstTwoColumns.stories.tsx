import { SectionMessage } from '@src/section-message'
import { TableColumn, TableWithoutModules } from '@src/table'
import { ITableProps } from '@src/table/types'
import { Meta } from '@storybook/react'
import React, {
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import styled from 'styled-components'

import { Story, Wrapper } from './_commonConstants'

const MIN_FLEX_COL_WIDTH = 120
const FUDGE_PX = 24

const FIXED_WIDTH_STATUS = 135
const FIXED_WIDTH_UPDATED = 135
const FIXED_WIDTH_ACTIONS = 50

const FIXED_SUM =
  FIXED_WIDTH_STATUS + FIXED_WIDTH_UPDATED + FIXED_WIDTH_ACTIONS

type FlexWidths = {
  w1: number
  w2: number
  tableWidth: number
}

const defaultFlexWidths: FlexWidths = {
  w1: MIN_FLEX_COL_WIDTH,
  w2: MIN_FLEX_COL_WIDTH,
  tableWidth: MIN_FLEX_COL_WIDTH * 2 + FIXED_SUM
}

const MeasureBox = styled.div<{ $tableWidth: number }>`
  width: 100%;
  min-width: 360px;
  resize: horizontal;
  overflow: auto;
  border: 1px dashed var(--color--neutral_300, #ccc);
  padding: 8px;

  && .ant-table-wrapper {
    width: ${({ $tableWidth }) => $tableWidth}px;
    max-width: 100%;
  }

  && .ant-table table {
    width: ${({ $tableWidth }) => $tableWidth}px !important;
    min-width: ${({ $tableWidth }) => $tableWidth}px !important;
    max-width: ${({ $tableWidth }) => $tableWidth}px !important;
    table-layout: fixed !important;
  }

  && th.col-fixed-50,
  && td.col-fixed-50 {
    box-sizing: border-box !important;
    width: ${FIXED_WIDTH_ACTIONS}px !important;
    min-width: ${FIXED_WIDTH_ACTIONS}px !important;
    max-width: ${FIXED_WIDTH_ACTIONS}px !important;
    padding-left: 4px !important;
    padding-right: 4px !important;
    overflow: hidden;
  }

  && th.col-fixed-135,
  && td.col-fixed-135 {
    box-sizing: border-box !important;
    width: ${FIXED_WIDTH_STATUS}px !important;
    min-width: ${FIXED_WIDTH_STATUS}px !important;
    max-width: ${FIXED_WIDTH_STATUS}px !important;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

const fixedColumnCell = (width: number, className: string) => ({
  className,
  style: { width, minWidth: width, maxWidth: width }
})

function applyColumnWidthsInDom (
  root: HTMLElement,
  { w1, w2, tableWidth }: FlexWidths
) {
  root.querySelectorAll('colgroup').forEach((colgroup) => {
    const cols = colgroup.querySelectorAll('col')
    if (cols[0]) cols[0].setAttribute('style', `width: ${w1}px; min-width: ${w1}px`)
    if (cols[1]) cols[1].setAttribute('style', `width: ${w2}px; min-width: ${w2}px`)
    if (cols[2]) {
      cols[2].setAttribute(
        'style',
        `width: ${FIXED_WIDTH_STATUS}px; min-width: ${FIXED_WIDTH_STATUS}px`
      )
    }
    if (cols[3]) {
      cols[3].setAttribute(
        'style',
        `width: ${FIXED_WIDTH_UPDATED}px; min-width: ${FIXED_WIDTH_UPDATED}px`
      )
    }
    if (cols[4]) {
      cols[4].setAttribute(
        'style',
        `width: ${FIXED_WIDTH_ACTIONS}px; min-width: ${FIXED_WIDTH_ACTIONS}px`
      )
    }
  })

  root.querySelectorAll('table').forEach((table) => {
    table.style.width = `${tableWidth}px`
    table.style.minWidth = `${tableWidth}px`
    table.style.maxWidth = `${tableWidth}px`
    table.style.tableLayout = 'fixed'
  })
}

type DemoRow = {
  key: number
  flexibleA: string
  flexibleB: string
  status: string
  updated: string
}

const dataSource: DemoRow[] = Array.from({ length: 12 }, (_, i) => ({
  key: i + 1,
  flexibleA: `Primary field ${i + 1}`,
  flexibleB: `Secondary field ${i + 1}`,
  status: i % 3 === 0 ? 'Active' : 'Draft',
  updated: `2026-05-${String((i % 28) + 1).padStart(2, '0')}`
}))

const meta: Meta<ITableProps> = {
  title: 'Hexa UI Components/Table/Flexible first two columns',
  component: TableWithoutModules,
  parameters: {
    controls: { disable: true }
  }
}

export default meta

function FlexibleFirstTwoColumnsDemo () {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [flexWidths, setFlexWidths] = useState<FlexWidths>(defaultFlexWidths)

  const measure = useCallback(() => {
    const el = wrapRef.current
    if (!el) return

    const contentW = el.clientWidth - FUDGE_PX
    const flexTotal = Math.max(0, contentW - FIXED_SUM)
    const w1 = Math.max(MIN_FLEX_COL_WIDTH, Math.floor(flexTotal / 2))
    const w2 = w1 + (flexTotal - w1 * 2)
    const tableWidth = w1 + w2 + FIXED_SUM

    setFlexWidths({ w1, w2, tableWidth })
  }, [])

  useLayoutEffect(() => {
    const el = wrapRef.current
    if (!el) return

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [measure])

  useLayoutEffect(() => {
    const el = wrapRef.current
    if (!el) return

    applyColumnWidthsInDom(el, flexWidths)

    const raf = requestAnimationFrame(() => {
      applyColumnWidthsInDom(el, flexWidths)
    })
    return () => cancelAnimationFrame(raf)
  }, [flexWidths])

  const columns: TableColumn[] = useMemo(
    () => [
      {
        key: 'flexibleA',
        title: 'Flexible A',
        dataIndex: 'flexibleA',
        width: flexWidths.w1
      },
      {
        key: 'flexibleB',
        title: 'Flexible B',
        dataIndex: 'flexibleB',
        width: flexWidths.w2
      },
      {
        key: 'status',
        title: 'Status',
        dataIndex: 'status',
        width: FIXED_WIDTH_STATUS,
        className: 'col-fixed-135',
        onCell: () => fixedColumnCell(FIXED_WIDTH_STATUS, 'col-fixed-135')
      },
      {
        key: 'updated',
        title: 'Updated',
        dataIndex: 'updated',
        width: FIXED_WIDTH_UPDATED,
        className: 'col-fixed-135',
        onCell: () => fixedColumnCell(FIXED_WIDTH_UPDATED, 'col-fixed-135')
      },
      {
        key: 'actions',
        title: '⋯',
        width: FIXED_WIDTH_ACTIONS,
        className: 'col-fixed-50',
        align: 'center',
        onCell: () => fixedColumnCell(FIXED_WIDTH_ACTIONS, 'col-fixed-50'),
        render: () => '⋯'
      }
    ],
    [flexWidths.w1, flexWidths.w2]
  )

  return (
    <Wrapper>
      <SectionMessage mode="info">
        <div>
          Колонки 1–2 делят свободную ширину; 3–4 — по 135px, 5 — 50px.
          Пример на <code>TableWithoutModules</code>
          . Ресайз — за правый край рамки.
        </div>
      </SectionMessage>
      <MeasureBox ref={wrapRef} $tableWidth={flexWidths.tableWidth}>
        <TableWithoutModules
          tableLayout="fixed"
          scroll={{ x: flexWidths.tableWidth }}
          columns={columns}
          dataSource={dataSource}
          pagination={{ pageSize: 20, hideOnSinglePage: true }}
        />
      </MeasureBox>
    </Wrapper>
  )
}

export const FlexibleFirstTwoColumns: Story = {
  render: () => <FlexibleFirstTwoColumnsDemo />
}
