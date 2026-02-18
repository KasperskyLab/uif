import { badges } from '@sb/badges'
import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React from 'react'
import styled from 'styled-components'

import MetaData from '../__meta__/meta.json'
import { IRepeaterProps, Repeater } from '../Repeater'

const Wrapper = styled.div`
  width: 700px;
`

type RepeaterPropsStory = Omit<IRepeaterProps, 'component'> & {
  componentName: keyof typeof components,
  components?: React.ReactNode
}

const meta: Meta<IRepeaterProps> = {
  title: 'Unsorted/Repeater',
  component: Repeater,
  parameters: {
    badges: [badges.dev, badges.missingDesign],
    docs: {
      page: withMeta(MetaData)
    }
  }
}
export default meta

interface IExampleComponent {
  name?: string,
  className?: string,
  key?: string
}

const LinkComponent = ({ name, className, key }: IExampleComponent) => {
  return <StyledP key={key}><a className={className}>{name}</a></StyledP>
}

const TextComponent = ({ name, className, key }: IExampleComponent) => {
  return <StyledP key={key}><span className={className}>{name}</span></StyledP>
}

const StyledP = styled.p`
  .cls1 {
    font-size: 30px
  }
  .cls2 {
    font-size: 10px
  }
`

const components = {
  Link: LinkComponent,
  Text: TextComponent
} as const

export const Basic: StoryObj<RepeaterPropsStory> = {
  render: ({
    componentName,
    ...rest
  }: RepeaterPropsStory) => (
    <Wrapper>
      <Repeater {...rest} component={components[componentName]} />
    </Wrapper>
  ),
  args: {
    data: [{ name: 'item 1', className: 'cls1' }, { name: 'item 2', className: 'cls2' }]
  },
  argTypes: {
    componentName: {
      options: Object.keys(components),
      control: { type: 'select' }
    }
  }
}
