import { DocMarkdownContent, DocMarkdownDescription } from '@sb/components/Documentation/DocMarkdownDescription'
import { Link } from '@src/link'
import { SectionMessage } from '@src/section-message'
import { Tag } from '@src/tag'
import { Tooltip } from '@src/tooltip'
import { Text } from '@src/typography'
import React, { ReactNode } from 'react'
import styled from 'styled-components'

import { StatusInfoOutline, StatusOkSolid } from '@kaspersky/hexa-ui-icons/16'

const Header = styled.header`
  margin-bottom: 24px;
`

const Title = styled.div`
  align-items: center;
  display: flex;
`

const InfoTag = styled(Tag)`
  &:first-of-type {
    margin-inline-start: auto;
  }
`

const BuilderTagContent = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`

export type DocPageHeaderProps = {
  title: string
  /** Markdown: абзацы через пустую строку, перенос строки — через `breaks` */
  description: string | ReactNode
  /** Есть поддержка RTL */
  rtlSupported?: boolean
  /** Компонент доступен в UI Builder */
  inBuilder?: boolean
  /** Особенности использования в UI Builder */
  builderInfo?: string
  /** Документация валидирована для UIF */
  checkUIF?: boolean
}

export const DocPageHeader: React.FC<DocPageHeaderProps> = ({
  title,
  description,
  rtlSupported,
  inBuilder,
  builderInfo,
  checkUIF
}) => (
  <Header>
    <Title>
      <Text type="H2">{title}</Text>
      {inBuilder && (
        <InfoTag mode="emerald" outlined icon={<StatusOkSolid />}>
          <BuilderTagContent>
            Есть в UI Builder
            {builderInfo && <Tooltip text={builderInfo}><StatusInfoOutline /></Tooltip>}
          </BuilderTagContent>
        </InfoTag>
      )}
      {rtlSupported && (
        <InfoTag mode="marina" outlined icon={<StatusOkSolid />}>
          Есть поддержка RTL
        </InfoTag>
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
        </span>
      </SectionMessage>
    )}
  </Header>
)
