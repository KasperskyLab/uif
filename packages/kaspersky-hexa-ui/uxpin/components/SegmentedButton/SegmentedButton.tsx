import React from 'react'

import { SegmentedButton as HexaSegmentedButton } from '@src/segmented-button'
import { SegmentedButtonProps } from '@src/segmented-button/types'

import { previewSegmentedButtonItems } from '../../preview'

const SegmentedButton = ({
  items = previewSegmentedButtonItems,
  onChange,
  value,
  ...props
}: SegmentedButtonProps): JSX.Element => {
  const [previewValue, setPreviewValue] = React.useState<string[]>(value ?? [items[0]?.value].filter(Boolean))

  React.useEffect(() => {
    if (value !== undefined) {
      setPreviewValue(value)
    }
  }, [value])

  const resolvedValue = value ?? previewValue

  return (
    <HexaSegmentedButton
      items={items}
      onChange={(nextValue) => {
        if (value === undefined) {
          setPreviewValue(nextValue)
        }
        onChange(nextValue)
      }}
      value={resolvedValue}
      {...props}
    />
  )
}

export default SegmentedButton
