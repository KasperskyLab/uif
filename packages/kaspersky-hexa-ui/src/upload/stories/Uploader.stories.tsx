import { ThemedPalette, ThemedPaletteProps } from '@design-system/palette'
import { badges } from '@sb/badges'
import { withDesignControls } from '@sb/components/designControls'
import { withMeta } from '@sb/components/Meta'
import { StyledTag } from '@sb/components/Warnings'
import { renderVariants } from '@sb/StoryComponents'
import { Button } from '@src/button'
import { SectionMessage } from '@src/section-message'
import { P, Text } from '@src/typography'
import { Meta, StoryObj } from '@storybook/react-webpack5'
import React from 'react'

import { componentColors } from '@kaspersky/hexa-ui-core/colors/js'

import MetaData from '../__meta__/meta.json'
import { RcFile, UploaderProps, UploadFile, UploadRequestOption } from '../types'
import { Uploader } from '../Uploader'

const meta: Meta<UploaderProps> = {
  title: 'Hexa UI Components/Upload',
  component: Uploader,
  ...withDesignControls<UploaderProps>({
    componentName: 'uploader',
    meta: {
      argTypes: {
        accept: {
          control: 'text',
          description: 'File types that can be accepted. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept',
          table: { type: { summary: 'string' } }
        },
        action: {
          description: 'Uploading URL',
          table: { type: { summary: 'string | ((file) => string | Promise<string>)' } }
        },
        className: {
          control: 'text',
          table: { type: { summary: 'string' } }
        },
        description: {
          control: 'text'
        },
        directory: {
          control: 'boolean',
          description: 'Support upload whole directory',
          table: { type: { summary: 'boolean' } }
        },
        customRequest: {
          description: 'Override the default handler for uploading',
          table: { type: { summary: '(options: object) => void' } }
        },
        headers: {
          description: 'Set request headers',
          table: { type: { summary: 'object' } }
        },
        maxCount: {
          control: { type: 'number', min: 1 },
          table: { type: { summary: 'number' } }
        },
        maxFileSize: {
          control: { type: 'number', min: 0 },
          table: { type: { summary: 'number' } }
        },
        maxTotalSize: {
          control: { type: 'number', min: 0 },
          table: { type: { summary: 'number' } }
        },
        method: {
          description: 'The http method of upload request',
          table: {
            defaultValue: { summary: 'post' },
            type: { summary: 'string' }
          }
        },
        onChange: {},
        onDownload: {},
        onDownloadAll: {},
        onRemove: {},
        size: {
          control: { type: 'inline-radio' },
          options: ['small', 'medium'],
          table: {
            defaultValue: { summary: 'medium' },
            type: { summary: 'small | medium' }
          }
        }
      },
      args: {
        description: 'Maximum 8 files, total size up to 320MB',
        customRequest,
        maxCount: 8,
        maxTotalSize: 320 * 1024,
        testId: 'upload-test-id',
        klId: 'upload-kl-id'
      },
      parameters: {
        actions: { argTypesRegex: '^(on.*|action)' },
        badges: [badges.stable, badges.reviewedByDesign],
        design: MetaData.pixsoView,
        docs: {
          page: withMeta(MetaData)
        }
      }
    }
  })
}

export default meta

function customRequest ({
  file,
  onError,
  onProgress,
  onSuccess
}: UploadRequestOption) {
  let percent = 0
  let aborted = false

  async function upload () {
    while (true) {
      await new Promise(resolve => setTimeout(resolve, 500))

      if (aborted) {
        return
      }

      percent += Math.floor(Math.random() * 15)

      if (percent > 20 && (file as RcFile).name.includes('error')) {
        onError?.(new Error('Something goes wrong.'))
        return
      } else if (percent < 100) {
        onProgress?.({ percent })
      } else {
        onSuccess?.({})
        return
      }
    }
  }

  upload()

  return {
    abort () {
      aborted = true
    }
  }
}

export const UploaderStory: StoryObj<UploaderProps> = {
  render: args => {
    return <div style={{ width: '100%' }}>
      <SectionMessage closable={false} mode="info">
        <P>You can simulate an upload error by selecting a file that contains the string &quot;error&quot; in its name.</P>
        <P>Вы можете сэмулировать ошибку загрузки, выбрав файл, содержащий в своем имени подстроку &quot;error&quot;.</P>
      </SectionMessage>

      <Uploader {...args} style={{ marginTop: 16 }} />
    </div>
  },
  name: 'Uploader'
}

export const Size: StoryObj<UploaderProps> = {
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

export const Disabled: StoryObj<UploaderProps> = {
  ...Size,
  args: {
    disabled: true
  }
}

export const SingleFile: StoryObj<UploaderProps> = {
  render: args => <Uploader {...args} />,
  args: {
    description: '1 file, size up to 100KB',
    maxCount: 1,
    maxTotalSize: 100 * 1024
  }
}

export const ManualUpload: StoryObj<UploaderProps> = {
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
    <div {...props} style={{ border: '1px solid grey', height: 520, padding: 20, position: 'relative', ...style }}>
      <Text style={{ background: 'white', padding: '0 5px', position: 'absolute', left: 0, top: 0, transform: 'translate(10px, -50%' }}>
        Container
      </Text>
      {children}
    </div>
  )
}

export const ControlOverFileList: StoryObj<UploaderProps> = {
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

export const FullHeight: StoryObj<UploaderProps> = {
  render: args => {
    return (
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
    )
  },
  args: {
    fullHeight: true
  }
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
