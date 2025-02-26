import { Text } from '@src/typography'
import React, { FC } from 'react'

import { weekDays } from '../helpers'
import { ScheduleHeaderProps } from '../types'
import { DayCell, HeaderContainer } from '../weeklyScheduleCss'

export const ScheduleHeader: FC<ScheduleHeaderProps> = ({ daysOfWeek }: ScheduleHeaderProps) => {
  return (<HeaderContainer>
    {
      weekDays.map((day, index) => {
        return <DayCell key={index} >
          <Text type="BTR3" themedColor="primary">
            {daysOfWeek[day]}
          </Text>
        </DayCell>
      })
    }
  </HeaderContainer>)
}
