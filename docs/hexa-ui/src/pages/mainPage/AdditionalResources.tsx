import React from 'react'

import '../index.css'

import styled from 'styled-components'

import { Card as CardHexa, Space, Text } from '@kaspersky/hexa-ui'
import { LinkExternal } from '@kaspersky/hexa-ui-icons/16'

const Card = styled(CardHexa)`
  width: 389px;
  height: 160px;
`

const TextInCard = styled.div`
  padding-top: 16px;
`

type AdditionalResourcesCardType = {
  value: string,
  url?: string,
  text?: string,
  icon?: string,
}

const AdditionalResourcesCard = ({ value, url, text, icon }: AdditionalResourcesCardType) => {
  return (
    <Card
      mode="base"
      size= "medium"
      title={{
        size: 'small',
        value: value,
        ...(icon ? {
          elementBefore: {
            component: 'icon',
            name: icon,
            size: 24
          }
        } : {})
      }}
      actions={url ? [
        {
          icon: <LinkExternal />,
          onClick: () => window.open(url)
        }
      ] : undefined}
    >
      {text && (
        <TextInCard>
          <Text type="BTR2">{text}</Text>
        </TextInCard>
      )}
    </Card>
  )
}

export function AdditionalResources () {
  const googleUrl = 'https://www.google.com'

  return (
    <Space gap="section" className="main-content">
      <div className="text-with-card">
        <Space gap="related" direction="vertical" align="start">
          <Text type="H2">
            Дополнительные ресурсы
          </Text>
          <Text type="BTR2">
            Материалы, помогающие глубже понять и эффективно использовать дизайн-систему
          </Text>
        </Space>
      </div>
      <Space gap="grouped">
        <AdditionalResourcesCard
          value="[B2B] Hexa UI Design System"
          text="Главный проект дизайн-системы, содержащий библиотеки компонентов и токенов"
          icon="FileText"
          url={googleUrl}
        />
        <AdditionalResourcesCard
          value="[B2B] Hexa UI Documentation"
          text="Подробные описания базовых принципов дизайн-системы и компонентов c примерами использования прямо в Pixso"
          icon="FileText"
          url={googleUrl}
        />
        <AdditionalResourcesCard
          value="Hexa UI Feedback"
          text="Канал в «Сквадус» для обратной связи: вопросы, предложения, баги и идеи по улучшению"
          icon="FileText"
          url={googleUrl}
        />
        <AdditionalResourcesCard
          value="Таблица свойств компонентов"
          text="Унифицированная таблица с пропсами и названиями свойств для дизайна и кода"
          icon="FileText"
          url={googleUrl}
        />
        <AdditionalResourcesCard
          value="Паттерны B2B"
          text="Примеры типовых сценариев и паттернов интерфейсов для B2B-продуктов"
          icon="FileText"
          url={googleUrl}
        />
      </Space>
    </Space>
  )
}
