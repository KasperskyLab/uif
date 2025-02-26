import { DefaultOptionType } from 'rc-tree-select/lib/TreeSelect'

export const STUB_CHECKABLE: DefaultOptionType[] = [
  {
    title: 'Node1',
    value: 'Node1',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: 'Child Node1',
        key: '0-0-0'
      }
    ]
  },
  {
    title: 'Node2',
    value: 'Node2',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: 'Child Node3',
        key: '0-1-0'
      },
      {
        title: 'Child Node4',
        value: 'Child Node4',
        key: '0-1-1'
      },
      {
        title: 'Child Node5',
        value: 'Child Node5',
        key: '0-1-2'
      }
    ]
  }
]
