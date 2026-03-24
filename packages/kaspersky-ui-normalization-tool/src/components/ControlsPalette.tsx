import React, { useState, useMemo } from 'react'
import { Space, H6, Textbox } from '@kaspersky/hexa-ui'
import type { FormControlType } from '../types/form-dsl'
import { getPaletteGroups } from '../controls/registry'

const paletteItemStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  padding: '10px 12px',
  cursor: 'grab',
  border: '1px solid transparent',
  borderRadius: 8,
  userSelect: 'none',
  width: '100%',
  boxSizing: 'border-box',
  justifyContent: 'flex-start',
}

export interface ControlsPaletteAddOptions {
  componentId?: string
}

export interface ControlsPaletteProps {
  onAddControl: (type: FormControlType, options?: ControlsPaletteAddOptions) => void
}

function dragKey(item: { type: FormControlType; label: string; componentId?: string }): string {
  return item.componentId != null ? `${item.type}:${item.componentId}` : item.type
}

export function ControlsPalette({ onAddControl }: ControlsPaletteProps) {
  const allGroups = getPaletteGroups()
  const [search, setSearch] = useState('')

  const groups = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return allGroups
    return allGroups
      .map(({ group, items }) => ({
        group,
        items: items.filter(
          (item) =>
            item.label.toLowerCase().includes(q) ||
            item.type.toLowerCase().includes(q) ||
            (item.componentId && item.componentId.toLowerCase().includes(q))
        ),
      }))
      .filter(({ items }) => items.length > 0)
  }, [allGroups, search])

  return (
    <Space size={12} direction="vertical" style={{ width: '100%', alignItems: 'flex-start' }}>
      <Textbox
        value={search}
        onChange={setSearch}
        placeholder="Поиск компонентов..."
        style={{ width: '100%' }}
      />
      {groups.map(({ group, items }) => (
        <div key={group} style={{ width: '100%' }}>
          <H6 style={{ margin: '0 0 6px 0', textAlign: 'left', color: 'var(--text--secondary, #666)' }}>
            {group}
          </H6>
          <Space size={4} direction="vertical" style={{ width: '100%', alignItems: 'flex-start' }}>
            {items.map((item) => (
              <div
                key={dragKey(item)}
                role="button"
                tabIndex={0}
                className="controls-palette-item"
                data-testid={`palette-${item.type}`}
                style={paletteItemStyle}
                onDoubleClick={() => onAddControl(item.type)}
                onDragStart={(e) => {
                  e.dataTransfer.setData('application/x-form-control-type', item.type)
                  e.dataTransfer.setData('text/plain', item.type)
                  e.dataTransfer.effectAllowed = 'copy'
                }}
                draggable
              >
                <item.Icon />
                <span>{item.label}</span>
              </div>
            ))}
          </Space>
        </div>
      ))}
      {groups.length === 0 && search && (
        <div style={{ color: 'var(--text--secondary, #999)', padding: '8px 0' }}>
          Ничего не найдено
        </div>
      )}
    </Space>
  )
}
