import { DataNode } from '@src/tree'
import React from 'react'

import { Cloud, Folder, Server } from '@kaspersky/hexa-ui-icons/16'

export const treeDataMock: DataNode[] = [
  {
    title: 'Main',
    key: '0-0',
    children: [
      {
        title: 'Categorized assets',
        disabled: true,
        key: '0-0-0',
        children: [
          {
            title: 'Address space',
            key: '0-0-0-0',
            children: [
              {
                title: 'Address space',
                key: '0-0-0-0-0'
              }
            ]
          },
          {
            title: 'Business impact',
            key: '0-0-0-1'
          },
          {
            title: 'Location',
            key: '0-0-0-2'
          }
        ]
      }
    ]
  },
  {
    title: 'KUMA Updater',
    key: '0-1',
    children: [
      {
        title: 'Categorized assets',
        key: '0-1-0',
        children: [
          {
            title: 'Address space',
            key: '0-1-0-0'
          },
          {
            title: 'Business impact',
            disabled: true,
            key: '0-1-0-1'
          },
          {
            title: 'Location',
            key: '0-1-0-2'
          }
        ]
      }
    ]
  },
  {
    title: 'Shared',
    key: '0-2',
    children: [
      {
        title: 'Categorized assets',
        key: '0-2-0',
        children: [
          {
            title: 'Address space',
            key: '0-2-0-0'
          },
          {
            title: 'Business impact',
            key: '0-2-0-1'
          },
          {
            title: 'Location',
            key: '0-2-0-2'
          }
        ]
      },
      {
        title: 'Org chart',
        key: '0-2-1',
        children: [
          {
            title: 'Shared chart',
            key: '0-2-1-0'
          }
        ]
      },
      {
        title: 'Test chart',
        key: '0-2-2',
        children: [
          {
            title: 'Test common',
            key: '0-2-2-0',
            children: [
              {
                title: 'Test common',
                key: '0-2-2-2-0'
              },
              {
                title: 'Test common',
                key: '0-2-2-2-1'
              }
            ]
          }
        ]
      }
    ]
  }
]

export const modifyNodes = (nodes: DataNode[]): DataNode[] =>
  nodes.map(node => {
    const newNode = { ...node }
    if (typeof newNode.key === 'string') {
      if (newNode.key.endsWith('1')) {
        newNode.icon = <Server />
        newNode.title = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in eros sagittis, varius lorem nec, eleifend arcu'
      } else if (newNode.key.endsWith('2')) {
        newNode.icon = <Cloud />
        newNode._action = false
      } else {
        newNode.icon = <Folder />
      }
    }
    if (newNode.children) {
      newNode.children = modifyNodes(newNode.children)
    }
    return newNode
  })
  
export const treeDataMockWithIcons = modifyNodes(treeDataMock)
