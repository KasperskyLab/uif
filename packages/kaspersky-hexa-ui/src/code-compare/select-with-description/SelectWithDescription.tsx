import { HelpMessage } from '@src/help-message'
import { Select, SelectProps } from '@src/select'
import React, { FC } from 'react'

import { IVersionOption } from '../types'

export const SelectWithDescription: FC<SelectProps<IVersionOption>> = ({ onChange, options, ...props }) => {
  const handleChange: SelectProps['onChange'] = (value, option) => {
    const selectedValue = options?.find((option) => option.value === value)
    onChange?.(selectedValue ?? value, option)
  }

  return (
    <Select
      {...props}
      onChange={handleChange}
    >
      {options?.map((option) => (
        <Select.Option value={option.value} key={option.value}>
          <div>
            {option.label}
            <div>
              <HelpMessage text={option.description} />
            </div>
          </div>
        </Select.Option>
      ))}
    </Select>
  )
}
