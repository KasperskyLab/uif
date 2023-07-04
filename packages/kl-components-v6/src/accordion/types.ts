import * as React from 'react'
import { Theme, ThemeKey } from '../../design-system/types'
import { ExpandIconPosition } from 'antd/lib/collapse/Collapse'

export type StateProps = {
  contentBackground?: string,
  titleBackground?: string
}

export type AccordionColorConfig = {
  default?: StateProps,
  active?: StateProps,
  disabled?: StateProps,
  borderColor: string,
  borderRadius: string,
  upBorderRadius: string,
  downBorderRadius: string
}

export type AccordionStyleConfig = {
  /** Custom theme */
  theme?: Theme
}

export type AccordionStates = 'default' | 'active' | 'disabled'

export type AccordionCssConfig = AccordionStyleConfig & AccordionColorConfig;

export type IAccordionPanelProps = {
  /**
   * Header content of panel
   */
  readonly header: React.ReactNode,
  /**
   * Component theme
   */
  readonly theme?: ThemeKey,
  /**
   * Key of panel
   */
  readonly key: string | number,
  /**
   * Custom Class Name
   */
  readonly className?: string | undefined,
  /**
   * Prop set panel as disabled
   */
  readonly disabled?: boolean,
  /**
   * Hide expand icon
   */
  readonly noIcon?: boolean
}

export type IAccordionProps = {
  /**
   * Test id
   */
  readonly klId?: string,
  /**
   * Key of the active panel
   */
  readonly activeKey?: string[] | string | number[] | number,
  /**
   * Key of the initial active panel
   */
  readonly defaultActiveKey?: string[] | string | number[] | number,
  /**
   * Component theme
   */
  readonly theme?: ThemeKey,
  /**
   * Is show border top
   */
  readonly withBorder?: boolean,
  /**
   * Icon position left || right
   */
  readonly expandIconPosition?: ExpandIconPosition,
  /**
   * Custom Class Name
   */
  readonly className?: string,
  /**
   * Set accordion to a spesial mode when only one panel can be opened
   */
  readonly accordion?: boolean,
  /**
   *  React children
   */
  readonly children?: React.ReactNode | undefined,
  /**
   * Handler function calling when accordion tab clicked
   */
  readonly onChange?: (key: string | string[]) => void,
  /**
   * Mode of accordion view 'default' | 'active' | 'disabled'
   */
  readonly state?: AccordionStates
}
