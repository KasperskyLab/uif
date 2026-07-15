import { ThemeKey } from '@design-system/types'
import { TestingProps } from '@helpers/typesHelpers'
import { DropdownItemInnerProps, DropdownItemProps } from '@src/dropdown/types'
import { ExpandIconPosition } from 'antd/lib/collapse/Collapse'
import React from 'react'

export const accordionTitleSizes = ['extraSmall', 'small', 'medium', 'large'] as const

export type AccordionTitleSize = typeof accordionTitleSizes[number]

type AccordionAction = Pick<DropdownItemProps, 'onClick'> &
  Pick<DropdownItemInnerProps, 'description' | 'componentsBefore' | 'componentsAfter'> &
  { value?: string }

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
  /** @deprecated use elementBefore instead */
  tagBefore?: React.ReactElement,
  /** @deprecated use elementBefore instead */
  indicator?: React.ReactElement,
  /** Element before the title */
  elementBefore?: React.ReactNode,
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
  onChange?: (key: (string | number) | (string | number)[]) => void
} & TestingProps
