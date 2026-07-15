import type { StorybookArgType } from '../../adapters/storybook'

type StorybookControl = Exclude<StorybookArgType['control'], false | undefined>
type StorybookControlType = StorybookControl extends { type?: infer T } ? T : never

type PropPresentationControl = StorybookArgType['control'] | StorybookControlType | false

export type PropDefinitionSectionLabels = {
  appearance: string
  technical: string
}

export type PropPresentationGroup = keyof PropDefinitionSectionLabels

export type PropPresentation = {
  /** Подпись в таблице пропов (в т.ч. design-only с эмодзи). Ключ в map — стабильный id. */
  label?: string
  /** @deprecated Больше не влияет на Properties и Controls, оставлено для совместимости. */
  group?: PropPresentationGroup
  order?: number
  description?: string
  deprecated?: boolean
  hidden?: boolean
  showInControls?: boolean
  control?: PropPresentationControl
  options?: unknown[]
  type?: string
  defaultValue?: unknown
  table?: {
    type?: string
    defaultValue?: string
  }
}

export type ReusablePropPresentation = PropPresentation

export type PropPresentationMap = Record<string, PropPresentation>
