import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { Textbox } from '@src/input'
import { Meta, StoryObj } from '@storybook/react'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import MetaData from '../__meta__/meta.json'
import { LockGroup as LockGroupComponent } from '../LockGroup'
import { LockGroupProps } from '../types'

import { defaultArgs, lockGroupPropPresentation, lockGroupStatusIconOptions } from './LockGroup.controls'

const Wrapper = styled.div`
  width: 100%;
`

type LockGroupStoryProps = Omit<LockGroupProps, 'statusIcon'> & {
  statusIcon: typeof lockGroupStatusIconOptions[number]
}

const lockGroupStorySettings: Meta<LockGroupStoryProps> = {
  argTypes: buildStoryArgTypes(lockGroupPropPresentation),
  args: defaultArgs,
  parameters: {
    badges: [badges.stable],
    design: MetaData.pixsoView
  }
}

const meta: Meta<LockGroupStoryProps> = {
  title: 'Hexa UI Components/LockGroup',
  component: LockGroupComponent as React.ComponentType<LockGroupStoryProps>,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['lockGroupStorySettings'],
  ...lockGroupStorySettings
}

export default meta

type Story = StoryObj<LockGroupStoryProps>

export const Playground: Story = {
  name: 'Playground',
  render: ({ statusIcon, ...args }) => {
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
          onLockChange={setIsLockClosed}
          statusIcon={statusIcon === 'none' ? undefined : statusIcon}
        >
          <Textbox value={textValue} onChange={value => setTextValue(String(value))} />
        </LockGroupComponent>
      </Wrapper>
    )
  },
  parameters: {
    controls: {
      include: getControlsInclude(lockGroupPropPresentation),
      sort: 'none'
    }
  }
}
