import { useState, useCallback, useMemo, useEffect, useRef } from 'react'
import { ConfigProvider } from '@kaspersky/hexa-ui/design-system/context/provider'
import { ThemeKey } from '@kaspersky/hexa-ui/design-system'
import { GlobalStyle } from '@kaspersky/hexa-ui/design-system/global-style'
import {
  Button,
  Tree,
  Space,
  SectionMessage,
  Text,
  H6,
  Card,
} from '@kaspersky/hexa-ui'
import type { DataNode } from '@kaspersky/hexa-ui'
import { Folder } from '@kaspersky/hexa-ui-icons/16'
import { useDirectoryPicker } from '@/hooks/useDirectoryPicker'
import { useFormFilesList, findFileInTree } from '@/hooks/useFormFilesList'
import { useFormLoader } from '@/hooks/useFormLoader'
import { FormRenderer } from '@/components/FormRenderer'
import type { FormFileNode } from '@/hooks/useFormFilesList'
import { getFormPathFromSearch, setFormPathInUrl } from '@/utils/formUrlSync'

const layoutStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  height: '100vh',
  width: '100%',
  overflow: 'hidden',
}

const appChromeSidebarStyle: React.CSSProperties = {
  width: 300,
  flexShrink: 0,
  padding: 16,
  borderRight: '1px solid var(--tagsoutlined--neutral-border, #E7E7E9)',
  background: 'var(--surface--neutral, #FFFFFF)',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: 12,
}

const sidebarFormsBlockStyle: React.CSSProperties = {
  borderTop: '1px solid var(--tagsoutlined--neutral-border, #E7E7E9)',
  marginTop: 4,
  paddingTop: 12,
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  flex: 1,
  minHeight: 0,
}

const mainStyle: React.CSSProperties = {
  flex: 1,
  minWidth: 0,
  minHeight: 0,
  padding: 16,
  overflow: 'auto',
  background: 'var(--surface--neutral-subtle, #F7F7F8)',
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
}

function buildMenuTree(nodes: FormFileNode[]): DataNode[] {
  return nodes.map((n) => ({
    key: n.key,
    title: n.title,
    isLeaf: n.isLeaf,
    children: n.children?.length
      ? buildMenuTree(n.children)
      : undefined,
  }))
}

