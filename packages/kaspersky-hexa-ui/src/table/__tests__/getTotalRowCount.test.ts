import { TableRecord } from '@src/table'

import { getTotalRowCount } from '../helpers/getTotalRowCount'

describe('getTotalRowCount', () => {
  it('should return list length if data is a flat list', () => {
    const data: TableRecord[] = [
      {
        name: 'John Doe',
        description: 'Nice guy',
        age: 34
      },
      {
        name: 'Jane Doe',
        description: 'Cool girl',
        age: 33
      },
      {
        name: 'Judy Doe',
        description: 'Great person',
        age: 38
      }
    ]
    expect(getTotalRowCount(data)).toBe(3)
  })

  it('should return tree size if data has tree structure', () => {
    const data1: TableRecord[] = [
      {
        name: 'John Doe',
        description: 'Nice guy',
        age: 34
      },
      {
        name: 'Jane Doe',
        description: 'Cool girl',
        age: 33
      },
      {
        name: 'James Doe',
        description: 'Noble man',
        age: 65,
        children: [
          {
            name: 'Mary Sue',
            description: 'Dubious character',
            age: 41,
            children: [{
              name: 'Dirk Gently',
              description: 'Best detective',
              age: 15
            }]
          },
          {
            name: 'John Snow',
            description: 'Knows nothing',
            age: 45
          }
        ]
      },
      {
        name: 'Judy Doe',
        description: 'Great person',
        age: 38
      }
    ]
    expect(getTotalRowCount(data1)).toBe(7)

    const data2: TableRecord[] = [
      {
        name: 'James Doe',
        description: 'Noble man',
        age: 65,
        children: [
          {
            name: 'Mary Sue',
            description: 'Dubious character',
            age: 41,
            children: [
              {
                name: 'Dirk Gently',
                description: 'Best detective',
                age: 15
              },
              {
                name: 'Dirk Gently2',
                description: 'Best detective',
                age: 14
              }
            ]
          },
          {
            name: 'John Snow',
            description: 'Knows nothing',
            age: 45
          }
        ]
      }
    ]
    expect(getTotalRowCount(data2)).toBe(5)
  })
})
