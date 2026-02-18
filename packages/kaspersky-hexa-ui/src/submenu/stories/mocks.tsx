import { ActionButton } from '@src/action-button'
import { Dropdown } from '@src/dropdown'
import { clickHandler } from '@src/menu/stories/CustomItem'
import { Toggle } from '@src/toggle'
import React from 'react'

import { Menu2, Placeholder } from '@kaspersky/hexa-ui-icons/16'

import { SubmenuItemProps } from '../types'

const customToggle = <span onClick={e => { e.stopPropagation() }}><Toggle /></span>

const HoverActionButton = () =>
  <Dropdown
    getPopupContainer={trigger => trigger.parentElement as HTMLElement}
    overlay={[
      {
        type: 'action',
        children: 'Item 1',
        onClick: () => { console.log('Click 1') }
      },
      {
        type: 'action',
        children: 'Item 2',
        onClick: () => { console.log('Click 2') }
      }
    ]}
    trigger={['click']}
  >
    <ActionButton icon={<Menu2 />} mode="ghost" />
  </Dropdown>

export const mockedItems: SubmenuItemProps[] = [
  {
    type: 'title',
    key: 'title-1',
    testId: 'title-1-test-id',
    text: 'Title 1'
  },
  {
    type: 'row',
    key: 'row-1',
    testId: 'row-1-test-id',
    text: 'Row 1',
    description: 'Row 1 description long long long long',
    content: 'This is row 1',
    onClick: () => clickHandler('This is row 1'),
    iconBefore: <Placeholder />,
    elementAfter: customToggle,
    notification: {
      type: 'badge',
      mode: 'new',
      title: 'New notification',
      text: 'NEW'
    },
    action: {
      onClick: (e) => { e.stopPropagation(); console.log('Row 1 action clicked') },
      icon: <Placeholder />
    },
    children: [
      {
        type: 'row',
        key: 'row-1-1',
        testId: 'row-1-1-test-id',
        text: 'Row 1-1',
        description: 'Row 1-1 description',
        content: 'This is row 1-1',
        onClick: () => clickHandler('This is row 1-1'),
        iconBefore: <Placeholder />,
        elementAfter: customToggle,
        action: {
          onClick: (e) => { e.stopPropagation(); console.log('Row 1-1 action clicked') },
          icon: <Placeholder />
        },
        children: [
          {
            type: 'row',
            key: 'row-1-1-1',
            testId: 'row-1-1-1-test-id',
            text: 'Row 1-1-1',
            description: 'Row 1-1-1 description',
            content: 'This is row 1-1-1',
            onClick: () => clickHandler('This is row 1-1-1'),
            disabled: true,
            children: [
              {
                type: 'row',
                key: 'row-1-1-1-1',
                testId: 'row-1-1-1-1-test-id',
                text: 'Row 1-1-1-1',
                description: 'Row 1-1-1-1 description',
                content: 'This is row 1-1-1-1',
                onClick: () => clickHandler('This is row 1-1-1-1'),
                disabled: true
              },
              {
                type: 'row',
                key: 'row-1-1-1-2',
                testId: 'row-1-1-1-2-test-id',
                text: 'Row 1-1-1-2',
                description: 'Row 1-1-1-1 description',
                content: 'This is row 1-1-1-2',
                onClick: () => clickHandler('This is row 1-1-1-2'),
                iconBefore: <Placeholder />,
                disabled: true
              },
              {
                type: 'row',
                key: 'row-1-1-1-3',
                testId: 'row-1-1-1-3-test-id',
                text: 'Row 1-1-1-3',
                content: 'This is row 1-1-1-3',
                onClick: () => clickHandler('This is row 1-1-1-3'),
                iconBefore: <Placeholder />
              }
            ]
          }
        ]
      },
      {
        type: 'row',
        key: 'row-1-2',
        testId: 'row-1-2-test-id',
        text: 'Row 1-2',
        description: 'Row 1-2 description',
        content: 'This is row 1-2',
        onClick: () => clickHandler('This is row 1-2')
      }
    ]
  },
  {
    type: 'row',
    key: 'row-2',
    testId: 'row-2-test-id',
    text: 'Row 2',
    content: 'This is row 2',
    onClick: () => clickHandler('This is row 2'),
    iconBefore: <Placeholder />,
    notification: {
      type: 'indicator',
      mode: 'medium'
    },
    action: {
      onClick: (e) => { e.stopPropagation(); console.log('Row 2 action clicked') },
      icon: <Placeholder />
    }
  },
  {
    type: 'divider'
  },
  {
    type: 'title',
    key: 'title-2',
    testId: 'title-2-test-id',
    text: 'Long long long long long long long long title 2'
  },
  {
    type: 'row',
    key: 'row-3',
    testId: 'row-3-test-id',
    text: 'Row 3',
    content: 'This is row 3',
    onClick: () => clickHandler('This is row 3'),
    hoverElementAfter: <HoverActionButton />,
    children: [
      {
        type: 'row',
        key: 'row-3-1',
        testId: 'row-3-1-test-id',
        text: 'Row 3-1',
        description: 'Row 3-1 description',
        content: 'This is row 3-1',
        onClick: () => clickHandler('This is row 3-1')
      },
      {
        type: 'row',
        key: 'row-3-2',
        testId: 'row-3-2-test-id',
        text: 'Row 3-2',
        content: 'This is row 3-2',
        onClick: () => clickHandler('This is row 3-2'),
        disabled: true
      },
      {
        type: 'row',
        key: 'row-3-3',
        testId: 'row-3-3-test-id',
        text: 'Row 3-3',
        content: 'This is row 3-3',
        onClick: () => clickHandler('This is row 3-3')
      }
    ]
  },
  {
    type: 'row',
    key: 'row-4',
    testId: 'row-4-test-id',
    text: 'Row 4',
    content: 'This is row 4',
    onClick: () => clickHandler('This is row 4'),
    hoverElementAfter: <HoverActionButton />,
    elementAfter: customToggle,
    action: {
      onClick: (e) => { e.stopPropagation(); console.log('Row 4 action clicked') },
      icon: <Placeholder />
    },
    children: [
      {
        type: 'row',
        key: 'row-4-1',
        testId: 'row-4-1-test-id',
        text: 'Row 4-1',
        description: 'Row 4-1 description',
        content: 'This is row 4-1',
        onClick: () => clickHandler('This is row 4-1'),
        children: [
          {
            type: 'row',
            key: 'row-4-1-1',
            testId: 'row-4-1-1-test-id',
            text: 'Row 4-1-1',
            content: 'This is row 4-1-1',
            onClick: () => clickHandler('This is row 4-1-1'),
            elementAfter: customToggle
          }
        ]
      },
      {
        type: 'row',
        key: 'row-4-2',
        testId: 'row-4-2-test-id',
        text: 'Row 4-2',
        content: 'This is row 4-2',
        onClick: () => clickHandler('This is row 4-2'),
        notification: {
          type: 'indicator',
          mode: 'critical'
        }
      }
    ]
  },
  {
    type: 'title',
    key: 'title-3',
    testId: 'title-3-test-id',
    text: 'Title 3',
    action: {
      onClick: () => console.log('Title 3 action clicked'),
      icon: <Placeholder />
    }
  },
  {
    type: 'divider'
  },
  {
    type: 'row',
    key: 'row-5',
    testId: 'row-5-test-id',
    text: 'Row 5',
    content: 'This is row 5',
    onClick: () => clickHandler('This is row 5'),
    elementAfter: customToggle
  },
  {
    type: 'row',
    key: 'row-6',
    testId: 'row-6-test-id',
    text: 'Long long long long long long long row 6',
    content: 'This is row 6',
    onClick: () => clickHandler('This is row 6'),
    notification: {
      type: 'badge',
      count: 6,
      mode: 'new'
    }
  },
  {
    type: 'row',
    key: 'row-7',
    testId: 'row-7-test-id',
    text: 'Row 7',
    content: 'This is row 7',
    onClick: () => clickHandler('This is row 7'),
    notification: {
      type: 'badge',
      count: 100,
      mode: 'critical'
    },
    action: {
      onClick: (e) => { e.stopPropagation(); console.log('Row 7 action clicked') },
      icon: <Placeholder />
    }
  },
  {
    type: 'divider'
  },
  {
    type: 'row',
    key: 'row-8',
    testId: 'row-8-test-id',
    text: 'Row 8',
    content: 'This is row 8',
    onClick: () => clickHandler('This is row 8'),
    notification: {
      type: 'badge',
      count: 1,
      mode: 'new'
    }
  }
]

