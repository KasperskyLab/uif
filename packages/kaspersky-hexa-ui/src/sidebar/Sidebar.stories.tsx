import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { Size } from '@design-system/types'
import { generateId } from '@helpers/generateId'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { ActionButton } from '@src/action-button'
import { Badge } from '@src/badge'
import { ButtonMode } from '@src/button'
import { Modal } from '@src/modal'
import { Space } from '@src/space'
import { Submenu, SubmenuItemProps } from '@src/submenu'
import { Tabs } from '@src/tabs'
import { Toolbar } from '@src/toolbar'
import { getItemsLeft, getItemsRight } from '@src/toolbar/stories/Toolbar.stories'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React, { useState } from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import { Help, SizeMaximize, SizeMinimize, Youtube } from '@kaspersky/hexa-ui-icons/16'
import { Star } from '@kaspersky/hexa-ui-icons/24'

import { Button } from '../button'
import { Text } from '../typography'

import MetaData from './__meta__/meta.json'
import { StyledBorder, SubHeaderWrapper } from './components/SidebarHeader'
import { Sidebar } from './Sidebar'
import { SidebarProps, SidebarSize } from './types'

const meta: Meta<SidebarProps> = {
  title: 'Hexa UI Components/Sidebar',
  component: Sidebar,
  argTypes: {
    ...sbHideControls(['theme'])
  },
  args: {
    testId: 'sidebar-test-id',
    klId: 'sidebar-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.pixsoView
  }
}
export default meta

type SidebarWithButtonProps = SidebarProps & { buttonText?: string }

type StoryWithButton = StoryObj<SidebarWithButtonProps>

const SidebarHeader = () => (
  <SubHeaderWrapper paddingBottom>
    <Toolbar left={getItemsLeft()} right={getItemsRight()} />
  </SubHeaderWrapper>
)

const tabs = (
  <Tabs padding noMargin>
    <Tabs.TabPane
      tab={<Tabs.TabPaneHead text="Tab 1" indicator indicatorMode="critical" />}
      key="1"
    >
    </Tabs.TabPane>
    <Tabs.TabPane
      tab={<Tabs.TabPaneHead text="Tab 2" indicator indicatorMode="accent" />}
      key="2"
    >
    </Tabs.TabPane>
    <Tabs.TabPane
      tab={<Tabs.TabPaneHead text="Tab 3" indicator indicatorMode="accent" />}
      key="3"
    >
    </Tabs.TabPane>
    <Tabs.TabPane
      tab={<Tabs.TabPaneHead text="Tab 4" />}
      key="4"
    >
    </Tabs.TabPane>
  </Tabs>
)

const leftFooter = (
  <>
    <Button mode="primary">Save</Button>
    <Button mode="secondary">Cancel</Button>
  </>
)

const SidebarWithButton = (props: SidebarWithButtonProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        {props.buttonText || 'Open'}
      </Button>
      <Sidebar
        {...props}
        visible={isOpen}
        onClose={() => setIsOpen(false)}
        title={props.title || 'Sidebar'}
      >
        {props.children || <Text>Content</Text>}
      </Sidebar>
    </>
  )
}

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
    },
    {
      type: 'row',
      text: 'Tab 1.3',
      content: 'Content 1.3',
      key: 'tab-1-3'
    }
  ]
)

export const Basic: StoryWithButton = {
  render: (args) => <SidebarWithButton {...args} />
}

export const SidebarWithTwoButton: StoryObj<SidebarWithButtonProps> = {
  render: (args) => {
    const [isOpen1, setIsOpen1] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    return (
      <>
        <Button onClick={() => { setIsOpen1(true) }}>
          {args.buttonText || 'Open1'}
        </Button>
        <Button onClick={() => { setIsOpen2(true) }}>
          {args.buttonText || 'Open2'}
        </Button>
        <Sidebar
          visible={isOpen1}
          onClose={() => setIsOpen1(false)}
          title="Sidebar 1"
          mask={false}
          size="small"
          destroyOnClose={true}
        >
          {args.children || <Text>Content1</Text>}
        </Sidebar>
        <Sidebar
          visible={isOpen2}
          onClose={() => setIsOpen2(false)}
          title="Sidebar 2"
          mask={false}
          size="small"
          destroyOnClose={true}
        >
          {args.children || <Text>Content2</Text>}
        </Sidebar>
      </>
    )
  }
}

export const WithHeaderActions: StoryWithButton = {
  render: (args) => <SidebarWithButton {...args} />,
  args: {
    headerActions: (
      <Space gap={16}>
        <ActionButton size="large" icon={<Youtube />} />
        <ActionButton size="large" icon={<Help />} />
      </Space>
    )
  }
}

