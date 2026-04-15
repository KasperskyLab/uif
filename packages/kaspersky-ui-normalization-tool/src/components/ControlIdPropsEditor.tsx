import type { ReactElement } from 'react'
import { Text, Textbox } from '@kaspersky/hexa-ui'
import type { FormControl } from '../types/form-dsl'

export function ControlIdPropsEditor({
  id,
  onUpdate,
}: {
  id: string
  onUpdate: (patch: Partial<FormControl>) => void
}): ReactElement {
  return (
    <div style={{ width: '100%' }}>
      <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>
        ID элемента
      </Text>
      <Textbox
        value={id}
        onChange={(v) => onUpdate({ id: v })}
        style={{ width: '100%' }}
      />
    </div>
  )
}
