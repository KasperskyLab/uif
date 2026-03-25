import { useState, useCallback, useRef } from 'react'
import type { FormControl, FormData } from '../types/form-dsl'
import { parseFormTs, formToTs, createEmptyFormData } from '../types/form-dsl'
import { FORM_EXT } from '../constants'
import { getErrorMessage } from '../utils/getErrorMessage'

export interface SelectedFormFile {
  /** Относительный путь (например "form.ts" или "forms/main.ts") */
  path: string
  handle: FileSystemFileHandle
}

/** Возвращаемый тип useFormFile — для переиспользования и консистентности API. */
export interface UseFormFileResult {
  selectedFile: SelectedFormFile | null
  formData: FormData
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
  formControls: FormControl[]
  setFormControls: React.Dispatch<React.SetStateAction<FormControl[]>>
  hasUnsavedChanges: boolean
  selectFile: (file: SelectedFormFile) => Promise<void>
  closeFile: () => void
  saveFile: () => Promise<string | null>
  createNewForm: () => Promise<string | null>
  deleteCurrentForm: () => Promise<string | null>
  loading: boolean
  loadError: string | null
}

/** Режим для e2e-тестов: при window.__E2E_DEMO__ приложение работает без File System API (пустая форма). */
declare global {
  interface Window {
    __E2E_DEMO__?: boolean
  }
}


const e2eDemoFormData: FormData = { name: 'E2E Demo', id: 'e2e-demo', elements: [] }

const e2eFakeFile: SelectedFormFile = {
  path: 'e2e-demo.ts',
  handle: {} as FileSystemFileHandle,
}

/** Удаляет файл по относительному пути из каталога (поддерживает вложенные пути). */
async function removeFileByPath(
  dir: FileSystemDirectoryHandle,
  filePath: string
): Promise<void> {
  const parts = filePath.replace(/\\/g, '/').split('/').filter(Boolean)
  if (parts.length === 1) {
    try {
      await dir.removeEntry(parts[0])
    } catch (err) {
      throw new Error(getErrorMessage(err, 'Не удалось удалить файл. Возможно, он открыт или нет прав.'))
    }
    return
  }
  let current: FileSystemDirectoryHandle = dir
  try {
    for (let i = 0; i < parts.length - 1; i++) {
      current = await current.getDirectoryHandle(parts[i])
    }
    await current.removeEntry(parts[parts.length - 1])
  } catch (err) {
    throw new Error(getErrorMessage(err, 'Ошибка доступа к каталогу или удаления файла. Проверьте путь и права.'))
  }
}

