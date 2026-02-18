import { Checkbox } from '@src/checkbox'
import { IconResolver } from '@src/icon'
import { Radio } from '@src/radio'
import { Toggle } from '@src/toggle'
import { Text } from '@src/typography'
import React, { ReactElement } from 'react'

import { ElementAfter, ElementBefore } from './types'

export const getMappedElement = (element: ElementBefore | ElementAfter): ReactElement => {
  switch (element.component) {
    case 'checkbox': {
      const { component, ...props } = element
      return <Checkbox {...props} />
    }
    case 'radio': {
      const { component, ...props } = element
      return <Radio {...props} />
    }
    case 'toggle': {
      const { component, ...props } = element
      return <Toggle {...props} />
    }
    case 'icon': {
      const { component, ...props } = element
      return <IconResolver {...props} />
    }
    case 'text': {
      const { component, ...props } = element
      return <Text {...props} />
    }
    default:
      return <></>
  }
}
