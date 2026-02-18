import { autocompletion, closeBrackets } from '@codemirror/autocomplete'
import { json, jsonParseLinter } from '@codemirror/lang-json'
import { bracketMatching } from '@codemirror/language'
import { linter, lintGutter } from '@codemirror/lint'
import type { Extension } from '@codemirror/state'
import { EditorState } from '@codemirror/state'

const getTabSize = (tab: number) => EditorState.tabSize.of(tab)

export const applyDefaultExtensions = (extensions: Extension[] = []): { [k: string]: Extension[] } => {
  return {
    json: [
      json(),
      getTabSize(2),
      bracketMatching(),
      closeBrackets(),
      autocompletion(),
      linter(jsonParseLinter(), {
        delay: 300
      }),
      lintGutter(),
      ...extensions
    ]
  }
}
