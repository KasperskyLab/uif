import {
  Title,
  Subtitle,
  Markdown,
  Primary,
  ArgTypes,
  Stories,
  PRIMARY_STORY
} from '@storybook/blocks'
import React from 'react'

import { MetaDod } from './MetaDod'
import { MetaList } from './types'

export function withMeta (
  list: MetaList,
  Component?: React.FC
): React.FC {
  const setMeta = (props: any) => {
    return (
      <>
        <Title>{list.component}</Title>
        {list.dod && <MetaDod list={list.dod} />}
        <Subtitle>Описание</Subtitle>
        {list.description ? <Markdown>{list.description}</Markdown> : '-'}
        <Subtitle>Использование</Subtitle>
        {list.usage ? <Markdown>{list.usage}</Markdown>: '-'}
        {list.designLink && <Markdown>{`[Дизайн](${list.designLink})`}</Markdown>}
        {Component && <Component {...props} />}
        <Primary />
        <ArgTypes of={PRIMARY_STORY} />
        <Stories title={'Variants of View'} />
      </>
    )
  }
  return setMeta
}
