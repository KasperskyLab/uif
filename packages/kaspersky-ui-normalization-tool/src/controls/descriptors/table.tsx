import {
  Space,
  Text,
  Textbox,
  Select,
  Checkbox as HexaCheckbox,
  Button,
  Table,
} from '@kaspersky/hexa-ui'
import { Add, Table as TableIcon } from '@kaspersky/hexa-ui-icons/16'
import type { ControlDescriptor } from '../types'
import type { FormControl, TableControl } from '../../types/form-dsl'
import { ConfigHookIdentityPropsEditor } from '../../components/ConfigHookIdentityPropsEditor'
import { GridRowsColsPropsEditor } from '../../components/GridRowsColsPropsEditor'
import { SelectWithOptionWidth } from '../../components/SelectWithOptionWidth'
import { buildTableMatrixColumnsAndDataSource } from '../../utils/tableControlHexa'
import { ToolbarItemEditor, ToolbarStaticPreview } from './toolbar'

export const tableDescriptor: ControlDescriptor<TableControl> = {
  type: 'table',
  label: 'Таблица',
  Icon: TableIcon,

  createDefault: () => ({
    type: 'table',
    id: '',
    rows: 2,
    cols: 2,
    children: Array(4).fill(null) as (FormControl | null)[],
  }),

  CanvasPreview: ({ control }) => {
    const t = control as TableControl
    const hasToolbar =
      t.toolbar &&
      ((t.toolbar.left?.length ?? 0) > 0 || (t.toolbar.right?.length ?? 0) > 0)
    const { dataSource, columns } = buildTableMatrixColumnsAndDataSource(
      t,
      (i) => (
        <Text type="BTR3" style={{ color: '#999', fontSize: 10 }}>
          {t.children[i] ? '·' : '○'}
        </Text>
      )
    )
    return (
      <div style={{ padding: 4, border: '1px dashed #ccc', borderRadius: 6, minWidth: 140 }}>
        {hasToolbar ? (
          <div style={{ marginBottom: 4 }}>
            <ToolbarStaticPreview
              left={t.toolbar!.left ?? []}
              right={t.toolbar!.right ?? []}
            />
          </div>
        ) : null}
        <Table
          pagination={false}
          rowMode="compact"
          columnVerticalAlign="middle"
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    )
  },

  PropsEditor: ({ control, onUpdate, panelContext, selectCloseKey, onSelectClose }) => {
    const t = control as TableControl
    return (
      <Space size={12} direction="vertical" style={{ width: '100%' }}>
        <GridRowsColsPropsEditor
          control={t}
          onUpdate={onUpdate}
          rowLabel="Rows (строки)"
          colLabel="Cols (колонки)"
        />
        <div style={{ width: '100%' }}>
          <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>
            Empty text
          </Text>
          <Textbox
            value={t.emptyText ?? ''}
            onChange={(v) => onUpdate({ emptyText: v || undefined } as Partial<TableControl>)}
            placeholder="Нет данных"
          />
        </div>
        <div style={{ width: '100%' }}>
          <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>
            Row mode
          </Text>
          <SelectWithOptionWidth
            options={[
              { value: 'standard', label: 'standard' },
              { value: 'compact', label: 'compact' },
            ]}
          >
            <Select
              key={`table-rowmode-${selectCloseKey ?? 0}`}
              options={[
                { value: 'standard', label: 'standard' },
                { value: 'compact', label: 'compact' },
              ]}
              value={t.rowMode ?? 'standard'}
              onChange={(v: string | undefined) => {
                onUpdate({
                  rowMode: (v as 'standard' | 'compact') || 'standard',
                } as Partial<TableControl>)
                onSelectClose?.()
              }}
              getPopupContainer={() => document.body}
            />
          </SelectWithOptionWidth>
        </div>
        <div style={{ width: '100%' }}>
          <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>
            Column vertical align
          </Text>
          <SelectWithOptionWidth
            options={[
              { value: 'top', label: 'top' },
              { value: 'middle', label: 'middle' },
              { value: 'bottom', label: 'bottom' },
              { value: 'inherit', label: 'inherit' },
            ]}
          >
            <Select
              key={`table-colalign-${selectCloseKey ?? 0}`}
              options={[
                { value: 'top', label: 'top' },
                { value: 'middle', label: 'middle' },
                { value: 'bottom', label: 'bottom' },
                { value: 'inherit', label: 'inherit' },
              ]}
              value={t.columnVerticalAlign ?? 'inherit'}
              onChange={(v: string | undefined) => {
                onUpdate({
                  columnVerticalAlign:
                    (v as TableControl['columnVerticalAlign']) || 'inherit',
                } as Partial<TableControl>)
                onSelectClose?.()
              }}
              getPopupContainer={() => document.body}
            />
          </SelectWithOptionWidth>
        </div>
        <HexaCheckbox
          checked={t.disabled}
          onChange={(e) => onUpdate({ disabled: e.target.checked } as Partial<TableControl>)}
        >
          Disabled
        </HexaCheckbox>
        <div style={{ marginTop: 4, width: '100%' }}>
          <HexaCheckbox
            checked={!!t.toolbar}
            onChange={(e) =>
              onUpdate({
                toolbar: e.target.checked
                  ? {
                      left: [{ type: 'button', key: '1', label: 'Действие' }],
                      right: [],
                    }
                  : undefined,
              } as Partial<TableControl>)
            }
          >
            Тулбар над таблицей
          </HexaCheckbox>
          {t.toolbar && (
            <Space size={8} direction="vertical" style={{ width: '100%', marginTop: 8 }}>
              <Text type="BTR3" style={{ display: 'block', fontWeight: 600 }}>
                Слева
              </Text>
              {(t.toolbar.left ?? []).map((item, i) => (
                <ToolbarItemEditor
                  key={item.key + i}
                  item={item}
                  index={i}
                  onChange={(patch) => {
                    const next = [...(t.toolbar!.left ?? [])]
                    next[i] = { ...next[i], ...patch }
                    onUpdate({
                      toolbar: { ...t.toolbar!, left: next.length ? next : [] },
                    } as Partial<TableControl>)
                  }}
                  onRemove={() => {
                    const left = (t.toolbar!.left ?? []).filter((_, j) => j !== i)
                    onUpdate({ toolbar: { ...t.toolbar!, left } } as Partial<TableControl>)
                  }}
                  canRemove={(t.toolbar!.left ?? []).length > 0}
                />
              ))}
              <Button
                mode="secondary"
                text="Добавить слева"
                iconBefore={<Add />}
                onClick={() => {
                  const left = [
                    ...(t.toolbar!.left ?? []),
                    {
                      type: 'button' as const,
                      key: `l-${Date.now()}`,
                      label: 'Кнопка',
                    },
                  ]
                  onUpdate({ toolbar: { ...t.toolbar!, left } } as Partial<TableControl>)
                }}
                style={{ width: '100%' }}
              />
              <Text type="BTR3" style={{ display: 'block', fontWeight: 600, marginTop: 8 }}>
                Справа
              </Text>
              {(t.toolbar.right ?? []).map((item, i) => (
                <ToolbarItemEditor
                  key={item.key + i}
                  item={item}
                  index={i}
                  onChange={(patch) => {
                    const next = [...(t.toolbar!.right ?? [])]
                    next[i] = { ...next[i], ...patch }
                    onUpdate({
                      toolbar: { ...t.toolbar!, right: next.length ? next : [] },
                    } as Partial<TableControl>)
                  }}
                  onRemove={() => {
                    const right = (t.toolbar!.right ?? []).filter((_, j) => j !== i)
                    onUpdate({ toolbar: { ...t.toolbar!, right } } as Partial<TableControl>)
                  }}
                  canRemove={(t.toolbar!.right ?? []).length > 0}
                />
              ))}
              <Button
                mode="secondary"
                text="Добавить справа"
                iconBefore={<Add />}
                onClick={() => {
                  const right = [
                    ...(t.toolbar!.right ?? []),
                    {
                      type: 'button' as const,
                      key: `r-${Date.now()}`,
                      label: 'Кнопка',
                    },
                  ]
                  onUpdate({ toolbar: { ...t.toolbar!, right } } as Partial<TableControl>)
                }}
                style={{ width: '100%' }}
              />
            </Space>
          )}
        </div>
        <ConfigHookIdentityPropsEditor
          id={t.id}
          configHook={t.configHook}
          onUpdate={onUpdate}
          configHookPlaceholder="handlers/table.config-hook.ts"
          formDirectoryHandle={panelContext?.formDirectoryHandle ?? null}
        />
      </Space>
    )
  },
}
