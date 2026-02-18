import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { Meta, StoryObj } from '@storybook/react-webpack5'

import MetaData from '../__meta__/meta.json'
import { Breadcrumbs } from '../Breadcrumbs'
import { generateRoutes } from '../helpers'
import { BreadcrumbsProps } from '../types'

const storyRoutes = generateRoutes(5)

const meta: Meta<BreadcrumbsProps> = {
  title: 'Hexa UI Components/Breadcrumbs/Sizes',
  component: Breadcrumbs,
  argTypes: {
    ...sbHideControls(['theme'])
  },
  args: {
    testId: 'breadcrumbs-test-id',
    klId: 'breadcrumbs-kl-id',
    routes: storyRoutes
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.pixsoView
  },
  tags: ['!autodocs']
}
export default meta

type Story = StoryObj<BreadcrumbsProps>

export const Medium: Story = {
  args: {
    size: 'medium'
  }
}

export const Small: Story = {
  args: {
    size: 'small'
  }
}
