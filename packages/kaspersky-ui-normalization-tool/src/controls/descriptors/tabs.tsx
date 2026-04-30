import { useState, useEffect } from 'react'
import { Text, Textbox, Button, Space } from '@kaspersky/hexa-ui'
import { Delete, Add, WindowLayout } from '@kaspersky/hexa-ui-icons/16'
import type { ControlDescriptor } from '../types'
import type { TabsControl, TabsControlItem } from '../../types/form-dsl'

function TabItemEditor({
  item,
  index: _index,
  onChange,
  onRemove,
  canRemove,
}: {
  item: TabsControlItem
  index: number
  onChange: (patch: Partial<TabsControlItem>) => void
  onRemove: () => void
  canRemove: boolean
}) {
  const [localKey, setLocalKey] = useState(item.key)
  const [localLabel, setLocalLabel] = useState(item.label)
  useEffect(() => {
    setLocalKey(item.key)
    setLocalLabel(item.label)
  }, [item.key, item.label])

  return (
    <div
      style={{
        padding: 8,
        border: '1px solid #e8e8e8',
        borderRadius: 6,
        background: '#fafafa',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
        <Textbox
          value={localKey}
          onChange={(v) => setLocalKey(v)}
          onBlur={() => onChange({ key: localKey || item.key })}
          placeholder="key"
          style={{ flex: 1, minWidth: 0 }}
        />
        <Textbox
          value={localLabel}
          onChange={(v) => setLocalLabel(v)}
          onBlur={() => onChange({ label: localLabel })}
          placeholder="Подпись"
          style={{ flex: 1, minWidth: 0 }}
        />
        <Button
          mode="tertiary"
          size="small"
          iconBefore={<Delete />}
          onClick={onRemove}
          disabled={!canRemove}
        />
      </div>
    </div>
  )
}

export const tabsDescriptor: ControlDescriptor<TabsControl> = {
  type: 'tabs',
  label: 'Табы',
  Icon: WindowLayout,

  createDefault: () => ({
    type: 'tabs',
    id: '',
    items: [
      { key: 'tab1', label: 'Вкладка 1', children: [] },
      { key: 'tab2', label: 'Вкладка 2', children: [] },
    ],
    activeKey: 'tab1',
  }),

  CanvasPreview: ({ control }) => (
    <Text type="BTR3" style={{ color: '#8c8c8c' }}>
      Табы ({control.items?.length ?? 0} вкладок)
    </Text>
  ),

  PropsEditor: ({ control, onUpdate }) => {
    const items = control.items ?? []
    const setItems = (next: TabsControlItem[]) => onUpdate({ items: next })
    const setItemAt = (index: number, patch: Partial<TabsControlItem>) => {
      const next = items.map((it, i) => (i === index ? { ...it, ...patch } : it))
      setItems(next)
    }
    const removeAt = (index: number) => {
      const next = items.filter((_, i) => i !== index)
      const newActive = control.activeKey === items[index]?.key ? (next[0]?.key ?? '') : control.activeKey
      onUpdate({ items: next, activeKey: newActive || undefined })
    }
    const addTab = () => {
      const key = `tab${Date.now()}`
      setItems([...items, { key, label: `Вкладка ${items.length + 1}`, children: [] }])
    }

    return (
      <>
        <Text type="BTR3" style={{ display: 'block', marginBottom: 8 }}>
          Вкладки
        </Text>
        <Space size={8} direction="vertical" style={{ width: '100%' }}>
          {items.map((item, i) => (
            <TabItemEditor
              key={item.key}
              item={item}
              index={i}
              onChange={(patch) => setItemAt(i, patch)}
              onRemove={() => removeAt(i)}
              canRemove={items.length > 1}
            />
          ))}
          <Button mode="secondary" text="Добавить вкладку" iconBefore={<Add />} onClick={addTab} style={{ width: '100%' }} />
        </Space>
        <div style={{ marginTop: 12 }}>
          <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>Активная вкладка (key)</Text>
          <Textbox
            value={control.activeKey ?? ''}
            onChange={(v) => onUpdate({ activeKey: v || undefined })}
            placeholder={items[0]?.key ?? ''}
          />
        </div>
      </>
    )
  },
}
