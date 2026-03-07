import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'

import { ThemeKey } from '@kaspersky/hexa-ui/design-system'

import AppProvider from './components/AppProvider'
import Footer from './components/Footer/Footer'
import Layout from './components/Layout/Layout'
import Menu from './components/Menu/Menu'
import ButtonPage from './pages/buttonPage/ButtonPage'
import MainPage from './pages/mainPage/MainPage'

const useIsMainPage = () => {
  const location = useLocation()
  return location.pathname === '/'
}

const App = () => {
  const [theme, setTheme] = React.useState(ThemeKey.Light)
  const isMain = useIsMainPage()

  return (
    <AppProvider theme={theme}>
      <Layout
        onThemeChange={setTheme}
        currentTheme={theme}
      >
        <Menu>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/buttons" element={<ButtonPage />} />

            <Route path="*" element={<MainPage />} />
          </Routes>

          <Footer isMain={isMain} />
        </Menu>
      </Layout>
    </AppProvider>
  )
}

const Root = () => (
  <Router>
    <App />
  </Router>
)

render(<Root />, document.getElementById('root'))