export const mockedItemsWithoutContent: SubmenuItemProps[] = [
  {
    type: 'row',
    key: 'row-1',
    testId: 'row-1-test-id',
    text: 'Row 1',
    description: 'Row 1 description long long long long',
    onClick: () => clickHandler('This is row 1'),
    iconBefore: <Placeholder />,
    notification: {
      type: 'badge',
      mode: 'new',
      title: 'New notification',
      text: 'NEW'
    },
    action: {
      onClick: (e) => { e.stopPropagation(); console.log('Row 1 action clicked') },
      icon: <Placeholder />
    },
    children: [
      {
        type: 'row',
        key: 'row-1-1',
        testId: 'row-1-1-test-id',
        text: 'Row 1-1',
        description: 'Row 1-1 description',
        onClick: () => clickHandler('This is row 1-1'),
        iconBefore: <Placeholder />,
        action: {
          onClick: (e) => { e.stopPropagation(); console.log('Row 1-1 action clicked') },
          icon: <Placeholder />
        },
        children: [
          {
            type: 'row',
            key: 'row-1-1-1',
            testId: 'row-1-1-1-test-id',
            text: 'Row 1-1-1',
            description: 'Row 1-1-1 description',
            onClick: () => clickHandler('This is row 1-1-1'),
            disabled: true,
            children: [
              {
                type: 'row',
                key: 'row-1-1-1-1',
                testId: 'row-1-1-1-1-test-id',
                text: 'Row 1-1-1-1',
                description: 'Row 1-1-1-1 description',
                onClick: () => clickHandler('This is row 1-1-1-1'),
                disabled: true
              },
              {
                type: 'row',
                key: 'row-1-1-1-2',
                testId: 'row-1-1-1-2-test-id',
                text: 'Row 1-1-1-2',
                description: 'Row 1-1-1-1 description',
                onClick: () => clickHandler('This is row 1-1-1-2'),
                iconBefore: <Placeholder />,
                disabled: true
              },
              {
                type: 'row',
                key: 'row-1-1-1-3',
                testId: 'row-1-1-1-3-test-id',
                text: 'Row 1-1-1-3',
                onClick: () => clickHandler('This is row 1-1-1-3'),
                iconBefore: <Placeholder />
              }
            ]
          }
        ]
      },
      {
        type: 'row',
        key: 'row-1-2',
        testId: 'row-1-2-test-id',
        text: 'Row 1-2',
        description: 'Row 1-2 description',
        onClick: () => clickHandler('This is row 1-2')
      }
    ]
  },
  {
    type: 'row',
    key: 'row-2',
    testId: 'row-2-test-id',
    text: 'Row 2',
    onClick: () => clickHandler('This is row 2'),
    iconBefore: <Placeholder />,
    notification: {
      type: 'indicator',
      mode: 'medium'
    },
    action: {
      onClick: (e) => { e.stopPropagation(); console.log('Row 2 action clicked') },
      icon: <Placeholder />
    }
  },
  {
    type: 'row',
    key: 'row-3',
    testId: 'row-3-test-id',
    text: 'Row 3',
    onClick: () => clickHandler('This is row 3'),
    children: [
      {
        type: 'row',
        key: 'row-3-1',
        testId: 'row-3-1-test-id',
        text: 'Row 3-1',
        description: 'Row 3-1 description',
        onClick: () => clickHandler('This is row 3-1')
      },
      {
        type: 'row',
        key: 'row-3-2',
        testId: 'row-3-2-test-id',
        text: 'Row 3-2',
        onClick: () => clickHandler('This is row 3-2'),
        disabled: true
      },
      {
        type: 'row',
        key: 'row-3-3',
        testId: 'row-3-3-test-id',
        text: 'Row 3-3',
        onClick: () => clickHandler('This is row 3-3')
      }
    ]
  }
]
