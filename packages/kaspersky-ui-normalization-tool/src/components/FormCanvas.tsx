import React, { useCallback, useMemo, useState, useRef, useEffect } from 'react'
import { Button, Space, Text, Grid, GridItem, Tabs, Table } from '@kaspersky/hexa-ui'
import { Delete, ArrowsVertical } from '@kaspersky/hexa-ui-icons/16'
import {
  formSliceWithDataBind,
  controlModelBindPath,
  type FormControl,
  type FormControlBase,
  type FormControlType,
  type FormSlice,
  type GridControl,
  type TableControl,
  type TabsControl,
  type RowControl,
} from '../types/form-dsl'
import { setGridChildrenInTree, setRowChildrenInTree, setTableChildrenInTree, setTabsChildrenInTree } from '../types/form-dsl'
import type { GridProps, ITableProps } from '@kaspersky/hexa-ui'
import {
  defaultGridLayoutRows,
  DEFAULT_GRID_LAYOUT_PROPERTY,
} from '../utils/defaultGridHexaProps'
import { useFormEditorConfigHook } from '../context/FormEditorConfigHookContext'
import {
  getTableTemplateRowChildren,
  padOrTruncateGridChildren,
} from '../utils/gridHookChildren'
import { buildTableMatrixColumnsAndDataSource } from '../utils/tableControlHexa'
import { createControl, getDescriptor, ALL_CONTROL_TYPES } from '../controls/registry'
import type { CanvasContext } from '../controls/types'
import { CanvasPreviewErrorBoundary } from './CanvasPreviewErrorBoundary'
import { DATA_ID_KEY, DATA_TYPE_KEY, getDropTypeAndOptions } from '../utils/dnd'

const canvasStyle: React.CSSProperties = {
  padding: 24,
  border: `2px dashed var(--tagsoutlined--neutral-border, #ccc)`,
  borderRadius: 12,
  background: 'var(--surface--neutral, #fafafa)',
  flex: 1,
  minHeight: 0, /* flex-элемент может сжиматься по вертикали */
  minWidth: 0, /* иначе холст растягивается по контенту и не появляется горизонтальный скролл */
  overflow: 'auto',
}

const controlWrapStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  margin: 4,
  padding: 8,
  borderRadius: 8,
  border: '2px solid transparent',
  borderColor: 'transparent',
  cursor: 'grab',
  outline: 'none',
}

const controlWrapSelectedStyle: React.CSSProperties = {
  ...controlWrapStyle,
  borderColor: 'var(--primary--main, #00a88e)',
  background: 'rgba(0,168,142,0.08)',
}

const dragHandleStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 28,
  minWidth: 28,
  height: 28,
  padding: 0,
  borderRadius: 6,
  flexShrink: 0,
  cursor: 'grab',
  color: '#8c8c8c',
}

const removeBtnStyle: React.CSSProperties = {
  width: 28,
  minWidth: 28,
  height: 28,
  padding: 0,
  borderRadius: 6,
  flexShrink: 0,
}

const dropZoneStyle: React.CSSProperties = {
  minHeight: 48,
  width: '100%',
  margin: 2,
  borderRadius: 6,
  background: 'transparent',
  border: '1px dashed #d9d9d9',
  transition: 'background 0.15s, border-color 0.15s',
  flexShrink: 0,
}

/** Та же геометрия, что и dropZoneStyle; только рамка/фон скрыты (без opacity, чтобы не скрывать контрол внутри) */
const dropZoneHiddenStyle: React.CSSProperties = {
  ...dropZoneStyle,
  borderColor: 'transparent',
  background: 'transparent',
}

/** Дроп-зона без отступа: когда драг не над табом, зоны не занимают место */
const dropZoneCollapsedStyle: React.CSSProperties = {
  minHeight: 0,
  margin: 0,
  padding: 0,
  width: '100%',
  border: 'none',
  background: 'transparent',
  flexShrink: 0,
}

const dropZoneActiveStyle: React.CSSProperties = {
  ...dropZoneStyle,
  background: 'rgba(0,168,142,0.2)',
  borderColor: 'var(--primary--main, #00a88e)',
}

const gridWrapStyle: React.CSSProperties = {
  minWidth: 200,
  width: '100%',
  minHeight: 80,
  padding: 8,
  borderRadius: 8,
  border: '1px solid #e8e8e8',
  background: 'rgba(0,0,0,0.02)',
  boxSizing: 'border-box',
}

const gridCellStyle: React.CSSProperties = {
  minHeight: 48,
  borderRadius: 6,
  border: '1px dashed #e0e0e0',
  background: 'rgba(255,255,255,0.6)',
  boxSizing: 'border-box',
}

const gridCellDropStyle: React.CSSProperties = {
  minHeight: '100%',
  width: '100%',
  minWidth: 0,
  boxSizing: 'border-box',
  borderRadius: 6,
}

const tableWrapStyle: React.CSSProperties = {
  ...gridWrapStyle,
  border: '1px solid #d0d0d0',
  background: 'rgba(255,255,255,0.8)',
}

const tableCellStyle: React.CSSProperties = {
  ...gridCellStyle,
  border: '1px solid #e0e0e0',
  minHeight: 40,
}

const tabsWrapStyle: React.CSSProperties = {
  minWidth: 200,
  width: '100%',
  minHeight: 80,
  padding: 8,
  borderRadius: 8,
  border: '1px solid #e8e8e8',
  background: 'rgba(255,255,255,0.6)',
  boxSizing: 'border-box',
}


