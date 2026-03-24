import { useState, useCallback } from 'react'

export interface UseDirectoryPickerResult {
  directoryHandle: FileSystemDirectoryHandle | null
  directoryName: string | null
  selectDirectory: () => Promise<void>
  error: string | null
  clearError: () => void
}

export function useDirectoryPicker(): UseDirectoryPickerResult {
  const [directoryHandle, setDirectoryHandle] = useState<FileSystemDirectoryHandle | null>(null)
  const [directoryName, setDirectoryName] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

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
  }, [])

  const clearError = useCallback(() => setError(null), [])

  return {
    directoryHandle,
    directoryName,
    selectDirectory,
    error,
    clearError,
  }
}
