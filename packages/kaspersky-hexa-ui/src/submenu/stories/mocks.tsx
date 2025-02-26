import { Toggle } from '@src/toggle'
import React from 'react'

import { Placeholder } from '@kaspersky/icons/16'

import { SubmenuItemProps } from '../types'

export const mockedItems: SubmenuItemProps[] = [
  {
    type: 'title',
    key: 'title-1',
    text: 'Title 1'
  },
  {
    type: 'row',
    key: 'row-1',
    text: 'Row 1',
    content: 'This is row 1',
    iconBefore: <Placeholder />,
    elementAfter: <Toggle />,
    notification: {
      type: 'badge',
      mode: 'new',
      title: 'New notification',
      text: 'NEW'
    },
    action: {
      onClick: () => console.log('Row 1 action clicked'),
      icon: <Placeholder />
    },
    children: [
      {
        type: 'row',
        key: 'row-1-1',
        text: 'Row 1-1',
        content: 'This is row 1-1',
        iconBefore: <Placeholder />,
        elementAfter: <Toggle />,
        action: {
          onClick: () => console.log('Row 1-1 action clicked'),
          icon: <Placeholder />
        },
        children: [
          {
            type: 'row',
            key: 'row-1-1-1',
            text: 'Row 1-1-1',
            content: 'This is row 1-1-1',
            disabled: true,
            children: [
              {
                type: 'row',
                key: 'row-1-1-1-1',
                text: 'Row 1-1-1-1',
                content: 'This is row 1-1-1-1',
                disabled: true
              },
              {
                type: 'row',
                key: 'row-1-1-1-2',
                text: 'Row 1-1-1-2',
                content: 'This is row 1-1-1-2',
                iconBefore: <Placeholder />,
                disabled: true
              },
              {
                type: 'row',
                key: 'row-1-1-1-3',
                text: 'Row 1-1-1-3',
                content: 'This is row 1-1-1-3',
                iconBefore: <Placeholder />
              }
            ]
          }
        ]
      },
      {
        type: 'row',
        key: 'row-1-2',
        text: 'Row 1-2',
        content: 'This is row 1-2'
      }
    ]
  },
  {
    type: 'row',
    key: 'row-2',
    text: 'Row 2',
    content: 'This is row 2',
    iconBefore: <Placeholder />,
    notification: {
      type: 'indicator',
      mode: 'medium'
    },
    action: {
      onClick: () => console.log('Row 2 action clicked'),
      icon: <Placeholder />
    }
  },
  {
    type: 'divider'
  },
  {
    type: 'title',
    key: 'title-2',
    text: 'Long long long long long long long long title 2'
  },
  {
    type: 'row',
    key: 'row-3',
    text: 'Row 3',
    content: 'This is row 3',
    children: [
      {
        type: 'row',
        key: 'row-3-1',
        text: 'Row 3-1',
        content: 'This is row 3-1',
        elementAfter: <Toggle />
      },
      {
        type: 'row',
        key: 'row-3-2',
        text: 'Row 3-2',
        content: 'This is row 3-2',
        disabled: true
      },
      {
        type: 'row',
        key: 'row-3-3',
        text: 'Row 3-3',
        content: 'This is row 3-3'
      }
    ]
  },
  {
    type: 'row',
    key: 'row-4',
    text: 'Row 4',
    content: 'This is row 4',
    action: {
      onClick: () => console.log('Row 4 action clicked'),
      icon: <Placeholder />
    },
    children: [
      {
        type: 'row',
        key: 'row-4-1',
        text: 'Row 4-1',
        content: 'This is row 4-1',
        children: [
          {
            type: 'row',
            key: 'row-4-1-1',
            text: 'Row 4-1-1',
            content: 'This is row 4-1-1',
            elementAfter: <Toggle />
          }
        ]
      },
      {
        type: 'row',
        key: 'row-4-2',
        text: 'Row 4-2',
        content: 'This is row 4-2',
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
    text: 'Row 5',
    content: 'This is row 5',
    elementAfter: <Toggle />
  },
  {
    type: 'row',
    key: 'row-6',
    text: 'Long long long long long long long row 6',
    content: 'This is row 6',
    notification: {
      type: 'badge',
      count: 6,
      mode: 'new'
    }
  },
  {
    type: 'row',
    key: 'row-7',
    text: 'Row 7',
    content: 'This is row 7',
    notification: {
      type: 'badge',
      count: 100,
      mode: 'critical'
    },
    action: {
      onClick: () => console.log('Row 7 action clicked'),
      icon: <Placeholder />
    }
  },
  {
    type: 'divider'
  },
  {
    type: 'row',
    key: 'row-8',
    text: 'Row 8',
    content: 'This is row 8',
    notification: {
      type: 'badge',
      count: 1,
      mode: 'new'
    }
  }
]
