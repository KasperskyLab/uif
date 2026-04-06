import type { ReactElement } from 'react'
import { Text, Textbox, Space } from '@kaspersky/hexa-ui'

/** Только отображение `id` контрола (единый configHook задаётся на форме). */
export function ControlIdPropsEditor({ id }: { id: string }): ReactElement {
  return (
    <Space size={12} direction="vertical" style={{ width: '100%' }}>
      <div style={{ width: '100%' }}>
        <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>
          Идентификатор (id)
        </Text>
        <Textbox value={id} readOnly style={{ width: '100%' }} />
      </div>
    </Space>
  )
}
