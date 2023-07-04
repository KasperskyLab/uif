import React from 'react'
import {
  Title,
  Subtitle,
  Description
} from '@storybook/addon-docs'
import { Space } from '../../space'
import { H1, H2, H3, H4, Heading } from '../Typography'
import { StoryLayout } from '../../../.storybook/StoryComponents'
import { ThemeKey } from '../../../design-system/types'

export const HeaderDocs: React.VFC<Record<string, unknown>> = () => {
  return (
    <>
      <Title>Header</Title>
      <Subtitle>Headers</Subtitle>
      <Description>
        Styles are used both in page headers and in small components, such as cards and alerts
      </Description>
      <StoryLayout theme={ThemeKey.Light}>
        <Space size={16} direction="vertical">
          <H1>Header/H1</H1>
          <H2>Header/H2</H2>
          <H3>Header/H3</H3>
          <H4>Header/H4</H4>
        </Space>
      </StoryLayout>

      <Subtitle>Subheaders</Subtitle>
      <Description>Styles are used as non-accent headings</Description>
      <StoryLayout theme={ThemeKey.Light}>
        <Space size={16} direction="vertical">
          <Heading type="S1">Subeader/S1</Heading>
          <Heading type="S2">Subeader/S2</Heading>
          <Heading type="S3">Subeader/S3</Heading>
          <Heading type="S4">Subeader/S4</Heading>
        </Space>
      </StoryLayout>
      <Subtitle>Numbers</Subtitle>
      <Description>Styles are used as non-accent headings</Description>
      <StoryLayout theme={ThemeKey.Light}>
        <Space size={16} direction="vertical">
          <Heading type="N1">Number/N1</Heading>
          <Heading type="N2">Number/N2</Heading>
          <Heading type="N3">Number/N3</Heading>
          <Heading type="N4">Number/N4</Heading>
          <Heading type="N5">Number/N5</Heading>
        </Space>
      </StoryLayout>
    </>
  )
}
