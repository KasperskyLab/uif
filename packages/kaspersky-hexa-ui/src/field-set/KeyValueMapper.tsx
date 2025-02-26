import { TestingProps } from '@helpers/typesHelpers'
import { KeyValuePair, KeyValueProps } from '@src/key-value'
import { Text } from '@src/typography'
import React, { FC, ReactNode } from 'react'

import { FieldSet } from './FieldSet'
import { FieldSetItemConfig, FieldSetItemControl } from './types'

const LabelPositionMap = {
  none: 'before',
  top: 'top',
  aside: 'before',
  right: 'after'
} as const

function resolveControl (controlValue: ReactNode): FieldSetItemControl {
  if (React.isValidElement(controlValue)) {
    return controlValue
  } else if (typeof controlValue === 'string' || typeof controlValue === 'number') {
    return <Text>{controlValue}</Text>
  }
  return <></>
}

export type KeyValueMapperProps = Omit<KeyValueProps, 'data'> & { data?: (KeyValuePair & TestingProps)[] }

export const KeyValueMapper: FC<KeyValueMapperProps> = ({
  data,
  gridLayout,
  labelPosition,
  keyRequired,
  keyTooltip,
  padding,
  wrapperClasses,
  testId,
  klId
}: KeyValueMapperProps) => {
  if (!data) return null

  const items: FieldSetItemConfig[] = data.map(pair => ({
    label: pair.pairKey as string,
    klId: pair.klId || pair.pairKey as string,
    testId: pair.testId || pair.pairKey as string,
    control: resolveControl(pair.pairValue),
    required: keyRequired,
    tooltip: keyTooltip,
    marginBefore: padding
  }))

  const newGridLayout = gridLayout?.cols
    ? { firstCol: gridLayout.cols[0], secondCol: gridLayout.cols[1] }
    : undefined

  return (
    <FieldSet
      gridLayout={newGridLayout}
      testId={testId}
      klId={klId}
      labelPosition={labelPosition && LabelPositionMap[labelPosition]}
      items={items}
      fieldWrapperClassNames={{
        labelClassName: wrapperClasses?.keyClassName,
        controlClassName: wrapperClasses?.valueClassName
      }}
    />
  )
}
