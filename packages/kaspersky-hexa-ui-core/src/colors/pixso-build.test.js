const fs = require('fs')
const os = require('os')
const path = require('path')

const {
  applyTokens,
  convertValue,
  parseTokensCss,
  parseTokensTs,
  readPixsoDir,
  readPixsoTokens,
  renderTokensCss,
  renderTokensTs,
  rgbaToHex,
  toCssName,
  updateFile
} = require('./pixso-build')

const { MEDIA } = require('./constants')

const PIXSO_STATIC = `
:root {
  --s50: 2;
}

:root[staticColors="Mode 1"] {
  --neutral-neutral_950: rgba(15.3, 16.9, 19.2, 1);
}
`

const PIXSO_SEMANTIC = `
:root[Semantic tokens="B2B Light"] {
  --fg-neutral-primary: var(--neutral-neutral_900);
}

:root[Semantic tokens="B2B Dark"] {
  --fg-neutral-primary: var(--neutral-neutral_0);
}
`

const PIXSO_CORE = `
:root {
  --foreground-primary: var(--fg-neutral-primary);
  --foreground-link: var(--fg-accent-bold);
}

:root[components_colors="Light"] {
  --terminal-black: var(--neutral-neutral_950);
  --only-root: 3;
}

:root[components_colors="Dark"] {
  --terminal-black: var(--neutral-neutral_0);
  --only-root: 2;
}

:root[spacing="Desktop"] {
  --gap-closest: var(--s50);
}

:root[spacing="Tablet"] {
  --gap-closest: var(--s100);
}
`

const PIXSO_GEOMETRY = `
:root {
  --button-small-radius: var(--s100);
}

:root[Geometry="Tablet"] {
  --button-small-radius: var(--s100);
}
`

const PIXSO_WIDGETS = `
:root {
  --widget-bg-enabled: var(--neutral-neutral_0);
}

:root[widget_tokens="Dark"] {
  --widget-bg-enabled: var(--neutral-neutral_950);
}
`

const BASE_CSS = `/*! This file was created automatically. */
/*! old banner */

/* @deprecated tokens start */

:root {
  --old--token: #111111;
  --terminal--black: var(--color--neutral_900);
}

.theme-dark,
.hexa-ui-dark-theme {
  --old--token: #222222;
}

/* @deprecated tokens end */

:root {
  --color--neutral_0: #FFFFFFFF;
  --color--neutral_900: #0F1113FF;
  --only--root: 1px;
}

.theme-dark,
.hexa-ui-dark-theme {
  --widget--bg--enabled: var(--color--neutral_900);
  --terminal--black: var(--color--neutral_0);
}

:root,
.theme-light,
.hexa-ui-light-theme {
  --widget--bg--enabled: var(--color--neutral_0);
  --terminal--black: var(--color--neutral_900);
  --foreground--primary: var(--fg--neutral--primary);
}
`

const allPixsoTokens = () => [PIXSO_CORE, PIXSO_WIDGETS, PIXSO_STATIC, PIXSO_SEMANTIC].flatMap(readPixsoTokens)

const declsOf = (doc, selectorPart, { section = 'supported', media = null } = {}) =>
  doc[section]
    .find((block) => block.media === media && block.selector.includes(selectorPart))
    .decls.map(({ name, value }) => `${name}: ${value}`)

describe('token names', () => {
  test('should turn a single Pixso dash into a double one, keep the case and replace spaces with _', () => {
    expect(toCssName('--button-extraLarge-padding-x')).toBe('--button--extraLarge--padding--x')
    expect(toCssName('--section message-collapsed-max-height')).toBe('--section_message--collapsed--max--height')
    expect(toCssName('--s200')).toBe('--s200')
  })

  test('should name palette tokens with the --color-- prefix and the last name segment', () => {
    expect(toCssName('--neutral_alpha-neutral_0_alpha_90', { palette: true })).toBe('--color--neutral_0_alpha_90')
  })
})

describe('token values', () => {
  test('should convert rgba to hex', () => {
    expect(rgbaToHex('rgba(246.126, 247.0236, 248.574, 1)')).toBe('#F6F7F9FF')
    expect(rgbaToHex('rgba(0, 0, 0, 0.5)')).toBe('#00000080')
    expect(rgbaToHex('rgb(1, 2, 3)')).toBe('#010203')
  })

  test('should add px to numbers except font_weight and keep strings as is', () => {
    expect(convertValue('--s200', '8')).toBe('8px')
    expect(convertValue('--letter_spacing--condensed', '-0.5')).toBe('-0.5px')
    expect(convertValue('--font_weight--regular', '400')).toBe('400')
    expect(convertValue('--font_family--body', 'Kaspersky Sans Text')).toBe('Kaspersky Sans Text')
  })

  test('should pass var() references through the resolver', () => {
    expect(convertValue('--x', 'var(--a-b)', (reference) => `${reference}!`)).toBe('var(--a-b!)')
  })
})

