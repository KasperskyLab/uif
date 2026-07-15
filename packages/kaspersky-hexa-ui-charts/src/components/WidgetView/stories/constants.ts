import { ReactNode } from 'react'
import { ArgTypes } from 'storybook/internal/types'

import { DropdownItemProps } from '@kaspersky/hexa-ui'

import { LegendPosition, WidgetProps, WidgetViewPadding } from '../types'

export const widgetViewArgTypes: Partial<ArgTypes<WidgetProps & { children?: ReactNode; }>> = {
  state: {
    description:
      'Visual state of the main chart slot.',
    control: 'select',
    options: ['ready', 'loading', 'error', 'no-data', 'empty']
  },
  children: {
    description: 'Main chart content. Rendered in the primary slot.',
    control: false,
    table: { category: 'Main chart slot' }
  },
  header: {
    description: 'Optional header above the chart (e.g. `<WidgetHeader />`).',
    control: false,
    table: { category: 'Main chart slot' }
  },
  legend: {
    description: 'Legend element for the chart.',
    control: false,
    table: { category: 'Main chart slot' }
  },
  legendPosition: {
    description: 'Legend placement relative to the chart.',
    control: 'inline-radio',
    options: [LegendPosition.TOP, LegendPosition.RIGHT, LegendPosition.BOTTOM],
    table: { category: 'Main chart slot' }
  },
  chartFooter: {
    description: 'Content below the chart area.',
    control: false,
    table: { category: 'Main chart slot' }
  },
  elementAfter: {
    description:
      'Secondary chart slot to the right of the main chart.',
    control: false,
    table: { category: 'Additional slots' }
  },
  elementBottom: {
    description:
      'Secondary chart slot below the main row.',
    control: false,
    table: { category: 'Additional slots' }
  },
  errorResetKey: {
    description:
      'When changed, resets `ErrorBoundary` render-error state for the main chart slot. Use after recovering from a render crash.',
    control: 'number',
    table: { category: 'Error handling' }
  },
  i18n: {
    description: 'Localized strings for empty and error states of the main chart slot.',
    control: 'object',
    table: { category: 'Main chart slot' }
  },
  lifecycle: {
    description: 'Widget fire events when ready' +
      '\n\n **enabled** - must be "true" to fire events' +
      '\n\n **onMount** - content has mounted' +
      '\n\n **onReady** - fires on the next macrotask after mount' +
      '\n\n **onUnmount** - cleanup when the effect re-runs or the slot unmounts.',
    control: 'object',
    table: { category: 'Lifecycle' }
  },
  invalid: {
    description: 'Applies invalid styling to the widget container.',
    control: 'boolean',
    table: { category: 'Widget' }
  },
  active: {
    description: 'Applies active styling to the widget container.',
    control: 'boolean',
    table: { category: 'Widget' }
  },
  padding: {
    description:
      'Widget container paddings.',
    control: 'select',
    options: [WidgetViewPadding.LARGE, WidgetViewPadding.MEDIUM],
    table: { category: 'Widget' }
  }
}

export const defaultDropdownOverlay: DropdownItemProps[] = [
  {
    title: 'Submenu',
    type: 'submenu',
    description: 'Some description',
    children: [
      {
        active: true,
        title: 'Menu item',
        type: 'action',
        children: []
      },
      {
        testId: 'action-item',
        type: 'action',
        onClick: (menuInfo) => {
          alert(`some action ${menuInfo}`)
        },
        children: 'Menu item'
      },
      {
        title: 'Action item',
        testId: 'action-item',
        type: 'action',
        onClick: (menuInfo) => {
          alert(`some action ${menuInfo}`)
        },
        children: 'action item',
        description: 'With tooltip',
        tooltip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      }
    ]
  }
]
