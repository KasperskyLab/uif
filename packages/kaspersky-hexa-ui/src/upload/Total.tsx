import { upload } from '@design-system/css-configs/components/upload'
import { ActionButton } from '@src/action-button'
import { Dropdown, DropdownItemProps } from '@src/dropdown'
import { Text } from '@src/typography'
import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { Delete, Download2, Menu2, Reload } from '@kaspersky/hexa-ui-icons/16'

import { UploadFile } from './types'
import { convertFileSize } from './utils/convertFileSize'

const cssConfig = upload()

type TotalProps = {
  disabled?: boolean,
  fileList: UploadFile[],
  maxCount?: number,
  maxTotalSize?: number,
  onDeleteAll?: () => void,
  onDeleteErrors?: () => void,
  onReloadErrors?: () => void,
  onDownloadAll?: () => void
}

export const Total = styled(({
  disabled,
  fileList,
  maxCount,
  maxTotalSize,
  onDeleteAll,
  onDeleteErrors,
  onReloadErrors,
  onDownloadAll,
  ...props
}: TotalProps) => {
  const { t } = useTranslation()

  const labels: string[] = []

  if (maxCount) {
    labels.push(t('uploader.total.files', { filesCount: fileList.length, total: maxCount }))
  }

  if (maxTotalSize) {
    const size = fileList.reduce((sum, file) => sum + file.size!, 0)

    labels.push(t('uploader.total.size', { size: convertFileSize(size), total: convertFileSize(maxTotalSize * 1024) }))
  }

  const label = labels.length === 0
    ? t('uploader.total.simple', { filesCount: fileList.length })
    : labels.join(', ')

  const dropdownOverlay: DropdownItemProps[] = [
    {
      children: t('uploader.actions.deleteAll'),
      componentsBefore: [<Delete key="icon" />],
      onClick: onDeleteAll
    }
  ]

  if (fileList.some(x => !!x.error)) {
    dropdownOverlay.push(
      {
        children: t('uploader.actions.deleteErrors', { count: fileList.filter(x => !!x.error).length }),
        componentsBefore: [<Delete key="icon" />],
        onClick: onDeleteErrors
      },
      {
        children: t('uploader.actions.reloadErrors', { count: fileList.filter(x => !!x.error).length }),
        componentsBefore: [<Reload key="icon" />],
        onClick: onReloadErrors
      }
    )
  }

  if (onDownloadAll) {
    dropdownOverlay.push({
      children: t('uploader.actions.downloadAll'),
      componentsBefore: [<Download2 key="icon" />],
      onClick: onDownloadAll
    })
  }

  return (
    <Text {...props} type="BTR4">
      {label}
      <Dropdown
        disabled={disabled}
        overlay={dropdownOverlay}
        trigger={['click']}
      >
        <ActionButton
          disabled={disabled}
          icon={<Menu2 />}
          size="large"
        />
      </Dropdown>
    </Text>
  )
})`
  display: flex;
  gap: 4px;
  align-items: center;
  color: ${props => props.disabled ? cssConfig.disabled.total : cssConfig.enabled.total};
`
