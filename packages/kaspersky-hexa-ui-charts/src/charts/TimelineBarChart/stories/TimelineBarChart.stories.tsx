import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'
import hoursToMilliseconds from 'date-fns/hoursToMilliseconds'
import React from 'react'
import { ChartLocale } from 'src/types/locales'
import { action } from 'storybook/actions'

import { generateTimelineData } from '../../../../.storybook/data'
import { DEFAULT_CHART_HEIGHT, DEFAULT_CHART_WIDTH } from '../../../constants'
import { LocalizationProvider } from '../../../l10n/LocalizationProvider'
import { BAR_CHART_SIZE_CONFIG } from '../../BarChart/constants'
import MetaData from '../__meta__/meta.json'
import { TimelineBarChart, TimelineBarChartProps } from '../components/TimelineBarChart'

import {
  groupStackedBarChartData,
  oneWeekPeriodData,
  oneWeekPeriodDomain,
  oneWeekPeriodStackedData,
  singlePointData,
  singlePointDomain,
  singleStackedBarChartData,
  singleStackedBarChartDataOne,
  singleStackedBarChartDomain
} from './timelineBarChartStub'

const chartSizes = Object.keys(BAR_CHART_SIZE_CONFIG) as Array<keyof typeof BAR_CHART_SIZE_CONFIG>

interface TimelineBarChartPropsLocale extends TimelineBarChartProps {
  locale: ChartLocale
}

const meta: Meta<TimelineBarChartPropsLocale> = {
  title: 'Charts/TimelineBarChart',
  component: TimelineBarChart,
  decorators: [
    (Story, { args }) => (
      <div style={{ width: args.width, height: args.height }}>
        <LocalizationProvider locale={args.locale}>
          <Story {...args} />
        </LocalizationProvider>
      </div>
    )
  ],
  args: {
    width: DEFAULT_CHART_WIDTH,
    height: DEFAULT_CHART_HEIGHT,
    horizontal: false,
    locale: 'en',
    yScale: 'linear',
    padding: { bottom: 100 },
    timeScaleInterval: hoursToMilliseconds(24),
    showTooltip: true,
    otherLabel: 'someOtherLabel',
    onClickData: action('onClickData'),
    onHoverData: action('onHoverData'),
    totalLabel: 'Total',
    showTotal: true,
    xTickHide: false,
    yTickHide: false
  },
  argTypes: {
    data: {
      description: 'Данные графика: массив серий с полями name/group/color и data[{ metric, value }].',
      table: { category: 'Data' }
    },
    domain: {
      description: 'Явный диапазон оси X (времени): [startDate, endDate].',
      table: { category: 'Data' }
    },
    timeScaleInterval: {
      description: 'Шаг времени (мс) для вычисления ширины бара.',
      table: { category: 'Data' }
    },
    isStack100: {
      description:
        'Режим 100%, каждая колонка разбивается на проценты, значения показываются как вклад серии в общую сумму',
      table: { category: 'Data' },
      type: 'boolean'
    },
    width: {
      control: { type: 'range', min: 100, max: 1400, step: 10 },
      description: 'Ширина графика.',
      table: { category: 'Layout' }
    },
    height: {
      control: { type: 'range', min: 100, max: 1000, step: 10 },
      description: 'Высота графика.',
      table: { category: 'Layout' }
    },
    size: {
      control: 'select',
      options: chartSizes,
      description:
        'Фиксированный размер скруглений TimelineBar. Ширина бара остаётся адаптивной; если size не задан, radius выбирается по фактической ширине бара.',
      table: { category: 'Layout' }
    },
    padding: {
      description: 'Внутренние отступы графика.',
      table: { category: 'Layout' }
    },
    horizontal: {
      description: 'Горизонтальная ориентация графика.',
      table: { category: 'Layout' }
    },
    standalone: {
      description:
        'True: рендерит только содержимое графика для встраивания в уже существующий svg, false: рендерит самостоятельный svg',
      table: { category: 'Layout' },
      type: 'boolean'
    },
    yScale: {
      control: 'radio',
      options: ['linear', 'sqrt', 'log'],
      description: 'Тип шкалы Y',
      table: { category: 'Scale' },
      type: 'string'
    },
    yMin: {
      description: 'Нижняя граница оси Y.',
      table: { category: 'Scale' },
      type: 'number'
    },
    yMax: {
      description: 'Верхняя граница оси Y.',
      table: { category: 'Scale' },
      type: 'number'
    },
    showTooltip: {
      description: 'Включить tooltip при hover по бару.',
      table: { category: 'Tooltip' }
    },
    tooltipDateFormat: {
      description: 'Кастомный форматтер даты в tooltip.',
      table: { category: 'Tooltip' }
    },
    showTotal: {
      description: 'Показать суммарное значение в tooltip.',
      table: { category: 'Tooltip' }
    },
    totalLabel: {
      description: 'Подпись строки суммы в tooltip.',
      table: { category: 'Tooltip' }
    },
    maxTooltipItems: {
      description: 'Максимум элементов в tooltip до агрегации в other.',
      table: { category: 'Tooltip' },
      type: 'number'
    },
    otherLabel: {
      description: 'Подпись для агрегированного “прочее” в tooltip.',
      table: { category: 'Tooltip' }
    },
    xTickFormat: {
      description: 'Кастомный форматтер подписей оси X.',
      table: { category: 'Axis' }
    },
    yTickFormat: {
      description: 'Кастомный форматтер подписей оси Y.',
      table: { category: 'Axis' }
    },
    xTickHide: {
      description: 'Скрыть подписи оси X.',
      table: { category: 'Axis' }
    },
    yTickHide: {
      description: 'Скрыть подписи оси Y.',
      table: { category: 'Axis' }
    },
    minTickLabelXLength: {
      description: 'Ограничение длины подписи тика оси X.',
      table: { category: 'Axis' },
      type: 'number'
    },
    minTickLabelYLength: {
      description: 'Ограничение длины подписи тика оси Y.',
      table: { category: 'Axis' },
      type: 'number'
    },
    onClickData: {
      description: 'Событие клика по бару.',
      table: { category: 'Events' }
    },
    onHoverData: {
      description: 'Событие наведения на бар.',
      table: { category: 'Events' }
    },
    onMoveData: {
      description: 'Событие движения мыши по бару.',
      table: { category: 'Events' }
    },
    onLeaveData: {
      description: 'Событие ухода курсора с бара.',
      table: { category: 'Events' }
    },
    locale: {
      control: 'radio',
      options: ['en', 'ru'],
      description: 'Локаль для автоформатирования дат.',
      table: { category: 'Localization' }
    }
  },
  parameters: {
    docs: {
      page: withMeta(MetaData)
    }
  }
}

