import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import cn from 'classnames'
import React, { FC } from 'react'
import styled from 'styled-components'

import { segmentedButtonItemCss } from './segmentedButtonCss'
import { SegmentedButtonItemProps, SegmentedButtonItemViewProps } from './types'
import { useThemedSegmentedButton } from './useThemedSegmentedButton'

const StyledSegmentedButtonItem = styled.div.withConfig({
  shouldForwardProp: (prop) => !['cssConfig', 'type'].includes(prop)
})`
  ${segmentedButtonItemCss}
`

export const SegmentedButtonItem: FC<SegmentedButtonItemProps> = (rawProps) => {
  const props: SegmentedButtonItemViewProps = useThemedSegmentedButton(rawProps)
  return <SegmentedButtonItemView {...props} />
}

const SegmentedButtonItemView: FC<SegmentedButtonItemViewProps> = (props) => {
  const {
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
    klId,
    ...rest
  } = props

  const { testAttributes } = useTestAttribute(props)
  const isChecked = selectedValues.includes(value)

  return (
    <StyledSegmentedButtonItem
      cssConfig={cssConfig}
      className={cn(className, {
        'kl6-segmentedButton-item-disabled': disabled,
        'kl6-segmentedButton-item-checked': isChecked
      })}
      type={rest.type}
      {...testAttributes}
    >
      <input
        {...rest}
        id={id}
        onChange={
          !disabled
            ? e => onChange(e.target.value, selectedValues)
            : undefined
        }
        data-testid={testId + '-input'}
        data-checked={isChecked}
        value={value}
        disabled={disabled}
      />
      <label
        htmlFor={id}
        data-testid={`${testId}-label`}
      >
        {
          componentsBefore && (
            <div className="kl6-segmentedButton-item-additional">
              {componentsBefore}
            </div>
          )
        }
        <div data-testid={testId + '-label-value'} >{text}</div>
        {
          componentsAfter && (
            <div className="kl6-segmentedButton-item-additional">
              {componentsAfter}
            </div>
          )
        }
      </label>

    </StyledSegmentedButtonItem>
  )
}
