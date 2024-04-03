import React, { FC } from 'react'
import { DayCell, HeaderContainer } from '../weeklyScheduleCss'
import { Text } from '@src/typography/text'
import { ScheduleHeaderProps } from '@src/weekly-schedule/types'
import { weekDays } from '@src/weekly-schedule/helpers'

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
