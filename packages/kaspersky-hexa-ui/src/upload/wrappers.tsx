import { upload } from '@design-system/css-configs/components/upload'
import { Link } from '@src/link'
import { Popover } from '@src/popover'
import { P } from '@src/typography'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { StatusDangerSquareOutline, UploadFull } from '@kaspersky/icons/40'

import { UploadFile } from './types'
import { UploadListWrapper } from './UploadList/wrappers'

const cssConfig = upload()

export const UploadIcon = styled(({ invalid, ...props }) => {
  if (invalid) {
    return <StatusDangerSquareOutline {...props} />
  }

  return <UploadFull {...props} />
})`
  align-self: normal;
`

type DragAndDropMessageProps = {
  className?: string,
  disabled?: boolean,
  fileList: UploadFile[],
  maxCount?: number,
  onOpenFileDialog: () => void
}

export const DragAndDropMessage = styled(({
  disabled,
  fileList,
  maxCount,
  onOpenFileDialog,
  ...props
}: DragAndDropMessageProps) => {
  const { t } = useTranslation()

  if (maxCount && fileList.length >= maxCount) {
    return <P {...props} type="BTM3">{t('uploader.maxCountUploaded')}</P>
  }

  return (
    <P {...props} type="BTM3">
      <Link disabled={disabled} onClick={onOpenFileDialog}>
        {maxCount === 1 ? t('uploader.dropText.beginningSingle') : t('uploader.dropText.beginningMultiple')}
      </Link>
      {' '}
      {maxCount === 1 ? t('uploader.dropText.endingSingle') : t('uploader.dropText.endingMultiple')}
    </P>
  )
})``

const ValidationPopoverWrapper = styled(P).attrs({ type: 'BTR3' })`
  min-height: calc(60px - 16px * 2);
  display: flex;
  align-items: center;

  ol {
    margin: 0;
    padding-left: 12px;
    list-style-type: square;
  }
`

type ValidationMessageProps = {
  className?: string,
  disabled?: boolean,
  errors: Record<string, string[]>
}

// @ts-ignore
export const ValidationMessage = styled(({ disabled, errors, ...props }: ValidationMessageProps) => {
  const { t } = useTranslation()

  function mapError ([key, names]: [string, string[]]) {
    const popoverContent = (
      <ValidationPopoverWrapper>
        <ol>
          {names.map(name => <li key={name}>{name}</li>)}
        </ol>
      </ValidationPopoverWrapper>
    )

    return (
      <P {...props} key={key} type="BTR4">
        {t(key, { count: names.length })}
        {' '}
        <Popover placement="left" content={popoverContent}>
          <Link disabled={disabled} size="noSize">{t('uploader.showFiles')}</Link>
        </Popover>
      </P>
    )
  }

  return Object.entries(errors).map(mapError)
})`
  color: ${props => props.disabled ? cssConfig.disabled.requirements : cssConfig.invalid.validation};

  a {
    white-space: nowrap;
  }
`

export const UploadRequirements = styled(P).attrs({ type: 'BTR4' })`
  text-align: initial;
`

export const DragContainerWrapper = styled.div<{
  disabled?: boolean,
  $dragOver?: boolean,
  $fullHeight?: boolean,
  $invalid?: boolean,
  $maxCountReached?: boolean,
  $size?: string,
  width?: number
}>`
  background: ${cssConfig.enabled.background};
  border: 1px dashed ${cssConfig.enabled.border};
  border-radius: 8px;
  cursor: initial;
  width: ${({ width }) => width ? `${width}px` : '100%'};
  min-width: 428px;
  ${props => props.$size === 'medium' && props.$fullHeight && `
    &, .hexa-upload-drag-container { 
      height: 100%;
    }
  `}

  .hexa-upload-drag-container {
    display: flex;
    flex-direction: column;
    padding: 24px;

    > :nth-child(2) {
      margin-top: 16px;
    }

    > :nth-child(n + 3) {
      margin-top: 8px;
    }
  }

  ${UploadListWrapper} {
    margin-right: -24px;
    padding-right: 24px;

    ${props => props.$size === 'medium' && `
      overflow-y: auto;
    `}
    ${props => props.$size === 'medium' && !props.$fullHeight && `
      max-height: 287px;
    `}

    > :not(:first-child) {
      margin-top: 8px;
    }
  }

  ${UploadIcon} {
    color: ${cssConfig.enabled.header.icon};
  }

  ${DragAndDropMessage} {
    color: ${cssConfig.enabled.header.text};
  }

  ${UploadRequirements} {
    color: ${cssConfig.enabled.requirements};
  }

  ${props => props.$invalid && `
    border-color: ${cssConfig.invalid.validation};

    ${UploadIcon} {
      color: ${cssConfig.invalid.header.icon};
    }
  `}

  ${props => props.disabled && `
    background: ${cssConfig.disabled.background};
    border-color: ${cssConfig.disabled.border};
    
    ${UploadIcon} {
      color: ${cssConfig.disabled.header.icon};
    }

    ${DragAndDropMessage} {
      color: ${cssConfig.disabled.header.text};
    }

    ${UploadRequirements} {
      color: ${cssConfig.disabled.requirements};
    }
  `}

  ${props => !props.disabled && !props.$maxCountReached && props.$dragOver && `
    background: ${cssConfig.active.background};
    border-color: ${cssConfig.active.border};
  `}
`

export const SelectContainerWrapper = styled.div<{ disabled?: boolean, width?: number }>`
  width: ${({ width }) => width ? `${width}px` : '100%'};
  min-width: 354px;

  .hexa-upload-select-container > :not(:first-child) {
    margin-top: 8px;
  }

  ${UploadListWrapper} > :not(:first-child) {
    margin-top: 8px;
  }

  ${UploadRequirements} {
    color: ${cssConfig.enabled.requirements};
  }

  ${props => props.disabled && `
    ${UploadRequirements} {
      color: ${cssConfig.disabled.requirements};
    }
  `}
`
