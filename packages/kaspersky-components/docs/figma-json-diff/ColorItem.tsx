import React from 'react'
import cn from 'classnames'
import { Tooltip } from 'antd'
import { hexToRGBA } from './hex-to-rgba'
import { ColorItemRow, TooltipRow } from './diffCss'
import { ICON } from './MergingTable'
import { ColorInfo, ColorItemProps } from './types'

type ColorValueProp = {
  colorValue: ColorInfo
}

export const ColorItem = ({ index, colorName, colorValue }: ColorItemProps) => (
  <ColorItemRow
    className={cn({
      'json-color-removed': colorValue.removed,
      'json-color-deprecated': colorValue.deprecated,
      'json-color-affected': colorValue.affected,
      'json-color-new': colorValue.isNew
    }
    )}>
    <div className='json-color-index'>{index}</div>
    <ColorBox colorValue={colorValue} />
    <div className='json-color-name'>
      <ResolveIconStatus colorValue={colorValue} />
      <div>{colorName}</div>
    </div>
    <ResolveColor color={colorValue?.value} />
  </ColorItemRow>
)

const ColorBox = ({ colorValue }: ColorValueProp) => (
  <Tooltip
    placement='right'
    autoAdjustOverflow={false}
    arrowPointAtCenter
    title={<RenderAllColorProps colorValue={colorValue}/>}
  >
    <div className='json-color-box' style={{ backgroundColor: colorValue?.value || 'red' }}/>
  </Tooltip>
)

const RenderAllColorProps = ({ colorValue }: ColorValueProp) => (
  <div>
    {Object.entries(colorValue).map(([propKey, propValue]) =>
      propKey
        ? <TooltipRow key={propKey}>
            <span>{propKey}:</span>
            <span>{String(propValue)}</span>
          </TooltipRow>
        : null
    )}
  </div>
)

const ResolveIconStatus = ({ colorValue }: ColorValueProp) => (
  <div className='json-color-status'>{[
    colorValue.deprecated && ICON.deprecated,
    colorValue.removed && ICON.removed,
    colorValue.affected && ICON.affected,
    colorValue.isNew && ICON.isNew
  ].filter(Boolean)}</div>
)

const ResolveColor = ({ color }: { color?: string }) => (
  color
    ? <div className='json-color-value'>
        <div className='json-color-value-original'>{color}</div>
        { color.startsWith('#') && <div>{hexToRGBA(color)}</div> }
      </div>
    : null
)
