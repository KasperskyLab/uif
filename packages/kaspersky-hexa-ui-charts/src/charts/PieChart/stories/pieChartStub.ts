export const pieChartStubExplicitColor = [
  {
    metric: 'one',
    value: 44,
    originalPayload: ['first', '44'] as [string, string],
    color: 'var(--color--purple500)'
  },
  {
    metric: 'two',
    value: 55,
    originalPayload: ['second', '55'] as [string, string],
    color: 'var(--color--violet500)'
  },
  {
    metric: 'three',
    value: 13,
    originalPayload: ['third', '13'] as [string, string],
    color: 'var(--color--marina500)'
  },
  {
    metric: 'four',
    value: 33,
    originalPayload: ['fourth', '33'] as [string, string],
    color: 'var(--color--emerald500)'
  }
]

export const pieChartStubImplicitColor = pieChartStubExplicitColor.map(d => {
  const {color,  ...rest} = d
  return rest
})

export const pieChartStubAllColors = (new Array(20)).fill(5).map((value, index) => {
  return {
    metric: `metric_${index}`,
    value,
    originalPayload: value
  }
})
