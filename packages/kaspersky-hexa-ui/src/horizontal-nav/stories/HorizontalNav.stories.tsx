import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { Placeholder } from '@kaspersky/hexa-ui-icons/16'

import MetaData from '../__meta__/meta.json'
import { HorizontalNav as HorizontalNavComponent } from '../HorizontalNav'
import { HorizontalNavProps } from '../types'

import {
  defaultArgs,
  horizontalNavPropPresentation
} from './HorizontalNav.controls'

const Wrapper = styled.div`
  flex: 1;
  nav {
    width: 100%;
  }
`

const items = [
  {
    label: 'One',
    key: 'one',
    componentsAfter: [
      <Placeholder key="placeholder-icon" />,
      <span key="badge" style={{ fontSize: 12, color: 'var(--hexa-ui-color-control-neutral-default)' }}>9</span>
    ]
  },
  {
    label: 'Two',
    key: 'two'
  },
  {
    label: 'Three',
    key: 'three',
    selected: true
  },
  {
    label: 'Four',
    key: 'four'
  },
  {
    label: 'Five',
    key: 'five'
  },
  {
    label: 'Six',
    key: 'six',
    disabled: true
  },
  {
    label: 'Seven Eleven',
    key: 'sevenEleven'
  }
]

export const horizontalNavStorySettings: Meta<HorizontalNavProps> = {
  argTypes: buildStoryArgTypes(horizontalNavPropPresentation),
  args: {
    ...defaultArgs,
    items
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.pixsoView
  },
  decorators: [
    (Story, context) => (
      <Wrapper>
        <Story {...context} />
      </Wrapper>
    )
  ]
}

const meta: Meta<typeof HorizontalNavComponent> = {
  title: 'Hexa UI Components/HorizontalNav',
  component: HorizontalNavComponent,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['horizontalNavStorySettings'],
  ...horizontalNavStorySettings
}

export default meta

type Story = StoryObj<HorizontalNavProps>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(horizontalNavPropPresentation),
      sort: 'none'
    }
  }
}
