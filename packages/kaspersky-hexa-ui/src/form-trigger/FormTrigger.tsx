import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { Button } from '@src/button'
import { Link } from '@src/link'
import { Text } from '@src/typography'
import * as React from 'react'

import { Description, FormTriggerStyled, TitleWrapper } from './formTriggerCss'
import { FormTriggerProps, FormTriggerType } from './types'

export const FormTrigger: React.FC<FormTriggerProps> = ({
  actionText,
  description,
  onClick,
  title,
  type = FormTriggerType.Link,
  disabled,
  ...restProps
}: FormTriggerProps) => {
  const isLink = type === FormTriggerType.Link
  const { testAttributes, ...rest } = useTestAttribute(restProps)

  return (
    <FormTriggerStyled {...rest} {...testAttributes} >
      { isLink
        ? <div>
          <Link disabled={disabled} onClick={onClick}>{title}</Link>
          <Description type="BTR4" themedColor="secondary-solid">{description}</Description>
        </div>
        : <>
          <TitleWrapper>
            <Text type="BTM3" themedColor="secondary2-solid">{title}</Text>
          </TitleWrapper>
          <div>
            <Button mode="secondary" onClick={onClick} disabled={disabled}>{actionText}</Button>
            <Description type="BTR4" themedColor="secondary-solid">{description}</Description>
          </div>
        </>
      }
    </FormTriggerStyled>
  )
}
