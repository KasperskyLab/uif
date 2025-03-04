import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { Button } from '@src/button'
import { Link } from '@src/link'
import { Space } from '@src/space'
import { Toggle } from '@src/toggle'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'
import { FilterWithIndicator as FilterWithIndicatorIcon, Placeholder } from '@kaspersky/hexa-ui-icons/16'

import MetaData from '../__meta__/meta.json'
import { Toolbar } from '../Toolbar'
import { ToolbarItems, ToolbarProps } from '../types'

import { ToolbarDocs } from './ToolbarDocs'

const meta: Meta<ToolbarProps> = {
  title: 'Hexa UI Components/Toolbar',
  component: Toolbar,
  argTypes: {
    ...sbHideControls(['theme'])
  },
  args: {
    testId: 'toolbar-test-id',
    klId: 'toolbar-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData, ToolbarDocs)
    },
    design: MetaData.figmaView
  },
  decorators: [
    (Story, context) => (
      <div style={{ width: '90vw' }}>
        <Story {...context}/>
      </div>
    )
  ],
  excludeStories: ['itemsLeft', 'itemsRight']
}
export default meta

type Story = StoryObj<ToolbarProps>

const items = [
  {
    children: 'Action 1',
    onClick: () => console.log('Action 1')
  },
  {
    children: 'Action 2',
    onClick: () => console.log('Action 2')
  },
  {
    children: <Button onClick={() => console.log('Action 3')}>Action 3</Button>
  },
  {
    children: 'Action 4',
    onClick: () => console.log('Action 4')
  }
]

export const itemsLeft: ToolbarItems[] = [
  {
    type: 'button',
    key: '1',
    label: 'Button 1',
    iconBefore: <Placeholder />,
    onClick: () => console.log('Button 1'),
    testId: 'item-1'
  },
  {
    type: 'dropdown',
    key: '2',
    label: 'Button 2',
    iconBefore: <Placeholder />,
    testId: 'item-2',
    overlay: items
  },
  {
    type: 'divider',
    key: 'divider'
  },
  {
    type: 'button',
    key: '3',
    label: 'Button 3',
    onClick: () => console.log('Button 3'),
    testId: 'item-3'
  },
  {
    type: 'button',
    key: '4',
    label: 'Button 4',
    visible: false
  },
  {
    type: 'dropdown',
    key: '5',
    label: 'Button 5',
    overlay: items,
    iconBefore: <Placeholder />,
    disabled: true
  },
  {
    type: 'dropdown',
    key: '6',
    label: 'Button 6',
    overlay: items
  },
  {
    type: 'button',
    key: '7',
    label: 'Button 7',
    iconBefore: <Placeholder />,
    iconAfter: <Placeholder />,
    onClick: () => console.log('Button 7')
  }
]

const Search = () => {
  const [searchValue, setSearchValue] = useState('')
  return (
    <Toolbar.Search
      onChange={value => setSearchValue(value as string)}
      value={searchValue}
      onClearClick={() => setSearchValue('')}
    />
  )
}

const CollapsibleSearch = () => {
  const [searchValue, setSearchValue] = useState('')
  return (
    <Toolbar.CollapsibleSearch
      onChange={value => setSearchValue(value as string)}
      value={searchValue}
      onClearClick={() => setSearchValue('')}
    />
  )
}

export const itemsRight: ToolbarItems[] = [
  {
    type: 'children',
    key: '1',
    children: <Search />
  },
  {
    type: 'children',
    key: '2',
    children: (
      <Space gap={4} wrap="nowrap">
        <Toolbar.SettingsItem onClick={() => console.log('settings')} />
        <Toolbar.FilterItem onClick={() => console.log('filter')} />
      </Space>
    )
  }
]

const itemsLeftWithIndicator: ToolbarItems[] = itemsLeft
  .splice(0, 4)
  .map((item, index) => (
    index === 0
      ? {
        ...item,
        showIndicator: true,
        iconBefore: <FilterWithIndicatorIcon />
      } as ToolbarItems
      : item
  ))

const itemsRightWithIndicator: ToolbarItems[] = [
  itemsRight[0],
  {
    type: 'children',
    key: '2',
    children: (
      <Space gap={4} wrap="nowrap">
        <Toolbar.SettingsItem onClick={() => console.log('settings')} />
        <Toolbar.FilterItem showIndicator iconBefore={<FilterWithIndicatorIcon />} onClick={() => console.log('filter')} />
      </Space>
    )
  }
]

