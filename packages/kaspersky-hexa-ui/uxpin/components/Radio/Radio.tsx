import React from 'react'

import { Radio as HexaRadio } from '@src/radio'
import { RadioProps } from '@src/radio/types'

import { previewRadioOptions } from '../../preview'

const Radio = ({
  onChange,
  options = previewRadioOptions,
  value,
  ...props
}: RadioProps): JSX.Element => {
  const [previewValue, setPreviewValue] = React.useState(value ?? previewRadioOptions[0]?.value)

  React.useEffect(() => {
    if (value !== undefined) {
      setPreviewValue(value as string)
    }
  }, [value])

  return (
    <HexaRadio
      onChange={(event) => {
        if (value === undefined) {
          setPreviewValue(event.target.value)
        }
        onChange?.(event)
      }}
      options={options}
      value={value ?? previewValue}
      {...props}
    />
  )
}

export default Radio
