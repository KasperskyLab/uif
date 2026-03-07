import React from 'react'
import styled from 'styled-components'

import { Button, Space, Text } from '@kaspersky/hexa-ui'
import { LinkExternal } from '@kaspersky/hexa-ui-icons/16'

import DesignCodeImage from './assets/DesignCode.svg?react'

import '../index.css'

const SpaceWrapper = styled(Space)`
  padding-top: 16px;
`

const Wrapper = styled.div`
  padding-right: 120px;
`

export function DesignCode () {
  return (
    <div className="content-image main-content">
      <Wrapper>
        <Space gap="section">
          <Text type="H2">
            Дизайн + код = ❤️
          </Text>
          <Text type="BTR2">
            Hexa UI объединяет дизайн и разработку. Компоненты и токены синхронизированы между Pixso
            и Storybook, обеспечивая единый визуальный результат в продуктах
          </Text>
        </Space>
        <SpaceWrapper gap="grouped">
          <Button
            iconAfter = {<LinkExternal />}
            iconBefore = {<LinkExternal />}
            mode="secondary"
            size="large"
            text="Библиотека в Pixso"
          />
          <Button
            iconAfter = {<LinkExternal />}
            iconBefore = {<LinkExternal />}
            mode="secondary"
            size="large"
            text="Storybook"
          />
        </SpaceWrapper>
      </Wrapper>
      <DesignCodeImage className="design-code-image" />
    </div>
  )
}
