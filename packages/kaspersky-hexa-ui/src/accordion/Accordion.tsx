import { getChildTestProps, useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { ActionButton } from '@src/action-button'
import { Dropdown } from '@src/dropdown'
import { Text } from '@src/typography'
import { Collapse as AntdCollapse } from 'antd'
import { CollapsibleType } from 'antd/lib/collapse/CollapsePanel'
import cn from 'classnames'
import React, { FC } from 'react'
import styled from 'styled-components'

import { Menu2 } from '@kaspersky/icons/16'
import { ArrowRight } from '@kaspersky/icons/24'

import { accordionCss, accordionPanelCss } from './AccordionCss'
import {
  AccordionPanelProps,
  AccordionPanelViewProps,
  AccordionProps
} from './types'
import { useThemedAccordion, useThemedAccordionPanel } from './useThemedAccordion'

const StyledAccordionPanel = styled(AntdCollapse.Panel).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${accordionPanelCss}`

export const AccordionPanel = (props: AccordionPanelProps): JSX.Element => {
  const { disabled, ...rest } = props

  const expandedProps = {
    collapsible: (disabled ? 'disabled' : 'header') as CollapsibleType,
    ...rest
  }

  const accordionPanelProps = useThemedAccordionPanel(expandedProps)

  return <AccordionPanelView {...accordionPanelProps} disabled={disabled} />
}

const AccordionPanelView: FC<AccordionPanelViewProps> = (props) => {
  const {
    title,
    tagBefore,
    indicator,
    tagAfter,
    additionalText,
    elementAfter,
    actions,
    disabled,
    shouldDisableActions = true,
    ...rest
  } = props

  const titleView = title && (
    <Text className="accordion-header-title">
      {title}
    </Text>
  )

  const tagBeforeView = tagBefore && (
    <div className="accordion-header-container">
      {React.cloneElement(tagBefore, {
        disabled: disabled,
        className: 'accordion-header-tag'
      })}
    </div>
  )

  const tagAfterView = tagAfter && (
    <div className="accordion-header-container">
      {React.cloneElement(tagAfter, {
        disabled: disabled,
        className: 'accordion-header-tag'
      })}
    </div>
  )

  const indicatorView = indicator && (
    <div className="accordion-header-container">
      {React.cloneElement(indicator, {
        border: false,
        className: 'accordion-header-indicator'
      })}
    </div>
  )

  const additionalTextView = additionalText && (
    <Text
      type="BTR3"
      className="accordion-header-container accordion-header-additional-text"
    >
      {additionalText}
    </Text>
  )

  const elementAfterView = elementAfter && (
    <div className="accordion-header-container">
      {elementAfter}
    </div>
  )

  const actionsView = actions && (
    <Dropdown
      trigger={['click']}
      overlay={actions.map((action) => ({
        children: action.value,
        onClick: action.onClick,
        description: action.description,
        componentsBefore: action.componentsBefore,
        componentsAfter: action.componentsAfter
      }))}
      disabled={shouldDisableActions ? disabled : undefined}
    >
      <ActionButton
        className="accordion-header-container accordion-header-actions"
        size="large"
        icon={<Menu2 />}
        onClick={(e) => e.stopPropagation()}
        disabled={shouldDisableActions ? disabled : undefined}
      />
    </Dropdown>
  )

  const headerView = (
    <div className={cn('accordion-header', { 'accordion-header-with-actions': !!actions })}>
      <div className="accordion-header-block">
        {tagBeforeView}
        {indicatorView}
        {titleView}
        {tagAfterView}
        {additionalTextView}
      </div>
      <div className="accordion-header-block">
        {elementAfterView}
        {actionsView}
      </div>
    </div>
  )

  return <StyledAccordionPanel {...rest} header={headerView} showArrow />
}

const StyledAccordion = styled(AntdCollapse).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${accordionCss}`

export const Accordion = ({
  className,
  disabled,
  expandIconPosition = 'right',
  withBorder = true,
  ...rawProps
}: AccordionProps): JSX.Element => {
  const { testAttributes, ...props } = useTestAttribute(useThemedAccordion(rawProps))

  return (
    <div {...testAttributes}>
      <StyledAccordion
        className={cn(className, { 'accordion-without-border': !withBorder })}
        collapsible={disabled ? 'disabled' : undefined}
        expandIcon={() => <ArrowRight {...getChildTestProps('accordion', testAttributes)} />}
        expandIconPosition={expandIconPosition}
        {...props}
      />
    </div>
  )
}