export const Expandable: StoryWithButton = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    const [sidebarSize, setSidebarSize] = useState<'extraSmall' | 'flex'>('extraSmall')
    const [iconSidebarSize, seticonSidebarSize] = useState<'SizeMaximize' | 'SizeMinimize'>('SizeMaximize')
    const handleClickMaximize = () => {
      setSidebarSize('flex')
      seticonSidebarSize('SizeMinimize')
    }
    const handleClickMinimize = () => {
      setSidebarSize('extraSmall')
      seticonSidebarSize('SizeMaximize')
    }
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>
          {args.buttonText || 'Open'}
        </Button>
        <Sidebar
          {...args}
          visible={isOpen}
          size={sidebarSize === 'flex' ? undefined : sidebarSize}
          flex={sidebarSize === 'flex'}
          onClose={() => setIsOpen(false)}
          title="Sidebar"
          headerActions={
            <ActionButton
              size="large"
              icon={iconSidebarSize === 'SizeMaximize' ? <SizeMaximize /> : <SizeMinimize />}
              onClick={iconSidebarSize === 'SizeMaximize' ? handleClickMaximize : handleClickMinimize}
            />
          }
        >
          {args.children || <Text>Content</Text>}
        </Sidebar>
      </>
    )
  }
}

export const WithSubtitle: StoryWithButton = {
  render: (args) => <SidebarWithButton {...args} />,
  args: {
    subtitle: 'Sidebar 1200',
    titlePostfix: (
      <div>
        <Badge count={10} />
      </div>
    ),
    titlePrefix: <Star />
  }
}

export const WithLongTitle: StoryWithButton = {
  render: (args) => <SidebarWithButton {...args} />,
  args: {
    subtitle: 'Sidebar subtitle',
    title: 'I am a long sidebar title. You can configure my behavior via \'titleLineClamp\' prop. If the value is 1, the text is truncated as usual. The value of this prop determines the number of lines that are not truncated.',
    truncateTitle: true,
    titleLineClamp: 2,
    titlePostfix: <div><Badge count={10} /></div>,
    titlePrefix: <Star />
  },
  argTypes: {
    subtitle: { table: { disable: true } },
    titlePostfix: { table: { disable: true } },
    titlePrefix: { table: { disable: true } },
    size: { table: { disable: true } }
  }
}

export const WithFixedElements: StoryObj = {
  render: (args) => <SidebarWithButton {...args} />,
  args: {
    subHeader: (
      <>
        <SidebarHeader /> 
        <StyledBorder />
      </>),
    children: (
      <div>
        <p style={{ height: '200vh' }}>Scrollable content</p>
      </div>
    )
  }
}

export const WithoutOverlay: StoryWithButton = {
  render: (args) => <SidebarWithButton {...args} />,
  args: {
    mask: false
  }
}

const SidebarsContainer = styled.div`
  display: flex;
  gap: 12px;
`

export const Sizes: StoryWithButton = {
  render: (args: SidebarProps) => {
    const sizes: SidebarSize[] = [
      Size.ExtraSmall,
      Size.Small,
      Size.Medium,
      Size.Large
    ]

    return (
      <SidebarsContainer>
        {sizes.map((size) => (
          <SidebarWithButton
            key={size}
            size={size}
            buttonText={size}
            {...args}
          />
        ))}
        <SidebarWithButton key="flex" buttonText="flex" flex {...args} />
      </SidebarsContainer>
    )
  }
}

type WithFooterProps = {
  'Button 1 Text': string,
  'Button 2 Text': string,
  'Button 3 Text': string,
  'Button 1 Mode': ButtonMode,
  'Button 2 Mode': ButtonMode,
  'Button 3 Mode': ButtonMode,
  'Button 3 Position': 'left' | 'right' | 'none'
} & SidebarWithButtonProps

export const WithFooter: StoryObj<WithFooterProps> = {
  render: (args) => {
    const left =
      args['Button 3 Position'] === 'left'
        ? (
            <>
              <Button mode={args['Button 1 Mode']}>{args['Button 1 Text']}</Button>
              <Button mode={args['Button 2 Mode']}>{args['Button 2 Text']}</Button>
              <Button mode={args['Button 3 Mode']}>{args['Button 3 Text']}</Button>
            </>
          )
        : (
            <>
              <Button mode={args['Button 1 Mode']}>{args['Button 1 Text']}</Button>
              <Button mode={args['Button 2 Mode']}>{args['Button 2 Text']}</Button>
            </>
          )

    const right =
      args['Button 3 Position'] === 'right'
        ? <Button mode={args['Button 3 Mode']}>{args['Button 3 Text']}</Button>
        : undefined

    return (
      <SidebarWithButton
        footerLeft={left}
        footerRight={right}
        {...args}
      />
    )
  },
  argTypes: {
    'Button 1 Text': {
      control: { type: 'text' }
    },
    'Button 1 Mode': {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'tertiary',
        'dangerFilled',
        'dangerOutlined'
      ]
    },
    'Button 2 Text': {
      control: { type: 'text' }
    },
    'Button 2 Mode': {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'tertiary',
        'dangerFilled',
        'dangerOutlined'
      ]
    },
    'Button 3 Position': {
      control: { type: 'radio' },
      options: ['left', 'right', 'none']
    },
    'Button 3 Text': {
      control: { type: 'text' }
    },
    'Button 3 Mode': {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'tertiary',
        'dangerFilled',
        'dangerOutlined'
      ]
    }
  },
  args: {
    'Button 1 Text': 'Save',
    'Button 1 Mode': 'primary',
    'Button 2 Text': 'Cancel',
    'Button 2 Mode': 'secondary',
    'Button 3 Position': 'right',
    'Button 3 Text': 'Action',
    'Button 3 Mode': 'dangerFilled'
  }
}

