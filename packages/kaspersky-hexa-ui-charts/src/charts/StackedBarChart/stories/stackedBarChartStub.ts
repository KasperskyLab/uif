export const colors = [
  'var(--chart--base--series--purple--primary--500)',
  'var(--chart--base--series--marina--primary--500)',
  'var(--chart--base--series--orange--primary--300)',
  'var(--chart--base--series--grass--primary--500)',
  'var(--chart--base--series--violet--primary--500)'
]
export const singleStackedBarChartData = [
  {
    name: 'Marine Sprite',
    title: 'Tooltip Marine Sprite',
    color: colors[0],
    data: [
      {
        metric: 'first',
        value: 65,
        originalPayload: 'first-65'
      },
      {
        metric: 'second',
        value: 13,
        originalPayload: 'second-13'
      },
      {
        metric: 'third',
        value: 34,
        originalPayload: 'third-34'
      },
      {
        metric: 'four',
        value: 32,
        originalPayload: 'four-32'
      },
      {
        metric: 'five',
        value: 2,
        originalPayload: 'five-2'
      }
    ]
  }
]

export const multipleStackedBarChartData = [
  ...singleStackedBarChartData,
  {
    name: 'Striking Calf',
    title: 'Title Striking Calf',
    color: colors[1],
    data: [
      {
        metric: 'first',
        value: 43,
        originalPayload: 'first-65'
      },
      {
        metric: 'second',
        value: 13,
        originalPayload: 'second-13'
      },
      {
        metric: 'third',
        value: 34,
        originalPayload: 'third-34'
      },
      {
        metric: 'four',
        value: 32,
        originalPayload: 'four-32'
      },
      {
        metric: 'five',
        value: 2,
        originalPayload: 'five-2'
      }
    ]
  },
  {
    name: 'Tank Picture',
    color: colors[2],
    data: [
      {
        metric: 'first',
        value: 15,
        originalPayload: 'first-43'
      },
      {
        metric: 'second',
        value: 21,
        originalPayload: 'second-21'
      },
      {
        metric: 'third',
        value: 34,
        originalPayload: 'third-34'
      },
      {
        metric: 'four',
        value: 76,
        originalPayload: 'four-76'
      },
      {
        metric: 'five',
        value: 21,
        originalPayload: 'five-21'
      }
    ]
  },
  {
    name: 'Bucket Slope',
    color: colors[3],
    data: [
      {
        metric: 'first',
        value: 23,
        originalPayload: 'first-12'
      },
      {
        metric: 'second',
        value: 42,
        originalPayload: 'second-42'
      },
      {
        metric: 'third',
        value: 13,
        originalPayload: 'third-13'
      },
      {
        metric: 'four',
        value: 3,
        originalPayload: 'four-3'
      },
      {
        metric: 'five',
        value: 8,
        originalPayload: 'five-8'
      }
    ]
  },
  {
    name: 'Reborn Kid',
    color: colors[4],
    data: [
      {
        metric: 'first',
        value: 2,
        originalPayload: 'first-6'
      },
      {
        metric: 'second',
        value: 21,
        originalPayload: 'second-21'
      },
      {
        metric: 'third',
        value: 9,
        originalPayload: 'third-9'
      },
      {
        metric: 'four',
        value: 15,
        originalPayload: 'four-15'
      },
      {
        metric: 'five',
        value: 5,
        originalPayload: 'five-5'
      }
    ]
  }
]

export const multipleCornerRadiusStackedBarChartData = [
  {
    name: 'Striking Calf',
    title: 'Title Striking Calf',
    color: colors[1],
    data: [
      {
        metric: 'first',
        value: 30,
        originalPayload: 'first-65'
      },
      {
        metric: 'second',
        value: 30,
        originalPayload: 'second-13'
      },
      {
        metric: 'third',
        value: 30,
        originalPayload: 'third-34'
      },
      {
        metric: 'four',
        value: 30,
        originalPayload: 'four-32'
      },
      {
        metric: 'five',
        value: 0.1,
        originalPayload: 'five-2'
      }
    ]
  },
  {
    name: 'Tank Picture',
    color: colors[2],
    data: [
      {
        metric: 'first',
        value: 1,
        originalPayload: 'first-43'
      },
      {
        metric: 'second',
        value: 0.5,
        originalPayload: 'second-21'
      },
      {
        metric: 'third',
        value: 0.2,
        originalPayload: 'third-34'
      },
      {
        metric: 'four',
        value: 0.1,
        originalPayload: 'four-76'
      },
      {
        metric: 'five',
        value: 0.1,
        originalPayload: 'five-21'
      }
    ]
  },
  {
    name: 'Bucket Slope',
    color: colors[3],
    data: [
      {
        metric: 'first',
        value: 1,
        originalPayload: 'first-12'
      },
      {
        metric: 'second',
        value: 0.5,
        originalPayload: 'second-42'
      },
      {
        metric: 'third',
        value: 0.2,
        originalPayload: 'third-13'
      },
      {
        metric: 'four',
        value: 0.1,
        originalPayload: 'four-3'
      },
      {
        metric: 'five',
        value: 0.1,
        originalPayload: 'five-8'
      }
    ]
  },
  {
    name: 'Reborn Kid',
    color: colors[4],
    data: [
      {
        metric: 'first',
        value: 1,
        originalPayload: 'first-6'
      },
      {
        metric: 'second',
        value: 0.5,
        originalPayload: 'second-21'
      },
      {
        metric: 'third',
        value: 0.2,
        originalPayload: 'third-9'
      },
      {
        metric: 'four',
        value: 0.1,
        originalPayload: 'four-15'
      },
      {
        metric: 'five',
        value: 0.1,
        originalPayload: 'five-5'
      }
    ]
  }
]

