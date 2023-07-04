import React, { ReactElement } from 'react'
import classnames from 'classnames'
import { InputCssConfig, IUrlInputProps } from './types'
import { inputStyles, inputAddonStyles } from './inputCss'
import { useThemedTextbox } from './useThemedTextbox'
import styled from 'styled-components'
import { Input, InputProps } from 'antd'

export const StyledUrlInput = styled(Input).withConfig<
  InputProps & { cssConfig: InputCssConfig }
>({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`
  ${inputStyles}
  ${inputAddonStyles}
`
const UrlStylesView = styled.div`
    display: flex;
    align-items: center;
  `

const UrlInputStylesView = styled(StyledUrlInput)`
  width: 100%;
  flex-grow: 1;
`

const UrlSeparatorStylesView = styled.div`
  margin: 0;
  flex-grow: 0;
  text-align: center;
  align-self: center;
  width: 16px;
`

const UrlPortStylesView = styled(StyledUrlInput)`
  width: 60px;
  flex-grow: 0;
`

export const UrlInput = (
  rawProps: IUrlInputProps
): ReactElement<IUrlInputProps> => {
  const props = useThemedTextbox(rawProps)
  return <UrlInputView {...props} />
}

export const UrlInputView = ({
  error,
  disabled,
  className,
  onPathChange,
  onPortChange,
  pathValue,
  portValue,
  theme,
  klId,
  ...rest
}: IUrlInputProps & {
  cssConfig: InputCssConfig
}): ReactElement<IUrlInputProps> => {
  return (
    <div kl-id={klId}>
      <UrlStylesView>
        <UrlInputStylesView
          className={classnames({ error: error && !disabled })}
          disabled={disabled}
          value={pathValue}
          onChange={(value) => onPathChange?.(value)}
          kl-id={'kl-v6-path-input'}
          {...rest}
        />
        <UrlSeparatorStylesView>:</UrlSeparatorStylesView>
        <UrlPortStylesView
          className={classnames({ error: error && !disabled })}
          disabled={disabled}
          value={portValue}
          onChange={(value) => onPortChange?.(value)}
          kl-id={'kl-v6-port-input'}
          {...rest}
        />
      </UrlStylesView>
    </div>
  )
}
