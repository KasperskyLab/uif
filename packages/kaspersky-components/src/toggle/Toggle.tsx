import React, { Children, isValidElement, cloneElement, useEffect, useState } from 'react'
import { Switch as SwitchAntd } from 'antd'
import styled from 'styled-components'
import { useThemedToggle } from './useThemedToggle'
import { IToggleProps, ToggleCssConfig } from './types'
import { Label } from '../label'
import { toggleCss, toggleLabelCss } from './toggleCss'

const StyledToggle = styled(SwitchAntd).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${toggleCss}`

const ToggleWrapper = styled.div<IToggleProps>`
  display: flex;
  flex-direction: row;
`

const ToggleLabel = styled(Label).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${toggleLabelCss}`

export const Toggle = (rawProps: IToggleProps): JSX.Element => {
  const props = useThemedToggle(rawProps)
  return <ToggleView {...props} />
}

export const ToggleView = ({
  onChange,
  checked,
  children,
  disabled,
  cssConfig,
  labelPosition = 'after',
  size = 'small',
  klId,
  ...rest
}: ReturnType<typeof useThemedToggle>): JSX.Element => {
  const [isChecked, setChecked] = useState(!!checked)

  useEffect(() => {
    if (checked === undefined || isChecked === checked) return
    setChecked(!!checked)
  }, [checked])

  const toggleValue = (check: boolean, e: MouseEvent) => {
    onChange?.(check, e)
    checked === undefined && setChecked(check)
  }

  const labelPositionCssClasses = {
    after: null,
    before: 'ant-switch-label-before'
  }

  const labelCssClassList = ['ant-switch-label', labelPositionCssClasses[labelPosition]].filter(Boolean).join(' ')

  return <ToggleWrapper
    className='ant-toggle-wrapper'
    role='toggle'
    labelPosition={labelPosition}
  >
    <StyledToggle
      onChange={toggleValue}
      checked={isChecked}
      cssConfig={cssConfig as ToggleCssConfig}
      disabled={disabled}
      size={size}
      kl-id={klId}
      {...rest}
    />
    {typeof children === 'string'
      ? <ToggleLabel
        cssConfig={cssConfig as ToggleCssConfig}
        className={labelCssClassList}
        onClick={() => !disabled && toggleValue(!isChecked, new MouseEvent('click'))}
        disabled={disabled}>
        {children}
      </ToggleLabel>
      : Children
        .map(children, child =>
          isValidElement(child)
            ? cloneElement(child, { onClick: () => !disabled && toggleValue(!isChecked, new MouseEvent('click')) })
            : child
        )
    }
  </ToggleWrapper>
}
