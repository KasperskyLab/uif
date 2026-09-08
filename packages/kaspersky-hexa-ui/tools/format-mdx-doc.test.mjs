import assert from 'node:assert/strict'
import {
  mkdtemp,
  readFile,
  rm,
  symlink,
  writeFile
} from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

import {
  findDocExampleAttributes,
  formatMdxDocument,
  formatMdxFiles,
  getFilesFromCliArguments,
  normalizeDocExampleBlockIndentation,
  normalizeStructuralJsxIndentation
} from './format-mdx-doc.mjs'

const DOCUMENTATION_DIRECTORY = fileURLToPath(new URL('../src/', import.meta.url))

const makeDocumentationTempDirectory = async t => {
  const directory = await mkdtemp(join(DOCUMENTATION_DIRECTORY, '.format-mdx-test-'))
  t.after(() => rm(directory, { recursive: true, force: true }))
  return directory
}

const minimalDocumentation = code => [
  '<DocPageLayout>',
  '  <Tabs>',
  `    <DocExampleBlock code={'${code}'} />`,
  '  </Tabs>',
  '</DocPageLayout>',
  ''
].join('\n')

test('formats static code into a readable template literal', async () => {
  const source = '<DocExampleBlock code={\'<Button mode="secondary" text="Save" />\\n<Button mode="primary" text="Submit" />\'} />'

  const result = await formatMdxDocument(source, 'Button.documentation.mdx')

  assert.match(result.text, /<Button\s+mode="secondary"\s+text="Save"\s+\/>/)
  assert.match(result.text, /<Button\s+mode="primary"\s+text="Submit"\s+\/>/)
  assert.doesNotMatch(result.text, /<>/)
  assert.deepEqual(result.unsupported, [])
})

test('aligns DocExampleBlock with its JSX parent without changing code content', () => {
  const source = `<Tabs.TabPane>
        <DocExampleBlock
  title='Example'
          code={\`\n            <Button />\n          \`}
  />
</Tabs.TabPane>
`

  const result = normalizeDocExampleBlockIndentation(source)

  assert.equal(result, `<Tabs.TabPane>
  <DocExampleBlock
    title='Example'
    code={\`\n            <Button />\n          \`}
  />
</Tabs.TabPane>
`)
})

test('normalizes indentation for all structural JSX tags', () => {
  const source = [
    '<Tabs>',
    "<Tabs.TabPane tab='Properties'>",
    '<Description of={Stories} />',
    '</Tabs.TabPane>',
    "  <Tabs.TabPane tab='Design'>",
    '<Space>',
    '<Text>Title</Text>',
    '</Space>',
    '  </Tabs.TabPane>',
    '</Tabs>',
    ''
  ].join('\n')

  const result = normalizeStructuralJsxIndentation(source)

  assert.equal(result, [
    '<Tabs>',
    "  <Tabs.TabPane tab='Properties'>",
    '    <Description of={Stories} />',
    '  </Tabs.TabPane>',
    "  <Tabs.TabPane tab='Design'>",
    '    <Space>',
    '      <Text>Title</Text>',
    '    </Space>',
    '  </Tabs.TabPane>',
    '</Tabs>',
    ''
  ].join('\n'))
})

test('normalizes JSX attribute lines without changing their values', () => {
  const source = [
    '<Tabs>',
    "  <Tabs.TabPane tab='Design'>",
    '      <DocumentationArgsTable',
    '  rows={buildPresentationOnlyRows(chipDesignPropPresentation)}',
    '/>',
    '  </Tabs.TabPane>',
    '</Tabs>',
    ''
  ].join('\n')

  const result = normalizeStructuralJsxIndentation(source)

  assert.equal(result, [
    '<Tabs>',
    "  <Tabs.TabPane tab='Design'>",
    '    <DocumentationArgsTable',
    '      rows={buildPresentationOnlyRows(chipDesignPropPresentation)}',
    '    />',
    '  </Tabs.TabPane>',
    '</Tabs>',
    ''
  ].join('\n'))
})

