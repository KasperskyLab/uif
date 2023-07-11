import React from 'react'
import styled from 'styled-components'
import { badges } from '../../../.storybook/badges'
import { withMeta } from '../../../helpers/hocs/MetaComponent/withMeta'
import Meta from '../__meta__/meta.json'
import { Tree } from '../Tree'
import { ITreeProps } from '../types'

export default {
  title: 'Molecules/Tree',
  component: Tree,
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(Meta)
    }
  }
}

const Wrapper = styled.div`
  height: 200px;
`

const FixedHeightWrapper = styled.div`
  width: 250px;
  background: #FFFFFF;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 20px;

  .ant-tree-list {
    height: 170px;
  }
`

const treeDataMock = [
  {
    title: 'Drive C:/',
    key: 'C',
    children: [
      {
        title: 'Windows',
        key: 'win',
        children: [
          {
            title: 'System 32',
            key: 's32'
          },
          {
            title: 'Boot',
            key: 'boot'
          },
          {
            title: 'Fonts',
            key: 'fonts'
          }
        ]
      },
      {
        title: 'Program files',
        key: 'ps',
        children: [
          {
            title: 'Apple',
            key: 'a'
          },
          {
            title: 'Microsoft',
            key: 'ms'
          },
          {
            title: 'Ubisoft',
            key: 'ubi'
          }
        ]
      },
      {
        title: 'Users',
        key: 'urs'
      },
      {
        title: 'Documents',
        key: 'docs'
      },
      {
        title: 'Games',
        key: 'games'
      },
      {
        title: 'New folder',
        key: 'nf'
      },
      {
        title: 'New folder (1)',
        key: 'nf1'
      },
      {
        title: 'New folder (2)',
        key: 'nf2'
      },
      {
        title: 'New folder (3)',
        key: 'nf3'
      }
    ]
  },
  {
    title: 'Drive D:/',
    key: 'd',
    children: [
      {
        title: 'Repo',
        key: 'repo'
      },
      {
        title: 'Books',
        key: 'books'
      },
      {
        title: 'Video',
        key: 'video'
      }
    ]
  },
  {
    title: 'Drive Z:/',
    key: 'zrdv'
  }
]

const TreeTemplate = ({
  treeData = treeDataMock,
  ...rest
}: ITreeProps) => {
  return (
    <Wrapper>
      <Tree
        {...rest}
        treeData={treeData}
      />
    </Wrapper>
  )
}

const TreeCheckableTemplate = ({
  treeData = treeDataMock,
  ...rest
}: ITreeProps) => {
  return (
    <Wrapper>
      <Tree
        {...rest}
        checkable
        treeData={treeData}
      />
    </Wrapper>
  )
}

const TreeDraggableTemplate = ({
  treeData = treeDataMock,
  ...rest
}: ITreeProps) => {
  return (
    <Wrapper>
      <Tree
        {...rest}
        draggable
        treeData={treeData}
      />
    </Wrapper>
  )
}

const TreeScrollableTemplate = ({
  treeData = treeDataMock,
  ...rest
}: ITreeProps) => {
  return (
    <FixedHeightWrapper>
      <Tree
        {...rest}
        treeData={treeData}
      />
    </FixedHeightWrapper>
  )
}

const TreeDisabledTemplate = ({
  treeData = treeDataMock,
  ...rest
}: ITreeProps) => {
  return (
    <Wrapper>
      <Tree
        {...rest}
        disabled={true}
        treeData={treeData}
      />
    </Wrapper>
  )
}

export const Basic = TreeTemplate.bind({})
export const Checkable = TreeCheckableTemplate.bind({})
export const Draggable = TreeDraggableTemplate.bind({})
export const Scrollable = TreeScrollableTemplate.bind({})
export const Disabled = TreeDisabledTemplate.bind({})
