import React, { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'
import { Collapse as AntCollapse } from 'antd'
import { IAccordionProps, IAccordionPanelProps, AccordionCssConfig } from './types'
import { CollapsibleType } from 'antd/lib/collapse/CollapsePanel'
import { accordionCss, accordionPanelCss } from './AccordionCss'
import { useThemedAccordion } from './useThemedAccordion'
import { Icon } from '../icon'

const StyledAccordionPanel = styled(AntCollapse.Panel).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${accordionPanelCss}`

export const AccordionPanel = (props: PropsWithChildren<IAccordionPanelProps>): JSX.Element => {
  const {
    disabled,
    noIcon = false,
    ...rest
  } = props

  const accordionPanelProps = {
    collapsible: (disabled ? 'disabled' : 'header') as CollapsibleType,
    showArrow: !noIcon,
    ...rest
  }
  return <StyledAccordionPanel
   {...accordionPanelProps}
  />
}

const StyledAccordion = styled(AntCollapse).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`${accordionCss}
`
export const AccordionView: FC<IAccordionProps & { cssConfig: AccordionCssConfig }> = ({
  klId,
  cssConfig,
  ...rest
}) => {
  return (
    <div kl-id={klId} >
      <StyledAccordion
        expandIcon={() => <Icon name="Down" size="small" />}
        cssConfig={cssConfig}
        {...rest}
      />
    </div>
  )
}

export const Accordion = (props: IAccordionProps): JSX.Element => {
  const accordionProps = useThemedAccordion(props)
  return <AccordionView
    {...accordionProps}
  />
}
