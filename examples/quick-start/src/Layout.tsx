import { Dispatch, SetStateAction, useState } from 'react'
import styled from 'styled-components'
import {
  SegmentedButton,
  Button,
  Sidebar,
  Text,
  Table,
  Space,
  Menu,
  Nav,
  UserNav,
  ServicesNav,
  Hamburger
} from '@kaspersky/components'
import { SegmentedButtonOption } from '@kaspersky/components/src/segmented-button/types'
import { ThemeKey, themeColors } from '@kaspersky/components/design-system'
import { navItems, navUserItems, favItems } from '@kaspersky/components/src/menu/stories/menu-items'

import { AppLogo } from './AppLogo'

const StyledSpace = styled(Space)<{ themeKey: ThemeKey }>`
  border-radius: 16px;
  padding: 16px;
  align-items: flex-start;
  overflow: auto;
  position: relative;
  z-index: 1;
`

const StyledMenu = styled(Menu)`
  position: relative;
  z-index: 2;
`

const StyledRootSpace = styled(Space)<{ themeKey: ThemeKey }>`
  height: 100vh;
  align-items: normal;
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
  const [menuMinimized, setMenuMinimized] = useState(false)
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

  const menuProps = {
    width: 280,
    trigger: null,
    collapsedWidth: 64,
    collapsible: true
  }

  const tableData = Array.from({ length: 180 }).map((_, index): RowType => ({
    name: `Value ${index + 1}`,
    description: `Description ${index + 1}`,
    age: index + 1,
    key: `${index + 1}`
  }))

  console.log(navItems)

  return (
    <StyledRootSpace themeKey={themeKey} direction='horizontal' size={0} wrap='nowrap'>
      <StyledMenu {...menuProps} collapsed={menuMinimized}>
        <ServicesNav>
          <Hamburger className='item left' role='button' name='hamburger' onClick={ () => setMenuMinimized(!menuMinimized) } />
        </ServicesNav>
        <AppLogo />
        <Nav navItems={navItems} favItems={favItems} minimized={menuMinimized} favsEnabled={true} />
        <UserNav navItems={navUserItems} minimized={menuMinimized} childPop={true} />
      </StyledMenu>
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
    </StyledRootSpace>
  )
}