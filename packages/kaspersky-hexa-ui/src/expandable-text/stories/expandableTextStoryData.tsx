const EXPANDABLE_TEXT_PARAGRAPH =
  'Lorem ipsum dolor sit amet. Phasellus rutrum felis non ligula feugiat finibus. ' +
  'Aliquam a lorem at libero eleifend tristique et ut dolor. Integer tristique placerat mollis.'

/** Длинный текст для Playground, Examples и документации */
export const EXPANDABLE_TEXT_MOCK_BODY = Array(8).fill(EXPANDABLE_TEXT_PARAGRAPH).join(' ')

/** Тот же текст с переносами строк — для примеров с многострочным отображением */
export const EXPANDABLE_TEXT_MOCK_WITH_BREAKS = Array(3)
  .fill(EXPANDABLE_TEXT_MOCK_BODY)
  .join('\n')

/** setupCode для react-live в ExpandableText.documentation.mdx */
export const expandableTextLongExampleCode = `const expandableTextLong = ${JSON.stringify(EXPANDABLE_TEXT_MOCK_BODY)}
const expandableTextPreviewStyle = { minWidth: 100, maxWidth: 400 }`

/** setupCode для блока onExpand: игнорирует программный onExpand(false) при монтировании */
export const expandableTextOnExpandExampleSetupCode = `${expandableTextLongExampleCode}
const ExpandableTextOnExpandExample = () => {
  const skipInitialReset = React.useRef(true)
  const handleExpand = (expanded) => {
    if (skipInitialReset.current && !expanded) {
      skipInitialReset.current = false
      return
    }
    alert('expanded: ' + expanded)
  }
  return (
    <div style={expandableTextPreviewStyle}>
      <ExpandableText onExpand={handleExpand}>{expandableTextLong}</ExpandableText>
    </div>
  )
}`
