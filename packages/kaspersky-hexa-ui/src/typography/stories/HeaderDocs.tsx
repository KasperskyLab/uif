import { Space } from '@src/space'
import { H1, H2, H3, H4, H5, H6, Text } from '@src/typography'
import React from 'react'

export const HeaderDocs = (): JSX.Element => {
  return (
    <>
      <Text type="H4">Заголовки</Text>
      <Text type="H6">
        Стили используются как в заголовках страниц, так и в мелких компонентах,
        таких как карточки и алерты
      </Text>
      <Space gap={16} direction="vertical">
        <H1>Header/H1</H1>
        <H2>Header/H2</H2>
        <H3>Header/H3</H3>
        <H4>Header/H4</H4>
        <H5>Header/H5</H5>
        <H6>Header/H6</H6>
      </Space>
    </>
  )
}
