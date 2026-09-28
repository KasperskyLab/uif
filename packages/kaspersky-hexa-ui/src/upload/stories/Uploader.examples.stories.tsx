import { ThemedPalette, type ThemedPaletteProps } from '@design-system/palette'
import { StyledTag } from '@sb/components/Warnings'
import { renderVariants } from '@sb/StoryComponents'
import { Button } from '@src/button'
import { Field } from '@src/field'
import { SectionMessage } from '@src/section-message'
import { Sidebar } from '@src/sidebar'
import { P, Text } from '@src/typography'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import { type UploaderProps, type UploadFile } from '../types'
import { Uploader } from '../Uploader'
import {
  downloadableFileList,
  filesWithoutDescription,
  longErrorFileList,
  longNameFileList,
  maxCountFileList,
  overflowFileList,
  oversizedFileList,
  progressFileList,
  singleDoneFileList,
  statusFileList,
  uploadingWithoutPercentFileList,
  zeroSizeFileList
} from './fileListExamples'
import { uploaderStorySettings } from './Uploader.stories'

const meta: Meta<UploaderProps> = {
  title: 'Hexa UI Components/Uploader/Stories',
  component: Uploader,
  tags: ['!autodocs'],
  ...uploaderStorySettings
}

export default meta

type Story = StoryObj<UploaderProps>

function ControlledUploader ({ fileList, onChange, ...props }: UploaderProps) {
  const [files, setFiles] = React.useState(fileList)

  React.useEffect(() => {
    setFiles(fileList)
  }, [fileList])

  return (
    <Uploader
      {...props}
      fileList={files}
      onChange={info => {
        setFiles(info.fileList)
        onChange?.(info)
      }}
    />
  )
}

export const Size: Story = {
  render: args => renderVariants(
    (['small', 'medium'] as const).map(size => ({
      label: size,
      content: <Uploader {...args} size={size} />
    })),
    true
  ),
  argTypes: {
    size: { control: false }
  }
}

export const Disabled: Story = {
  ...Size,
  args: {
    disabled: true
  }
}

export const SingleFile: Story = {
  render: args => <Uploader {...args} />,
  args: {
    description: '1 file, size up to 100KB',
    maxCount: 1,
    maxTotalSize: 100 * 1024
  }
}

export const ManualUpload: Story = {
  render: args => {
    const ref = React.useRef<any>()
    const [files, setFiles] = React.useState<UploadFile[]>([])

    return (
      <div style={{ width: '100%' }}>
        <SectionMessage closable={false} mode="info">
          <P>
            You can disable the automatic upload by setting <StyledTag>manual</StyledTag> prop and start
            the upload of the selected files manually, e.g. by click on your own button.
          </P>
          <P>
            Вы можете отключить автоматическую загрузку, установив параметр <StyledTag>manual</StyledTag>,
            и начать загрузку выбранных файлов вручную, например, нажав на свою кнопку.
          </P>
        </SectionMessage>
        <Uploader
          {...args}
          ref={ref}
          onChange={info => {
            setFiles(info.fileList)
            args.onChange?.(info)
          }}
          style={{ marginTop: 16 }}
        />
        <Button
          loading={files.some(x => x.status === 'uploading')}
          onClick={() => ref.current.upload()}
          style={{ marginTop: 16 }}
        >
          Upload
        </Button>
      </div>
    )
  },
  args: {
    description: 'The files will be uploaded to the server after clicking on the Upload button',
    manual: true
  }
}

function Container ({ children, style, ...props }: any) {
  return (
    <div {...props} style={{
      border: '1px solid grey',
      height: 520,
      padding: 20,
      position: 'relative',
      ...style
    }}>
      <Text style={{
        background: 'white',
        padding: '0 5px',
        position: 'absolute',
        left: 0,
        top: 0,
        transform: 'translate(10px, -50%'
      }}>
        Container
      </Text>
      {children}
    </div>
  )
}

