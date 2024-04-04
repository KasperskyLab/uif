import React, { useState } from 'react'
import MetaData from './__meta__/meta.json'
import { Meta, StoryObj } from '@storybook/react'
import { SidebarProps, SidebarSize } from './types'
import { Sidebar } from './Sidebar'
import { badges } from '@sb/badges'
import { sbHideControls } from '@helpers/storybookHelpers'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { Button } from '../button'
import { Text } from '../typography'
import styled from 'styled-components'
import { Size } from '@design-system/types'
import { Space } from '@src/space'
import { ActionButton } from '@src/action-button'
import { Help, Youtube } from '@kaspersky/icons/16'
import { Star } from '@kaspersky/icons/24'
import { Badge } from '@src/badge'
import { v4 as uuidv4 } from 'uuid'
import { ButtonMode } from '@src/button/types'
import { Tabs, TabsProps } from '@src/tabs'
import { Modal } from '@src/modal'
import { Toolbar } from '@src/toolbar'
import { itemsLeft, itemsRight } from '@src/toolbar/stories/Toolbar.stories'

const meta: Meta<SidebarProps> = {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  argTypes: {
    ...sbHideControls(['theme', 'closable', 'closeIcon', 'keyboard', 'maskClosable'])
  },
  args: {
    testId: 'sidebar-test-id',
    klId: 'sidebar-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.figmaView
  }
}
export default meta

type SidebarWithButtonProps = SidebarProps & { buttonText?: string }

type StoryWithButton = StoryObj<SidebarWithButtonProps>

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
        title="Sidebar"
      >
        {props.children || <Text>Content</Text>}
      </Sidebar>
    </>
  )
}

export const Basic: StoryWithButton = {
  render: (args: SidebarWithButtonProps) => <SidebarWithButton {...args} />
}

export const WithHeaderActions: StoryWithButton = {
  render: (args: SidebarWithButtonProps) => <SidebarWithButton {...args} />,
  args: {
    headerActions: (
      <Space size={8}>
        <ActionButton size="large" icon={<Youtube />} />
        <ActionButton size="large" icon={<Help />} />
      </Space>
    )
  }
}

export const WithSubtitle: StoryWithButton = {
  render: (args: SidebarWithButtonProps) => <SidebarWithButton {...args} />,
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

export const WithFixedElements: StoryObj = {
  render: (args: SidebarWithButtonProps) => <SidebarWithButton {...args} />,
  args: {
    subHeader: (
      <div style={{ padding: '0 24px' }}>
        <Toolbar left={itemsLeft} right={itemsRight} />
      </div>
    ),
    children: (
      <div>
        <p style={{ height: '200vh' }}>Scrollable content</p>
      </div>
    )
  }
}

export const WithoutOverlay: StoryWithButton = {
  render: (args: SidebarWithButtonProps) => <SidebarWithButton {...args} />,
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
        <SidebarWithButton key={'flex'} buttonText={'flex'} flex {...args} />
      </SidebarsContainer>
    )
  }
}

const FooterContainer = styled.div`
  display: flex;
  gap: 12px;
`

type WithFooterProps = {
  'Button 1 Text': string,
  'Button 2 Text': string,
  'Button 3 Text': string,
  'Button 1 Mode': ButtonMode,
  'Button 2 Mode': ButtonMode,
  'Button 3 Mode': ButtonMode,
  'Button 3 Position': 'left' | 'right' | 'none'
} & SidebarWithButtonProps

const RightSide = styled.div<{ position: 'left' | 'right' }>`
  margin-left: ${(props) => (props.position === 'right' ? 'auto' : '')};
`

export const WithFooter: StoryObj<WithFooterProps> = {
  render: (args: WithFooterProps) => (
    <SidebarWithButton
      footer={
        <FooterContainer>
          <Button mode={args['Button 1 Mode']}>{args['Button 1 Text']}</Button>
          <Button mode={args['Button 2 Mode']}>{args['Button 2 Text']}</Button>
          {args['Button 3 Position'] !== 'none' && (
            <RightSide position={args['Button 3 Position']}>
              <Button mode={args['Button 3 Mode']}>
                {args['Button 3 Text']}
              </Button>
            </RightSide>
          )}
        </FooterContainer>
      }
      {...args}
    />
  ),
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
    'Button 3 Position': 'none',
    'Button 3 Text': 'Action',
    'Button 3 Mode': 'dangerFilled'
  }
}

const StyledSidebarWithTabs = styled(Sidebar)<{
  tabPosition: TabsProps['tabPosition']
}>`
  .ant-drawer-body {
    padding: ${(props) => (props.tabPosition === 'left' ? '0' : '24px 24px 0 24px')};
  }
`

const StyledTabs = styled(Tabs)`
  .ant-tabs-left .ant-tabs-tabpane {
    padding: 24px;
  }

  .ant-tabs-top > .ant-tabs-nav {
    margin-bottom: 24px;
  }
`

type WithTabsProps = SidebarProps & { tabPosition: TabsProps['tabPosition'] }
export const WithNavigation: StoryObj<WithTabsProps> = {
  render: ({ tabPosition, ...props }: WithTabsProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <StyledSidebarWithTabs
          {...props}
          tabPosition={tabPosition}
          title="Sidebar"
          visible={isOpen}
          onClose={() => setIsOpen(!isOpen)}
        >
          <StyledTabs tabPosition={tabPosition}>
            <Tabs.TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </Tabs.TabPane>
          </StyledTabs>
        </StyledSidebarWithTabs>
      </>
    )
  },
  argTypes: {
    tabPosition: {
      control: { type: 'radio' },
      options: ['left', 'top']
    },
    ...sbHideControls(['size'])
  },
  args: {
    tabPosition: 'left',
    size: 'large',
    subHeader: (
      <div style={{ padding: '0 24px' }}>
        <Toolbar left={itemsLeft} right={itemsRight} />
      </div>
    ),
    footer: (
      <FooterContainer>
        <Button mode="primary">Save</Button>
        <Button mode="secondary">Cancel</Button>
      </FooterContainer>
    )
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
                const id = uuidv4()
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
