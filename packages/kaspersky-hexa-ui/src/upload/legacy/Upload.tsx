import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { Button } from '@src/button'
import { Icon } from '@src/icon'
import { Loader } from '@src/loader'
import React, { FC, Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { convertFileSize } from '../utils/convertFileSize'

import { UploadProps, UploadUrlProps, UploadViewProps } from './types'
import { UploadCustom } from './UploadCustom'
import { UploadUrl } from './UploadUrl'
import { defaults, useDefaults } from './useDefaults'
import { useThemedUpload } from './useThemedUpload'
import { StyledDragger, UploadHeading, UploadText } from './Wrappers'

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  & > h4 {
    margin-bottom: 0;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

const UploadView: FC<UploadViewProps> = (props: UploadViewProps) => {
  const { t } = useTranslation()
  const {
    buttons,
    cssConfig: config,
    disabled,
    errorButtons,
    errorDescription,
    errorTitle,
    file,
    fileButtons,
    helpText,
    icon,
    iconFile,
    loadingButtons,
    loadingDescription,
    loadingTitle,
    status = 'none',
    successButtons,
    successDescription,
    successTitle,
    testAttributes,
    title,
    ...rest
  } = props

  function renderContent () {
    if (status === 'none') {
      return (
        <Fragment>
          <Column>
            {icon && (
              <Icon
                color={disabled ? config.disabled.iconColor : config.normal.iconColor}
                {...icon}
              />
            )}
            <UploadHeading
              className="upload-text-primary"
              color={config.normal.textPrimaryColor}
              config={config}
              disabled={disabled}
              type="H4"
            >
              {title || t('upload.dropFileTitle')}
            </UploadHeading>
          </Column>
          <Column>
            <Row>
              {buttons && buttons.map((props, pos) => (
                <Button
                  key={pos}
                  {...props}
                  disabled={disabled}
                  text={t(props.text as string) as string}
                />
              ))}
            </Row>
            <UploadText
              className="upload-text-secondary"
              color={config.normal.textSecondaryColor}
              config={config}
              disabled={disabled}
              type="BTR3"
            >
              {helpText || t('upload.helpText')}
            </UploadText>
          </Column>
        </Fragment>
      )
    }

    if (status === 'pending') {
      return (
        <Column>
          <Loader size="large" />
          {typeof loadingTitle === 'string'
            ? (
                <UploadHeading
                  className="upload-text-primary"
                  color={config.normal.textPrimaryColor}
                  disabled={disabled}
                  type="H4"
                >
                  {loadingTitle}
                </UploadHeading>
              )
            : loadingTitle
          }
          <UploadText
            className="upload-text-secondary"
            color={config.normal.textSecondaryColor}
            config={config}
            disabled={disabled}
          >
            {loadingDescription || t('upload.loadingDescription', { file: file?.name })}
          </UploadText>
          <Row>
            {loadingButtons && loadingButtons.map((props, pos) => (
              <Button
                key={pos}
                {...props}
                disabled={disabled}
                text={t(props.text as string) as string}
              />
            ))}
          </Row>
        </Column>
      )
    }

    if (status === 'error') {
      return (
        <Column>
          <UploadHeading
            className="upload-text-primary"
            color={config.error.color}
            config={config}
            type="H4"
          >
            {errorTitle || t('upload.errorTitle')}
          </UploadHeading>
          <UploadText
            className="upload-text-secondary"
            color={config.normal.textSecondaryColor}
            config={config}
            disabled={disabled}
            type="BTR3"
          >
            {errorDescription || t('upload.errorDescription', { file: file?.name })}
          </UploadText>
          <Row>
            {errorButtons && errorButtons.map((props, pos) => (
              <Button
                key={pos}
                {...props}
                disabled={disabled}
                text={t(props.text as string) as string}
              />
            ))}
          </Row>
        </Column>
      )
    }

    if (status === 'success') {
      return (
        <Column>
          <UploadHeading
            className="upload-text-primary"
            color={config.success.color}
            config={config}
            disabled={disabled}
            type="H4"
          >
            {successTitle || t('upload.successTitle')}
          </UploadHeading>
          <UploadText
            className="upload-text-secondary"
            color={config.normal.textSecondaryColor}
            config={config}
            disabled={disabled}
            type="BTR3"
          >
            {successDescription || t('upload.successDescription', { file: file?.name })}
          </UploadText>
          <Row>
            {successButtons && successButtons.map((props, pos) => (
              <Button
                key={pos}
                {...props}
                text={t(props.text as string) as string}
                disabled={disabled}
              />
            ))}
          </Row>
        </Column>
      )
    }

    if (status === 'selected') {
      return (
        <Column>
          <Row>
            {iconFile && <Icon color={config.normal.iconColor} {...iconFile} />}
          </Row>
          <Row>
            <UploadHeading
              className="upload-text-primary"
              config={config}
              disabled={disabled}
              type="H4"
            >
              {file?.name}
            </UploadHeading>
            {file?.size && (
              <UploadText
                className="upload-text-secondary"
                color={config.normal.textSecondaryColor}
                config={config}
                disabled={disabled}
                type="BTR3"
              >
                {convertFileSize(file?.size)}
              </UploadText>
            )}
          </Row>
          <Row>
            {successButtons && successButtons.map((props, pos) => (
              <Button
                key={pos}
                {...props}
                disabled={disabled}
                text={t(props.text as string) as string}
              />
            ))}
          </Row>
        </Column>
      )
    }
  }

  return (
    <StyledDragger
      {...testAttributes}
      {...rest}
      cssConfig={config}
      disabled={disabled}
      showUploadList={false}
    >
      {renderContent()}
    </StyledDragger>
  )
}

type UploadComponentType = FC<UploadProps> & {
  Url: FC<UploadUrlProps>,
  UploadCustom: FC<UploadProps>
}

/**
 * @deprecated use Uploader instead
 */
export const Upload: UploadComponentType = (rawProps: UploadProps) => {
  const props = useTestAttribute(useThemedUpload(useDefaults(rawProps)))

  return <UploadView {...props} />
}

Upload.defaultProps = defaults

Upload.Url = UploadUrl
Upload.UploadCustom = UploadCustom
