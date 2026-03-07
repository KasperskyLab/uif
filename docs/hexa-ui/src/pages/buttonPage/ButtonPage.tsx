/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'

import { Link as LinkHexa, Space, Text } from '@kaspersky/hexa-ui'
import { LinkExternal } from '@kaspersky/hexa-ui-icons/16'

import { AnchorLink } from '../../components/AnchorLink/AnchorLink'
import TabsContent from '../../components/TabsContent'

import ContentTabOne, { contentTabOneAnchors } from './ContentTabOne'

import '../index.css'

const Link = styled(LinkHexa)`
  width: fit-content;
`

function ButtonPage () {

  return (
    <div className="full-page">
      <div className="content">
        <Text type="H2">
          Button
        </Text>
        <Text className="description-text">
          Button — это интерактивный компонент, который используется для инициирования действий или выполнения команд в пользовательском интерфейсе, такие как отправка форм, запуск процессов или навигация по страницам
        </Text>
        <Space gap="separated">
          <Link
            decoration="icon"
            href="#" //TODO
            icon={<LinkExternal />}
            size="noSize"
            text="Storybook"
          />
          <TabsContent content={[<ContentTabOne key="tab1" />]} />
        </Space>
      </div>
      {/* TODO менять ссылкку на contentTabOneAnchors в зависимости от того, какой контент у табов */}
      <AnchorLink items={contentTabOneAnchors} />

    </div>
  )
}

export default ButtonPage
