import React from 'react'

import { Button, Space, Text } from '@kaspersky/hexa-ui'

import WelcomeImage from './assets/Welcome.svg?react'

import '../index.css'

export function Intro () {
  return (
    <div className="content-image main-content">
      <>
        <Space gap="grouped">
          <Text type="H1">
            Hexa UI Design System
          </Text>
          <Text type="BTR2">
            Единый источник истины для дизайнеров и разработчиков Лаборатории
            Касперского. Она объединяет команды, ускоряет процессы и обеспечивает
            визуальную целостность всех продуктов
          </Text>
          <Space gap="grouped">
            <Button
              mode="primary"
              size="large"
              text="Компоненты"
            />
            <Button
              mode="secondary"
              size="large"
              text="Базовые принципы"
            />
          </Space>
        </Space>
      </>
      <WelcomeImage className="welcome-image" />
    </div>
  )
}
