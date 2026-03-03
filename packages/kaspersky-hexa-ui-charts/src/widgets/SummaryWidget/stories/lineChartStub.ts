import add from 'date-fns/add'

export const stubLineChartSingle = [
  {
    name: 'one',
    color: 'var(--color-grass500)',
    data: [
      {
        value: 450,
        metric: 10
      },
      {
        value: 520,
        metric: 20
      },
      {
        value: 380,
        metric: 30
      },
      {
        value: 2400,
        metric: 40
      },
      {
        value: 330,
        metric: 50
      }
    ]
  }
]

export const stubLineChartData = [
  {
    name: 'one',
    data: [
      {
        value: 450,
        metric: 10
      },
      {
        value: 520,
        metric: 20
      },
      {
        value: 380,
        metric: 30
      },
      {
        value: 2400,
        metric: 40
      },
      {
        value: 330,
        metric: 50
      }
    ]
  },
  {
    name: 'two',
    data: [
      {
        value: 40,
        metric: 10
      },
      {
        value: 50,
        metric: 20
      },
      {
        value: 30,
        metric: 30
      },
      {
        value: 40,
        metric: 40
      },
      {
        value: 10,
        metric: 50
      }
    ]
  }
]

export const stubLineColorInDataChartData = [
  stubLineChartData[0],
  {
    name: 'color',
    color: '#ff0000',
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

export const stubLineTimeChartData = [
  {
    name: 'one',
    data: [
      {
        value: 450,
        metric: date.valueOf()
      },
      {
        value: 520,
        metric: add(date, { days: 1 }).valueOf()
      },
      {
        value: 380,
        metric: add(date, { days: 2 }).valueOf()
      },
      {
        value: 2400,
        metric: add(date, { days: 3 }).valueOf()
      },
      {
        value: 330,
        metric: add(date, { days: 4 }).valueOf()
      }
    ]
  },
  {
    name: 'two',
    data: [
      {
        value: 40,
        metric: date.valueOf()
      },
      {
        value: 50,
        metric: add(date, { days: 1 }).valueOf()
      },
      {
        value: 30,
        metric: add(date, { days: 2 }).valueOf()
      },
      {
        value: 40,
        metric: add(date, { days: 3 }).valueOf()
      },
      {
        value: 10,
        metric: add(date, { days: 4 }).valueOf()
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
