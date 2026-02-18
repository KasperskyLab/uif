import { Locale } from '@src/locale'
import { Radio, RadioOption } from '@src/radio'
import { Text } from '@src/typography'
import React, { useMemo } from 'react'

import { SelectorWrapper } from './SelectorWrapper'

export interface GroupingSelectorProps {
  groupBy: string,
  setGroupBy: (value: string) => void,
  options: RadioOption[],
  searchValue?: string
}

export const GroupingSelector = ({
  groupBy,
  setGroupBy,
  options,
  searchValue
}: GroupingSelectorProps) => {
  const filteredOptions = useMemo(() => {
    if (!searchValue) return options

    return options.filter((group) =>
      group.value.toLowerCase().includes(searchValue.toLowerCase())
    )
  }, [options, searchValue])

  return (
    <SelectorWrapper>
      <Radio
        vertical
        className="grouping-item"
        options={[{ label: <Text type="BTM3"><Locale localizationKey="table.columnsSettings.noGrouping" /></Text>, value: '' }, ...filteredOptions]}
        onChange={(e) => {
          setGroupBy(e.target.value)
        }}
        value={groupBy}
      />
    </SelectorWrapper>
  )
}
