export const pieChartStubExplicitColor = [
  {
    metric: 'one',
    value: 44,
    originalPayload: ['first', 44],
    color: 'var(--color--purple500)'
  },
  {
    metric: 'two',
    value: 55,
    originalPayload: ['second', 55],
    color: 'var(--color--violet500)'
  },
  {
    metric: 'three',
    value: 13,
    originalPayload: ['third', 13],
    color: 'var(--color--marina500)'
  },
  {
    metric: 'four',
    value: 33,
    originalPayload: ['fourth', 33],
    color: 'var(--color--emerald500)'
  }
]

export const pieChartStubImplicitColor = pieChartStubExplicitColor.map(d => {
  return {
    ...d,
    color: undefined
  }
})

export const pieChartStubAllColors = (new Array(20)).fill(5).map((value, index) => {
  return {
    metric: `metric_${index}`,
    value,
    originalPayload: value
  }
})
