/**
 * Chart tokens reference --palette--palette_N which are not defined in hexa-ui-core build.
 * We inject core color tokens + alias layer so charts resolve to real colors.
 */
import { colorsCssVarString } from '@kaspersky/hexa-ui-core/colors/js'

const P = 'marina,violet,marengo,grass,purple,yellow,coldgrey,emerald,orange,red'.split(',')
const S = [50, 100, 200, 300, 400, 500, 600, 700]
const N = [0, 50, 100, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950]

const chartAliasesCss = `.hexa-ui-light-theme, :root {\n${P.flatMap(n => S.map(s => `  --${n}--${n}_${s}: var(--color--${n}_${s});`)).join('\n')}\n${N.map(s => `  --neutral--neutral_${s}: var(--color--neutral_${s});`).join('\n')}\n  --neutraloverlayinverted--neutral_aw_0: var(--color--neutral_aw_0);\n}\n`

const STYLE_ID = 'next-js-chart-tokens'

export function injectChartPaletteAliases (): void {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return
  const style = document.createElement('style')
  style.id = STYLE_ID
  style.textContent = colorsCssVarString + '\n' + chartAliasesCss
  document.head.appendChild(style)
  document.body.classList.add('hexa-ui-light-theme')
  document.body.classList.remove('hexa-ui-dark-theme')
}
