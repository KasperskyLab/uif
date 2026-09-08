import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import smartMerge from '@helpers/smartMerge'
import { Field } from '@src/field'
import cn from 'classnames'
import React, { FC } from 'react'

import styles from './FieldSet.module.scss'
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
    <div
      className={cn(styles.fieldSet, className)}
      style={style}
      {...testAttributes}
    >
      {items.map((item: FieldSetItem, index: number) => {
        // any because of https://github.com/microsoft/TypeScript/issues/52232#issuecomment-1386032961
        if (React.isValidElement<any>(item)) {
          return item
        }

        const { control, marginBefore, ...itemProps } = item
        let marginBeforeValue: string | undefined
        if (marginBefore != null) {
          marginBeforeValue = typeof marginBefore === 'string' ? marginBefore : `${marginBefore}px`
        }
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
          <Field
            key={itemProps.testId || itemProps.klId || index}
            style={{ '--field-margin-before': marginBeforeValue, ...mergedProps.style } as React.CSSProperties}
            {...mappedClassName}
            {...mergedProps}
            control={mappedControl}
          />
        )
      })}
    </div>
  )
}
