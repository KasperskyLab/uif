import { upload } from '@design-system/css-configs/components/upload'
import { Space } from '@src/space'
import { Tooltip } from '@src/tooltip'
import { Text } from '@src/typography/text'
import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { convertFileSize } from '../utils/convertFileSize'
import { splitFileNameForTruncation } from '../utils/splitFileNameForTruncation'

const cssConfig = upload().file

export const TextReducerContainer = styled.div`
  display: flex; 
  white-space: pre;
  word-break: keep-all;
`

export const TextReducerPart1 = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
`

const FileNameReducer = ({ children }: { children: string }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [hasOverflow, setHasOverflow] = useState(false)

  useEffect(() => {
    if (!ref.current) {
      return
    }

    const container = ref.current
    const observer = new ResizeObserver(() => {
      setHasOverflow(container.offsetWidth < container.scrollWidth)
    })
    observer.observe(container)

    return () => observer.unobserve(container)
  }, [ref.current])

  const [part1, part2] = splitFileNameForTruncation(children)

  const content = (
    <TextReducerContainer>
      <TextReducerPart1 ref={ref}>
        {part1}
      </TextReducerPart1>
      {part2}
    </TextReducerContainer>
  )

  if (hasOverflow) {
    return <Tooltip text={children}>{content}</Tooltip>
  }

  return content
}

export const FileName = styled(({ children, truncateName, ...props }) => {
  if (!truncateName || children.length < 15) {
    return <Text {...props} type="BTR3">{children}</Text>
  }

  return (
    <Text {...props} type="BTR3">
      <FileNameReducer>{children}</FileNameReducer>
    </Text>
  )
})`
  overflow: hidden;
  word-break: break-word;
`

export const FileSize = styled(({ percent, size: rawSize, ...props }: { percent?: number, onClick?: () => void, size: number }) => {
  const { t } = useTranslation()
  const size = convertFileSize(rawSize)

  if (percent === undefined) {
    return <Text {...props} type="BTR4">{size}</Text>
  }

  const progress = (Number.parseFloat(size) * percent / 100).toFixed(2)

  return (
    <Text {...props} type="BTR4">
      {t('uploader.progress', { progress, size })}
    </Text>
  )
})``

export const FileError = styled(Text).attrs({ type: 'BTR4' })``

export const FileWrapper = styled(Space).attrs({ gap: 8, width: 'initial', wrap: 'nowrap' })<{
  $disabled?: boolean,
  $done?: boolean,
  $error?: boolean,
  $uploading?: boolean
}>`
  background: ${cssConfig.enabled.background};
  border: 1px solid ${cssConfig.enabled.border};
  border-radius: 4px;
  padding: 5px 11px;

  > :nth-child(1) {
    flex: 1;
  }

  > :nth-child(2) {
    flex: 0 0 auto;
  }

  svg {
    flex: 0 0 auto;
  }

  ${FileName} {
    color: ${cssConfig.enabled.name};
  }

  ${FileSize} {
    color: ${cssConfig.enabled.size};
  }

  .file-icon, .download-icon {
    color: ${cssConfig.enabled.icon};
  }

  &:hover {
    background: ${cssConfig.hover.background};
    border-color: ${cssConfig.hover.border};

    ${FileName} {
      color: ${cssConfig.hover.name};
    }
  }

  ${props => props.$done && `
    &:not(:hover) .close-icon {
      display: none;
    }
  `}

  ${props => props.$done && !props.$disabled && `
    &:not(:hover) .download-icon {
      display: none;
    }

    &:hover {
      cursor: pointer;

      .file-icon {
        display: none;
      }
    }

    &:active {
      background-color: ${cssConfig.active.background};
      border-color: ${cssConfig.active.border};
    }
  `}

  ${props => props.$done && props.$disabled && `
    .close-icon {
      display: none;
    }
  `}

  ${props => props.$error && `
    &, &:hover {
      background: ${cssConfig.invalid.background};
      border-color: ${cssConfig.invalid.border};

      .error-icon {
        color: ${cssConfig.invalid.icon};
      }

      ${FileName} {
        color: ${cssConfig.invalid.name};
      }

      ${FileError} {
        color: ${cssConfig.invalid.validation};
      }
    }
  `}

  ${props => props.$disabled && `
    &, &:hover {
      background: ${cssConfig.disabled.background};
      border-color: ${cssConfig.disabled.border};

      .file-icon, .error-icon {
        color: ${cssConfig.disabled.icon};
      }

      ${FileName}, ${FileError} {
        color: ${cssConfig.disabled.name};
      }

      ${FileSize} {
        color: ${cssConfig.disabled.size};
      }
    }
  `}
`

export const UploadListWrapper = styled.div``