test('leaves one blank line between Tabs and its first pane', async () => {
  const source = "<Tabs defaultActiveKey='description'>\n<Tabs.TabPane tab='Описание' key='description' />\n</Tabs>"

  const result = await formatMdxDocument(source, 'Example.documentation.mdx')

  assert.match(result.text, /<Tabs defaultActiveKey="description">\n\n {2}<Tabs\.TabPane tab="Описание" key="description" \/>/)
})

test('leaves blank lines after opening and closing Tabs panes', async () => {
  const source = "<Tabs>\n<Tabs.TabPane tab='Описание'>\n<Description of={Stories} />\n</Tabs.TabPane>\n</Tabs>"

  const result = await formatMdxDocument(source, 'Example.documentation.mdx')

  assert.match(result.text, /<Tabs\.TabPane tab="Описание">\n\n {4}<Description of=\{Stories\} \/>\n\n {2}<\/Tabs\.TabPane>\n\n<\/Tabs>/)
})

test('leaves one blank line after closing Tabs', async () => {
  const source = "<DocPageLayout>\n<Tabs>\n<Tabs.TabPane tab='Описание' />\n</Tabs>\n</DocPageLayout>"

  const result = await formatMdxDocument(source, 'Example.documentation.mdx')

  assert.match(result.text, /<\/Tabs>\n\n<\/DocPageLayout>/)
})

test('uses normalized DocExampleBlock indentation for code content', async () => {
  const source = [
    '<Tabs>',
    '  <Tabs.TabPane>',
    '<DocExampleBlock code={"<Button />"} />',
    '  </Tabs.TabPane>',
    '</Tabs>',
    ''
  ].join('\n')

  const result = await formatMdxDocument(source, 'Button.documentation.mdx')

  assert.match(result.text, / {4}<DocExampleBlock code=\{`\n {6}<Button \/>\n {4}`\} \/>/)
})

test('indents a code example inside its template literal', async () => {
  const source = '<DocExampleBlock code={\'<Button />\'} />'

  const result = await formatMdxDocument(source, 'Button.documentation.mdx')

  assert.match(result.text, /code=\{`\n {2}<Button \/>\n`\}/)
})

test('puts DocExampleBlock attributes on separate lines when restored code is multiline', async () => {
  const source = '<DocExampleBlock title="Example" description="A description" code={\'<Button />\'} />'

  const result = await formatMdxDocument(source, 'Button.documentation.mdx')

  assert.match(result.text, /<DocExampleBlock\n {2}title="Example"\n {2}description="A description"\n {2}code=\{`\n {4}<Button \/>\n {2}`\}\n\/>/)
})

