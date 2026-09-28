import { withDesignControls } from '@sb/components/designControls'
import { renderVariants } from '@sb/StoryComponents'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import MetaData from '../__meta__/meta.json'
import { FileItem, FileItemProps } from '../UploadList/FileItem'

const meta: Meta<FileItemProps> = {
  title: 'Hexa UI Components/Uploader/Stories',
  component: FileItem,
  tags: ['!autodocs'],
  ...withDesignControls<FileItemProps>({
    componentName: 'uploaderFileItem',
    meta: {
      argTypes: {
        error: { control: 'text' },
        status: {
          control: { type: 'radio' },
          options: ['done', 'uploading', 'success', 'error']
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
        design: MetaData.pixsoView
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
    { label: 'selected', content: <StyledFileItem {...args} status={undefined} /> },
    { label: 'uploading', content: <StyledFileItem {...args} percent={50} status="uploading" /> },
    { label: 'done', content: <StyledFileItem {...args} status="done" /> },
    { label: 'success', content: <StyledFileItem {...args} status="success" /> },
    { label: 'error', content: <StyledFileItem {...args} status="error" /> },
    { label: 'downloadable', content: <StyledFileItem {...args} onDownload={() => undefined} status="done" /> },
    { label: 'disabled', content: <StyledFileItem {...args} disabled status="done" /> },
    { label: 'disabled success', content: <StyledFileItem {...args} disabled status="success" /> },
    { label: 'disabled error', content: <StyledFileItem {...args} disabled status="error" /> }
  ], true)
}
