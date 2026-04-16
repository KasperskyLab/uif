import { useCallback, useState } from 'react'
import { Text, Button, Space, Select } from '@kaspersky/hexa-ui'
import { Cross, Folder } from '@kaspersky/hexa-ui-icons/16'
import type { EventDefinition } from '../types/form-dsl'
import type { ControlHandlersMap } from '../types/form-dsl'
import {
  attachHandlerBinding,
  getHandlerBinding,
  handlerImportSpecifierFromPickerPath,
} from '@normalization/form-dsl'
import { HandlerFilePicker } from './HandlerFilePicker'
import { loadTsModule } from '../utils/loadConfigHookModule'

function list_function_exports(mod: Record<string, unknown>): string[] {
  const names: string[] = []
  for (const [k, v] of Object.entries(mod)) {
    if (k === '__esModule') continue
    if (typeof v === 'function') names.push(k)
  }
  return names.sort()
}

function handler_display_label(val: unknown): string {
  if (val == null) return ''
  if (typeof val === 'function') {
    const b = getHandlerBinding(val)
    if (b) return `${b.module} → ${b.export}`
    const n = (val as (...args: unknown[]) => unknown).name
    return n ? `${n} (пересохраните из .schema.ts для экспорта)` : '(функция)'
  }
  if (typeof val === 'string') return val
  return ''
}

type PickingState = {
  eventName: string
  modulePath: string
  importSpecifier: string
  exports: string[]
  selectedExport: string
  loadError: string | null
}

