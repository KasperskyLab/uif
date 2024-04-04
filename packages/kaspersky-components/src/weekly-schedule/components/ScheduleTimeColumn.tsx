import React, { FC } from 'react'
import { TimeCell, TimeContainer } from '@src/weekly-schedule/weeklyScheduleCss'
import { Text } from '@src/typography/text'

export const ScheduleTimeColumn: FC = () => {
  const timeTitle = Array.from({ length: 25 }, (_, i) => {
    if (i === 24) { return '00:00' }
    return `${i.toString().padStart(2, '0')}:00`
  })

  return (<TimeContainer>
    {
      timeTitle.map((time, index) => {
        return <TimeCell key={index} >
          <Text type="BTR5" themedColor="secondary2-solid">
            {time}
          </Text>
        </TimeCell>
      })
    }
  </TimeContainer>)
}
