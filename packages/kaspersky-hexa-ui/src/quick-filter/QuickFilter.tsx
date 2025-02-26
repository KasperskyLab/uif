import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { SegmentedButton } from '@src/segmented-button'
import { Toggle } from '@src/toggle'
import React, { FC, ReactElement } from 'react'

import { StyledSelect, ToggleWrapper, StyledField, StyledQuickFilter } from './quickFilterCss'
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
  }
}

export const QuickFilter: FC<QuickFilterProps> = ({ filters, disabled, labelPosition = 'before', ...rest }) => {
  const { testAttributes } = useTestAttribute(rest)

  return (
    <StyledQuickFilter {...testAttributes}>
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
