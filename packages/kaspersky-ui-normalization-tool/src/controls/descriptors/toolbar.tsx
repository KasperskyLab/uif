import React, { useState, useEffect } from 'react'
import { Text, Textbox, Button, Space, Checkbox, Select } from '@kaspersky/hexa-ui'
import { Delete, Add, Menu } from '@kaspersky/hexa-ui-icons/16'
import type { ControlDescriptor } from '../types'
import type { ToolbarControl, ToolbarItem } from '../../types/form-dsl'
import { SelectWithOptionWidth } from '../../components/SelectWithOptionWidth'

/** Статичное превью тулбара на холсте — без Hexa Toolbar и без обработчиков, чтобы клик выделял контрол. */
export function ToolbarStaticPreview({ left, right }: { left: ToolbarItem[]; right: ToolbarItem[] }) {
  const leftItems = left ?? []
  const rightItems = right ?? []
  const styleBar: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'nowrap',
    width: '100%',
    minWidth: 200,
    padding: '4px 0',
  }
  const styleBtn: React.CSSProperties = {
    padding: '4px 12px',
    fontSize: 14,
    color: '#333',
    background: 'transparent',
    border: '1px solid transparent',
    borderRadius: 4,
    whiteSpace: 'nowrap',
  }
  const styleDivider: React.CSSProperties = {
    width: 1,
    height: 20,
    background: '#e0e0e0',
    margin: 0,
  }
  return (
    <div style={styleBar}>
      {leftItems.map((it) =>
        it.type === 'divider' ? (
          <div key={it.key} style={styleDivider} />
        ) : (
          <span key={it.key} style={styleBtn}>{it.label ?? ''}</span>
        )
      )}
      {rightItems.length > 0 && <span style={{ marginLeft: 'auto' }} />}
      {rightItems.map((it) =>
        it.type === 'divider' ? (
          <div key={it.key} style={styleDivider} />
        ) : (
          <span key={it.key} style={styleBtn}>{it.label ?? ''}</span>
        )
      )}
    </div>
  )
}

export const TYPE_OPTIONS_TOOLBAR = [
  { value: 'button', label: 'Кнопка' },
  { value: 'divider', label: 'Разделитель' },
]

export function ToolbarItemEditor({
  item,
  index: _index,
  onChange,
  onRemove,
  canRemove,
}: {
  item: ToolbarItem
  index: number
  onChange: (patch: Partial<ToolbarItem>) => void
  onRemove: () => void
  canRemove: boolean
}) {
  // Локальный state для текста кнопки, чтобы не перерисовывать родителя на каждый символ и не терять фокус
  const [localLabel, setLocalLabel] = useState(item.type === 'button' ? (item.label ?? '') : '')
  useEffect(() => {
    if (item.type === 'button') setLocalLabel(item.label ?? '')
  }, [item.type, item.label])

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '6px 8px',
        background: '#fafafa',
        borderRadius: 6,
        border: '1px solid #eee',
      }}
    >
      <SelectWithOptionWidth options={TYPE_OPTIONS_TOOLBAR}>
        <Select
          options={TYPE_OPTIONS_TOOLBAR}
          value={item.type}
          onChange={(v) => onChange({ type: (v as 'button' | 'divider') || 'button' })}
          getPopupContainer={() => document.body}
        />
      </SelectWithOptionWidth>
      {item.type === 'button' && (
        <Textbox
          value={localLabel}
          onChange={(v) => setLocalLabel(v)}
          onBlur={() => onChange({ label: localLabel })}
          placeholder="Текст кнопки"
          title="Текст, отображаемый на кнопке (label)"
          style={{ flex: 1, minWidth: 0 }}
        />
      )}
      {item.type === 'divider' && <span style={{ flex: 1, color: '#999', fontSize: 12 }}>—</span>}
      <Button
        mode="tertiary"
        size="small"
        iconBefore={<Delete />}
        onClick={onRemove}
        disabled={!canRemove}
      />
    </div>
  )
}

