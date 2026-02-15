import { useState } from 'react'
import styled from 'styled-components'
import {
  SegmentedButton,
  Button,
  Sidebar,
  Text,
  Table,
  Space
} from '@kaspersky/hexa-ui'
import { SegmentedButtonOption } from '@kaspersky/hexa-ui/src/segmented-button/types'
import { ThemeKey } from '@kaspersky/hexa-ui/design-system'

const DefaultContentWrapper = styled.div`
  width: 100%;
`

const StyledSpace = styled(Space)<{ themeKey: ThemeKey }>`
  border-radius: 16px;
  padding: 16px;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow: auto;
  position: relative;
  z-index: 1;
  width: 100%;
`

const TableWrapper = styled.div`
  width: 100%;
`

type RowType = { name: string, description: string, age: number, key: string }

export type DefaultContentProps = {
  themeKey: ThemeKey
  setThemeKey: (key: ThemeKey) => void
  addMenuItem: () => void
  removeMenuItem: () => void
  toggleUser: () => void
  isAdded: boolean
}

export function DefaultContent({
  themeKey,
  setThemeKey,
  addMenuItem,
  removeMenuItem,
  toggleUser,
  isAdded
}: DefaultContentProps) {
  const [isOpen, setIsOpen] = useState(false)

  const segmentedButtonOptions: SegmentedButtonOption[] = [
    { value: ThemeKey.Light, text: ThemeKey.Light },
    { value: ThemeKey.Dark, text: ThemeKey.Dark }
  ]

  const tableColumns = [
    { title: 'Column 1', key: 'name', dataIndex: 'name', width: 300 },
    { title: 'Column 2', key: 'description', dataIndex: 'description', width: 200 },
    { title: 'Column 3', key: 'age', dataIndex: 'age' }
  ]

  const tableData = Array.from({ length: 180 }).map((_, index): RowType => ({
    name: `Value ${index + 1}`,
    description: `Description ${index + 1}`,
    age: index + 1,
    key: `${index + 1}`
  }))

  return (
    <DefaultContentWrapper>
      <StyledSpace style={{ alignItems: 'flex-start' }} themeKey={themeKey} direction="vertical" size={16}>
        <SegmentedButton
          value={[themeKey]}
          items={segmentedButtonOptions}
          onChange={value => setThemeKey(value[0] as ThemeKey)}
        />
        <Button onClick={() => setIsOpen(true)} text="Open modal" />
        <Space size="10" align="auto" direction="vertical">
          <Space size="10" justify="space-between">
            <Button onClick={addMenuItem} disabled={isAdded}>
              Add new menu item
            </Button>
            <Button onClick={removeMenuItem} disabled={!isAdded}>
              Remove new menu item
            </Button>
          </Space>
          <Space size="10" justify="space-between">
            <Button onClick={toggleUser}>Toggle user</Button>
          </Space>
        </Space>
        <Sidebar visible={isOpen} onClose={() => setIsOpen(false)} title="Sidebar">
          <Text>Content</Text>
        </Sidebar>
        <TableWrapper>
          <Table columns={tableColumns} dataSource={tableData} />
        </TableWrapper>
      </StyledSpace>
    </DefaultContentWrapper>
  )
}
