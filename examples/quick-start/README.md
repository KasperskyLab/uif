# How to start using @kaspersky/components

1. Initialize the project with `React`, `Typescript`, `less` and `antd@4.18` in the way you want. You can simply use:

    ```bash
    npm create vite my-project-name -- --template react-ts
    cd my-project-name
    npm install react@17 react-dom@17 @kaspersky/hexa-ui-icons @kaspersky/hexa-ui --legacy-peer-deps
    npm install -D @types/react@17 @types/react-dom@17 less antd@4.18 --legacy-peer-deps
    ```

2. Add this to `vite.config.ts` for correct `less` work:

    ```typescript
    css: {
      preprocessorOptions: {
        less: {
          math: "always",
          relativeUrls: true,
          javascriptEnabled: true
        },
      },
    }
    ```

3. Add important `antd` css imports in root CSS file (index.css in that case):
    
    ```css
    @import "antd/lib/style/themes/default.less";
    @import "antd/dist/antd.less";
    ```

4. Define initial rendering in main.tsx:

    ```typescript
    import React from 'react'
    import ReactDOM from 'react-dom'
    import App from './App.tsx'
    import './index.css'

    const container = document.getElementById('root')!

    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      container
    )
    ```

5. Wrap your root layout component (for ex.: App.tsx) by the `ConfigProvider`, add `GlobalStyles` and `Notification` service:

    ```typescript
    import { useState } from 'react'

    import { ConfigProvider } from '@kaspersky/hexa-ui/design-system/context/provider'
    import { GlobalStyle } from '@kaspersky/hexa-ui/design-system/global-style'
    import { ThemeKey } from '@kaspersky/hexa-ui/design-system'
    import { LangVariants } from '@kaspersky/hexa-ui/helpers/localization/types'

    import { Notification, H1 } from '@kaspersky/hexa-ui'

    function App() {
      const [themeKey] = useState<ThemeKey>(ThemeKey.Light)
      
      return (
        <ConfigProvider theme={themeKey} locale={LangVariants.EnUs}>
          <GlobalStyle />
          <Notification/>
          <H1>Hi there! I am using @kaspersky/hexa-ui!</H1>
        </ConfigProvider>
      )
    }

    export default App
    ```

6. Run with `npm run dev`
