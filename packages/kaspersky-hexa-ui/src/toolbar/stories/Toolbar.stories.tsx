import {
  buildStoryArgTypes,
  getControlsInclude
} from '@sb/components/Documentation'
import { badges } from '@sb/badges'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from '../__meta__/meta.json'
import { Toolbar } from '../Toolbar'
import type { ToolbarItems, ToolbarProps } from '../types'

import {
  defaultArgs,
  toolbarPropPresentation
} from './Toolbar.controls'

type ToolbarStoryProps = Omit<ToolbarProps, 'left' | 'right'>

const playgroundItems: ToolbarItems[] = [
  { type: 'button', key: 'filter', label: 'Фильтры', onClick: () => alert('Фильтры') },
  { type: 'divider', key: 'divider' },
  { type: 'button', key: 'export', label: 'Экспорт', onClick: () => alert('Экспорт') },
  { type: 'button', key: 'settings', label: 'Настройки', onClick: () => alert('Настройки') }
]

const dropdownItems = [
  { children: 'Действие 1', onClick: () => alert('Действие 1') },
  { children: 'Действие 2', onClick: () => alert('Действие 2') }
]

export const getItemsLeft = (): ToolbarItems[] => [
  {
    type: 'button',
    key: '1',
    label: 'Кнопка 1',
    onClick: () => alert('Кнопка 1')
  },
  {
    type: 'dropdown',
    key: '2',
    label: 'Кнопка 2',
    overlay: dropdownItems
  },
  { type: 'divider', key: 'divider' },
  { type: 'button', key: '4', label: 'Кнопка 4', visible: false },
  { type: 'button', key: '5', label: 'Кнопка 5', disabled: true }
]

export const getItemsRight = (): ToolbarItems[] => [
  {
    type: 'children',
    key: 'search',
    children: <Toolbar.Search placeholder="Поиск" />
  },
  {
    type: 'children',
    key: 'settings',
    children: <Toolbar.SettingsItem onClick={() => alert('Настройки')} />
  }
]

export const toolbarStorySettings: Meta<ToolbarStoryProps> = {
  argTypes: buildStoryArgTypes(toolbarPropPresentation),
  args: defaultArgs,
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    design: MetaData.pixsoView
  },
  decorators: [
    Story => (
      <div style={{ width: '90vw' }}>
        <Story />
      </div>
    )
  ]
}

const meta = {
  title: 'Hexa UI Components/Toolbar',
  component: Toolbar,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['toolbarStorySettings', 'getItemsLeft', 'getItemsRight'],
  ...toolbarStorySettings
} satisfies Meta<ToolbarStoryProps>

export default meta

type Story = StoryObj<ToolbarStoryProps>

export const Playground: Story = {
  name: 'Playground',
  render: args => (
    <Toolbar
      {...args}
      left={playgroundItems}
      right={[
        { type: 'children', key: 'search', children: <Toolbar.Search placeholder="Поиск" /> },
        { type: 'children', key: 'settings', children: <Toolbar.SettingsItem onClick={() => alert('Настройки')} /> }
      ]}
    />
  ),
  parameters: {
    controls: {
      include: getControlsInclude(toolbarPropPresentation),
      sort: 'none'
    }
  }
}
