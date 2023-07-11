import React from 'react'
import { Locale } from '../../../locale'
import { Radio } from '../../../radio'
import { SelectorWrapper } from './SelectorWrapper'
import { Text } from '../../../typography'

export interface GroupingSelectorProps {
  groupBy: any,
  setGroupBy: (value: string) => void,
  options: any[],
  onSave: (value: string) => void,
  onClose: () => void
}

export const GroupingSelector = ({ groupBy, setGroupBy, options, onSave, onClose }: GroupingSelectorProps) => {
  return (
    <SelectorWrapper
      onSave={onSave}
      onClose={onClose}
    >
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
