import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { Text } from '@src/typography'
import { Meta } from '@storybook/react-webpack5'
import React from 'react'
import styled from 'styled-components'

import MetaData from '../__meta__/meta.json'
import { PanelProps } from '../index'

export const PanelsLayout = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-self: normal;
  margin: calc(var(--spacing--padding_xl) * -1);
`

export const PanelsCol = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  align-self: normal;

  &.footer,
  &.header {
    flex: 0;
  }
`

export const OtherArea = styled.div`
  padding: var(--spacing--padding_l);
  flex: 1;
  background-image: repeating-linear-gradient(135deg, #f9f9f9, #f9f9f9 10px, transparent 10px, transparent 20px);
`

export const mockText = <Text>Lorem ipsum dolor sit amet.
Phasellus rutrum felis non ligula feugiat finibus.
Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis.
Lorem ipsum dolor sit amet.
Phasellus rutrum felis non ligula feugiat finibus.
Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis.
Lorem ipsum dolor sit amet.
Phasellus rutrum felis non ligula feugiat finibus.
Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis.
Lorem ipsum dolor sit amet.
Phasellus rutrum felis non ligula feugiat finibus.
Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis.
Lorem ipsum dolor sit amet.
Phasellus rutrum felis non ligula feugiat finibus.
Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis.
Lorem ipsum dolor sit amet.
Phasellus rutrum felis non ligula feugiat finibus.
Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis.</Text>

export const storySettings: Meta<PanelProps> = {
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.pixsoView
  },
  argTypes: {
    initialSize: { control: { type: 'range', min: 130, max: 900, step: 1 } },
    elementAfter: { control: false },
    sectionBottom: { control: false },
    padding: { control: { type: 'radio' }, options: ['large', 'medium'] }
  },
  args: {
    children: mockText,
    testId: 'panel-test-id',
    klId: 'panel-kl-id',
    closable: true,
    resizable: true,
    title: 'Panel title',
    padding: 'large'
  }
}