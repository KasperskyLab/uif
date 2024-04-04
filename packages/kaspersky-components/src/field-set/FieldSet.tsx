import React from 'react'
import smartMerge from '@helpers/smartMerge'
import {
  FieldSetProps,
  FieldSetItem,
  FieldSetItemWithControlConfig
} from './types'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { getMappedControl } from './getMappedControl'
import { StyledField, StyledFieldSet } from './fieldSetCss'

export const FieldSet = ({
  items,
  className,
  ...rest
}: FieldSetProps) => {
  const { testAttributes, ...props } = useTestAttribute(rest)
  return (
    <StyledFieldSet
      className={className}
      {...testAttributes}
    >
      {items.map((item: FieldSetItem, index: number) => {
        if (React.isValidElement(item)) {
          return item
        }

        const { control, ...itemProps } = item as FieldSetItemWithControlConfig

        const mergedProps = smartMerge.objects({ skipUndefined: true })(props, itemProps)
        const mappedControl = getMappedControl(control)

        return (
          <StyledField
            key={item.testId || item.klId || index}
            {...mergedProps}
            control={mappedControl}
          />
        )
      })}
    </StyledFieldSet>
  )
}
