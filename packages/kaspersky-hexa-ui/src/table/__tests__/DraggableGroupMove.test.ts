import { TableRecord } from '@src/table'

import { arrayGroupMove } from '../modules/Draggable/helpers'

const data: TableRecord[] = [
  {
    key: 'group_Cat',
    children: [
      {
        pet: 'Cat',
        age: 3,
        description: 'Jasons pet',
        key: 1
      },
      {
        pet: 'Cat',
        age: 5,
        description: 'Eddies pet',
        key: 2
      }
    ]
  },
  {
    key: 'group_Dog',
    children: [
      {
        pet: 'Dog',
        age: 7,
        description: 'Toms pet',
        key: 3
      }
    ]
  }
]

const groupingPropertyPath = ['pet']

describe('arrayGroupMove', () => {
  it('should move row in same group (w/o update row data)', () => {

    /* pick first element in first group */
    const from = {
      groupIndex: 0,
      groupKey: 'group_Cat',
      itemIndex: 0
    }

    /* put after second element in first group */
    const to = {
      groupIndex: 0,
      groupKey: 'group_Cat',
      itemIndex: 1
    }

    const updatedData = arrayGroupMove({ array: data, from, to, groupingPropertyPath })

    const [{ children: firstGroupRows }] = updatedData as TableRecord[]

    expect(firstGroupRows && firstGroupRows[1].description).toBe('Jasons pet')
  })

  it('should move row to another group with update row data', () => {

    /* pick first element in first group */
    const from = {
      groupIndex: 0,
      groupKey: 'group_Cat',
      itemIndex: 0
    }

    /* put after second element in second group and update grouped by property */
    const to = {
      groupIndex: 1,
      groupKey: 'group_Dog',
      itemIndex: 1
    }

    const updatedData = arrayGroupMove({ array: data, from, to, groupingPropertyPath })

    const [, { children: secondGroupRows }] = updatedData as any[]

    expect(secondGroupRows && secondGroupRows.filter(({ description }: { description: string }) =>
      description === 'Jasons pet').length).toBe(1)
  })
})