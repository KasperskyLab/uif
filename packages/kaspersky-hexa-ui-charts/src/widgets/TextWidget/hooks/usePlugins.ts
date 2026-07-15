import { useMemo } from 'react'

import { createLinkPlugin, CustomFormats, LinkPlugin, type LinkPopupProps, type PluginsFlat, type PluginsGrouped } from '@kaspersky/hexa-ui'

export const usePlugins = (
  allPlugins: PluginsGrouped,
  translate?: { linkPopupText?: Pick<LinkPopupProps, 'label' | 'buttonText'> }
) => {
  const LinkPluginTranslated = useMemo(
    () =>
      (translate?.linkPopupText && createLinkPlugin(translate.linkPopupText)) ||
      LinkPlugin,
    [translate?.linkPopupText]
  )
  return useMemo(
    () =>
      allPlugins.map((group: PluginsFlat) => {
        const filteredGroup: PluginsFlat = group.map(
          (plugin) => {
            if ('elementType' in plugin && plugin.elementType === CustomFormats.LINK) {
              return LinkPluginTranslated
            }

            return plugin
          }
        )

        return filteredGroup
      }),
    []
  )
}
