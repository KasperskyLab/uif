import { IStackedChartData } from '../../../types/chartData'

export const colors = [
  'var(--chart--base--series--purple--primary--500)',
  'var(--chart--base--series--marina--primary--500)',
  'var(--chart--base--series--orange--primary--300)',
  'var(--chart--base--series--grass--primary--500)',
  'var(--chart--base--series--violet--primary--500)'
]

export const stubSingleBarChartData: IStackedChartData<[number, number]> = [
  {
    name: 'Marine Sprite',
    title: 'Title Marine Sprite',
    color: colors[0],
    data: [
      {
        metric: 'Q1-2020',
        title: 'title Q1-2020',
        value: 74,
        originalPayload: [2020, 44]
      },
      {
        metric: 'Q1-2021',
        title: (metric: string): string => `title ${metric}`,
        value: 4,
        originalPayload: [2021, 4]
      },
      {
        metric: 'Q1-2022',
        value: 12,
        originalPayload: [2022, 12]
      },
      {
        metric: 'Q1-2023',
        value: 25,
        originalPayload: [2025, 25]
      },
      {
        metric: 'Q1-2024',
        value: 35,
        originalPayload: [2024, 35]
      }
    ]
  }
]

export const stubSingleBarChartDataWithLongText: IStackedChartData<[number, number]> = [
  {
    name: 'Marine Sprite',
    color: colors[0],
    data: [
      {
        metric: '2020-someLongText',
        value: 44,
        originalPayload: [2020, 44]
      },
      {
        metric: '2021-someLongText',
        value: 4,
        originalPayload: [2021, 4]
      },
      {
        metric: '2022-someLongText',
        value: 12,
        originalPayload: [2022, 12]
      },
      {
        metric: '2023-someLongText',
        value: 25,
        originalPayload: [2025, 25]
      },
      {
        metric: '2024-someLongText',
        value: 35,
        originalPayload: [2024, 35]
      }
    ]
  }
]

export const stubMultipleBarChartData = [
  ...stubSingleBarChartData,
  {
    name: 'Striking Calf',
    color: colors[1],
    data: [
      {
        metric: '2020',
        value: 65,
        originalPayload: [2020, 65]
      },
      {
        metric: '2021',
        value: 13,
        originalPayload: [2021, 13]
      },
      {
        metric: '2022',
        value: 34,
        originalPayload: [2022, 34]
      },
      {
        metric: '2023',
        value: 32,
        originalPayload: [2023, 32]
      },
      {
        metric: '2024',
        value: 2,
        originalPayload: [2024, 2]
      }
    ]
  }
]

export const stubPreviousBarChartData = [
  {
    name: 'Marine Sprite',
    data: [
      {
        metric: '2020',
        value: 65,
        originalPayload: [2020, 65]
      },
      {
        metric: '2021',
        value: 13,
        originalPayload: [2021, 13]
      },
      {
        metric: '2022',
        value: 34,
        originalPayload: [2022, 34]
      },
      {
        metric: '2023',
        value: 32,
        originalPayload: [2023, 32]
      },
      {
        metric: '2024',
        value: 2,
        originalPayload: [2024, 2]
      }
    ],
    group: 'current',
    color: 'rgba(66, 111, 236, 1)'
  },
  {
    name: 'Striking Calf',
    data: [
      {
        metric: '2020',
        value: 55,
        originalPayload: [2020, 65]
      },
      {
        metric: '2021',
        value: 3,
        originalPayload: [2021, 13]
      },
      {
        metric: '2022',
        value: 24,
        originalPayload: [2022, 34]
      },
      {
        metric: '2023',
        value: 22,
        originalPayload: [2023, 32]
      },
      {
        metric: '2024',
        value: 12,
        originalPayload: [2024, 2]
      }
    ],
    color: 'rgba(66, 111, 236, 0.5)',
    group: 'previous'
  }
]

export const stubMultipleDecimalsBarChartData = [
  {
    name: 'Marine Sprite',
    color: colors[0],
    data: [
      {
        metric: '2020',
        value: 44.3453,
        originalPayload: [2020, 44.3453]
      },
      {
        metric: '2021',
        value: 4.3453,
        originalPayload: [2021, 4.3453]
      },
      {
        metric: '2022',
        value: 12.8678,
        originalPayload: [2022, 12.8678]
      },
      {
        metric: '2023',
        value: 25.54634,
        originalPayload: [2025, 25.54634]
      },
      {
        metric: '2024',
        value: 35.7978,
        originalPayload: [2024, 35.7978]
      }
    ]
  },
  {
    name: 'Striking Calf',
    color: colors[1],
    data: [
      {
        metric: '2020',
        value: 65.7897,
        originalPayload: [2020, 65.7897]
      },
      {
        metric: '2021',
        value: 13.6767,
        originalPayload: [2021, 13.6767]
      },
      {
        metric: '2022',
        value: 34.989,
        originalPayload: [2022, 34.989]
      },
      {
        metric: '2023',
        value: 32.90789,
        originalPayload: [2023, 32.90789]
      },
      {
        metric: '2024',
        value: 2.6758,
        originalPayload: [2024, 2.6758]
      }
    ]
  }
]

export const stubMultipleColorInChartData = [
  ...stubSingleBarChartData,
  {
    name: 'Striking Calf',
    color: 'red',
    data: [
      {
        metric: '2020',
        value: 65,
        originalPayload: [2020, 65]
      },
      {
        metric: '2021',
        value: 13,
        originalPayload: [2021, 13]
      },
      {
        metric: '2022',
        value: 34,
        originalPayload: [2022, 34]
      },
      {
        metric: '2023',
        value: 32,
        originalPayload: [2023, 32]
      },
      {
        metric: '2024',
        value: 2,
        originalPayload: [2024, 2]
      }
    ]
  }
]
