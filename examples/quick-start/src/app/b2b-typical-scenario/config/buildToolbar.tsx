import { createElement, type ReactNode, type ComponentType } from 'react'

import type { AlertListToolbarItemSpec, ToolbarButtonSpec } from './types'

export type ToolbarBuildContext = {
  icons: Record<string, ComponentType<Record<string, unknown>>>
  handlers?: Record<string, () => void>
  children?: Record<string, ReactNode>
}

/**
 * Builds Hexa UI Toolbar left items from config spec.
 * Resolves iconId -> icon component, handlerKey -> onClick, childrenKey -> children.
 */
export function buildToolbarLeft(
  spec: AlertListToolbarItemSpec[],
  ctx: ToolbarBuildContext
): Array<{
  type: 'button' | 'children'
  key: string
  label?: string
  iconBefore?: ReactNode
  onClick?: () => void
  size?: 'small'
  children?: ReactNode
}> {
  return spec.map((item) => {
    if (item.type === 'button') {
      const b = item as ToolbarButtonSpec
      const Icon = b.iconId ? ctx.icons[b.iconId] : undefined
      const onClick = b.handlerKey && ctx.handlers?.[b.handlerKey]
        ? ctx.handlers[b.handlerKey]
        : undefined
      return {
        type: 'button' as const,
        key: b.key,
        label: b.label,
        iconBefore: Icon != null ? createElement(Icon) : undefined,
        onClick,
        size: b.size
      }
    }
    const child = item.childrenKey && ctx.children?.[item.childrenKey]
    return {
      type: 'children' as const,
      key: item.key,
      children: child ?? null
    }
  })
}
