import { Focus } from '@design-system/tokens/focus'
import { Theme, ThemeKey } from '@design-system/types'
import { TestingProps, ToViewProps } from '@helpers/typesHelpers'
import { DropdownItemInnerProps, DropdownItemProps } from '@src/dropdown/types'
import { ExpandIconPosition } from 'antd/lib/collapse/Collapse'
import * as React from 'react'

import { TextSizes } from '@kaspersky/hexa-ui-core/typography/js'

export type StateProps = {
  background?: string,
  color?: string,
  border?: string,
  additionalTextColor?: string
}

export type AccordionColorConfig = Focus & {
  enabled?: StateProps,
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

type AccordionAction = Pick<DropdownItemProps, 'onClick'>
  & Pick<DropdownItemInnerProps, 'description' | 'componentsBefore' | 'componentsAfter'>
  & { value?: string }

export type AccordionPanelThemeProps = {
  /** Custom theme */
  theme?: ThemeKey,
  /** Title size */
  titleSize?: AccordionTitleSize
}

export type AccordionPanelProps = {
  children?: React.ReactNode,
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
  /** Element after additional text */
  elementAfter?: React.ReactElement,
  /** Actions */
  actions?: AccordionAction[],
  /** Should disable actions when accordion panel is disabled */
  shouldDisableActions?: boolean,
  /** Key of panel */
  key: string | number,
  /** Custom class name */
  className?: string | undefined,
  /** Set panel as disabled */
  disabled?: boolean
} & AccordionPanelThemeProps

export type AccordionPanelViewProps = ToViewProps<AccordionPanelProps, AccordionPanelCssConfig, AccordionPanelThemeProps>

export type AccordionProps = {
  /** Key of the active panel */
  activeKey?: string[] | string | number[] | number,
  /** Key of the initial active panel */
  defaultActiveKey?: string[] | string | number[] | number,
  /** Disabled state */
  disabled?: boolean,
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
  onChange?: (key: string | string[]) => void
} & TestingProps

export type AccordionViewProps = ToViewProps<AccordionProps, AccordionCssConfig, AccordionStyleConfig>
