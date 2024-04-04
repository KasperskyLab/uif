import React, { ReactElement } from 'react'
import classnames from 'classnames'
import { InputCssConfig, IUrlInputProps } from './types'
import { inputStyles, inputAddonStyles } from './inputCss'
import { useThemedTextbox } from './useThemedTextbox'
import styled from 'styled-components'
import { Input } from 'antd'

/** @deprecated */
export const StyledUrlInput = styled(Input).withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`
  ${inputStyles}
  ${inputAddonStyles}
`

/** @deprecated */
const UrlStylesView = styled.div`
  display: flex;
  align-items: center;
`

/** @deprecated */
const UrlInputStylesView = styled(StyledUrlInput)`
  width: 100%;
  flex-grow: 1;
`

/** @deprecated */
const UrlSeparatorStylesView = styled.div`
  margin: 0;
  flex-grow: 0;
  text-align: center;
  align-self: center;
  width: 16px;
`

/** @deprecated */
const UrlPortStylesView = styled(StyledUrlInput)`
  width: 60px;
  flex-grow: 0;
`

/** @deprecated Принято решение собирать такой компонент непосредственно в продукте */
export const UrlInput = (rawProps: IUrlInputProps): ReactElement<IUrlInputProps> => {
  const props = useThemedTextbox(rawProps)
  return <UrlInputView {...props} />
}

/** @deprecated */
export const UrlInputView = ({
  error,
  disabled,
  className,
  onPathChange,
  onPortChange,
  pathValue,
  portValue,
  theme,
  testId,
  klId,
  ...rest
}: IUrlInputProps & {
  cssConfig: InputCssConfig
}): ReactElement<IUrlInputProps> => {
  return (
    <div data-testid={testId} kl-id={klId}>
      <UrlStylesView>
        <UrlInputStylesView
          className={classnames({ error: error && !disabled })}
          disabled={disabled}
          value={pathValue}
          onChange={(value) => onPathChange?.(value)}
          kl-id={'kl-v6-path-input'}
          {...rest}
          data-testid="url-input-path"
        />
        <UrlSeparatorStylesView>:</UrlSeparatorStylesView>
        <UrlPortStylesView
          className={classnames({ error: error && !disabled })}
          disabled={disabled}
          value={portValue}
          onChange={(value) => onPortChange?.(value)}
          kl-id={'kl-v6-port-input'}
          {...rest}
          data-testid="url-input-port"
        />
      </UrlStylesView>
    </div>
  )
}
