import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  getInitialFormStateFromElements,
  splitFormConfigHookFactoryResult,
  type FormControl,
  type FormSlice,
} from '../types/form-dsl'
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
  const [hookStatePatch, setHookStatePatch] = useState<
    Record<string, unknown>
  >({})

  const mergeState = useCallback((partial: Record<string, unknown>) => {
    setHookStatePatch((prev) => ({ ...prev, ...partial }))
  }, [])

  useEffect(() => {
    setHookStatePatch({})
  }, [formKey])

  const baseFormState = useMemo(
    () => getInitialFormStateFromElements(elements),
    [elements],
  )

  const mergedFormState = useMemo(
    () => ({ ...baseFormState, ...hookStatePatch }),
    [baseFormState, hookStatePatch],
  )

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
      if (!factory) {
        setRegistry(null)
        setRegistryLoading(false)
        return
      }
      const parsed = splitFormConfigHookFactoryResult(factory)
      if (!parsed) {
        setRegistry(null)
        setRegistryLoading(false)
        return
      }
      setRegistry(parsed.registry)
      setRegistryLoading(false)
      if (parsed.lifecycle.onInit) {
        const initial = getInitialFormStateFromElements(elements)
        void Promise.resolve(
          parsed.lifecycle.onInit({
            state: initial,
            config: { elements },
            mergeState,
          }),
        )
      }
    })
    return () => {
      cancelled = true
    }
  }, [formKey, formConfigHook, formDirectoryHandle, mergeState])

  const formSlice = useMemo<FormSlice>(
    () => ({
      state: mergedFormState,
      config: { elements },
      mergeState,
    }),
    [mergedFormState, elements, mergeState],
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