export function useFormFile(
  directoryHandle: FileSystemDirectoryHandle | null
): UseFormFileResult {
  const [e2eFormData, setE2eFormData] = useState<FormData>(e2eDemoFormData)
  const [selectedFile, setSelectedFile] = useState<SelectedFormFile | null>(null)
  const [formData, setFormDataState] = useState<FormData>(() => createEmptyFormData())
  const formDataRef = useRef<FormData>(createEmptyFormData())
  formDataRef.current = formData
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loadError, setLoadError] = useState<string | null>(null)

  const selectFileRequestRef = useRef(0)
  const selectFile = useCallback(async (file: SelectedFormFile) => {
    setLoadError(null)
    setLoading(true)
    const requestId = ++selectFileRequestRef.current
    try {
      const f = await file.handle.getFile()
      const content = await f.text()
      const data = await parseFormTs(content)
      if (requestId !== selectFileRequestRef.current) return
      setSelectedFile(file)
      setFormDataState(data)
      setHasUnsavedChanges(false)
    } catch (err) {
      if (requestId === selectFileRequestRef.current) {
        setLoadError(getErrorMessage(err, 'Ошибка чтения файла'))
      }
    } finally {
      if (requestId === selectFileRequestRef.current) {
        setLoading(false)
      }
    }
  }, [])

  const closeFile = useCallback(() => {
    if (hasUnsavedChanges) {
      if (!window.confirm('Есть несохранённые изменения. Закрыть без сохранения?')) return
    }
    setSelectedFile(null)
    setFormDataState(createEmptyFormData())
    setHasUnsavedChanges(false)
    setLoadError(null)
  }, [hasUnsavedChanges])

  const saveFile = useCallback(async (): Promise<string | null> => {
    if (!selectedFile || !directoryHandle) return null
    const dataToSave = formDataRef.current
    try {
      const permission = await directoryHandle.requestPermission({ mode: 'readwrite' })
      if (permission !== 'granted') {
        return 'Нет разрешения на запись в каталог'
      }
      const writable = await selectedFile.handle.createWritable()
      const content = formToTs(dataToSave)
      await writable.write(content)
      await writable.close()
      setHasUnsavedChanges(false)
      return null
    } catch (err) {
      return getErrorMessage(err, 'Ошибка сохранения')
    }
  }, [directoryHandle, selectedFile])

  const createNewForm = useCallback(async (): Promise<string | null> => {
    if (!directoryHandle) return 'Сначала выберите каталог'
    setLoadError(null)
    try {
      const permission = await directoryHandle.requestPermission({ mode: 'readwrite' })
      if (permission !== 'granted') {
        return 'Нет разрешения на запись в каталог'
      }
      const path = `form-${Date.now()}${FORM_EXT}`
      const fileHandle = await directoryHandle.getFileHandle(path, { create: true })
      const initialData = createEmptyFormData()
      const writable = await fileHandle.createWritable()
      await writable.write(formToTs(initialData))
      await writable.close()
      setSelectedFile({ path, handle: fileHandle })
      setFormDataState(initialData)
      setHasUnsavedChanges(false)
      return null
    } catch (err) {
      return getErrorMessage(err, 'Ошибка создания формы')
    }
  }, [directoryHandle])

  const deleteCurrentForm = useCallback(async (): Promise<string | null> => {
    if (!selectedFile || !directoryHandle) return 'Нет открытой формы'
    try {
      const permission = await directoryHandle.requestPermission({ mode: 'readwrite' })
      if (permission !== 'granted') {
        return 'Нет разрешения на запись в каталог'
      }
      await removeFileByPath(directoryHandle, selectedFile.path)
      setSelectedFile(null)
      setFormDataState(createEmptyFormData())
      setHasUnsavedChanges(false)
      setLoadError(null)
      return null
    } catch (err) {
      return getErrorMessage(err, 'Ошибка удаления формы')
    }
  }, [directoryHandle, selectedFile])

  const setFormData = useCallback(
    (action: React.SetStateAction<FormData>) => {
      setFormDataState((prev) => {
        const next = typeof action === 'function' ? action(prev) : action
        setHasUnsavedChanges(true)
        return next
      })
    },
    []
  )

  const setFormControls = useCallback(
    (action: React.SetStateAction<FormControl[]>) => {
      setFormDataState((prev) => {
        const nextElements = typeof action === 'function' ? action(prev.elements) : action
        setHasUnsavedChanges(true)
        return { ...prev, elements: nextElements }
      })
    },
    []
  )

  // Режим для e2e-тестов без File System API: подменяем данные на пустую форму.
  if (typeof window !== 'undefined' && window.__E2E_DEMO__) {
    return {
      selectedFile: e2eFakeFile,
      formData: e2eFormData,
      setFormData: (action) => {
        setE2eFormData((prev) => (typeof action === 'function' ? action(prev) : action))
      },
      formControls: e2eFormData.elements,
      setFormControls: (action) => {
        setE2eFormData((prev) => ({
          ...prev,
          elements: typeof action === 'function' ? action(prev.elements) : action,
        }))
      },
      hasUnsavedChanges: false,
      selectFile: async () => {},
      closeFile: () => {},
      saveFile: async () => null,
      createNewForm: async () => null,
      deleteCurrentForm: async () => null,
      loading: false,
      loadError: null,
    }
  }

  return {
    selectedFile,
    formData,
    setFormData,
    formControls: formData.elements,
    setFormControls,
    hasUnsavedChanges,
    selectFile,
    closeFile,
    saveFile,
    createNewForm,
    deleteCurrentForm,
    loading,
    loadError,
  }
}
