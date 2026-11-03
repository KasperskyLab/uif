import { textReducerStyles as reducer } from '@helpers/components/TextReducer'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { TestingProps } from '@helpers/typesHelpers'
import cn from 'classnames'
import React, { ReactNode } from 'react'

export const ELLIPSIS_TITLE_CLASS = 'hexa-ui-ellipsis-title'

type ColumnTitleProps = TestingProps & {
  children?: ReactNode
  className?: string
}

export const ColumnTitle = ({ children, className, ...props }: ColumnTitleProps): JSX.Element => {
  const { testAttributes } = useTestAttribute(props)

  return (
    <div className={cn(className, reducer.container, reducer.stretch)} {...testAttributes}>
      <div className={cn(reducer.wrapper, ELLIPSIS_TITLE_CLASS)}>{children}</div>
    </div>
  )
}
