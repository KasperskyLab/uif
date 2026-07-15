import { CompletionContext } from '@codemirror/autocomplete'
import { jsonLanguage } from '@codemirror/lang-json'
import { Diagnostic } from '@codemirror/lint'
import { Extension } from '@codemirror/state'
import { EditorView } from '@codemirror/view'
import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { useTheme } from '@design-system/theme'
import { ThemeKey } from '@design-system/types'
import { StoryColumn } from '@sb/StoryComponents'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import styled from 'styled-components'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import { CodeViewer as CodeViewerComponent } from '../CodeViewer'
import { CodeViewerProps, LintSource } from '../types'
import { codeViewerStorySettings } from './CodeViewer.stories'
import {
  basicExample,
  htmlExample,
  jsonExample,
  tsxExample,
  xmlExample,
  yaraExample
} from './examples'

type Languages = {
  yara: [],
  javascript: [],
  html: [],
  json: [],
  xml: [],
  tsx: []
}

type CodeViewerPropsStory = CodeViewerProps<Languages>

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

const meta: Meta<CodeViewerPropsStory> = {
  title: 'Hexa UI Components/CodeViewer/Stories',
  component: CodeViewerComponent as React.ComponentType<CodeViewerPropsStory>,
  tags: ['!autodocs'],
  ...codeViewerStorySettings
}

export default meta

type Story = StoryObj<CodeViewerPropsStory>

export const Basic: Story = {
  render: (args: CodeViewerPropsStory) => {
    const [currentValue, setCurrentValue] = useState(basicExample)
    const theme = useTheme()

    return (
      <StoryColumn>
        <CodeViewerComponent
          {...args}
          onChange={setCurrentValue}
        />
        <ValueContainer theme={theme.key}>
          Current value:<br />{currentValue}
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

const createJSONCustomLinter = (severity: 'error' | 'warning') => {
  const customLinter: LintSource = async (view: EditorView) => {
    const diagnostics: Diagnostic[] = []
    const doc = view.state.doc
    const docString = doc.toString()

    if (!docString.includes('hello')) {
      diagnostics.push({
        from: docString.indexOf('title'),
        to: docString.indexOf('title') + 5,
        message: 'Error',
        severity: severity
      })
    }
    return diagnostics
  }
  return customLinter
}

function createCustomCompletions (): Extension {
  const customCompletion = (context: CompletionContext) => {
    const word = context.matchBefore(/\w*/)
    if (word?.from === word?.to && !context.explicit) {
      return null
    }
    return {
      from: word?.from,
      options: [
        { label: 'match', type: 'keyword' },
        { label: 'hello', type: 'variable', info: '(World)' },
        { label: 'magic', type: 'text', apply: '⠁⭒*.✩.*⭒⠁', detail: 'macro' }
      ]
    }
  }
  return jsonLanguage.data.of({
    autocomplete: customCompletion
  })
}

export const ExampleJSONWithCompletions: Story = {
  args: {
    initialValue: jsonExample,
    language: 'json',
    resizeAxis: 'y',
    width: 1000,
    height: 300,
    completions: createCustomCompletions(),
    linter: createJSONCustomLinter('error')
  }
}

export const ExampleXML: Story = {
  args: {
    initialValue: xmlExample,
    language: 'xml'
  }
}

export const ExampleYara: Story = {
  args: {
    initialValue: yaraExample,
    language: 'yara'
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
      <CodeViewerComponent
        {...args}
        linter={createCustomLinter('error')}
      />
      <CodeViewerComponent
        {...args}
        linter={createCustomLinter('warning')}
      />
    </>
  )
}

type PaletteStory = StoryObj<ThemedPaletteProps>
export const ColorTokens: PaletteStory = {
  args: { source: componentColors.input_code_viewer },
  render: args => <ThemedPalette {...args} />
}
