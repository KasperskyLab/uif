import { useState } from 'react'
import { Button, Text, Textbox, Space } from '@kaspersky/hexa-ui'
import { Cross, Folder, Cursor } from '@kaspersky/hexa-ui-icons/16'
import type { ControlDescriptor } from '../types'
import type { ButtonControl } from '../../types/form-dsl'
import { HandlerFilePicker } from '../../components/HandlerFilePicker'

export const buttonDescriptor: ControlDescriptor<ButtonControl> = {
  type: 'button',
  label: 'Кнопка',
  Icon: Cursor,

  createDefault: () => ({
    type: 'button',
    id: '',
  }),

  CanvasPreview: ({ control }) => (
    <Button
      mode="tertiary"
      size="small"
      text={`[${control.id || 'button'}]`}
      disabled
    />
  ),

  PropsEditor: ({ control, onUpdate, panelContext }) => {
    const [pickerOpen, setPickerOpen] = useState(false)
    const directoryHandle = panelContext?.formDirectoryHandle ?? null
    const value = control.configHook ?? ''

    const setPath = (path: string | undefined) => {
      onUpdate({ configHook: path || undefined })
    }

    return (
      <Space size={12} direction="vertical" style={{ width: '100%' }}>
        <div style={{ width: '100%' }}>
          <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>
            Хендлер настройки (configHook)
          </Text>
          <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <Textbox
              value={value}
              onChange={(v) => setPath(v || undefined)}
              placeholder="handlers/button.config-hook.ts"
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
            {directoryHandle && (
              <Button
                mode="tertiary"
                size="small"
                iconBefore={<Folder />}
                onClick={() => setPickerOpen((o) => !o)}
              />
            )}
          </div>
          {pickerOpen && directoryHandle && (
            <HandlerFilePicker
              directoryHandle={directoryHandle}
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
  },
}
