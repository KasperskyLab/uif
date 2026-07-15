import { badges } from '@sb/badges'
import {
  buildStoryArgTypesFromComponents,
  getControlsInclude
} from '@sb/components/Documentation'
import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import MetaData from '../__meta__/meta.json'
import { CodeViewer as CodeViewerComponent } from '../CodeViewer'
import { DEFAULT_SIZES } from '../constants'
import { CodeViewerProps } from '../types'
import { codeViewerPropPresentation } from './CodeViewer.controls'
import { basicExample } from './examples'

type Languages = {
  yara: [],
  javascript: [],
  html: [],
  json: [],
  xml: [],
  tsx: []
}
type CodeViewerPropsStory = CodeViewerProps<Languages>

export const codeViewerStorySettings: Meta<CodeViewerPropsStory> = {
  argTypes: buildStoryArgTypesFromComponents(
    CodeViewerComponent,
    codeViewerPropPresentation
  ),
  args: {
    resizable: true,
    resizeAxis: 'both',
    readonly: false,
    validationStatus: 'default',
    language: 'javascript',
    initialValue: basicExample,
    width: DEFAULT_SIZES.width,
    height: DEFAULT_SIZES.height,
    linesHighlighted: ['2-4', '7-10', '15'],
    testId: 'code-viewer-test-id',
    klId: 'code-viewer-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.pixsoView
  }
}

const meta: Meta<CodeViewerPropsStory> = {
  title: 'Hexa UI Components/CodeViewer',
  component: CodeViewerComponent as React.ComponentType<CodeViewerPropsStory>,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['codeViewerStorySettings'],
  ...codeViewerStorySettings
}

export default meta

type Story = StoryObj<CodeViewerPropsStory>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(codeViewerPropPresentation)
    }
  }
}
