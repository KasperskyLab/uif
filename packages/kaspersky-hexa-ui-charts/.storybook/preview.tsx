import { ThemeKey, ThemeProvider } from "@kaspersky/hexa-ui/design-system";
import { GlobalStyle } from "@kaspersky/hexa-ui/design-system/global-style";
import "@kaspersky/hexa-ui/design-system/global-style/styles.css";
import type { Preview } from "@storybook/react";
import React from "react";

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
      return (
        <ThemeProvider theme={ThemeKey.Light}>
          <GlobalStyle />
          {Store(context)}
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
