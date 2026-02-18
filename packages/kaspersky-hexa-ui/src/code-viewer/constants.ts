import { htmlLanguage } from '@codemirror/lang-html'
import {
  javascriptLanguage,
  jsxLanguage,
  tsxLanguage,
  typescriptLanguage
} from '@codemirror/lang-javascript'
import { jsonLanguage } from '@codemirror/lang-json'
import { xmlLanguage } from '@codemirror/lang-xml'
import { StreamLanguage } from '@codemirror/language'

import { yara } from './parsers/yara'

export const DEFAULT_LANGUAGES = {
  yara: StreamLanguage.define(yara),
  xml: xmlLanguage,
  json: jsonLanguage,
  html: htmlLanguage,
  tsx: tsxLanguage,
  jsx: jsxLanguage,
  javascript: javascriptLanguage,
  typescript: typescriptLanguage
}

export const DEFAULT_SIZES = {
  width: 400,
  height: 200,
  minConstraints: [300, 150] as [number, number],
  maxConstraints: [1600, 1200] as [number, number]
}
