import { Button } from '@src/button'
import { Checkbox } from '@src/checkbox'
import { CodeViewer } from '@src/code-viewer'
import { Calendar, RangePicker } from '@src/datepicker'
import { Textbox } from '@src/input'
import { Link } from '@src/link'
import { Radio } from '@src/radio'
import { Search } from '@src/search'
import { SegmentedButton } from '@src/segmented-button'
import { Select } from '@src/select'
import { Status } from '@src/status'
import { Tag } from '@src/tag'
import { TimeInput } from '@src/time-input'
import { Toggle } from '@src/toggle'
import { ToggleButtonGroup } from '@src/toggle-button/ToggleButtonGroup'
import { Text } from '@src/typography'
import { Uploader } from '@src/upload'
import React, { ReactElement } from 'react'

import { FieldSetControlConfig } from './types'

export const getMappedControl = (control: FieldSetControlConfig): ReactElement => {
  switch (control.component) {
    case 'textbox': {
      const { component, ...props } = control
      return <Textbox {...props} />
    }
    case 'textbox-masked': {
      const { component, ...props } = control
      return <Textbox.Masked {...props} />
    }
    case 'textbox-number': {
      const { component, ...props } = control
      return <Textbox.Number {...props} />
    }
    case 'textbox-password': {
      const { component, ...props } = control
      return <Textbox.Password {...props} />
    }
    case 'textbox-textarea': {
      const { component, ...props } = control
      return <Textbox.Textarea {...props} />
    }
    case 'select': {
      const { component, ...props } = control
      return <Select {...props} />
    }
    case 'search': {
      const { component, ...props } = control
      return <Search {...props} />
    }
    case 'calendar': {
      const { component, ...props } = control
      return <Calendar {...props} />
    }
    case 'range-picker': {
      const { component, ...props } = control
      return <RangePicker {...props} />
    }
    case 'time-input': {
      const { component, ...props } = control
      return <TimeInput {...props} />
    }
    case 'code-viewer': {
      const { component, ...props } = control
      return <CodeViewer {...props} />
    }
    case 'button': {
      const { component, ...props } = control
      return <Button {...props} />
    }
    case 'split-button': {
      const { component, ...props } = control
      return <Button.SplitButton {...props} />
    }
    case 'segmented-button': {
      const { component, ...props } = control
      return <SegmentedButton {...props} />
    }
    case 'checkbox': {
      const { component, ...props } = control
      return <Checkbox {...props} />
    }
    case 'checkbox-group': {
      const { component, ...props } = control
      return <Checkbox.Group {...props} />
    }
    case 'radio': {
      const { component, ...props } = control
      return <Radio {...props} />
    }
    case 'toggle': {
      const { component, ...props } = control
      return <Toggle {...props} />
    }
    case 'toggle-button-group': {
      const { component, ...props } = control
      return <ToggleButtonGroup {...props} />
    }
    case 'link': {
      const { component, ...props } = control
      return <Link {...props} />
    }
    case 'text': {
      const { component, ...props } = control
      return <Text {...props} />
    }
    case 'status': {
      const { component, ...props } = control
      return <Status {...props} />
    }
    case 'tag-group': {
      const { component, ...props } = control
      return <Tag.Group {...props} />
    }
    case 'status-group': {
      const { component, ...props } = control
      return <Status.Group {...props} />
    }
    case 'uploader': {
      const { component, ...props } = control
      return <Uploader {...props} />
    }
    default:
      return <></>
  }
}
