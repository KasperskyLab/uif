import { Space } from '@src/space'
import { Text } from '@src/typography'
import cn from 'classnames'
import React from 'react'

import { StatusNoThreadSolid, StatusOkSolid } from '@kaspersky/hexa-ui-icons/16'

import { ValidationRule } from './types'
import styles from './ValidationRules.module.scss'

export function ValidationRules ({ rules = [] }: {rules?: ValidationRule[]}) {
  return (
    <Space gap="related">
      {rules.map((rule) => (
        <Space
          gap="related"
          wrap="nowrap"
          align="start"
          key={rule.message}
          className={cn(styles.ruleItem, {
            [styles.valid]: rule.isValid
          })}
        >
          <Text type="BTR4" className={styles.ruleIcon}>
            {rule.isValid ? <StatusOkSolid /> : <StatusNoThreadSolid />}
          </Text>
          <Text type="BTR4" className={styles.ruleContent}>
            {rule.message}
          </Text>
        </Space>
      ))}
    </Space>
  )
}
