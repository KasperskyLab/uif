import { useCallback, useEffect, useMemo, useState } from 'react'
import { Text, Button, Select } from '@kaspersky/hexa-ui'
import { Cross, Folder } from '@kaspersky/hexa-ui-icons/16'
import type { ControlHandlersMap } from '../types/form-dsl'
import {
  attachHandlerBinding,
  getHandlerBinding,
  handlerImportSpecifierFromPickerPath,
} from '@normalization/form-dsl'
import { HandlerFilePicker } from './HandlerFilePicker'
import { SelectWithOptionWidth } from './SelectWithOptionWidth'
import { loadTsModule } from '../utils/loadConfigHookModule'

function list_function_exports(mod: Record<string, unknown>): string[] {
  const names: string[] = []
  for (const [k, v] of Object.entries(mod)) {
    if (k === '__esModule') continue
    if (typeof v === 'function') names.push(k)
  }
  return names.sort()
}

function load_path_from_import_specifier(spec: string): string {
  const t = spec.trim().replace(/^\.\//, '')
  if (/\.tsx?$/i.test(t)) return t
  return `${t}.ts`
}

/**
 * Компактный выбор named export из `.ts`: папка + Select + сброс крестиком.
 */
export function ModuleExportHandlerCompact({
  label,
  handler,
  onHandlerChange,
  directoryHandle,
  selectKeyPrefix,
}: {
  label: string
  handler: ControlHandlersMap[string] | undefined
  onHandlerChange: (fn: ControlHandlersMap[string] | undefined) => void
  directoryHandle?: FileSystemDirectoryHandle | null
  /** Уникальный префикс для `key` у Select (несколько слотов на панели). */
  selectKeyPrefix: string
}) {
  const [pickerOpen, setPickerOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [exportNames, setExportNames] = useState<string[]>([])
  const [activeModulePath, setActiveModulePath] = useState<string | null>(null)
  const [activeSpecifier, setActiveSpecifier] = useState<string | null>(null)

  const boundExport =
    typeof handler === 'function'
      ? (getHandlerBinding(handler)?.export ?? null)
      : null

  const sync_exports_from_binding = useCallback(async () => {
    if (!directoryHandle) {
      setExportNames([])
      setActiveModulePath(null)
      setActiveSpecifier(null)
      return
    }
    const b = typeof handler === 'function' ? getHandlerBinding(handler) : null
    if (!b) {
      setExportNames([])
      setActiveModulePath(null)
      setActiveSpecifier(null)
      return
    }
    const path = load_path_from_import_specifier(b.module)
    setLoading(true)
    try {
      const mod = await loadTsModule(directoryHandle, path)
      if (!mod) {
        setExportNames([])
        return
      }
      const names = list_function_exports(mod)
      setExportNames((prev) =>
        prev.length === names.length && prev.every((v, i) => v === names[i])
          ? prev
          : names,
      )
      setActiveModulePath(path)
      setActiveSpecifier(b.module)
    } finally {
      setLoading(false)
    }
  }, [handler, directoryHandle])

  useEffect(() => {
    void sync_exports_from_binding()
  }, [sync_exports_from_binding])

  const apply_export = useCallback(
    async (exportName: string | undefined) => {
      if (!exportName) {
        onHandlerChange(undefined)
        return
      }
      if (!directoryHandle || !activeModulePath || !activeSpecifier) return
      const mod = await loadTsModule(directoryHandle, activeModulePath)
      if (!mod) return
      const raw = mod[exportName]
      if (typeof raw !== 'function') return
      onHandlerChange(
        attachHandlerBinding(raw as (...args: unknown[]) => unknown, {
          module: activeSpecifier,
          export: exportName,
        }),
      )
    },
    [activeModulePath, activeSpecifier, directoryHandle, onHandlerChange],
  )

  const on_file_chosen = useCallback(
    async (path: string) => {
      if (!directoryHandle) return
      setPickerOpen(false)
      setLoading(true)
      try {
        const mod = await loadTsModule(directoryHandle, path)
        const spec = handlerImportSpecifierFromPickerPath(path)
        if (!mod) {
          setExportNames([])
          setActiveModulePath(null)
          setActiveSpecifier(null)
          return
        }
        setActiveModulePath(path)
        setActiveSpecifier(spec)
        const names = list_function_exports(mod)
        setExportNames(names)
        if (names.length === 1) {
          const raw = mod[names[0]]
          if (typeof raw === 'function') {
            onHandlerChange(
              attachHandlerBinding(raw as (...args: unknown[]) => unknown, {
                module: spec,
                export: names[0],
              }),
            )
          }
        }
      } finally {
        setLoading(false)
      }
    },
    [directoryHandle, onHandlerChange],
  )

  const select_options = useMemo(
    () => exportNames.map((e) => ({ value: e, label: e })),
    [exportNames],
  )
  const select_value =
    boundExport && exportNames.includes(boundExport) ? boundExport : undefined

  return (
    <div style={{ width: '100%', minWidth: 0 }}>
      <Text
        type="BTR3"
        style={{ display: 'block', marginBottom: 4, fontWeight: 600, fontSize: 12 }}
      >
        {label}
      </Text>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center', width: '100%' }}>
        {directoryHandle && (
          <Button
            mode="tertiary"
            size="small"
            iconBefore={<Folder />}
            title="Выбрать .ts модуль"
            onClick={() => setPickerOpen((o) => !o)}
          />
        )}
        <div style={{ position: 'relative', flex: 1, minWidth: 0 }}>
          <SelectWithOptionWidth options={select_options}>
            <Select
              key={selectKeyPrefix}
              options={select_options}
              value={select_value}
              placeholder={
                loading
                  ? 'Загрузка…'
                  : exportNames.length === 0
                    ? 'Сначала выберите файл'
                    : 'Функция'
              }
              disabled={!directoryHandle || exportNames.length === 0 || loading}
              style={{ width: '100%' }}
              onChange={(v: string | undefined) => {
                void apply_export(v)
              }}
              getPopupContainer={() => document.body}
            />
          </SelectWithOptionWidth>
          {boundExport && (
            <Button
              mode="tertiary"
              size="small"
              iconBefore={<Cross />}
              title="Сбросить"
              onClick={() => onHandlerChange(undefined)}
              style={{
                position: 'absolute',
                right: 36,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                minWidth: 28,
                padding: 0,
              }}
            />
          )}
        </div>
      </div>
      {pickerOpen && directoryHandle && (
        <HandlerFilePicker
          directoryHandle={directoryHandle}
          fileExtensions={['.ts']}
          onSelect={(path) => void on_file_chosen(path)}
          onClose={() => setPickerOpen(false)}
        />
      )}
    </div>
  )
}
