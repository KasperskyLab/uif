import React from 'react'
import { Textbox } from '../input'
import { TimeInputProps } from './types'
import { IMaskInputProps } from 'react-imask'
import { generateTimeIMaskOptions } from '@helpers/imaskDateOptionsGenerator'
import { DEFAULT_TIME_FORMAT } from '@design-system/tokens'

export const TimeInput: React.FC<TimeInputProps> = ({
  format = DEFAULT_TIME_FORMAT,
  ...rest
}: TimeInputProps) => {
  const maskOptions: IMaskInputProps = React.useMemo(() => {
    return generateTimeIMaskOptions(format)
  }, [format])

  return <Textbox.Masked {...rest} maskOptions={maskOptions} />
}
