import { useState, useCallback, useEffect, useRef } from 'react'
import { ConfigProvider } from '@kaspersky/hexa-ui/design-system/context/provider'
import { ThemeKey } from '@kaspersky/hexa-ui/design-system'
import { GlobalStyle } from '@kaspersky/hexa-ui/design-system/global-style'
import { Button, Tree, Space, SectionMessage, Text, H6, Tooltip } from '@kaspersky/hexa-ui'
import type { DataNode } from '@kaspersky/hexa-ui'
import { Folder, Save, Cross, Add, Delete, Copy } from '@kaspersky/hexa-ui-icons/16'
import { useDirectoryPicker } from './hooks/useDirectoryPicker'
import { useFormFilesList, findFileInTree } from './hooks/useFormFilesList'
import { useFormFile } from './hooks/useFormFile'
import { useHistory } from './hooks/useHistory'
import { ControlsPalette } from './components/ControlsPalette'
import { FormCanvas } from './components/FormCanvas'
import { FormEditorConfigHookProvider } from './context/FormEditorConfigHookContext'
import { WysiwygCanvas } from './components/WysiwygCanvas'
import { CodeExportDialog } from './components/CodeExportDialog'
import { PropertiesPanel } from './components/PropertiesPanel'
import {
  updateControlInTree,
  findControlInTree,
  removeControlFromTree,
} from './types/form-dsl'
import { createControl } from './controls/registry'
import { FORM_TEMPLATES } from './templates'
import type { FormControl, FormControlType } from './types/form-dsl'
import type { FormFileNode } from './hooks/useFormFilesList'
import { getFormPathFromSearch, setFormPathInUrl } from './utils/formUrlSync'

const appShellStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  height: '100vh',
  width: '100%',
  overflow: 'hidden',
}

const unifiedLeftSidebarStyle: React.CSSProperties = {
  flexShrink: 0,
  minHeight: 0,
  alignSelf: 'stretch',
  padding: 16,
  borderRight: '1px solid var(--tagsoutlined--neutral-border, #E7E7E9)',
  background: 'var(--surface--neutral, #FFFFFF)',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: 12,
}

const mainColumnStyle: React.CSSProperties = {
  flex: 1,
  minWidth: 0,
  minHeight: 0,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: 16,
  overflow: 'hidden',
}

const editorLayoutStyle: React.CSSProperties = {
  display: 'flex',
  flex: 1,
  minHeight: 0,
  minWidth: 0,
  overflow: 'hidden',
}

const MIN_PALETTE_WIDTH = 200
const MAX_PALETTE_WIDTH = 520
const MIN_PANEL_WIDTH = 200
const MAX_PANEL_WIDTH = 520
const RESIZER_WIDTH = 6

const resizerStyle: React.CSSProperties = {
  width: RESIZER_WIDTH,
  flexShrink: 0,
  cursor: 'col-resize',
  background: 'var(--tagsoutlined--neutral-border, #E7E7E9)',
  transition: 'background 0.15s',
  userSelect: 'none',
  position: 'relative',
  zIndex: 2,
}

const resizerHoverStyle: React.CSSProperties = {
  ...resizerStyle,
  background: 'var(--primary--main, #00a88e)',
}

const mainAreaStyle: React.CSSProperties = {
  flex: 1,
  minWidth: 0,
  minHeight: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: 16,
  overflow: 'hidden',
}

const canvasWrapperStyle: React.CSSProperties = {
  flex: 1,
  minHeight: 0,
  minWidth: 0,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto',
}

