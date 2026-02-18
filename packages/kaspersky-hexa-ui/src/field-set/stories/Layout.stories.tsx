import {
  Button,
  Checkbox,
  DetailsPage,
  FieldSet,
  FieldSetItem,
  Grid,
  H4, 
  H5,
  Hamburger,
  InformationCard,
  LayoutPreset,
  Link,
  Menu,
  Notification,
  P,
  PageHeader,
  SectionMessage,
  Select, 
  ServicesNav,
  Space,
  Table,
  Tabs,
  Textbox,
  Toggle
} from '@src/index'
import { AppLogo } from '@src/menu/stories/AppLogo'
import { clickHandler } from '@src/menu/stories/CustomItem'
import { beforeItems } from '@src/menu/stories/menu-items'
import { getNotificationsIcon } from '@src/menu/stories/Notifications'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React, { useState } from 'react'
import styled from 'styled-components'
 
import { 
  BookmarkOutline,
  BookmarkSolid,
  Help
} from '@kaspersky/hexa-ui-icons/16'

import { 
  gridItems,
  navItems,
  navUserItems,
  tableColumns,
  tableDataSource,
  tableToolbarButtons
} from './data'

const meta: Meta = {
  title: 'Hexa UI Components/Layout'
}
export default meta

const RootLayout = styled.div`
  display: flex;
  height: 100vh;
  background: transparent;
  padding: 0;
  margin: -24px;
  overflow-y: auto;
`

const PageContent = styled(Space).attrs({
  direction: 'vertical',
  gap: 'separated'
})`
  padding: 0 24px 24px 24px;
`

function Section ({
  children,
  description,
  title
}: { description?: string, children: React.ReactNode, title: string }) {
  return (
    <Space align="start" direction="vertical" gap="section">
      <Space align="start" direction="vertical" gap="related">
        <H4>{title}</H4>
        {description && <P>{description}</P>}
      </Space>

      <div>
        {children}
      </div>
    </Space>
  )
}

const items1: FieldSetItem[] = [
  {
    control: {
      component: 'textbox',
      value: 'Name'
    },
    label: 'InputText'
  },
  {
    control: {
      component: 'textbox-textarea',
      value: 'вывф'
    },
    label: 'InputTextArea'
  },
  {
    control: {
      component: 'radio',
      options: [
        { label: 'ESP', value: 'esp' },
        { label: 'AH', value: 'ah' }
      ],
      value: 'esp',
      vertical: true
    },
    label: 'RadioGroup'
  },
  {
    control: {
      component: 'textbox-number',
      value: 28800
    },
    description: 'Default is 28800 seconds',
    gridLayout: '3fr 3fr 6fr',
    label: 'InputNumber (Short)'
  },
  {
    control: <>
      <Textbox value="81.163.20.206" />
      {' / '}
      <Select 
        options={[
          { label: '8070', value: '8070' },
          { label: '8080', value: '8080' },
          { label: '8090', value: '8090' }
        ]}
        value="8080"
      />
    </>,
    label: 'Field with two fields'
  }
]

const items2: FieldSetItem[] = [
  {
    control: {
      component: 'select',
      options: [
        { label: 'AES-GCM-128', value: 'aes-gcm-128' },
        { label: 'AES-GCM-256', value: 'aes-gcm-256' }
      ],
      value: 'aes-gcm-128'
    },
    label: 'InputSelect'
  },
  {
    control: {
      component: 'select',
      options: [
        { label: 'None', value: -1 },
        { label: 'Yes', value: 1},
        { label: 'No', value: 0 }
      ],
      value: -1
    },
    label: 'InputSelect'
  },
  {
    control: {
      component: 'select',
      options: [
        { label: 'None', value: -1 },
        { label: 'Yes', value: 1},
        { label: 'No', value: 0 }
      ],
      value: -1
    },
    label: 'InputSelect'
  },
  {
    control: {
      component: 'textbox-number',
      value: 3600
    },
    description: 'Default is 3600 seconds.',
    label: 'InputNumber'
  }
]

