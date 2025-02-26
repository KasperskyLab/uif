import { Input } from 'antd'
import classnames from 'classnames'
import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { inputAddonStyles, inputStyles } from './inputCss'
import { InputCssConfig, IUrlInputProps } from './types'
import { useThemedTextbox } from './useThemedTextbox'

const StyledUrlInput = styled(Input).withConfig({
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

/** @deprecated Compose components like this in product layout */
export const UrlInput = (rawProps: IUrlInputProps): ReactElement<IUrlInputProps> => {
  const props = useThemedTextbox(rawProps)
  return <UrlInputView {...props} />
}

const UrlInputView = ({
  validationStatus,
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
          className={classnames({ error: validationStatus === 'error' && !disabled })}
          disabled={disabled}
          value={pathValue}
          onChange={(value) => onPathChange?.(value)}
          kl-id="kl-v6-path-input"
          {...rest}
          data-testid="url-input-path"
        />
        <UrlSeparatorStylesView>:</UrlSeparatorStylesView>
        <UrlPortStylesView
          className={classnames({ error: validationStatus === 'error' && !disabled })}
          disabled={disabled}
          value={portValue}
          onChange={(value) => onPortChange?.(value)}
          kl-id="kl-v6-port-input"
          {...rest}
          data-testid="url-input-port"
        />
      </UrlStylesView>
    </div>
  )
}
