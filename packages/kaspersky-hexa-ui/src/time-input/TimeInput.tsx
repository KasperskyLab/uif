import { DEFAULT_TIME_FORMAT } from '@design-system/tokens'
import { generateTimeIMaskOptions } from '@helpers/imaskDateOptionsGenerator'
import React from 'react'
import { IMaskInputProps } from 'react-imask'

import { Textbox } from '../input'

import { TimeInputProps } from './types'

export const TimeInput: React.FC<TimeInputProps> = ({
  format = DEFAULT_TIME_FORMAT,
  placeholder,
  ...rest
}: TimeInputProps) => {
  const maskOptions: IMaskInputProps = React.useMemo(() => {
    return generateTimeIMaskOptions(format)
  }, [format])

  const regex = /HH|mm|ss|ms/g
  const resolvedPlaceholder = placeholder || format.replace('h:mm aaa', '__:__ am').replace(regex, '__')

  return <Textbox.Masked {...rest} maskOptions={maskOptions} placeholder={resolvedPlaceholder} />
}
