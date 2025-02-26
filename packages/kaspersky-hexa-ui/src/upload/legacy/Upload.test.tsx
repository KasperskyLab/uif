import 'jest-styled-components'
import '@testing-library/jest-dom'

import { ConfigProvider } from '@design-system/context'
import { ThemeKey } from '@design-system/types'
import { localization } from '@helpers/localization'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { convertFileSize } from '../utils/convertFileSize'

import { Upload } from './Upload'

describe('Input - Upload - Basic ', () => {
  const locale = localization['en-us'].translation
  const testId = 'upload-test-id'

  test('should render', () => {
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light} locale="en-us">
        <Upload
          testId={testId}
          status="success"
        />
      </ConfigProvider>
    )

    expect(container.querySelector(`[data-testid="${testId}"]`)).toBeInTheDocument()
  })

  test('upload file', async () => {
    const mockValidCSV = new File(['Total\n1\n2\n3\n'], 'mock-data.csv', {
      type: 'text/csv'
    })

    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light} locale="en-us">
        <Upload
          testId={testId}
          status="success"
        />
      </ConfigProvider>
    )

    const uploadInput = container.querySelector(`[data-testid="${testId}"]`) as HTMLElement
    if (uploadInput) {
      userEvent.upload(uploadInput, mockValidCSV)

      await waitFor(() => {
        expect(
          screen.getByText(locale.upload.successTitle)
        ).toBeInTheDocument()
      })
    }
  })

  test('upload file error', async () => {
    const mockValidCSV = new File(['Total\n1\n2\n3\n'], 'mock-data.csv', {
      type: 'text/csv'
    })

    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light} locale="en-us">
        <Upload
          testId={testId}
          status="error"
        />
      </ConfigProvider>
    )

    const uploadInput = container.querySelector(`[data-testid="${testId}"]`) as HTMLElement
    if (uploadInput) {
      userEvent.upload(uploadInput, mockValidCSV)

      await waitFor(() => {
        expect(
          screen.getByText(locale.upload.errorTitle)
        ).toBeInTheDocument()
      })
    }
  })

  test('upload file pending', async () => {
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light} locale="en-us">
        <Upload
          testId={testId}
          status="pending"
          loadingDescription = "monster-file.exe.zip"
        />
      </ConfigProvider>
    )

    const uploadInput = container.querySelector(`[data-testid="${testId}"]`) as HTMLElement
    expect(uploadInput).toHaveStyle('display: none')
    expect(
      screen.getByText('monster-file.exe.zip')
    ).toBeInTheDocument()
  })

  test('upload file selected', async () => {
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light} locale="en-us">
        <Upload
          testId={testId}
          status="selected"
          file = {
            { name: 'monster-file.exe', size: 123456 }
          }
        />
      </ConfigProvider>
    )

    const uploadInput = container.querySelector(`[data-testid="${testId}"]`) as HTMLElement
    expect(uploadInput).toHaveStyle('display: none')
    expect(
      screen.getByText('monster-file.exe')
    ).toBeInTheDocument()
  })

  test('render without l18n', () => {
    const enUploadTextStatus = locale.upload.successDescription
    render(
      <Upload
        testId={testId}
        status="success"
      />
    )

    expect(
      screen.getByText(enUploadTextStatus)
    ).toBeInTheDocument()
  })

  test('check convertFileSize', () => {
    const BSize = 1024
    const KBSize = 1025
    const MBSize = 1048577
    const GBSize = 1099999999
    const TBSize = 10000000000000
    const PBSize = 10000000000000000

    const convertBSmallSizeResult = convertFileSize(BSize)
    expect(convertBSmallSizeResult).toEqual('1024 B')

    const convertKBBigSizeResult = convertFileSize(KBSize)
    expect(convertKBBigSizeResult).toEqual('1 KB')

    const convertFileMbSizeResult = convertFileSize(MBSize)
    expect(convertFileMbSizeResult).toEqual('1 MB')

    const convertFileGbSizeResult = convertFileSize(GBSize)
    expect(convertFileGbSizeResult).toEqual('1.02 GB')

    const convertFileTBSizeResult = convertFileSize(TBSize)
    expect(convertFileTBSizeResult).toEqual('9.09 TB')

    const convertFilePBSizeResult = convertFileSize(PBSize)
    expect(convertFilePBSizeResult).toEqual('8.88 PB')
  })
})
