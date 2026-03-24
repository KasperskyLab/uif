import { useState } from 'react'
import { Button, Text, Textbox, Space } from '@kaspersky/hexa-ui'
import { Cross, Folder } from '@kaspersky/hexa-ui-icons/16'
import { HandlerFilePicker } from './HandlerFilePicker'

export interface ConfigHookIdentityPropsEditorProps {
  id: string
  configHook?: string
  onUpdate: (patch: { configHook?: string }) => void
  /** Плейсхолдер пути к `.ts` (например handlers/button.config-hook.ts) */
  configHookPlaceholder: string
  formDirectoryHandle: FileSystemDirectoryHandle | null
}

/**
 * Общий инспектор для контролов с `id` + `configHook` (кнопка, текст, …).
 */
export function ConfigHookIdentityPropsEditor({
  id,
  configHook,
  onUpdate,
  configHookPlaceholder,
  formDirectoryHandle,
}: ConfigHookIdentityPropsEditorProps) {
  const [pickerOpen, setPickerOpen] = useState(false)
  const value = configHook ?? ''

  const setPath = (path: string | undefined) => {
    onUpdate({ configHook: path || undefined })
  }

  return (
    <Space size={12} direction="vertical" style={{ width: '100%' }}>
      <div style={{ width: '100%' }}>
        <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>
          Идентификатор (id)
        </Text>
        <Textbox value={id} readOnly style={{ width: '100%' }} />
      </div>
      <div style={{ width: '100%' }}>
        <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>
          Хендлер настройки (configHook)
        </Text>
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          <Textbox
            value={value}
            onChange={(v) => setPath(v || undefined)}
            placeholder={configHookPlaceholder}
            style={{ flex: 1 }}
          />
          {value && (
            <Button
              mode="tertiary"
              size="small"
              iconBefore={<Cross />}
              onClick={() => setPath(undefined)}
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
              setPath(path)
              setPickerOpen(false)
            }}
            onClose={() => setPickerOpen(false)}
          />
        )}
      </div>
    </Space>
  )
}
