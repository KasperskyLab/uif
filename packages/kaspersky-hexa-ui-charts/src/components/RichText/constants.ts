import { CustomFormats, CustomTextKey } from './customTypes'

export const LEAF_FORMAT_TYPES: Record<string, CustomTextKey> = {
  BOLD: CustomFormats.BOLD,
  UNDERLINE: CustomFormats.UNDERLINE,
  CODE: CustomFormats.CODE
} as const

export const LIST_TYPES = [CustomFormats.NUMBERED_LIST, CustomFormats.BULLETED_LIST] as const

export const BLOCK_STYLE_TYPES = [
  CustomFormats.ALIGN_LEFT,
  CustomFormats.ALIGN_CENTER,
  CustomFormats.ALIGN_RIGHT
] as const

export const ELEMENT_TYPES = [
  CustomFormats.BULLETED_LIST,
  CustomFormats.NUMBERED_LIST,
  CustomFormats.HEADING_ONE,
  CustomFormats.HEADING_TWO,
  CustomFormats.HEADING_THREE
]
