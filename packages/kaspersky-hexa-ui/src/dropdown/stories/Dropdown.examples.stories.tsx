import { PopupConfigProvider } from '@helpers/components/PopupConfigProvider'
import { ContentContainer, ScrollableContainer } from '@sb/components/ScrollableContainer'
import { StoryColumn } from '@sb/StoryComponents'
import { Badge } from '@src/badge'
import { Button } from '@src/button'
import { Indicator } from '@src/indicator'
import { SegmentedButton, SegmentedButtonOption } from '@src/segmented-button'
import { Space } from '@src/space'
import { Text } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react'
import React, { CSSProperties, useRef, useState } from 'react'

import { Placeholder, Plus } from '@kaspersky/hexa-ui-icons/16'

import { Dropdown } from '../Dropdown'
import { DropdownItemProps, DropdownProps } from '../types'

import { dropdownStorySettings } from './Dropdown.stories'
import { defaultDropdownOverlay } from './dropdownStoryFixtures'

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
    children: <Space key="action-sticky-space" gap="dependent"><Plus /> Action sticky element</Space>
  },
  submenu: {
    ...commonSticky,
    type: 'submenu',
    title: 'Submenu sticky element',
    children: [{ children: 'Submenu item' }]
  }
}

const meta: Meta<typeof Dropdown> = {
  title: 'Hexa UI Components/Dropdown/Stories',
  component: Dropdown,
  tags: ['!autodocs'],
  ...dropdownStorySettings
}

export default meta

type Story = StoryObj<DropdownProps>

export const Overlay: Story = {
  render: (args: DropdownProps) => (
    <StoryColumn>
      <Dropdown {...args}>
        <Button>Json overlay</Button>
      </Dropdown>
      <Dropdown
        {...args}
        overlay={(
          <Dropdown.Menu triggerSubMenuAction="click">
            <Dropdown.SubMenu data-testid="submenu-item" title="Submenu">
              <Dropdown.SubMenu data-testid="sub-submenu-item" title="SubSubmenu">
                <Dropdown.MenuItem
                  description="With tooltip"
                  onClick={menuInfo => alert(`some action ${menuInfo}`)}
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
                componentsAfter={[<Badge key="badge" mode="neutral" text="25" />]}
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
                <Indicator key="indicator" mode="high" />,
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
                <Badge key="badge" mode="neutral" text="25" />
              ]}
              description="Some description"
              testId="with-components-after-item"
            >
              With components after
            </Dropdown.MenuItem>
            <Dropdown.MenuItem
              componentsAfter={[
                <Badge key="badge1" mode="neutral" text="25" />
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ligula tempor orci consectetur pellentesque.
                Quisque quis felis in odio feugiat luctus. Ut sodales, mi at lacinia ultricies, tortor dolor imperdiet sapien,
                sit amet tristique erat eros sed nisl. In hac habitasse platea dictumst. Sed vel erat ligula. Vivamus a nisi id purus tempor
                venenatis non nec odio. Ut orci.
              </Dropdown.MenuItem>

              <Dropdown.MenuItem>
                Default item 2
              </Dropdown.MenuItem>
            </Dropdown.SubMenu>
          </Dropdown.Menu>
        )}
      >
        <Button>Components overlay</Button>
      </Dropdown>
    </StoryColumn>
  ),
  args: {
    overlay: defaultDropdownOverlay,
    trigger: ['click']
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
    overlay: defaultDropdownOverlay,
    children: <Button>Click me and scroll my container</Button>,
    trigger: ['click']
  }
}

export const WithStickyHeaderAndFooter: Story = {
  render: (args: DropdownProps) => {
    const [view, setView] = useState<string[]>(['custom'])

    return (
      <StoryColumn>
        <SegmentedButton items={viewItems} value={view} onChange={setView} />
        <Dropdown {...args} header={stickyItems[view[0]]} footer={stickyItems[view[0]]}>
          <Button>Sticky header and footer</Button>
        </Dropdown>
      </StoryColumn>
    )
  },
  args: {
    overlay: defaultDropdownOverlay,
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
    overlay: defaultDropdownOverlay,
    children: <Button>Click</Button>,
    trigger: ['click']
  }
}
