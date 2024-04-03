import React, { useState } from 'react'
import styled from 'styled-components'
import { Meta, StoryObj } from '@storybook/react'
import { StoryColumn } from '@sb/StoryComponents'
import { badges } from '@sb/badges'
import { sbHideControls } from '@helpers/storybookHelpers'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { Diagnostic } from '@codemirror/lint'
import { EditorView } from '@codemirror/view'
import MetaData from '../__meta__/meta.json'
import { CodeViewer } from '../CodeViewer'
import {
  basicExample,
  htmlExample,
  jsonExample,
  xmlExample,
  tsxExample
} from './examples'
import { DEFAULT_SIZES } from '../constants'
import { CodeViewerProps, LintSource } from '../types'
import { useTheme } from '@design-system/theme'
import { ThemeKey } from '@design-system/types'

type Languages = {
  javascript: [],
  html: [],
  json: [],
  xml: [],
  tsx: []
}
type CodeViewerPropsStory = CodeViewerProps<Languages>

const meta: Meta<CodeViewerPropsStory> = {
  title: 'Molecules/CodeViewer',
  component: CodeViewer,
  argTypes: {
    language: {
      control: { type: 'select' },
      options: ['json', 'xml', 'html']
    },
    width: {
      control: {
        type: 'range',
        min: DEFAULT_SIZES.minConstraints[0],
        max: DEFAULT_SIZES.maxConstraints[0],
        step: 10
      }
    },
    height: {
      control: {
        type: 'range',
        min: DEFAULT_SIZES.minConstraints[1],
        max: DEFAULT_SIZES.maxConstraints[1],
        step: 10
      }
    },
    ...sbHideControls([
      'theme', 'initialValue', 'minConstraints', 'maxConstraints', 'customLanguages', 'linter', 'onChange',
      'className', 'wrapperClassName'
    ])
  },
  args: {
    resizable: true,
    resizeAxis: 'both',
    readonly: false,
    invalid: false,
    valid: false,
    language: 'javascript',
    initialValue: basicExample,
    testId: 'code-viewer-test-id',
    klId: 'code-viewer-kl-id'
  },
  parameters: {
    badges: [badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.figmaView
  }
}
export default meta

type Story = StoryObj<CodeViewerPropsStory>

const ValueContainer = styled.div<{ theme: ThemeKey }>`
  font-size: 12px;
  border: 1px solid lightgray;
  padding: 4px;
  white-space: pre-wrap;
  ${({ theme }) => {
    if (theme === 'light') {
      return 'color: black;'
    } else {
      return 'color: white;'
    }
  }}
`

export const Basic: Story = {
  render: (args: CodeViewerPropsStory) => {
    const [currentValue, setCurrentValue] = useState(basicExample)

    const theme = useTheme()

    return (
      <StoryColumn>
        <CodeViewer
          {...args}
          onChange={setCurrentValue}
        />
        <ValueContainer theme={theme.key}>
          Current value:<br/>{currentValue}
        </ValueContainer>
      </StoryColumn>
    )
  }
}

export const ExampleHTML: Story = {
  args: {
    initialValue: htmlExample,
    language: 'html'
  }
}

export const ExampleJSON: Story = {
  args: {
    initialValue: jsonExample,
    language: 'json'
  }
}

export const ExampleXML: Story = {
  args: {
    initialValue: xmlExample,
    language: 'xml'
  }
}

export const ExampleTSX: Story = {
  args: {
    initialValue: tsxExample,
    language: 'tsx',
    width: 600,
    height: 600
  }
}

const createCustomLinter = (severity: 'error' | 'warning') => {
  const customLinter: LintSource = async (view: EditorView) => {
    const diagnostics: Diagnostic[] = []
    const doc = view.state.doc
    const docString = doc.toString()

    if (!docString.includes('function main(')) {
      diagnostics.push({
        from: 0,
        to: docString.length,
        message: 'Function should include a `main` function for code execution',
        severity: severity
      })
    }
    return diagnostics
  }
  return customLinter
}

export const WithLinter: Story = {
  render: (args: CodeViewerPropsStory) => (
    <>
      <CodeViewer
        {...args}
        linter={createCustomLinter('error')}
      />
      <CodeViewer
        {...args}
        linter={createCustomLinter('warning')}
      />
    </>
  )
}
