import { WithGlobalStyles } from '@helpers/hocs/WithGlobalStyles'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { P } from '@src/typography'
import { Input } from 'antd'
import cn from 'classnames'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { inputStyles, inputTextareaContainerStyles } from './inputCss'
import { TextboxTextareaMappedProps, TextboxTextareaProps, TextboxTextareaViewProps } from './types'
import { useClassNamedTextbox } from './useClassNamedTextbox'
import { useThemedTextbox } from './useThemedTextbox'

const StyledTextArea = styled(Input.TextArea).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`
  ${inputStyles}
  
  && {
    height: unset;
  }
`

const StyledTextareaContainer = styled.div.withConfig<{disabled?: boolean}>({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`
  ${inputTextareaContainerStyles}
`

const TextareaComponent: FC<TextboxTextareaProps> = (rawProps: TextboxTextareaProps) => {
  const mappedProps: TextboxTextareaMappedProps = useClassNamedTextbox<TextboxTextareaProps>(rawProps)
  const themedProps: TextboxTextareaViewProps = useThemedTextbox(mappedProps)
  const props = useTestAttribute(themedProps)
  return <TextareaView {...props} />
}

const TextareaView: FC<TextboxTextareaViewProps> = ({
  onChange,
  onKeyDown,
  cssConfig,
  showCount,
  maxLength,
  value,
  className,
  disabled,
  testAttributes,
  ...rest
}: TextboxTextareaViewProps) => {
  const { t } = useTranslation()

  return (
    <StyledTextareaContainer
      cssConfig={cssConfig}
      className={cn({
        'kl6-textbox-textarea-has-counter': showCount
      })}
      disabled={disabled}
    >
      <StyledTextArea
        data-component-version="v6"
        className={cn('kl-v6-textarea', className)}
        onChange={({ target: { value } }) => onChange?.(value)}
        onKeyDown={(event) => { event.stopPropagation(); onKeyDown?.(event) }}
        value={value}
        rows={3}
        maxLength={maxLength}
        cssConfig={cssConfig}
        disabled={disabled}
        {...testAttributes}
        {...rest}
      />
      {showCount && <P type="BTR4" themedColor="baseicon" className="kl6-textbox-textarea-counter">
        {t('textarea.wordsCount', { count: value?.length || 0, total: maxLength })}
      </P>}
    </StyledTextareaContainer>
  )
}

export const Textarea = WithGlobalStyles(TextareaComponent)