const items3: FieldSetItem[] = [
  {
    additionalComponent: <Checkbox>checkbox</Checkbox>,
    control: {
      component: 'textbox',
      placeholder: 'Text'
    },
    label: 'InputText'
  }
]

const souceCodeLink = (
  <Link 
    href="https://github.com/KasperskyLab/uif/blob/master/packages/kaspersky-hexa-ui/src/field-set/FieldSet.stories.tsx"
    target="_blank" 
    text="Source code"
  />
)

export const Basic: StoryObj = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false)
    const [tab1ActiveKey, setTab1ActiveKey] = useState('1')
    const [tab2ActiveKey, setTab2ActiveKey] = useState('1')
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

    return (
      <RootLayout>
        <Menu
          beforeItems={beforeItems}
          collapsed={collapsed}
          collapsedWidth={64}
          navItems={navItems}
          navUserItems={navUserItems}
          pinIcon={<BookmarkOutline />}
          unpinIcon={<BookmarkSolid />}
          width={280}
          style={{ position: 'sticky', top: 0, zIndex: 10 }}
        >
          <ServicesNav>
            <Hamburger
              className="item left"
              collapsed={collapsed}
              onClick={() => setCollapsed(prevSate => !prevSate)}
            />
            {getNotificationsIcon(true)}
            <Help className="item" role="button" onClick={() => clickHandler('open online help')} />
          </ServicesNav>
          <AppLogo/>
        </Menu>
        <Notification />
        <div>
          <PageHeader 
            description="Описание страницы"
            elementAfter={souceCodeLink}
            title="Заголовок Страницы"
          />

          <PageContent>
            <Tabs activeKey={tab1ActiveKey} onChange={setTab1ActiveKey}>
              <Tabs.TabPane key="1" tab="Form">
                <Section
                  description="Описание первой секции"
                  title="Первая секция"
                >
                  <Space align="stretch" direction="vertical" gap="section">
                    <Space align="start" direction="vertical" gap="grouped">
                      <H5>Группа полей</H5>
                      <FieldSet gridPreset={LayoutPreset.p_3_6} items={items1} />
                    </Space>

                    <Space align="start" direction="vertical" gap="grouped">
                      <H5>Группа полей</H5>
                      <FieldSet gridPreset={LayoutPreset.p_3_6} items={items2} />
                    </Space>

                    <Space align="start" direction="vertical" gap="grouped">
                      <H5>Связанные поля</H5>
                      <FieldSet gridPreset={LayoutPreset.p_3_6} items={items3} />
                    </Space>
                  </Space>
                </Section>
              </Tabs.TabPane>
              <Tabs.TabPane
                key="2"
                disabled
                tab={<Tabs.TabPaneHead text="Empty" infoTooltip="it is empty!" />}    
              >
                Empty
              </Tabs.TabPane>
            </Tabs>

            <Section
              description="Description второй секции"
              title="Вторая секция"
            >
              <Table
                columns={tableColumns}
                dataSource={tableDataSource}
                pagination={{
                  showSizeChanger: true
                }}
                rowSelection={{
                  onChange: setSelectedRowKeys,
                  selectedRowKeys
                }}
                toolbar={{
                  left: tableToolbarButtons,
                  showSearch: true,
                  showFilterSidebar: true
                }}
              />
            </Section>

            <Tabs activeKey={tab2ActiveKey} onChange={setTab2ActiveKey}>
              <Tabs.TabPane key="1" tab="Card">
                <Section title="Третья секция">
                  <Space maxWidth="medium">
                    <Grid cols={2}>
                      {gridItems.map(item => (
                        <Grid.Item key={item.title}>
                          <InformationCard 
                            description={item.description}
                            footer={<Button mode="secondary">Настройки</Button>}
                            rightCorner={<Toggle />}
                            style={{ minHeight: 200 }}
                            title={item.title}
                          />
                        </Grid.Item>
                      ))}
                    </Grid>
                  </Space>
                </Section>
              </Tabs.TabPane>
              <Tabs.TabPane
                key="2"
                disabled
                tab={<Tabs.TabPaneHead text="Empty" infoTooltip="it is empty!" />}    
              >
                Empty
              </Tabs.TabPane>
            </Tabs>
          </PageContent>
        </div>
      </RootLayout>
    )
  }
}

