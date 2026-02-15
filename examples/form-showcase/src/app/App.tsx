import { useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { Notification, Text, Space } from '@kaspersky/hexa-ui'
import { ConfigProvider } from '@kaspersky/hexa-ui/design-system/context/provider'
import { ThemeKey } from '@kaspersky/hexa-ui/design-system'
import { GlobalStyle } from '@kaspersky/hexa-ui/design-system/global-style'
import { LangVariants } from '@kaspersky/hexa-ui/helpers/localization/types'
import styled from 'styled-components'

import { FormaI18nInit } from '../shared/Forma'
import { LoginPage } from './pages/LoginPage'
import { RegistrationPage } from './pages/RegistrationPage'
import { SettingsPage } from './pages/SettingsPage'
import { WizardPage } from './pages/WizardPage'

const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Header = styled.header`
  padding: 16px 24px;
  border-bottom: 1px solid var(--border-color, #e8e8e8);
  display: flex;
  align-items: center;
  gap: 24px;
`

const NavLinkStyled = styled(NavLink)`
  padding: 8px 12px;
  color: inherit;
  text-decoration: none;
  border-radius: 8px;
  &.active {
    background: rgba(0, 0, 0, 0.06);
    font-weight: 600;
  }
`

const Main = styled.main`
  flex: 1;
  padding: 24px;
  overflow: auto;
`

function App() {
  const [themeKey] = useState<ThemeKey>(ThemeKey.Light)

  return (
    <ConfigProvider theme={themeKey} locale={LangVariants.EnUs}>
      <FormaI18nInit>
        <GlobalStyle />
        <Notification />
        <BrowserRouter>
        <AppLayout>
          <Header>
            <Text type="H4">Form Show Case</Text>
            <Space size={8}>
              <NavLinkStyled to="/">Login</NavLinkStyled>
              <NavLinkStyled to="/registration">Registration</NavLinkStyled>
              <NavLinkStyled to="/settings">Settings</NavLinkStyled>
              <NavLinkStyled to="/wizard">Multi-step Wizard</NavLinkStyled>
            </Space>
          </Header>
          <Main>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/registration" element={<RegistrationPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/wizard" element={<WizardPage />} />
            </Routes>
          </Main>
        </AppLayout>
      </BrowserRouter>
      </FormaI18nInit>
    </ConfigProvider>
  )
}

export default App
