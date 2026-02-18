import { getChildTestProps, useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { TestingProps } from '@helpers/typesHelpers'
import { Button } from '@src/button'
import { ButtonProps } from '@src/button/types'
import { Dropdown } from '@src/dropdown'
import { DropdownProps } from '@src/dropdown/types'
import React from 'react'

export type CenterButtonProps = {
  /** Title for dropdown button */
  title: string,
  /** Props for dropdown component */
  dropdownMenuProps: DropdownProps,
  /** Props for button component */
  buttonProps: ButtonProps
} & TestingProps

export const CenterButton = ({
  title,
  dropdownMenuProps,
  buttonProps,
  ...props
}: CenterButtonProps): JSX.Element => {
  const { testAttributes } = useTestAttribute(props)
  
  return (
    <Dropdown {...getChildTestProps('dropdown', testAttributes)} {...dropdownMenuProps}>
      <Button {...getChildTestProps('button', testAttributes)} {...buttonProps}>
        {title}
      </Button>
    </Dropdown>
  )
}