export const multipleStackedBarChartDataWithLongText = [
  {
    name: 'Marine Sprite',
    color: colors[0],
    data: [
      {
        metric: 'FIRST-SOMELONGLONGLONGLONGTEXT',
        value: 65,
        originalPayload: 'first-65'
      },
      {
        metric: '2',
        value: 13,
        originalPayload: 'second-13'
      },
      {
        metric: 'THIRD-SOMELONGLONGLONGLONGTEXT',
        value: 34,
        originalPayload: 'third-34'
      },
      {
        metric: 'four',
        value: 32,
        originalPayload: 'four-32'
      },
      {
        metric: 'FIVE-SOMELONGLONGLONGLONGTEXT',
        value: 2,
        originalPayload: 'five-2'
      }
    ]
  },
  {
    name: 'Striking Calf',
    color: colors[1],
    data: [
      {
        metric: 'FIRST-SOMELONGLONGLONGLONGTEXT',
        value: 65,
        originalPayload: 'first-65'
      },
      {
        metric: '2',
        value: 13,
        originalPayload: 'second-13'
      },
      {
        metric: 'THIRD-SOMELONGLONGLONGLONGTEXT',
        value: 34,
        originalPayload: 'third-34'
      },
      {
        metric: 'four',
        value: 32,
        originalPayload: 'four-32'
      },
      {
        metric: 'FIVE-SOMELONGLONGLONGLONGTEXT',
        value: 2,
        originalPayload: 'five-2'
      }
    ]
  }
]

export const multipleStackedBarChartDataWithShortText = [
  {
    name: 'Marine Sprite',
    color: colors[0],
    data: [
      {
        metric: '1',
        value: 65,
        originalPayload: 'first-65'
      },
      {
        metric: '2',
        value: 13,
        originalPayload: 'second-13'
      },
      {
        metric: '3',
        value: 34,
        originalPayload: 'third-34'
      },
      {
        metric: '4',
        value: 32,
        originalPayload: 'four-32'
      },
      {
        metric: '5',
        value: 2,
        originalPayload: 'five-2'
      }
    ]
  },
  {
    name: 'Striking Calf',
    color: colors[1],
    data: [
      {
        metric: '1',
        value: 65,
        originalPayload: 'first-65'
      },
      {
        metric: '2',
        value: 13,
        originalPayload: 'second-13'
      },
      {
        metric: '3',
        value: 34,
        originalPayload: 'third-34'
      },
      {
        metric: '4',
        value: 32,
        originalPayload: 'four-32'
      },
      {
        metric: '5',
        value: 2,
        originalPayload: 'five-2'
      }
    ]
  }
]

export const multipleStackedColorInDataBarChartData = [
  ...multipleStackedBarChartData,
  {
    name: 'Reborn Kid',
    color: '#ff0000',
    data: [
      {
        metric: 'first',
        value: 6,
        originalPayload: 'first-6'
      },
      {
        metric: 'second',
        value: 21,
        originalPayload: 'second-21'
      },
      {
        metric: 'third',
        value: 9,
        originalPayload: 'third-9'
      },
      {
        metric: 'four',
        value: 15,
        originalPayload: 'four-15'
      },
      {
        metric: 'five',
        value: 5,
        originalPayload: 'five-5'
      }
    ]
  }
]