export interface FormCanvasProps {
  controls: FormControl[]
  onControlsChange: React.Dispatch<React.SetStateAction<FormControl[]>>
  onDropControl?: (type: string) => void
  selectedId: string | null
  onSelect: (id: string | null) => void
}

type GridConfigHookFn = (formSlice: FormSlice) => Partial<GridProps> | null

function GridControlBlock({
  control,
  selectedId,
  onSelect,
  rootSetControls,
}: {
  control: GridControl
  selectedId: string | null
  onSelect: (id: string | null) => void
  onRemove: (id: string) => void
  rootSetControls: React.Dispatch<React.SetStateAction<FormControl[]>>
}) {
  const g = control
  const { hookById, loading, formSlice } = useFormEditorConfigHook()
  const hookFn = (hookById[g.id] ?? null) as GridConfigHookFn | null

  const setGridChildren = useCallback(
    (next: React.SetStateAction<(FormControl | null)[]>) => {
      rootSetControls((prev) =>
        setGridChildrenInTree(
          prev,
          g.id,
          typeof next === 'function' ? next(g.children) : next
        ) as FormControl[]
      )
    },
    [g.id, g.children, rootSetControls]
  )

  if (!hookFn) {
    if (loading) {
      return (
        <div style={gridWrapStyle}>
          <Text type="BTR3" style={{ color: '#8c8c8c' }}>…</Text>
        </div>
      )
    }
    return (
      <div style={gridWrapStyle}>
        <Text type="BTR3" style={{ color: '#8c8c8c' }}>
          {`Сетка «${g.id}»: нет хука useConfig (проверьте handlers и каталог формы).`}
        </Text>
      </div>
    )
  }

  const partial = hookFn(
    formSliceWithDataBind(formSlice, controlModelBindPath(g)),
  )
  if (partial === null) return null

  const { children: _hookCh, ...hookRest } = partial
  const effectiveCols = hookRest.cols
  if (
    effectiveCols == null ||
    typeof effectiveCols !== 'number' ||
    effectiveCols < 1
  ) {
    return (
      <div style={gridWrapStyle}>
        <Text type="BTR3" style={{ color: '#8c8c8c' }}>
          Сетка «{g.id}»: хук должен вернуть cols (целое ≥ 1)
        </Text>
      </div>
    )
  }

  const hasHookLayout = 'layout' in hookRest && hookRest.layout != null
  const effectiveChildren = padOrTruncateGridChildren(
    g.children,
    hasHookLayout
      ? g.children.length
      : Math.ceil(g.children.length / effectiveCols) * effectiveCols,
  )
  const effectiveRows = Math.ceil(effectiveChildren.length / effectiveCols)

  return (
    <div style={gridWrapStyle}>
      <Grid
        layout={defaultGridLayoutRows(effectiveRows)}
        layoutProperty={DEFAULT_GRID_LAYOUT_PROPERTY}
        {...hookRest}
        cols={effectiveCols}
      >
        {effectiveChildren.map((_slot, i) => {
          const handleCellDrop = (e: React.DragEvent) => {
            e.preventDefault()
            e.stopPropagation()
            const id = e.dataTransfer.getData(DATA_ID_KEY)
            const dropInfo = getDropTypeAndOptions(e)
            if (id) {
              const idx = g.children.findIndex((ch) => ch && ch.id === id)
              if (idx === -1) return
              if (idx === i) return
              const movingControl = g.children[idx]
              setGridChildren((prev) => {
                const need = Math.max(prev.length, i + 1, idx + 1)
                const next = padOrTruncateGridChildren(prev, need)
                const wasInTarget = next[i]
                next[idx] = wasInTarget
                next[i] = movingControl
                return next
              })
            } else if (dropInfo) {
              setGridChildren((prev) => {
                const need = Math.max(prev.length, i + 1)
                const next = padOrTruncateGridChildren(prev, need)
                next[i] = createControl(dropInfo.type, dropInfo.options)
                return next
              })
            }
          }
          const slotControl = effectiveChildren[i]
          return (
            <GridItem key={`${g.id}-cell-${i}`} style={gridCellStyle}>
              <div
                style={gridCellDropStyle}
                onDragOver={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  e.dataTransfer.dropEffect =
                    e.dataTransfer.types.includes(DATA_ID_KEY) ? 'move' : 'copy'
                }}
                onDrop={handleCellDrop}
              >
                {slotControl ? (
                  <ControlBlock
                    control={slotControl}
                    selectedId={selectedId}
                    onSelect={onSelect}
                    onRemove={(_id) =>
                      setGridChildren((prev) => {
                        const need = Math.max(prev.length, i + 1)
                        const next = padOrTruncateGridChildren(prev, need)
                        next[i] = null
                        return next
                      })
                    }
                    onControlsChange={setGridChildren}
                    rootSetControls={rootSetControls}
                  />
                ) : null}
              </div>
            </GridItem>
          )
        })}
      </Grid>
    </div>
  )
}

const rowWrapStyle: React.CSSProperties = {
  minWidth: 100,
  width: '100%',
  minHeight: 48,
  padding: 8,
  borderRadius: 8,
  background: 'var(--surface--neutral, #f7f7f7)',
}

const rowSlotStyle: React.CSSProperties = {
  minHeight: 40,
  minWidth: 48,
  borderRadius: 6,
  border: '1px dashed #e0e0e0',
  background: 'rgba(255,255,255,0.6)',
  boxSizing: 'border-box',
  flex: '1 1 0',
}

