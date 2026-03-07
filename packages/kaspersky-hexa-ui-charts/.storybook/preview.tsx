import { ThemeKey, ThemeProvider } from "@kaspersky/hexa-ui/design-system";
import { GlobalStyle } from "@kaspersky/hexa-ui/design-system/global-style";
import "@kaspersky/hexa-ui/design-system/global-style/styles.css";
import { colorsCssVarString } from "@kaspersky/hexa-ui-core/colors/js";
import { typographyCssVarString } from "@kaspersky/hexa-ui-core/typography/js";
import type { Preview } from "@storybook/react";
import React, { useEffect } from "react";

const P = "marina,violet,marengo,grass,purple,yellow,coldgrey,emerald,orange,red".split(",");
const S = [50, 100, 200, 300, 400, 500, 600, 700];
const N = [0, 50, 100, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950];
const chartAliasesCss = `.hexa-ui-light-theme, :root {\n${P.flatMap(n => S.map(s => `  --${n}--${n}_${s}: var(--color--${n}_${s});`)).join("\n")}\n${N.map(s => `  --neutral--neutral_${s}: var(--color--neutral_${s});`).join("\n")}\n  --neutraloverlayinverted--neutral_aw_0: var(--color--neutral_aw_0);\n}\n`;

function useCoreTokens () {
  useEffect(() => {
    if (!document.getElementById("hexa-charts-tokens")) {
      const s = document.createElement("style");
      s.id = "hexa-charts-tokens";
      s.textContent = colorsCssVarString + "\n" + chartAliasesCss;
      document.head.appendChild(s);
    }
    if (!document.getElementById("hexa-typo")) {
      const s = document.createElement("style");
      s.id = "hexa-typo";
      s.textContent = typographyCssVarString;
      document.head.appendChild(s);
    }
    document.body.classList.add("hexa-ui-light-theme");
    document.body.classList.remove("hexa-ui-dark-theme");
  }, []);
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Store, context) => {
      function W () {
        useCoreTokens();
        return (
          <ThemeProvider theme={ThemeKey.Light}>
            <GlobalStyle />
            {Store(context)}
          </ThemeProvider>
        );
      }
      return <W />;
    },
  ],
};

export default preview;
