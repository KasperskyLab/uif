import { withMeta } from '@sb/components/Meta'
import { sbHideControls } from '@sb/helpers'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React, { ReactNode, useCallback, useRef, useState } from 'react'
import styled from 'styled-components'

import MetaData from '../__meta__/meta.DynamicSelect.json'
import { Select } from '../Select'
import { SelectProps } from '../types'

import Docs from './IntegrationDynamicDocs'


type Option = {
  value: number,
  label: string
}

const fakeOptions: Option[] = Array(110)
  .fill(0)
  .map((_, i) => ({
    value: i,
    label: `Option ${i}`
  }))

const delay = (ms: number) => new Promise<void>(resolve => {
  setTimeout(() => {
    resolve()
  }, ms)
})

const fetchData = async (index: number): Promise<Option[]> => {
  await delay(1000)

  return fakeOptions.slice(index, index + 20)
}

function SelectPaginated ({ virtual = false, placeholder = '' }: { virtual?: boolean, placeholder?: ReactNode }): JSX.Element {
  const [options, setOptions] = useState<Option[]>()
  const [hasMore, setHasMore] = useState(false)
  const initLoadRef = useRef(false)

  const loading = !options

  const loadData = useCallback(async (slice: number) => {
    const options = await fetchData(slice)
    setOptions((prev = []) => [...prev, ...options])
    setHasMore(options.length === 20)
  }, [])

  const handleDropdownOpen = useCallback(() => {
    if (!initLoadRef.current) {
      initLoadRef.current = true
      loadData(0)
    }
  }, [loadData])

  const onLoadMore = useCallback(() => {
    loadData(options?.length ?? 0)
  }, [loadData, options])

  return (
    <Select
      placeholder={placeholder}
      options={options}
      loading={loading}
      hasMore={hasMore}
      onLoadMore={onLoadMore}
      onDropdownVisibleChange={handleDropdownOpen}
      virtual={virtual}
    />
  )
}

const meta: Meta<SelectProps> = {
  title: 'Hexa UI Components/Inputs/Select/Integration/DynamicSelect',
  component: SelectPaginated,
  argTypes: {
    hasMore: {},
    onLoadMore: {},
    onDropdownVisibleChange: {},
    ...sbHideControls(['theme'])
  },
  args: {
    placeholder: 'Select',
    testId: 'select-test-id',
    klId: 'select-kl-id',
    dropdownMaxHeight: 256
  },
  parameters: {
    docs: {
      page: withMeta(MetaData, Docs)
    },
    design: MetaData.pixsoView
  },
  decorators: [
    (Story, context) => (
      <Wrapper>
        <Story {...context}/>
      </Wrapper>
    )
  ]
}

export default meta

type Story = StoryObj<SelectProps>

const Wrapper = styled.div`
  max-width: 300px;
  flex: 1;
`

export const Basic: Story = {}

export const WithVirtualization: Story = {
  args: {
    virtual: true
  }
}

