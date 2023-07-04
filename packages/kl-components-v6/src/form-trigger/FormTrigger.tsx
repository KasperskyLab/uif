import * as React from 'react'
import { Text } from '../typography/text'
import { Link } from '../link'
import { Button } from '../button'
import { TitleWrapper, ButtonVariantWrapper } from './formTriggerCss'
import { TFormTriggerVariantProps, FormTriggerType, IFormTriggerProps } from './types'

const LinkVariant = ({
  componentId,
  title,
  description,
  onClick
}: React.PropsWithoutRef<TFormTriggerVariantProps>) =>
  <TitleWrapper role='formTrigger' data-component-id={componentId}>
    <Link onClick={onClick}>{ title }</Link>
    <Text type='BTR3'>{ description }</Text>
  </TitleWrapper>

const ButtonVariant = ({
  componentId,
  title,
  description,
  onClick,
  actionText
}: React.PropsWithoutRef<TFormTriggerVariantProps & { actionText: React.ReactNode }>) => (
  <ButtonVariantWrapper role='formTrigger' data-component-id={componentId}>
    <TitleWrapper>
      <Text type='BTM3'>{ title }</Text>
      <Text type='BTR3'>{ description }</Text>
    </TitleWrapper>
    <div>
      <Button mode={'secondary'} onClick={onClick}>{ actionText }</Button>
    </div>
  </ButtonVariantWrapper>
)

export const FormTrigger = ({
  componentId,
  actionText,
  description,
  onClick,
  title,
  type = FormTriggerType.Link,
  ...restProps
}: React.PropsWithoutRef<IFormTriggerProps>) => {
  const Component = type === FormTriggerType.Link ? LinkVariant : ButtonVariant

  return <Component
    actionText={actionText}
    description={description}
    onClick={onClick}
    title={title}
    {...restProps}
  />
}
