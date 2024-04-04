import React from 'react'
import { Locale } from '@src/locale'
import { Radio } from '@src/radio'
import { SelectorWrapper } from './SelectorWrapper'
import { Text } from '@src/typography'

export interface GroupingSelectorProps {
  groupBy: any,
  setGroupBy: (value: string) => void,
  options: any[]
}

export const GroupingSelector = ({ groupBy, setGroupBy, options }: GroupingSelectorProps) => {
  return (
    <SelectorWrapper>
      <Radio
        vertical
        className="grouping-item"
        options={[{ label: <Text type='BTM3'><Locale localizationKey='table.columnsSettings.noGrouping' /></Text>, value: '' }, ...options]}
        onChange={(e) => {
          setGroupBy(e.target.value)
        }}
        value={groupBy}
      />
    </SelectorWrapper>
  )
}
