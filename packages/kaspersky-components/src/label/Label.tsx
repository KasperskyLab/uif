import React, { FC } from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import { SPACES } from '@design-system/theme/themes/variables'
import { Text } from '@src/typography/text'
import { Icon } from '@src/icon'
import { Tooltip } from '@src/tooltip'
import { labelCss } from './labelCss'
import { LabelProps, LabelViewProps } from './types'
import { useThemedLabel } from './useThemedLabel'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

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
export const LabelView: FC<LabelViewProps> = ({
  text,
  errorText,
  children,
  tooltip,
  required,
  type = 'default',
  position = 'top',
  className,
  testAttributes,
  ...rest
}: LabelViewProps) => {
  const labelClassName = classNames(
    { 'error-text': errorText },
    `label-position-${position}`,
    `label-type-${type}`,
    className
  )
  return (
    <StyledLabel
      {...testAttributes}
      {...rest}
      className={labelClassName}
      role='label'
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
          <Tooltip placement='top' text={tooltip}>
            <HintIcon size='small' name='Info' color="#2A3541B2" />
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

export const Label: FC<LabelProps> = (rawProps: LabelProps) => {
  const themedProps = useThemedLabel(rawProps)
  const props = useTestAttribute(themedProps)
  return <LabelView {...props} />
}
