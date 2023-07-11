import React from 'react'
import { Upload } from '../Upload'
import { StoryLayout } from '../../../.storybook/StoryComponents'
import { badges } from '../../../.storybook/badges'
import { Icon } from '../../icon'
import { withMeta } from '../../../helpers/hocs/MetaComponent/withMeta'
import MetaData from '../__meta__/meta.json'
import { Size } from '../../../design-system/types'
import { useTheme } from '../../../design-system/theme/hooks'
import { UploadDraggerProps, UploadUrlProps } from '../types'

export default {
  title: 'Molecules/Upload',
  component: Upload,
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(MetaData)
    }
  }
}

const argsFile: UploadDraggerProps = {
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
  successButtons: [{ size: Size.Large, children: 'Select another file', mode: 'secondary' }, { size: Size.Large, children: 'Repeat', mode: 'secondary' }]
}

const argsUrl: UploadUrlProps = {
  value: 'https://evil.corp/malware.exe',
  status: 'none',
  title: 'Paste link to file here',
  helpText: 'Placeholder',
  loadingButtons: [{ size: Size.Large, children: 'Cancel', mode: 'secondary' }],
  errorButtons: [{ size: Size.Large, children: 'Enter new URL', mode: 'secondary' }, { size: Size.Large, children: 'Repeat', mode: 'secondary' }],
  successButtons: [{ size: Size.Large, children: 'Enter new URL', mode: 'secondary' }, { size: Size.Large, children: 'Repeat', mode: 'secondary' }]
}

const argTypesFile = {
  status: {
    control: { type: 'select', default: 'none' },
    options: ['none', 'error', 'pending', 'success', 'selected']
  },
  // disable autogeneric control
  title: { table: { disable: true } },
  file: { table: { disable: true } },
  iconFile: { table: { disable: true } },
  fileButtons: { table: { disable: true } },
  buttons: { table: { disable: true } },
  icon: { table: { disable: true } },
  helpText: { table: { disable: true } },
  errorTitle: { table: { disable: true } },
  errorDescription: { table: { disable: true } },
  errorButtons: { table: { disable: true } },
  loadingTitle: { table: { disable: true } },
  loadingDescription: { table: { disable: true } },
  loadingButtons: { table: { disable: true } },
  successTitle: { table: { disable: true } },
  successDescription: { table: { disable: true } },
  successButtons: { table: { disable: true } }
}

const fileList = [
  {
    uid: '-1',
    name: 'it-could-be-file-name.png',
    status: 'done',
    url: 'http://evil.com/xxx.png'
  },
  {
    uid: '-2',
    name: 'https://or-link.com/',
    status: 'done',
    url: 'http://evil.com/xxx.png'
  },
  {
    uid: '-3',
    name: 'its-up-to-you',
    status: 'done',
    url: 'http://evil.com/xxx.png'
  },
  {
    uid: '-4',
    name: 'its-also-me-but-error',
    status: 'error',
    url: 'http://evil.com/xxx.png'
  },
  {
    uid: '-5',
    name: 'or-success',
    status: 'success',
    url: 'http://evil.com/xxx.png'
  },
  {
    uid: '-6',
    name: 'never-mind-just-uploading',
    status: 'uploading',
    url: 'http://evil.com/xxx.png'
  },
  {
    uid: '-7',
    name: 'oopsie-removed',
    status: 'removed',
    url: 'http://evil.com/xxx.png'
  },
  {
    uid: '-8',
    name: 'hover-me!',
    status: 'error',
    response: 'Server Error 500',
    url: 'http://evil.com/xxx.png'
  }
]

const FileTemplate = ({ ...rest }) => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key} style={{ width: '100%' }}>
      <Upload status={rest.status} {...rest} />
    </StoryLayout>
  )
}
const UrlTemplate = ({ ...rest }) => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key} style={{ width: '100%' }}>
      <Upload.Url status={rest.status} {...rest} />
    </StoryLayout>
  )
}
const CustomTemplate = ({ ...rest }) => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key} style={{ width: '100%' }}>
      <Upload.UploadCustom status={rest.status} {...rest} onChange={console.log} />
    </StoryLayout>
  )
}

export const Basic = (args: BasicType) => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <FileTemplate {...args}/>
    </StoryLayout>
  )
}
type BasicType = UploadDraggerProps & typeof argTypesFile
Basic.args = argsFile
Basic.argTypes = argTypesFile

export const CustomSize = (args: CustomSizeType) => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <CustomTemplate {...args}/>
    </StoryLayout>
  )
}
type CustomSizeType = UploadDraggerProps & typeof argTypesFile
CustomSize.args = argsFile
CustomSize.argTypes = argTypesFile
CustomSize.parameters = {
  docs: {
    storyDescription: 'For ease of use, the `width` and `height` parameters have been added to control the size of the component.'
  }
}

export const UploadUrl = (args: UploadUrlType) => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <UrlTemplate {...args}/>
    </StoryLayout>
  )
}
type UploadUrlType = UploadUrlProps & typeof argTypesFile
UploadUrl.args = argsUrl
UploadUrl.argTypes = argTypesFile
UploadUrl.parameters = {
  docs: {
    storyDescription: 'Modification for loading links. You can listen to the entered value by passing the onChange callback'
  }
}

export const UploadedFiles = (args: UploadedFilesType) => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <UrlTemplate {...args}/>
    </StoryLayout>
  )
}
type UploadedFilesType =UploadUrlProps & typeof fileList & typeof argTypesFile
UploadedFiles.args = { ...argsUrl, fileList }
UploadedFiles.argTypes = argTypesFile
UploadedFiles.parameters = {
  docs: {
    storyDescription: 'Both components can render a list of downloaded files/links. To display this list, you must pass the fileList parameter'
  }
}
