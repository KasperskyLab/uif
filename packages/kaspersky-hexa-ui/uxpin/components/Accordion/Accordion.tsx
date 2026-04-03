import React from 'react'

import { Accordion as HexaAccordion, AccordionPanel } from '@src/accordion'
import { AccordionProps } from '@src/accordion/types'

const Accordion = ({
  children,
  defaultActiveKey,
  ...props
}: AccordionProps): JSX.Element => {
  const resolvedDefaultActiveKey = props.activeKey === undefined && defaultActiveKey === undefined
    ? 'overview'
    : defaultActiveKey

  return (
    <HexaAccordion defaultActiveKey={resolvedDefaultActiveKey} {...props}>
      {children ?? (
        <AccordionPanel key="overview" title="Accordion title">
          Accordion content
        </AccordionPanel>
      )}
    </HexaAccordion>
  )
}

export default Accordion
