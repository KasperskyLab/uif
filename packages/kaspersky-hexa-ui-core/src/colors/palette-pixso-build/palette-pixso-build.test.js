/* eslint-disable */
describe('palette-pixso-build', () => {
  const loadModule = (overrides = {}) => {
    jest.resetModules()

    const components = overrides.COMPONENTS || ['button']
    const pixsoData = overrides.PIXSO_DATA || DEFAULT_PIXSO_DATA
    const pixsoOldData = Object.prototype.hasOwnProperty.call(overrides, 'PIXSO_OLD_DATA')
      ? overrides.PIXSO_OLD_DATA
      : null

    jest.doMock('../constants', () => ({
      COMPONENTS: components,
      PIXSO_DATA: pixsoData,
      PIXSO_OLD_DATA: pixsoOldData
    }))

    return require('./index')
  }

  const DEFAULT_PIXSO_DATA = buildPixsoData()

  function buildPixsoData () {
    return {
      'static-tokens': [
        {
          staticColors: [
            {
              Light: {
                '--static/neutral_100': 'rgba(255, 255, 255, 1)',
                '--static/neutral_850': 'rgba(34, 34, 34, 1)',
                '--static/rgb_no_alpha': 'rgb(1, 2, 3)'
              }
            },
            {
              Dark: {
                '--static/neutral_900': 'rgba(0, 0, 0, 1)'
              }
            }
          ]
        }
      ],

      'semantic-tokens': [
        {
          'Semantic tokens': [
            {
              'B2B Light': {
                '--🟢 Text/Primary': 'var(--static/neutral_850)',
                '--🟢 Border/Focus': 'var(--static/neutral_100)'
              }
            },
            {
              'B2B Dark': {
                '--🟢 Text/Primary': 'var(--static/neutral_100)'
              }
            }
          ]
        }
      ],

      'product-tokens': [
        {
          product_colors: [
            { Light: { '--🟢 Product/Button/Background': 'var(--🟢 Text/Primary)' } },
            { Dark: { '--🟢 Product/Button/Background': 'var(--🟢 Text/Primary)' } }
          ]
        }
      ],

      'widget-tokens': [
        {
          widget_colors: [
            { Light: { '--🟢 Widget/Card/Border': 'var(--static/neutral_850)' } }
          ]
        }
      ]
    }
  }

  function buildStructureOkData () {
    return {
      'static-tokens': [
        { staticColors: [{ Light: { '--static/neutral_100': 'rgba(1,2,3,1)' } }] }
      ],
      'semantic-tokens': [
        { 'Semantic tokens': [{ Light: { '--🟢 Text/Primary': 'var(--static/neutral_100)' } }] }
      ],
      'product-tokens': [
        { product_colors: [{ Light: { '--🟢 Product/A': 'var(--🟢 Text/Primary)' } }] }
      ],
      'widget-tokens': [
        { widget_colors: [{ Light: { '--🟢 Widget/A': 'var(--static/neutral_100)' } }] }
      ]
    }
  }

  test('should convert rgba to #RRGGBBAA and rgb to #RRGGBB via getPixsoStaticPalette', () => {
    const mod = loadModule()

    expect(mod.getPixsoStaticPalette()).toMatchObject({
      neutral_100: '#FFFFFFFF',
      neutral_850: '#222222FF',
      rgb_no_alpha: '#010203'
    })
  })

  test('should build CSS for static palette + semantic + product aliases + widget aliases', () => {
    const mod = loadModule()
    const css = mod.getPixsoTokensCSSVarsString()

    // static palette
    expect(css).toContain('  --color--neutral_100: #FFFFFFFF;')
    expect(css).toContain('  --color--neutral_850: #222222FF;')

    // semantic
    expect(css).toContain('  --text--primary: var(--color--neutral_850);')
    expect(css).toContain('  --border--focus: var(--color--neutral_100);')
    expect(css).toContain('.theme-dark,')
    expect(css).toContain('  --text--primary: var(--color--neutral_100);')

    // aliases
    expect(css).toContain('  --product--button--background: var(--text--primary);')
    expect(css).toContain('  --widget--card--border: var(--color--neutral_850);')
  })

  test('should resolve semantic/product/widget JS tokens to hex and ensure both themes exist', () => {
    const mod = loadModule()

    expect(mod.getSemanticTokensPixso()).toMatchObject({
      Text: { Primary: { light: '#222222FF', dark: '#FFFFFFFF' } },
      Border: { Focus: { light: '#FFFFFFFF', dark: '#FFFFFFFF' } }
    })

    expect(mod.getProductTokensPixso()).toMatchObject({
      Product: { Button: { Background: { light: '#222222FF', dark: '#FFFFFFFF' } } }
    })

    expect(mod.getWidgetTokensPixso()).toMatchObject({
      Widget: { Card: { Border: { light: '#222222FF', dark: '#222222FF' } } }
    })
  })

test('should merge pixso into base CSS: update values, append new vars, group component tokens as deprecated, and add pixso-only selectors', () => {
  const mod = loadModule({ COMPONENTS: ['button'] })

  const baseCss = `
/* header comment */

:root,
.theme-light,
.hexa-ui-light-theme {
  --text--primary: var(--color--neutral_850);
  --old--token: 321;
  --button--bg: #111111;
}

`

  const pixsoCss = `
:root,
.theme-light,
.hexa-ui-light-theme {
  --text--primary: var(--color--neutral_100);
  --new--token: 123;
  --button--bg: #FFFFFF;
}

.theme-dark {
  --b: 2;
}

`

  const [merged] = mod.mergeCssBodies(baseCss, pixsoCss)

  expect(merged).toContain('  --text--primary: var(--color--neutral_100);')
  expect(merged).not.toContain('  --text--primary: var(--color--neutral_850);')
  expect(merged).toContain('  --new--token: 123;')
  expect(merged).toContain('  --old--token: 321;')
  expect(merged).toContain('/* @deprecated tokens start */');
  expect(merged).toContain('  --button--bg: #FFFFFF;')
  expect(merged).toContain('.theme-dark {\n  --b: 2;\n}')
})

  test('should return false for compatible pixso structure and true when new data misses keys from old data', () => {
    const okData = buildStructureOkData()

    const modOk = loadModule({
      PIXSO_DATA: okData,
      PIXSO_OLD_DATA: JSON.parse(JSON.stringify(okData))
    })

    expect(modOk.checkPixsoTokensChange({ dataSwapped: false })).toBe(false)

    const oldData = {
      'static-tokens': [
        { staticColors: [{ Light: { '--static/neutral_100': 'rgba(1,2,3,1)' } }] }
      ]
    }

    const newData = {
      'static-tokens': [
        { staticColors: [{ Light: {} }] }
      ]
    }

    const modFail = loadModule({
      PIXSO_DATA: oldData,
      PIXSO_OLD_DATA: newData
    })

    expect(modFail.checkPixsoTokensChange({ dataSwapped: false })).toBe(true)
  })
})
