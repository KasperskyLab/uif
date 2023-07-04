import styled from 'styled-components'
import React from 'react'
import { Divider } from './Divider'
import { IDividerProps } from './types'
import Meta from './__meta__/meta.json'

import { badges } from '../../.storybook/badges'
import { withMeta } from '../../helpers/hocs/MetaComponent/withMeta'
import { StoryColumn, StoryWrapper } from '../../.storybook/StoryComponents'

export default {
  title: 'Atoms/Divider',
  component: Divider,
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(Meta)
    }
  }
}

const DummyContentView = styled.div`
  width: 50px;
  height: 50px;
  background: aqua;
`

const DividerTemplate = (props: IDividerProps) => {
  const Wrapper = props.kind === 'horizontal' ? StoryColumn : StoryWrapper
  return (
    <Wrapper>
      <DummyContentView/>
      <Divider {...props} />
      <DummyContentView/>
      <Divider {...props} />
      <DummyContentView/>
    </Wrapper>
  )
}

export const Basic = DividerTemplate.bind({})

const ModesTemplate = (props: IDividerProps) => {
  const Wrapper = props.kind === 'horizontal' ? StoryColumn : StoryWrapper
  return (
    <Wrapper>
      <DummyContentView/>
      <Divider mode='normal' {...props} />
      <DummyContentView/>
      <Divider mode='light' {...props} />
      <DummyContentView/>
      <Divider mode='bold' {...props} />
      <DummyContentView/>
    </Wrapper>
  )
}

export const Modes = ModesTemplate.bind({})

const VerticalTemplate = ({
  kind = 'vertical',
  ...props
}: IDividerProps) => {
  const Wrapper = kind === 'horizontal' ? StoryColumn : StoryWrapper
  return (
    <Wrapper>
      <DummyContentView/>
      <Divider kind={kind} {...props} />
      <DummyContentView/>
      <Divider kind={kind} {...props} />
      <DummyContentView/>
    </Wrapper>
  )
}

export const Vertical = VerticalTemplate.bind({})
