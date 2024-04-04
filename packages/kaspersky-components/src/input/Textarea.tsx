import React, { FC } from 'react'
import styled from 'styled-components'
import { Input } from 'antd'
import { inputStyles, inputTextareaContainerStyles } from './inputCss'
import { useThemedTextbox } from './useThemedTextbox'
import { useClassNamedTextbox } from './useClassNamedTextbox'
import { TextboxTextareaProps, TextboxTextareaMappedProps, TextboxTextareaViewProps } from './types'
import { P } from '@src/typography'
import cn from 'classnames'
import { WithGlobalStyles } from '@helpers/hocs/WithGlobalStyles'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

const StyledTextArea = styled(Input.TextArea).withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`
  ${inputStyles}
  
  && {
    height: unset;
  }
`

const StyledTextareaContainer = styled.div.withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`
  ${inputTextareaContainerStyles}
`

export const TextareaComponent: FC<TextboxTextareaProps> = (rawProps: TextboxTextareaProps) => {
  const mappedProps: TextboxTextareaMappedProps = useClassNamedTextbox<TextboxTextareaProps>(rawProps)
  const themedProps: TextboxTextareaViewProps = useThemedTextbox(mappedProps)
  const props = useTestAttribute(themedProps)
  return <TextareaView {...props} />
}

export const TextareaView: FC<TextboxTextareaViewProps> = ({
  onChange,
  cssConfig,
  showCount,
  maxLength,
  value,
  className,
  testAttributes,
  ...rest
}: TextboxTextareaViewProps) => {
  return (
    <StyledTextareaContainer
      cssConfig={cssConfig}
      className={cn({
        'kl6-textbox-textarea-has-counter': showCount
      })}
    >
      <StyledTextArea
        data-component-version="v6"
        className={cn('kl-v6-textarea', className)}
        onChange={({ target: { value } }) => onChange?.(value)}
        value={value}
        rows={3}
        maxLength={maxLength}
        cssConfig={cssConfig}
        {...testAttributes}
        {...rest}
      />
      {showCount && <P type='BTR4' themedColor='baseicon' className='kl6-textbox-textarea-counter'>
        {value?.length || 0} from {maxLength}
      </P>}
    </StyledTextareaContainer>
  )
}

export const Textarea = WithGlobalStyles(TextareaComponent)
