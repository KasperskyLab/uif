import { withMeta } from '@sb/components/Meta'
import { SectionMessage } from '@src/section-message'
import { Status } from '@src/status'
import { Tag } from '@src/tag'
import { P, Text } from '@src/typography'
import { Meta } from '@storybook/react'
import React, { useMemo } from 'react'

import { Table, TableColumn, TableRecord } from '../'
import MetaData from '../__meta__/meta.json'
import { ITableProps } from '../types'

import { Story, Wrapper } from './_commonConstants'

const meta: Meta<ITableProps> = {
  title: 'Hexa UI Components/Table/[DEV]/Virtualization',
  component: Table,
  args: {
    virtualization: true,
    resizingMode: 'scroll',
    stickyHeader: 0,
    rowMode: 'compact'
  },
  parameters: {
    docs: {
      page: withMeta(MetaData),
      /**
       * The code panel gets the story's source, not a description of what it rendered.
       *
       * Storybook builds that snippet by running `react-element-to-jsx-string` over the rendered
       * element — every prop included. `dataSource` here is twenty thousand records, and writing
       * them out as JSX blocks the main thread for minutes: the tab goes white and answers nothing,
       * with no hint that a code panel is what is doing it. `type: 'code'` is the switch that makes
       * the decorator stand down; the panel then shows what the story is written as, which is what
       * anybody reading it wants anyway.
       */
      source: { type: 'code' }
    }
  },
  tags: ['!autodocs']
}
export default meta

type Row = TableRecord & {
  id: number
  name: string
  note: string
  state: string
}

const ROWS = 5000
const COLUMNS = 30

const longNote = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'

const dataSource: Row[] = Array.from({ length: ROWS }, (_, index) => ({
  key: index,
  id: index,
  name: `host-${index}`,
  // every fifth row carries much more text, so the rows really do differ in height
  note: index % 5 === 0 ? longNote.repeat(2) : 'short note',
  state: index % 3 === 0 ? 'online' : 'offline',
  ...Object.fromEntries(Array.from({ length: COLUMNS }, (_, i) => [`extra${i}`, `value ${index}.${i}`]))
}))

const columns: TableColumn<Row>[] = [
  {
    key: 'id',
    dataIndex: 'id',
    title: 'ID',
    width: 80,
    isSortable: true,
    ellipsis: true
  },
  {
    key: 'name',
    dataIndex: 'name',
    title: 'Name',
    width: 180,
    isSortable: true,
    ellipsis: true
  },
  {
    key: 'state',
    dataIndex: 'state',
    title: 'State',
    width: 140,
    ellipsis: true,
    render: (state: string) => <Status label={state} />
  },
  {
    key: 'note',
    dataIndex: 'note',
    title: 'Note (varying height)',
    width: 320,
    expandableText: true
  },
  {
    key: 'tags',
    dataIndex: 'id',
    title: 'Tags',
    width: 200,
    ellipsis: true,
    render: (id: number) => <Tag mode="grey">{`tag-${id % 7}`}</Tag>
  },
  ...Array.from({ length: COLUMNS }, (_, index) => ({
    key: `extra${index}`,
    dataIndex: `extra${index}`,
    title: `Extra ${index}`,
    width: 160,
    ellipsis: true,
    isSortable: true
  }))
]

/** Above this many rows, mounting them all is not a comparison — it is a frozen browser. */
const SAFE_WITHOUT_WINDOWING = 400

/**
 * Stands in for the table when the switch is off and the data is too big to mount.
 *
 * The switch is here so the two can be compared, but a table of thousands of rows rendered in full
 * does not demonstrate anything — it stops answering, and the page has to be closed. Storybook also
 * remembers a control between visits, so leaving that trap in means finding the story broken later
 * with no memory of having set it.
 */
const TooBigWithout = ({ rows }: { rows: number }) => (
  <SectionMessage mode="warning">
    <P>
      <Text type="BTR3">
        {`Virtualization is off and this story holds ${rows} rows. Rendering them all would mount tens of
        thousands of cells and stop the page answering, so the table is not rendered. Turn
        virtualization back on in the controls — or compare the two on a story with less data.`}
      </Text>
    </P>
  </SectionMessage>
)

/**
 * The point of the story is the combination the module was built for: many rows, far more columns
 * than fit on screen, and rows whose height depends on their content.
 */
