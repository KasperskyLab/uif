
import { withDesignControls } from '@sb/components/designControls'
import { renderVariants } from '@sb/StoryComponents'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import MetaData from '../__meta__/meta.json'
import { FileItem, FileItemProps } from '../UploadList/FileItem'

const meta: Meta<FileItemProps> = {
  title: 'Hexa UI Components/Upload/File Item',
  component: FileItem,
  tags: ['!autodocs'],
  ...withDesignControls<FileItemProps>({
    componentName: 'uploaderFileItem',
    meta: {
      argTypes: {
        error: { control: 'text' },
        status: {
          control: { type: 'radio' },
          options: ['done', 'uploading', 'error']
        }
      },
      args: {
        error: 'Something goes wrong',
        name: 'The quick brown fox jumps over the lazy dog, the quick brown fox jumps over the lazy dog.png',
        size: 1000000,
        status: 'done',
        truncateName: true
      },
      parameters: {
        actions: { argTypesRegex: '^(on.*)' },
        design: MetaData.figmaView
      }
    }
  })
}

export default meta

const StyledFileItem = styled(FileItem)`
  max-width: 540px;
`

export const FileItemStory: StoryObj<FileItemProps> = {
  render: args => <StyledFileItem {...args} />,
  name: 'File Item'
}

export const Status: StoryObj<FileItemProps> = {
  render: args => renderVariants([
    { label: 'default', content: <StyledFileItem {...args} status="done" /> },
    { label: 'uploading', content: <StyledFileItem {...args} percent={50} status="uploading" /> },
    { label: 'error', content: <StyledFileItem {...args} status="error" /> },
    { label: 'disabled', content: <StyledFileItem {...args} disabled status="done" /> }
  ], true)
}
