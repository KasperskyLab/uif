import { useEffect } from 'react'
import { Routes, Route, NavLink, useLocation } from 'react-router-dom'
import { Notification, Text, Space } from '@kaspersky/hexa-ui'
import styled from 'styled-components'

import { LoginPage } from './pages/LoginPage'
import { RegistrationPage } from './pages/RegistrationPage'
import { SettingsPage } from './pages/SettingsPage'
import { WizardPage } from './pages/WizardPage'

const FormShowcaseRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  width: 100%;
  min-height: 0;
`

const Header = styled.header`
  flex-shrink: 0;
  margin-bottom: 24px;
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

const FormContent = styled.div`
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

export function FormShowcaseApp() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname.startsWith('/form-showcase')) {
      const el = document.getElementById('layout-content-area')
      if (el) el.scrollTop = 0
    }
  }, [pathname])

  return (
    <FormShowcaseRoot>
      <Header>
        <Text type="H4">Form Showcase</Text>
        <Space size={8}>
          <NavLinkStyled to="/form-showcase" end>Login</NavLinkStyled>
          <NavLinkStyled to="/form-showcase/registration">Registration</NavLinkStyled>
          <NavLinkStyled to="/form-showcase/settings">Settings</NavLinkStyled>
          <NavLinkStyled to="/form-showcase/wizard">Multi-step Wizard</NavLinkStyled>
        </Space>
      </Header>
      <Notification />
      <FormContent>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/wizard" element={<WizardPage />} />
        </Routes>
      </FormContent>
    </FormShowcaseRoot>
  )
}
