import React, { Children, isValidElement, cloneElement, useEffect, useState, FC } from 'react'
import { Switch as SwitchAntd } from 'antd'
import styled from 'styled-components'
import { useThemedToggle } from './useThemedToggle'
import { ToggleProps, ToggleViewProps } from './types'
import { toggleCss, ToggleWrapper } from './toggleCss'
import { FormLabel } from '@src/form-label'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

const StyledToggle = styled(SwitchAntd).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${toggleCss}`

export const Toggle: FC<ToggleProps> = (rawProps: ToggleProps) => {
  const themedProps = useThemedToggle(rawProps)
  const props = useTestAttribute(themedProps)
  return <ToggleView {...props} />
}

export const ToggleView: FC<ToggleViewProps> = ({
  onChange,
  checked,
  children,
  disabled,
  readonly,
  cssConfig,
  labelPosition = 'after',
  required,
  tooltip,
  testAttributes,
  ...rest
}: ToggleViewProps) => {
  const [isChecked, setChecked] = useState(!!checked)

  useEffect(() => {
    if (checked === undefined || isChecked === checked) return
    setChecked(!!checked)
  }, [checked])

  const toggleValue = (check: boolean, e: MouseEvent) => {
    onChange?.(check, e)
    checked === undefined && setChecked(check)
  }

  return (
    <ToggleWrapper
      className="ant-toggle-wrapper"
      role="toggle"
      labelPosition={labelPosition}
    >
      <StyledToggle
        onChange={toggleValue}
        checked={isChecked}
        cssConfig={cssConfig}
        disabled={disabled || readonly}
        readonly={readonly}
        labelPosition={labelPosition}
        {...testAttributes}
        {...rest}
      />
      {typeof children === 'string'
        ? <FormLabel
          onClick={ () => !disabled && !readonly && toggleValue(!isChecked, new MouseEvent('click')) }
          className="toggle-label"
          disabled={disabled}
          required={required}
          tooltip={tooltip}
        >
          {children}
        </FormLabel>
        : Children
          .map(children, child =>
            isValidElement(child)
              ? cloneElement(child, { onClick: () => !disabled && toggleValue(!isChecked, new MouseEvent('click')) })
              : child
          )
      }
    </ToggleWrapper>
  )
}
