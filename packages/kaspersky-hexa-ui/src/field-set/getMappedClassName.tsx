import { FieldProps } from '@src/field'
import cn from 'classnames'

type WrapperClassNames = FieldProps['wrapperClassNames']

type MappedClassName = {
  className?: string,
  wrapperClassNames?: WrapperClassNames,
  fieldClassName?: string,
  fieldWrapperClassNames?: WrapperClassNames
}

type MappedClassNameReturn = Omit<MappedClassName, 'fieldClassName' | 'fieldWrapperClassNames'>

export const getMappedClassName = ({
  className,
  wrapperClassNames,
  fieldClassName,
  fieldWrapperClassNames
}: MappedClassName): MappedClassNameReturn => {
  const newClassName = cn(className, fieldClassName)
  let newWrapperClassNames: WrapperClassNames

  if (wrapperClassNames || fieldWrapperClassNames) {
    newWrapperClassNames = {}
    newWrapperClassNames.labelClassName = cn(wrapperClassNames?.labelClassName, fieldWrapperClassNames?.labelClassName)
    newWrapperClassNames.controlClassName = cn(wrapperClassNames?.controlClassName, fieldWrapperClassNames?.controlClassName)
  }

  return { className: newClassName, wrapperClassNames: newWrapperClassNames }
}
