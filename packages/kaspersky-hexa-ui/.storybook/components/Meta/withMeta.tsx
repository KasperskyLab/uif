import { Link } from '@src/link'
import { Markdown } from '@src/markdown'
import { Space } from '@src/space'
import { Heading, Text } from '@src/typography'
import React from 'react'
import styled from 'styled-components'

import { DocPageLayout } from '../Documentation'

import { MetaDod } from './MetaDod'
import { MetaList } from './types'

type MetaContent = React.FC | string

const renderMetaContent = (content: MetaContent | undefined, props: any) => {
  if (!content) {
    return null
  }

  if (typeof content === 'string') {
    return (
      <DocPageLayout>
        <Markdown value={content} />
      </DocPageLayout>
    )
  }

  const Component = content

  return <Component {...props} />
}

const StyledHeading = styled(Heading)`
  border: none !important;
  padding: 0 !important;
  margin: 0 !important;
`

const StyledLink = styled(Link)`
  height: 20px !important;
  > span {
    font-family: inherit !important;
    font-size: inherit !important;
  }
`

export function withMeta (
  list: MetaList,
  content?: MetaContent
): React.FC {
  const setMeta = (props: any) => {

    return (
      <Space gap={32} direction="vertical" align="start">
        <Space gap={16} direction="vertical" align="start">
          <StyledHeading className="skip-toc" type="H2">{list?.component}</StyledHeading>
          {(list?.pixsoView || list?.designLink) && (
            <Space gap={16}>
              {list?.pixsoView && (
                <StyledLink
                  href={list.pixsoView}
                  target="_blank"
                  decoration="icon"
                  size="medium"
                >
                  Документация в Pixso
                </StyledLink>
              )}
              {list?.designLink && (
                <StyledLink
                  href={list.designLink}
                  target="_blank"
                  decoration="icon"
                  size="medium"
                >
                  Компонент в Pixso
                </StyledLink>
              )}
            </Space>
          )}
        </Space>
        <Space gap={16} direction="vertical" align="start">
          <Heading type="H4">Назначение</Heading>
          <Text>{list?.usage || '-'}</Text>
        </Space>
        <Space gap={16} direction="vertical" align="start">
          <Heading type="H4">Технические особенности</Heading>
          {
            list?.description
              ? <Markdown value={list?.description ?? '-'} />
              : <Text>&apos-&apos</Text>
          }
        </Space>
        {list?.dod && <MetaDod list={list.dod} />}
        {renderMetaContent(content, props)}
      </Space>
    )
  }
  return setMeta
}
