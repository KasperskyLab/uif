import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import smartMerge from '@helpers/smartMerge'
import React, { FC } from 'react'

import { StyledField, StyledFieldSet } from './fieldSetCss'
import { getMappedClassName } from './getMappedClassName'
import { getMappedControl } from './getMappedControl'
import { FieldSetItem, FieldSetProps } from './types'

export const FieldSet: FC<FieldSetProps> = (rawProps: FieldSetProps) => {
  const { 
    className,
    disabled,
    items,
    style,
    testAttributes,
    ...props
  } = useTestAttribute(rawProps)

  return (
    <StyledFieldSet
      className={className}
      style={style}
      {...testAttributes}
    >
      {items.map((item: FieldSetItem, index: number) => {
        // any because of https://github.com/microsoft/TypeScript/issues/52232#issuecomment-1386032961
        if (React.isValidElement<any>(item)) {
          return item
        }

        const { control, ...itemProps } = item
        const {
          className,
          wrapperClassNames,
          fieldClassName,
          fieldWrapperClassNames,
          ...mergedProps
        } = smartMerge.objects({ skipUndefined: true })(props, itemProps)
        const mappedControl = React.isValidElement<any>(control) ? control : getMappedControl(control)
        const mappedClassName = getMappedClassName({ className, wrapperClassNames, fieldClassName, fieldWrapperClassNames })

        return (
          <StyledField
            key={itemProps.testId || itemProps.klId || index}
            {...mappedClassName}
            {...mergedProps}
            control={mappedControl}
          />
        )
      })}
    </StyledFieldSet>
  )
}
