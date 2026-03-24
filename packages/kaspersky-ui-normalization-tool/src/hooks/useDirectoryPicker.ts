import { useState, useCallback, useEffect } from 'react'
import {
  savePersistedDirectoryHandle,
  loadPersistedDirectoryHandle,
  ensureDirectoryPermission,
  type DirectoryPersistenceKey,
} from '../utils/directoryHandleStorage'

export interface UseDirectoryPickerOptions {
  persistenceKey: DirectoryPersistenceKey
  /** Проверка доступа при восстановлении из IndexedDB (как при выборе через picker). */
  restorePermissionMode?: 'read' | 'readwrite'
  /** Не использовать IndexedDB (например window.__E2E_DEMO__). */
  disablePersistence?: boolean
}

export interface UseDirectoryPickerResult {
  directoryHandle: FileSystemDirectoryHandle | null
  directoryName: string | null
  selectDirectory: () => Promise<void>
  error: string | null
  clearError: () => void
  /** Первый заход: попытка восстановить handle из IndexedDB */
  restoringDirectory: boolean
}

export function useDirectoryPicker(
  options: UseDirectoryPickerOptions
): UseDirectoryPickerResult {
  const { persistenceKey, restorePermissionMode = 'read', disablePersistence = false } = options

  const [directoryHandle, setDirectoryHandle] = useState<FileSystemDirectoryHandle | null>(null)
  const [directoryName, setDirectoryName] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [restoringDirectory, setRestoringDirectory] = useState(!disablePersistence)

  useEffect(() => {
    if (disablePersistence) {
      setRestoringDirectory(false)
      return
    }

    let cancelled = false
    ;(async () => {
      try {
        const stored = await loadPersistedDirectoryHandle(persistenceKey)
        if (cancelled || !stored) return
        const ok = await ensureDirectoryPermission(stored, restorePermissionMode)
        if (cancelled || !ok) return
        setDirectoryHandle(stored)
        setDirectoryName(stored.name)
      } catch {
        /* повреждённый IDB или отсутствует API */
      } finally {
        if (!cancelled) setRestoringDirectory(false)
      }
    })()

    return () => {
      cancelled = true
    }
  }, [persistenceKey, restorePermissionMode, disablePersistence])

  const selectDirectory = useCallback(async () => {
    setError(null)
    if (typeof window.showDirectoryPicker !== 'function') {
      setError(
        'Выбор каталога не поддерживается в этом браузере. Используйте Chrome или Edge (Desktop).'
      )
      return
    }
    try {
      const handle = await window.showDirectoryPicker!({ mode: 'read' })
      setDirectoryHandle(handle)
      setDirectoryName(handle.name)
      if (!disablePersistence) {
        try {
          await savePersistedDirectoryHandle(persistenceKey, handle)
        } catch {
          /* не блокируем работу, если IDB недоступен */
        }
      }
    } catch (err) {
      if (err instanceof Error) {
        if (err.name === 'AbortError') {
          return
        }
        setError(err.message)
      } else {
        setError('Не удалось открыть каталог')
      }
    }
  }, [persistenceKey, disablePersistence])

  const clearError = useCallback(() => setError(null), [])

  return {
    directoryHandle,
    directoryName,
    selectDirectory,
    error,
    clearError,
    restoringDirectory,
  }
}
