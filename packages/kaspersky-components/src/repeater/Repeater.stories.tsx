import React from 'react'
import { withKnobs, object, select } from '@storybook/addon-knobs'
import styled from 'styled-components'
import { Repeater } from './Repeater'

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

interface IComponents {
  [index: string]: React.ReactNode
}

export const Basic = () => {
  const data = [{ name: 'item 1', className: 'cls1' }, { name: 'item 2', className: 'cls2' }]
  const options = [
    'Link',
    'Text'
  ]
  const componentName = select('component', options, 'Link')

  const components: IComponents = {
    Link: LinkComponent,
    Text: TextComponent
  }

  return (
    <Wrapper>
      <Repeater component={components[componentName]} data={object('data', data)} />
    </Wrapper>
  )
}
