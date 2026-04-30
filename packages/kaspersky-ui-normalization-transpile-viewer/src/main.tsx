import React from 'react'
import ReactDOM from 'react-dom'
// Hexa UI base component styles (antd + Hexa overrides) — MUST be imported before app code
import '@kaspersky/hexa-ui/design-system/global-style/styles.css'
// Hexa UI design tokens (color palette CSS variables)
import '@kaspersky/hexa-ui/design-system/tokens/figma-css-variables.css'
import App from './App'
import './main.css'

const container = document.getElementById('root')!
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  container
)
