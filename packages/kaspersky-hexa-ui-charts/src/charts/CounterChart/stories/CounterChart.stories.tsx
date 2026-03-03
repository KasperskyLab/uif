import { StoryObj } from '@storybook/react'
import React from 'react'

import { CounterChart } from '..'

const meta = {
  title: 'Charts/Counter',
  component: CounterChart,
  args: {
    data: {
      value: 4412
    }
  }
}

export default meta

type Story = StoryObj<typeof meta>;

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