export const SidebarStory: StoryObj = {
  name: 'Sidebar',
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    const [tabActiveKey, setTabActiveKey] = useState('win')
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

    return (
      <>
        <Space>
          <Button onClick={() => setIsOpen(true)}>
            Open
          </Button>
          {souceCodeLink}
        </Space>
        
        <DetailsPage
          actions={{
            FIRST_ACTION: {
              onClick: () => setIsOpen(false),
              text: 'Save and close'
            },
            SECOND_ACTION: {
              disabled: true,
              text: 'Save'
            },
            THIRD_ACTION: {
              onClick: () => setIsOpen(false),
              text: 'Cancel'
            }
          }}
          defaultActiveKey={tabActiveKey}
          navigation={[
            {
              key: 'general',
              text: 'Обзор',
              content: 'Обзор'
            },
            {
              key: 'wind',
              text: 'Windows',
              navigation: {
                items: [
                  {
                    type: 'row',
                    text: 'Первая секция',
                    content: (
                      <Section
                        description="Описание первой секции"
                        title="Первая секция"
                      >
                        <H5>Группа полей</H5>
                        <FieldSet gridPreset={LayoutPreset.p_3_6} items={items1} style={{ marginTop: 16 }} />

                        <H5 style={{ marginTop: 24 }}>Группа полей</H5>
                        <FieldSet gridPreset={LayoutPreset.p_3_6} items={items2} style={{ marginTop: 16 }} />

                        <H5 style={{ marginTop: 24 }}>Связанные поля</H5>
                        <FieldSet gridPreset={LayoutPreset.p_3_6} items={items3} style={{ marginTop: 16 }} />
                      </Section>
                    ),
                    key: 'section-1'
                  },
                  {
                    type: 'row',
                    text: 'Вторая секция',
                    content: (
                      <Section
                        description="Description второй секции"
                        title="Вторая секция"
                      >
                        <Table
                          columns={tableColumns}
                          dataSource={tableDataSource}
                          pagination={{
                            showSizeChanger: true
                          }}
                          rowSelection={{
                            onChange: setSelectedRowKeys,
                            selectedRowKeys
                          }}
                          toolbar={{
                            left: tableToolbarButtons,
                            showSearch: true,
                            showFilterSidebar: true
                          }}
                        />
                      </Section>
                    ),
                    key: 'section-2'
                  },
                  {
                    type: 'row',
                    text: 'Третья секция',
                    content: (
                      <Section title="Третья секция">
                        <Grid cols={2} style={{ maxWidth: 1056 }}>
                          {gridItems.map(item => (
                            <Grid.Item key={item.title}>
                              <InformationCard 
                                description={item.description}
                                footer={<Button mode="secondary">Настройки</Button>}
                                rightCorner={<Toggle />}
                                style={{ minHeight: 180 }}
                                title={item.title}
                              />
                            </Grid.Item>
                          ))}
                        </Grid>
                      </Section>
                    ),
                    key: 'section-3'
                  }
                ]
              }
            },
            {
              key: 'mac',
              text: 'Mac',
              content: 'Mac'
            },
            {
              key: 'linux',
              text: 'Linux',
              content: 'Linux'
            },
            {
              key: 'android',
              text: 'Android',
              content: 'Android'
            },
            {
              key: 'ios',
              text: 'IOS',
              content: 'IOS'
            }
          ]}
          onChange={setTabActiveKey}
          onClose={() => setIsOpen(false)}
          subHeader={
            <>
              <div style={{ padding: '0 24px 24px 24px' }}>
                <SectionMessage closable={false} mode="warning">
                  Изменения настроек для устройств под управлением Windows, macOS, Linux и Android 
                  не могут быть применены.
                </SectionMessage>
              </div>  
              <div>Workaround. That node would be hidden.</div>
            </>
          }
          title="Sidebar 1200"
          visible={isOpen}
        />
      </>
    )
  }
}
