import React from 'react'
import styled from 'styled-components'
import { badges } from '../../.storybook/badges'
import { withMeta } from '../../helpers/hocs/MetaComponent/withMeta'
import { ExpandableText } from './ExpandableText'
import { IExpandableTextProps } from './types'
import Meta from './__meta__/meta.json'

export default {
  title: 'Atoms/ExpandableText',
  component: ExpandableText,
  parameters: {
    badges: [badges.dev],
    docs: {
      page: withMeta(Meta)
    }
  }
}

const Container = styled.div`
  min-width: 100px;
  max-width: 400px;
`

export const Basic = (props: IExpandableTextProps) => {
  return <Container>
    <ExpandableText {...props}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere provident consectetur? Perspiciatis nisi dolorum accusantium reprehenderit, architecto officiis mollitia ex modi cum sit voluptatum unde quasi? Iusto, possimus nesciunt.
    </ExpandableText>
  </Container>
}