const itemsImportExportButtons: ToolbarItems[] = [
  {
    type: 'children',
    key: '2',
    children: (
      <Space gap={4} wrap="nowrap">
        <Toolbar.ImportExportItem dropdown={false} onClick={() => console.log('ImportExport Button')} />
        <Toolbar.ImportExportItem
          dropdown={true}
          onClick={() => console.log('ImportExport Dropdown 2')}
          onImport={() => console.log('Import Button 2')}
          onExport={() => console.log('Export Button 2')}
        />
        <Toolbar.ImportExportItem
          dropdown={true}
          onClick={() => console.log('ImportExport Dropdown 3')}
          onExport={() => console.log('Export Button 3')}
        />
        <Toolbar.ImportExportItem
          dropdown={true}
          onClick={() => console.log('ImportExport Dropdown 4')}
          onImport={() => console.log('Import Button 4')}
        />
        <Toolbar.ExportItem onClick={() => console.log('Export Button')} />
        <Toolbar.ImportItem onClick={() => console.log('Import Button')} />
      </Space>
    )
  }
]

const itemsWithCollapsibleSearch: ToolbarItems[] = [
  {
    type: 'children',
    key: '1',
    children: <CollapsibleSearch />
  },
  ...itemsRight.slice(1)
]

const customItems: ToolbarItems[] = [
  {
    type: 'children',
    key: '1',
    children: <Link href="#" text="Link" />
  },
  {
    type: 'divider',
    key: 'divider'
  },
  {
    type: 'children',
    key: '2',
    children: <Toggle>Label</Toggle>
  }
]

export const Basic: Story = {
  args: {
    left: itemsLeft.slice(0, 4),
    right: itemsRight
  }
}

export const FilterWithIndicator: Story = {
  args: {
    left: itemsLeftWithIndicator,
    right: itemsRightWithIndicator
  }
}

const itemsAllItems: ToolbarItems[] = [
  {
    type: 'children',
    key: '1',
    children: (
      <>
        <Toolbar.Search testId="Search" />
        <Toolbar.ImportExportItem dropdown={false} testId="ImportExportItem" />
        <Toolbar.ImportExportItem dropdown={true} testId="ImportExportItem" />
        <Toolbar.ExportItem testId="ExportItem" />
        <Toolbar.ImportItem testId="ImportItem" />
        <Toolbar.CollapsibleSearch testId="CollapsibleSearch" />
        <Toolbar.FilterItem testId="FilterItem" />
        <Toolbar.FilterActiveItem testId="FilterActiveItem" />
        <Toolbar.SettingsItem testId="SettingsItem" />
        <Toolbar.FilterSidebar testId="FilterSidebar" />
        <Toolbar.ScaleItem testId="ScaleItem" />
      </>
    )
  },
  {
    type: 'dropdown',
    key: '2',
    label: 'Dropdown',
    iconBefore: <Placeholder />,
    testId: 'item-2',
    overlay: items
  },
  {
    type: 'link',
    key: '3',
    label: 'link',
    testId: 'linkTestId'
  } as ToolbarItems
]

export const TestAttributes: Story = {
  render: (args: ToolbarProps) => (
    <Toolbar {...args} left={itemsAllItems} />
  )
}

export const ImportExportButton: Story = {
  render: (args: ToolbarProps) => (
    <Toolbar {...args} left={[{ key: 'test', children: 'Toolbar', type: 'children' }]} right={itemsImportExportButtons} autoDropdown />
  )
}

export const WithLeftLimit: Story = {
  args: {
    left: itemsLeft,
    right: itemsRight,
    leftLimit: 5
  }
}

export const AutoDropdown: Story = {
  args: {
    left: itemsLeft,
    autoDropdown: true,
    leftLimit: undefined,
    right: itemsRight
  }
}

export const Variations: Story = {
  render: (args: ToolbarProps) => (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <Toolbar {...args} left={itemsLeft.slice(0, 4)} right={itemsRight} />
      <Toolbar {...args} left={itemsLeft.slice(0, 4)} right={itemsRight.slice(0, 1)} />
      <Toolbar {...args} left={itemsLeft.slice(0, 4)} right={itemsRight.slice(1, 2)} />
      <Toolbar {...args} left={itemsLeft.slice(0, 4)} />
      <Toolbar {...args} right={itemsRight} />
      <Toolbar {...args} right={itemsRight.slice(0, 1)} />
      <Toolbar {...args} right={itemsRight.slice(1, 2)} />
    </div>
  )
}

export const WithCollapsibleSearch: Story = {
  render: (args: ToolbarProps) => (
    <Toolbar {...args} left={itemsLeft} right={itemsWithCollapsibleSearch} autoDropdown />
  )
}

export const WithCustomElements: Story = {
  render: (args: ToolbarProps) => (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <Toolbar {...args} left={customItems} styleLeft={{ left: '8px' }} />
      <Toolbar {...args} right={customItems} styleRight={{ right: '8px' }} />
    </div>
  )
}

const itemsWithTooltip = itemsLeft
  .splice(0, 4)
  .map((item, index) => ({
    ...item,
    tooltip: `This is item with key '${item?.key}'`,
    ...(index === 3 ? { disabled: true } : {})
  }))

export const WithTooltip: Story = {
  args: {
    left: itemsWithTooltip as ToolbarItems[],
    right: itemsRight
  }
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
