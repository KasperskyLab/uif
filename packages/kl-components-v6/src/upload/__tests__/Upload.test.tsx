import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { ThemeKey } from '../../../design-system/types'
import { Upload } from '../Upload'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import 'jest-styled-components'
import { ConfigProvider } from '../../../design-system/context'
import { localization } from '../../../helpers/localization'
import { renderHook } from '@testing-library/react-hooks'
import { useTranslation } from 'react-i18next'
import { convertFileSize } from '../convertFileSize'

describe('Input - Upload - Basic ', () => {
  const componentId = 'upload-test-id'
  test('should recieve componentId prop', () => {
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light} locale='en'>
        <Upload status='success'
          componentId={componentId}
        />
      </ConfigProvider>
    )
    const upload = container.querySelector(`[data-component-id="${componentId}"]`)
    expect(upload).toBeInTheDocument()
  })

  test('upload file', async () => {
    const mockValidCSV = new File(['Total\n1\n2\n3\n'], 'mock-data.csv', {
      type: 'text/csv'
    })

    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light} locale='en'>
        <Upload
          componentId={componentId}
          status='success'
        />
      </ConfigProvider>
    )

    const uploadInput = container.querySelector(`[data-component-id="${componentId}"]`) as HTMLElement
    if (uploadInput) {
      userEvent.upload(uploadInput, mockValidCSV)

      await waitFor(() => {
        expect(
          screen.getByText('Uploading success')
        ).toBeInTheDocument()
      })
    }
  })

  test('upload file error', async () => {
    const mockValidCSV = new File(['Total\n1\n2\n3\n'], 'mock-data.csv', {
      type: 'text/csv'
    })

    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light} locale='en'>
        <Upload
          componentId={componentId}
          status='error'
        />
      </ConfigProvider>
    )

    const uploadInput = container.querySelector(`[data-component-id="${componentId}"]`) as HTMLElement
    if (uploadInput) {
      userEvent.upload(uploadInput, mockValidCSV)

      await waitFor(() => {
        expect(
          screen.getByText('Uploading error')
        ).toBeInTheDocument()
      })
    }
  })

  test('upload file pending', async () => {
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light} locale='en'>
        <Upload
          componentId={componentId}
          status='pending'
          loadingDescription = 'monster-file.exe.zip'
        />
      </ConfigProvider>
    )

    const uploadInput = container.querySelector(`[data-component-id="${componentId}"]`) as HTMLElement
    expect(uploadInput).toHaveStyle('display: none')
    expect(
      screen.getByText('monster-file.exe.zip')
    ).toBeInTheDocument()
  })

  test('upload file selected', async () => {
    const { container } = render(
      <ConfigProvider theme={ThemeKey.Light} locale='en'>
        <Upload
          componentId={componentId}
          status='selected'
          file = {
            { name: 'monster-file.exe', size: 123456 }
          }
        />
      </ConfigProvider>
    )

    const uploadInput = container.querySelector(`[data-component-id="${componentId}"]`) as HTMLElement
    expect(uploadInput).toHaveStyle('display: none')
    expect(
      screen.getByText('monster-file.exe')
    ).toBeInTheDocument()
  })

  test('render without l18n', () => {
    // @ts-ignore
    const enUploadTextStatus = localization.en.translation.upload.successDescription
    render(
      <ConfigProvider theme={ThemeKey.Light} locale='en'>
        <Upload
          componentId={componentId}
          status='success'
        />
      </ConfigProvider>
    )

    const { result } = renderHook(() => useTranslation())
    const locText = result.current.t(enUploadTextStatus)
    expect(enUploadTextStatus).toEqual(locText)
    expect(
      screen.getByText(locText)
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
    expect(convertBSmallSizeResult).toEqual('1024.00 B')

    const convertKBBigSizeResult = convertFileSize(KBSize)
    expect(convertKBBigSizeResult).toEqual('1.00 KB')

    const convertFileMbSizeResult = convertFileSize(MBSize)
    expect(convertFileMbSizeResult).toEqual('1.00 MB')

    const convertFileGbSizeResult = convertFileSize(GBSize)
    expect(convertFileGbSizeResult).toEqual('1.02 GB')

    const convertFileTBSizeResult = convertFileSize(TBSize)
    expect(convertFileTBSizeResult).toEqual('9.09 TB')

    const convertFilePBSizeResult = convertFileSize(PBSize)
    expect(convertFilePBSizeResult).toEqual('8.88 PB')
  })
})