describe('reading the Pixso export', () => {
  test('should put Light/Dark modes into their themes, Desktop into :root and Tablet/Mobile into :root inside @media', () => {
    const tokens = readPixsoTokens(PIXSO_CORE).map(({ kind, media, name }) => [kind, media, name].filter(Boolean).join(' '))

    expect(tokens).toEqual([
      'root --foreground--primary',
      'root --foreground--link',
      'light --terminal--black',
      'light --only--root',
      'dark --terminal--black',
      'dark --only--root',
      'root --geometry--gap--closest',
      `root @media ${MEDIA.tablet} --geometry--gap--closest`
    ])
  })

  test('should treat a bare :root next to a Dark block with the same tokens as the light theme', () => {
    expect(readPixsoTokens(PIXSO_WIDGETS).map(({ kind }) => kind)).toEqual(['light', 'dark'])
  })

  test('should traet bare :root next to a Tablet block with the same tokens as Desktop geometry', () => {
    const tokens = readPixsoTokens(PIXSO_GEOMETRY).map(({ kind, media, name }) => [kind, media, name].filter(Boolean).join(' '))

    expect(tokens).toEqual([
      'root --geometry--button--small--radius',
      `root @media ${MEDIA.tablet} --geometry--button--small--radius`
    ])
  })

  test('should name the staticColors palette --color--<name> and keep other static token names', () => {
    expect(readPixsoTokens(PIXSO_STATIC).map(({ name }) => name)).toEqual(['--s50', '--color--neutral_950'])
  })
})

describe('merging into tokens.css', () => {
  const merge = () => {
    const doc = parseTokensCss(BASE_CSS)
    const report = applyTokens(doc, allPixsoTokens())
    return { doc, report }
  }

  test('should update existing tokens in place in every block of their theme, including deprecated', () => {
    const { doc } = merge()

    expect(declsOf(doc, ':root', { section: 'deprecated' })).toContain('--terminal--black: var(--color--neutral_950)')
    expect(declsOf(doc, '.hexa-ui-light-theme')).toContain('--terminal--black: var(--color--neutral_950)')
    expect(declsOf(doc, '.hexa-ui-dark-theme')).toContain('--terminal--black: var(--color--neutral_0)')
    expect(declsOf(doc, '.hexa-ui-dark-theme')).toContain('--widget--bg--enabled: var(--color--neutral_950)')
  })

  test('should not remove anything and should preserve the order of sections and tokens', () => {
    const { doc } = merge()

    expect(declsOf(doc, '.hexa-ui-dark-theme', { section: 'deprecated' })).toEqual(['--old--token: #222222'])
    expect(declsOf(doc, ':root').slice(0, 3)).toEqual([
      '--color--neutral_0: #FFFFFFFF',
      '--color--neutral_900: #0F1113FF',
      '--only--root: 3px'
    ])
  })

  test('should append new tokens to the block of their theme and resolve references to them', () => {
    const { doc } = merge()

    expect(declsOf(doc, ':root').slice(3)).toEqual([
      '--foreground--link: var(--fg--accent--bold)',
      '--geometry--gap--closest: var(--s50)',
      '--s50: 2px',
      '--color--neutral_950: #0F1113FF'
    ])
    expect(declsOf(doc, '.hexa-ui-light-theme')).toContain('--fg--neutral--primary: var(--color--neutral_900)')
    expect(declsOf(doc, '.hexa-ui-dark-theme')).toEqual([
      '--widget--bg--enabled: var(--color--neutral_950)',
      '--terminal--black: var(--color--neutral_0)',
      '--only--root: 2px',
      '--fg--neutral--primary: var(--color--neutral_0)'
    ])
  })

  test('should override the token for Tablet mode in :root inside @media with the condition from MEDIA', () => {
    const { doc } = merge()

    expect(declsOf(doc, ':root', { media: `@media ${MEDIA.tablet}` })).toEqual(['--geometry--gap--closest: var(--s100)'])
    expect(doc.supported.filter(({ media }) => media)).toHaveLength(1)
  })

  test('should list changes in the report and warn about unknown references', () => {
    const { report } = merge()

    expect(report.updated).toContain('--terminal--black: var(--color--neutral_900) -> var(--color--neutral_950)')
    expect(report.added).toContain('--geometry--gap--closest')
    expect(report.added).toContain(`--geometry--gap--closest @media ${MEDIA.tablet}`)
    expect(report.unchanged).toBe(3)
    expect([...report.warnings]).toEqual(['неизвестная ссылка var(--fg-accent-bold)', 'неизвестная ссылка var(--s100)'])
  })

  test('should create a missing theme block with our selectors', () => {
    const doc = parseTokensCss('/*! banner */\n\n:root {\n  --a: 1px;\n}\n')
    applyTokens(doc, readPixsoTokens(PIXSO_SEMANTIC))

    expect(doc.supported.map(({ selector }) => selector)).toEqual([
      ':root',
      ':root,\n.theme-light,\n.hexa-ui-light-theme',
      '.theme-dark,\n.hexa-ui-dark-theme'
    ])
  })
})

