import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

describe('ChangelogSearch page', () => {
  test('does not expose the source changelog as a Storybook page', () => {
    const config = readFileSync(resolve(process.cwd(), '.storybook/main.ts'), 'utf8')

    expect(config).not.toContain("    '../Changelog.mdx',")
    expect(config).not.toContain('../Changelog.mdx')
    expect(config).toContain('../Changelog.json')
  })

  test('uses the same documentation layout as component changelogs', () => {
    const page = readFileSync(resolve(process.cwd(), 'ChangelogSearch.mdx'), 'utf8')

    expect(page).toContain("import { ComponentChangelog, DocPageLayout } from '@sb/components/Documentation'")
    expect(page).toContain('<DocPageLayout>')
    expect(page).toContain('<div className="skip-toc">')
    expect(page).toContain('    <ComponentChangelog headingType="H3" />')
    expect(page).toContain('</div>')
    expect(page).toContain('</DocPageLayout>')
  })
})
