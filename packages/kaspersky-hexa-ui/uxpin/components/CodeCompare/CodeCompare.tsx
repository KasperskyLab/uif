import React from 'react'

import { CodeCompare as HexaCodeCompare } from '@src/code-compare'
import { IVersionOption } from '@src/code-compare/types'

import {
  previewCode,
  previewCodeCompareOptions,
  previewUpdatedCode
} from '../../preview'

type CodeCompareProps = React.ComponentProps<typeof HexaCodeCompare>

const [oldVersion, newVersion] = previewCodeCompareOptions as [IVersionOption, IVersionOption]

const CodeCompare = ({
  options = previewCodeCompareOptions,
  oldValue = previewCode,
  newValue = previewUpdatedCode,
  ...props
}: CodeCompareProps): JSX.Element => (
  <HexaCodeCompare
    options={options}
    oldValue={oldValue}
    newValue={newValue}
    oldVersion={props.oldVersion ?? oldVersion}
    newVersion={props.newVersion ?? newVersion}
    {...props}
  />
)

export default CodeCompare
