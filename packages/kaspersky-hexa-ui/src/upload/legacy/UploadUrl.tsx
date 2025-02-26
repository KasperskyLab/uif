import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { Button } from '@src/button'
import { Icon } from '@src/icon'
import { Textbox } from '@src/input'
import { Loader } from '@src/loader'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { UploadUrlProps, UploadUrlViewProps } from './types'
import { useThemedUpload } from './useThemedUpload'
import { Column, Row, StyledUrlUploader, UploadHeading, UploadText, Wrapper } from './Wrappers'

const UploadUrlView: FC<UploadUrlViewProps> = ({ cssConfig: config, ...props }: UploadUrlViewProps) => {
  const { t } = useTranslation()
  const {
    testId,
    componentId,
    width,
    height,
    status = 'none',
    disabled,
    icon,
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
    onChange,
    value,
    percent = 0,
    ...rest
  } = props
  const { testAttributes } = useTestAttribute(props)
  return (
    <StyledUrlUploader
      width={width}
      height={height}
      disabled={disabled}
      openFileDialogOnClick={false}
      cssConfig={config}
      {...testAttributes}
      {...rest}
    >
      {({
        none: (
          <Wrapper>
            <Row>
              {icon && <Icon color={disabled ? config.disabled.iconColor : config.normal.iconColor} {...icon} />}
            </Row>
            <Column stretch>
              <UploadHeading
                className="upload-text-primary"
                type="H4"
                themedColor={config.normal.textPrimaryColor}
                config={config}
                disabled={disabled}>
                {title || t('upload.pasteLinkTitle')}
              </UploadHeading>
              <Textbox
                value={value}
                disabled={disabled}
                placeholder={helpText as string || t('upload.placeholder', '') as string}
                onChange={onChange}
              />
            </Column>
          </Wrapper>
        ),
        error: (
          <Wrapper>
            <Row>
              <Column>
                <UploadHeading
                  className="upload-text-primary"
                  type="H4"
                  themedColor={config.error.color}
                  config={config}
                  disabled={disabled}>
                  { errorTitle || t('upload.errorTitle')}
                </UploadHeading>
              </Column>
              <Column>
                <UploadText
                  className="upload-text-secondary"
                  type="BTR3"
                  themedColor={config.normal.textSecondaryColor}
                  config={config}
                  disabled={disabled}>
                  { errorDescription || t('upload.errorDescription', { file: value }) }
                </UploadText>
              </Column>
            </Row>
            <Row>
              { errorButtons && errorButtons.map((props, pos) =>
                <Button key={pos} {...props} text={t(props.text as string) as string} disabled={disabled} />) }
            </Row>
          </Wrapper>
        ),
        pending: (
          <Wrapper>
            <Row>
              <Loader size="large" />
              <Column>
                <UploadHeading
                  className="upload-text-primary"
                  type="H4"
                  themedColor={config.normal.textPrimaryColor}
                  config={config}
                  disabled={disabled}>
                  { loadingTitle || t('upload.loadingTitle', { value: percent })}
                </UploadHeading>
                <UploadText
                  className="upload-text-secondary"
                  themedColor={config.normal.textSecondaryColor}
                  type="BTR3"
                  config={config}
                  disabled={disabled}>
                  { loadingDescription || t('upload.loadingDescription', { file: value })}
                </UploadText>
              </Column>
            </Row>
            <Row>
              { loadingButtons && loadingButtons.map((props, pos) =>
                <Button key={pos} {...props} text={t(props.text as string) as string} disabled={disabled} />) }
            </Row>
          </Wrapper>
        ),
        success: (
          <Wrapper>
            <Row>
              <UploadHeading
                className="upload-text-primary"
                type="H4"
                themedColor={config.success.color}
                config={config}
                disabled={disabled}>
                { successTitle || t('upload.successTitle')}
              </UploadHeading>
              <Column>
                <UploadText
                  className="upload-text-secondary"
                  themedColor={config.normal.textSecondaryColor}
                  type="BTR3"
                  config={config}
                  disabled={disabled}>
                  { loadingDescription || t('upload.loadingDescription', { file: value })}
                </UploadText>
              </Column>
            </Row>
            <Column>
              <Row>{ successButtons && successButtons.map((props, pos) =>
                <Button key={pos} {...props} text={t(props.text as string) as string} disabled={disabled} />) }</Row>
            </Column>
          </Wrapper>
        ),
        selected: (
          <></>
        )
      }[status])}
    </StyledUrlUploader>
  )
}

/**
 * @deprecated use Uploader instead
 */
export const UploadUrl: FC<UploadUrlProps> = (rawProps: UploadUrlProps) => {
  const props = useThemedUpload(rawProps)
  return <UploadUrlView {...props}/>
}
