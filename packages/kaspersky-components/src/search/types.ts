import React from 'react'
import { IButtonProps } from '../button/types'
import { ITextboxProps } from '../input/types'

type StateProps = {
  color?: string,
  iconColor?: string,
  background?: string,
  borderColor?: string
};

export type SearchCssConfig = {
  mode: {
    normal: StateProps
  }
};

export type SearchProps = React.PropsWithChildren<
ITextboxProps & {
  tags?: string[],
  onClearClick?: () => void,
  onChange?: (value: string) => void
}>

export interface SearchWithButtonProps extends ITextboxProps {
  onClick?: React.MouseEventHandler<HTMLElement>,
  btnText?: string | React.ReactNode
}
export interface SearchWithIconProps extends ITextboxProps {
  icon?: React.ReactNode
}

export interface SearchWithDropdownProps extends ITextboxProps {
  overlay?: React.ReactElement,
  btnText?: string
}

export type StyledButton = IButtonProps & { cssConfig: SearchCssConfig }
export type ISearchProps = SearchProps & { onClearClick?: () => void }
export type ISearchViewProps = ISearchProps & { cssConfig: SearchCssConfig }
