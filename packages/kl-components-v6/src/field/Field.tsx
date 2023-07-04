import * as React from 'react'
import { Label } from '../label'
import { Icon } from '../icon'
import { Text } from '../typography'
import { FieldFlexContainer } from './fieldCss'
import { useThemedField } from './useThemedField'
import { FieldProps, IFieldViewProps } from './types'
import cn from 'classnames'

export const Field = (rawProps: FieldProps) => {
  const props = useThemedField(rawProps)

  return <FieldViewFlex data-component-id={props.klId} {...props} />
}

export const FieldViewFlex = ({
  label,
  stretch = false,
  labelPosition = 'top',
  cssConfig,
  control,
  helpTrigger,
  description,
  message,
  required
}: IFieldViewProps) => {
  return (
    <FieldFlexContainer
      className={cn(`_label-${labelPosition}`, { _stretch: stretch })}>
      {(label || labelPosition === 'before') && <Label
        text={label}
        required={required}
      />}
      <div className='field-box'>
        <div className='field-control-wrapper'>
          <div className='field-control'>
            {control}
          </div>
          {helpTrigger && <Icon
            size='small'
            name='Help'
            className='field-helpTrigger'
            color={cssConfig.mode.normal.helpIconColor}/>}
        </div>
        {description && <Text
          type='BTR4'
          className='field-subtext field-description'
          color='lga300'>{description}</Text>}
        {message && <Text
          type='BTR4'
          className='field-subtext field-description'
          color='red500'>{message}</Text>}
      </div>
    </FieldFlexContainer>
  )
}
