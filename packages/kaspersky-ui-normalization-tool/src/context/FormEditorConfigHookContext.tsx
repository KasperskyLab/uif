import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import type { FormControl, FormSlice } from '../types/form-dsl'
import { loadConfigHookDefaultExport } from '../utils/loadConfigHookModule'

type ConfigHookRegistry = Record<string, (formSlice: FormSlice) => unknown>

const FormEditorConfigHookContext = createContext<{
  registry: ConfigHookRegistry | null
  loading: boolean
  path: string | null
  formSlice: FormSlice
}>({
  registry: null,
  loading: false,
  path: null,
  formSlice: { state: {}, config: { elements: [] } },
})

function buildConfigHookRegistry(
  factory: unknown,
): ConfigHookRegistry | null {
  if (typeof factory !== 'function') return null
  try {
    const out = (factory as () => unknown)()
    if (!out || typeof out !== 'object' || Array.isArray(out)) return null
    return out as ConfigHookRegistry
  } catch {
    return null
  }
}

export function FormEditorConfigHookProvider({
  children,
  formKey,
  formDirectoryHandle,
  formConfigHook,
  elements,
}: {
  children: React.ReactNode
  formKey: string
  formDirectoryHandle: FileSystemDirectoryHandle | null
  formConfigHook: string | null | undefined
  elements: FormControl[]
}): React.ReactElement {
  const [registry, setRegistry] = useState<ConfigHookRegistry | null>(null)
  const [registryLoading, setRegistryLoading] = useState(false)

  useEffect(() => {
    if (!formConfigHook || !formDirectoryHandle) {
      setRegistry(null)
      setRegistryLoading(false)
      return
    }
    let cancelled = false
    setRegistryLoading(true)
    loadConfigHookDefaultExport(
      formDirectoryHandle,
      formConfigHook,
    ).then((factory) => {
      if (cancelled) return
      setRegistry(buildConfigHookRegistry(factory))
      setRegistryLoading(false)
    })
    return () => {
      cancelled = true
    }
  }, [formKey, formConfigHook, formDirectoryHandle])

  const formSlice = useMemo<FormSlice>(
    () => ({ state: {}, config: { elements } }),
    [elements],
  )

  const value = useMemo(
    () => ({
      registry,
      loading: registryLoading,
      path:
        formConfigHook && formConfigHook.length > 0 ? formConfigHook : null,
      formSlice,
    }),
    [registry, registryLoading, formConfigHook, formSlice],
  )

  return (
    <FormEditorConfigHookContext.Provider value={value}>
      {children}
    </FormEditorConfigHookContext.Provider>
  )
}

export function useFormEditorConfigHook(): {
  registry: ConfigHookRegistry | null
  loading: boolean
  path: string | null
  formSlice: FormSlice
} {
  return useContext(FormEditorConfigHookContext)
}
