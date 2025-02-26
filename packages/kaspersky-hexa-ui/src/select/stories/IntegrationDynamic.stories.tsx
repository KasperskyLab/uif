import { Meta, StoryObj } from '@storybook/react'
import React, { useCallback, useRef, useState } from 'react'
import styled from 'styled-components'

import { Select } from '../Select'

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

function SelectPaginated (): JSX.Element {
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
      options={options}
      loading={loading}
      hasMore={hasMore}
      onLoadMore={onLoadMore}
      onDropdownVisibleChange={handleDropdownOpen}
    />
  )
}

const meta: Meta = {
  title: 'Hexa UI Components/Inputs/Select/Integration/DynamicSelect',
  component: SelectPaginated,
  decorators: [
    (Story, context) => (
      <Wrapper>
        <Story {...context}/>
      </Wrapper>
    )
  ]
}
export default meta

type Story = StoryObj

const Wrapper = styled.div`
  max-width: 300px;
  flex: 1;
`

export const Basic: Story = {}
