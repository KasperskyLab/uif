import { FC } from 'react'

import { FieldSet as FieldSetRaw } from './FieldSet'
import { KeyValueMapper, KeyValueMapperProps } from './KeyValueMapper'
import { type FieldSetItem, type FieldSetProps } from './types'

const FieldSet: FC<FieldSetProps> & { KeyValueMapper: FC<KeyValueMapperProps> } =
  Object.assign(FieldSetRaw, { KeyValueMapper })

FieldSet.KeyValueMapper.displayName = 'FieldSet.KeyValueMapper'

export { FieldSet, FieldSetItem, FieldSetProps }
