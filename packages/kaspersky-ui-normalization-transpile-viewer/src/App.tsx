import { useState, useCallback, useMemo, useEffect } from 'react'
import { ConfigProvider } from '@kaspersky/hexa-ui/design-system/context/provider'
import { ThemeKey } from '@kaspersky/hexa-ui/design-system'
import { GlobalStyle } from '@kaspersky/hexa-ui/design-system/global-style'
import {
  Button,
  Tree,
  PageHeader,
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

const layoutStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '100%',
  overflow: 'hidden',
}

const contentRowStyle: React.CSSProperties = {
  display: 'flex',
  flex: 1,
  minHeight: 0,
  width: '100%',
}

const sidebarStyle: React.CSSProperties = {
  width: 280,
  flexShrink: 0,
  padding: 16,
  borderRight: '1px solid var(--tagsoutlined--neutral-border, #E7E7E9)',
  background: 'var(--surface--neutral, #FFFFFF)',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
}

const mainStyle: React.CSSProperties = {
  flex: 1,
  minWidth: 0,
  padding: 24,
  overflow: 'auto',
  background: 'var(--surface--neutral-subtle, #F7F7F8)',
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
        <PageHeader
          title="View Transpile — Формы из DSL"
          description="Выберите каталог с .js-файлами форм. В меню слева — идентификаторы форм, заголовок формы — свойство name."
        />
        <div style={{ padding: '0 24px 16px' }}>
          <Space size={16} direction="vertical" style={{ width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
              <Button
                mode="primary"
                text="Выбрать каталог"
                onClick={selectDirectory}
                iconBefore={<Folder />}
              />
              {restoringDirectory && (
                <Text type="BTR3" style={{ color: 'var(--text--secondary)' }}>
                  Восстановление каталога…
                </Text>
              )}
              {directoryName && (
                <Text type="BTR3" style={{ color: 'var(--text--secondary)' }}>
                  Каталог: {directoryName}
                </Text>
              )}
            </div>

            {showMessage && (
              <SectionMessage mode="warning" title="Внимание" closable onClose={clearMessageError}>
                {messageText}
              </SectionMessage>
            )}

            {loadError && (
              <SectionMessage mode="error" title="Ошибка загрузки формы" closable onClose={() => {}}>
                {loadError}
              </SectionMessage>
            )}
          </Space>
        </div>

        <div style={contentRowStyle}>
          {directoryHandle && (
            <aside style={sidebarStyle}>
              <Text type="BTR2" style={{ marginBottom: 8, display: 'block' }}>
                Формы
              </Text>
              {loading ? (
                <Text type="BTR3" style={{ color: 'var(--text--secondary)' }}>
                  Загрузка списка…
                </Text>
              ) :               menuTreeData.length > 0 ? (
                <div className="form-forms-nav">
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
                  В выбранном каталоге нет файлов .js
                </SectionMessage>
              )}
            </aside>
          )}

          <main style={mainStyle}>
            {fileLoading ? (
              <Text type="BTR3" style={{ color: 'var(--text--secondary)' }}>
                Загрузка формы…
              </Text>
            ) : formData ? (
              <Card mode="filled" size="medium">
                <H6 style={{ marginTop: 0, marginBottom: 16 }}>
                  {formData.name || formData.id}
                </H6>
                <FormRenderer
                  elements={formData.elements}
                  formKey={selectedFile?.path ?? ''}
                  formDirectoryHandle={formDirectoryHandle}
                />
              </Card>
            ) : (
              <Text type="BTR3" style={{ color: 'var(--text--secondary)' }}>
                Выберите форму в меню слева.
              </Text>
            )}
          </main>
        </div>
      </div>
    </ConfigProvider>
  )
}

export default App
