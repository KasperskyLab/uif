import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import cn from 'classnames'
import React, { FC, useCallback, useMemo } from 'react'
import styled from 'styled-components'
import { v4 as uuid } from 'uuid'

import { segmentedButtonCss } from './segmentedButtonCss'
import { SegmentedButtonItem } from './SegmentedButtonItem'
import { SegmentedButtonOptionMapped, SegmentedButtonProps } from './types'

const StyledSegmentedButton = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isStretch', 'type'].includes(prop)
})`
  ${segmentedButtonCss}
`

export const SegmentedButton: FC<SegmentedButtonProps> = (props) => {
  const {
    type = 'radio',
    theme,
    mode,
    size,
    className,
    disabled,
    items,
    value,
    onChange,
    isStretch
  } = props
  const optionsGroupId = useMemo(() => uuid(), [])
  const { testAttributes } = useTestAttribute(props)

  const onItemClick = useCallback((handledValue: string, selectedValues: string[]) => {
    if (type === 'checkbox') {
      if (selectedValues.includes(handledValue)) {
        onChange(selectedValues.filter(value => value !== handledValue))
      } else {
        onChange([...selectedValues, handledValue])
      }
    } else if (!selectedValues.includes(handledValue)) {
      onChange([handledValue])
    }
  }, [onChange, type])

  const mappedItems: SegmentedButtonOptionMapped[] = useMemo(() => items.map(item => ({
    ...item,
    id: uuid(),
    name: optionsGroupId
  })), [items, type, optionsGroupId])

  return (
    <StyledSegmentedButton
      type={type}
      className={cn('kl6-segmented-button', className)}
      isStretch={isStretch}
      {...testAttributes}
    >
      {
        mappedItems.map((item: SegmentedButtonOptionMapped) => (
          <SegmentedButtonItem
            key={item.id}
            type={type}
            selectedValues={value}
            onChange={onItemClick}
            theme={theme}
            mode={ item.mode || mode}
            size={size}
            {...item}
            disabled={ disabled || item.disabled }
          />
        ))
      }
    </StyledSegmentedButton>
  )
}
