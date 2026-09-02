import { getChildTestProps, useTestAttribute } from '@helpers/hooks/useTestAttribute'
import { TestingProps } from '@helpers/typesHelpers'
import { Button } from '@src/button'
import { Dropdown } from '@src/dropdown'
import { DropdownProps } from '@src/dropdown/types'
import React, { ReactNode } from 'react'

import { ArrowDown1, UserAccount } from '@kaspersky/hexa-ui-icons/16'

import styles from '../TopNavigation.module.scss'

export type AccountMenuProps = {
  /** Title for dropdown button (e.g. username or email) */
  title?: string,
  /** Icon before title, default is UserAccount */
  iconBefore?: ReactNode,
  /** Props for account menu */
  dropdownMenuProps: DropdownProps,
} & TestingProps

export const AccountMenu = ({
  title,
  iconBefore,
  dropdownMenuProps,
  ...props
}: AccountMenuProps): JSX.Element => {
  const { testAttributes } = useTestAttribute(props)

  return (
    <Dropdown
      {...getChildTestProps('account-dropdown', testAttributes, false, true)}
      {...dropdownMenuProps}
    >
      <Button
        {...getChildTestProps('account-button', testAttributes, false, true)}
        mode="secondary"
        iconBefore={iconBefore ?? <UserAccount />}
        iconAfter={<ArrowDown1 />}
        style={{ maxWidth: 250 }}
        className={styles.accountButton}
      >
        {title}
      </Button>
    </Dropdown>
  )
}
