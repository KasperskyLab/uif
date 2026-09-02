import { Size } from '@design-system/types'
import { ThemedPalette, type ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { Button } from '@src/button'
import { Link } from '@src/link'
import { Sidebar } from '@src/sidebar'
import { Space } from '@src/space'
import { Toggle } from '@src/toggle'
import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import { FilterWithIndicator as FilterWithIndicatorIcon, Placeholder } from '@kaspersky/hexa-ui-icons/16'

import { Toolbar } from '../Toolbar'
import type { ToolbarItems, ToolbarProps } from '../types'

const meta = {
  title: 'Hexa UI Components/Toolbar/Stories',
  component: Toolbar,
  tags: ['!autodocs'],
  parameters: { badges: [badges.stable, badges.reviewedByDesign] },
  decorators: [
    Story => (
      <div style={{ width: '90vw' }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Toolbar>

export default meta

type Story = StoryObj<ToolbarProps>

const menuItems = () => [
  { children: 'Действие 1', onClick: () => alert('Действие 1') },
  { children: 'Действие 2', onClick: () => alert('Действие 2') }
]

const leftItems = (): ToolbarItems[] => [
  {
    type: 'button',
    key: '1',
    label: 'Кнопка 1',
    iconBefore: <Placeholder />,
    onClick: () => alert('Кнопка 1')
  },
  {
    type: 'dropdown',
    key: '2',
    label: 'Кнопка 2',
    iconBefore: <Placeholder />,
    overlay: menuItems()
  },
  { type: 'divider', key: 'divider' },
  { type: 'button', key: '4', label: 'Скрытая кнопка', visible: false },
  {
    type: 'dropdown',
    key: '5',
    label: 'Недоступна',
    overlay: menuItems(),
    disabled: true
  },
  { type: 'button', key: '6', label: 'Кнопка 6' },
  {
    type: 'toggleButton',
    key: '7',
    text: 'Переключатель',
    value: 'toggle',
    iconBefore: <Placeholder />,
    onChange: () => alert('Переключатель')
  }
]

const Search = () => {
  const [value, setValue] = useState('')
  return <Toolbar.Search value={value} onChange={nextValue => setValue(String(nextValue))} onClearClick={() => setValue('')} />
}

const rightItems = (): ToolbarItems[] => [
  { type: 'children', key: 'search', children: <Search /> },
  {
    type: 'children',
    key: 'actions',
    children: (
      <Space gap={4} wrap="nowrap">
        <Toolbar.ScaleItem onClick={() => alert('Развернуть')} />
        <Toolbar.SettingsItem onClick={() => alert('Настройки')} />
      </Space>
    )
  }
]

export const Basic: Story = {
  args: { left: leftItems().slice(0, 5), right: rightItems() }
}

export const FilterWithIndicator: Story = {
  args: {
    left: [{
      ...leftItems()[0],
      showIndicator: true,
      iconBefore: <FilterWithIndicatorIcon />
    } as ToolbarItems, leftItems()[2]],
    right: rightItems()
  }
}

const manyButtons: ToolbarItems[] = Array.from({ length: 10 }, (_, index) => ({
  type: 'button',
  key: String(index),
  label: `Кнопка ${index}`,
  onClick: () => alert(`Кнопка ${index}`)
}))

export const AutoDropdownInsideFlexSidebar: Story = {
  render: () => {
    const [visible, setVisible] = useState(false)
    const [flex, setFlex] = useState(false)
    return (
      <>
        <Button onClick={() => setVisible(!visible)}>Показать Sidebar</Button>
        <Sidebar
          visible={visible}
          flex={flex}
          size={Size.Small}
          headerActions={<div onClick={() => setFlex(value => !value)}>Развернуть</div>}
          onClose={() => setVisible(false)}
        >
          <Toolbar left={manyButtons} right={manyButtons.slice(0, 2)} autoDropdown={flex} />
        </Sidebar>
      </>
    )
  }
}

export const TestAttributes: Story = {
  args: {
    left: [{
      type: 'children',
      key: 'items',
      children: (
        <Space gap={4}>
          <Toolbar.Search testId="Search" />
          <Toolbar.ImportExportItem dropdown={false} testId="ImportExportItem" />
          <Toolbar.ExportItem testId="ExportItem" />
          <Toolbar.ImportItem testId="ImportItem" />
          <Toolbar.FilterItem testId="FilterItem" />
          <Toolbar.SettingsItem testId="SettingsItem" />
          <Toolbar.ScaleItem testId="ScaleItem" />
        </Space>
      )
    }]
  }
}

export const ImportExportButton: Story = {
  args: {
    left: [{ type: 'children', key: 'title', children: 'Панель инструментов' }],
    right: [{
      type: 'children',
      key: 'actions',
      children: (
        <Space gap={4}>
          <Toolbar.ImportExportItem dropdown={false} onClick={() => alert('Импорт/экспорт')} />
          <Toolbar.ImportExportItem dropdown onImport={() => alert('Импорт')} onExport={() => alert('Экспорт')} />
          <Toolbar.ExportItem onClick={() => alert('Экспорт')} />
          <Toolbar.ImportItem onClick={() => alert('Импорт')} />
        </Space>
      )
    }]
  }
}

export const WithLeftLimit: Story = {
  args: { left: leftItems(), right: rightItems(), leftLimit: 5 }
}

export const AutoDropdown: Story = {
  args: { left: leftItems(), right: rightItems(), autoDropdown: true }
}

export const WithCollapsibleSearch: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <Toolbar
        autoDropdown
        left={leftItems()}
        right={[
          {
            type: 'children',
            key: 'search',
            children: (
              <Toolbar.CollapsibleSearch
                placeholder="Введите запрос и нажмите Enter"
                value={value}
                onChange={nextValue => setValue(String(nextValue))}
                onClearClick={() => setValue('')}
                onPressEnter={() => alert(value)}
              />
            )
          }
        ]}
      />
    )
  }
}

export const Variations: Story = {
  render: args => (
    <Space direction="vertical" gap={30} align="stretch">
      <Toolbar {...args} left={leftItems().slice(0, 4)} right={rightItems()} />
      <Toolbar {...args} left={leftItems().slice(0, 4)} />
      <Toolbar {...args} right={rightItems()} />
    </Space>
  )
}

export const WithCustomElements: Story = {
  render: args => {
    const items: ToolbarItems[] = [
      { type: 'children', key: 'link', children: <Link href="#" text="Ссылка" /> },
      { type: 'divider', key: 'divider' },
      { type: 'children', key: 'toggle', children: <Toggle>Метка</Toggle> }
    ]
    return (
      <Space direction="vertical" gap={30} align="stretch">
        <Toolbar {...args} left={items} styleLeft={{ insetInlineStart: '8px' }} />
        <Toolbar {...args} right={items} styleRight={{ insetInlineEnd: '8px' }} />
      </Space>
    )
  }
}

export const WithTooltip: Story = {
  args: { left: leftItems().map(item => ({ ...item, tooltip: `Подсказка: ${item.key}` })) as ToolbarItems[], right: rightItems() }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: {
    source: {
      toolbar: componentColors.toolbar,
      toolbar_button: componentColors.toolbar_button,
      toolbar_search: componentColors.toolbar_search
    }
  },
  render: args => <ThemedPalette {...args} />
}
