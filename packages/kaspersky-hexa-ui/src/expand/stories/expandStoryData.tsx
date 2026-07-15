import { Text } from '@src/typography'
import React from 'react'

const EXPAND_MOCK_PARAGRAPH = `Lorem ipsum dolor sit amet.
    Phasellus rutrum felis non ligula feugiat finibus.
    Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis.`

/** Длинный текст для Playground, Examples и документации */
export const EXPAND_MOCK_TEXT_BODY = Array(8).fill(EXPAND_MOCK_PARAGRAPH).join('\n    ')

export const expandMockText = (
  <Text>
    {EXPAND_MOCK_TEXT_BODY}
  </Text>
)

/** setupCode для react-live в Expand.documentation.mdx */
export const expandLongTextExampleCode = `const expandLongText = (
  <Text>{${JSON.stringify(EXPAND_MOCK_TEXT_BODY)}}</Text>
)`
