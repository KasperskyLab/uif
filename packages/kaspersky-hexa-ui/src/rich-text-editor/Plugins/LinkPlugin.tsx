import { Size } from '@design-system/types'
import { ActionButton } from '@src/action-button'
import { Link } from '@src/link'
import React from 'react'
import { Editor } from 'slate'

import { Link as IconLink, Unlink } from '@kaspersky/hexa-ui-icons/16'

import { LinkPopup } from '../components'
import { CustomFormats } from '../customTypes'
import { removeEmptyNodeBehavior } from '../helpers/removeEmptyNodeBehavior'
import { ToolbarButtonWrapper } from '../Toolbar'
import { CustomPluginActionProps, ElementPluginType } from '../types'

import style from './LinkPlugin.module.scss'

export const LinkPlugin: ElementPluginType = {
  elementType: CustomFormats.LINK,
  hotKey: 'mod+k',
  inline: true,
  behavior: {
    onNormalizeNode: removeEmptyNodeBehavior(CustomFormats.LINK),
    onBreak: ({ editor, next }) => {
      next()
      Editor.removeMark(editor, CustomFormats.LINK)
    }
  },
  render: ({ children, element }) => {
    if ('url' in element) {
      const url = element.url

      return (
        <Link className={style.linkPluginTextOverride} href={url}>
          {children}
        </Link>
      )
    }

    return children
  },
  customAction: ({ editor, isActive }) => {
    return (
      <LinkPopup
        key={CustomFormats.LINK}
        Component={(
          <ToolbarButtonWrapper>
            <ActionButton
              size={Size.Small}
              icon={isActive ? <Unlink /> : <IconLink />}
            />
          </ToolbarButtonWrapper>
        )}
        editor={editor}
        format={CustomFormats.LINK}
      />
    )
  }
}

export const createLinkPlugin = ({
  label,
  buttonText
}: {
  label?: string;
  buttonText?: { ok?: string; cancel?: string };
}): ElementPluginType => {
  return {
    ...LinkPlugin,
    customAction: ({ editor, isActive }: CustomPluginActionProps) => {
      return (
        <LinkPopup
          label={label}
          buttonText={buttonText}
          Component={(
            <ToolbarButtonWrapper>
              <ActionButton
                size={Size.Small}
                icon={isActive ? <Unlink /> : <IconLink />}
              />
            </ToolbarButtonWrapper>
          )}
          editor={editor}
          format={CustomFormats.LINK}
        />
      )
    }
  }
}
