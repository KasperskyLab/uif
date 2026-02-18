import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React from 'react'
import styled from 'styled-components'

import MetaData from './__meta__/meta.json'
import { WeeklyScheduleProps } from './types'
import { WeeklySchedule } from './WeeklySchedule'

const initialSchedule = {
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: []
}

const initialScheduleWithSelected = {
  monday: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  tuesday: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  wednesday: [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  thursday: [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  friday: [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  saturday: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  sunday: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
}

const week = {
  monday: 'Пн',
  tuesday: 'Вт',
  wednesday: 'Ср',
  thursday: 'Чт',
  friday: 'Пт',
  saturday: 'Сб',
  sunday: 'Вс'
}

const legend = {
  selected: 'Разрешено',
  notSelected: 'Запрещено'
}
export default {
  title: 'Hexa UI Components/WeeklySchedule',
  component: WeeklySchedule,
  parameters: {
    badges: [badges.stable, badges.missingDesign],
    docs: {
      page: withMeta(MetaData)
    }
  },
  args: {
    initialState: initialSchedule,
    legend: legend,
    daysOfWeek: week,
    testId: 'weekly-schedule-test-id'
  },
  decorators: [
    (Story, context) => (
      <Wrapper>
        <Story {...context} />
      </Wrapper>
    )
  ]
} as Meta

type Story = StoryObj<WeeklyScheduleProps>

const Wrapper = styled.div`
  display: inline-block;
  text-align: center;
  width: 420px;
  height: 350px;
  margin: 4px 4px 8px 4px;
`

export const Basic: Story = {
  render: ({
    ...args
  }: WeeklyScheduleProps) => (
    <WeeklySchedule
      {...args}
    />
  )
}

export const WithInitialSelected: Story = {
  args: {
    initialState: initialScheduleWithSelected
  }
}
