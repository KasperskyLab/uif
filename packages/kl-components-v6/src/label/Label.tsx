import * as React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import { SPACES } from '@design-system/theme/themes/variables'
import { Text } from '@src/typography/text'
import { Icon } from '@src/icon'
import { Tooltip } from '@src/tooltip'
import { labelCss } from './labelCss'
import { ILabelProps, LabelCssConfig } from './types'
import { useThemedLabel } from './useThemedLabel'

const StyledLabel = styled.label.withConfig({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`
  ${labelCss}
`

const StyledLabelContainer = styled.div`
  display: flex;
`
const HintIcon = styled(Icon)`
  align-self: center;
  cursor: pointer;
  margin: 0 ${SPACES[1]}px;
`
export const LabelView: React.FC<ILabelProps & { cssConfig: LabelCssConfig }> = (props): JSX.Element => {
  const {
    text,
    errorText,
    children,
    tooltip,
    required,
    type,
    position,
    className,
    ...restProps
  } = props
  const labelClassName = classNames(
    { 'error-text': errorText },
    `label-position-${position}`,
    `label-type-${type}`,
    className
  )
  return (
    <StyledLabel
      role='label'
      className={labelClassName}
      {...restProps}
    >
      {text &&
      <StyledLabelContainer>
        { typeof text === 'string'
          ? <Text
              type='BTR3'
              className={`label-text ${required ? 'required' : ''}`}
              >{text}</Text>
          : text
        }
        {tooltip &&
          <Tooltip placement='top' autoAdjustOverflow={false} arrowPointAtCenter title={tooltip}>
            <HintIcon size='extraSmall' name='Info' />
          </Tooltip>
        }
      </StyledLabelContainer>
      }
      <span className='label-item'>
        {children}
        {errorText &&
          <Text
            className='label-error'
            type='BTM4'
            themedColor='high'
          >
            {errorText}
          </Text>
        }
      </span>
    </StyledLabel>
  )
}

export const Label = (props: ILabelProps): JSX.Element => {
  const labelProps = useThemedLabel(props)
  return <LabelView
    {...labelProps}
  />
}
