import { getTextSizes } from '@design-system/tokens'
import { Markdown } from '@src/markdown'
import { textLevels } from '@kaspersky/hexa-ui-core/typography/js'
import React, { ReactNode } from 'react'
import styled from 'styled-components'

const StyledMarkdown = styled(Markdown)`
  ${getTextSizes(textLevels.BTR3)}

  && strong {
    ${getTextSizes(textLevels.BTS4)}
  }
`

export const DocMarkdownContent = styled.div`
  p {
    margin: 0;
  }

  p + p {
    margin-top: 16px;
  }
`

export type DocMarkdownDescriptionProps = {
  value: string | ReactNode
}

export const DocMarkdownDescription: React.FC<DocMarkdownDescriptionProps> = ({ value }) => {
  if (typeof value !== 'string') {
    return <>{value}</>
  }

  return <StyledMarkdown value={value} breaks />
}