const ButtonGroup = styled.div`
  display: grid;
  grid-gap: 10px;
  position: fixed;
  background: white;
  z-index: 9999;
  padding: 8px;
  left: 20px;
  bottom: 20px;
`

export const Overlap: StoryObj = {
  render: () => {
    const [sizes, setSizes] = React.useState<{
      [key: string]: { size: SidebarSize | 'flex', visible: boolean }
    }>({})
    const [inner, setInner] = useState<{
      [key: string]: boolean
    }>({})

    const buttons: (SidebarSize | 'flex')[] = [
      Size.ExtraSmall,
      Size.Small,
      Size.Medium,
      Size.Large,
      'flex'
    ]

    return (
      <div>
        <ButtonGroup>
          {buttons.map((size) => (
            <Button
              key={size}
              onClick={() => {
                const id = generateId()
                setSizes({ ...sizes, [id]: { size, visible: false } })
                setTimeout(() => {
                  setSizes({ ...sizes, [id]: { size, visible: true } })
                }, 0)
              }}
            >
              Add {size}
            </Button>
          ))}
        </ButtonGroup>
        {Object.entries(sizes).map(([key, { size, visible }], index) => (
          <Sidebar
            key={key}
            size={size === 'flex' ? 'medium' : size}
            flex={size === 'flex'}
            visible={visible}
            onClose={() =>
              setSizes({ ...sizes, [key]: { size, visible: false } })
            }
            title="Sidebar"
          >
            <Text>
              {size} {index}
            </Text>
            <Button onClick={() => setInner(prev => ({ ...prev, [key]: true }))} >Open inner</Button>
            <Sidebar
              key={`${key}_inner`}
              size={Size.ExtraSmall}
              flex={false}
              visible={inner[key]}
              onClose={() =>
                setInner(prev => ({ ...prev, [key]: false }))
              }
              title="Sidebar"
            >
              <Text>
                {size} {index} inner
              </Text>
            </Sidebar>
          </Sidebar>
        ))}
      </div>
    )
  }
}

export const CloseConfirmation: StoryObj = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [showModal, setShowModal] = React.useState(false)

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <Modal
          visible={showModal}
          mode="default"
          header="Подтверждение закрытия"
          content="Вы действительно хотите закрыть сайдбар?"
          onCancel={() => setShowModal(false)}
          actions={{
            FIRST_ACTION: {
              text: 'OK',
              mode: 'primary',
              onClick: () => {
                setIsOpen(false)
                setShowModal(false)
              }
            },
            SECOND_ACTION: {
              text: 'Cancel',
              mode: 'secondary',
              onClick: () => setShowModal(false)
            }
          }}
        />
        <Sidebar
          mask={!showModal}
          size={Size.Medium}
          visible={isOpen}
          onClose={() => setShowModal(true)}
          title="Sidebar"
        >
          <Text>Content</Text>
        </Sidebar>
      </>
    )
  }
}

export const WithSubmenu: StoryWithButton = {
  render: (args: SidebarWithButtonProps) => <SidebarWithButton {...args} />,
  args: {
    size: 'large',
    footerLeft: leftFooter,
    children: <Submenu items={itemsSubmenu} />,
    noPaddingContent: true
  }
}

export const WithToolbar: StoryWithButton = {
  render: (args: SidebarWithButtonProps) => <SidebarWithButton {...args} />,
  args: {
    noPaddingContent: true,
    truncateTitle: true,
    size: 'large',
    footerLeft: leftFooter,
    children: <Submenu items={itemsSubmenu} />,
    subHeader: (
      <>
        <SidebarHeader />
        <StyledBorder />
      </>
    )
  }
}

export const WithTabs: StoryWithButton = {
  render: (args: SidebarWithButtonProps) => <SidebarWithButton {...args} />,
  args: {
    size: 'large',
    subHeader: tabs,
    footerLeft: leftFooter,
    noPaddingContent: true,
    children: <Submenu items={itemsSubmenu} />
  }
}

export const WithToolbarAndTabs: StoryWithButton = {
  render: (args: SidebarWithButtonProps) => <SidebarWithButton {...args} />,
  args: {
    size: 'large',
    footerLeft: leftFooter,
    noPaddingContent: true,
    children: <Submenu items={itemsSubmenu} />,
    subHeader: (
      <>
        <SidebarHeader />
        <StyledBorder />
      </>
    )
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.sidebar },
  render: args => <ThemedPalette {...args} />
}
