import { ComponentProps } from 'react'
import { Text } from '../typography'

export interface IExpandableTextProps extends ComponentProps<typeof Text> {
  altText?: string
}

export interface IStyledTextProps {
  expanded: boolean,
  clipped: boolean
}
