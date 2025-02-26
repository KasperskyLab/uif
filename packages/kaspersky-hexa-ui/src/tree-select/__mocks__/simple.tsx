import { DefaultOptionType } from 'rc-tree-select/lib/TreeSelect'
import React from 'react'

export const STUB_SIMPLE: DefaultOptionType[] = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1'
          },
          {
            value: 'leaf2',
            title: 'leaf2',
            disabled: true
          }
        ]
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf3',
            title: <b style={{ color: '#08c' }}>leaf3</b>
          }
        ]
      }
    ]
  }
]
