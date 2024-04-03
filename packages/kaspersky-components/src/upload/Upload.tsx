import { Fragment } from 'react'
import * as React from 'react'
import styled from 'styled-components'
import { Icon } from '../icon'
import { Button } from '../button'
import { Loader } from '../loader'
import { useUploaderColors } from './useUploaderColors'
import { useDefaults } from './useDefaults'
import { UploadCustom } from './UploadCustom'
import { UploadUrl } from './UploadUrl'
import { StyledDragger, UploadHeading, UploadText } from './Wrappers'
import { UploadDraggerProps } from './types'
import { convertFileSize } from './convertFileSize'
import { useTranslation } from 'react-i18next'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

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

const UploadView: React.FC<UploadDraggerProps> = (props) => {
  const { t } = useTranslation()
  const { testAttributes } = useTestAttribute(props)
  const {
    width,
    height = 400,
    status = 'none',
    disabled,
    icon,
    iconFile,
    title,
    buttons,
    helpText,
    loadingTitle,
    loadingDescription,
    loadingButtons,
    errorTitle,
    errorDescription,
    errorButtons,
    successTitle,
    successDescription,
    successButtons,
    file,
    fileButtons,
    ...rest
  } = useDefaults(props)
  const config = useUploaderColors()
  return (
    <StyledDragger
      disabled={disabled}
      showUploadList={false}
      width={width}
      height={height}
      config={config}
      cssConfig={config}
      {...testAttributes}
      {...rest}
    >
      {
        {
          none: (
            <Fragment>
              <Column>
                {icon !== null && (
                  <Icon
                    color={
                      disabled
                        ? config.disabled.iconColor
                        : config.normal.iconColor
                    }
                    {...icon}
                  />
                )}
                {
                  <UploadHeading
                    className="upload-text-primary"
                    type="H4"
                    color={config.normal.textPrimaryColor}
                    config={config}
                    disabled={disabled}
                  >
                    {title || t('upload.dropFileTitle')}
                  </UploadHeading>
                }
              </Column>
              <Column>
                <Row>
                  {buttons &&
                    buttons.map((props, pos) => (
                      <Button
                        key={pos}
                        {...props}
                        text={t(props.text as string) as string}
                        disabled={disabled}
                      />
                    ))}
                </Row>
                {
                  <UploadText
                    className="upload-text-secondary"
                    type="BTR3"
                    color={config.normal.textSecondaryColor}
                    config={config}
                    disabled={disabled}
                  >
                    {helpText || t('upload.helpText')}
                  </UploadText>
                }
              </Column>
            </Fragment>
          ),
          pending: (
            <Column>
              <Loader size={'large'} />
              {typeof loadingTitle === 'string'
                ? (
                  <UploadHeading
                    className="upload-text-primary"
                    type="H4"
                    color={config.normal.textPrimaryColor}
                    disabled={disabled}
                  >
                    {loadingTitle}
                  </UploadHeading>
                  )
                : (
                    loadingTitle
                  )}
              {
                <UploadText
                  className="upload-text-secondary"
                  color={config.normal.textSecondaryColor}
                  config={config}
                  disabled={disabled}
                >
                  {loadingDescription ||
                    t('upload.loadingDescription', { file: file?.name })}
                </UploadText>
              }
              <Row>
                {loadingButtons &&
                  loadingButtons.map((props, pos) => (
                    <Button
                      key={pos}
                      {...props}
                      text={t(props.text as string) as string}
                      disabled={disabled}
                    />
                  ))}
              </Row>
            </Column>
          ),
          error: (
            <Column>
              {
                <UploadHeading
                  className="upload-text-primary"
                  type="H4"
                  config={config}
                  color={config.error.color}
                >
                  {errorTitle || t('upload.errorTitle')}
                </UploadHeading>
              }
              {
                <UploadText
                  className="upload-text-secondary"
                  type="BTR3"
                  color={config.normal.textSecondaryColor}
                  config={config}
                  disabled={disabled}
                >
                  {errorDescription ||
                    t('upload.errorDescription', { file: file?.name })}
                </UploadText>
              }
              <Row>
                {errorButtons &&
                  errorButtons.map((props, pos) => (
                    <Button
                      key={pos}
                      {...props}
                      text={t(props.text as string) as string}
                      disabled={disabled}
                    />
                  ))}
              </Row>
            </Column>
          ),
          success: (
            <Column>
              {
                <UploadHeading
                  className="upload-text-primary"
                  type="H4"
                  color={config.success.color}
                  config={config}
                  disabled={disabled}
                >
                  {successTitle || t('upload.successTitle')}
                </UploadHeading>
              }
              {
                <UploadText
                  className="upload-text-secondary"
                  type="BTR3"
                  color={config.normal.textSecondaryColor}
                  config={config}
                  disabled={disabled}
                >
                  {successDescription ||
                    t('upload.successDescription', { file: file?.name })}
                </UploadText>
              }
              <Row>
                {successButtons &&
                  successButtons.map((props, pos) => (
                    <Button
                      key={pos}
                      {...props}
                      text={t(props.text as string) as string}
                      disabled={disabled}
                    />
                  ))}
              </Row>
            </Column>
          ),
          selected: (
            <Column>
              <Row>
                {iconFile !== null && (
                  <Icon color={config.normal.iconColor} {...iconFile} />
                )}
              </Row>
              <Row>
                <UploadHeading
                  className="upload-text-primary"
                  type="H4"
                  config={config}
                  disabled={disabled}
                >
                  {file?.name}
                </UploadHeading>
                {file?.size
                  ? (
                    <UploadText
                      className="upload-text-secondary"
                      type="BTR3"
                      color={config.normal.textSecondaryColor}
                      config={config}
                      disabled={disabled}
                    >
                      {convertFileSize(file?.size)}
                    </UploadText>
                    )
                  : null}
              </Row>
              <Row>
                {successButtons &&
                  successButtons.map((props, pos) => (
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
        }[status]
      }
    </StyledDragger>
  )
}

export const Upload = (props: UploadDraggerProps): JSX.Element => {
  return <UploadView {...props} />
}

Upload.Url = UploadUrl
Upload.UploadCustom = UploadCustom
