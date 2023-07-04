import React, { useState } from 'react'
import { badges } from '../../.storybook/badges'
import { withMeta } from '../../helpers/hocs/MetaComponent/withMeta'
import Meta from './__meta__/meta.json'
import { Pagination } from './Pagination'
import { IPaginationProps, PaginationSize } from './types'
import { Size } from '../../design-system/types'
import styled from 'styled-components'

export default {
  title: 'Molecules/Pagination',
  component: Pagination,
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(Meta)
    }
  }
}

const Wrapper = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

const defaultProps = {
  total: 500
}

const PaginationTemplate = ({
  total = 50,
  current: currentFromProps,
  pageSize: pageSizeFromProps,
  ...rest
}: IPaginationProps) => {
  const [pageSize, setPageSize] = useState(pageSizeFromProps)
  const [current, setCurrent] = useState(currentFromProps)
  const clb = (page: number, pageSize?: number) => {
    setCurrent(page)
    setPageSize(Number(pageSize))
  }
  return (
    <Wrapper>
      <Pagination
        total={total}
        {...rest}
        pageSize={pageSize}
        current={current}
        onChange={clb}
        onShowSizeChange={clb}
      />
    </Wrapper>
  )
}

export const Basic = PaginationTemplate.bind({})

const WithSizeChangerTemplate = ({
  total = defaultProps.total,
  current: currentFromProps,
  pageSize: pageSizeFromProps,
  ...rest
}: IPaginationProps) => {
  const [pageSize, setPageSize] = useState(pageSizeFromProps)
  const [current, setCurrent] = useState(currentFromProps)
  const clb = (page: number, pageSize?: number) => {
    setCurrent(page)
    setPageSize(Number(pageSize))
  }
  return (
    <Wrapper>
      <Pagination
        total={total}
        showSizeChanger
        {...rest}
        pageSize={pageSize}
        current={current}
        onChange={clb}
        onShowSizeChange={clb}
      />
    </Wrapper>
  )
}

export const WithSizeChanger = WithSizeChangerTemplate.bind({})

const WithTotalTemplate = ({
  total = defaultProps.total,
  current: currentFromProps,
  pageSize: pageSizeFromProps,
  ...rest
}: IPaginationProps) => {
  const [pageSize, setPageSize] = useState(pageSizeFromProps)
  const [current, setCurrent] = useState(currentFromProps)
  const clb = (page: number, pageSize?: number) => {
    setCurrent(page)
    setPageSize(Number(pageSize))
  }
  return (
    <Wrapper>
      <Pagination
        total={total}
        showTotal
        {...rest}
        pageSize={pageSize}
        current={current}
        onChange={clb}
        onShowSizeChange={clb}
      />
    </Wrapper>
  )
}

export const WithTotal = WithTotalTemplate.bind({})

const WithQuickJumperTemplate = ({
  total = defaultProps.total,
  current: currentFromProps,
  pageSize: pageSizeFromProps,
  ...rest
}: IPaginationProps) => {
  const [pageSize, setPageSize] = useState(pageSizeFromProps)
  const [current, setCurrent] = useState(currentFromProps)
  const clb = (page: number, pageSize?: number) => {
    setCurrent(page)
    setPageSize(Number(pageSize))
  }
  return (
    <Wrapper>
      <Pagination
        total={total}
        showSizeChanger
        showQuickJumper
        {...rest}
        pageSize={pageSize}
        current={current}
        onChange={clb}
        onShowSizeChange={clb}
      />
    </Wrapper>
  )
}

export const WithQuickJumper = WithQuickJumperTemplate.bind({})

const DisabledTemplate = ({
  total = defaultProps.total,
  current: currentFromProps,
  pageSize: pageSizeFromProps,
  ...rest
}: IPaginationProps) => {
  const [pageSize, setPageSize] = useState(pageSizeFromProps)
  const [current, setCurrent] = useState(currentFromProps)
  const clb = (page: number, pageSize?: number) => {
    setCurrent(page)
    setPageSize(Number(pageSize))
  }
  return (
    <Wrapper>
      <Pagination
        total={total}
        showSizeChanger
        showQuickJumper
        showTotal
        disabled
        {...rest}
        pageSize={pageSize}
        current={current}
        onChange={clb}
        onShowSizeChange={clb}
      />
    </Wrapper>
  )
}

export const Disabled = DisabledTemplate.bind({})

const SizesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const SizesTemplate = ({
  total = defaultProps.total,
  current: currentFromProps,
  pageSize: pageSizeFromProps,
  ...rest
}: IPaginationProps) => {
  const sizes: PaginationSize[] = [Size.Small, Size.Medium]

  const [pageSize, setPageSize] = useState(pageSizeFromProps)
  const [current, setCurrent] = useState(currentFromProps)
  const clb = (page: number, pageSize?: number) => {
    setCurrent(page)
    setPageSize(Number(pageSize))
  }

  return (
    <SizesContainer>
      {sizes.map(size => (
        <Wrapper>
          <Pagination
            total={total}
            showSizeChanger
            showQuickJumper
            showTotal
            size={size}
            {...rest}
            pageSize={pageSize}
            current={current}
            onChange={clb}
            onShowSizeChange={clb}
          />
        </Wrapper>
      ))}
    </SizesContainer>
  )
}

export const Sizes = SizesTemplate.bind({})
