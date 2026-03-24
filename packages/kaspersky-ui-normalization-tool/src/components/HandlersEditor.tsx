import { useState } from 'react'
import { Text, Textbox, Button, Space } from '@kaspersky/hexa-ui'
import { Cross, Folder } from '@kaspersky/hexa-ui-icons/16'
import type { EventDefinition } from '../types/form-dsl'
import { HandlerFilePicker } from './HandlerFilePicker'

export function HandlersEditor({
  title,
  events,
  handlers,
  onChange,
  directoryHandle,
}: {
  title: string
  events: EventDefinition[]
  handlers: Record<string, string>
  onChange: (handlers: Record<string, string>) => void
  directoryHandle?: FileSystemDirectoryHandle | null
}) {
  const [openPicker, setOpenPicker] = useState<string | null>(null)

  if (events.length === 0) return null

  const setHandler = (eventName: string, path: string | undefined) => {
    const next = { ...handlers }
    if (path) next[eventName] = path
    else delete next[eventName]
    onChange(next)
  }

  return (
    <div style={{
      width: '100%',
      borderTop: '1px solid var(--tagsoutlined--neutral-border, #E7E7E9)',
      paddingTop: 16,
    }}>
      <Text type="BTR3" style={{ display: 'block', marginBottom: 8, fontWeight: 600 }}>
        {title}
      </Text>
      <Space size={8} direction="vertical" style={{ width: '100%' }}>
        {events.map((event) => {
          const value = handlers[event.name] ?? ''
          const isPickerOpen = openPicker === event.name
          return (
            <div key={event.name} style={{ width: '100%' }}>
              <Text type="BTR3" style={{ display: 'block', marginBottom: 3, fontSize: 12, color: '#666' }}>
                {event.label} ({event.name})
              </Text>
              <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                <Textbox
                  value={value}
                  onChange={(v) => setHandler(event.name, v || undefined)}
                  placeholder="handlers/example.js"
                  style={{ flex: 1 }}
                />
                {value && (
                  <Button
                    mode="tertiary"
                    size="small"
                    iconBefore={<Cross />}
                    onClick={() => setHandler(event.name, undefined)}
                  />
                )}
                {directoryHandle && (
                  <Button
                    mode="tertiary"
                    size="small"
                    iconBefore={<Folder />}
                    onClick={() => setOpenPicker(isPickerOpen ? null : event.name)}
                  />
                )}
              </div>
              {isPickerOpen && directoryHandle && (
                <HandlerFilePicker
                  directoryHandle={directoryHandle}
                  onSelect={(path) => {
                    setHandler(event.name, path)
                    setOpenPicker(null)
                  }}
                  onClose={() => setOpenPicker(null)}
                />
              )}
            </div>
          )
        })}
      </Space>
    </div>
  )
}
