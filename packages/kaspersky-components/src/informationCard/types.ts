import React, { ReactNode } from 'react'
import { Theme } from '@design-system/types'
import { TextSizes } from '@design-system/tokens/typography'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { TextType } from '@src/typography/text'
import { Focus } from '@design-system/tokens/focus'

export type BorderedCardProps = {
  width?: number | string,
  borderColor: string,
  backgroundColor: string
}

type StateProps = {
  color?: string,
  descriptionColor?: string,
  border?: string,
  background?: string
}

type InformationCardStateConfig = Focus & {
  enabled: StateProps,
  pressed: StateProps,
  hover: StateProps,
  disabled: StateProps
}

export type InformationCardColorConfig = {
  selected: InformationCardStateConfig,
  unSelected: InformationCardStateConfig
}

export type InformationCardSizeConfig = {
  padding: string
} & TextSizes

export type InformationCardCssStateConfig = InformationCardStateConfig & InformationCardSizeConfig

export type InformationCardCssConfig = InformationCardColorConfig & InformationCardSizeConfig

export type InformationCardSize = 'small' | 'medium'

export type InformationCardType = 'vertical' | 'horizontal' | 'center'

export type InformationCardStyleProps = {
  /** Custom theme */
  theme?: Theme,
  /** Card size */
  size?: InformationCardSize
}

export type InformationCardProps = InformationCardStyleProps & {
  /** Inline styles */
  style?: React.CSSProperties,
  /** Card width */
  width?: number | string,
  /** Card type */
  type?: InformationCardType,
  /** Selected state */
  selected?: boolean,
  /** Disabled state */
  disabled?: boolean,
  /** If interactive */
  interactive?: boolean,
  /** On click handler */
  onClick?: React.MouseEventHandler<HTMLElement>,
  /** Card value */
  value?: ReactNode,
  /** Left icon (with or without badge) */
  leftSide?: ReactNode,
  /** Card title */
  title?: ReactNode,
  /** @deprecated Title level is set in component */
  titleLevel?: TextType,
  /** @deprecated Title has no icon */
  titleIcon?: ReactNode,
  /** Card description */
  description?: string,
  /** Right corner control */
  rightCorner?: ReactNode,
  /** Controls */
  footer?: ReactNode,
  /** Custom content */
  children?: ReactNode,
  /** @deprecated Content level is set in component */
  contentLevel?: TextType,
  /** Component className */
  className?: string,
  /** Left icon className */
  leftSideClassName?: string,
  /** Title className */
  titleClassName?: string,
  /** Description className */
  descriptionClassName?: string,
  /** Right corner className */
  rightCornerClassName?: string,
  /** Content className */
  contentClassName?: string,
  /** Footer className */
  footerClassName?: string
} & TestingProps

export type InformationCardViewProps = ToViewProps<InformationCardProps, InformationCardCssConfig, InformationCardStyleProps>
