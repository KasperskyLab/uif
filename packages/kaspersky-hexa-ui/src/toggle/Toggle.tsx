import { AdditionalContent } from '@helpers/components/AdditionalContent'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { FormLabel } from '@src/form-label'
import { Switch as SwitchAntd } from 'antd'
import React, { Children, cloneElement, FC, isValidElement, useEffect, useState } from 'react'
import styled from 'styled-components'

import { toggleCss, ToggleWrapper } from './toggleCss'
import { ToggleProps, ToggleViewProps } from './types'
import { useThemedToggle } from './useThemedToggle'

const StyledToggle = styled(SwitchAntd).withConfig({
  shouldForwardProp: prop => !['cssConfig', 'readonly', 'labelPosition'].includes(prop)
})`${toggleCss}`

export const Toggle: FC<ToggleProps> = (rawProps: ToggleProps) => {
  const themedProps = useThemedToggle(rawProps)
  const props = useTestAttribute(themedProps)
  return <ToggleView {...props} />
}

const ToggleView: FC<ToggleViewProps> = ({
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
  description,
  dependentElement,
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
    <div className="ant-toggle-wrapper" role="toggle">
      <ToggleWrapper>
        <StyledToggle
          onChange={toggleValue}
          checked={isChecked}
          cssConfig={cssConfig}
          disabled={disabled || readonly}
          readonly={readonly}
          labelPosition={children ? labelPosition : undefined}
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
                // @ts-ignore
                ? cloneElement(child, { onClick: () => !disabled && toggleValue(!isChecked, new MouseEvent('click')) })
                : child
            )
        }
      </ToggleWrapper>
      <AdditionalContent
        description={description}
        dependentElement={dependentElement}
        _margin={36}
      />
    </div>
  )
}
