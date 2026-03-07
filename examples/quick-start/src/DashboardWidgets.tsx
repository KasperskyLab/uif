import styled from 'styled-components'
import { Space } from '@kaspersky/hexa-ui'
import { SummaryWidget, Speedometer100Chart, LegendItemType, TLegendItem } from '@kaspersky/hexa-ui-charts'

const WidgetsRow = styled(Space)`
  width: 100%;
  align-items: flex-start;
`

const summaryLegend: TLegendItem[] = [
  { kind: LegendItemType.Row, title: 'Category A', color: '#1FABD6', value: 44 },
  { kind: LegendItemType.Row, title: 'Category B', color: '#86C16A', value: 55 },
  { kind: LegendItemType.Row, title: 'Category C', color: '#825FDE', value: 13 }
]

const summaryPieData = [
  { metric: 'A', value: 44, originalPayload: ['A', 44] },
  { metric: 'B', value: 55, originalPayload: ['B', 55] },
  { metric: 'C', value: 13, originalPayload: ['C', 13] }
]

const summaryLineData = [
  {
    name: 'Series',
    data: [
      { value: 450, metric: 10 },
      { value: 520, metric: 20 },
      { value: 380, metric: 30 },
      { value: 240, metric: 40 },
      { value: 330, metric: 50 }
    ]
  }
]

export const DashboardWidgets = () => (
  <WidgetsRow direction="horizontal" size={24} wrap="wrap">
    <SummaryWidget
      titlePie="Protection status"
      titleLine="Threats last 7 days"
      dataPie={summaryPieData}
      dataLine={summaryLineData}
      legend={summaryLegend}
    />
    <div style={{ width: 220, height: 220 }}>
      <Speedometer100Chart
        value={65}
        minValue={0}
        maxValue={100}
        width={220}
        height={220}
        labelDescription="Score"
        segments={[0, 30, 70, 100]}
      />
    </div>
  </WidgetsRow>
)
