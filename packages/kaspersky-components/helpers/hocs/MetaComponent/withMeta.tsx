import React from 'react'
import MetaComponent from './MetaComponent'
import { MetaTable } from './MetaTable'
import { IMeta } from './types'
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY
} from '@storybook/addon-docs'

export function withMeta (
  list: IMeta,
  Component?: React.FC
): React.FC {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setMeta = (props: any) => {
    return (
      <>
        <MetaComponent>
          <MetaTable list={list.dod} />
          <Title>{list.component}</Title>
          <Subtitle>Description</Subtitle>
          <Description>
            {list.desctiption}
          </Description>
          <Subtitle>Usage</Subtitle>
          <Description>
            {list.usage}
          </Description>
          {list.designLink &&
            <a href={list.designLink}>Design</a>
          }
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories title={'Variants of View'} />
          <Subtitle>Figma</Subtitle>
          {list.figmaView
            ? (
              <iframe
                style={{ border: '1px solid rgba(0, 0, 0, 0.1);' }}
                width='800'
                height='450'
                src={list.figmaView}
                allowFullScreen
              >
              </iframe>
            )
            : '-'}
        </MetaComponent>
        {Component && <Component {...props} />}
      </>
    )
  }
  return setMeta
}
