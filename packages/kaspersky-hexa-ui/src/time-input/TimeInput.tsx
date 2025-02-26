import { DEFAULT_TIME_FORMAT } from '@design-system/tokens'
import { generateTimeIMaskOptions } from '@helpers/imaskDateOptionsGenerator'
import React from 'react'
import { IMaskInputProps } from 'react-imask'

import { Textbox } from '../input'

import { TimeInputProps } from './types'

export const TimeInput: React.FC<TimeInputProps> = ({
  format = DEFAULT_TIME_FORMAT,
  ...rest
}: TimeInputProps) => {
  const maskOptions: IMaskInputProps = React.useMemo(() => {
    return generateTimeIMaskOptions(format)
  }, [format])

  return <Textbox.Masked {...rest} maskOptions={maskOptions} />
}
