import React from 'react'
import { Upload } from '../Upload'
import { badges } from '@sb/badges'
import { Icon } from '@src/icon'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import MetaData from '../__meta__/meta.json'
import { Size } from '@design-system/types'
import { UploadDraggerProps, UploadProps, UploadUrlProps } from '../types'
import { Meta } from '@storybook/react'

const meta: Meta<UploadProps> = {
  title: 'Molecules/Upload',
  component: Upload,
  args: {
    status: 'none',
    file: {
      name: 'monster-file.exe',
      size: 123456
    },
    fileButtons: [{ size: Size.Large, text: '', mode: 'secondary', icon: (<Icon size="medium" name="Delete" />) }],
    buttons: [{ size: Size.Large, children: 'Add files', mode: 'secondary' }],
    loadingTitle: 'Uploading 12%',
    loadingButtons: [{ size: Size.Large, children: 'Cancel', mode: 'secondary' }],
    errorButtons: [{ size: Size.Large, children: 'Select another file', mode: 'secondary' }, { size: Size.Large, children: 'Repeat', mode: 'secondary' }],
    successButtons: [{ size: Size.Large, children: 'Select another file', mode: 'secondary' }, { size: Size.Large, children: 'Repeat', mode: 'secondary' }],
    testId: 'upload-test-id',
    klId: 'upload-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.figmaView,
    controls: {
      exclude: [
        'title', 'file', 'iconFile', 'fileButtons', 'buttons', 'icon', 'helpText', 'errorTitle', 'errorDescription',
        'errorButtons', 'loadingTitle', 'loadingDescription', 'loadingButtons', 'successTitle', 'successDescription',
        'successButtons'
      ]
    }
  }
}
export default meta

const argsUrl: UploadUrlProps = {
  value: 'https://evil.corp/malware.exe',
  status: 'none',
  title: 'Paste link to file here',
  helpText: 'Placeholder',
  loadingButtons: [{ size: Size.Large, children: 'Cancel', mode: 'secondary' }],
  errorButtons: [{ size: Size.Large, children: 'Enter new URL', mode: 'secondary' }, { size: Size.Large, children: 'Repeat', mode: 'secondary' }],
  successButtons: [{ size: Size.Large, children: 'Enter new URL', mode: 'secondary' }, { size: Size.Large, children: 'Repeat', mode: 'secondary' }]
}

const fileList = [
  { name: 'it-could-be-file-name.png', status: 'done' },
  { name: 'https://or-link.com/', status: 'done' },
  { name: 'its-up-to-you', status: 'done' },
  { name: 'its-also-me-but-error', status: 'error' },
  { name: 'or-success', status: 'success' },
  { name: 'never-mind-just-uploading', status: 'uploading' },
  { name: 'oopsie-removed', status: 'removed' },
  { name: 'hover-me!', status: 'error', response: 'Server Error 500' }
].map((item, index: number) => ({
  ...item,
  url: 'http://evil.com/xxx.png',
  uid: `-${index + 1}`
}))

type BasicType = UploadDraggerProps & UploadProps
export const Basic = {
  render: (args: BasicType) => <Upload {...args}/>
}

type CustomSizeType = UploadDraggerProps & UploadProps
export const CustomSize = {
  render: (args: CustomSizeType) => <Upload.UploadCustom {...args}/>
}

type UploadUrlType = UploadUrlProps & UploadProps
export const UploadUrl = {
  render: (args: UploadUrlType) => <Upload.Url {...args}/>
}

type UploadedFilesType = UploadUrlProps & typeof fileList & UploadProps
export const UploadedFiles = {
  render: (args: UploadedFilesType) => <Upload.Url {...args}/>,
  args: { ...argsUrl, fileList }
}
