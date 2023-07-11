import React, { ComponentProps } from 'react'

import { IconSearch } from './assets/icons/IconSearch'
import { Search } from './Search'
import { StyledRightIconButton } from './searchCss'
import {
  SearchCssConfig,
  SearchWithButtonProps,
  SearchWithIconProps,
  StyledButton
} from './types'
import { useThemedSearch } from './useThemedSearch'

const ButtonIconSearch = ({ cssConfig, ...props }: StyledButton) => {
  return (
    <StyledRightIconButton mode="tertiary" {...props}>
      <IconSearch
        color={cssConfig.mode.normal.iconColor}
        componentId={'icon-search'}
      />
    </StyledRightIconButton>
  )
}

export const WithSearchButton = ({
  onPressEnter,
  onClick,
  ...otherProps
}: SearchWithButtonProps & ComponentProps<typeof Search>) => {
  const { cssConfig } = useThemedSearch(otherProps)

  return (
    <Search
      prefix={
        <ButtonIconSearch
          onClick={onClick}
          disabled={otherProps.disabled}
          cssConfig={cssConfig}
        />
      }
      onPressEnter={onPressEnter}
      addonAfter={null}
      {...otherProps}
    />
  )
}

const DefaultIcon = ({
  cssConfig,
  onClick
}: SearchWithButtonProps &
SearchWithIconProps & { cssConfig: SearchCssConfig }) => (
  <IconSearch
    componentId={'search-icon'}
    color={cssConfig.mode.normal.iconColor}
    onClick={onClick}
  />
)

export const WithIconLeft = ({
  icon,
  onPressEnter,
  onClick,
  ...otherProps
}: SearchWithButtonProps &
SearchWithIconProps &
ComponentProps<typeof Search>) => {
  const { cssConfig } = useThemedSearch(otherProps)

  return (
    <Search
      className="icon-before"
      prefix={icon ?? <DefaultIcon cssConfig={cssConfig} onClick={onClick} />}
      addonAfter={null}
      onPressEnter={onPressEnter}
      {...otherProps}
    />
  )
}

export const WithIconRight = ({
  icon,
  onPressEnter,
  onClick,
  ...otherProps
}: SearchWithButtonProps &
SearchWithIconProps &
ComponentProps<typeof Search>) => {
  const { cssConfig } = useThemedSearch(otherProps)

  return (
    <Search
      className="icon-after"
      prefix={<span/>}
      suffix={icon ?? <DefaultIcon cssConfig={cssConfig} onClick={onClick} />}
      onPressEnter={onPressEnter}
      {...otherProps}
    />
  )
}
