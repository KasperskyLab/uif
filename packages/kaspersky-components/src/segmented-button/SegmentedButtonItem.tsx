import React, { FC } from 'react'
import styled from 'styled-components'
import cn from 'classnames'
import { SegmentedButtonItemProps, SegmentedButtonItemViewProps } from './types'
import { segmentedButtonItemCss } from './segmentedButtonCss'
import { useThemedSegmentedButton } from './useThemedSegmentedButton'

const StyledSegmentedButtonItem = styled.div.withConfig({
  shouldForwardProp: (prop) => !['cssConfig', 'type'].includes(prop)
})`
  ${segmentedButtonItemCss}
`

export const SegmentedButtonItem: FC<SegmentedButtonItemProps> = (rawProps: SegmentedButtonItemProps) => {
  const props: SegmentedButtonItemViewProps = useThemedSegmentedButton(rawProps)
  return <SegmentedButtonItemView {...props} />
}

const SegmentedButtonItemView: FC<SegmentedButtonItemViewProps> = ({
  className,
  id,
  text,
  selectedValues,
  onChange,
  value,
  componentsBefore,
  componentsAfter,
  disabled,
  cssConfig,
  testId,
  ...rest
}: SegmentedButtonItemViewProps) => {
  return (
    <StyledSegmentedButtonItem
      cssConfig={cssConfig}
      className={cn(className, {
        'kl6-segmentedButton-item-disabled': disabled,
        'kl6-segmentedButton-item-checked': selectedValues.includes(value)
      })}
      type={rest.type}
    >
      <input
        {...rest}
        id={id}
        onChange={
          !disabled
            ? e => onChange(e.target.value, selectedValues)
            : undefined
        }
        value={value}
        disabled={disabled}
        data-testid={testId}
      />
      <label htmlFor={id}>
        {
          componentsBefore && (
            <div className='kl6-segmentedButton-item-additional'>
              {componentsBefore}
            </div>
          )
        }
        <div>{text}</div>
        {
          componentsAfter && (
            <div className='kl6-segmentedButton-item-additional'>
              {componentsAfter}
            </div>
          )
        }
      </label>

    </StyledSegmentedButtonItem>
  )
}
