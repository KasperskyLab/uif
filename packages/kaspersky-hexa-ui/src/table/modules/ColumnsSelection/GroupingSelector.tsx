import { Locale } from '@src/locale'
import { Radio, RadioOption } from '@src/radio'
import { Text } from '@src/typography'
import React from 'react'

import { SelectorWrapper } from './SelectorWrapper'

export interface GroupingSelectorProps {
  groupBy: string,
  setGroupBy: (value: string) => void,
  options: RadioOption[]
}

export const GroupingSelector = ({ groupBy, setGroupBy, options }: GroupingSelectorProps) => {
  return (
    <SelectorWrapper>
      <Radio
        vertical
        className="grouping-item"
        options={[{ label: <Text type="BTM3"><Locale localizationKey="table.columnsSettings.noGrouping" /></Text>, value: '' }, ...options]}
        onChange={(e) => {
          setGroupBy(e.target.value)
        }}
        value={groupBy}
      />
    </SelectorWrapper>
  )
}
