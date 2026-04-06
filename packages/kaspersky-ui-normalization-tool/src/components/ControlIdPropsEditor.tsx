import type { ReactElement } from 'react'
import { Text, Textbox, Space } from '@kaspersky/hexa-ui'
import type { FormControl } from '../types/form-dsl'

export function ControlIdPropsEditor({
  id,
  onUpdate,
}: {
  id: string
  onUpdate: (patch: Partial<FormControl>) => void
}): ReactElement {
  return (
    <Space size={12} direction="vertical" style={{ width: '100%' }}>
      <div style={{ width: '100%' }}>
        <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>
          Идентификатор (id)
        </Text>
        <Textbox
          value={id}
          onChange={(v) => onUpdate({ id: v })}
          placeholder="уникальный id"
          style={{ width: '100%' }}
        />
        <Text
          type="BTR3"
          style={{
            display: 'block',
            marginTop: 6,
            color: 'var(--text--secondary, #666)',
            fontSize: 11,
          }}
        >
          Должен совпадать с ключом в форменном configHook, если хук есть.
        </Text>
      </div>
    </Space>
  )
}
