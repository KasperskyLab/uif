
import { Link } from '@src/link'
import { Space } from '@src/space'
import { Heading, Text } from '@src/typography'
import React from 'react'
import styled from 'styled-components'

import { MetaDod } from './MetaDod'
import { MetaList } from './types'

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
  Component?: React.FC
): React.FC {
  const setMeta = (props: any) => {
    return (
      <Space gap={32} direction="vertical" align="start">
        <Space gap={16} direction="vertical" align="start">
          <StyledHeading type="H2">{list?.component}</StyledHeading>
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
          <Text>{list?.description || '-'}</Text>
        </Space>
        {list?.dod && <MetaDod list={list.dod} />}
        {Component && <Component {...props} />}
      </Space>
    )
  }
  return setMeta
}
