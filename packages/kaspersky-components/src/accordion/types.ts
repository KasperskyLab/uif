import * as React from 'react'
import { ExpandIconPosition } from 'antd/lib/collapse/Collapse'
import { Theme, ThemeKey } from '@design-system/types'
import { TextSizes } from '@design-system/tokens'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { Focus } from '@design-system/tokens/focus'

export type StateProps = {
  background?: string,
  color?: string,
  borderColor?: string,
  additionalTextColor?: string
}

export type AccordionColorConfig = Focus & {
  default?: StateProps,
  disabled?: StateProps
}

export type AccordionStyleConfig = {
  /** Custom theme */
  theme?: Theme
}

export type AccordionCssConfig = AccordionStyleConfig & AccordionColorConfig

export type AccordionPanelSizeConfig = TextSizes

export type AccordionPanelCssConfig = AccordionPanelSizeConfig

export type AccordionTitleSize = 'small' | 'medium' | 'large'

export type AccordionStates = 'default' | 'active' | 'disabled'

export type AccordionPanelThemeProps = {
  /** Custom theme */
  theme?: ThemeKey,
  /** Title size */
  titleSize?: AccordionTitleSize
}

export type AccordionPanelProps = {
  /** @deprecated Header content of panel */
  header?: React.ReactNode,
  /** Title */
  title?: React.ReactNode,
  /** Tag before the title */
  tagBefore?: React.ReactElement,
  /** Indicator */
  indicator?: React.ReactElement,
  /** Tag after the title */
  tagAfter?: React.ReactElement,
  /** Additional text */
  additionalText?: string,
  /** Key of panel */
  key: string | number,
  /** Custom class name */
  className?: string | undefined,
  /** Set panel as disabled */
  disabled?: boolean,
  /** Hide expand icon */
  noIcon?: boolean
} & AccordionPanelThemeProps

export type AccordionPanelViewProps = ToViewProps<AccordionPanelProps, AccordionPanelCssConfig, AccordionPanelThemeProps>

export type AccordionProps = {
  /** Key of the active panel */
  activeKey?: string[] | string | number[] | number,
  /** Key of the initial active panel */
  defaultActiveKey?: string[] | string | number[] | number,
  /** Custom theme */
  theme?: ThemeKey,
  /** With border or not */
  withBorder?: boolean,
  /** Icon position */
  expandIconPosition?: ExpandIconPosition,
  /** Custom class name */
  className?: string,
  /** Set accordion to a special mode when only one panel can be opened */
  accordion?: boolean,
  /** React children */
  children?: React.ReactNode | undefined,
  /** Handler function calling when accordion tab clicked */
  onChange?: (key: string | string[]) => void,
  /** @deprecated Mode of accordion view 'default' | 'active' | 'disabled' */
  state?: AccordionStates
} & TestingProps

export type AccordionViewProps = ToViewProps<AccordionProps, AccordionCssConfig, AccordionStyleConfig>

/** @deprecated Use AccordionProps instead */
export type IAccordionProps = AccordionProps
/** @deprecated Use AccordionViewProps instead */
export type IAccordionPropsView = AccordionViewProps

/** @deprecated Use AccordionPanelProps instead */
export type IAccordionPanelProps = AccordionPanelProps
/** @deprecated Use AccordionPanelViewProps instead */
export type IAccordionPanelPropsView = AccordionPanelViewProps
