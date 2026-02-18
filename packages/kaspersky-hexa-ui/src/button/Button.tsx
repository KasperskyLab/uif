import { getClassNameWithTheme } from '@helpers/getClassNameWithTheme'
import { getChildTestProps, useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { showDeprecationWarn } from '@helpers/showDeprecationWarn'
import { Dropdown } from '@src/dropdown'
import { Loader } from '@src/loader'
import { Button as AntdButton } from 'antd'
import cn from 'classnames'
import React from 'react'

import { ArrowDown1 } from '@kaspersky/hexa-ui-icons/16'

import styles from './Button.module.scss'
import { ButtonGroupProps, buttonModes, ButtonProps, SplitButtonProps } from './types'

const cloneWithKey = (node: React.ReactNode, key: string) => (
  React.isValidElement(node)
    ? React.cloneElement(node, { key })
    : node
)

export const Button = ({
  children,
  className,
  iconBefore,
  iconAfter,
  isPressed,
  loading,
  mode: rawMode = 'primary',
  size = 'medium',
  text,
  theme,
  type,
  ...props
}: ButtonProps): JSX.Element => {
  const { testAttributes, ...rest } = useTestAttribute(props)

  const mode = React.useMemo(() => {
    if (!buttonModes.includes(rawMode)) {
      showDeprecationWarn('mode', rawMode)
      return 'primary'
    }

    return rawMode
  }, [rawMode])

  const child = text || children

  return (
    <AntdButton
      {...testAttributes}
      {...rest}
      className={cn(
        getClassNameWithTheme(className, theme),
        'hexa-ui-button',
        styles.button,
        styles[size],
        styles[mode],
        isPressed && styles.buttonPressed,
        loading && styles.buttonLoading,
        !child && styles.iconOnly
      )}
      htmlType={type}
      icon={undefined}
      loading={loading}
    >
      {
        child
          ? [
              cloneWithKey(iconBefore, 'iconBefore'),
              <span key="radio" className={styles.buttonText}> {child} </span>,
              cloneWithKey(iconAfter, 'iconAfter')
            ]
          : iconBefore || iconAfter
      }
      {loading && <Loader size="small" {...getChildTestProps('loader', testAttributes)} />}
    </AntdButton>
  )
}

const ButtonGroup = (props: ButtonGroupProps): JSX.Element => {
  const { testAttributes, className, ...rest } = useTestAttribute(props)

  return <AntdButton.Group {...testAttributes} {...rest} className={cn(className, styles.buttonGroup)} />
}

const SplitButton = ({
  className,
  disabled,
  loading,
  style,
  mode = 'primary',
  theme,
  items,
  dropdownPlacement,
  ...props
}: SplitButtonProps): JSX.Element => (
  <ButtonGroup
    className={cn(
      getClassNameWithTheme(className, theme),
      styles.splitButton,
      styles[mode]
    )}
    style={style}
  >
    <Button
      mode={mode}
      loading={loading}
      disabled={disabled}
      {...props}
      iconAfter={undefined}
      isPressed={undefined}
      size={undefined}
    />
    <Dropdown
      disabled={disabled}
      trigger={['click']}
      overlay={items}
      placement={dropdownPlacement}
    >
      <Button disabled={disabled} mode={mode} iconBefore={<ArrowDown1 />} />
    </Dropdown>
  </ButtonGroup>
)

Button.Group = ButtonGroup
Button.SplitButton = SplitButton
