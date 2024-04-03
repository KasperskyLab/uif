import React, { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'
import cn from 'classnames'
import { Collapse as AntdCollapse } from 'antd'
import { CollapsibleType } from 'antd/lib/collapse/CollapsePanel'
import {
  AccordionProps,
  AccordionViewProps,
  AccordionPanelProps,
  AccordionPanelViewProps
} from './types'
import { accordionCss, accordionPanelCss } from './AccordionCss'
import { useThemedAccordion, useThemedAccordionPanel } from './useThemedAccordion'
import { Text } from '@src/typography'
import { ArrowRight } from '@kaspersky/icons/24'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

const StyledAccordionPanel = styled(AntdCollapse.Panel).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${accordionPanelCss}`

export const AccordionPanel = (props: PropsWithChildren<AccordionPanelProps>): JSX.Element => {
  const { disabled, ...rest } = props

  const expandedProps = {
    collapsible: (disabled ? 'disabled' : 'header') as CollapsibleType,
    showArrow: true,
    ...rest
  }

  const accordionPanelProps = useThemedAccordionPanel(expandedProps)

  return <AccordionPanelView {...accordionPanelProps} disabled={disabled} />
}

const AccordionPanelView: FC<AccordionPanelViewProps> = (props) => {
  const {
    header,
    title,
    tagBefore,
    indicator,
    tagAfter,
    additionalText,
    disabled,
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
      className={cn('accordion-header-container', 'accordion-header-additional-text')}
    >
      {additionalText}
    </Text>
  )

  const headerView = (
    <div className="accordion-header">
      {tagBeforeView}
      {indicatorView}
      {titleView}
      {tagAfterView}
      {additionalTextView}
    </div>
  )

  const customHeaderView = header && (
    <div className="accordion-header">
      {header}
    </div>
  )

  return <StyledAccordionPanel {...rest} header={customHeaderView || headerView} />
}

const StyledAccordion = styled(AntdCollapse).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${accordionCss}`

const StyledAccordionWrapper = styled.div.withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})``

export const Accordion = (rawProps: AccordionProps): JSX.Element => {
  const themedProps = useThemedAccordion(rawProps)
  const props = useTestAttribute(themedProps)
  return <AccordionView {...props} />
}

const AccordionView: FC<AccordionViewProps> = ({
  className,
  withBorder = true,
  expandIconPosition = 'right',
  testAttributes,
  ...rest
}: AccordionViewProps) => {
  return (
    <StyledAccordionWrapper {...testAttributes}>
      <StyledAccordion
        className={cn(className, { 'accordion-without-border': !withBorder })}
        expandIcon={() => <ArrowRight />}
        expandIconPosition={expandIconPosition}
        {...rest}
      />
    </StyledAccordionWrapper>
  )
}
