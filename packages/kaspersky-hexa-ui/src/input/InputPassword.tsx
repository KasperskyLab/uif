import { useGlobalStyles } from '@helpers/hooks/useGlobalStyles'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { ActionButton } from '@src/action-button'
import { Button } from '@src/button'
import { IconResolver } from '@src/icon'
import { Popover } from '@src/popover'
import { Space } from '@src/space'
import { Tooltip } from '@src/tooltip'
import { Input } from 'antd'
import React, { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { PasswordHide, PasswordShow } from '@kaspersky/hexa-ui-icons/16'

import { inputPasswordStyles, inputStyles } from './inputCss'
import { TextboxPasswordProps } from './types'
import { useClassNamedTextbox } from './useClassNamedTextbox'
import { useThemedTextbox } from './useThemedTextbox'
import { ValidationRules } from './ValidationRules'

const StyledPassword = styled(Input.Password).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`
  ${inputStyles}
  ${inputPasswordStyles}
`

export const InputPassword: FC<TextboxPasswordProps> = (props: TextboxPasswordProps) => {
  const {
    onChange,
    testAttributes,
    value: passValue,
    clearBeforeFirstChange = false,
    onFocus,
    onBlur,
    visibilityToggle,
    validationRules,
    showVisibilityIcon = true,
    actions,
    disabled,
    ...rest
  } = useTestAttribute(useThemedTextbox(useClassNamedTextbox(props)))

  useGlobalStyles()
  const { t } = useTranslation()

  const [inFocus, setInFocus] = useState(false)
  const [changedOnce, setChangedOnce] = useState(false)
  const [showVisibilityToggle, setShowVisibilityToggle] = useState(!clearBeforeFirstChange)

  const clearValue = inFocus && clearBeforeFirstChange && !changedOnce

  const inputElement = (
    <StyledPassword
      disabled={disabled}
      iconRender={(visible: boolean) => {
        if (!showVisibilityIcon || disabled) {
          return null
        }
        return (
          <Tooltip text={visible ? t('input.password.hide') : t('input.password.show')}>
            <ActionButton
              interactive={false}
              icon={visible ? <PasswordHide /> : <PasswordShow />}
              klId={props.klId ? `${props.klId}-input-password-icon` : undefined}
              testId={props.testId ? `${props.testId}-input-password-icon` : undefined}
            />
          </Tooltip>
        )
      }}
      onChange={({ target: { value } }: { target: { value: string }}) => {
        onChange?.(value)
        setChangedOnce(true)
      }}
      value={clearValue ? '' : passValue}
      visibilityToggle={visibilityToggle !== undefined ? visibilityToggle : showVisibilityToggle}
      onFocus={(event) => {
        setInFocus(true)
        onFocus && onFocus(event)
      }}
      onBlur={(event) => {
        setInFocus(false)
        if (changedOnce) setShowVisibilityToggle(true)
        onBlur && onBlur(event)
      }}
      {...testAttributes}
      {...rest}
    />
  )
  return (
    <Space gap="related" wrap="nowrap">
      {validationRules?.length ? (
        <Popover
          trigger="focus"
          content={<ValidationRules rules={validationRules} />}
        >
          {inputElement}
        </Popover>
      ) : (
        inputElement 
      )} 
      {actions && actions.map((actionConfig, index) => {
        return <Tooltip key={`${actionConfig.tooltip} - ${index}`} text={actionConfig.tooltip}>
          <Button
            iconBefore={actionConfig.icon ? <IconResolver name={actionConfig.icon} size={16} /> : null}
            mode={actionConfig.mode || 'secondary'}
            onClick={actionConfig.onClick}
          />
        </Tooltip>
      })}
    </Space>
  )
}
