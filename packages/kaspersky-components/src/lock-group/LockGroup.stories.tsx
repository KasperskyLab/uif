import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'
import { withKnobs } from '@storybook/addon-knobs'
import { Text } from '../typography'
import { Textbox } from '../input'
import { ILockGroupProps, LockGroup } from './LockGroup'

const Wrapper = styled.div`
  width: 100%;
`

const meta: Meta = {
  title: 'Molecules/LockGroup',
  component: LockGroup,
  decorators: [withKnobs],
  args: {
    title: 'Title'
  }
}
export default meta

type Story = StoryObj<ILockGroupProps>

const StoryDefaultRender = (args: ILockGroupProps) => {
  const [isLockClosed, setIsLockClosed] = useState(false)
  const [textValue, setTextValue] = useState('12345')

  return (
    <Wrapper>
      <LockGroup
        {...args}
        isLockClosed={isLockClosed}
        onLockChange={(checked) => setIsLockClosed(checked)}
      >
        <Textbox value={textValue} onChange={value => setTextValue(String(value))} />
      </LockGroup>
    </Wrapper>
  )
}

export const Basic: Story = {
  render: StoryDefaultRender.bind({}),
  args: {
    title: 'TITLE',
    isGroupDisabled: false,
    isLockDisabled: false,
    statusText: 'statusText'
  }
}

export const WithInformationText: Story = {
  render: StoryDefaultRender.bind({}),
  args: {
    informationText: 'informationText informationText informationText'
  }
}

export const WithInformationTextNode: Story = {
  render: StoryDefaultRender.bind({}),
  args: {
    informationText: () => <Text>informationText informationText <a>Information link</a></Text>
  }
}
