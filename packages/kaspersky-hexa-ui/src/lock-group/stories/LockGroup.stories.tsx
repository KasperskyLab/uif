import { badges } from '@sb/badges'
import { withDesignControls } from '@sb/components/designControls'
import { withMeta } from '@sb/components/Meta'
import { SBArgType } from '@sb/helpers'
import { Textbox } from '@src/input'
import { Meta, StoryObj } from '@storybook/react'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { textLevels } from '@kaspersky/hexa-ui-core/typography/js'

import { Text } from '../../typography'
import MetaData from '../__meta__/meta.json'
import { LockGroup as LockGroupComponent } from '../LockGroup'
import { LockGroupProps } from '../types'

const Wrapper = styled.div`
  width: 100%;
`

const titleLevels = {
  options: Object.keys(textLevels),
  control: { type: 'select' }
} as SBArgType

const meta: Meta<LockGroupProps> = {
  title: 'Hexa UI Components/LockGroup',
  component: LockGroupComponent,
  ...withDesignControls<LockGroupProps>({
    componentName: 'lockGroup',
    meta: {
      args: {
        title: 'Title',
        titleLevel: 'H6'
      },
      argTypes: {
        titleLevel: { ...titleLevels },
        title: {
          control: 'text'
        },
        statusText: {
          control: 'text'
        },
        informationText: {
          control: 'text'
        }
      },
      parameters: {
        badges: [badges.stable],
        docs: {
          page: withMeta(MetaData)
        },
        design: MetaData.figmaView
      }
    }
  })
}
export default meta

type Story = StoryObj<LockGroupProps>

const StoryDefaultRender = (args: LockGroupProps) => {
  const [isLockClosed, setIsLockClosed] = useState(false)
  const [textValue, setTextValue] = useState('12345')

  useEffect(() => {
    setIsLockClosed(!!args.isLockClosed)
  }, [args.isLockClosed])

  return (
    <Wrapper>
      <LockGroupComponent
        {...args}
        isLockClosed={isLockClosed}
        onLockChange={(checked) => setIsLockClosed(checked)}
      >
        <Textbox value={textValue} onChange={value => setTextValue(String(value))} />
      </LockGroupComponent>
    </Wrapper>
  )
}

export const LockGroup: Story = {
  render: StoryDefaultRender.bind({}),
  args: {
    title: 'Title',
    isGroupDisabled: false,
    isLockDisabled: false,
    statusText: 'statusText'
  }
}

export const WithInformationText: Story = {
  render: StoryDefaultRender.bind({}),
  args: {
    informationText: () => <Text>Information text with <a>Information link</a></Text>
  }
}