const VirtualizationDemo = (args: ITableProps<Row>) => {
  const tableColumns = useMemo(() => columns, [])

  return (
    <Wrapper>
      <SectionMessage mode="info">
        <P>
          <Text type="BTR3">
            {`${ROWS} rows × ${tableColumns.length} columns. Only the rows and columns near the viewport are in the
            DOM; the rest are stood in for by one empty row above and below, and one empty column on each side, so
            the table keeps its real size and both scrollbars keep their range. Row heights are measured as the rows
            mount, which is why the rows with more text are taller without anything declaring it.`}
          </Text>
        </P>
        <P>
          <Text type="BTR3">
            {`Turn the virtualization arg off to compare. Row windowing needs the table to own row selection
            (builtInRowSelection), because antd works selection out from the rows it was handed. Column
            windowing needs every visible column to have a width, which resizingMode: 'scroll' provides, and
            it stands down while stickyHeader is set.`}
          </Text>
        </P>
      </SectionMessage>
      {args.virtualization || dataSource.length <= SAFE_WITHOUT_WINDOWING
        ? (
            <Table
              {...(args as ITableProps<Row>)}
              columns={tableColumns}
              dataSource={dataSource}
              pagination={false}
              // Row windowing needs the table to own selection — see the Virtualization module.
              rowSelection={{
                builtInRowSelection: true
              }}
            />
          )
        : <TooBigWithout rows={dataSource.length} />}
    </Wrapper>
  )
}

/**
 * The story mounts a component and passes nothing but its controls.
 *
 * That is not a matter of taste. Storybook writes the code panel by turning the element the story
 * returns into JSX text, props and all — so a story that returns a table with five thousand records
 * hanging off it spends minutes writing them out, and the tab is frozen for every one of those
 * minutes. What the story returns here is one element with three small props.
 */
export const Virtualization: Story = {
  render: (args) => <VirtualizationDemo {...(args as ITableProps<Row>)} />
}

type TreeRow = TableRecord & {
  name: string
  kind: string
  children?: TreeRow[]
}

/**
 * The case this was asked for: roots holding thousands. Four of them is twenty thousand rows once
 * they are all open, which is the number the window is cut from. With the switch off the story
 * refuses to render instead — a quarter of a million cells takes the browser with it.
 */
const CHILDREN_PER_ROOT = 5000

const treeData: TreeRow[] = Array.from({ length: 4 }, (_, root) => ({
  key: `root-${root}`,
  name: `group ${root}`,
  kind: 'group',
  children: Array.from({ length: CHILDREN_PER_ROOT }, (_, index) => ({
    key: `root-${root}-child-${index}`,
    name: `host-${root}.${index}`,
    kind: index % 4 === 0 ? 'server' : 'workstation'
  }))
}))

const treeColumns: TableColumn<TreeRow>[] = [
  {
    key: 'name',
    dataIndex: 'name',
    title: 'Name',
    width: 320,
    ellipsis: true
  },
  {
    key: 'kind',
    dataIndex: 'kind',
    title: 'Kind',
    width: 180,
    ellipsis: true,
    render: (kind: string) => <Status label={kind} />
  },
  ...Array.from({ length: 12 }, (_, index) => ({
    key: `extra${index}`,
    dataIndex: 'name',
    title: `Extra ${index}`,
    width: 200,
    ellipsis: true
  }))
]

/**
 * The shape the module was hardest to get right: a handful of top-level rows, one of which holds
 * thousands. What matters is the row count — a tree of four roots with five thousand children each
 * has four rows closed and twenty thousand and four open, and it is that number the window is cut
 * from, not the four.
 */
const TreeDemo = (args: ITableProps<TreeRow>) => (
  <Wrapper>
    <SectionMessage mode="info">
      <P>
        <Text type="BTR3">
          {`Four roots, ${CHILDREN_PER_ROOT} children each. Open one: the rows below it are windowed like
          any others, and the root it belongs to stays rendered above them so they keep their place in
          the tree. Closed roots are handed to the table untouched, so nothing about them changes.`}
        </Text>
      </P>
    </SectionMessage>
    {args.virtualization
      ? (
          <Table
            {...(args as ITableProps<TreeRow>)}
            columns={treeColumns}
            dataSource={treeData}
            pagination={false}
          />
        )
      : <TooBigWithout rows={treeData.length * CHILDREN_PER_ROOT} />}
  </Wrapper>
)

/** Mounts a component and hands it the controls — see the note on the story above. */
export const Tree: Story = {
  render: (args) => <TreeDemo {...(args as ITableProps<TreeRow>)} />
}