describe('tokens.css and tokens.ts', () => {
  test('should render tokens.css as banner, deprecated section, then current blocks, and parse it back', () => {
    const doc = parseTokensCss(BASE_CSS)
    const rendered = renderTokensCss(doc)

    expect(rendered).toMatch(/^\/\*! This file was created automatically\. \*\/\n\/\*! Use `npm run update-colors`/)
    expect(rendered.indexOf('/* @deprecated tokens start */')).toBeLessThan(rendered.indexOf('/* @deprecated tokens end */'))
    expect(rendered.indexOf('/* @deprecated tokens end */')).toBeLessThan(rendered.indexOf('--color--neutral_0'))
    expect(parseTokensCss(rendered)).toEqual(doc)
  })

  test('should render media overrides in :root inside @media with the condition from MEDIA, and parse them back', () => {
    const doc = parseTokensCss(BASE_CSS)
    applyTokens(doc, readPixsoTokens(PIXSO_CORE))
    const rendered = renderTokensCss(doc)

    expect(rendered).toContain('/* @deprecated tokens end */\n\n:root {')
    expect(rendered).not.toContain('@custom-media')
    expect(rendered).toContain(`@media ${MEDIA.tablet} {\n  :root {\n    --geometry--gap--closest: var(--s100);\n  }\n}`)
    expect(parseTokensCss(rendered)).toEqual(doc)
  })

  test('should render tokens.ts as cssVarString and cssVarDeprecatedString, and parse it back', () => {
    const doc = parseTokensCss(BASE_CSS)
    applyTokens(doc, readPixsoTokens(PIXSO_CORE))
    const rendered = renderTokensTs(doc)

    expect(rendered).toContain('export const cssVarString = `\n:root {')
    expect(rendered).toContain('export const cssVarDeprecatedString = `\n:root {\n  --old--token: #111111;')
    expect(parseTokensTs(rendered)).toEqual(doc)
  })

  test('should preserve CRLF line endings in updateFile', () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'pixso-build-'))
    const file = path.join(dir, 'tokens.css')
    fs.writeFileSync(file, BASE_CSS.replace(/\n/g, '\r\n'))

    updateFile(file, parseTokensCss, renderTokensCss, readPixsoTokens(PIXSO_STATIC), { check: false })
    const result = fs.readFileSync(file, 'utf8')

    expect(result).toContain('--s50: 2px;\r\n')
    expect(result).not.toMatch(/[^\r]\n/)
  })
})

describe('export folder', () => {
  const makeDir = (files) => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'pixso-dir-'))
    Object.entries(files).forEach(([name, content]) => fs.writeFileSync(path.join(dir, name), content))
    return dir
  }

  test('should read only files with allowed names', () => {
    const dir = makeDir({ 'widgets.css': PIXSO_WIDGETS, 'static.css': PIXSO_STATIC, 'notes.txt': '' })

    expect(readPixsoDir(dir).map(({ file, tokens }) => `${file}: ${tokens.length}`)).toEqual(['widgets.css: 2', 'static.css: 2'])
  })

  test('should throw on a file with a disallowed name or an empty folder', () => {
    expect(() => readPixsoDir(makeDir({ 'variables.css': PIXSO_STATIC }))).toThrow('variables.css')
    expect(() => readPixsoDir(makeDir({}))).toThrow('нет CSS-файлов')
  })
})
