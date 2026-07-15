export const withSubmenuExample = `
const SidebarWithSubmenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const itemsSubmenu: SubmenuItemProps[] = (
    [
      {
        type: 'row',
        text: 'Tab 1.1',
        content: 'Content 1.1',
        key: 'tab-1-1'
      },
      {
        type: 'row',
        text: 'Tab 1.2',
        content: 'Content 1.2',
        key: 'tab-1-2'
      }
    ]
  )

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open
      </Button>
      <Sidebar
        visible={isOpen}
        onClose={() => setIsOpen(false)}
        noPaddingContent
        title="Sidebar"
        size="large"
      >
        <Submenu items={itemsSubmenu} />
      </Sidebar>
    </>
  )
}
`

export const withToolbarAndSubmenuExample = `
const SidebarWithToolbarAndSubmenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const itemsSubmenu: SubmenuItemProps[] = (
    [
      {
        type: 'row',
        text: 'Tab 1.1',
        content: 'Content 1.1',
        key: 'tab-1-1'
      },
      {
        type: 'row',
        text: 'Tab 1.2',
        content: 'Content 1.2',
        key: 'tab-1-2'
      }
    ]
  )

  const leftItems: ToolbarItems[] = [
    {
      type: 'button',
      key: 'button1',
      children: 'Button 1'
    },
    {
      type: 'button',
      key: 'button2',
      children: 'Button 2'
    }
  ]

  const rigthItems: ToolbarItems[] = [
    {
      type: 'button',
      key: 'button3',
      children: 'Button 3'
    }
  ]

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open
      </Button>
      <Sidebar
        visible={isOpen}
        onClose={() => setIsOpen(false)}
        noPaddingContent
        title="Sidebar"
        size="large"
        titleLineClamp={1}
        subHeader={(
          <>
            <SubHeaderWrapper paddingBottom>
              <Toolbar left={leftItems} right={rigthItems} />
            </SubHeaderWrapper>
            <StyledBorder />
          </>
        )}
      >
        <Submenu items={itemsSubmenu} />
      </Sidebar>
    </>
  )
}
`

export const withTabsAndSubmenuExample = `
const SidebarWithTabsAndSubmenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const itemsSubmenu: SubmenuItemProps[] = (
    [
      {
        type: 'row',
        text: 'Tab 1.1',
        content: 'Content 1.1',
        key: 'tab-1-1'
      },
      {
        type: 'row',
        text: 'Tab 1.2',
        content: 'Content 1.2',
        key: 'tab-1-2'
      }
    ]
  )

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open
      </Button>
      <Sidebar
        visible={isOpen}
        onClose={() => setIsOpen(false)}
        noPaddingContent
        title="Sidebar"
        size="large"
        subHeader={(
          <Tabs padding noMargin>
            <Tabs.TabPane
              tab={<Tabs.TabPaneHead text="Tab 1" indicator indicatorMode="critical" />}
              key="1"
            />
            <Tabs.TabPane
              tab={<Tabs.TabPaneHead text="Tab 2" indicator indicatorMode="accent" />}
              key="2"
            />
          </Tabs>
        )}
      >
        <Submenu items={itemsSubmenu} />
      </Sidebar>
    </>
  )
}
`

export const withToolbarTabsAndSubmenuExample = `
const SidebarWithToolbarTabsAndSubmenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const itemsSubmenu: SubmenuItemProps[] = (
    [
      {
        type: 'row',
        text: 'Tab 1.1',
        content: 'Content 1.1',
        key: 'tab-1-1'
      },
      {
        type: 'row',
        text: 'Tab 1.2',
        content: 'Content 1.2',
        key: 'tab-1-2'
      }
    ]
  )

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open
      </Button>
      <Sidebar
        visible={isOpen}
        onClose={() => setIsOpen(false)}
        noPaddingContent
        title="Sidebar"
        size="large"
        subHeader={(
          <>
            <SubHeaderWrapper paddingBottom>
              <Toolbar left={leftItems} right={rigthItems} />
            </SubHeaderWrapper>
            <Tabs padding noMargin>
              <Tabs.TabPane
                tab={<Tabs.TabPaneHead text="Tab 1" indicator indicatorMode="critical" />}
                key="1"
              />
              <Tabs.TabPane
                tab={<Tabs.TabPaneHead text="Tab 2" indicator indicatorMode="accent" />}
                key="2"
              />
            </Tabs>
          </>

        )}
      >
        <Submenu items={itemsSubmenu} />
      </Sidebar>
    </>
  )
}
`
