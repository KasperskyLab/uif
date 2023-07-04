import React from 'react'
import { badges } from '@sb/badges'
import { H1, H2, H3, H4, Text } from '../typography'
import { withKnobs } from '@storybook/addon-knobs'

import { Accordion, AccordionPanel } from './Accordion'
import { withMeta } from '../../helpers/hocs/MetaComponent/withMeta'
import Meta from './__meta__/meta.json'

export default {
  title: 'Molecules/Accordion',
  component: Accordion,
  decorators: [withKnobs],
  parameters: {
    badges: [badges.needsDesignReview],
    docs: {
      page: withMeta(Meta)
    }
  }
}

export const Basic = () => {
  return (
    <Accordion accordion={true} expandIconPosition='right'>
      <AccordionPanel
        key={1}
        header={<H1>Accordion Panel 1 with H1 title</H1>}
      >
        <H2>Content of Accordion Panel 1 with H2 title</H2>
        <Text>Content of Accordion Panel 1 with common text</Text>
      </AccordionPanel>
      <AccordionPanel disabled={true} key={2} header={<H2>Disabled accordion Panel 2 with H2 title</H2>}>
        <Text type='BTR3'>Disabled accordion Panel 2 content</Text>
      </AccordionPanel>
      <AccordionPanel key={3} header={<H3>Accordion Panel 3 with H3 title</H3>}>
        <Text type='BTR4'>Accordion Panel 3 content with type BTR5</Text>
        <Text type='N5'>Other text with type N5</Text>
      </AccordionPanel>
      <AccordionPanel key={4} header={<H4>Accordion Panel 4</H4>}>
        <Text type='BTR5'>Accordion Panel 4 regular content</Text>
      </AccordionPanel>
    </Accordion>
  )
}