export const currentPreviousStackedBarChartData = [
  {
    name: 'Tank Picture',
    group: 'current',
    color: colors[0],
    data: [
      {
        metric: 'first',
        value: 43,
        originalPayload: 'first-43'
      },
      {
        metric: 'second',
        value: 21,
        originalPayload: 'second-21'
      },
      {
        metric: 'third',
        value: 34,
        originalPayload: 'third-34'
      },
      {
        metric: 'four',
        value: 76,
        originalPayload: 'four-76'
      },
      {
        metric: 'five',
        value: 21,
        originalPayload: 'five-21'
      }
    ]
  },
  {
    name: 'Bucket Slope',
    group: 'current',
    color: colors[1],
    data: [
      {
        metric: 'first',
        value: 12,
        originalPayload: 'first-12'
      },
      {
        metric: 'second',
        value: 42,
        originalPayload: 'second-42'
      },
      {
        metric: 'third',
        value: 13,
        originalPayload: 'third-13'
      },
      {
        metric: 'four',
        value: 3,
        originalPayload: 'four-3'
      },
      {
        metric: 'five',
        value: 8,
        originalPayload: 'five-8'
      }
    ]
  },
  {
    name: 'Reborn Kid',
    group: 'current',
    color: colors[2],
    data: [
      {
        metric: 'first',
        value: 6,
        originalPayload: 'first-6'
      },
      {
        metric: 'second',
        value: 21,
        originalPayload: 'second-21'
      },
      {
        metric: 'third',
        value: 9,
        originalPayload: 'third-9'
      },
      {
        metric: 'four',
        value: 15,
        originalPayload: 'four-15'
      },
      {
        metric: 'five',
        value: 5,
        originalPayload: 'five-5'
      }
    ]
  },
  {
    name: 'Reborn Kid 2',
    group: 'current',
    color: colors[3],
    data: [
      {
        metric: 'first',
        value: 6,
        originalPayload: 'first-6'
      },
      {
        metric: 'second',
        value: 21,
        originalPayload: 'second-21'
      },
      {
        metric: 'third',
        value: 9,
        originalPayload: 'third-9'
      },
      {
        metric: 'four',
        value: 15,
        originalPayload: 'four-15'
      },
      {
        metric: 'five',
        value: 5,
        originalPayload: 'five-5'
      }
    ]
  },
  {
    name: 'Tank Picture previous',
    color: colors[0],
    opacity: 0.3,
    group: 'previous',
    data: [
      {
        metric: 'first',
        value: 40,
        originalPayload: 'first-43'
      },
      {
        metric: 'second',
        value: 31,
        originalPayload: 'second-21'
      },
      {
        metric: 'third',
        value: 14,
        originalPayload: 'third-34'
      },
      {
        metric: 'four',
        value: 46,
        originalPayload: 'four-76'
      },
      {
        metric: 'five',
        value: 61,
        originalPayload: 'five-21'
      }
    ]
  },
  {
    name: 'Bucket Slope previous',
    color: colors[1],
    opacity: 0.3,
    group: 'previous',
    data: [
      {
        metric: 'first',
        value: 22,
        originalPayload: 'first-12'
      },
      {
        metric: 'second',
        value: 62,
        originalPayload: 'second-42'
      },
      {
        metric: 'third',
        value: 23,
        originalPayload: 'third-13'
      },
      {
        metric: 'four',
        value: 6,
        originalPayload: 'four-3'
      },
      {
        metric: 'five',
        value: 3,
        originalPayload: 'five-8'
      }
    ]
  },
  {
    name: 'Reborn Kid previous',
    color: colors[2],
    opacity: 0.3,
    group: 'previous',
    data: [
      {
        metric: 'first',
        value: 60,
        originalPayload: 'first-6'
      },
      {
        metric: 'second',
        value: 11,
        originalPayload: 'second-21'
      },
      {
        metric: 'third',
        value: 19,
        originalPayload: 'third-9'
      },
      {
        metric: 'four',
        value: 55,
        originalPayload: 'four-15'
      },
      {
        metric: 'five',
        value: 45,
        originalPayload: 'five-5'
      }
    ]
  },
  {
    name: 'Reborn Kid previous 2',
    color: colors[3],
    opacity: 0.3,
    group: 'previous',
    data: [
      {
        metric: 'first',
        value: 60,
        originalPayload: 'first-6'
      },
      {
        metric: 'second',
        value: 11,
        originalPayload: 'second-21'
      },
      {
        metric: 'third',
        value: 19,
        originalPayload: 'third-9'
      },
      {
        metric: 'four',
        value: 55,
        originalPayload: 'four-15'
      },
      {
        metric: 'five',
        value: 45,
        originalPayload: 'five-5'
      }
    ]
  }
]

export const yLess1StackedBarChartData = [
  {
    name: 'Marine Sprite',
    data: [
      {
        metric: 'five',
        value: 1,
        originalPayload: 'five-2'
      }
    ]
  }
]