function RowControlBlock({
  control,
  selectedId,
  onSelect,
  rootSetControls,
}: {
  control: RowControl
  selectedId: string | null
  onSelect: (id: string | null) => void
  onRemove: (id: string) => void
  rootSetControls: React.Dispatch<React.SetStateAction<FormControl[]>>
}) {
  const r = control

  const setRowChildren = useCallback(
    (next: React.SetStateAction<FormControl[]>) => {
      rootSetControls((prev) =>
        setRowChildrenInTree(
          prev,
          r.id,
          typeof next === 'function' ? next(r.children) : next
        ) as FormControl[]
      )
    },
    [r.id, r.children, rootSetControls]
  )

  const handleSlotDrop = useCallback((e: React.DragEvent, index: number) => {
    e.preventDefault()
    e.stopPropagation()
    const existingId = e.dataTransfer.getData(DATA_ID_KEY)
    const dropInfo = getDropTypeAndOptions(e)
    if (existingId) {
      const fromIdx = r.children.findIndex((ch) => ch.id === existingId)
      if (fromIdx === -1 || fromIdx === index) return
      setRowChildren((prev) => {
        const next = [...prev]
        const [moved] = next.splice(fromIdx, 1)
        next.splice(index > fromIdx ? index - 1 : index, 0, moved)
        return next
      })
    } else if (dropInfo) {
      setRowChildren((prev) => {
        const next = [...prev]
        next.splice(index, 0, createControl(dropInfo.type, dropInfo.options))
        return next
      })
    }
  }, [r.children, setRowChildren])

  const handleAppendDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const existingId = e.dataTransfer.getData(DATA_ID_KEY)
    const dropInfo = getDropTypeAndOptions(e)
    if (existingId) {
      const fromIdx = r.children.findIndex((ch) => ch.id === existingId)
      if (fromIdx === -1) return
      setRowChildren((prev) => {
        const next = [...prev]
        const [moved] = next.splice(fromIdx, 1)
        next.push(moved)
        return next
      })
    } else if (dropInfo) {
      setRowChildren((prev) => [...prev, createControl(dropInfo.type, dropInfo.options)])
    }
  }, [r.children, setRowChildren])

  const alignItems = r.align === 'start' ? 'flex-start' : r.align === 'end' ? 'flex-end' : 'center'

  return (
    <div style={rowWrapStyle}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: r.gap ?? 8, alignItems, flexWrap: 'nowrap' }}>
        {r.children.map((child, i) => (
          <div
            key={child.id}
            style={rowSlotStyle}
            onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); e.dataTransfer.dropEffect = e.dataTransfer.types.includes(DATA_ID_KEY) ? 'move' : 'copy' }}
            onDrop={(e) => handleSlotDrop(e, i)}
          >
            <ControlBlock
              control={child}
              selectedId={selectedId}
              onSelect={onSelect}
              onRemove={(_id) => setRowChildren((prev) => prev.filter((c) => c.id !== _id))}
              onControlsChange={(next) => {
                if (typeof next === 'function') {
                  rootSetControls((prev) => setRowChildrenInTree(prev, r.id, next(r.children).filter((c): c is FormControl => c != null)) as FormControl[])
                }
              }}
              rootSetControls={rootSetControls}
            />
          </div>
        ))}
        <div
          style={{ ...rowSlotStyle, flex: '0 0 48px', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.5 }}
          onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); e.dataTransfer.dropEffect = 'copy' }}
          onDrop={handleAppendDrop}
        >
          +
        </div>
      </div>
    </div>
  )
}

type TableConfigHookFn = (formSlice: FormSlice) => Partial<ITableProps> | null

