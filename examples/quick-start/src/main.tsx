import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.tsx'
import './main.css'

const container = document.getElementById('root')!

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  container
)