function App() {
  const [themeKey] = useState<ThemeKey>(ThemeKey.Light)
  const [saveError, setSaveError] = useState<string | null>(null)
  const e2eDemo = typeof window !== 'undefined' && window.__E2E_DEMO__
  const {
    directoryHandle,
    directoryName,
    selectDirectory,
    error: pickerError,
    clearError: clearPickerError,
    restoringDirectory,
  } = useDirectoryPicker({
    persistenceKey: 'normalization-tool',
    disablePersistence: e2eDemo,
  })
  const { treeNodes, loading, error: listError, clearError: clearListError, refresh: refreshFileList } =
    useFormFilesList(directoryHandle)
  const {
    selectedFile,
    formData,
    setFormData,
    formControls,
    setFormControls,
    hasUnsavedChanges,
    selectFile,
    closeFile,
    saveFile,
    createNewForm,
    deleteCurrentForm,
    loading: fileLoading,
    loadError,
  } = useFormFile(directoryHandle)

  const urlFormPrevRef = useRef<string | null>(null)
  useEffect(() => {
    if (e2eDemo) return
    const p = selectedFile?.path ?? null
    if (p) {
      setFormPathInUrl(p)
    } else if (urlFormPrevRef.current !== null) {
      setFormPathInUrl(null)
    }
    urlFormPrevRef.current = p
  }, [selectedFile?.path, e2eDemo])

  useEffect(() => {
    if (e2eDemo || !directoryHandle || loading || restoringDirectory) return
    const want = getFormPathFromSearch()
    if (!want) return
    if (selectedFile?.path === want) return
    const found = findFileInTree(treeNodes, want)
    if (!found) return
    void selectFile(found)
  }, [
    e2eDemo,
    directoryHandle,
    loading,
    restoringDirectory,
    treeNodes,
    selectedFile?.path,
    selectFile,
  ])

  const [formFileDirectoryHandle, setFormFileDirectoryHandle] =
    useState<FileSystemDirectoryHandle | null>(null)

  useEffect(() => {
    if (e2eDemo || !directoryHandle || !selectedFile) {
      setFormFileDirectoryHandle(null)
      return
    }
    const parts = selectedFile.path.split('/').filter(Boolean).slice(0, -1)
    if (parts.length === 0) {
      setFormFileDirectoryHandle(directoryHandle)
      return
    }
    let cancelled = false
    ;(async () => {
      try {
        let dir: FileSystemDirectoryHandle = directoryHandle
        for (const p of parts) {
          dir = await dir.getDirectoryHandle(p)
        }
        if (!cancelled) setFormFileDirectoryHandle(dir)
      } catch {
        if (!cancelled) setFormFileDirectoryHandle(null)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [e2eDemo, directoryHandle, selectedFile?.path])

  const history = useHistory<FormControl[]>(formControls)
  const lastFormControlsRef = useRef(formControls)

  useEffect(() => {
    if (formControls !== lastFormControlsRef.current) {
      lastFormControlsRef.current = formControls
      history.resetHistory(formControls)
    }
  }, [formControls, history])

  useEffect(() => {
    if (history.state !== lastFormControlsRef.current) {
      lastFormControlsRef.current = history.state
      setFormControls(history.state)
    }
  }, [history.state, setFormControls])

  const historySetControls = useCallback(
    (action: React.SetStateAction<FormControl[]>) => {
      const next = typeof action === 'function' ? action(history.state) : action
      history.setState(next)
      lastFormControlsRef.current = next
      setFormControls(next)
    },
    [history, setFormControls]
  )

  const [selectedControlId, setSelectedControlId] = useState<string | null>(null)
  const [createFormError, setCreateFormError] = useState<string | null>(null)
  const [deleteError, setDeleteError] = useState<string | null>(null)
  const [paletteWidth, setPaletteWidth] = useState(288)
  const [panelWidth, setPanelWidth] = useState(280)
  const [resizing, setResizing] = useState<'palette' | 'panel' | null>(null)
  const [resizerHover, setResizerHover] = useState<'left' | 'right' | null>(null)
  const [previewMode, setPreviewMode] = useState(false)
  const [showExport, setShowExport] = useState(false)
  const [clipboard, setClipboard] = useState<FormControl | null>(null)
  const dragRef = useRef({ startX: 0, startWidth: 0 })

  useEffect(() => {
    if (!resizing) return
    const onMove = (e: MouseEvent) => {
      const { startX, startWidth } = dragRef.current
      if (resizing === 'palette') {
        const newW = startWidth + (e.clientX - startX)
        setPaletteWidth(Math.min(MAX_PALETTE_WIDTH, Math.max(MIN_PALETTE_WIDTH, newW)))
      } else {
        const newW = startWidth + (startX - e.clientX)
        setPanelWidth(Math.min(MAX_PANEL_WIDTH, Math.max(MIN_PANEL_WIDTH, newW)))
      }
    }
    const onUp = () => setResizing(null)
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
    }
  }, [resizing])

  const handleUpdateControl = useCallback(
    (id: string, patch: Partial<FormControl>) => {
      let nextPatch = patch
      if (typeof patch.id === 'string') {
        const t = patch.id.trim()
        if (t === '') {
          window.alert('Идентификатор не может быть пустым')
          return
        }
        nextPatch = { ...patch, id: t }
        if (t !== id && findControlInTree(formControls, t)) {
          window.alert(`Идентификатор «${t}» уже занят другим контролом`)
          return
        }
      }
      historySetControls((prev) => updateControlInTree(prev, id, nextPatch))
      if (
        typeof nextPatch.id === 'string' &&
        nextPatch.id !== id
      ) {
        setSelectedControlId((sel) => (sel === id ? nextPatch.id! : sel))
      }
    },
    [historySetControls, formControls]
  )

  const selectedControl =
    selectedControlId != null
      ? findControlInTree(formControls, selectedControlId)
      : null

  const handleAddControl = useCallback(
    (type: FormControlType, options?: { componentId?: string }) => {
      historySetControls((prev) => [...prev, createControl(type, options)])
    },
    [historySetControls]
  )

  const handleSave = useCallback(async () => {
    setSaveError(null)
    const err = await saveFile()
    if (err) setSaveError(err)
  }, [saveFile])

  const handleCreateNewForm = useCallback(async () => {
    setCreateFormError(null)
    const err = await createNewForm()
    if (err) {
      setCreateFormError(err)
    } else {
      refreshFileList()
    }
  }, [createNewForm, refreshFileList])

  const handleDeleteForm = useCallback(async () => {
    if (!selectedFile) return
    const confirmMessage = hasUnsavedChanges
      ? `Удалить форму «${selectedFile.path}»? Несохранённые изменения будут потеряны.`
      : `Удалить форму «${selectedFile.path}»?`
    if (!window.confirm(confirmMessage)) return
    setDeleteError(null)
    const err = await deleteCurrentForm()
    if (err) {
      setDeleteError(err)
    } else {
      refreshFileList()
    }
  }, [selectedFile, hasUnsavedChanges, deleteCurrentForm, refreshFileList])

  const handleCopyControl = useCallback(() => {
    if (selectedControl) {
      setClipboard(JSON.parse(JSON.stringify(selectedControl)))
    }
  }, [selectedControl])

  const handlePasteControl = useCallback(() => {
    if (!clipboard) return
    const newId = `${clipboard.type}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
    const pasted = { ...JSON.parse(JSON.stringify(clipboard)), id: newId }
    historySetControls((prev) => [...prev, pasted])
  }, [clipboard, historySetControls])

  const handleDuplicateControl = useCallback(() => {
    if (!selectedControl) return
    const newId = `${selectedControl.type}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
    const dup = { ...JSON.parse(JSON.stringify(selectedControl)), id: newId }
    historySetControls((prev) => {
      const idx = prev.findIndex((c) => c.id === selectedControl.id)
      if (idx >= 0) {
        const next = [...prev]
        next.splice(idx + 1, 0, dup)
        return next
      }
      return [...prev, dup]
    })
  }, [selectedControl, historySetControls])

  const handleApplyTemplate = useCallback(
    (templateElements: FormControl[]) => {
      historySetControls((prev) => [
        ...prev,
        ...templateElements.map((el) => ({
          ...JSON.parse(JSON.stringify(el)),
          id: `${el.type}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        })),
      ])
    },
    [historySetControls]
  )

  useEffect(() => {
    if (!selectedFile) return
    const handler = (e: KeyboardEvent) => {
      const isInput = (e.target as HTMLElement)?.tagName === 'INPUT' ||
        (e.target as HTMLElement)?.tagName === 'TEXTAREA' ||
        (e.target as HTMLElement)?.getAttribute('contenteditable') === 'true'

      if (e.ctrlKey || e.metaKey) {
        if (e.key === 's') {
          e.preventDefault()
          handleSave()
          return
        }
        if (e.key === 'z' && !e.shiftKey) {
          if (isInput) return
          e.preventDefault()
          history.undo()
          return
        }
        if ((e.key === 'z' && e.shiftKey) || e.key === 'y') {
          if (isInput) return
          e.preventDefault()
          history.redo()
          return
        }
        if (e.key === 'c' && !isInput) {
          e.preventDefault()
          handleCopyControl()
          return
        }
        if (e.key === 'v' && !isInput) {
          e.preventDefault()
          handlePasteControl()
          return
        }
        if (e.key === 'd') {
          e.preventDefault()
          handleDuplicateControl()
          return
        }
      }
      if (e.key === 'Delete' && !isInput && selectedControlId) {
        e.preventDefault()
        historySetControls((prev) => removeControlFromTree(prev, selectedControlId))
        setSelectedControlId(null)
        return
      }
      if (e.key === 'Escape') {
        setSelectedControlId(null)
        setPreviewMode(false)
        return
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [selectedFile, selectedControlId, handleSave, history, handleCopyControl, handlePasteControl, handleDuplicateControl, historySetControls])

  const treeData: DataNode[] = treeNodes.map((node) => nodeToDataNode(node))

  function nodeToDataNode(n: FormFileNode): DataNode {
    return {
      key: n.key,
      title: n.title,
      isLeaf: n.isLeaf,
      children: n.children?.length ? n.children.map(nodeToDataNode) : undefined,
    }
  }

  const handleTreeSelect = useCallback(
    (_: unknown, info: { node: { key: string } }) => {
      const found = findFileInTree(treeNodes, info.node.key as string)
      if (found) selectFile({ path: found.path, handle: found.handle })
    },
    [treeNodes, selectFile]
  )

  const showMessage = pickerError || listError
  const messageText = pickerError || listError || ''
  const clearMessageError = useCallback(() => {
    clearPickerError()
    clearListError()
  }, [clearPickerError, clearListError])

  const showEditorPalette =
    Boolean(selectedFile) && !fileLoading

  return (
    <ConfigProvider theme={themeKey}>
      <GlobalStyle />
      <div style={appShellStyle}>
        <aside
          className="app-chrome-sidebar editor-sidebar editor-sidebar--left"
          style={{ ...unifiedLeftSidebarStyle, width: paletteWidth }}
        >
          <H6 style={{ margin: 0, lineHeight: 1.3 }}>UISB — Редактор форм</H6>
          <Text
            type="BTR3"
            style={{
              margin: 0,
              color: 'var(--text--secondary, #666)',
              lineHeight: 1.45,
            }}
          >
            Визуальный редактор UI-форм на базе Hexa UI
          </Text>
          <Space direction="vertical" size={8} style={{ width: '100%' }}>
            <Button
              mode="primary"
              text="Выбрать каталог"
              onClick={selectDirectory}
              iconBefore={<Folder />}
              style={{ width: '100%', justifyContent: 'center' }}
            />
            <Button
              mode="secondary"
              text="Новая форма"
              onClick={handleCreateNewForm}
              iconBefore={<Add />}
              disabled={!directoryHandle}
              style={{ width: '100%', justifyContent: 'center' }}
            />
          </Space>
          {restoringDirectory && (
            <Text type="BTR3" style={{ color: 'var(--text--secondary, #666)' }}>
              Восстановление каталога…
            </Text>
          )}
          {directoryName ? (
            <Text type="BTR3" style={{ color: '#666', wordBreak: 'break-word' }}>
              Каталог: {directoryName}
            </Text>
          ) : null}

          {showEditorPalette ? (
            <div
              style={{
                width: '100%',
                borderTop:
                  '1px solid var(--tagsoutlined--neutral-border, #E7E7E9)',
                marginTop: 4,
                paddingTop: 12,
                flex: 1,
                minHeight: 0,
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                textAlign: 'left',
              }}
            >
              <ControlsPalette onAddControl={handleAddControl} />
              {FORM_TEMPLATES.length > 0 && (
                <div
                  style={{
                    width: '100%',
                    borderTop:
                      '1px solid var(--tagsoutlined--neutral-border, #E7E7E9)',
                    marginTop: 12,
                    paddingTop: 12,
                  }}
                >
                  <H6
                    style={{
                      margin: '0 0 6px 0',
                      textAlign: 'left',
                      color: 'var(--text--secondary, #666)',
                    }}
                  >
                    Шаблоны
                  </H6>
                  <Space size={4} direction="vertical" style={{ width: '100%' }}>
                    {FORM_TEMPLATES.map((tpl) => (
                      <Button
                        key={tpl.id}
                        mode="tertiary"
                        text={tpl.name}
                        onClick={() => handleApplyTemplate(tpl.elements)}
                        style={{
                          width: '100%',
                          justifyContent: 'flex-start',
                          textAlign: 'left',
                        }}
                        size="small"
                      />
                    ))}
                  </Space>
                </div>
              )}
            </div>
          ) : null}
        </aside>

        <div
          role="separator"
          aria-label="Изменить ширину левой панели"
          style={
            resizing === 'palette' || resizerHover === 'left'
              ? resizerHoverStyle
              : resizerStyle
          }
          onMouseDown={(e) => {
            e.preventDefault()
            dragRef.current = { startX: e.clientX, startWidth: paletteWidth }
            setResizing('palette')
          }}
          onMouseEnter={() => setResizerHover('left')}
          onMouseLeave={() => setResizerHover(null)}
        />

        <div style={mainColumnStyle}>
        <div style={{ flex: 1, minHeight: 0, minWidth: 0, width: '100%', display: 'flex', flexDirection: 'column', gap: 16, overflow: 'hidden' }}>
          {showMessage && (
            <SectionMessage mode="warning" title="Внимание" closable onClose={clearMessageError}>
              {messageText}
            </SectionMessage>
          )}

          {saveError && (
            <SectionMessage
              mode="error"
              title="Ошибка сохранения"
              closable
              onClose={() => setSaveError(null)}
            >
              {saveError}
            </SectionMessage>
          )}

          {loadError && (
            <SectionMessage mode="error" title="Ошибка загрузки файла">
              {loadError}
            </SectionMessage>
          )}

          {createFormError && (
            <SectionMessage
              mode="error"
              title="Ошибка создания формы"
              closable
              onClose={() => setCreateFormError(null)}
            >
              {createFormError}
            </SectionMessage>
          )}

          {deleteError && (
            <SectionMessage
              mode="error"
              title="Ошибка удаления формы"
              closable
              onClose={() => setDeleteError(null)}
            >
              {deleteError}
            </SectionMessage>
          )}

          {directoryHandle &&
            !selectedFile &&
            (loading ? (
              <div>Загрузка списка файлов…</div>
            ) : treeData.length > 0 ? (
              <div className="form-files-tree" style={{ marginTop: 8 }}>
                <Text type="BTR2" style={{ marginBottom: 8, display: 'block' }}>
                  Выберите файл формы (.ts), дерево каталогов:
                </Text>
                <Tree
                  treeData={treeData}
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
                В выбранном каталоге нет файлов форм (.ts)
              </SectionMessage>
            ))}

          {selectedFile && (
            <>
              {fileLoading ? (
                <div>Загрузка формы…</div>
              ) : (
                <div style={editorLayoutStyle}>
                  <main style={mainAreaStyle}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 12,
                        flexWrap: 'wrap',
                        gap: 8,
                      }}
                    >
                      <H6 style={{ margin: 0 }}>
                        {previewMode ? 'WYSIWYG' : 'Форма'}: {formData.id || selectedFile.path}
                        {hasUnsavedChanges && (
                          <Text type="BTR3" style={{ color: '#fa8c16', marginLeft: 8 }}>
                            не сохранено
                          </Text>
                        )}
                      </H6>
                      <Space size={8}>
                        <Tooltip text="Ctrl+Z">
                          <Button mode="tertiary" text="↩" onClick={history.undo} disabled={!history.canUndo} size="small" />
                        </Tooltip>
                        <Tooltip text="Ctrl+Shift+Z">
                          <Button mode="tertiary" text="↪" onClick={history.redo} disabled={!history.canRedo} size="small" />
                        </Tooltip>
                        {!previewMode && selectedControl && (
                          <>
                            <Tooltip text="Ctrl+C">
                              <Button mode="tertiary" iconBefore={<Copy />} onClick={handleCopyControl} size="small" />
                            </Tooltip>
                            <Tooltip text="Ctrl+D">
                              <Button mode="tertiary" text="Дубл." onClick={handleDuplicateControl} size="small" />
                            </Tooltip>
                          </>
                        )}
                        <Button
                          mode={previewMode ? 'primary' : 'secondary'}
                          text={previewMode ? 'Редактор' : 'WYSIWYG'}
                          onClick={() => setPreviewMode((p) => !p)}
                          size="small"
                        />
                        {!previewMode && (
                          <Button
                            mode="secondary"
                            text="Экспорт кода"
                            onClick={() => setShowExport(true)}
                            size="small"
                          />
                        )}
                        {hasUnsavedChanges && (
                          <Button
                            mode="primary"
                            text="Сохранить"
                            iconBefore={<Save />}
                            onClick={handleSave}
                          />
                        )}
                        <Button
                          mode="secondary"
                          text="Закрыть"
                          iconBefore={<Cross />}
                          onClick={closeFile}
                        />
                        {!previewMode && (
                          <Button
                            mode="secondary"
                            text="Удалить форму"
                            iconBefore={<Delete />}
                            onClick={handleDeleteForm}
                          />
                        )}
                      </Space>
                    </div>
                    <div style={canvasWrapperStyle}>
                      {previewMode ? (
                        <WysiwygCanvas
                          controls={formControls}
                          onControlsChange={historySetControls}
                          selectedId={selectedControlId}
                          onSelect={setSelectedControlId}
                          formDirectoryHandle={
                            formFileDirectoryHandle ?? directoryHandle
                          }
                          formKey={selectedFile.path}
                          formConfigHook={formData.configHook ?? null}
                          formHandlers={formData.handlers ?? null}
                        />
                      ) : (
                        <FormEditorConfigHookProvider
                          formKey={selectedFile.path}
                          formDirectoryHandle={
                            formFileDirectoryHandle ?? directoryHandle
                          }
                          formConfigHook={formData.configHook ?? null}
                          formHandlers={formData.handlers ?? null}
                          elements={formControls}
                        >
                          <FormCanvas
                            controls={formControls}
                            onControlsChange={historySetControls}
                            onDropControl={(type) =>
                              handleAddControl(type as FormControlType, undefined)
                            }
                            selectedId={selectedControlId}
                            onSelect={setSelectedControlId}
                          />
                        </FormEditorConfigHookProvider>
                      )}
                    </div>
                  </main>
                  <div style={{ width: panelWidth, flexShrink: 0, overflow: 'hidden', display: 'flex', flexDirection: 'row', position: 'relative' }}>
                    <div
                      role="separator"
                      aria-label="Изменить ширину панели свойств"
                      data-testid="resizer-panel"
                      style={{
                        ...(resizing === 'panel' || resizerHover === 'right' ? resizerHoverStyle : resizerStyle),
                        zIndex: 10,
                      }}
                      onMouseDown={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        dragRef.current = { startX: e.clientX, startWidth: panelWidth }
                        setResizing('panel')
                      }}
                      onMouseEnter={() => setResizerHover('right')}
                      onMouseLeave={() => setResizerHover(null)}
                    />
                    <div style={{ flex: 1, minWidth: 0, overflow: 'hidden', display: 'flex' }}>
                    <PropertiesPanel
                      formData={formData}
                      onFormUpdate={(patch) => setFormData((prev) => ({ ...prev, ...patch }))}
                      control={selectedControl}
                      onUpdate={handleUpdateControl}
                      formDirectoryHandle={directoryHandle}
                    />
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
        </div>
      </div>
      {showExport && (
        <CodeExportDialog formData={formData} onClose={() => setShowExport(false)} />
      )}
    </ConfigProvider>
  )
}

export default App
