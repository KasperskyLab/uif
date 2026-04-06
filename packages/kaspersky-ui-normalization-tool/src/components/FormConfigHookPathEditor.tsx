import { useRef } from 'react'
import type { ChangeEvent, CSSProperties, ReactElement } from 'react'
import { Button, Text } from '@kaspersky/hexa-ui'
import { Cross } from '@kaspersky/hexa-ui-icons/16'

export interface FormConfigHookPathEditorProps {
  value: string | undefined
  onChange: (path: string | undefined) => void
  /** Зарезервировано под выбор из рабочей области (без изменения контракта). */
  formDirectoryHandle: FileSystemDirectoryHandle | null | undefined
  /** Например `{id}.config-hook.ts` */
  placeholder: string
}

function pathFromFile(file: File): string | null {
  const rel = (file as File & { webkitRelativePath?: string }).webkitRelativePath?.trim()
  const path =
    rel && rel.length > 0
      ? rel.replace(/\\/g, '/')
      : file.name
  return path.toLowerCase().endsWith('.ts') ? path : null
}

/**
 * Config hook формы: выбор .ts (нативный file input) + сворачиваемая справка.
 */
export function FormConfigHookPathEditor({
  value,
  onChange,
  formDirectoryHandle: _formDirectoryHandle,
  placeholder,
}: FormConfigHookPathEditorProps): ReactElement {
  const inputRef = useRef<HTMLInputElement>(null)
  const str = value ?? ''

  const rootStyle: CSSProperties = {
    width: '100%',
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    boxSizing: 'border-box',
  }

  const detailBodyStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    marginTop: 8,
    paddingTop: 2,
    borderLeft: '2px solid var(--tagsoutlined--neutral-border, #E7E7E9)',
    paddingLeft: 10,
    marginLeft: 2,
  }

  const snippetStyle: CSSProperties = {
    margin: 0,
    padding: '8px 10px',
    fontSize: 11,
    lineHeight: 1.45,
    fontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    background: 'var(--tagsoutlined--neutral-bg, #F4F4F5)',
    border: '1px solid var(--tagsoutlined--neutral-border, #E7E7E9)',
    borderRadius: 4,
    color: 'var(--text--primary)',
    overflowX: 'auto',
    whiteSpace: 'pre',
    maxWidth: '100%',
    boxSizing: 'border-box',
  }

  const hookSnippet = `export default () => ({
  onInit: async (s) => {
    await new Promise((r) => setTimeout(r, 0)) // загрузка
    s.mergeState?.({ foo: 'bar' })
  },
  onSubmit: async (s) => {
    console.log(s.state)
  },
  elements: {
    'control.id': (s) => ({ /* Hexa props */ }),
  },
})`

  const summaryStyle: CSSProperties = {
    cursor: 'pointer',
    userSelect: 'none',
    listStyle: 'none',
    fontSize: 13,
    fontWeight: 600,
    lineHeight: 1.35,
    color: 'var(--link--default, var(--text-accent, #0050cc))',
    textDecoration: 'underline',
    textUnderlineOffset: '2px',
  }

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file) return
    const path = pathFromFile(file)
    if (path) onChange(path)
  }

  return (
    <div style={rootStyle}>
      <Text type="BTR3" style={{ margin: 0, fontWeight: 600 }}>
        Config Hook
      </Text>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          width: '100%',
          minWidth: 0,
        }}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".ts"
          onChange={onFileChange}
          style={{ display: 'none' }}
          aria-hidden
        />
        <Button
          mode="secondary"
          size="small"
          text="Выбрать файл .ts"
          onClick={() => inputRef.current?.click()}
        />
        {str ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              minWidth: 0,
            }}
          >
            <Text
              type="BTR4"
              style={{
                flex: 1,
                minWidth: 0,
                color: 'var(--text--secondary)',
                wordBreak: 'break-all',
              }}
              title={str}
            >
              {str}
            </Text>
            <Button
              mode="tertiary"
              size="small"
              iconBefore={<Cross />}
              onClick={() => onChange(undefined)}
              aria-label="Сбросить путь к config hook"
            />
          </div>
        ) : (
          <Text
            type="BTR4"
            style={{ color: 'var(--text--secondary)', lineHeight: 1.45 }}
          >
            Относительный путь от каталога формы, например{' '}
            <span style={{ wordBreak: 'break-all' }}>{placeholder}</span>
          </Text>
        )}
      </div>
      <details
        style={{
          width: '100%',
          minWidth: 0,
          marginTop: 4,
          paddingTop: 10,
          borderTop: '1px solid var(--tagsoutlined--neutral-border, #E7E7E9)',
        }}
      >
        <summary
          className="form-config-hook-doc-summary"
          style={summaryStyle}
        >
          Описание config hook
        </summary>
        <div style={detailBodyStyle}>
          <pre style={snippetStyle}>{hookSnippet}</pre>
          <Text
            type="BTR4"
            style={{ color: 'var(--text--secondary)', lineHeight: 1.45 }}
          >
            Один файл .ts: default export — функция без аргументов; в объекте —
            опционально <span style={{ fontWeight: 600 }}>onInit</span> /{' '}
            <span style={{ fontWeight: 600 }}>onSubmit</span> и секция{' '}
            <span style={{ fontWeight: 600 }}>elements</span>: «control.id →
            хук». Имена onInit, onSubmit и elements на верхнем уровне
            зарезервированы (не как id контрола). Плоские ключи хуков на верхнем
            уровне — устаревший вид, поддерживается для совместимости.
          </Text>
          <Text
            type="BTR4"
            style={{ color: 'var(--text--secondary)', lineHeight: 1.45 }}
          >
            <span style={{ fontWeight: 600 }}>onInit</span> и{' '}
            <span style={{ fontWeight: 600 }}>onSubmit</span> по типу —
            синхронные или <span style={{ fontWeight: 600 }}>async</span> (
            <span style={{ fontFamily: 'monospace', fontSize: 11 }}>
              {'void | Promise<void>'}
            </span>
            ). Значения полей формы задаются через{' '}
            <span style={{ fontWeight: 600 }}>mergeState</span>, не через{' '}
            <span style={{ fontFamily: 'monospace', fontSize: 11 }}>
              {'return'}
            </span>
            .
          </Text>
          <Text
            type="BTR4"
            style={{ color: 'var(--text--secondary)', lineHeight: 1.45 }}
          >
            <span style={{ fontWeight: 600 }}>onInit</span> (опц.): один раз
            после загрузки модуля. FormSlice: начальный state, config.elements;
            mergeState(partial) — записать поля (после await и т.п.).
          </Text>
          <Text
            type="BTR4"
            style={{ color: 'var(--text--secondary)', lineHeight: 1.45 }}
          >
            <span style={{ fontWeight: 600 }}>onSubmit</span> (опц.): нативная
            отправка; FormRenderer добавляет HTML-тег form только при наличии
            колбэка. Актуальный FormSlice в аргументе. Кнопка Hexa: type:{' '}
            {'\u2018'}submit{'\u2019'}.
          </Text>
        </div>
      </details>
    </div>
  )
}
