import React from 'react'

import { AnchorNavigation as HexaAnchorNavigation } from '@src/anchor-navigation'
import { AnchorNavigationProps } from '@src/anchor-navigation/types'

import {
  PreviewSurface,
  previewAnchorItems,
  previewLongText
} from '../../preview'

const AnchorNavigation = ({
  children,
  items = previewAnchorItems,
  ...props
}: AnchorNavigationProps): JSX.Element => (
  <PreviewSurface minHeight={320}>
    <HexaAnchorNavigation items={items} {...props}>
      {children ?? (
        <div>
          <section id="overview" style={{ marginBottom: 24 }}>
            <h3>Overview</h3>
            <p>{previewLongText}</p>
          </section>
          <section id="details" style={{ marginBottom: 24 }}>
            <h3>Details</h3>
            <p>{previewLongText}</p>
          </section>
          <section id="notes">
            <h3>Notes</h3>
            <p>{previewLongText}</p>
          </section>
        </div>
      )}
    </HexaAnchorNavigation>
  </PreviewSurface>
)

export default AnchorNavigation
