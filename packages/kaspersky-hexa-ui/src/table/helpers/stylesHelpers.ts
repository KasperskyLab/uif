import { getTextSizes } from '@design-system/tokens'
import { CSSProperties } from 'react'

import { TextTypes } from '@kaspersky/hexa-ui-core/typography/js'

import { ITableProps } from '../types'

/** The pixel values the table is built from, in one place. */
export const tableSizes = {
  headSizes: getTextSizes(TextTypes.BTM3),
  cellSizes: getTextSizes(TextTypes.BTR3),
  dragHandler: {
    size: 20
  }
}

type ClippingProps = Pick<ITableProps, 'columnVerticalAlign' | 'rowMode'>

export const getCellPadding = ({ rowMode = 'standard' }: Pick<ITableProps, 'rowMode'>) =>
  rowMode === 'standard' ? { top: '10px', bottom: '9px' } : { top: '4px', bottom: '3px' }

const getAlignStyles = (props: ClippingProps, fromLine: string) => {
  const padding = getCellPadding(props)

  switch (props.columnVerticalAlign) {
    case 'middle':
      return {
        top: '50%',
        bottom: 'auto',
        marginTop: `calc(${tableSizes.cellSizes.lineHeight} / -2 + ${fromLine})`
      }
    case 'bottom':
      return {
        top: 'auto',
        bottom: `calc(${padding.bottom} + ${fromLine})`,
        marginTop: '0px'
      }
    default:
      return {
        top: `calc(${padding.top} + ${fromLine})`,
        bottom: 'auto',
        marginTop: '0px'
      }
  }
}

export const getClippingStyle = (props: ClippingProps): CSSProperties => {
  const line = getAlignStyles(props, '0px')
  const toggle = getAlignStyles(props, '2px')

  return {
    '--table-clip-line-top': line.top,
    '--table-clip-line-bottom': line.bottom,
    '--table-clip-line-margin-top': line.marginTop,
    '--table-clip-toggle-top': toggle.top,
    '--table-clip-toggle-bottom': toggle.bottom,
    '--table-clip-toggle-margin-top': toggle.marginTop,
    '--table-clip-line-height': tableSizes.cellSizes.lineHeight,
    '--table-clip-padding-top': getCellPadding(props).top
  } as CSSProperties
}
