import React, { FC, useCallback, useMemo } from 'react'
import styled from 'styled-components'
import cn from 'classnames'
import { v4 as uuid } from 'uuid'
import { segmentedButtonCss } from './segmentedButtonCss'
import { SegmentedButtonProps, SegmentedButtonOptionMapped } from './types'
import { SegmentedButtonItem } from './SegmentedButtonItem'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

const StyledSegmentedButton = styled.div.withConfig({
  shouldForwardProp: (prop) => !['type'].includes(prop)
})`
  ${segmentedButtonCss}
`

export const SegmentedButton: FC<SegmentedButtonProps> = (props: SegmentedButtonProps) => {
  const {
    type = 'radio',
    theme,
    mode,
    size,
    className,
    disabled,
    items,
    value,
    onChange
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
