import React from 'react'

import { FormTrigger as HexaFormTrigger } from '@src/form-trigger'
import { FormTriggerType } from '@src/form-trigger/types'

type FormTriggerProps = React.ComponentProps<typeof HexaFormTrigger>

const FormTrigger = ({
  actionText = 'Open',
  description = 'Open additional settings',
  onClick = () => undefined,
  title = 'Advanced settings',
  type = FormTriggerType.Button,
  ...props
}: FormTriggerProps): JSX.Element => (
  <HexaFormTrigger
    actionText={actionText}
    description={description}
    onClick={onClick}
    title={title}
    type={type}
    {...props}
  />
)

export default FormTrigger