export default meta

type Story = StoryObj<TimelineBarChartPropsLocale>

export const Default: Story = {
  args: {
    data: singleStackedBarChartData,
    domain: singleStackedBarChartDomain
  }
}

const generatedData = generateTimelineData(15)

export const DataBigger10: Story = {
  args: {
    data: generatedData
  }
}

export const WithoitTooltip: Story = {
  args: {
    showTooltip: false,
    data: singleStackedBarChartData
  }
}

export const MinMaxYDomain: Story = {
  args: {
    data: singleStackedBarChartDataOne,
    yMin: 2,
    yMax: 10
  }
}

export const WidthX2: Story = {
  args: {
    width: DEFAULT_CHART_WIDTH * 2,
    data: singleStackedBarChartDataOne
  }
}

export const WidthX3: Story = {
  args: {
    width: DEFAULT_CHART_WIDTH * 3,
    data: singleStackedBarChartData
  }
}

export const RadiusBreakpoints: Story = {
  args: {
    data: oneWeekPeriodData,
    domain: oneWeekPeriodDomain
  },
  render: (args) => (
    <div style={{ display: 'grid', gap: 24 }}>
      {[DEFAULT_CHART_WIDTH * 3, DEFAULT_CHART_WIDTH * 2, DEFAULT_CHART_WIDTH].map((width) => (
        <div key={width} style={{ width, height: args.height }}>
          <TimelineBarChart {...args} width={width} />
        </div>
      ))}
    </div>
  )
}

export const OneWeekWithTooltip: Story = {
  args: {
    width: DEFAULT_CHART_WIDTH * 2,
    data: oneWeekPeriodData,
    domain: oneWeekPeriodDomain
  }
}

export const HorizontalOneWeekWithTooltip: Story = {
  args: {
    width: DEFAULT_CHART_WIDTH * 2,
    horizontal: true,
    data: oneWeekPeriodData,
    domain: oneWeekPeriodDomain
  }
}

export const WithTooltipDateFormat: Story = {
  args: {
    width: DEFAULT_CHART_WIDTH * 3,
    data: oneWeekPeriodData,
    domain: oneWeekPeriodDomain,
    tooltipDateFormat: (date: number | Date) => {
      return date.toLocaleString() + 'TZ'
    },
    xTickFormat: (arg1, arg2, arg3, supposedFormat) => {
      return String(supposedFormat)
    }
  }
}

export const StackedOneWeekWithTooltip: Story = {
  args: {
    data: oneWeekPeriodStackedData
  }
}

export const Horizontal = {
  args: {
    horizontal: true,
    data: singleStackedBarChartData
  }
}

export const i18nRu: Story = {
  args: {
    locale: 'ru',
    data: singleStackedBarChartData
  }
}

export const Group: Story = {
  args: {
    data: groupStackedBarChartData
  }
}

export const xTickHide: Story = {
  args: {
    data: singleStackedBarChartData,
    xTickHide: true
  }
}

export const yTickHide: Story = {
  args: {
    data: singleStackedBarChartData,
    yTickHide: true
  }
}

export const Stack100: Story = {
  name: 'Stack 100% mode',
  args: {
    isStack100: true,
    data: groupStackedBarChartData
  }
}

export const ScaleLog: Story = {
  args: {
    yScale: 'log',
    data: groupStackedBarChartData
  }
}

export const SinglePointNarrowDomain: Story = {
  args: {
    data: singlePointData,
    domain: singlePointDomain,
    timeScaleInterval: hoursToMilliseconds(1)
  }
}