export const ControlOverFileList: Story = {
  render: ({ fileList, ...args }) => {
    const [files, setFiles] = React.useState<UploadFile[] | undefined>(fileList)

    return (
      <div style={{ width: '100%' }}>
        <SectionMessage closable={false} mode="info">
          <P>
            You can gain full control over the file list if needed. Enable <StyledTag>manual</StyledTag>
            and pass the necessary data to <StyledTag>fileList</StyledTag> prop. You may want it if you need
            <ul style={{ marginBottom: 0 }}>
              <li>to display data previously got from backend;</li>
              <li>a custom handler to upload the selected files.</li>
            </ul>
          </P>
          <P>
            Вы можете самостоятельно управлять списком файлов, если необходимо. Включите <StyledTag>manual</StyledTag>
            и передайте необходимые данные в проп <StyledTag>fileList</StyledTag>. Это может понадобится,
            если вам
            <ul style={{ marginBottom: 0 }}>
              <li>нужно отобразить данные ранее полученные от бэкенда;</li>
              <li>нужен кастомный обработчик для загрузки файлов.</li>
            </ul>
          </P>
        </SectionMessage>

        <Uploader
          {...args}
          fileList={files}
          onChange={info => {
            setFiles(info.fileList)
            args.onChange?.(info)
          }}
          style={{ marginTop: 16 }}
        />
      </div>
    )
  },
  args: {
    fileList: [
      {
        uid: 'xxx_1',
        name: 'file_name_1.png',
        size: 500 * 1024 * 1024,
        status: 'success'
      },
      {
        uid: 'xxx_2',
        name: 'file_name_2.png',
        percent: 45,
        size: 150 * 1024,
        status: 'uploading'
      }
    ],
    manual: true,
    maxFileSize: 320 * 1024
  }
}

export const Validation: Story = {
  render: () => {
    const [files, setFiles] = React.useState<UploadFile[]>([])
    const [error, setError] = React.useState<string | undefined>(undefined)

    function onSubmit () {
      if (files.length === 0) {
        setError('Upload a file to conitniue')
      } else {
        setError('Something went wrong. Try again')
      }
    }

    return (
      <Sidebar
        footerLeft={(
          <>
            <Button onClick={onSubmit}>Import</Button>
          </>
        )}
        size="small"
        title="Import a policy"
        visible
      >
        <Field
          control={(
            <Uploader
              description="Select a file to import a policy"
              fileList={files}
              manual
              maxCount={1}
              onChange={info => {
                setError(undefined)
                setFiles(info.fileList)
              }}
              validationStatus={error ? 'error' : undefined}
            />
          )}
          message={error}
        />
      </Sidebar>
    )
  }
}

export const FullHeight: Story = {
  render: args => (
    <div style={{ width: '100%' }}>
      <SectionMessage closable={false} mode="info">
        <P>
          You can extend the height of <StyledTag>Uploader</StyledTag> to the height of the container by
          setting <StyledTag>fullHeight</StyledTag> prop.
        </P>
        <P>
          Вы можете увеличить высоту <StyledTag>Uploader</StyledTag> до высоты контейнера, установив
          параметр <StyledTag>fullHeight</StyledTag>.
        </P>
      </SectionMessage>
      <Container style={{ marginTop: 16 }}>
        <Uploader {...args} />
      </Container>
    </div>
  ),
  args: {
    fullHeight: true
  }
}

export const FileStatuses: Story = {
  render: args => <ControlledUploader {...args} />,
  args: {
    description: 'PDF, XML, CSV and ZIP',
    fileList: statusFileList,
    manual: true,
    maxCount: 8,
    maxTotalSize: 320 * 1024
  }
}

export const SizeWithFiles: Story = {
  render: args => renderVariants(
    (['small', 'medium'] as const).map(size => ({
      label: size,
      content: <ControlledUploader {...args} size={size} />
    })),
    true
  ),
  argTypes: {
    size: { control: false }
  },
  args: {
    description: 'Up to 8 files',
    fileList: statusFileList,
    manual: true,
    maxCount: 8,
    maxTotalSize: 320 * 1024
  }
}

export const DisabledWithFiles: Story = {
  ...SizeWithFiles,
  args: {
    ...SizeWithFiles.args,
    disabled: true
  }
}

