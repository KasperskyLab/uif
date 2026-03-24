import { Grid, GridItem, Space, Text } from '@kaspersky/hexa-ui'
import { ArrangeGrid } from '@kaspersky/hexa-ui-icons/16'
import type { ControlDescriptor } from '../types'
import type { FormControl, GridControl } from '../../types/form-dsl'
import { ConfigHookIdentityPropsEditor } from '../../components/ConfigHookIdentityPropsEditor'
import { GridRowsColsPropsEditor } from '../../components/GridRowsColsPropsEditor'
import {
  defaultGridLayoutRows,
  DEFAULT_GRID_LAYOUT_PROPERTY,
} from '../../utils/defaultGridHexaProps'

export const gridDescriptor: ControlDescriptor<GridControl> = {
  type: 'grid',
  label: 'Сетка',
  Icon: ArrangeGrid,

  createDefault: () => ({
    type: 'grid',
    id: '',
    rows: 2,
    cols: 2,
    children: Array(4).fill(null) as (FormControl | null)[],
  }),

  CanvasPreview: ({ control }) => {
    const g = control as GridControl
    return (
      <div style={{ padding: 4, border: '1px dashed #ccc', borderRadius: 6, minWidth: 120 }}>
        <Grid
          cols={g.cols}
          layout={defaultGridLayoutRows(g.rows)}
          layoutProperty={DEFAULT_GRID_LAYOUT_PROPERTY}
        >
          {Array.from({ length: g.rows * g.cols }, (_, i) => (
            <GridItem key={i} style={{ minHeight: 20, fontSize: 10 }}>
              <Text type="BTR3" style={{ color: '#999' }}>
                {g.children[i] ? '·' : '○'}
              </Text>
            </GridItem>
          ))}
        </Grid>
      </div>
    )
  },

  PropsEditor: ({ control, onUpdate, panelContext }) => (
    <Space size={12} direction="vertical" style={{ width: '100%' }}>
      <GridRowsColsPropsEditor control={control as GridControl} onUpdate={onUpdate} />
      <ConfigHookIdentityPropsEditor
        id={control.id}
        configHook={(control as GridControl).configHook}
        onUpdate={onUpdate}
        configHookPlaceholder="handlers/grid.config-hook.ts"
        formDirectoryHandle={panelContext?.formDirectoryHandle ?? null}
      />
    </Space>
  ),
}