function App() {
  const [themeKey] = useState<ThemeKey>(ThemeKey.Light)
  const {
    directoryHandle,
    directoryName,
    selectDirectory,
    error: pickerError,
    clearError: clearPickerError,
    restoringDirectory,
  } = useDirectoryPicker({ persistenceKey: 'transpile-viewer' })
  const { treeNodes, loading, error: listError, clearError: clearListError } =
    useFormFilesList(directoryHandle)
  const {
    selectedFile,
    formData,
    loading: fileLoading,
    loadError,
    loadFile,
  } = useFormLoader()

  const urlFormPrevRef = useRef<string | null>(null)
  useEffect(() => {
    const p = selectedFile?.path ?? null
    if (p) {
      setFormPathInUrl(p)
    } else if (urlFormPrevRef.current !== null) {
      setFormPathInUrl(null)
    }
    urlFormPrevRef.current = p
  }, [selectedFile?.path])

  useEffect(() => {
    if (!directoryHandle || loading || restoringDirectory) return
    const want = getFormPathFromSearch()
    if (!want) return
    if (selectedFile?.path === want) return
    const found = findFileInTree(treeNodes, want)
    if (!found) return
    void loadFile({ path: found.path, handle: found.handle })
  }, [
    directoryHandle,
    loading,
    restoringDirectory,
    treeNodes,
    selectedFile?.path,
    loadFile,
  ])

  const [formDirectoryHandle, setFormDirectoryHandle] =
    useState<FileSystemDirectoryHandle | null>(null)

  useEffect(() => {
    if (!directoryHandle || !selectedFile) {
      setFormDirectoryHandle(null)
      return
    }
    const path = selectedFile.path
    const parts = path.split('/').filter(Boolean).slice(0, -1)
    if (parts.length === 0) {
      setFormDirectoryHandle(directoryHandle)
      return
    }
    let cancelled = false
    ;(async () => {
      try {
        let dir: FileSystemDirectoryHandle = directoryHandle
        for (const p of parts) {
          dir = await dir.getDirectoryHandle(p)
        }
        if (!cancelled) setFormDirectoryHandle(dir)
      } catch {
        if (!cancelled) setFormDirectoryHandle(null)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [directoryHandle, selectedFile?.path])

  const menuTreeData = useMemo(() => buildMenuTree(treeNodes), [treeNodes])

  const handleTreeSelect = useCallback(
    (_: unknown, info: { node: { key: string } }) => {
      const found = findFileInTree(treeNodes, String(info.node.key))
      if (found) loadFile({ path: found.path, handle: found.handle })
    },
    [treeNodes, loadFile]
  )

  const showMessage = pickerError || listError
  const messageText = pickerError || listError || ''
  const clearMessageError = useCallback(() => {
    clearPickerError()
    clearListError()
  }, [clearPickerError, clearListError])

  return (
    <ConfigProvider theme={themeKey}>
      <GlobalStyle />
      <div style={layoutStyle}>
        <aside className="app-chrome-sidebar" style={appChromeSidebarStyle}>
          <H6 style={{ margin: 0, lineHeight: 1.3 }}>
            View Transpile — Формы из DSL
          </H6>
          <Text
            type="BTR3"
            style={{
              margin: 0,
              color: 'var(--text--secondary)',
              lineHeight: 1.45,
            }}
          >
            Выберите каталог с DSL форм (`*.schema.ts`). В дереве ниже — файлы;
            заголовок формы — свойство name.
          </Text>
          <Button
            mode="primary"
            text="Выбрать каталог"
            onClick={selectDirectory}
            iconBefore={<Folder />}
            style={{ width: '100%', justifyContent: 'center' }}
          />
          {restoringDirectory && (
            <Text type="BTR3" style={{ color: 'var(--text--secondary)' }}>
              Восстановление каталога…
            </Text>
          )}
          {directoryName ? (
            <Text
              type="BTR3"
              style={{ color: 'var(--text--secondary)', wordBreak: 'break-word' }}
            >
              Каталог: {directoryName}
            </Text>
          ) : null}

          {directoryHandle ? (
            <div style={sidebarFormsBlockStyle}>
              <Text type="BTR2" style={{ margin: 0, display: 'block' }}>
                Формы
              </Text>
              {loading ? (
                <Text type="BTR3" style={{ color: 'var(--text--secondary)' }}>
                  Загрузка списка…
                </Text>
              ) : menuTreeData.length > 0 ? (
                <div
                  className="form-forms-nav"
                  style={{ flex: 1, minHeight: 0, overflow: 'auto' }}
                >
                  <Tree
                    treeData={menuTreeData}
                    selectable
                    {...({
                      onSelect: handleTreeSelect,
                      defaultExpandAll: false,
                      style: { background: 'transparent' },
                    } as Record<string, unknown>)}
                  />
                </div>
              ) : (
                <SectionMessage mode="info" title="Нет файлов форм">
                  В выбранном каталоге нет файлов *.schema.ts
                </SectionMessage>
              )}
            </div>
          ) : null}
        </aside>

        <main style={mainStyle}>
          <Space size={12} direction="vertical" style={{ width: '100%' }}>
            {showMessage && (
              <SectionMessage
                mode="warning"
                title="Внимание"
                closable
                onClose={clearMessageError}
              >
                {messageText}
              </SectionMessage>
            )}

            {loadError && (
              <SectionMessage
                mode="error"
                title="Ошибка загрузки формы"
                closable
                onClose={() => {}}
              >
                {loadError}
              </SectionMessage>
            )}
          </Space>

          {fileLoading ? (
            <Text type="BTR3" style={{ color: 'var(--text--secondary)' }}>
              Загрузка формы…
            </Text>
          ) : formData ? (
            <Card mode="filled" size="medium" style={{ flex: 1, minHeight: 0 }}>
              <H6 style={{ marginTop: 0, marginBottom: 16 }}>
                {formData.id}
              </H6>
              <FormRenderer
                elements={formData.elements}
                formKey={selectedFile?.path ?? ''}
                formDirectoryHandle={formDirectoryHandle}
                formHandlers={formData.handlers ?? null}
              />
            </Card>
          ) : (
            <Text type="BTR3" style={{ color: 'var(--text--secondary)' }}>
              {directoryHandle
                ? 'Выберите форму в дереве слева.'
                : 'Выберите каталог с формами слева.'}
            </Text>
          )}
        </main>
      </div>
    </ConfigProvider>
  )
}

export default App