export const toolbarDescriptor: ControlDescriptor<ToolbarControl> = {
  type: 'toolbar',
  label: 'Тулбар',
  Icon: Menu,

  createDefault: () => ({
    type: 'toolbar',
    id: '',
    left: [
      { type: 'button', key: '1', label: 'Изменить' },
      { type: 'divider', key: 'd1' },
      { type: 'button', key: '2', label: 'Обновить' },
    ],
    right: [{ type: 'button', key: 'r1', label: 'Действие' }],
    leftLimit: 0,
    sticky: 0,
    autoDropdown: false,
  }),

  CanvasPreview: ({ control }) => (
    <ToolbarStaticPreview left={control.left ?? []} right={control.right ?? []} />
  ),

  PropsEditor: ({ control, onUpdate }) => {
    const left = control.left ?? []
    const right = control.right ?? []

    const setLeft = (next: ToolbarItem[]) => onUpdate({ left: next.length ? next : [] })
    const setRight = (next: ToolbarItem[]) => onUpdate({ right: next.length ? next : [] })
    const setItemLeft = (index: number, patch: Partial<ToolbarItem>) => {
      const next = [...left]
      if (!next[index]) return
      next[index] = { ...next[index], ...patch }
      setLeft(next)
    }
    const setItemRight = (index: number, patch: Partial<ToolbarItem>) => {
      const next = [...right]
      if (!next[index]) return
      next[index] = { ...next[index], ...patch }
      setRight(next)
    }
    const addLeft = () => setLeft([...left, { type: 'button', key: `l-${Date.now()}`, label: 'Кнопка' }])
    const addRight = () => setRight([...right, { type: 'button', key: `r-${Date.now()}`, label: 'Кнопка' }])
    const removeLeft = (index: number) => setLeft(left.filter((_, i) => i !== index))
    const removeRight = (index: number) => setRight(right.filter((_, i) => i !== index))

    return (
      <>
        <Text type="BTR3" style={{ display: 'block', marginBottom: 6, fontWeight: 600 }}>Элементы слева</Text>
        <Space size={6} direction="vertical" style={{ width: '100%', marginBottom: 16 }}>
          {left.map((item, i) => (
            <ToolbarItemEditor
              key={item.key + i}
              item={item}
              index={i}
              onChange={(patch) => setItemLeft(i, patch)}
              onRemove={() => removeLeft(i)}
              canRemove={left.length > 0}
            />
          ))}
          <Button mode="secondary" text="Добавить элемент" iconBefore={<Add />} onClick={addLeft} style={{ width: '100%' }} />
        </Space>

        <Text type="BTR3" style={{ display: 'block', marginBottom: 6, fontWeight: 600 }}>Элементы справа</Text>
        <Space size={6} direction="vertical" style={{ width: '100%', marginBottom: 16 }}>
          {right.map((item, i) => (
            <ToolbarItemEditor
              key={item.key + i}
              item={item}
              index={i}
              onChange={(patch) => setItemRight(i, patch)}
              onRemove={() => removeRight(i)}
              canRemove={right.length > 0}
            />
          ))}
          <Button mode="secondary" text="Добавить элемент" iconBefore={<Add />} onClick={addRight} style={{ width: '100%' }} />
        </Space>

        <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>Лимит слева (0 = без лимита)</Text>
        <Textbox
          value={String(control.leftLimit ?? 0)}
          onChange={(v) => onUpdate({ leftLimit: Math.max(0, parseInt(v, 10) || 0) })}
          placeholder="0"
          style={{ marginBottom: 8 }}
        />

        <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>Sticky top (px)</Text>
        <Textbox
          value={String(control.sticky ?? 0)}
          onChange={(v) => onUpdate({ sticky: Math.max(0, parseInt(v, 10) || 0) })}
          placeholder="0"
          style={{ marginBottom: 8 }}
        />

        <Checkbox
          checked={control.autoDropdown ?? false}
          onChange={(e) => onUpdate({ autoDropdown: e.target.checked })}
        >
          Авто-dropdown при переполнении
        </Checkbox>
      </>
    )
  },
}
