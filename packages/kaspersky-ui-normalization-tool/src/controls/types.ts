/**
 * Типы для регистра контролов. Каждый тип контрола описывается дескриптором:
 * палитра (label, Icon), создание по умолчанию, превью на холсте, редактор свойств.
 */
import type React from 'react'
import type { FormControl, FormControlType } from '../types/form-dsl'

/** Контекст холста: выбор, удаление, обновление дерева. Для grid/table — рендер вложенного контрола и создание нового. */
export interface CanvasContext {
  selectedId: string | null
  onSelect: (id: string | null) => void
  onRemove: (id: string) => void
  rootSetControls: React.Dispatch<React.SetStateAction<FormControl[]>>
  /** Обновление списка дочерних контролов (для ячеек grid/table при перетаскивании) */
  onControlsChange?: React.Dispatch<React.SetStateAction<(FormControl | null)[]>>
  /** Рендер блока контрола (для ячеек grid/table) */
  renderControlBlock: (control: FormControl) => React.ReactNode
  createControl: (type: FormControlType, options?: { componentId?: string }) => FormControl
  controlTypes: readonly FormControlType[]
  dataTypeKey: string
  dataIdKey: string
  setGridChildrenInTree: (tree: (FormControl | null)[], gridId: string, children: (FormControl | null)[]) => (FormControl | null)[]
  setRowChildrenInTree: (tree: (FormControl | null)[], rowId: string, children: FormControl[]) => (FormControl | null)[]
  setTableChildrenInTree: (tree: (FormControl | null)[], tableId: string, children: (FormControl | null)[]) => (FormControl | null)[]
}

/** Дескриптор одного типа контрола — всё в одном месте для атомарного добавления новых типов. */
export interface ControlDescriptor<C extends FormControl = FormControl> {
  type: C['type']
  label: string
  Icon: React.ComponentType
  /** Начальное состояние (id подставит registry.createControl) */
  createDefault: () => Omit<C, 'id'> & { id?: string }
  /** Превью на холсте (внутри обёртки с ручкой и кнопкой удаления) */
  CanvasPreview: React.FC<{ control: C; context: CanvasContext }>
  /**
   * Редактор свойств в панели справа. selectCloseKey + onSelectClose — чтобы Select
   * закрывался после выбора. Если не задан, карточка типа в панели не показывается.
   */
  PropsEditor?: React.FC<{
    control: C
    onUpdate: (patch: Partial<C>) => void
    selectCloseKey?: number
    onSelectClose?: () => void
    /** Контекст панели: каталог формы для file picker обработчика кнопки */
    panelContext?: { formDirectoryHandle?: FileSystemDirectoryHandle | null }
  }>
}

export type { FormControl, FormControlType }
