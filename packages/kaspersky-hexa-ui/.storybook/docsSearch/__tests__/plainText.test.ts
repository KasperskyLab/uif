import {
  closestDocumentationAnchor,
  snippetAround,
  toAnchoredText,
  toPlainText
} from '../plainText'

describe('toPlainText', () => {
  it('keeps markdown text and attribute prose, drops imports and tags', () => {
    const source = `
import { Meta } from '@storybook/addon-docs/blocks'
import {
  DocExampleBlock
} from '@sb/components/Documentation'

<Meta of={ButtonStories} />

<DocExampleBlock
  description="
    **Button** — основной интерактивный элемент
  "
/>

# Заголовок

Обычный текст
`

    const text = toPlainText(source)

    expect(text).toContain('Button — основной интерактивный элемент')
    expect(text).toContain('Заголовок')
    expect(text).toContain('Обычный текст')
    expect(text).not.toContain('import')
    expect(text).not.toContain('DocExampleBlock')
  })

  it('keeps DocExampleBlock title and description without the example code', () => {
    const text = toPlainText(`
export const alertActionsExampleCode = \`
<Alert mode="info">Alert with actions</Alert>
\`

<DocExampleBlock
  title="children"
  description="Содержимое блока: строка или произвольный узел."
  setupCode={alertActionsExampleCode}
  code={\`
    <ExpandableText>{expandableTextLong}</ExpandableText>
  \`}
/>
`)

    expect(text).toContain('children')
    expect(text).toContain('Содержимое блока: строка или произвольный узел.')
    expect(text).not.toContain('Alert with actions')
    expect(text).not.toContain('expandableTextLong')
    expect(text).not.toContain('export')
  })

  it('drops fixture exports before the documentation markup', () => {
    const text = toPlainText(`
export const notificationScope = {
  Notification,
  Button
}

<DocExampleBlock
  title="mode"
  description="Семантика уведомления."
/>
`)

    expect(text).toContain('mode')
    expect(text).toContain('Семантика уведомления.')
    expect(text).not.toContain('notificationScope')
    expect(text).not.toContain('export')
  })

  it('keeps text nested in components', () => {
    const text = toPlainText('<Text type="H3">Дизайн-система Hexa UI</Text>')

    expect(text).toContain('Дизайн-система Hexa UI')
    expect(text).not.toContain('<Text')
  })
})

const joined = (parts: { text: string }[]) => parts.map((part) => part.text).join('')

describe('snippetAround', () => {
  it('returns a window around the matched query', () => {
    const text = `${'а'.repeat(200)} уникальная фраза ${'б'.repeat(200)}`
    const parts = snippetAround(text, 'уникальная фраза')

    expect(joined(parts)).toContain('уникальная фраза')
    expect(joined(parts).startsWith('…')).toBe(true)
    expect(parts.find((part) => part.match)?.text).toBe('уникальная фраза')
  })

  it('windows around a fuzzy match instead of the document start', () => {
    const text = `${'начало документа '.repeat(20)}компонент для временной блокировки области`
    const index = text.indexOf('блокировки')
    const parts = snippetAround(text, 'блокировка', [[index + 4, index + 8]])

    expect(joined(parts)).toContain('блокировки')
    expect(joined(parts).startsWith('…')).toBe(true)
    expect(parts.find((part) => part.match)?.text).toBe('блокировки')
  })
})

describe('toAnchoredText', () => {
  const source = `
<DocPageHeader title="Card" />

<Tabs>
  <Tabs.TabPane tab="Описание" key="description">
    <DocExampleBlock description="Короткое описание карточки для страницы." />
  </Tabs.TabPane>
  <Tabs.TabPane tab="Структура" key="composition">
    <DocExampleBlock
      title="mode"
      description="Цветовой вариант карточки."
      code={\`<Card mode="base" />\`}
    />
    <DocExampleBlock
      title="mode"
      description="Повторный раздел с тем же названием."
    />
  </Tabs.TabPane>
</Tabs>
`

  it('links example prose to the tab key and the title slug', () => {
    const indexed = toAnchoredText(source)
    const mode = indexed.text.indexOf('Цветовой вариант')
    const repeated = indexed.text.indexOf('Повторный раздел')
    const intro = indexed.text.indexOf('Короткое описание')

    expect(indexed.text).not.toContain('Card mode')
    expect(closestDocumentationAnchor(indexed.anchors, mode)?.hash).toBe('composition/mode')
    expect(closestDocumentationAnchor(indexed.anchors, repeated)?.hash).toBe('composition/mode-2')
    expect(closestDocumentationAnchor(indexed.anchors, intro)?.hash).toBe('description/')
  })

  it('keeps the page heading id ahead of a section with the same title', () => {
    const indexed = toAnchoredText(`
<DocPageHeader title="Card" />
<DocExampleBlock title="Card" description="Повтор заголовка страницы в примере." />
`)
    const section = indexed.text.indexOf('Повтор заголовка')

    expect(closestDocumentationAnchor(indexed.anchors, section)?.hash).toBe('card-2')
  })
})
