import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { ControllableActiveKeyInfo } from '@sb/components/Warnings'
import { sbHideControls } from '@sb/helpers'
import { Button } from '@src/button'
import { Notification } from '@src/notification'
import { SectionMessage } from '@src/section-message'
import { Sidebar } from '@src/sidebar'
import { Space } from '@src/space'
import { Tag } from '@src/tag'
import { Toggle } from '@src/toggle'
import { P } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React, { useState } from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import { Placeholder, Plus, Settings } from '@kaspersky/hexa-ui-icons/16'

import MetaData from '../__meta__/meta.json'
import { Submenu as SubmenuComponent } from '../Submenu'
import { BadgeNotificationMode, IndicatorNotificationMode, RowProps, SubmenuItemProps, SubmenuProps } from '../types'

import { mockedItems, mockedItemsWithoutContent } from './mocks'

const meta: Meta<SubmenuProps> = {
  title: 'Hexa UI Components/Submenu',
  component: SubmenuComponent,
  argTypes: {
    ...sbHideControls(['theme', 'items', 'componentType'])
  },
  args: {
    truncateText: false,
    collapseOnTextClick: true,
    elementBefore: 'Element before',
    elementAfter: 'Element after',
    defaultActiveKey: 'row-1-2',
    testId: 'submenu-test-id',
    klId: 'submenu-kl-id',
    items: mockedItems
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

type Story = StoryObj<SubmenuProps>

const StyledSidebarWithSubmenu = styled(Sidebar)`
  .ant-drawer-body {
    padding: 0;

    .antd-sidebar-content {
      height: 100%;
    }
  }
`

const SubmenuDefaultStory = (args: SubmenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open</Button>
      <StyledSidebarWithSubmenu
        title="Sidebar"
        visible={isOpen}
        onClose={() => setIsOpen(!isOpen)}
      >
        <SubmenuComponent {...args} />
      </StyledSidebarWithSubmenu>
    </>
  )
}

export const Submenu = {
  render: SubmenuDefaultStory.bind({})
}

export const SubmenuControllableActiveKey: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeKey, setActiveKey] = useState('row-4-1')

    const handleActiveKeyChange = (key: string) => {
      console.log('new active key is', key)
      setActiveKey(key)
    }

    return (
      <Space gap="separated" direction="vertical" align="start">
        <ControllableActiveKeyInfo />
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <StyledSidebarWithSubmenu
          title="Sidebar"
          visible={isOpen}
          onClose={() => setIsOpen(!isOpen)}
        >
          <SubmenuComponent {...args} activeKey={activeKey} onChange={handleActiveKeyChange} />
        </StyledSidebarWithSubmenu>
      </Space>
    )
  }
}

const defaultIcons = {
  '-': null,
  Placeholder: <Placeholder klId="submenu-row-icon" />,
  Plus: <Plus klId="submenu-row-icon" />,
  Settings: <Settings klId="submenu-row-icon" />
}

const defaultElementsAfter = {
  '-': null,
  Toggle: <Toggle />,
  Tag: <Tag mode="purple" size="small">Tag</Tag>
}

type RowStory = StoryObj<{
  disabled?: RowProps['disabled'],
  iconBefore: keyof typeof defaultIcons,
  text: RowProps['text'],
  truncateText: boolean,
  elementAfter?: keyof typeof defaultElementsAfter,
  notificationVariant?: 'badge' | 'indicator' | 'none',
  indicatorMode?: IndicatorNotificationMode,
  badgeMode?: BadgeNotificationMode,
  badgeCount?: number,
  badgeText?: string,
  action: keyof typeof defaultIcons
}>

