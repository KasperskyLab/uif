import * as React from 'react'
import { Icon } from '../icon'
import { Loader } from '../loader'
import { Button } from '../button'
import { Textbox } from '../input'
import { UploadUrlProps } from './types'
import { useUploaderColors } from './useUploaderColors'
import { StyledUrlUploader, Column, Row, Wrapper, UploadText, UploadHeading } from './Wrappers'
import { useTranslation } from 'react-i18next'
import { Size } from '../../design-system/types'

const UploadUrlView: React.VFC<UploadUrlProps> = (props) => {
  const { t } = useTranslation()
  const {
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
  const config = useUploaderColors()
  return (
    <StyledUrlUploader
      width={width}
      height={height}
      disabled={disabled}
      openFileDialogOnClick={false}
      config={config}
      cssConfig={config}
      data-component-id={componentId}
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
                className='upload-text-primary'
                type='H4'
                themedColor={config.normal.textPrimaryColor}
                config={config}
                disabled={disabled}>
                {title || t('upload.pasteLinkTitle')}
              </UploadHeading>
              <Textbox
                value={value}
                disabled={disabled}
                placeholder={helpText as string || t('upload.placeholder', '')}
                onChange={(value: string | React.ChangeEvent<HTMLInputElement>) => {
                  if (onChange && typeof onChange === 'function' && typeof value === 'string') {
                    onChange(value)
                  }
                }}
              />
            </Column>
          </Wrapper>
        ),
        error: (
          <Wrapper>
            <Row>
              <Column>
                <UploadHeading
                  className='upload-text-primary'
                  type='H4'
                  themedColor={config.error.color}
                  config={config}
                  disabled={disabled}>
                  { errorTitle || t('upload.errorTitle')}
                </UploadHeading>
              </Column>
              <Column>
                <UploadText
                  className='upload-text-secondary'
                  type='BTR3'
                  themedColor={config.normal.textSecondaryColor}
                  config={config}
                  disabled={disabled}>
                  { errorDescription || t('upload.errorDescription', { file: value }) }
                </UploadText>
              </Column>
            </Row>
            <Row>
              { errorButtons && errorButtons.map((props, pos) =>
                <Button key={pos} {...props} text={t(props.text as string)} disabled={disabled} />) }
            </Row>
          </Wrapper>
        ),
        pending: (
          <Wrapper>
            <Row>
              <Loader size={Size.Large} />
              <Column>
                <UploadHeading
                  className='upload-text-primary'
                  type='H4'
                  themedColor={config.normal.textPrimaryColor}
                  config={config}
                  disabled={disabled}>
                  { loadingTitle || t('upload.loadingTitle', { value: percent })}
                </UploadHeading>
                <UploadText
                  className='upload-text-secondary'
                  themedColor={config.normal.textSecondaryColor}
                  type='BTR3'
                  config={config}
                  disabled={disabled}>
                  { loadingDescription || t('upload.loadingDescription', { file: value })}
                </UploadText>
              </Column>
            </Row>
            <Row>
              { loadingButtons && loadingButtons.map((props, pos) =>
                <Button key={pos} {...props} text={t(props.text as string)} disabled={disabled} />) }
            </Row>
          </Wrapper>
        ),
        success: (
          <Wrapper>
            <Row>
              <UploadHeading
                className='upload-text-primary'
                type='H4'
                themedColor={config.success.color}
                config={config}
                disabled={disabled}>
                { successTitle || t('upload.successTitle')}
              </UploadHeading>
              <Column>
                <UploadText
                  className='upload-text-secondary'
                  themedColor={config.normal.textSecondaryColor}
                  type='BTR3'
                  config={config}
                  disabled={disabled}>
                  { loadingDescription || t('upload.loadingDescription', { file: value })}
                </UploadText>
              </Column>
            </Row>
            <Column>
              <Row>{ successButtons && successButtons.map((props, pos) =>
                <Button key={pos} {...props} text={t(props.text as string)} disabled={disabled} />) }</Row>
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

export const UploadUrl = (props: UploadUrlProps): JSX.Element =>
  <UploadUrlView {...props} />
