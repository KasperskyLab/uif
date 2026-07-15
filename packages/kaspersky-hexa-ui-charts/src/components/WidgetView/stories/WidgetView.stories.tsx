import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { action } from 'storybook/actions'

import { StackedBarChart } from '../../../charts/StackedBarChart'
import { singleStackedBarChartData } from '../../../charts/StackedBarChart/stories/stackedBarChartStub'
import Legend from '../../../widgets/Legend'
import MetaData from '../__meta__/meta.json'
import { WidgetHeader } from '../components/WidgetHeader'
import { LegendPosition } from '../types'
import { WidgetView } from '../WidgetView'

import { widgetViewArgTypes } from './constants'
import { toLegendItemsFromStackedSeries } from './helpers'

const storyContainerStyle: React.CSSProperties = { width: 900, height: 420 }

const DemoChart: React.FC = (props) => <StackedBarChart {...props} data={singleStackedBarChartData} />

const defaultWidgetHeader = (
  <WidgetHeader title="Widget title" description="Optional description for the main chart slot." />
)

const meta = {
  title: 'Widget/WidgetView',
  component: WidgetView,
  decorators: [
    (Story) => (
      <div style={storyContainerStyle}>
        <Story />
      </div>
    )
  ],
  args: {
    state: 'ready',
    invalid: false,
    active: false,
    legendPosition: LegendPosition.RIGHT,
    errorResetKey: 0,
    i18n: {
      empty: {
        noDataTitle: 'No data',
        noDataDescription: 'Please refresh the page',
        emptyLabel: 'No items'
      },
      error: {
        title: 'Error',
        reason: 'Something went wrong'
      }
    },
    children: <DemoChart />
  },
  argTypes: widgetViewArgTypes,
  parameters: {
    docs: {
      page: withMeta(MetaData)
    }
  }
} satisfies Meta<typeof WidgetView>

export default meta

type Story = StoryObj<typeof meta>

const slotStubs = {
  header: <div style={{ padding: 8, border: '1px solid brown' }}>Header slot</div>,
  chartFooter: (
    <div style={{ padding: 8, width: '100%', color: '#6b7684', border: '1px solid green' }}>Chart footer slot</div>
  ),
  legend: (
    <div style={{ width: '100%', height: '100%', padding: 8, color: '#6b7684', border: '1px solid red' }}>Legend slot</div>
  )
}

export const ShowWidgetSlots: Story = {
  args: {
    header: slotStubs.header,
    chartFooter: slotStubs.chartFooter,
    legend: slotStubs.legend
  },
  render: (args) => (
    <WidgetView {...args} state="ready">
      <div style={{ height: '100%', padding: 8, color: '#6b7684', border: '1px solid black' }}>Chart slot</div>
    </WidgetView>
  )
}

export const Ready: Story = {
  render: (args) => {
    const legendItems = toLegendItemsFromStackedSeries(singleStackedBarChartData)

    return (
      <WidgetView
        {...args}
        header={defaultWidgetHeader}
        legend={<Legend items={legendItems} />}
      >
        <DemoChart />
      </WidgetView>
    )
  }
}

export const Loading: Story = {
  args: {
    state: 'loading',
    children: <DemoChart />
  },
  render: (args) => (
    <WidgetView {...args} header={defaultWidgetHeader}>
      {args.children}
    </WidgetView>
  )
}

export const NoData: Story = {
  args: {
    state: 'no-data',
    i18n: {
      empty: {
        noDataTitle: 'No data',
        noDataDescription: 'Refresh the page or change filters'
      }
    }
  },
  render: (args) => <WidgetView {...args} header={defaultWidgetHeader} />
}

export const Empty: Story = {
  args: {
    state: 'empty',
    i18n: { empty: { emptyLabel: 'Nothing to show yet' } }
  },
  render: (args) => <WidgetView {...args} header={defaultWidgetHeader} />
}

export const ExternalError: Story = {
  args: {
    state: 'error',
    i18n: {
      error: {
        title: 'Error',
        reason: 'NetworkError',
        details: '503 Service unavailable'
      }
    }
  },
  render: (args) => <WidgetView {...args} header={defaultWidgetHeader} />
}

export const WithAdditionalCharts: Story = {
  decorators: [
    (Story) => (
      <div style={{ ...storyContainerStyle, height: 620 }}>
        <Story />
      </div>
    )
  ],
  render: (args) => {
    const legendItems = toLegendItemsFromStackedSeries(singleStackedBarChartData)

    return (
      <WidgetView
        {...args}
        state="ready"
        header={<WidgetHeader title="Main chart" size="medium" />}
        legend={<Legend items={legendItems} />}
        elementAfter={{
          state: 'ready',
          header: <WidgetHeader title="Side chart" size="small" />,
          legend: <Legend items={legendItems} />,
          chart: <DemoChart />
        }}
        elementBottom={{
          state: 'ready',
          header: <WidgetHeader title="Bottom chart" description="Independent state from other slots" />,
          i18n: {
            empty: {
              noDataTitle: 'No data (bottom chart)',
              noDataDescription: 'Bottom chart has no data'
            }
          },
          chart: <DemoChart />
        }}
      >
        <DemoChart />
      </WidgetView>
    )
  }
}

const CrashOnRender: React.FC<{ shouldCrash: boolean }> = ({ shouldCrash }) => {
  if (shouldCrash) {
    throw new Error('Intentional render error')
  }

  return <DemoChart />
}

export const RenderErrorAndRecovery: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates render-time error capture via `WidgetErrorBoundary`. Toggle crash/recover and bump `errorResetKey` to reset the boundary after fixing the chart.'
      }
    }
  },
  render: (args) => {
    const [errorResetKey, setErrorResetKey] = useState(0)
    const [shouldCrash, setShouldCrash] = useState(true)
    const legendItems = toLegendItemsFromStackedSeries(singleStackedBarChartData)

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, height: '100%' }}>
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            onClick={() => {
              setShouldCrash(true)
              setErrorResetKey((key) => key + 1)
            }}
            type="button"
          >
            Crash again
          </button>
          <button
            onClick={() => {
              setShouldCrash(false)
              setErrorResetKey((key) => key + 1)
            }}
            type="button"
          >
            Recover
          </button>
        </div>

        <WidgetView
          {...args}
          header={defaultWidgetHeader}
          legend={<Legend items={legendItems} />}
          state="ready"
          errorResetKey={errorResetKey}
          i18n={{
            error: {
              title: 'Render error',
              reason: 'internalError',
              details: 'Chart threw during render. Increase errorResetKey after recovery.'
            }
          }}
        >
          <CrashOnRender shouldCrash={shouldCrash} />
        </WidgetView>
      </div>
    )
  }
}

export const LifecycleCallbacks: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Open the Actions panel: `lifecycle.onMount`, `onReady`, and `onUnmount` fire for the main chart when `lifecycle.enabled` is true.'
      }
    }
  },
  args: {
    lifecycle: {
      enabled: true,
      onMount: action('lifecycle:onMount'),
      onReady: action('lifecycle:onReady'),
      onUnmount: action('lifecycle:onUnmount')
    }
  },
  render: (args) => {
    const legendItems = toLegendItemsFromStackedSeries(singleStackedBarChartData)

    return (
      <WidgetView
        {...args}
        header={defaultWidgetHeader}
        legend={<Legend items={legendItems} />}
        state="ready"
      >
        <DemoChart />
      </WidgetView>
    )
  }
}