export const SingleFileSelected: Story = {
  render: args => <ControlledUploader {...args} />,
  args: {
    description: '1 file, size up to 100KB',
    fileList: singleDoneFileList,
    manual: true,
    maxCount: 1,
    maxTotalSize: 100 * 1024
  }
}

export const TruncateFileName: Story = {
  render: args => renderVariants(
    [true, false].map(truncateFileName => ({
      label: `truncateFileName = ${truncateFileName}`,
      content: (
        <div style={{ maxWidth: 480, width: '100%' }}>
          <ControlledUploader {...args} truncateFileName={truncateFileName} />
        </div>
      )
    })),
    true
  ),
  argTypes: {
    truncateFileName: { control: false }
  },
  args: {
    description: 'Long file names',
    fileList: longNameFileList,
    manual: true
  }
}

export const ShowProgress: Story = {
  render: args => renderVariants(
    [true, false].map(showProgress => ({
      label: `showProgress = ${showProgress}`,
      content: <ControlledUploader {...args} showProgress={showProgress} />
    })),
    true
  ),
  argTypes: {
    showProgress: { control: false }
  },
  args: {
    description: 'Upload in progress',
    fileList: progressFileList,
    manual: true
  }
}

export const DownloadableFiles: Story = {
  render: args => (
    <ControlledUploader
      {...args}
      onDownload={file => {
        args.onDownload?.(file)
      }}
      onDownloadAll={() => {
        args.onDownloadAll?.()
      }}
    />
  ),
  args: {
    description: 'Files available for download',
    fileList: downloadableFileList,
    manual: true,
    maxCount: 4
  }
}

export const FileListOverflow: Story = {
  render: args => <ControlledUploader {...args} />,
  args: {
    description: 'The file list is limited to 287px and scrolls',
    fileList: overflowFileList,
    manual: true,
    maxCount: 12,
    maxTotalSize: 320 * 1024
  }
}

export const MaxCountReached: Story = {
  render: args => renderVariants(
    (['small', 'medium'] as const).map(size => ({
      label: size,
      content: <ControlledUploader {...args} size={size} />
    })),
    true
  ),
  argTypes: {
    size: { control: false }
  },
  args: {
    description: 'Maximum number of files reached',
    fileList: maxCountFileList,
    manual: true,
    maxCount: 3
  }
}

export const EdgeCases: Story = {
  render: args => renderVariants(
    [
      {
        label: 'oversized files',
        content: (
          <ControlledUploader
            {...args}
            description="Each file up to 100 KB"
            fileList={oversizedFileList}
            maxCount={undefined}
            maxFileSize={100}
            maxTotalSize={undefined}
          />
        )
      },
      {
        label: 'long error',
        content: (
          <ControlledUploader
            {...args}
            description="Retry or remove the file"
            fileList={longErrorFileList}
            maxCount={undefined}
            maxTotalSize={undefined}
          />
        )
      },
      {
        label: 'zero size',
        content: (
          <ControlledUploader
            {...args}
            description="Empty file"
            fileList={zeroSizeFileList}
            maxCount={undefined}
            maxTotalSize={undefined}
          />
        )
      },
      {
        label: 'uploading without percent',
        content: (
          <ControlledUploader
            {...args}
            description="Progress is hidden when percent is empty"
            fileList={uploadingWithoutPercentFileList}
            maxCount={undefined}
            maxTotalSize={undefined}
          />
        )
      },
      {
        label: 'without description',
        content: (
          <ControlledUploader
            {...args}
            description={undefined}
            fileList={filesWithoutDescription}
            maxCount={undefined}
            maxTotalSize={undefined}
          />
        )
      },
      {
        label: 'validationStatus with files',
        content: (
          <ControlledUploader
            {...args}
            description="Select a file to continue"
            fileList={singleDoneFileList}
            maxCount={undefined}
            maxTotalSize={undefined}
            validationStatus="error"
          />
        )
      }
    ],
    true
  )
}

export const ColorTokens: StoryObj<ThemedPaletteProps> = {
  args: {
    source: {
      upload: componentColors.upload,
      upload_header: componentColors.upload_header,
      upload_file: componentColors.upload_file
    }
  },
  render: args => <ThemedPalette {...args} />
}
