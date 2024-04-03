import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { badges } from '@sb/badges'
import { Grid } from './Grid'
import { GridProps } from './types'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { Meta, StoryObj } from '@storybook/react'
import MetaData from './__meta__/meta.json'
import { GridItem } from './GridItem'
import { Select } from '../select'
import { FormGrid } from './templates'

import { KeyValue } from '@src/key-value'
import { Textbox } from '@src/input'
import { Text } from '@src/typography'
import { Space } from '@src/space'

type GridPropsStory = PropsWithChildren<GridProps>

const meta: Meta<GridPropsStory> = {
  title: 'Molecules/Grid',
  component: Grid,
  argTypes: { cols: { control: { type: 'number', min: 1 } } },
  args: {
    testId: 'grid-test-id',
    klId: 'grid-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData)
    }
  }
}
export default meta

type Story = StoryObj<GridPropsStory>

const Widget = styled.div`
  width: 100%;
  height: 100%;
  border : solid 2px blue;
  text-align: center;
  font-weight: bold;
`

const Card = styled('div')`
  width: 100%;
  height: 100%;
  background: #F8FAFC;
  border-radius: 16px;
  padding: 16px;
`

const defaultArray = Array(28).fill('empty value')

export const Basic: Story = {
  render: (args: GridProps) => {
    return <>
      <Grid {...args}>
        {defaultArray.map((el, i) => (
        <GridItem key={i} >
          <Widget>Widget #{i + 1}</Widget>
        </GridItem>
        ))}
      </Grid>
    </>
  }
}

export const WithCustomLayout: Story = {
  render: (args: GridProps) => (
    <Grid {...args}>
      {
        Array.from(Array(6).keys()).map((widget) => (
          <GridItem key={widget + 1}>
            <Widget>Widget #{widget + 1}</Widget>
          </GridItem>
        ))
      }
    </Grid>
  ),
  args: {
    layout: {
      cols: ['repeat(2, 280px)'],
      rows: ['repeat(3, 100px)']
    }
  }
}

const opts = [
  {
    label:
      'Create new',
    value: 1
  },
  {
    label: 'kata/edr',
    value: 2
  },
  {
    label: 'DestinationID',
    value: 3
  },
  {
    label: 'Enable network isolation',
    value: 4
  },
  {
    label: 'Inbount/outbound',
    value: 5
  },
  {
    label: 'sqas',
    value: 6
  }
]
const dataKeyValue2 = [
  {
    pairKey: 'Workers',
    pairValue: (<Textbox.Number value={0} />)
  },
  {
    pairKey: 'Some very very long text that consist 2 lines or maybe more. Some very very long text that consist 2 lines or maybe more.Some very very long text that consist 2 lines or maybe more.',
    pairValue: (<Text>Some very very long text that consist 2 lines or maybe more. Some very very long text that consist 2 lines or maybe more. Some very very long text that consist 2 lines or maybe more.</Text>)
  },
  {
    pairKey: 'Response rule',
    pairValue: (
      <Select placeholder="Select" options={opts} value={1} />
    )
  }
]

export const GridTemplate: Story = {
  render: (args: GridProps) => (
    <Space size={24} width={'100%'} direction={'vertical'}>
      <FormGrid {...args} gridPreset={'4fr 6fr 2fr'}>
        <Space size={16} width={'100%'} direction={'vertical'} align={'start'}>
          <Text type='H3'>GridPreset &apos;4fr 6fr 2fr&apos;</Text>
          <KeyValue
            data={dataKeyValue2}
          />
        </Space>
      </FormGrid>
      <FormGrid {...args} gridPreset={'4fr 8fr'}>
        <Space size={16} width={'100%'} direction={'vertical'} align={'start'}>
          <Text type='H3'>GridPreset &apos;4fr 8fr&apos;</Text>
          <KeyValue
            data={dataKeyValue2}
          />
        </Space>
      </FormGrid>
      <FormGrid {...args} gridPreset={'3fr 6fr 3fr'}>
        <Space size={16} width={'100%'} direction={'vertical'} align={'start'}>
          <Text type='H3'>GridPreset &apos;3fr 6fr 3fr&apos;</Text>
          <KeyValue
            data={dataKeyValue2}
          />
        </Space>
      </FormGrid>
      <FormGrid gridPreset={'4fr 6fr 2fr'}>
        <Text type='BTM2'>Filter</Text>
        <Card>
            <Space size={16} width={'100%'} direction={'vertical'} align={'start'}>
            <Text type='H5'>GridPreset &apos;4fr 6fr 2fr&apos;</Text>
            <KeyValue
              gridLayout={{ cols: ['4fr 6fr 2fr'] }}
              data={dataKeyValue2}
            />
            <Text type='H5'>GridPreset &apos;4fr 8fr&apos;</Text>
            <KeyValue
              gridLayout={{ cols: ['4fr 8fr'] }}
              data={dataKeyValue2}
            />
            <Text type='H5'>GridPreset &apos;3fr 6fr 3fr&apos;</Text>
            <KeyValue
              gridLayout={{ cols: ['3fr 6fr 3fr'] }}
              data={dataKeyValue2}
            />
          </Space>
        </Card>
      </FormGrid>
      <FormGrid gridPreset={'4fr 6fr 2fr'}>
        <Space size={16} width={'100%'} direction={'vertical'} align={'start'}>
          <Text type='H3'>4fr 6fr 2fr</Text>
          <KeyValue
            data={dataKeyValue2}
          />
          <Card>
            <KeyValue
              data={dataKeyValue2}
            />
          </Card>
          <KeyValue
            data={dataKeyValue2}
          />
        </Space>
      </FormGrid>
      <FormGrid gridPreset={'4fr 8fr'}>
        <Space size={16} width={'100%'} direction={'vertical'} align={'start'}>
          <Text type='H3'>4fr 8fr</Text>
          <KeyValue
            data={dataKeyValue2}
          />
          <Card>
            <KeyValue
              data={dataKeyValue2}
            />
          </Card>
          <KeyValue
            data={dataKeyValue2}
          />
        </Space>
      </FormGrid>
      <FormGrid gridPreset={'3fr 6fr 3fr'}>
        <Space size={16} width={'100%'} direction={'vertical'} align={'start'}>
          <Text type='H3'>3fr 6fr 3fr</Text>
          <KeyValue
            data={dataKeyValue2}
          />
          <Card>
            <KeyValue
              data={dataKeyValue2}
            />
          </Card>
          <KeyValue
            data={dataKeyValue2}
          />
        </Space>
      </FormGrid>
    </Space>
  )
}
