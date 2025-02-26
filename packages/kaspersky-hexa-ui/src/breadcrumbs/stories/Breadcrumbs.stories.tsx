import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { Meta, StoryObj } from '@storybook/react'
import React, { useCallback, useState } from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import MetaData from '../__meta__/meta.json'
import { Breadcrumbs } from '../Breadcrumbs'
import { generateRoutes } from '../helpers'
import { BreadcrumbsProps, Route } from '../types'

const storyRoutes = generateRoutes()

const meta: Meta<BreadcrumbsProps> = {
  title: 'Hexa UI Components/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    ...sbHideControls(['theme'])
  },
  args: {
    testId: 'breadcrumbs-test-id',
    klId: 'breadcrumbs-kl-id',
    size: 'medium',
    routes: storyRoutes
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.figmaView
  }
}
export default meta

type Story = StoryObj<BreadcrumbsProps>

export const WithMoreButton: Story = {}

export const WithRouting: Story = {
  render: (args) => {
    const [routes, setRoutes] = useState<Route[]>(storyRoutes)

    const onClickHandler = useCallback((i) => {
      setRoutes((routes) => args.size === 'medium' ? routes.slice(0, i + 1) : routes.slice(0, i))
    }, [args.size])

    return (
      <Breadcrumbs
        {...args}
        routes={routes.map((route, i) => ({ ...route, onClick: () => onClickHandler(i) }))}
      />
    )
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.breadcrumbs },
  render: args => <ThemedPalette {...args} />
}
