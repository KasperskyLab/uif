import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { renderVariants } from '@sb/StoryComponents'
import { Meta, StoryObj } from '@storybook/react'
import React, { useCallback, useState } from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import { Breadcrumbs as BreadcrumbsComponent } from '../Breadcrumbs'
import { generateRoutes } from '../helpers'
import { BreadcrumbsProps, BreadcrumbsSize, Route } from '../types'

import { breadcrumbsStorySettings } from './Breadcrumbs.stories'

const storyRoutes = generateRoutes()
const breadcrumbsSizes: BreadcrumbsSize[] = ['medium', 'small']

const meta = {
  title: 'Hexa UI Components/Breadcrumbs/Stories',
  // @ts-expect-error Stories use story-only props and map them in render
  component: BreadcrumbsComponent,
  tags: ['!autodocs'],
  ...breadcrumbsStorySettings
} satisfies Meta<typeof BreadcrumbsComponent>

export default meta

type Story = StoryObj<BreadcrumbsProps>

export const WithMoreButton: Story = {
  args: {
    routes: storyRoutes
  }
}

export const WithRouting: Story = {
  render: (args) => {
    const [routes, setRoutes] = useState<Route[]>(storyRoutes)

    const onClickHandler = useCallback((i: number) => {
      setRoutes((currentRoutes) => (
        args.size === 'medium' ? currentRoutes.slice(0, i + 1) : currentRoutes.slice(0, i)
      ))
    }, [args.size])

    return (
      <BreadcrumbsComponent
        {...args}
        routes={routes.map((route, i) => ({ ...route, onClick: () => onClickHandler(i) }))}
      />
    )
  }
}

export const Size: Story = {
  render: (args: BreadcrumbsProps) =>
    renderVariants(
      breadcrumbsSizes.map(size => ({
        label: size,
        content: <BreadcrumbsComponent {...args} size={size} />
      })),
      true
    ),
  argTypes: {
    size: { control: false }
  },
  args: {
    routes: generateRoutes(5)
  }
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.breadcrumbs },
  render: args => <ThemedPalette {...args} />
}
