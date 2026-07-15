import { Badge } from '@src/badge'
import { Button } from '@src/button'
import { Checkbox } from '@src/checkbox'
import { Indicator } from '@src/indicator'
import { Text } from '@src/typography'
import React from 'react'

import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

import { DropdownItemProps, Placement } from '../types'

export const dropdownPlacements: Placement[] = [
  'bottomLeft',
  'bottomRight',
  'bottom',
  'topLeft',
  'topRight',
  'top'
]

export const defaultDropdownOverlay: DropdownItemProps[] = [
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
              <Text key="typography-item" type="BTR5">Typography item</Text>
            )
          },
          {
            testId: 'button-item',
            children: (
              <Button key="button-item">Button item</Button>
            )
          },
          {
            type: 'innerActions',
            children: (
              <Checkbox key="inner-checkbox">Check me, and keep dropdown opened</Checkbox>
            )
          }
        ]
      },
      {
        testId: 'with-tooltip-item',
        disabled: true,
        componentsBefore: [
          <Placeholder key="UserAccount-icon1" />
        ],
        componentsAfter: [
          <Badge key="badge1" mode="neutral" text="25" />
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
          <Indicator key="indicator" mode="high" />,
          <Placeholder key="UserAccount-icon2" />
        ],
        description: 'Some description',
        children: 'With components before'
      },
      {
        testId: 'with-components-after-item',
        componentsAfter: [
          <Placeholder key="UserAccount-icon3" />,
          <Badge key="badge2" mode="neutral" text="25" />
        ],
        description: 'Some description',
        children: 'With components after'
      },
      {
        testId: 'before-and-after-item',
        componentsAfter: [
          <Badge key="badge3" mode="neutral" text="25" />
        ],
        componentsBefore: [
          <Placeholder key="UserAccount-icon4" />
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
      <Badge key="badge4" mode="neutral" text="25" />
    ],
    children: [
      // eslint-disable-next-line @stylistic/max-len
      { children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ligula tempor orci consectetur pellentesque. Quisque quis felis in odio feugiat luctus. Ut sodales, mi at lacinia ultricies, tortor dolor imperdiet sapien, sit amet tristique erat eros sed nisl. In hac habitasse platea dictumst. Sed vel erat ligula. Vivamus a nisi id purus tempor venenatis non nec odio. Ut orci.' },
      { children: 'Default item 2' }
    ]
  }
]

export const simpleDropdownOverlay: DropdownItemProps[] = [
  { children: 'Option 1', description: 'Some description' },
  { children: 'Option 2' },
  { children: 'Option 3', disabled: true }
]
