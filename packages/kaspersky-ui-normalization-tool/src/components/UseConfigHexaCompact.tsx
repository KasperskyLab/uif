import type { ControlHandlersMap } from '../types/form-dsl'
import { ModuleExportHandlerCompact } from './ModuleExportHandlerCompact'

export function UseConfigHexaCompact({
  useConfig,
  onUseConfigChange,
  directoryHandle,
}: {
  useConfig: ControlHandlersMap['useConfig'] | undefined
  onUseConfigChange: (fn: ControlHandlersMap['useConfig'] | undefined) => void
  directoryHandle?: FileSystemDirectoryHandle | null
}) {
  return (
    <ModuleExportHandlerCompact
      label="useConfig (Hexa)"
      handler={useConfig}
      onHandlerChange={onUseConfigChange}
      directoryHandle={directoryHandle}
      selectKeyPrefix="usecfg"
    />
  )
}
