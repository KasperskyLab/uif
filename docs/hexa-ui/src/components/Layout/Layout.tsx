import { Layout as LayoutAntd } from 'antd'
import React, { ReactNode } from 'react'

import { Search, ToggleButton, TopNavigation } from '@kaspersky/hexa-ui'
import { ThemeKey } from '@kaspersky/hexa-ui/design-system'
import { Moon } from '@kaspersky/hexa-ui-icons/16'
import { HomeWiFi } from '@kaspersky/hexa-ui-icons/32'

import styles from './Layout.module.scss'

interface LayoutProps {
  children: ReactNode
  onThemeChange: (theme: ThemeKey) => void
  currentTheme: ThemeKey
}

function Layout ({ children, onThemeChange, currentTheme }: LayoutProps) {
  const handleThemeToggle = (_value: string, checked: boolean) => {
    const newTheme = checked ? ThemeKey.Dark : ThemeKey.Light
    onThemeChange(newTheme)
  }

  const componentsRight = (
    <div className={styles.contentRight}>
      {/* TODO: implement search logic*/}
      <Search
        onChange={() => {}}
        onClearClick={() => {}}
        placeholder="Search..."
        value=""
      />
      <ToggleButton
        iconBefore={<Moon />}
        mode="grey"
        onChange={handleThemeToggle}
        value={currentTheme}
      />
    </div>
  )

  return (
    <LayoutAntd>
      <TopNavigation
        className={styles.topNavigation}
        logo={<HomeWiFi />}
        title="Hexa UI"
        contentRight={componentsRight}
      />
      {children}
    </LayoutAntd>
  )
}

export default Layout
