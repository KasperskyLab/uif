import React from 'react'
import { Icon, Text, Select } from '@kaspersky/hexa-ui'
import {
  Add,
  ArrowDown1,
  ArrowUp1,
  ArrowsVertical,
  CheckedSquare,
  ClearSolid,
  Component,
  Copy,
  Cursor,
  Delete,
  Menu,
  Ok,
  OnlineOfflineToggle,
  RadioButton,
  ResizeInput,
  Search,
  StatusErrorOutline,
  StatusInfoOutline,
  StatusLevelCritical,
  StatusLevelEmpty,
  StatusLevelHigh,
  StatusLevelLow,
  StatusLevelMedium,
  StatusWarningOutline,
  Table,
  WindowLayout,
  ArrangeGrid,
} from '@kaspersky/hexa-ui-icons/16'
import type { ControlDescriptor } from '../types'
import type { IconControl } from '../../types/form-dsl'
import { SelectWithOptionWidth } from '../../components/SelectWithOptionWidth'

type IconComponent = React.ComponentType<{ style?: React.CSSProperties }>

const ICONS: { name: string; Icon: IconComponent }[] = [
  { name: 'Add', Icon: Add },
  { name: 'Delete', Icon: Delete },
  { name: 'Cursor', Icon: Cursor },
  { name: 'ArrowDown1', Icon: ArrowDown1 },
  { name: 'ArrowUp1', Icon: ArrowUp1 },
  { name: 'ArrowsVertical', Icon: ArrowsVertical },
  { name: 'CheckedSquare', Icon: CheckedSquare },
  { name: 'RadioButton', Icon: RadioButton },
  { name: 'ResizeInput', Icon: ResizeInput },
  { name: 'Menu', Icon: Menu },
  { name: 'WindowLayout', Icon: WindowLayout },
  { name: 'ArrangeGrid', Icon: ArrangeGrid },
  { name: 'Table', Icon: Table },
  { name: 'Component', Icon: Component },
  { name: 'OnlineOfflineToggle', Icon: OnlineOfflineToggle },
  { name: 'Search', Icon: Search },
  { name: 'ClearSolid', Icon: ClearSolid },
  { name: 'Ok', Icon: Ok },
  { name: 'StatusWarningOutline', Icon: StatusWarningOutline },
  { name: 'StatusErrorOutline', Icon: StatusErrorOutline },
  { name: 'StatusInfoOutline', Icon: StatusInfoOutline },
  { name: 'Copy', Icon: Copy },
  { name: 'StatusLevelCritical', Icon: StatusLevelCritical },
  { name: 'StatusLevelEmpty', Icon: StatusLevelEmpty },
  { name: 'StatusLevelHigh', Icon: StatusLevelHigh },
  { name: 'StatusLevelLow', Icon: StatusLevelLow },
  { name: 'StatusLevelMedium', Icon: StatusLevelMedium },
]

const SIZE_OPTIONS = [
  { value: '16', label: '16' },
  { value: '24', label: '24' },
]

export const iconDescriptor: ControlDescriptor<IconControl> = {
  type: 'icon',
  label: 'Иконка',
  Icon: Cursor,

  createDefault: () => ({
    type: 'icon',
    id: '',
    name: 'Cursor',
    size: 16,
  }),

  CanvasPreview: ({ control }) => (
    <Icon
      name={(control.name ?? 'Cursor') as React.ComponentProps<typeof Icon>['name']}
      size={control.size === 24 ? 'medium' : 'small'}
    />
  ),

  PropsEditor: ({ control, onUpdate }) => {
    const currentName = control.name ?? 'Cursor'
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
        <div>
          <Text type="BTR3" style={{ display: 'block', marginBottom: 6 }}>Иконка</Text>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: 6,
              width: '100%',
            }}
          >
            {ICONS.map(({ name, Icon: IconC }) => (
              <button
                key={name}
                type="button"
                title={name}
                onClick={() => onUpdate({ name })}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 36,
                  height: 36,
                  padding: 0,
                  border:
                    currentName === name
                      ? '2px solid #00a88e'
                      : '1px solid var(--tagsoutlined--neutral-border, #E7E7E9)',
                  borderRadius: 8,
                  background:
                    currentName === name
                      ? 'rgba(0,168,142,0.12)'
                      : 'var(--surface--neutral, #fff)',
                  cursor: 'pointer',
                  color: 'var(--text-icons-elements--primary, #262633)',
                }}
              >
                <IconC style={{ width: 20, height: 20 }} />
              </button>
            ))}
          </div>
        </div>
        <div>
          <Text type="BTR3" style={{ display: 'block', marginBottom: 4 }}>Размер</Text>
          <SelectWithOptionWidth options={SIZE_OPTIONS}>
            <Select
              options={SIZE_OPTIONS}
              value={String(control.size ?? 16)}
              onChange={(v) => onUpdate({ size: v === '24' ? 24 : 16 })}
            />
          </SelectWithOptionWidth>
        </div>
      </div>
    )
  },
}
