import {
  AddonPanel as InternalAddonPanel,
  Button as InternalButton,
  TooltipLinkList as InternalTooltipLinkList,
  WithTooltip as InternalWithTooltip
} from 'storybook/internal/components'
import type { Addon_ArgType as InternalAddonArgType } from 'storybook/internal/types'
import { addons, types } from 'storybook/manager-api'
import { create, ensure, ThemeProvider } from 'storybook/theming'
import { PureArgsTable, useOf } from '@storybook/addon-docs/blocks'

/**
 * Central adapter for Storybook imports that are known to move across versions.
 * Keep all direct dependencies on Storybook internals and semi-internal blocks here.
 */
export const StorybookManager = {
  addons,
  types
}

export const StorybookManagerUI = {
  AddonPanel: InternalAddonPanel,
  Button: InternalButton,
  TooltipLinkList: InternalTooltipLinkList,
  WithTooltip: InternalWithTooltip
}

export const StorybookDocs = {
  PureArgsTable,
  ThemeProvider,
  ensure,
  useOf
}

export const createStorybookTheme = create

export type StorybookArgType = InternalAddonArgType
