import React from 'react'

export type ToolbarPreviewItem =
  | { type: 'divider'; key: string }
  | { type: 'button'; key: string; label?: string }

/** Статичное превью тулбара над таблицей (паритет с normalization-tool). */
export function ToolbarStaticPreview({
  left,
  right,
}: {
  left: ToolbarPreviewItem[]
  right: ToolbarPreviewItem[]
}): React.ReactElement {
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
