import * as React from 'react'
import { Icon } from '../icon'
import { Button } from '../button'
import { Loader } from '../loader'
import { useUploaderColors } from './useUploaderColors'
import { UploadDraggerProps } from './types'
import { StyledFileUploader, Column, Row, Wrapper, StretchHelper, UploadText, UploadHeading } from './Wrappers'
import { convertFileSize } from './convertFileSize'
import { useTranslation } from 'react-i18next'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

const UploadView: React.VFC<UploadDraggerProps> = (props) => {
  const { t } = useTranslation()
  const {
    width,
    status = 'none',
    disabled,
    icon = { size: 'large', name: 'Download' },
    iconFile = { size: 'large', name: 'FileText' },
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
    percent = 0,
    fileButtons,
    ...rest
  } = props
  const config = useUploaderColors()
  const { testAttributes } = useTestAttribute(props)
  return (
    <StretchHelper width={width} {...testAttributes}>
      <StyledFileUploader
        disabled={disabled}
        showUploadList={false}
        width={width}
        config={config}
        cssConfig={config}
        {...rest}
      >
        {({
          none: (
            <Wrapper>
              <Row>
                {(icon !== null) && <Icon color={disabled ? config.disabled.iconColor : config.normal.iconColor} {...(icon)} />}
                <Column>
                  <UploadHeading
                    className='upload-text-primary'
                    type='H4'
                    themedColor={config.normal.textPrimaryColor}
                    config={config}
                    disabled={disabled}>
                    {title || t('upload.dropFileTitle')}
                  </UploadHeading>
                  <UploadText
                    className='upload-text-secondary'
                    type='BTR3'
                    themedColor={config.normal.textSecondaryColor}
                    config={config}
                    disabled={disabled}>
                    {helpText || t('upload.helpText')}
                  </UploadText>
                </Column>
              </Row>
              <Column>
                <Row>{ buttons && buttons.map((props, pos) =>
                  <Button key={pos} {...props} text={props.text as string} disabled={disabled} />)}</Row>
              </Column>
            </Wrapper>),
          pending: (
            <Wrapper>
              <Row>
                <Loader size={'large'} />
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
                    type='BTR3'
                    themedColor={config.normal.textSecondaryColor}
                    config={config}
                    disabled={disabled}>
                    { loadingDescription || t('upload.loadingDescription', { file: file?.name })}
                  </UploadText>
                </Column>
              </Row>
              <Row>
                <Row>{loadingButtons && loadingButtons.map((props, pos) =>
                  <Button key={pos} {...props} text={t(props.text as string) as string} disabled={disabled} />)}</Row>
              </Row>
            </Wrapper>
          ),
          error: (
            <Wrapper>
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
                  { errorDescription || t('upload.errorDescription', { file: file?.name }) }
                </UploadText>
              </Column>
              <Column>
                <Row>{ errorButtons && errorButtons.map((props, pos) =>
                  <Button key={pos} {...props} text={t(props.text as string) as string} disabled={disabled} />)}</Row>
              </Column>
            </Wrapper>
          ),
          success: (
            <Wrapper>
              <Column>
                <UploadHeading
                  className='upload-text-primary'
                  type='H4'
                  themedColor={config.success.color}
                  config={config}
                  disabled={disabled}>
                  { successTitle || t('upload.successTitle')}
                </UploadHeading>
              </Column>
              <Column>
                <UploadText
                  className='upload-text-secondary'
                  type='BTR3'
                  themedColor={config.normal.textSecondaryColor}
                  config={config}
                  disabled={disabled}>
                  {successDescription || t('upload.successDescription', { file: file?.name })}
                </UploadText>
              </Column>
              <Column>
                <Row>{ successButtons && successButtons.map((props, pos) =>
                  <Button key={pos} {...props} text={t(props.text as string) as string} disabled={disabled} />)}</Row>
              </Column>
            </Wrapper>
          ),
          selected: (
            <Wrapper>
              <Row>
                {(iconFile !== null) && <Icon color={config.normal.iconColor} {...(iconFile)} />}
                <Column>
                  <UploadHeading
                    className='upload-text-primary'
                    type='H4'
                    config={config}
                    disabled={disabled}>{file?.name}</UploadHeading>
                  {file?.size
                    ? (
                      <UploadText
                        className='upload-text-secondary'
                        type='BTR3'
                        themedColor={config.normal.textSecondaryColor}
                        config={config}
                        disabled={disabled}>
                        {convertFileSize(file?.size)}
                      </UploadText>
                      )
                    : null}
                </Column>
              </Row>
              <Column>
                <Row>{ fileButtons && fileButtons.map((props, pos) =>
                  <Button key={pos} {...props} text={t(props.text as string) as string} disabled={disabled} />)}</Row>
              </Column>
            </Wrapper>
          )
        }[status])}
      </StyledFileUploader>
    </StretchHelper>
  )
}

export const UploadCustom = (props: UploadDraggerProps): JSX.Element =>
  <UploadView {...props}/>
