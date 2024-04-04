import React from 'react'
import {
  Title,
  Description
} from '@storybook/addon-docs'
import { Space } from '@src/space'
import { H1, H2, H3, H4, H5, H6 } from '../Typography'
import { StoryLayout } from '@sb/StoryComponents'
import { useTheme } from '@design-system/theme/hooks'

export const HeaderDocs = (): JSX.Element => {
  const theme = useTheme().key
  return (
    <>
      <Title>Заголовки</Title>
      <Description>
        Стили спользуются как в заголовках страниц, так и в мелких компонентах,
        таких как карточки и алерты
      </Description>
      <StoryLayout theme={theme}>
        <Space size={16} direction="vertical">
          <H1 theme={theme}>Header/H1</H1>
          <H2 theme={theme}>Header/H2</H2>
          <H3 theme={theme}>Header/H3</H3>
          <H4 theme={theme}>Header/H4</H4>
          <H5 theme={theme}>Header/H5</H5>
          <H6 theme={theme}>Header/H6</H6>
        </Space>
      </StoryLayout>
    </>
  )
}