export function HandlersEditor({
  title,
  events,
  handlers,
  onChange,
  directoryHandle,
}: {
  title: string
  events: EventDefinition[]
  handlers: Record<string, ControlHandlersMap[string] | undefined>
  onChange: (handlers: Record<string, ControlHandlersMap[string] | undefined>) => void
  directoryHandle?: FileSystemDirectoryHandle | null
}) {
  const [openPicker, setOpenPicker] = useState<string | null>(null)
  const [picking, setPicking] = useState<PickingState | null>(null)
  const [loadingEvent, setLoadingEvent] = useState<string | null>(null)

  const set_handler_for_event = useCallback(
    (eventName: string, fn: ControlHandlersMap[string] | undefined) => {
      const next = { ...handlers }
      if (fn != null) next[eventName] = fn
      else delete next[eventName]
      onChange(next)
    },
    [handlers, onChange],
  )

  const on_file_chosen = useCallback(
    async (eventName: string, path: string) => {
      if (!directoryHandle) return
      setOpenPicker(null)
      setPicking(null)
      setLoadingEvent(eventName)
      try {
        const mod = await loadTsModule(directoryHandle, path)
        if (!mod) {
          setPicking({
            eventName,
            modulePath: path,
            importSpecifier: handlerImportSpecifierFromPickerPath(path),
            exports: [],
            selectedExport: '',
            loadError: 'Не удалось загрузить модуль',
          })
          return
        }
        const exports = list_function_exports(mod)
        if (exports.length === 0) {
          setPicking({
            eventName,
            modulePath: path,
            importSpecifier: handlerImportSpecifierFromPickerPath(path),
            exports: [],
            selectedExport: '',
            loadError: 'В модуле нет экспортируемых функций',
          })
          return
        }
        setPicking({
          eventName,
          modulePath: path,
          importSpecifier: handlerImportSpecifierFromPickerPath(path),
          exports,
          selectedExport: exports[0],
          loadError: null,
        })
      } finally {
        setLoadingEvent(null)
      }
    },
    [directoryHandle],
  )

  const confirm_picking = useCallback(() => {
    if (!picking || !directoryHandle) return
    const modSync = async () => {
      const mod = await loadTsModule(directoryHandle, picking.modulePath)
      if (!mod) return
      const raw = mod[picking.selectedExport]
      if (typeof raw !== 'function') return
      const bound = attachHandlerBinding(
        raw as (...args: unknown[]) => unknown,
        {
          module: picking.importSpecifier,
          export: picking.selectedExport,
        },
      )
      set_handler_for_event(picking.eventName, bound)
      setPicking(null)
    }
    void modSync()
  }, [directoryHandle, picking, set_handler_for_event])

  if (events.length === 0) return null

  return (
    <div style={{ width: '100%' }}>
      <Text type="BTR3" style={{ display: 'block', marginBottom: 8, fontWeight: 600 }}>
        {title}
      </Text>
      <Space size={8} direction="vertical" style={{ width: '100%' }}>
        {events.map((event) => {
          const value = handlers[event.name]
          const isPickerOpen = openPicker === event.name
          const isPickingThis = picking?.eventName === event.name
          return (
            <div key={event.name} style={{ width: '100%' }}>
              <Text type="BTR3" style={{ display: 'block', marginBottom: 3, fontSize: 12, color: '#666' }}>
                {event.label} ({event.name})
              </Text>
              <Text type="BTR3" style={{ display: 'block', marginBottom: 4, fontSize: 11, color: '#333' }}>
                {handler_display_label(value) || '—'}
              </Text>
              <div style={{ display: 'flex', gap: 4, alignItems: 'center', flexWrap: 'wrap' }}>
                {value && (
                  <Button
                    mode="tertiary"
                    size="small"
                    iconBefore={<Cross />}
                    onClick={() => set_handler_for_event(event.name, undefined)}
                    text="Сбросить"
                  />
                )}
                {directoryHandle && (
                  <Button
                    mode="tertiary"
                    size="small"
                    iconBefore={<Folder />}
                    onClick={() => {
                      setPicking(null)
                      setOpenPicker(isPickerOpen ? null : event.name)
                    }}
                    text="Выбрать функцию…"
                  />
                )}
              </div>
              {loadingEvent === event.name && (
                <Text type="BTR3" style={{ marginTop: 4, fontSize: 11, color: '#999' }}>
                  Загрузка модуля…
                </Text>
              )}
              {isPickerOpen && directoryHandle && (
                <HandlerFilePicker
                  directoryHandle={directoryHandle}
                  fileExtensions={['.ts']}
                  onSelect={(path) => void on_file_chosen(event.name, path)}
                  onClose={() => setOpenPicker(null)}
                />
              )}
              {isPickingThis && picking && (
                <div
                  style={{
                    marginTop: 8,
                    padding: 8,
                    border: '1px solid var(--tagsoutlined--neutral-border, #E7E7E9)',
                    borderRadius: 8,
                    background: 'var(--surface--neutral2, #fafafa)',
                  }}
                >
                  {picking.loadError && (
                    <Text type="BTR3" style={{ color: 'var(--danger--main, #c00)', marginBottom: 6 }}>
                      {picking.loadError}
                    </Text>
                  )}
                  {picking.exports.length > 0 && (
                    <Space size={8} direction="vertical" style={{ width: '100%' }}>
                      <Text type="BTR3" style={{ fontSize: 12 }}>
                        Экспорт из {picking.importSpecifier}
                      </Text>
                      <Select
                        options={picking.exports.map((e) => ({ value: e, label: e }))}
                        value={picking.selectedExport}
                        style={{ width: '100%' }}
                        onChange={(v: string | undefined) =>
                          setPicking((prev) =>
                            prev && prev.eventName === event.name
                              ? { ...prev, selectedExport: v ?? prev.exports[0] }
                              : prev,
                          )
                        }
                      />
                      <Button mode="secondary" size="small" text="Применить" onClick={confirm_picking} />
                    </Space>
                  )}
                  <Button
                    mode="tertiary"
                    size="small"
                    text="Отмена"
                    style={{ marginTop: 6 }}
                    onClick={() => setPicking(null)}
                  />
                </div>
              )}
            </div>
          )
        })}
      </Space>
    </div>
  )
}
