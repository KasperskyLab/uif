import { BORDER_RADIUS, SPACES } from '@design-system/theme/themes/variables'
import { getFromProps } from '@helpers/getFromProps'
import { Heading, Text } from '@src/typography'
import { Upload as AntdUpload } from 'antd'
import * as React from 'react'
import styled from 'styled-components'

import { UploadColorConfig, UploadProps } from './types'

const { Dragger } = AntdUpload

/*
The hack below related to the issue caugth by the calling styled(AntUpload)
In this case you can catch the error TS4023 and it says
that Exported variable 'StyledUrlUploader' has or is using name 'UploadInterface'
from external module ".../kl-components/node_modules/antd/lib/upload/Upload" but cannot be named.
After research I`ve found that the interface UploadInterface is not exporting and TS compiler
can`t find it. So I made this trick to avoid TS issue.
*/
const WrappedAntUpload = (props: React.ComponentProps<typeof AntdUpload>): JSX.Element => <AntdUpload {...props}/>

const fromProps = getFromProps<UploadColorConfig>()

export const StyledDragger = styled(Dragger as React.FC<UploadProps>)`
  &&& {
    border: ${fromProps('normal.border')};
    border-radius: ${BORDER_RADIUS[6]}px;
    background: ${fromProps('normal.background')};
    width: ${({ width }) => width ? `${width}px` : '100%'};
    
    .ant-upload {
      padding: 0;
    }
    .ant-upload-drag-container {
      height: ${({ height }) => height}px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: ${SPACES[20]}px;
      & > * {
        max-width: 50%;
      }
    }
  }
`

export const Column = styled.div<{ stretch?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${SPACES[4]}px;
  width: ${({ stretch }) => stretch ? '100%' : 'auto'}
`

export const Row = styled.div<{ stretch?: boolean }>`
  display: flex;
  flex-direction: row;
  gap: ${SPACES[20]}px;
  align-items: center;
  width: ${({ stretch }) => stretch ? '100%' : 'auto'}
`

export const Wrapper = styled(Row)`
 &&& {
  justify-content: space-between;
  width: 100%;
 }
`

export const StretchHelper = styled.div <{ width?: number }>`
  &&& {
    width: ${({ width }) => width ? `${width}px` : '100%'};
  }
`
export const StyledUrlUploader = styled(WrappedAntUpload as (props: React.ComponentProps<typeof AntdUpload> & {
  width: number | undefined,
  height: number | undefined,
  disabled: boolean | undefined }) => JSX.Element)`
  &&& {
    border: ${fromProps('normal.border')};
    border-radius: ${BORDER_RADIUS[6]}px;
    background: ${fromProps('normal.background')};
    width: ${({ width }) => width ? `${width}px` : '100%'};
    min-height: ${({ height }) => height ? `${height}px` : '140px'};
    display: flex;
    align-items: flex-start;
    padding: ${SPACES[18]}px;
    flex-direction: column;
    .ant-upload, .ant-upload-list {
      width: 100%;
      .ant-input {
        width: 100%;
      }
    }
  }
`

export const StyledFileUploader = styled(Dragger as React.FC<UploadProps>)`
  &&& {
    border: ${fromProps('normal.border')};
    border-radius: ${BORDER_RADIUS[6]}px;
    background: ${fromProps('normal.background')};
    width: ${({ width }) => width ? `${width}px` : '100%'};
    min-height: ${({ height }) => height ? `${height}px` : '140px'};
    .ant-upload {
      padding: ${SPACES[18]}px
    }
  }
`

export const UploadHeading = styled(Heading)`
  color: ${({ color }) => color};
  &[disabled] {
    &.upload-text-primary {
      color: ${fromProps('disabled.textPrimaryColor')};
    }
    &.upload-text-secondary {
      color: ${fromProps('disabled.textSecondaryColor')};
    }
  }
`

export const UploadText = styled(Text)`
  color: ${({ color }) => color};
  &[disabled] {
    &.upload-text-primary {
      color: ${fromProps('disabled.textPrimaryColor')};
    }
    &.upload-text-secondary {
      color: ${fromProps('disabled.textSecondaryColor')};
    }
  }
`
