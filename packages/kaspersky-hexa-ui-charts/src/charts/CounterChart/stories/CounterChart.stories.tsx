
import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { CounterChart } from '..'
import { DEFAULT_CHART_HEIGHT, DEFAULT_CHART_WIDTH } from '../../../../src/constants'
import MetaData from '../__meta__/meta.json'
import { COUNTER_CHART_SIZE_CONFIG } from '../constants'

const chartSizes = Object.keys(COUNTER_CHART_SIZE_CONFIG) as Array<keyof typeof COUNTER_CHART_SIZE_CONFIG>

const meta = {
  title: 'Charts/CounterChart',
  component: CounterChart,
  args: {
    data: {
      value: 4412,
      metric: ''
    },
    width: DEFAULT_CHART_WIDTH,
    height: DEFAULT_CHART_HEIGHT
  },
  argTypes: {
    width: { control: { type: 'range', min: 100, max: 1000, step: 10 } },
    height: { control: { type: 'range', min: 100, max: 1000, step: 10 } },
    size: {
      control: 'select',
      options: chartSizes,
      description:
        'Фиксированный размер CounterChart. Если задан, меняет высоту, типографику value/prefix/suffix/description/previousValue и внутренние отступы.',
      table: { category: 'Layout' }
    }
  },
  parameters:{
    docs: {
      page: withMeta(MetaData)
    }
  }
} satisfies Meta<typeof CounterChart>

export default meta

type Story = StoryObj<typeof meta>

export const Sizes: Story = {
  args: {
    data: {
      metric: 'description',
      value: 4412,
      previousValue: 3200
    },
    width: 240
  },
  render: (args) => (
    <div style={{ display: 'grid', gap: 24 }}>
      {chartSizes.map((size) => (
        <div key={size} style={{ width: args.width }}>
          <CounterChart {...args} size={size} />
        </div>
      ))}
    </div>
  )
}

export const WithPreviousValueLessAndBetter: Story = {
  args: {
    data: {
      metric: '',
      value: 1000,
      previousValue: 1400
    },

    biggerBetter: false
  }
}

export const WithPreviousValueLessAndWorse: Story = {
  args: {
    data: {
      metric: '',
      value: 1000,
      previousValue: 1400
    },
    biggerBetter: true
  }
}

export const WithPreviousValueBiggerAndBetter: Story = {
  args: {
    data: {
      metric: '',
      value: 1000,
      previousValue: 400
    },
    biggerBetter: true
  }
}

export const WithPreviousValueBiggerAndWorse: Story = {
  args: {
    data: {
      metric: '',
      value: 1000,
      previousValue: 400
    },
    biggerBetter: false
  }
}

export const WithPreviousValueEqual: Story = {
  args: {
    data: {
      metric: '',
      value: 1000,
      previousValue: 1000
    },
    biggerBetter: false
  }
}

export const HugeNumbersNoExplicitWidth: Story = {
  args: {
    data: {
      metric: '',
      value: 71650726357978,
      previousValue: 98721390582
    },
    biggerBetter: false
  }
}

export const HugeNumbers300: Story = {
  args: {
    data: {
      metric: '',
      value: 71650726357978,
      previousValue: 98721390582
    },
    biggerBetter: false,
    width: 300
  }
}

export const HugeNumbers500: Story = {
  args: {
    data: {
      metric: '',
      value: 71650726357978,
      previousValue: 98721390582
    },
    biggerBetter: false,
    width: 500
  }
}

export const HugeNumbers700: Story = {
  args: {
    data: {
      metric: '',
      value: 71650726357978,
      previousValue: 98721390582
    },
    biggerBetter: false,
    width: 700
  }
}

export const Description: Story = {
  args: {
    data: {
      metric: 'description',
      value: 551,
      previousValue: 442
    },
    biggerBetter: true
  }
}

export const ExplicitColor: Story = {
  args: {
    data: {
      metric: 'description',
      value: 551,
      previousValue: 442
    },
    biggerBetter: true,
    color: 'var(--color-marina300)'
  }
}

export const HugeDescriptionNoExplicitWidth: Story = {
  args: {
    data: {
      metric:
        'Cupidatat occaecat consectetur incididunt commodo excepteur aute adipisicing labore velit mollit. Dolore anim cupidatat laboris officia ea fugiat cillum cillum. Enim adipisicing cupidatat voluptate cupidatat et qui excepteur. Magna labore laboris amet aute sit laboris pariatur aliquip nostrud eu et dolor labore. Tempor nostrud occaecat do commodo incididunt ad enim adipisicing consequat nisi velit do dolor ea. Cupidatat dolore est ea ut esse.',
      value: 551,
      previousValue: 442
    },
    biggerBetter: true
  }
}

export const HugeDescription500: Story = {
  args: {
    data: {
      metric:
        'Cupidatat occaecat consectetur incididunt commodo excepteur aute adipisicing labore velit mollit. Dolore anim cupidatat laboris officia ea fugiat cillum cillum. Enim adipisicing cupidatat voluptate cupidatat et qui excepteur. Magna labore laboris amet aute sit laboris pariatur aliquip nostrud eu et dolor labore. Tempor nostrud occaecat do commodo incididunt ad enim adipisicing consequat nisi velit do dolor ea. Cupidatat dolore est ea ut esse.',
      value: 551,
      previousValue: 442
    },
    biggerBetter: true,
    width: 500
  }
}

export const WithPrefix: Story = {
  args: {
    data: {
      metric: 'description',
      value: 551,
      previousValue: 442
    },
    biggerBetter: true,
    prefix: '$'
  }
}

export const WithSuffix: Story = {
  args: {
    data: {
      metric: 'description',
      value: 551,
      previousValue: 442
    },
    biggerBetter: true,
    suffix: '%'
  }
}

export const WithPrefixAndSuffix: Story = {
  args: {
    data: {
      metric: 'description',
      value: 551,
      previousValue: 442
    },
    biggerBetter: true,
    prefix: '$',
    suffix: '%'
  }
}

export const HugeNumbersWithPrefixAndSuffix: Story = {
  args: {
    data: {
      metric:
        'Cupidatat occaecat consectetur incididunt commodo excepteur aute adipisicing labore velit mollit. Dolore anim cupidatat laboris officia ea fugiat cillum cillum. Enim adipisicing cupidatat voluptate cupidatat et qui excepteur. Magna labore laboris amet aute sit laboris pariatur aliquip nostrud eu et dolor labore. Tempor nostrud occaecat do commodo incididunt ad enim adipisicing consequat nisi velit do dolor ea. Cupidatat dolore est ea ut esse.',
      value: 71650726357978,
      previousValue: 98721390582
    },
    biggerBetter: true,
    prefix: '$',
    suffix: '%'
  }
}
