import { Grid, GridItem } from '@src/grid'
import { HelpMessage } from '@src/help-message'
import { Meta, StoryObj } from '@storybook/react'
import React, { FC, useState } from 'react'

import { CodeCompare as CodeCompareComponent, CodeCompareProps } from '../CodeCompare'
import { IVersionOption } from '../types'

import { codeCompareStorySettings } from './CodeCompare.stories'
import { getCodeByVersion, getVersions } from './codeCompareStoryData'

const CodeCompareVersionWrapper: FC<CodeCompareProps> = (props) => {
  const [v1, setV1] = useState(props.oldVersion)
  const [v2, setV2] = useState(props.newVersion)
  const [v1Code, setV1Code] = useState(props.oldValue)
  const [v2Code, setV2Code] = useState(props.newValue)

  const handleVersionsChange = (v1?: IVersionOption, v2?: IVersionOption): void => {
    setV1(v1)
    setV2(v2)

    setV1Code(getCodeByVersion(v1))
    setV2Code(getCodeByVersion(v2))
  }

  return (
    <CodeCompareComponent
      {...props}
      oldVersion={v1}
      newVersion={v2}
      oldValue={v1Code}
      newValue={v2Code}
      onVersionChange={handleVersionsChange}
    />
  )
}

const meta = {
  title: 'Hexa UI Components/CodeCompare/Stories',
  component: CodeCompareVersionWrapper,
  tags: ['!autodocs'],
  ...codeCompareStorySettings
} satisfies Meta<typeof CodeCompareComponent>

export default meta

type Story = StoryObj<typeof CodeCompareComponent>

export const CodeCompare: Story = {
  args: {
    oldVersion: getVersions()[0],
    newVersion: getVersions()[1],
    options: getVersions(),
    oldValue: getCodeByVersion(getVersions()[0]),
    newValue: getCodeByVersion(getVersions()[1])
  }
}

export const CompareMode: Story = {
  render: () => {
    const props: CodeCompareProps = {
      oldVersion: getVersions()[0],
      newVersion: getVersions()[1],
      options: getVersions(),
      oldValue: getCodeByVersion(getVersions()[0]),
      newValue: getCodeByVersion(getVersions()[8])
    }

    return (
      <Grid layout={{ cols: ['140px 6fr'] }} layoutProperty={{ gap: 32, alignItems: 'center' }}>
        <GridItem>
          <HelpMessage text="compareMode = unified" />
        </GridItem>
        <GridItem>
          <CodeCompareVersionWrapper {...props} compareMode="unified" />
        </GridItem>
        <GridItem>
          <HelpMessage text="compareMode = split" />
        </GridItem>
        <GridItem>
          <CodeCompareVersionWrapper {...props} compareMode="split" />
        </GridItem>
      </Grid>
    )
  }
}

export const NoValues: Story = {
  args: {
    oldVersion: undefined,
    newVersion: undefined,
    options: getVersions()
  }
}

export const EqualValues: Story = {
  args: {
    oldVersion: getVersions()[0],
    newVersion: getVersions()[6],
    options: getVersions(),
    oldValue: getCodeByVersion(getVersions()[0]),
    newValue: getCodeByVersion(getVersions()[6])
  }
}

export const EmptyValues: Story = {
  args: {
    oldVersion: getVersions()[4],
    newVersion: getVersions()[5],
    options: getVersions(),
    oldValue: getCodeByVersion(getVersions()[4]),
    newValue: getCodeByVersion(getVersions()[5])
  }
}

export const RightOptions: Story = {
  args: {
    oldVersion: getVersions()[6],
    newVersion: getVersions()[1],
    options: getVersions().slice(4),
    rightOptions: getVersions().slice(0, -7),
    oldValue: getCodeByVersion(getVersions()[6]),
    newValue: getCodeByVersion(getVersions()[1])
  }
}

export const NoValuesLoading: Story = {
  args: {
    oldVersion: getVersions()[0],
    newVersion: getVersions()[7],
    options: getVersions(),
    loading: true,
    oldValue: getCodeByVersion(getVersions()[0]),
    newValue: getCodeByVersion(getVersions()[7])
  }
}

export const LoadingWithCode: Story = {
  args: {
    oldVersion: getVersions()[0],
    newVersion: getVersions()[1],
    options: getVersions(),
    loading: true,
    oldValue: getCodeByVersion(getVersions()[0]),
    newValue: getCodeByVersion(getVersions()[1])
  }
}

export const ManyChanges: Story = {
  args: {
    oldVersion: getVersions()[2],
    newVersion: getVersions()[3],
    options: getVersions(),
    oldValue: getCodeByVersion(getVersions()[2]),
    newValue: getCodeByVersion(getVersions()[3])
  }
}