test('keeps DocExampleBlock attributes multiline when its example cannot be parsed', async () => {
  const source = `<DocExampleBlock title='ReactNode в заголовке вкладки' description='В **tab** можно передать ReactNode, например поле ввода. Такой вариант подходит для специальных интерфейсных сценариев, где управляющий элемент является частью заголовка.' code={\`
  <TabsComponent.TabPane /> </TabsComponent.TabPane>
\`} scope={{ Button, TabsComponent }} />`

  const result = await formatMdxDocument(source, 'Tabs.documentation.mdx')

  assert.match(result.text, /<DocExampleBlock\n {2}title="ReactNode в заголовке вкладки"\n {2}description="В \*\*tab\*\*/)
  assert.match(result.text, / {2}code=\{`\n[\s\S]*\n {2}`\}\n {2}scope=\{\{ Button, TabsComponent \}\}\n\/>/)
})

test('keeps the ReactNode DocExampleBlock attributes multiline in the Tabs documentation', async () => {
  const fixture = fileURLToPath(new URL('../src/tabs/stories/Tabs.documentation.mdx', import.meta.url))
  const result = await formatMdxDocument(await readFile(fixture, 'utf8'), fixture)

  assert.match(result.text, /<DocExampleBlock\n\s+title="ReactNode в заголовке вкладки"\n\s+description="В \*\*tab\*\*/)
})

test('does not add a trailing semicolon to a JSX example', async () => {
  const source = '<DocExampleBlock code={\'<Badge mode="info" text="New" />\'} />'

  const result = await formatMdxDocument(source, 'Badge.documentation.mdx')

  assert.match(result.text, /<Badge mode="info" text="New" \/>\n/)
  assert.doesNotMatch(result.text, /\/>;/)
})

test('uses single quotes in JavaScript before JSX without adding a trailing semicolon', async () => {
  const source = '<DocExampleBlock code={\'const label = "New";\n<Badge text={label} />\'} />'

  const result = await formatMdxDocument(source, 'Badge.documentation.mdx')

  assert.match(result.text, / {2}const label = 'New'\n {2};<Badge text=\{label\} \/>\n/)
  assert.doesNotMatch(result.text, /<Badge text=\{label\} \/>;/)
})

test('uses single quotes for JavaScript in surrounding MDX', async () => {
  const source = 'import { Button } from "@src/button";\n\n<DocExampleBlock code={\'<Button/>\'} />'

  const result = await formatMdxDocument(source, 'Button.documentation.mdx')

  assert.match(result.text, /^import \{ Button \} from '@src\/button'\n/)
})

test('uses double quotes for safe JSX attributes on component members', async () => {
  const fixture = fileURLToPath(new URL('../src/accordion/stories/Accordion.documentation.mdx', import.meta.url))
  const source = (await readFile(fixture, 'utf8')).replace(
    /<Tabs\.TabPane tab=(?:'|")Описание(?:'|") key=(?:'|")description(?:'|")>/,
    '<Tabs.TabPane tab="Описание" key="description">'
  )

  const result = await formatMdxDocument(source, fixture)

  assert.match(result.text, /<Tabs\.TabPane tab="Описание" key="description">/)
})

test('uses double quotes for JSX attributes inside code examples', async () => {
  const source = '<DocExampleBlock code={\'<Button mode="primary" />\'} />'

  const result = await formatMdxDocument(source, 'Button.documentation.mdx')

  assert.match(result.text, /<Button mode="primary" \/>/)
})

test('preserves description line breaks and collapses repeated spaces', async () => {
  const source = '<DocExampleBlock description="Первая  строка\nпродолжение первого абзаца\n\nВторой абзац" />'

  const result = await formatMdxDocument(source, 'Example.documentation.mdx')

  assert.match(result.text, /description="\n {2}Первая строка\n {2}продолжение первого абзаца\n\n {2}Второй абзац"/)
})

test('writes a multiline description as an indented JSX attribute', async () => {
  const source = '<DocExampleBlock description={"Первый абзац.\\n\\nВторой абзац."} />'

  const result = await formatMdxDocument(source, 'Example.documentation.mdx')

  assert.match(result.text, /description="\n {2}Первый абзац\.\n\n {2}Второй абзац\."/)
  assert.doesNotMatch(result.text, /Второй абзац\.\n'/)
})

test('preserves an apostrophe in a multiline description with double quotes', async () => {
  const source = '<DocExampleBlock description={\'Первый абзац.\\n\\nBob\\\'s note.\'} />'

  const result = await formatMdxDocument(source, 'Example.documentation.mdx')

  assert.match(result.text, /Bob's note\./)
})

test('uses double quotes around a multiline description', async () => {
  const fixture = fileURLToPath(new URL('../src/accordion/stories/Accordion.documentation.mdx', import.meta.url))
  const fixtureSource = await readFile(fixture, 'utf8')
  const [description] = findDocExampleAttributes(fixtureSource).descriptions
  const source = fixtureSource.slice(0, description.valueStart) +
    "'" +
    fixtureSource.slice(description.valueStart + 1, description.end - 1) +
    "'" +
    fixtureSource.slice(description.end)

  const result = await formatMdxDocument(source, fixture)

  assert.match(result.text, /description="\n[\s\S]*\*\*onClick\*\*\)\./)
})

test('collapses repeated blank lines across the whole MDX document', async () => {
  const fixture = fileURLToPath(new URL('../src/accordion/stories/Accordion.documentation.mdx', import.meta.url))
  const source = (await readFile(fixture, 'utf8')).replace(
    / {4}\/>\n(?:[\t ]*\n)+ {4}<DocExampleBlock\n {6}title="accordion"/,
    '    />\n\n\n\n    <DocExampleBlock\n      title="accordion"'
  )

  const result = await formatMdxDocument(source, 'Example.documentation.mdx')

  assert.doesNotMatch(result.text, /\n[\t ]*\n[\t ]*\n/)
  assert.match(result.text, /<DocExampleBlock[\s\S]*?\/>\n\n\s*<DocExampleBlock/)
})

test('leaves one blank line between adjacent DocExampleBlocks', async () => {
  const source = '<DocExampleBlock title="First" />\n<DocExampleBlock title="Second" />'

  const result = await formatMdxDocument(source, 'Example.documentation.mdx')

  assert.match(result.text, /<DocExampleBlock title="First" \/>\n\n<DocExampleBlock title="Second" \/>/)
})

test('does not let MDX embedded formatting corrupt a JavaScript example', async () => {
  const source = '<DocExampleBlock code={\'function App() { const ref = React.useRef(null); return (<Space gap={24} align="start"><div ref={ref} style={{ position: "relative", minWidth: 280 }}><Dropdown visible overlay={[{ type: "submenu", children: [{ children: "Nested" }] }]}><span /></Dropdown></div></Space>) }\'} />'

  const result = await formatMdxDocument(source, 'Example.documentation.mdx')

  assert.match(result.text, / {2}function App\(\) \{\n {4}const ref = React\.useRef\(null\)\n {4}return \(/)
})

test('preserves dollar signs in a code example', async () => {
  const source = '<DocExampleBlock code={\'<InputNumber prefix="$" />\'} />'

  const result = await formatMdxDocument(source, 'Example.documentation.mdx')

  assert.match(result.text, /<InputNumber prefix="\$" \/>/)
})

test('resolves an explicit documentation file from CLI arguments', async () => {
  assert.deepEqual(
    await getFilesFromCliArguments(['src/tabs/stories/Tabs.documentation.mdx']),
    [fileURLToPath(new URL('../src/tabs/stories/Tabs.documentation.mdx', import.meta.url))]
  )
})

test('rejects explicit files outside src documentation', async () => {
  await assert.rejects(
    async () => getFilesFromCliArguments(['Changelog.mdx']),
    /Only src\/\*\*\/\*\.documentation\.mdx files can be formatted/
  )
  await assert.rejects(
    async () => getFilesFromCliArguments(['src/tabs/stories/Tabs.mdx']),
    /Only src\/\*\*\/\*\.documentation\.mdx files can be formatted/
  )
  await assert.rejects(
    async () => getFilesFromCliArguments(['src/tabs/stories/Tabs.documentation.md']),
    /Only src\/\*\*\/\*\.documentation\.mdx files can be formatted/
  )
  await assert.rejects(
    async () => getFilesFromCliArguments(['src/missing/Missing.documentation.mdx']),
    /Only src\/\*\*\/\*\.documentation\.mdx files can be formatted/
  )
})

test('rejects a documentation symlink that resolves outside src', async t => {
  const outsideDirectory = await mkdtemp(join(tmpdir(), 'format-mdx-outside-'))
  const insideDirectory = await makeDocumentationTempDirectory(t)
  const outsideFile = join(outsideDirectory, 'Outside.documentation.mdx')
  const link = join(insideDirectory, 'Outside.documentation.mdx')
  t.after(() => rm(outsideDirectory, { recursive: true, force: true }))
  await writeFile(outsideFile, minimalDocumentation('<Button/>'))
  await symlink(outsideFile, link)

  await assert.rejects(
    formatMdxFiles({ check: true, files: [link] }),
    /Only src\/\*\*\/\*\.documentation\.mdx files can be formatted/
  )
})

test('rejects a documentation symlink to another MDX format', async t => {
  const directory = await makeDocumentationTempDirectory(t)
  const target = join(directory, 'Other.mdx')
  const link = join(directory, 'Other.documentation.mdx')
  await writeFile(target, minimalDocumentation('<Button/>'))
  await symlink(target, link)

  await assert.rejects(
    formatMdxFiles({ check: true, files: [link] }),
    /Only src\/\*\*\/\*\.documentation\.mdx files can be formatted/
  )
})

test('rejects a documentation file with an unsupported structure', async t => {
  const directory = await makeDocumentationTempDirectory(t)
  const file = join(directory, 'Other.documentation.mdx')
  await writeFile(file, '<Meta title="Other" />\n')

  await assert.rejects(
    formatMdxFiles({ check: true, files: [file] }),
    /Unsupported documentation structure.*DocPageLayout, Tabs, DocExampleBlock/
  )
})

test('escapes template delimiters while preserving example text', async () => {
  const source = '<DocExampleBlock setupCode={\'const label = `value: ${id}`\'} />'

  const result = await formatMdxDocument(source, 'Example.documentation.mdx')

  assert.ok(result.text.includes('const label = \\`value: \\${id}\\`'))
})

test('ignores a dynamic code expression without failing the check', async () => {
  const source = '<DocExampleBlock code={getExample()} />'

  const result = await formatMdxDocument(source, 'Example.documentation.mdx')

  assert.match(result.text, /code=\{getExample\(\)\}/)
  assert.deepEqual(result.unsupported, [])
})

test('preserves an invalid code example instead of failing the document', async () => {
  const source = '<DocExampleBlock code={\'function App() { const value =\\nreturn <Button /> }\'} />'

  const result = await formatMdxDocument(source, 'Example.documentation.mdx')

  assert.match(result.text, / {2}function App\(\) \{ const value =\n {2}return <Button \/> \}/)
})

test('does not accumulate indentation for an invalid code example', async () => {
  const source = `<DocExampleBlock title='Example' code={\`
        <TabsComponent.TabPane /> </TabsComponent.TabPane>
      \`} scope={{ TabsComponent }} />`

  const first = await formatMdxDocument(source, 'Tabs.documentation.mdx')
  const second = await formatMdxDocument(first.text, 'Tabs.documentation.mdx')

  assert.equal(second.text, first.text)
})

test('preserves comments after a static template literal', async () => {
  const source = '<DocExampleBlock code={`<Button/>` /* not_a_secret */} />'

  const result = await formatMdxDocument(source, 'Example.documentation.mdx')

  assert.ok(result.text.includes('/* not_a_secret */'))
  assert.match(result.text, /<Button \/>/)
})

test('writes a stable MDX layout in one formatter invocation', async t => {
  const fixture = fileURLToPath(new URL('../src/badge/stories/Badge.documentation.mdx', import.meta.url))
  const directory = await makeDocumentationTempDirectory(t)
  const file = join(directory, 'Badge.documentation.mdx')
  const fixtureSource = await readFile(fixture, 'utf8')
  const source = fixtureSource.replace(
    'а не **Badge**."\n/>\n\n<DocExampleBlock',
    'а не **Badge**."\n/>\n<DocExampleBlock'
  )
  await writeFile(file, source)

  await formatMdxFiles({ check: false, files: [file] })
  const result = await formatMdxFiles({ check: true, files: [file] })

  assert.deepEqual(result.changed, [])
})

test('check mode reports an unformatted documentation file without writing it', async t => {
  const directory = await makeDocumentationTempDirectory(t)
  const file = join(directory, 'Example.documentation.mdx')
  const source = minimalDocumentation('<Button/>')
  await writeFile(file, source)

  const result = await formatMdxFiles({ check: true, files: [file] })

  assert.deepEqual(result.changed, [file])
  assert.equal(await readFile(file, 'utf8'), source)
})
