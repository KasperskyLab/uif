import React, { PropsWithChildren } from 'react'
import { IconProps } from '../icon'

export interface KeyValuePair {
  pairKey: React.ReactNode,
  pairValue: React.ReactNode
}

export interface KeyContainerProps {
  margin: number
}

type cssConfig = { cssConfig: KeyValueCssConfig}
export type ValueContainerStyledProps = cssConfig
export type KeyContainerStyledProps = KeyContainerProps & cssConfig
export type KeyValueStyledProps = KeyValueProps & cssConfig

export type KeyWithIconProps = PropsWithChildren<{
  icon: IconProps['name']
}>

export interface KeyValueProps {
  componentId: string,
  data: KeyValuePair[],
  rowHeight?: number,
  padding?: number,
  keysMargin?: number,
  wrapperClasses?: {
    keyClassName?: string,
    valueClassName?: string
  }
}

type StateProps = {
  keyColor?: string,
  valueColor?: string,
  iconColor?: string
};

export type KeyValueCssConfig = {
  normal: StateProps
};
