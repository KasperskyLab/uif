import { autocompletion } from '@codemirror/autocomplete'
import { jsonLanguage, jsonParseLinter } from '@codemirror/lang-json'
import { linter } from '@codemirror/lint'
import { EditorState } from '@codemirror/state'
import { render, screen, waitFor } from '@testing-library/react'
import React from 'react'

import { CodeViewer } from '../CodeViewer'
import { JSON_LANGUAGE_EXTENSIONS } from '../extensions'

type JsonLanguages = {
  json: []
}

const jsonInitialValue = '{"hello": "world"}'

describe('CodeViewer JSON language', () => {
  test('codemirror json extensions use a single @codemirror/state instance', () => {
    expect(() => {
      EditorState.create({
        doc: jsonInitialValue,
        extensions: [
          jsonLanguage,
          ...JSON_LANGUAGE_EXTENSIONS
        ]
      })
    }).not.toThrow()
  })

  test('json language support extensions are compatible with EditorState', () => {
    expect(() => {
      EditorState.create({
        doc: jsonInitialValue,
        extensions: [
          jsonLanguage,
          linter(jsonParseLinter()),
          autocompletion()
        ]
      })
    }).not.toThrow()
  })

  test('should render with json language and mount CodeMirror editor', async () => {
    render(
      <CodeViewer<JsonLanguages>
        klId="test-codeViewer-json"
        language="json"
        initialValue={jsonInitialValue}
        testId="test-codeViewer-json"
      />
    )

    await waitFor(() => {
      expect(document.querySelector('.cm-editor')).toBeInTheDocument()
    })

    expect(screen.getByTestId('test-codeViewer-json')).toHaveTextContent('hello')
  })

  test('should display json content inside CodeMirror', async () => {
    render(
      <CodeViewer<JsonLanguages>
        klId="test-codeViewer-json-content"
        language="json"
        initialValue={jsonInitialValue}
        testId="test-codeViewer-json-content"
      />
    )

    await waitFor(() => {
      expect(document.querySelector('.cm-content')).toHaveTextContent('hello')
    })
  })
})
