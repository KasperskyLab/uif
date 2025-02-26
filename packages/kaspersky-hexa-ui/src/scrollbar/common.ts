import { ThemeKey } from '@design-system/types'
import { css } from 'styled-components'

export const content = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nisi justo, interdum ut cursus ac,
imperdiet non enim. Ut ultrices quis purus in accumsan. Duis nec velit eu odio scelerisque gravida nec in velit.
Etiam id cursus mi, sed porttitor felis. Proin cursus lacus erat, vel congue arcu viverra ut.
Phasellus ornare nisl sodales dui pretium, et sagittis ex feugiat.
Vivamus sollicitudin molestie tortor ac pretium.
Suspendisse lectus purus, tincidunt congue purus nec, bibendum efficitur odio.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nisi justo, interdum ut cursus ac,
imperdiet non enim. Ut ultrices quis purus in accumsan. Duis nec velit eu odio scelerisque gravida nec in velit.
Etiam id cursus mi, sed porttitor felis. Proin cursus lacus erat, vel congue arcu viverra ut.
Phasellus ornare nisl sodales dui pretium, et sagittis ex feugiat.
Vivamus sollicitudin molestie tortor ac pretium.
Suspendisse lectus purus, tincidunt congue purus nec, bibendum efficitur odio.
`

export const wrapperCss = css<{ theme: ThemeKey }>`
  height: 200px;
  width: 400px;
  p { margin: 0; }
  ${({ theme }) => {
    if (theme === 'light') {
      return 'color: black; background: white;'
    } else {
      return 'color: white; background: #1D1C28;'
    }
  }}
`