function TableMatrixEditor({
  t,
  rows,
  cols,
  hookColumns,
  hookDataSource,
  templateChildren,
  tableExtras,
  selectedId,
  onSelect,
  setTableChildren,
  rootSetControls,
}: {
  t: TableControl
  rows: number
  cols: number
  hookColumns: NonNullable<Partial<ITableProps>['columns']>
  hookDataSource: NonNullable<Partial<ITableProps>['dataSource']>
  /** Одна строка шаблона: длина `cols`, повторяется для каждого ряда dataSource. */
  templateChildren: (FormControl | null)[]
  tableExtras: Partial<ITableProps>
  selectedId: string | null
  onSelect: (id: string | null) => void
  setTableChildren: (
    next: React.SetStateAction<(FormControl | null)[]>
  ) => void
  rootSetControls: React.Dispatch<React.SetStateAction<FormControl[]>>
}) {
  const colAlign = tableExtras.columnVerticalAlign ?? 'inherit'
  const isCompact = tableExtras.rowMode === 'compact'
  const cellStyle: React.CSSProperties = {
    ...tableCellStyle,
    verticalAlign: colAlign !== 'inherit' ? colAlign : undefined,
    padding: isCompact ? 4 : 8,
  }

  const { dataSource, columns } = useMemo(
    () =>
      buildTableMatrixColumnsAndDataSource(
        t,
        ({ rowIndex, colIndex }) => {
          const handleCellDrop = (e: React.DragEvent) => {
            e.preventDefault()
            e.stopPropagation()
            const id = e.dataTransfer.getData(DATA_ID_KEY)
            const dropInfo = getDropTypeAndOptions(e)
            if (id) {
              const idx = templateChildren.findIndex(
                (ch) => ch && ch.id === id,
              )
              if (idx === -1) return
              if (idx === colIndex) return
              const movingControl = templateChildren[idx]
              setTableChildren((prev) => {
                const next = padOrTruncateGridChildren([...prev], cols)
                const wasInTarget = next[colIndex]
                next[idx] = wasInTarget
                next[colIndex] = movingControl
                return next
              })
            } else if (dropInfo) {
              setTableChildren((prev) => {
                const next = padOrTruncateGridChildren([...prev], cols)
                next[colIndex] = createControl(dropInfo.type, dropInfo.options)
                return next
              })
            }
          }
          const slotControl = templateChildren[colIndex]
          return (
            <div
              key={`${t.id}-r${rowIndex}-c${colIndex}`}
              style={{
                ...gridCellDropStyle,
                ...cellStyle,
              }}
              onDragOver={(e) => {
                e.preventDefault()
                e.stopPropagation()
                e.dataTransfer.dropEffect = e.dataTransfer.types.includes(
                  DATA_ID_KEY
                )
                  ? 'move'
                  : 'copy'
              }}
              onDrop={handleCellDrop}
            >
              {slotControl ? (
                <ControlBlock
                  control={slotControl}
                  selectedId={selectedId}
                  onSelect={onSelect}
                  onRemove={(_id) =>
                    setTableChildren((prev) => {
                      const next = padOrTruncateGridChildren([...prev], cols)
                      next[colIndex] = null
                      return next
                    })
                  }
                  onControlsChange={setTableChildren}
                  rootSetControls={rootSetControls}
                />
              ) : null}
            </div>
          )
        },
        { rows, cols },
        { columns: hookColumns, dataSource: hookDataSource },
      ),
    [
      t,
      rows,
      cols,
      hookColumns,
      hookDataSource,
      templateChildren,
      cellStyle,
      selectedId,
      onSelect,
      setTableChildren,
      rootSetControls,
    ]
  )

  return (
    <Table
      pagination={false}
      dataSource={dataSource}
      columns={columns}
      {...tableExtras}
    />
  )
}

function TableControlBlock({
  control,
  selectedId,
  onSelect,
  rootSetControls,
}: {
  control: TableControl
  selectedId: string | null
  onSelect: (id: string | null) => void
  onRemove: (id: string) => void
  rootSetControls: React.Dispatch<React.SetStateAction<FormControl[]>>
}) {
  const t = control
  const { hookById, loading, formSlice } = useFormEditorConfigHook()
  const hookFn = (hookById[t.id] ?? null) as TableConfigHookFn | null

  const setTableChildren = useCallback(
    (next: React.SetStateAction<(FormControl | null)[]>) => {
      rootSetControls((prev) =>
        setTableChildrenInTree(
          prev,
          t.id,
          typeof next === 'function' ? next(t.children) : next
        ) as FormControl[]
      )
    },
    [t.id, t.children, rootSetControls]
  )

  if (!hookFn) {
    if (loading) {
      return (
        <div style={tableWrapStyle}>
          <Text type="BTR3" style={{ color: '#8c8c8c' }}>…</Text>
        </div>
      )
    }
    return (
      <div style={tableWrapStyle}>
        <Text type="BTR3" style={{ color: '#8c8c8c' }}>
          {`Таблица «${t.id}»: нет хука useConfig (проверьте handlers и каталог формы).`}
        </Text>
      </div>
    )
  }

  const partial = hookFn(
    formSliceWithDataBind(formSlice, controlModelBindPath(t)),
  ) as Partial<ITableProps> | null
  if (partial === null) return null

  const {
    columns: hookColumns,
    dataSource: hookDataSource,
    dataSourceFunction: hookDataSourceFunction,
    children: _tableChildren,
    ...tableExtras
  } = partial

  const columnCount = Array.isArray(hookColumns) ? hookColumns.length : 0
  const rowCount = Array.isArray(hookDataSource) ? hookDataSource.length : 0

  if (hookDataSourceFunction != null) {
    return (
      <div style={tableWrapStyle}>
        <Text type="BTR3" style={{ color: '#8c8c8c' }}>
          Таблица «{t.id}»: для DSL-матрицы укажите массив dataSource, не
          dataSourceFunction
        </Text>
      </div>
    )
  }

  if (columnCount < 1 || rowCount < 1) {
    return (
      <div style={tableWrapStyle}>
        <Text type="BTR3" style={{ color: '#8c8c8c' }}>
          Таблица «{t.id}»: хук должен вернуть columns и dataSource — массивы длины ≥ 1
        </Text>
      </div>
    )
  }

  const templateChildren = getTableTemplateRowChildren(
    t.children,
    columnCount,
    rowCount,
  )

  return (
    <div style={tableWrapStyle}>
      <TableMatrixEditor
        t={t}
        rows={rowCount}
        cols={columnCount}
        hookColumns={hookColumns}
        hookDataSource={hookDataSource}
        templateChildren={templateChildren}
        tableExtras={tableExtras}
        selectedId={selectedId}
        onSelect={onSelect}
        setTableChildren={setTableChildren}
        rootSetControls={rootSetControls}
      />
    </div>
  )
}

