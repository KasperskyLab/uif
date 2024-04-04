import React from 'react'
import { MetaList } from './types'
import { MetaDod } from './MetaDod'
import {
  Title,
  Subtitle,
  Markdown,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY
} from '@storybook/blocks'

export function withMeta (
  list: MetaList,
  Component?: React.FC
): React.FC {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setMeta = (props: any) => {
    return (
      <>
        <Title>{list.component}</Title>
        <MetaDod list={list.dod}/>
        <Subtitle>Описание</Subtitle>
        { list.description ? <Markdown>{list.description}</Markdown> : '-' }
        <Subtitle>Использование</Subtitle>
        <Markdown>{list.usage}</Markdown>
        <Markdown>{`[Дизайн](${list.designLink})`}</Markdown>
        {Component && <Component {...props} />}
        <Primary/>
        <ArgsTable story={PRIMARY_STORY} />
        <Stories title={'Variants of View'}/>
      </>
    )
  }
  return setMeta
}
