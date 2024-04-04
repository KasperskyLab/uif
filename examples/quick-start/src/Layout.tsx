import { Dispatch, SetStateAction, useState } from 'react'
import styled from 'styled-components'
import { SegmentedButton, Button, Sidebar, Text, Table, Space } from '@kaspersky/components'
import { SegmentedButtonOption } from '@kaspersky/components/src/segmented-button/types'
import { ThemeKey, themeColors } from '@kaspersky/components/design-system'

const StyledSpace = styled(Space)<{ themeKey: ThemeKey }>`
  border-radius: 16px;
  padding: 16px;
  margin: 16px;
  align-items: flex-start;
  width: 910px;
  background: ${props => themeColors.bg.base[props.themeKey]};
`

const TableWrapper = styled.div`
  width: 100%;
`

type RowType = { name: string, description: string, age: number, key: string }

export type LayoutProps = {
  themeKey: ThemeKey,
  setThemeKey: Dispatch<SetStateAction<ThemeKey>>
}

export const Layout = ({ themeKey, setThemeKey }: LayoutProps) => {
  const segmentedButtonOptions: SegmentedButtonOption[] = [
    {
      value: ThemeKey.Light,
      text: ThemeKey.Light
    },
    {
      value: ThemeKey.Dark,
      text: ThemeKey.Dark
    },
  ]
  const [isOpen, setIsOpen] = useState(false)

  const tableColumns = [
    {
      title: 'Column 1',
      key: 'name',
      dataIndex: 'name',
      width: 300
    },
    {
      title: 'Column 2',
      key: 'description',
      dataIndex: 'description',
      width: 200
    },
    {
      title: 'Column 3',
      key: 'age',
      dataIndex: 'age'
    }
  ]

  const tableData = Array.from({ length: 180 }).map((_, index): RowType => ({
    name: `Value ${index + 1}`,
    description: `Description ${index + 1}`,
    age: index + 1,
    key: `${index + 1}`
  }))

  return (
    <StyledSpace themeKey={themeKey} direction='vertical' size={16}>
      <SegmentedButton value={[themeKey]} items={segmentedButtonOptions} onChange={value => setThemeKey(value[0] as ThemeKey)}/>
      <Button onClick={() => setIsOpen(true)} text={'Open modal'}/>
      <Sidebar visible={isOpen} onClose={() => setIsOpen(false)} title="Sidebar">
        <Text>Content</Text>
      </Sidebar>
      <TableWrapper>
        <Table
          columns={tableColumns}
          dataSource={tableData}
        />
      </TableWrapper>
    </StyledSpace>
  )
}