function TabsControlBlock({
  control,
  selectedId,
  onSelect,
  rootSetControls,
}: {
  control: TabsControl
  selectedId: string | null
  onSelect: (id: string | null) => void
  onRemove: (id: string) => void
  rootSetControls: React.Dispatch<React.SetStateAction<FormControl[]>>
}) {
  const t = control
  const [activeKey, setActiveKey] = useState(() => t.activeKey ?? t.items[0]?.key ?? '')
  const [tabDropTarget, setTabDropTarget] = useState<{ tabIndex: number; dropIndex: number } | null>(null)
  const tabDropTargetRef = useRef<{ tabIndex: number; dropIndex: number } | null>(null)
  const compactTabChildren = useCallback(
    (list: (FormControl | null)[]) => list.filter((ch): ch is FormControl => ch != null),
    []
  )
  useEffect(() => {
    setActiveKey(t.activeKey ?? t.items[0]?.key ?? '')
  }, [t.id, t.activeKey, t.items[0]?.key])
  const setTabChildrenAt = useCallback(
    (tabIndex: number, next: React.SetStateAction<(FormControl | null)[]>) => {
      rootSetControls((prev) =>
        setTabsChildrenInTree(
          prev,
          t.id,
          tabIndex,
          compactTabChildren(
            typeof next === 'function' ? next(t.items[tabIndex]?.children ?? []) : next
          )
        ) as FormControl[]
      )
    },
    [t.id, t.items, rootSetControls, compactTabChildren]
  )

  const handleTabZoneDrop = useCallback(
    (tabIndex: number, dropIndex: number, e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setTabDropTarget(null)
      tabDropTargetRef.current = null
      const id = e.dataTransfer.getData(DATA_ID_KEY)
      const dropInfo = getDropTypeAndOptions(e)
      const item = t.items[tabIndex]
      const itemChildren = compactTabChildren(item.children ?? [])
      if (id) {
        const sameTabIdx = itemChildren.findIndex((ch) => ch.id === id)
        if (sameTabIdx !== -1) {
          const movingControl = itemChildren[sameTabIdx]
          if (!movingControl) return
          if (sameTabIdx === dropIndex || sameTabIdx + 1 === dropIndex) return
          setTabChildrenAt(tabIndex, (prev) => {
            const filtered = compactTabChildren(prev).filter((_, j) => j !== sameTabIdx)
            const insertAt = dropIndex > sameTabIdx ? dropIndex - 1 : dropIndex
            return [...filtered.slice(0, insertAt), movingControl, ...filtered.slice(insertAt)]
          })
          return
        }
        const fromWhich = t.items.findIndex((it) => compactTabChildren(it.children ?? []).some((ch) => ch.id === id))
        if (fromWhich === -1) return
        const fromItem = t.items[fromWhich]
        const fromChildren = compactTabChildren(fromItem.children ?? [])
        const fromIdx = fromChildren.findIndex((ch) => ch.id === id)
        const movingControl = fromChildren[fromIdx]
        if (!movingControl) return
        rootSetControls((prev) => {
          const afterRemove = setTabsChildrenInTree(
            prev,
            t.id,
            fromWhich,
            fromChildren.filter((_, j) => j !== fromIdx)
          )
          const toChildren = compactTabChildren(t.items[tabIndex].children ?? [])
          toChildren.splice(dropIndex, 0, movingControl)
          return setTabsChildrenInTree(afterRemove, t.id, tabIndex, toChildren) as FormControl[]
        })
      } else if (dropInfo) {
        setTabChildrenAt(tabIndex, (prev) => {
          const next = compactTabChildren(prev)
          next.splice(dropIndex, 0, createControl(dropInfo.type, dropInfo.options))
          return next
        })
      }
    },
    [t.id, t.items, setTabChildrenAt, rootSetControls, compactTabChildren]
  )

  return (
    <div className="canvas-tabs-wrapper" style={tabsWrapStyle}>
      <Tabs
        activeKey={activeKey}
        onChange={(key) => setActiveKey(key)}
      >
        {t.items.map((item, tabIndex) => {
          const children = compactTabChildren(item.children ?? [])
          const isDropActive = tabDropTarget != null && tabDropTarget.tabIndex === tabIndex
          const showDropZones = isDropActive
          return (
            <Tabs.TabPane key={item.key} tab={item.label}>
              <div
                style={
                  showDropZones
                    ? { minHeight: 48, padding: 8, borderRadius: 6, border: '1px dashed #d9d9d9', background: 'rgba(0,0,0,0.02)' }
                    : { minHeight: 0, padding: 8, borderRadius: 6, border: '1px solid transparent', background: 'transparent' }
                }
                onDragOver={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  e.dataTransfer.dropEffect = e.dataTransfer.types.includes(DATA_ID_KEY) ? 'move' : 'copy'
                  if (!tabDropTargetRef.current || tabDropTargetRef.current.tabIndex !== tabIndex) {
                    const next = { tabIndex, dropIndex: children.length }
                    tabDropTargetRef.current = next
                    setTabDropTarget(next)
                  }
                }}
                onDragLeave={(e) => {
                  const related = e.relatedTarget
                  if (related instanceof Node && e.currentTarget.contains(related)) return
                  setTabDropTarget(null)
                  tabDropTargetRef.current = null
                }}
              >
                <Space size={4} direction="vertical" align="flex-start" style={{ width: '100%' }}>
                  {children.map((slotControl, slotIndex) => (
                    <div
                      key={slotControl ? slotControl.id : `slot-${slotIndex}`}
                      data-drop-index={slotIndex}
                      style={
                        !showDropZones
                          ? dropZoneCollapsedStyle
                          : tabDropTarget?.tabIndex === tabIndex && tabDropTarget?.dropIndex === slotIndex
                            ? dropZoneActiveStyle
                            : dropZoneStyle
                      }
                      onDragEnter={(e) => {
                        e.stopPropagation()
                        const next = { tabIndex, dropIndex: slotIndex }
                        if (tabDropTargetRef.current?.tabIndex !== next.tabIndex || tabDropTargetRef.current?.dropIndex !== next.dropIndex) {
                          tabDropTargetRef.current = next
                          setTabDropTarget(next)
                        }
                      }}
                      onDragOver={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        e.dataTransfer.dropEffect = e.dataTransfer.types.includes(DATA_ID_KEY) ? 'move' : 'copy'
                        const next = { tabIndex, dropIndex: slotIndex }
                        if (tabDropTargetRef.current?.tabIndex !== next.tabIndex || tabDropTargetRef.current?.dropIndex !== next.dropIndex) {
                          tabDropTargetRef.current = next
                          setTabDropTarget(next)
                        }
                      }}
                      onDrop={(e) => handleTabZoneDrop(tabIndex, slotIndex, e)}
                    >
                      {slotControl ? (
                        <ControlBlock
                          control={slotControl}
                          selectedId={selectedId}
                          onSelect={onSelect}
                          onRemove={(_id) =>
                            setTabChildrenAt(tabIndex, (prev) => {
                              return compactTabChildren(prev).filter((_, j) => j !== slotIndex)
                            })
                          }
                          onControlsChange={(up) =>
                            setTabChildrenAt(tabIndex, (tabChildren) => {
                              const slot = tabChildren[slotIndex]
                              if (slot && (slot.type === 'grid' || slot.type === 'table') && typeof up === 'function') {
                                const nextInner = up((slot as GridControl).children)
                                return tabChildren.map((c, j) =>
                                  j === slotIndex ? ({ ...c, children: nextInner } as FormControl) : c
                                )
                              }
                              return typeof up === 'function' ? up(tabChildren) : up
                            })
                          }
                          rootSetControls={rootSetControls}
                        />
                      ) : null}
                    </div>
                  ))}
                  <div
                    data-drop-index={children.length}
                    style={
                      !showDropZones
                        ? dropZoneCollapsedStyle
                        : tabDropTarget?.tabIndex === tabIndex && tabDropTarget?.dropIndex === children.length
                          ? dropZoneActiveStyle
                          : dropZoneStyle
                    }
                    onDragEnter={(e) => {
                      e.stopPropagation()
                      const next = { tabIndex, dropIndex: children.length }
                      if (tabDropTargetRef.current?.tabIndex !== next.tabIndex || tabDropTargetRef.current?.dropIndex !== next.dropIndex) {
                        tabDropTargetRef.current = next
                        setTabDropTarget(next)
                      }
                    }}
                    onDragOver={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      e.dataTransfer.dropEffect = e.dataTransfer.types.includes(DATA_ID_KEY) ? 'move' : 'copy'
                      const next = { tabIndex, dropIndex: children.length }
                      if (tabDropTargetRef.current?.tabIndex !== next.tabIndex || tabDropTargetRef.current?.dropIndex !== next.dropIndex) {
                        tabDropTargetRef.current = next
                        setTabDropTarget(next)
                      }
                    }}
                    onDrop={(e) => handleTabZoneDrop(tabIndex, children.length, e)}
                  />
                </Space>
              </div>
            </Tabs.TabPane>
          )
        })}
      </Tabs>
    </div>
  )
}

