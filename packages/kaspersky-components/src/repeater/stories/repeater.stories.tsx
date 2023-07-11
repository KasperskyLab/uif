import React from 'react'
import { Story } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import styled from 'styled-components'
import { Repeater } from '../Repeater'

const Wrapper = styled.div`
  width: 700px;
`

export default {
  title: 'Unsorted/Repeater',
  component: Repeater,
  decorators: [withKnobs]
}

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

export const Basic: Story<{componentName: keyof typeof components}> = ({ componentName }): JSX.Element => {
  const data = [{ name: 'item 1', className: 'cls1' }, { name: 'item 2', className: 'cls2' }]

  return (
    <Wrapper>
      <Repeater component={components[componentName]} data={data} />
    </Wrapper>
  )
}

Basic.argTypes = {
  componentName: {
    options: Object.keys(components),
    control: { type: 'select' }
  }
}
