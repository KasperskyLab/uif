import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { StoryColumn } from '@sb/StoryComponents'
import { Badge } from '@src/badge'
import { Button } from '@src/button'
import { Indicator } from '@src/indicator'
import { Text } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react'
import React, { CSSProperties, useRef } from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import { Menu3, Placeholder } from '@kaspersky/icons/16'

import MetaData from './__meta__/meta.json'
import { Dropdown } from './Dropdown'
import { DropdownItemProps, DropdownProps, Placement } from './types'

const defaultOverlay: DropdownItemProps[] = [
  {
    title: 'Submenu',
    type: 'submenu',
    description: 'Some description',
    children: [
      {
        active: true,
        title: 'SubSubmenu',
        type: 'submenu',
        children: [
          {
            type: 'action',
            // check https://4x.ant.design/components/menu/#API for more info
            onClick: (menuInfo) => {
              alert(`some action ${menuInfo}`)
            },
            children: 'action item',
            description: 'With tooltip',
            tooltip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          },
          {
            children: (
              <Text type="BTR5">Typography item</Text>
            )
          },
          {
            children: (
              <Button>Button item</Button>
            )
          }
        ]
      },
      {
        disabled: true,
        componentsBefore: [
          <Placeholder key="UserAccount icon" />
        ],
        componentsAfter: [
          <Badge key="badge" mode="neutral" text="25"/>
        ],
        description: 'With tooltip',
        tooltip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        children: 'Disabled'
      },
      {
        disabled: true,
        children: 'Disabled'
      },
      {
        title: 'Disabled submenu',
        type: 'submenu',
        disabled: true,
        description: 'With tooltip',
        tooltip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        children: [
          { children: 'you cant see that' }
        ]
      }
    ]
  },
  {
    title: 'Additional components',
    type: 'group',
    children: [
      {
        componentsBefore: [
          <Indicator key="indicator" mode="high"/>,
          <Placeholder key="UserAccount icon" />
        ],
        description: 'Some description',
        children: 'With components before'
      },
      {
        componentsAfter: [
          <Placeholder key="UserAccount icon" />,
          <Badge key="badge" mode="neutral" text="25"/>
        ],
        description: 'Some description',
        children: 'With components after'
      },
      {
        componentsAfter: [
          <Badge key="badge1" mode="neutral" text="25"/>
        ],
        componentsBefore: [
          <Placeholder key="UserAccount icon1" />
        ],
        children: 'Before and After'
      }
    ]
  },
  {
    type: 'submenu',
    title: 'Submenu with after',
    componentsAfter: [
      <Badge key="badge2" mode="neutral" text="25"/>
    ],
    children: [
      { children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ligula tempor orci consectetur pellentesque. Quisque quis felis in odio feugiat luctus. Ut sodales, mi at lacinia ultricies, tortor dolor imperdiet sapien, sit amet tristique erat eros sed nisl. In hac habitasse platea dictumst. Sed vel erat ligula. Vivamus a nisi id purus tempor venenatis non nec odio. Ut orci.' },
      { children: 'Default item 2' }
    ]
  }
]

const meta: Meta<DropdownProps> = {
  title: 'Hexa UI Components/Dropdown',
  component: Dropdown,
  argTypes: {
    ...sbHideControls(['theme', 'overlay'])
  },
  args: {
    overlay: defaultOverlay,
    disabled: false,
    loading: false,
    placement: 'bottomLeft',
    trigger: ['hover'],
    testId: 'dropdown-test-id',
    klId: 'dropdown-kl-id'
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

type Story = StoryObj<DropdownProps>

export const Basic: Story = {
  render: (args: DropdownProps) => (
    <StoryColumn>
      <Dropdown {...args}>
        <Button>Click on button</Button>
      </Dropdown>
      <Dropdown {...args}>
        <Text>Click on span</Text>
      </Dropdown>
    </StoryColumn>
  ),
  args: {
    trigger: ['click']
  }
}

export const Hover: Story = {
  args: {
    children: <Button text="Hover"/>
  }
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: <Button text="Disabled"/>
  }
}

const DropdownsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
`

export const Placements: Story = {
  render: (args: DropdownProps) => {
    const placements: Placement[] = [
      'bottomLeft',
      'bottomRight',
      'bottomCenter',
      'topLeft',
      'topRight',
      'topCenter'
    ]

    return (
      <DropdownsContainer>
        {placements.map((placement) => (
          <Dropdown
            key={placement}
            {...args}
            placement={placement}
          >
            <Button>{placement}</Button>
          </Dropdown>
        ))}
      </DropdownsContainer>
    )
  },
  parameters: {
    layout: 'centered'
  }
}

export const ContextMenu: Story = {
  args: {
    children: <Button mode="tertiary" iconBefore={<Menu3 />}/>
  }
}

const ScrollableContainer = styled.div`
  height: 500px;
  overflow: auto;
  border: 1px solid gray;
`

const ContentContainer = styled.div`
  height: 2000px;
  padding: 20px;
  position: relative;
`

export const WithinScrollableContainer: Story = {
  render: (args: DropdownProps) => (
    <ScrollableContainer>
      <ContentContainer>
        <Dropdown {...args} getPopupContainer={trigger => trigger.parentElement as HTMLElement} />
      </ContentContainer>
    </ScrollableContainer>
  ),
  args: {
    children: <Button>Click me and scroll my container</Button>,
    trigger: ['click']
  }
}

export const CustomPopupContainer: Story = {
  render: (args: DropdownProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null)

    const containerStyle: CSSProperties = {
      padding: '20px',
      border: '1px solid green'
    }

    const hiddenContainer: CSSProperties = {
      overflow: 'hidden',
      height: '50px',
      border: '1px solid gray'
    }

    return (
      <div style={containerStyle} ref={containerRef}>
        <span>popup container</span>
        <div style={hiddenContainer}>
          <Dropdown {...args} />
          <span>overflow: hidden</span>
        </div>
      </div>
    )
  },
  args: {
    children: <Button>Click</Button>,
    trigger: ['click']
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: { dropdown: componentColors.dropdown, dropdown_item: componentColors.dropdown_item } },
  render: args => <ThemedPalette {...args} />
}
