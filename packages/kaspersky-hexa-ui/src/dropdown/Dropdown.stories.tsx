import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { PopupConfigProvider } from '@helpers/components/PopupConfigProvider'
import { badges } from '@sb/badges'
import { withDesignControls } from '@sb/components/designControls'
import { withMeta } from '@sb/components/Meta'
import { ContentContainer, ScrollableContainer } from '@sb/components/ScrollableContainer'
import { StoryColumn } from '@sb/StoryComponents'
import { Badge } from '@src/badge'
import { Button } from '@src/button'
import { Checkbox } from '@src/checkbox'
import { Indicator } from '@src/indicator'
import { SegmentedButton, SegmentedButtonOption } from '@src/segmented-button'
import { Space } from '@src/space'
import { Text } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React, { CSSProperties, useRef, useState } from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import { Menu3, Placeholder, Plus } from '@kaspersky/hexa-ui-icons/16'

import MetaData from './__meta__/meta.json'
import { Dropdown } from './Dropdown'
import { DropdownItemProps, DropdownProps, Placement } from './types'

const placements: Placement[] = [
  'bottomLeft',
  'bottomRight',
  'bottom',
  'topLeft',
  'topRight',
  'top'
]

const defaultOverlay: DropdownItemProps[] = [
  {
    testId: 'submenu-item',
    title: 'Submenu',
    type: 'submenu',
    description: 'Some description',
    children: [
      {
        testId: 'sub-submenu-item',
        active: true,
        title: 'SubSubmenu',
        type: 'submenu',
        children: [
          {
            testId: 'action-item',
            type: 'action',
            onClick: (menuInfo) => {
              alert(`some action ${menuInfo}`)
            },
            children: 'action item',
            description: 'With tooltip',
            tooltip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          },
          {
            testId: 'typography-item',
            children: (
              <Text type="BTR5">Typography item</Text>
            )
          },
          {
            testId: 'button-item',
            children: (
              <Button>Button item</Button>
            )
          },
          {
            type: 'innerActions',
            children: (
              <Checkbox>Check me, and keep dropdown opened</Checkbox>
            )
          }
        ]
      },
      {
        testId: 'with-tooltip-item',
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
        testId: 'disabled-item',
        disabled: true,
        children: 'Disabled'
      },
      {
        testId: 'disabled-submenu-item',
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
    type: 'divider',
    children: null
  },
  {
    title: 'Additional components',
    type: 'group',
    children: [
      {
        testId: 'with-components-before-item',
        componentsBefore: [
          <Indicator key="indicator" mode="high"/>,
          <Placeholder key="UserAccount icon" />
        ],
        description: 'Some description',
        children: 'With components before'
      },
      {
        testId: 'with-components-after-item',
        componentsAfter: [
          <Placeholder key="UserAccount icon" />,
          <Badge key="badge" mode="neutral" text="25"/>
        ],
        description: 'Some description',
        children: 'With components after'
      },
      {
        testId: 'before-and-after-item',
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
    testId: 'submenu-with-after-item',
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
  ...withDesignControls<DropdownProps>({
    componentName: 'dropdown',
    meta: {
      argTypes: {
        placement: {
          control: 'select',
          options: placements
        }
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
        design: MetaData.pixsoView
      }
    }
  })
}
export default meta

type Story = StoryObj<DropdownProps>

export const Basic: Story = {
  render: (args: DropdownProps) => (
    <StoryColumn>
      <Dropdown {...args}>
        <Button>Json overlay</Button>
      </Dropdown>
      <Dropdown {...args}>
        <Text>Click on span</Text>
      </Dropdown>
      <Dropdown
        {...args}
        overlay={
          <Dropdown.Menu triggerSubMenuAction="click">
            <Dropdown.SubMenu data-testid="submenu-item" title="Submenu">
              <Dropdown.SubMenu data-testid="sub-submenu-item" title="SubSubmenu">
                <Dropdown.MenuItem 
                  description="With tooltip"
                  onClick={menuInfo =>  alert(`some action ${menuInfo}`)}
                  testId="action-item"
                  tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                >
                  action item
                </Dropdown.MenuItem>
                <Dropdown.MenuItem testId="typography-item">
                  <Text type="BTR5">Typography item</Text>
                </Dropdown.MenuItem>
                <Dropdown.MenuItem testId="button-item">
                  <Button>Button item</Button>
                </Dropdown.MenuItem>
              </Dropdown.SubMenu>

              <Dropdown.MenuItem 
                componentsAfter={[<Badge key="badge" mode="neutral" text="25"/>]}
                componentsBefore={[<Placeholder key="UserAccount icon" />]}
                description="With tooltip"
                disabled
                testId="with-tooltip-item"
                tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              >
                Disabled
              </Dropdown.MenuItem>

              <Dropdown.MenuItem disabled testId="disabled-item">
                Disabled
              </Dropdown.MenuItem>

              <Dropdown.SubMenu
                data-testid="disabled-submenu-item"
                disabled
                title="Disabled submenu"
              >
                <Dropdown.MenuItem>
                  you cant see that
                </Dropdown.MenuItem>
              </Dropdown.SubMenu>
            </Dropdown.SubMenu>

            <Dropdown.MenuDivider />

            <Dropdown.GroupTitle>Additional components</Dropdown.GroupTitle>
            <Dropdown.MenuItem
              componentsBefore={[
                <Indicator key="indicator" mode="high"/>,
                <Placeholder key="UserAccount icon" />
              ]}
              description="Some description"
              testId="with-components-before-item"
            >
              With components before
            </Dropdown.MenuItem>
            <Dropdown.MenuItem
              componentsAfter={[
                <Placeholder key="UserAccount icon" />,
                <Badge key="badge" mode="neutral" text="25"/>
              ]}
              description="Some description"
              testId="with-components-after-item"
            >
              With components after
            </Dropdown.MenuItem>
            <Dropdown.MenuItem
              componentsAfter={[
                <Badge key="badge1" mode="neutral" text="25"/>
              ]}
              componentsBefore={[
                <Placeholder key="UserAccount icon1" />
              ]}
              description="Some description"
              testId="before-and-after-item"
            >
              Before and After
            </Dropdown.MenuItem>

            <Dropdown.SubMenu data-testid="submenu-with-after-item" title="Submenu with after">
              <Dropdown.MenuItem>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ligula tempor orci consectetur pellentesque. Quisque quis felis in odio feugiat luctus. Ut sodales, mi at lacinia ultricies, tortor dolor imperdiet sapien, sit amet tristique erat eros sed nisl. In hac habitasse platea dictumst. Sed vel erat ligula. Vivamus a nisi id purus tempor venenatis non nec odio. Ut orci.
              </Dropdown.MenuItem>

              <Dropdown.MenuItem>
                Default item 2
              </Dropdown.MenuItem>
            </Dropdown.SubMenu>
          </Dropdown.Menu>
        }
      >
        <Button>Components overlay</Button>
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
  min-height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
`

export const Placements: Story = {
  render: (args: DropdownProps) => (
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
  ),
  args: {
    trigger: ['click']
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

const viewItems: SegmentedButtonOption[] = [
  { text: 'custom item', value: 'custom' },
  { text: 'action item', value: 'action' },
  { text: 'submenu item', value: 'submenu' }
]

const commonSticky = {
  testId: 'sticky-item',
  sticky: true
}

const stickyItems: Record<string, DropdownItemProps> = {
  custom: {
    ...commonSticky,
    children: 'Custom sticky element'
  },
  action: {
    ...commonSticky,
    type: 'action',
    children: <Space gap="dependent"><Plus /> Action sticky element</Space>
  },
  submenu: {
    ...commonSticky,
    type: 'submenu',
    title: 'Submenu sticky element',
    children: [{ children: 'Submenu item' }]
  }
}

export const WithStickyHeaderAndFooter: Story = {
  render: (args: DropdownProps) => {
    const [view, setView] = useState<string[]>(['custom'])

    return (
      <StoryColumn>
        <SegmentedButton items={viewItems} value={view} onChange={setView} />  
        <Dropdown {...args} header={stickyItems[view[0]]}>
          <Button>Sticky header</Button>
        </Dropdown>
        <Dropdown {...args} footer={stickyItems[view[0]]}>
          <Button>Sticky footer</Button>
        </Dropdown>
        <Dropdown {...args} header={stickyItems[view[0]]} footer={stickyItems[view[0]]}>
          <Button>Sticky header and footer</Button>
        </Dropdown>
      </StoryColumn>
    )
  },
  args: {
    popupMaxHeight: 250,
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
      <PopupConfigProvider getPopupContainer={() => containerRef.current!}>
        <div style={containerStyle} ref={containerRef}>
          <span>popup container</span>
          <div style={hiddenContainer}>
            <Dropdown {...args} />
            <span>overflow: hidden</span>
          </div>
        </div>
      </PopupConfigProvider>
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
