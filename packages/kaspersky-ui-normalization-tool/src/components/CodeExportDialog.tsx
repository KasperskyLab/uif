import { useState, useEffect } from 'react'
import { Button, Text, H6, Space } from '@kaspersky/hexa-ui'
import { Cross, Copy } from '@kaspersky/hexa-ui-icons/16'
import type { FormData } from '../types/form-dsl'
import { loadFormDslBrowserRuntime } from '@normalization/load-form-dsl-runtime'

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
  const [code, setCode] = useState('')
  const [exportError, setExportError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    setExportError(null)
    setCode('')
    loadFormDslBrowserRuntime()
      .then((m) => {
        if (cancelled) return
        try {
          const next =
            activeTab === 'ts'
              ? m.formToTs(formData)
              : m.formToJsonString(formData)
          setCode(next)
        } catch (e) {
          setExportError(
            e instanceof Error ? e.message : 'Ошибка экспорта',
          )
        }
      })
      .catch((e) => {
        if (!cancelled) {
          setExportError(
            e instanceof Error ? e.message : 'Ошибка загрузки модуля DSL',
          )
        }
      })
    return () => {
      cancelled = true
    }
  }, [formData, activeTab])

  const handleCopy = async () => {
    if (!code) return
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
          {exportError ? (
            <Text type="BTR3" style={{ color: 'var(--severity--negative, #c00)' }}>
              {exportError}
            </Text>
          ) : null}
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
            {code || (exportError ? '' : 'Загрузка…')}
          </pre>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, padding: '12px 20px 16px', borderTop: '1px solid #e7e7e9' }}>
          <Space size={8}>
            <Text type="BTR3" style={{ color: copied ? 'var(--primary--main, #00a88e)' : 'transparent' }}>
              Скопировано!
            </Text>
            <Button mode="primary" text="Копировать" iconBefore={<Copy />} onClick={handleCopy} disabled={!code} />
            <Button mode="secondary" text="Закрыть" onClick={onClose} />
          </Space>
        </div>
      </div>
    </div>
  )
}
