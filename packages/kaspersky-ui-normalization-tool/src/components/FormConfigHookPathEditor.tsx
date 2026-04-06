import { useState } from 'react'
import type { ReactElement } from 'react'
import { Button, Text, Textbox, Space } from '@kaspersky/hexa-ui'
import { Cross, Folder } from '@kaspersky/hexa-ui-icons/16'
import { HandlerFilePicker } from './HandlerFilePicker'

export interface FormConfigHookPathEditorProps {
  value: string | undefined
  onChange: (path: string | undefined) => void
  formDirectoryHandle: FileSystemDirectoryHandle | null | undefined
  /** Например `{id}.config-hook.ts` */
  placeholder: string
}

/**
 * Путь к единому TS-модулю configHook на уровне формы.
 */
export function FormConfigHookPathEditor({
  value,
  onChange,
  formDirectoryHandle,
  placeholder,
}: FormConfigHookPathEditorProps): ReactElement {
  const [pickerOpen, setPickerOpen] = useState(false)
  const str = value ?? ''

  return (
    <Space size={8} direction="vertical" style={{ width: '100%' }}>
      <Text type="BTR3" style={{ display: 'block', fontWeight: 600 }}>
        Config hook формы
      </Text>
      <Text type="BTR4" style={{ color: 'var(--text--secondary)' }}>
        Один файл .ts: default export — функция без аргументов, возвращает объект
        «control.id → хук».
      </Text>
      <div style={{ display: 'flex', gap: 4, alignItems: 'center', width: '100%' }}>
        <Textbox
          value={str}
          onChange={(v) => onChange(v || undefined)}
          placeholder={placeholder}
          style={{ flex: 1 }}
        />
        {str && (
          <Button
            mode="tertiary"
            size="small"
            iconBefore={<Cross />}
            onClick={() => onChange(undefined)}
          />
        )}
        {formDirectoryHandle && (
          <Button
            mode="tertiary"
            size="small"
            iconBefore={<Folder />}
            onClick={() => setPickerOpen((o) => !o)}
          />
        )}
      </div>
      {pickerOpen && formDirectoryHandle && (
        <HandlerFilePicker
          directoryHandle={formDirectoryHandle}
          fileExtensions={['.ts']}
          onSelect={(path) => {
            onChange(path)
            setPickerOpen(false)
          }}
          onClose={() => setPickerOpen(false)}
        />
      )}
    </Space>
  )
}
