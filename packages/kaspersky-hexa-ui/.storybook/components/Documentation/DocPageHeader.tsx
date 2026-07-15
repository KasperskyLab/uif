import { DocMarkdownContent, DocMarkdownDescription } from '@sb/components/Documentation/DocMarkdownDescription'
import { Text } from '@src/typography'
import React, { ReactNode } from 'react'
import styled from 'styled-components'

const Header = styled.header`
  margin-bottom: 48px;
`

export type DocPageHeaderProps = {
  title: string
  /** Markdown: абзацы через пустую строку, перенос строки — через `breaks` */
  description: string | ReactNode
}

export const DocPageHeader: React.FC<DocPageHeaderProps> = ({ title, description }) => (
  <Header>
    <Text type="H2">{title}</Text>
    <DocMarkdownContent>
      <DocMarkdownDescription value={description} />
    </DocMarkdownContent>
  </Header>
)