function ControlBlock({
  control,
  selectedId,
  onSelect,
  onRemove,
  onControlsChange,
  rootSetControls,
  onDropAt,
  dropIndex,
}: {
  control: FormControl
  selectedId: string | null
  onSelect: (id: string | null) => void
  onRemove: (id: string) => void
  onControlsChange: React.Dispatch<React.SetStateAction<(FormControl | null)[]>>
  rootSetControls: React.Dispatch<React.SetStateAction<FormControl[]>>
  onDropAt?: (e: React.DragEvent) => void
  dropIndex?: number
}) {
  const selectControl = useCallback(
    (e: React.MouseEvent, id: string) => {
      e.stopPropagation()
      onSelect(id)
    },
    [onSelect]
  )

  const handleDragStart = useCallback((e: React.DragEvent, id: string) => {
    e.stopPropagation()
    e.dataTransfer.setData(DATA_ID_KEY, id)
    e.dataTransfer.setData('text/plain', id)
    e.dataTransfer.effectAllowed = 'move'
  }, [])

  const isSelected = selectedId === control.id

  return (
    <div
      className={`control-wrap${isSelected ? ' control-wrap--selected' : ''}`}
      style={isSelected ? controlWrapSelectedStyle : controlWrapStyle}
      draggable
      data-drop-index={dropIndex}
      onDragStart={(e) => handleDragStart(e, control.id)}
      onClick={(e) => selectControl(e, control.id)}
      onDragOver={onDropAt ? (e) => { e.preventDefault(); e.stopPropagation(); e.dataTransfer.dropEffect = 'move' } : undefined}
      onDrop={onDropAt ? (e) => { e.preventDefault(); e.stopPropagation(); onDropAt(e) } : undefined}
    >
      <div
        style={dragHandleStyle}
        onPointerDown={(e) => e.stopPropagation()}
        title="Перетащите для изменения порядка"
      >
        <ArrowsVertical />
      </div>
      {control.type === 'grid' ? (
        <GridControlBlock
          control={control as GridControl}
          selectedId={selectedId}
          onSelect={onSelect}
          onRemove={onRemove}
          rootSetControls={rootSetControls}
        />
      ) : control.type === 'row' ? (
        <RowControlBlock
          control={control as RowControl}
          selectedId={selectedId}
          onSelect={onSelect}
          onRemove={onRemove}
          rootSetControls={rootSetControls}
        />
      ) : control.type === 'table' ? (
        <TableControlBlock
          control={control as TableControl}
          selectedId={selectedId}
          onSelect={onSelect}
          onRemove={onRemove}
          rootSetControls={rootSetControls}
        />
      ) : control.type === 'tabs' ? (
        <TabsControlBlock
          control={control as TabsControl}
          selectedId={selectedId}
          onSelect={onSelect}
          onRemove={onRemove}
          rootSetControls={rootSetControls}
        />
      ) : (
        <div style={{ pointerEvents: 'none', display: 'inline-flex', alignItems: 'center', width: 'max-content' }}>
          <CanvasPreviewErrorBoundary
            componentLabel={control.type as string}
          >
            {(() => {
              const descriptor = getDescriptor(control.type as FormControlType)
              if (descriptor) {
                const context: CanvasContext = {
                  selectedId,
                  onSelect,
                  onRemove,
                  rootSetControls,
                  onControlsChange,
                  renderControlBlock: (c) => (
                    <ControlBlock
                      control={c}
                      selectedId={selectedId}
                      onSelect={onSelect}
                      onRemove={onRemove}
                      onControlsChange={onControlsChange}
                      rootSetControls={rootSetControls}
                    />
                  ),
                  createControl,
                  controlTypes: ALL_CONTROL_TYPES,
                  dataTypeKey: DATA_TYPE_KEY,
                  dataIdKey: DATA_ID_KEY,
                  setGridChildrenInTree,
                  setRowChildrenInTree,
                  setTableChildrenInTree,
                }
                return descriptor.CanvasPreview({ control: control as Parameters<typeof descriptor.CanvasPreview>[0]['control'], context })
              }
              return null
            })()}
          </CanvasPreviewErrorBoundary>
        </div>
      )}
      {(() => {
        const bc = control as FormControlBase
        return <>
          {(bc.fieldName || (bc.validation && bc.validation.some((r) => r.type === 'required'))) && (
            <span style={{
              fontSize: 10,
              padding: '1px 6px',
              borderRadius: 4,
              background: 'var(--primary--main, #00a88e)',
              color: '#fff',
              whiteSpace: 'nowrap',
              lineHeight: '16px',
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 2,
            }}>
              {bc.validation?.some((r) => r.type === 'required') && (
                <span style={{ color: '#ffccc7', fontWeight: 700 }}>*</span>
              )}
              {bc.fieldName || ''}
            </span>
          )}
          {(bc.visibleWhen || bc.disabledWhen) && (
            <span style={{
              fontSize: 9,
              padding: '1px 4px',
              borderRadius: 3,
              background: '#faad14',
              color: '#fff',
              whiteSpace: 'nowrap',
              lineHeight: '14px',
            }} title={
              [
                bc.visibleWhen
                  ? `Видим: ${bc.visibleWhen.modelPath} ${bc.visibleWhen.operator} ${bc.visibleWhen.value ?? ''}`
                  : '',
                bc.disabledWhen
                  ? `Блок: ${bc.disabledWhen.modelPath} ${bc.disabledWhen.operator} ${bc.disabledWhen.value ?? ''}`
                  : '',
              ].filter(Boolean).join('; ')
            }>
              ⚡
            </span>
          )}
          {bc.handlers && Object.keys(bc.handlers).length > 0 && (
            <span style={{
              fontSize: 9,
              padding: '1px 5px',
              borderRadius: 4,
              background: '#722ed1',
              color: '#fff',
              whiteSpace: 'nowrap',
              lineHeight: '14px',
            }} title={Object.entries(bc.handlers).map(([k, v]) => `${k}: ${v}`).join('\n')}>
              fn{Object.keys(bc.handlers).length > 1 ? ` ×${Object.keys(bc.handlers).length}` : ''}
            </span>
          )}
        </>
      })()}
      <Button
        mode="tertiary"
        size="small"
        style={removeBtnStyle}
        iconBefore={<Delete />}
        onClick={(e) => {
          e.stopPropagation()
          onRemove(control.id)
        }}
      />
    </div>
  )
}

