import * as React from 'react'
import { Text, Link, Button } from '@src/index'
import { FormTriggerStyled, TitleWrapper } from './formTriggerCss'
import { FormTriggerProps, FormTriggerType } from './types'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

export const FormTrigger: React.FC<FormTriggerProps> = ({
  actionText,
  description,
  onClick,
  title,
  type = FormTriggerType.Link,
  ...restProps
}: FormTriggerProps) => {
  const isLink = type === FormTriggerType.Link
  const { testAttributes, ...rest } = useTestAttribute(restProps)

  return (
    <FormTriggerStyled {...rest} {...testAttributes} >
      <TitleWrapper>
        {
          isLink
            ? <Link onClick={onClick}>{title}</Link>
            : <Text type='BTM3'>{title}</Text>
        }
        <Text type='BTR3'>{description}</Text>
      </TitleWrapper>
      {!isLink && (
        <div>
          <Button mode={'secondary'} onClick={onClick}>{actionText}</Button>
        </div>
      )}
    </FormTriggerStyled>
  )
}
