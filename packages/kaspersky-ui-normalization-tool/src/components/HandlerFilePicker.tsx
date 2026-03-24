import { useState, useEffect, useCallback } from 'react'
import { Button, Text, Space } from '@kaspersky/hexa-ui'
import { Folder, ArrowUp1, Files } from '@kaspersky/hexa-ui-icons/16'
import { getErrorMessage } from '../utils/getErrorMessage'

const HANDLER_EXT = ['.js', '.ts']

export function HandlerFilePicker({
  directoryHandle,
  onSelect,
  onClose,
}: {
  directoryHandle: FileSystemDirectoryHandle
  onSelect: (path: string) => void
  onClose: () => void
}) {
  const [stack, setStack] = useState<{ handle: FileSystemDirectoryHandle; pathPrefix: string }[]>([
    { handle: directoryHandle, pathPrefix: '' },
  ])
  const [entries, setEntries] = useState<{ name: string; kind: 'file' | 'directory' }[]>([])
  const [loading, setLoading] = useState(true)

  const current = stack[stack.length - 1]

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    ;(async () => {
      const list: { name: string; kind: 'file' | 'directory' }[] = []
      try {
        for await (const [name, handle] of current.handle.entries()) {
          if (cancelled) return
          const kind = handle.kind as 'file' | 'directory'
          if (kind === 'directory') list.push({ name, kind: 'directory' })
          else if (HANDLER_EXT.some((e) => name.toLowerCase().endsWith(e))) list.push({ name, kind: 'file' })
        }
        if (!cancelled) {
          list.sort((a, b) => (a.kind !== b.kind ? (a.kind === 'directory' ? -1 : 1) : a.name.localeCompare(b.name)))
          setEntries(list)
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => { cancelled = true }
  }, [current.handle])

  const [dirError, setDirError] = useState<string | null>(null)
  const goIn = useCallback(
    (name: string) => {
      setDirError(null)
      current.handle
        .getDirectoryHandle(name)
        .then((handle) => {
          setStack((prev) => [...prev, { handle, pathPrefix: current.pathPrefix + name + '/' }])
        })
        .catch((err) => {
          setDirError(getErrorMessage(err, 'Не удалось открыть каталог'))
        })
    },
    [current]
  )

  const goUp = useCallback(() => {
    setStack((prev) => (prev.length <= 1 ? prev : prev.slice(0, -1)))
  }, [])

  const entryHoverStyle = { background: 'var(--surface--neutral2, #f5f5f5)' }

  return (
    <div style={{
      marginTop: 8,
      padding: 8,
      border: '1px solid var(--tagsoutlined--neutral-border, #E7E7E9)',
      borderRadius: 8,
      background: 'var(--surface--neutral, #FFF)',
      maxHeight: 200,
      overflow: 'auto',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 6 }}>
        {stack.length > 1 && (
          <Button mode="tertiary" size="small" iconBefore={<ArrowUp1 />} onClick={goUp} text="Наверх" />
        )}
        <Text type="BTR3" style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {stack.length > 1 ? current.pathPrefix : 'Корень каталога'}
        </Text>
      </div>
      {dirError && <Text type="BTR3" style={{ color: 'var(--tagsoutlined--danger-border, #c00)' }}>{dirError}</Text>}
      {loading ? (
        <Text type="BTR3" style={{ color: '#999' }}>Загрузка…</Text>
      ) : entries.length === 0 ? (
        <Text type="BTR3" style={{ color: '#999' }}>Нет файлов .js / .ts</Text>
      ) : (
        <Space size={2} direction="vertical" style={{ width: '100%' }}>
          {entries.map(({ name, kind }) => (
            <div
              key={name}
              role="button"
              tabIndex={0}
              onClick={() => kind === 'directory' ? goIn(name) : (onSelect(current.pathPrefix + name), onClose())}
              onKeyDown={(e) => {
                if (e.key !== 'Enter') return
                kind === 'directory' ? goIn(name) : (onSelect(current.pathPrefix + name), onClose())
              }}
              onMouseOver={(e) => Object.assign(e.currentTarget.style, entryHoverStyle)}
              onMouseOut={(e) => { e.currentTarget.style.background = '' }}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '4px 8px', cursor: 'pointer', borderRadius: 4,
              }}
            >
              {kind === 'directory' ? <Folder /> : <Files />}
              <Text type="BTR3">{name}</Text>
            </div>
          ))}
        </Space>
      )}
    </div>
  )
}
