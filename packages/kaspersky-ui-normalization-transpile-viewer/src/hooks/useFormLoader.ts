import { useState, useCallback } from 'react'
import type { FormData } from '@/types/form-dsl'
import { parseFormTs } from '@/types/form-dsl'

export interface SelectedFormFile {
  path: string
  handle: FileSystemFileHandle
}

export function useFormLoader(): {
  selectedFile: SelectedFormFile | null
  formData: FormData | null
  loading: boolean
  loadError: string | null
  loadFile: (file: SelectedFormFile) => Promise<void>
} {
  const [selectedFile, setSelectedFile] = useState<SelectedFormFile | null>(null)
  const [formData, setFormData] = useState<FormData | null>(null)
  const [loading, setLoading] = useState(false)
  const [loadError, setLoadError] = useState<string | null>(null)

  const loadFile = useCallback(async (file: SelectedFormFile) => {
    setLoadError(null)
    setLoading(true)
    try {
      const f = await file.handle.getFile()
      const content = await f.text()
      const data = await parseFormTs(content)
      setSelectedFile(file)
      setFormData(data)
    } catch (err) {
      setLoadError(err instanceof Error ? err.message : 'Ошибка чтения файла')
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    selectedFile,
    formData,
    loading,
    loadError,
    loadFile,
  }
}
