import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  collectControlsWithUseConfig,
  getInitialFormStateFromElements,
  resolveControlUseConfig,
  resolveLifecycleHandler,
  type FormControl,
  type FormSlice,
  type FormConfigHookLifecycleFn,
} from '../types/form-dsl'
import { loadTsModule } from '../utils/loadConfigHookModule'

type ControlHexaHookFn = (formSlice: FormSlice) => unknown

const FormEditorConfigHookContext = createContext<{
  hookById: Record<string, ControlHexaHookFn | null>
  loading: boolean
  formSlice: FormSlice
}>({
  hookById: {},
  loading: false,
  formSlice: { state: {}, config: { elements: [] } },
})

export function FormEditorConfigHookProvider({
  children,
  formKey,
  formDirectoryHandle,
  formHandlers,
  elements,
}: {
  children: React.ReactNode
  formKey: string
  formDirectoryHandle: FileSystemDirectoryHandle | null
  formHandlers:
    | Record<string, string | ((...args: unknown[]) => unknown)>
    | null
    | undefined
  elements: FormControl[]
}): React.ReactElement {
  const [hookById, setHookById] = useState<
    Record<string, ControlHexaHookFn | null>
  >({})
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
    let cancelled = false
    async function loadBindings() {
      const useConfigRows = collectControlsWithUseConfig(elements)
      const onFormInitRaw =
        formHandlers?.onFormInit ?? formHandlers?.onInit
      const needsAsync =
        useConfigRows.length > 0 || onFormInitRaw != null
      setRegistryLoading(needsAsync)
      const nextHookById: Record<string, ControlHexaHookFn | null> = {}
      for (const { id, useConfigRaw } of useConfigRows) {
        if (cancelled) return
        const fn = await resolveControlUseConfig(
          useConfigRaw,
          id,
          formDirectoryHandle,
          loadTsModule,
        )
        nextHookById[id] = fn
      }
      let onInitFn: FormConfigHookLifecycleFn | null = null
      if (onFormInitRaw != null) {
        onInitFn = await resolveLifecycleHandler(
          onFormInitRaw,
          'onFormInit',
          formDirectoryHandle,
          loadTsModule,
        )
      }
      if (cancelled) return
      setHookById(nextHookById)
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
  }, [formKey, formDirectoryHandle, formHandlers, mergeState, elements])

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
      hookById,
      loading: registryLoading,
      formSlice,
    }),
    [hookById, registryLoading, formSlice],
  )

  return (
    <FormEditorConfigHookContext.Provider value={value}>
      {children}
    </FormEditorConfigHookContext.Provider>
  )
}

export function useFormEditorConfigHook(): {
  hookById: Record<string, ControlHexaHookFn | null>
  loading: boolean
  formSlice: FormSlice
} {
  return useContext(FormEditorConfigHookContext)
}
