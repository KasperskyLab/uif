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
  resolveConfigHookFactory,
  resolveLifecycleHandler,
  resolveTsModulePathFromValue,
  splitFormConfigHookFactoryResult,
  type FormControl,
  type FormSlice,
  type FormConfigHookLifecycleFn,
} from '../types/form-dsl'
import { loadConfigHookDefaultExport } from '../utils/loadConfigHookModule'
import { loadTsModule } from '../utils/loadConfigHookModule'

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
  formHandlers,
  elements,
}: {
  children: React.ReactNode
  formKey: string
  formDirectoryHandle: FileSystemDirectoryHandle | null
  formConfigHook: string | (() => unknown) | null | undefined
  formHandlers:
    | Record<string, string | ((...args: unknown[]) => unknown)>
    | null
    | undefined
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
    if (!formDirectoryHandle) {
      setRegistry(null)
      setRegistryLoading(false)
      return
    }
    let cancelled = false
    async function loadBindings() {
      const needsAsync =
        (formConfigHook != null && formConfigHook !== '') ||
        (formHandlers != null && Object.keys(formHandlers).length > 0)
      setRegistryLoading(Boolean(needsAsync))
      let onInitFn: FormConfigHookLifecycleFn | null = null

      const factory = await resolveConfigHookFactory(
        formConfigHook,
        formDirectoryHandle,
        loadConfigHookDefaultExport,
      )
      if (cancelled) return
      if (factory) {
        const parsed = splitFormConfigHookFactoryResult(factory)
        if (parsed) {
          setRegistry(parsed.registry)
          if (parsed.lifecycle.onInit) onInitFn = parsed.lifecycle.onInit
        } else {
          setRegistry(null)
        }
      } else {
        setRegistry(null)
      }

      const fromHandlers = await resolveLifecycleHandler(
        formHandlers?.onInit,
        'onInit',
        formDirectoryHandle,
        loadTsModule,
      )
      if (fromHandlers) onInitFn = fromHandlers

      setRegistryLoading(false)
      if (onInitFn) {
        const initial = getInitialFormStateFromElements(elements)
        void Promise.resolve(
          onInitFn({
            state: initial,
            config: { elements },
            mergeState,
          }),
        )
      }
    }
    void loadBindings()
    return () => {
      cancelled = true
    }
  }, [formKey, formConfigHook, formDirectoryHandle, formHandlers, mergeState, elements])

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
      path: resolveTsModulePathFromValue(formConfigHook),
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
