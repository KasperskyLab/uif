import { useState, useMemo } from 'react'
import { Button, Text, H6, Space } from '@kaspersky/hexa-ui'
import { Cross, Copy } from '@kaspersky/hexa-ui-icons/16'
import type { FormData } from '../types/form-dsl'
import { formToTs, formToJsonString } from '../types/form-dsl'

type ExportTab = 'ts' | 'json'

const tabLabels: Record<ExportTab, string> = {
  ts: 'TS модуль (.ts)',
  json: 'JSON',
}

export function CodeExportDialog({
  formData,
  onClose,
}: {
  formData: FormData
  onClose: () => void
}) {
  const [activeTab, setActiveTab] = useState<ExportTab>('ts')
  const [copied, setCopied] = useState(false)

  const code = useMemo(() => {
    switch (activeTab) {
      case 'ts': return formToTs(formData)
      case 'json': return formToJsonString(formData)
    }
  }, [formData, activeTab])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = code
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'rgba(0,0,0,0.4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        background: 'var(--surface--neutral, #fff)',
        borderRadius: 12,
        width: '80vw',
        maxWidth: 900,
        maxHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid #e7e7e9' }}>
          <H6 style={{ margin: 0 }}>Экспорт DSL</H6>
          <Button mode="tertiary" iconBefore={<Cross />} onClick={onClose} size="small" />
        </div>
        <div style={{ display: 'flex', gap: 8, padding: '12px 20px 0', flexWrap: 'wrap' }}>
          {(Object.keys(tabLabels) as ExportTab[]).map((tab) => (
            <Button
              key={tab}
              mode={activeTab === tab ? 'primary' : 'secondary'}
              text={tabLabels[tab]}
              onClick={() => { setActiveTab(tab); setCopied(false) }}
              size="small"
            />
          ))}
        </div>
        <div style={{ flex: 1, overflow: 'auto', padding: '12px 20px' }}>
          <pre style={{
            background: '#1e1e1e',
            color: '#d4d4d4',
            padding: 16,
            borderRadius: 8,
            fontSize: 13,
            lineHeight: 1.5,
            overflow: 'auto',
            margin: 0,
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}>
            {code}
          </pre>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, padding: '12px 20px 16px', borderTop: '1px solid #e7e7e9' }}>
          <Space size={8}>
            <Text type="BTR3" style={{ color: copied ? 'var(--primary--main, #00a88e)' : 'transparent' }}>
              Скопировано!
            </Text>
            <Button mode="primary" text="Копировать" iconBefore={<Copy />} onClick={handleCopy} />
            <Button mode="secondary" text="Закрыть" onClick={onClose} />
          </Space>
        </div>
      </div>
    </div>
  )
}
