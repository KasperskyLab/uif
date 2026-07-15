import { badges } from '@sb/badges'
import { buildStoryArgTypes, getControlsInclude } from '@sb/components/Documentation'
import { withMeta } from '@sb/components/Meta'
import { Meta, StoryObj } from '@storybook/react'
import React, { FC, useEffect, useState } from 'react'

import MetaData from '../__meta__/meta.json'
import { CodeCompare as CodeCompareComponent, CodeCompareProps } from '../CodeCompare'
import { IVersionOption } from '../types'

import {
  codeComparePlaygroundPresentation,
  defaultArgs,
  playgroundNewValue,
  playgroundOldValue
} from './CodeCompare.controls'

const CodeComparePlayground: FC<CodeCompareProps> = ({
  oldValue: oldValueProp,
  newValue: newValueProp,
  oldVersion: oldVersionProp,
  newVersion: newVersionProp,
  compareMode,
  ...rest
}) => {
  const [oldVersion, setOldVersion] = useState(oldVersionProp)
  const [newVersion, setNewVersion] = useState(newVersionProp)
  const [oldValue, setOldValue] = useState(oldValueProp)
  const [newValue, setNewValue] = useState(newValueProp)

  useEffect(() => { setOldVersion(oldVersionProp) }, [oldVersionProp])
  useEffect(() => { setNewVersion(newVersionProp) }, [newVersionProp])
  useEffect(() => { setOldValue(oldValueProp) }, [oldValueProp])
  useEffect(() => { setNewValue(newValueProp) }, [newValueProp])

  const handleVersionChange = (left?: IVersionOption, right?: IVersionOption): void => {
    setOldVersion(left)
    setNewVersion(right)
    if (left?.value === 'base') setOldValue(playgroundOldValue)
    if (right?.value === 'changed') setNewValue(playgroundNewValue)
    if (left?.value === 'changed') setOldValue(playgroundNewValue)
    if (right?.value === 'base') setNewValue(playgroundOldValue)
  }

  return (
    <CodeCompareComponent
      {...rest}
      key={compareMode}
      compareMode={compareMode}
      oldVersion={oldVersion}
      newVersion={newVersion}
      oldValue={oldValue}
      newValue={newValue}
      onVersionChange={handleVersionChange}
    />
  )
}

export const codeCompareStorySettings: Meta<CodeCompareProps> = {
  argTypes: buildStoryArgTypes(codeComparePlaygroundPresentation),
  args: defaultArgs,
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.pixsoView
  }
}

const meta = {
  title: 'Hexa UI Components/CodeCompare',
  component: CodeCompareComponent,
  tags: ['!autodocs'],
  includeStories: ['Playground'],
  excludeStories: ['codeCompareStorySettings'],
  ...codeCompareStorySettings
} satisfies Meta<typeof CodeCompareComponent>

export default meta

type Story = StoryObj<CodeCompareProps>

export const Playground: Story = {
  name: 'Playground',
  render: (args) => <CodeComparePlayground {...args} />,
  parameters: {
    controls: {
      include: getControlsInclude(codeComparePlaygroundPresentation),
      sort: 'none'
    }
  }
}
