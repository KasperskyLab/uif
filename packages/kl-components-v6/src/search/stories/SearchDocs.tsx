import React from 'react'
import {
  Title,
  Subtitle,
  ArgsTable,
  PRIMARY_STORY,
  Stories,
  Subheading,
  Description
} from '@storybook/addon-docs'
import LinkTo from '@storybook/addon-links/react'

export const SearchDocs: React.VFC<Record<string, never>> = () => {
  return (
    <>
      <Title />
      <Subtitle>Search component.</Subtitle>
      Used to search by string. Made from component{' '}
      <LinkTo kind="Atoms/Input">Input</LinkTo>. Therefore, it has the same props. So
       also added a tag prop to pass a list of tags.
      <ArgsTable story={PRIMARY_STORY} />
      <Stories includePrimary />
      <Subheading>FAQ</Subheading> - Component used:{' '}
      <LinkTo kind="Atoms/Input">Input</LinkTo>
      <Subheading>Used by</Subheading>
      <Description>TIP</Description>
    </>
  )
}
