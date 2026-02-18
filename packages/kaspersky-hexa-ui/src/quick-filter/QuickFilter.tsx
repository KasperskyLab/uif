import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { Calendar, RangePicker } from '@src/datepicker'
import { SegmentedButton } from '@src/segmented-button'
import { Toggle } from '@src/toggle'
import { ToggleButtonGroup } from '@src/toggle-button/ToggleButtonGroup'
import React, { FC, ReactElement } from 'react'

import { StyledField, StyledQuickFilter, StyledSelect, ToggleWrapper } from './quickFilterCss'
import { QuickFilterItem, QuickFilterProps } from './types'

type FieldConfig = {
  control: ReactElement,
  label?: string
}

export const getMappedFieldProps = (filter: QuickFilterItem, disabled?: boolean): FieldConfig => {
  switch (filter.component) {
    case 'select': {
      const { component, label, width, ...props } = filter
      return { control: <StyledSelect $width={width} disabled={disabled} {...props} />, label }
    }
    case 'segmented-button': {
      const { component, label, ...props } = filter
      return { control: <SegmentedButton disabled={disabled} {...props} />, label }
    }
    case 'toggle': {
      const { component, ...props } = filter
      return { control: <ToggleWrapper><Toggle disabled={disabled} {...props} /></ToggleWrapper> }
    }
    case 'toggle-button-group': {
      const { component, label, ...props } = filter
      return { control: <ToggleButtonGroup disabled={disabled} {...props} />, label }
    }
    case 'date-picker': {
      const { component, label, ...props } = filter
      return { control: <Calendar {...props} />, label }
    }
    case 'range-picker': {
      const { component, label, ...props } = filter
      return { control: <RangePicker {...props} />, label }
    }
  }
}

export const QuickFilter: FC<QuickFilterProps> = ({ filters, disabled, className, labelPosition = 'before', ...rest }) => {
  const { testAttributes } = useTestAttribute(rest)

  return (
    <StyledQuickFilter {...testAttributes} className={className}>
      {filters.map((filterProps: QuickFilterItem, index: number) => {
        const mappedFieldProps = getMappedFieldProps(filterProps, disabled)

        return (
          <StyledField
            key={filterProps.testId || filterProps.klId || index}
            control={mappedFieldProps.control}
            label={mappedFieldProps.label}
            labelPosition={labelPosition}
          />
        )
      })}
    </StyledQuickFilter>
  )
}