export function FormCanvas({
  controls,
  onControlsChange,
  selectedId,
  onSelect,
}: FormCanvasProps) {
  const [dragOver, setDragOver] = useState(false)
  const [dropIndex, setDropIndex] = useState<number | null>(null)
  const dropIndexRef = useRef<number | null>(null)
  const canvasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const id = 'canvas-radio-overrides'
    if (document.getElementById(id)) return
    const style = document.createElement('style')
    style.id = id
    style.textContent = `
      .control-wrap .ant-radio-group .ant-radio::after,
      .control-wrap .ant-radio-group .ant-radio-checked .ant-radio-inner::after,
      .control-wrap .ant-radio-group .ant-radio-inner::after {
        display: none !important; visibility: hidden !important; opacity: 0 !important;
        width: 0 !important; height: 0 !important; overflow: hidden !important;
        content: none !important; background: none !important; border: none !important;
      }
      .canvas-tabs-wrapper .kl6-tabs-more-button {
        display: none !important;
      }
    `
    document.head.appendChild(style)
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setDragOver(false)
      setDropIndex(null)
      dropIndexRef.current = null
      const raw = (e.currentTarget as HTMLElement).getAttribute('data-drop-index')
      const index = raw != null ? parseInt(raw, 10) : NaN
      if (Number.isNaN(index) || index < 0) return
      const id = e.dataTransfer.getData(DATA_ID_KEY)
      const dropInfo = getDropTypeAndOptions(e)
      if (id) {
        const fromIndex = controls.findIndex((c) => c.id === id)
        if (fromIndex === -1) return
        const toIndex = fromIndex < index ? index - 1 : index
        if (toIndex === fromIndex) return
        const next = [...controls]
        const [removed] = next.splice(fromIndex, 1)
        next.splice(toIndex, 0, removed)
        onControlsChange(next)
        return
      }
      if (dropInfo) {
        const next = [...controls]
        next.splice(index, 0, createControl(dropInfo.type, dropInfo.options))
        onControlsChange(next)
      }
    },
    [controls, onControlsChange]
  )

  const handleCanvasDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = e.dataTransfer.types.includes(DATA_ID_KEY) ? 'move' : 'copy'
    setDragOver(true)
  }, [])

  const handleCanvasDragLeave = useCallback((e: React.DragEvent) => {
    const relatedTarget = e.relatedTarget
    if (relatedTarget instanceof Node && canvasRef.current?.contains(relatedTarget)) {
      return
    }
    setDragOver(false)
    setDropIndex(null)
    dropIndexRef.current = null
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent, index: number) => {
    e.preventDefault()
    e.stopPropagation()
    e.dataTransfer.dropEffect = e.dataTransfer.types.includes(DATA_ID_KEY) ? 'move' : 'copy'
    setDragOver(true)
    if (dropIndexRef.current !== index) {
      dropIndexRef.current = index
      setDropIndex(index)
    }
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.stopPropagation()
    const relatedTarget = e.relatedTarget
    if (relatedTarget instanceof Node && canvasRef.current?.contains(relatedTarget)) {
      return
    }
    setDragOver(false)
    setDropIndex(null)
    dropIndexRef.current = null
  }, [])

  const handleDragEnter = useCallback((e: React.DragEvent, index: number) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = e.dataTransfer.types.includes(DATA_ID_KEY) ? 'move' : 'copy'
    setDragOver(true)
    if (dropIndexRef.current !== index) {
      dropIndexRef.current = index
      setDropIndex(index)
    }
  }, [])

  return (
    <div
      ref={canvasRef}
      data-testid="form-canvas"
      style={canvasStyle}
      onDropCapture={() => {
        setDragOver(false)
        setDropIndex(null)
        dropIndexRef.current = null
      }}
      onDrop={(e) => {
        e.preventDefault()
        const id = e.dataTransfer.getData(DATA_ID_KEY)
        const dropInfo = getDropTypeAndOptions(e)
        if (id) return
        if (dropInfo) {
          const next = [...controls, createControl(dropInfo.type, dropInfo.options)]
          onControlsChange(next)
        }
        setDragOver(false)
        setDropIndex(null)
        dropIndexRef.current = null
      }}
      onDragEnter={handleCanvasDragEnter}
      onDragOver={(e) => {
        e.preventDefault()
        e.dataTransfer.dropEffect = e.dataTransfer.types.includes(DATA_ID_KEY) ? 'move' : 'copy'
        setDragOver(true)
      }}
      onDragLeave={handleCanvasDragLeave}
      onClick={(e) => {
        if (!(e.target as HTMLElement).closest('.control-wrap')) {
          if (document.activeElement && document.activeElement instanceof HTMLElement) {
            document.activeElement.blur()
          }
          onSelect(null)
        }
      }}
    >
      {controls.length === 0 && !dragOver && (
        <Text type="BTR3" style={{ color: '#999' }}>
          Перетащите сюда контрол из меню или дважды щёлкните по элементу в меню
        </Text>
      )}
      <Space size={4} direction="vertical" align="flex-start" style={{ minWidth: '100%', width: 'max-content' }}>
        {controls.map((control, index) => (
          <div
            key={control.id}
            data-drop-index={index}
            style={
              !dragOver
                ? dropZoneHiddenStyle
                : dropIndex === index
                  ? dropZoneActiveStyle
                  : dropZoneStyle
            }
            onDragEnter={(e) => {
              e.stopPropagation()
              handleDragEnter(e, index)
            }}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <ControlBlock
              control={control}
              selectedId={selectedId}
              onSelect={onSelect}
              onRemove={(id) => {
                onControlsChange(controls.filter((c) => c.id !== id))
                if (selectedId === id) onSelect(null)
              }}
              onControlsChange={onControlsChange as React.Dispatch<React.SetStateAction<(FormControl | null)[]>>}
              rootSetControls={onControlsChange}
            />
          </div>
        ))}
        <div
          data-drop-index={controls.length}
          style={
            !dragOver
              ? dropZoneHiddenStyle
              : dropIndex === controls.length
                ? dropZoneActiveStyle
                : dropZoneStyle
          }
          onDragEnter={(e) => {
            e.stopPropagation()
            handleDragEnter(e, controls.length)
          }}
          onDragOver={(e) => handleDragOver(e, controls.length)}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        />
      </Space>
    </div>
  )
}
