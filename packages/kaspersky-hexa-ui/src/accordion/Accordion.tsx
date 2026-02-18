import { getChildTestProps, useTestAttribute } from '@helpers/hooks/useTestAttribute'
import cn from 'classnames'
import RcCollapse from 'rc-collapse'
import React, { FC, memo } from 'react'

import { ArrowRight } from '@kaspersky/hexa-ui-icons/24'

import styles from './Accordion.module.scss'
import { accordionMotion } from './AccordionMotion'
import { AccordionProps } from './types'

export const Accordion: FC<AccordionProps> = memo(({
  className,
  disabled,
  expandIconPosition = 'right',
  withBorder = true,
  ...rawProps
}) => {
  const { testAttributes, ...props } = useTestAttribute(rawProps)
  return (
    <div {...testAttributes}>
      <RcCollapse
        className={cn(
          className,
          styles.accordion,
          styles[`hexa-ui-accordion-icon-position-${expandIconPosition}`],
          { [styles['hexa-ui-accordion-without-border']]: !withBorder },
          { [styles['hexa-ui-accordion-with-border']]: withBorder }
        )}
        collapsible={disabled ? 'disabled' : undefined}
        expandIcon={() => <ArrowRight {...getChildTestProps('expand-icon', testAttributes)} />}
        openMotion={accordionMotion}
        {...props}
      />
    </div>
  )
})

Accordion.displayName = 'Accordion'
