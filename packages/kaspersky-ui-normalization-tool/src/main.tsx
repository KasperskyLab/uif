import React from 'react'
import ReactDOM from 'react-dom'
import '@kaspersky/hexa-ui/design-system/global-style/styles.css'
import '@kaspersky/hexa-ui/design-system/tokens/figma-css-variables.css'
import App from './App'
import './main.css'

const container = document.getElementById('root')
if (!container) {
  throw new Error('Root element #root not found. Проверьте index.html.')
}
ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, container)
