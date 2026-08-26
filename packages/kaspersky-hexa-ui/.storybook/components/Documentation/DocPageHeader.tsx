import { DocMarkdownContent, DocMarkdownDescription } from '@sb/components/Documentation/DocMarkdownDescription'
import { Link } from '@src/link'
import { SectionMessage } from '@src/section-message'
import { Tag } from '@src/tag'
import { Text } from '@src/typography'
import React, { ReactNode } from 'react'
import styled from 'styled-components'

import { StatusOkSolid } from '@kaspersky/hexa-ui-icons/16'

const Header = styled.header`
  margin-bottom: 24px;
`

const Title = styled.div`
  align-items: center;
  display: flex;
`

const BuilderTag = styled(Tag)`
  margin-left: auto;
`

export type DocPageHeaderProps = {
  title: string
  /** Markdown: абзацы через пустую строку, перенос строки — через `breaks` */
  description: string | ReactNode
  /** Компонент доступен в Builder */
  inBuilder?: boolean
  /** Документация валидирована для UIF */
  checkUIF?: boolean
}

export const DocPageHeader: React.FC<DocPageHeaderProps> = ({ title, description, inBuilder, checkUIF }) => (
  <Header>
    <Title>
      <Text type="H2">{title}</Text>
      {inBuilder && (
        <BuilderTag mode="emerald" outlined icon={<StatusOkSolid />}>
          Есть в Builder
        </BuilderTag>
      )}
    </Title>
    <DocMarkdownContent>
      <DocMarkdownDescription value={description} />
    </DocMarkdownContent>
    {!checkUIF && (
      <SectionMessage closable={true} mode="warning" style={{ marginTop: 16 }}>
        <span style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Text type="BTM3">Эта документация сгенерирована AI и пока не проверена разработчиками.
            Она может содержать ошибки и неточности.</Text>
          <Text type="BTR3">Если у вас есть вопросы или замечания по поведению компонента или по содержанию документации,
            обращайтесь <span style={{ whiteSpace: 'nowrap' }}>в чат поддержки <Link href="https://im.kaspersky.com/channel/hexa-ui-support-dev" target="_blank">Hexa UI Support (Dev)</Link></span></Text>
        </span>
      </SectionMessage>
    )}
  </Header>
)
