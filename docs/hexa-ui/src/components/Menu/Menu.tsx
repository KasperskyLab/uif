import { Layout } from 'antd'
import React, { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

import { Menu as MenuHexa } from '@kaspersky/hexa-ui'

import styles from './Menu.module.scss'

const Menu = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()

  const navItems = [
    {
      key: 'Главная',
      state: 'main',
      canBeAddedAsFav: false,
      onClick: () => navigate('./')
    },
    {
      key: 'Базовые принципы',
      state: 'based',
      isRoot: true,
      items: [
        {
          key: 'Обзор',
          state: 'description1',
          canBeAddedAsFav: false
        },
        {
          key: 'Палитра',
          state: 'palette',
          canBeAddedAsFav: false
        }
      ]
    },
    {
      key: 'Компоненты',
      state: 'components',
      isRoot: true,
      items: [
        {
          key: 'Обзор',
          state: 'description2',
          canBeAddedAsFav: false
        },
        {
          key: 'Button',
          state: 'button',
          canBeAddedAsFav: false,
          onClick: () => navigate('./buttons')
        }
      ]
    }
  ]

  return (
    <Layout className={styles.rootLayout}>
      <div className={styles.stickyMenuWrapper}>
        <MenuHexa
          navItems={navItems}
          applyAppTheme
          width={280}
        />
      </div>

      <div className={styles.contentMenu}>
        {children}
      </div>
    </Layout>
  )
}

export default Menu
