import { SectionMessage } from '@src/section-message'
import React, { FC, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

interface CodeCompareBodyProps {
  oldValue?: string,
  newValue?: string,
  children: ReactNode
}

export const CodeCompareBody: FC<CodeCompareBodyProps> = ({ oldValue, newValue, children }) => {
  const { t } = useTranslation()

  const noValues = oldValue === undefined || newValue === undefined
  const valuesEmpty = !oldValue && !newValue
  const valuesEqual = oldValue === newValue

  if (noValues) {
    return null
  } else if (valuesEmpty) {
    return <SectionMessage mode="info" closable={false}>{t('codeCompare.empty')}</SectionMessage>
  } else if (valuesEqual) {
    return <SectionMessage mode="info" closable={false}>{t('codeCompare.noChanges')}</SectionMessage>
  } else {
    return <>{children}</>
  }
}
