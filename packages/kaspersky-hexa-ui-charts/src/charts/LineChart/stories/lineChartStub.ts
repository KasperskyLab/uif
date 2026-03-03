import { add } from 'date-fns'

export const colors = [
  'var(--chart--base--series--purple--primary--500)',
  'var(--chart--base--series--marina--primary--500)',
  'var(--chart--base--series--orange--primary--300)',
  'var(--chart--base--series--grass--primary--500)',
  'var(--chart--base--series--violet--primary--500)'
]

export const stubLineChartDataOne = [
  {
    name: 'one',
    color: colors[0],
    data: [
      {
        value: 450,
        metric: 10,
        originalPayload: '450-10'
      },
      {
        value: 520,
        metric: 20,
        originalPayload: '520-20'
      },
      {
        value: 380,
        metric: 30,
        originalPayload: '380-30'
      },
      {
        value: 2400,
        metric: 40,
        originalPayload: '2400-40'
      },
      {
        value: 330,
        metric: 50,
        originalPayload: '330-50'
      }
    ]
  }
]

export const stubLineChartData = [
  ...stubLineChartDataOne,
  {
    name: 'two',
    color: colors[1],
    data: [
      {
        value: 40,
        metric: 10,
        originalPayload: '40-10'
      },
      {
        value: 50,
        metric: 20,
        originalPayload: '50-20'
      },
      {
        value: 30,
        metric: 30,
        originalPayload: '30-30'
      },
      {
        value: 40,
        metric: 40,
        originalPayload: '40-40'
      },
      {
        value: 10,
        metric: 50,
        originalPayload: '10-50'
      }
    ]
  },
  {
    name: 'three',
    color: colors[2],
    data: [
      {
        value: 140,
        metric: 10,
        originalPayload: '40-10'
      },
      {
        value: 150,
        metric: 20,
        originalPayload: '50-20'
      },
      {
        value: 130,
        metric: 30,
        originalPayload: '30-30'
      },
      {
        value: 140,
        metric: 40,
        originalPayload: '40-40'
      },
      {
        value: 110,
        metric: 50,
        originalPayload: '10-50'
      }
    ]
  },
  {
    name: 'four',
    color: colors[3],
    data: [
      {
        value: 240,
        metric: 10,
        originalPayload: '40-10'
      },
      {
        value: 270,
        metric: 20,
        originalPayload: '50-20'
      },
      {
        value: 200,
        metric: 30,
        originalPayload: '30-30'
      },
      {
        value: 250,
        metric: 40,
        originalPayload: '40-40'
      },
      {
        value: 210,
        metric: 50,
        originalPayload: '10-50'
      }
    ]
  },
  {
    name: 'five',
    color: colors[4],
    data: [
      {
        value: 340,
        metric: 10,
        originalPayload: '40-10'
      },
      {
        value: 370,
        metric: 20,
        originalPayload: '50-20'
      },
      {
        value: 300,
        metric: 30,
        originalPayload: '30-30'
      },
      {
        value: 350,
        metric: 40,
        originalPayload: '40-40'
      },
      {
        value: 310,
        metric: 50,
        originalPayload: '10-50'
      }
    ]
  }
]

export const stubLineColorInDataChartData = [
  stubLineChartData[0],
  {
    name: 'color',
    color: 'red',
    data: [
      {
        value: 43,
        metric: 10
      },
      {
        value: 51,
        metric: 20
      },
      {
        value: 36,
        metric: 30
      },
      {
        value: 43,
        metric: 40
      },
      {
        value: 16,
        metric: 50
      }
    ]
  }
]

export const stubLineChartWithLongTextData = [
  {
    name: 'one',
    color: colors[0],
    data: [
      {
        value: 450,
        metric: 10000000000
      },
      {
        value: 520,
        metric: 20000000000
      },
      {
        value: 380,
        metric: 30000000000
      },
      {
        value: 2400,
        metric: 40000000000
      },
      {
        value: 330,
        metric: 50000000000
      }
    ]
  },
  {
    name: 'two',
    color: colors[1],
    data: [
      {
        value: 40,
        metric: 10000000000
      },
      {
        value: 50,
        metric: 20000000000
      },
      {
        value: 30,
        metric: 30000000000
      },
      {
        value: 40,
        metric: 40000000000
      },
      {
        value: 10,
        metric: 50000000000
      }
    ]
  }
]

const date = new Date()

export const stubLineTimeChartDataOne = [
  {
    name: 'one',
    color: colors[0],
    data: [
      {
        value: 450,
        metric: date,
        originalPayload: '450-10'
      },
      {
        value: 520,
        metric: add(date, { days: 1 }),
        originalPayload: '520-20'
      },
      {
        value: 380,
        metric: add(date, { days: 2 }),
        originalPayload: '380-30'
      },
      {
        value: 2400,
        metric: add(date, { days: 3 }),
        originalPayload: '2400-40'
      },
      {
        value: 330,
        metric: add(date, { days: 4 }),
        originalPayload: '330-50'
      }
    ]
  }
]

export const stubLineTimeChartData = [
  ...stubLineTimeChartDataOne,
  {
    name: 'two',
    color: colors[1],
    data: [
      {
        value: 40,
        metric: date,
        originalPayload: '40-10'
      },
      {
        value: 50,
        metric: add(date, { days: 1 }),
        originalPayload: '50-20'
      },
      {
        value: 30,
        metric: add(date, { days: 2 }),
        originalPayload: '30-30'
      },
      {
        value: 40,
        metric: add(date, { days: 3 }),
        originalPayload: '40-40'
      },
      {
        value: 10,
        metric: add(date, { days: 4 }),
        originalPayload: '10-50'
      }
    ]
  }
]

export const stubLineTimeEmpty = [
  {
    name: 'Среднее',
    data: []
  },
  {
    name: 'Мин',
    data: []
  },
  {
    name: 'Макс',
    data: []
  }
]