export const SubmenuRow: RowStory = {
  render: ({
    disabled,
    iconBefore,
    text,
    truncateText,
    elementAfter,
    notificationVariant,
    indicatorMode,
    badgeMode,
    badgeCount,
    badgeText,
    action
  }) => {
    const createItem = (index: number): SubmenuItemProps => ({
      type: 'row',
      key: 'row-' + index,
      text: text,
      disabled: disabled,
      content: 'This is row ' + index,
      ...(iconBefore !== '-'
        ? { iconBefore: defaultIcons[iconBefore] }
        : {}
      ),
      ...(notificationVariant === 'indicator' && indicatorMode
        ? {
            notification: {
              type: 'indicator',
              mode: indicatorMode
            }
          }
        : {}
      ),
      ...(notificationVariant === 'badge' && badgeMode
        ? {
            notification: {
              type: 'badge',
              mode: badgeMode,
              text: badgeText,
              count: badgeCount
            }
          }
        : {}
      ),
      ...(elementAfter
        ? { elementAfter: defaultElementsAfter[elementAfter] }
        : {}
      ),
      ...(action !== '-'
        ? {
            action: {
              onClick: () => console.log('Row action clicked'),
              icon: defaultIcons[action]
            }
          }
        : {}
      )
    })

    return (
      <SubmenuComponent
        truncateText={truncateText}
        items={[
          createItem(1),
          createItem(2)
        ]}
      />
    )
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state (not a submenu prop)'
    },
    iconBefore: {
      control: { type: 'select' },
      options: Object.keys(defaultIcons),
      description: 'Icon before, custom icon of size 16 (not a submenu prop)'
    },
    text: {
      control: { type: 'text' },
      description: 'Row text (not a submenu prop)'
    },
    elementAfter: {
      control: { type: 'select' },
      options: Object.keys(defaultElementsAfter),
      description: 'Element after, custom element with maximum height of 20px (not a submenu prop)'
    },
    notificationVariant: {
      control: { type: 'select' },
      options: ['badge', 'indicator', 'none'],
      description: 'Notification variant (not a submenu prop)'
    },
    indicatorMode: {
      control: { type: 'select' },
      options: ['new', 'critical', 'medium'],
      description: 'Indicator mode (not a submenu prop)'
    },
    badgeMode: {
      control: { type: 'select' },
      options: ['new', 'critical'],
      description: 'Badge mode (not a submenu prop)'
    },
    badgeCount: {
      control: { type: 'number', min: 0 },
      description: 'Badge count (not a submenu prop)'
    },
    badgeText: {
      control: { type: 'text' },
      description: 'Badge text (not a submenu prop)'
    },
    action: {
      control: { type: 'select' },
      options: Object.keys(defaultIcons),
      description: 'Action icon, custom icon of size 16 (not a submenu prop)'
    }
  },
  args: {
    disabled: false,
    iconBefore: '-',
    text: 'Row',
    truncateText: false,
    elementAfter: '-',
    notificationVariant: 'none',
    indicatorMode: 'critical',
    badgeMode: 'critical',
    badgeCount: 10,
    badgeText: undefined,
    action: '-'
  },
  parameters: {
    controls: {
      exclude: /(items|activeKey|defaultActiveKey|onChange|collapseOnTextClick|theme|componentType|dataTestId|componentId|elementBefore|testId|klId)/
    }
  }
}

type TitleStory = StoryObj<{
  text: RowProps['text'],
  action: keyof typeof defaultIcons
}>

export const SubmenuTitle: TitleStory = {
  render: ({ text, action }) => {
    return (
      <SubmenuComponent
        items={[
          {
            type: 'title',
            key: 'title',
            text: text,
            ...(action !== '-'
              ? {
                  action: {
                    onClick: () => console.log('Title action clicked'),
                    icon: defaultIcons[action]
                  }
                }
              : {}
            )
          }
        ]}
      />
    )
  },
  argTypes: {
    text: {
      control: { type: 'text' },
      description: 'Title text (not a submenu prop)'
    },
    action: {
      control: { type: 'select' },
      options: Object.keys(defaultIcons),
      description: 'Action icon, custom icon of size 16 (not a submenu prop)'
    }
  },
  args: {
    text: 'Title',
    action: '-'
  },
  parameters: {
    controls: {
      exclude: /(items|activeKey|defaultActiveKey|onChange|collapseOnTextClick|truncateText|theme|componentType|dataTestId|componentId|elementBefore|elementAfter|testId|klId)/
    }
  }
}

const submenuInfoWithoutContentEn=`This story demonstrates the use of Submenu without embedded content.

The product can fully control the rendering of tab contents:
- If the SubmenuRow element does not have the content property, the component renders only the menu item.
- Inside the onClick prop, the product can render its own content or perform another action (for example, show a modal window, etc.).
`

const submenuInfoWithoutContentRu=`Данный пример стори демонстрирует использование Submenu без встроенного контента.

Продукт может полностью управлять отрисовкой содержимого вкладок:
- Если у элемента SubmenuRow отсутствует свойство content, компонент рендерит только пункт меню.
- Внутри пропа onClick продукт может отрисовать собственный контент или выполнить другое действие (например, показать модальное окно и т.д.).
`

export const SubmenuWithoutContent: Story = {
  render: () => (
    <Space gap="separated" direction="vertical" align="start">
      <SectionMessage closable={false} mode="info">
        <P>{submenuInfoWithoutContentEn}</P>
        <P>{submenuInfoWithoutContentRu}</P>
      </SectionMessage>
      <Notification />
      <SubmenuComponent items={mockedItemsWithoutContent} />
    </Space>
  )
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: { submenu: componentColors.submenu, submenu_item: componentColors.submenu_item } },
  render: args => <ThemedPalette {...args} />
}
