import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { Size } from '@design-system/types'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { ActionButton } from '@src/action-button'
import { Badge } from '@src/badge'
import { ButtonMode } from '@src/button'
import { Modal } from '@src/modal'
import { Pagination } from '@src/pagination'
import { Space } from '@src/space'
import { Submenu } from '@src/submenu'
import { Toolbar } from '@src/toolbar'
import { itemsLeft, itemsRight } from '@src/toolbar/stories/Toolbar.stories'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import { Help, Youtube } from '@kaspersky/hexa-ui-icons/16'
import { Star } from '@kaspersky/hexa-ui-icons/24'

import { Button } from '../button'
import { Text } from '../typography'

import MetaData from './__meta__/meta.json'
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

const SidebarWithPagination = (props: SidebarWithButtonProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [pageSize, setPageSize] = useState(10)
  const [current, setCurrent] = useState(1)
  const clb = (page: number, pageSize?: number) => {
    setCurrent(page)
    setPageSize(Number(pageSize))
  }

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        {props.buttonText || 'Open'}
      </Button>
      <Sidebar
        {...props}
        visible={isOpen}
        size="extraSmall"
        onClose={() => setIsOpen(false)}
        title="Sidebar"
        footer={<Pagination
          total={500}
          pageSize={pageSize}
          current={current}
          simple={true}
          onChange={clb}
          onShowSizeChange={clb}
        />}
      >
        {props.children || <Text>Content</Text>}
      </Sidebar>
    </>
  )
}

export const Basic: StoryWithButton = {
  render: (args) => <SidebarWithButton {...args} />
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

export const WithPagination: StoryWithButton = {
  render: (args) => <SidebarWithPagination size="extraSmall" {...args} />
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

export const WithFixedElements: StoryObj = {
  render: (args) => <SidebarWithButton {...args} />,
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

const FooterContainer = styled.div`
  display: flex;
  gap: 8px;
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

const StyledSidebarWithSubmenu = styled(Sidebar)`
  .ant-drawer-body {
    padding: 0;
    .antd-sidebar-content {
      height: 100%;
    }
  }
`

export const WithNavigation: StoryWithButton = {
  render: (args: SidebarProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <StyledSidebarWithSubmenu
          {...args}
          title="Sidebar"
          visible={isOpen}
          onClose={() => setIsOpen(!isOpen)}
        >
          <Submenu
            items={[
              {
                type: 'row',
                text: 'Tab 1.1',
                content: (
                  'Content 1.1'
                ),
                key: 'tab-1-1'
              },
              {
                type: 'row',
                text: 'Tab 1.2',
                content: (
                  'Content 1.2'
                ),
                key: 'tab-1-2'
              },
              {
                type: 'row',
                text: 'Tab 1.3',
                content: (
                  'Content 1.3'
                ),
                key: 'tab-1-3'
              }
            ]}
          />
        </StyledSidebarWithSubmenu>
      </>
    )
  },
  argTypes: {
    ...sbHideControls(['size'])
  },
  args: {
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

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.sidebar },
  render: args => <ThemedPalette {...args} />
}
