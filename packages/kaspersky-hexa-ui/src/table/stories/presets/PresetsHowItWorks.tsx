import { PopupConfigProvider } from '@helpers/components/PopupConfigProvider'
import { Button } from '@src/button'
import { Notification } from '@src/notification'
import { InteractiveTourStep, Onboarding } from '@src/onboarding'
import React, {
  MutableRefObject,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'

import { Table } from '../..'
import { MockRow } from '../../__mocks__/filtersMockData'
import { TableStore, useTableStore } from '../../context/tableStore'

import { createDriver, findVisible, selectors, tableId } from './howItWorks/driver'
import { columns, dataSource, DemoBackend, makePresets } from './howItWorks/fixtures'
import { makeSteps } from './howItWorks/steps'

// A read-only bridge inside the table context. UI actions still use real controls.
const ObserveTable = ({ storeRef }: { storeRef: MutableRefObject<TableStore<MockRow> | null> }) => {
  const store = useTableStore<MockRow>()
  useEffect(() => {
    storeRef.current = store
    return () => { if (storeRef.current === store) storeRef.current = null }
  }, [store, storeRef])
  return null
}

export const PresetsHowItWorks = () => {
  const [session, setSession] = useState(0)
  const [tableKey, setTableKey] = useState(0)
  const [welcome, setWelcome] = useState(true)
  const [tourActive, setTourActive] = useState(false)
  const [error, setError] = useState<string>()
  const storeRef = useRef<TableStore<MockRow> | null>(null)
  const backend = useRef<DemoBackend>({ deleted: false, customActionCount: 0 })
  const [presets, setPresets] = useState(() => makePresets(backend.current))
  const lifecycle = useRef({
    active: false,
    prepared: -1,
    preparing: false,
    controller: new AbortController(),
    stopStep: () => {}
  })

  const driver = useMemo(() => createDriver(() => storeRef.current, () => backend.current), [])
  const definitions = useMemo(() => makeSteps(driver), [driver])
  const stop = () => {
    lifecycle.current.active = false
    lifecycle.current.stopStep()
    lifecycle.current.controller.abort()
  }

  const resetTable = () => {
    storeRef.current = null
    backend.current = { deleted: false, customActionCount: 0 }
    setPresets(makePresets(backend.current))
    setTableKey(value => value + 1)
  }

  const steps = useMemo<InteractiveTourStep[]>(() => definitions.map((definition, index) => ({
    target: () => findVisible(definition.target) ?? null,
    title: definition.title,
    text: definition.text,
    placement: definition.placement ?? 'auto',
    id: `presets-how-it-works-${index}`,
    beforeStepTimeout: 30000,
    beforeStep: async () => {
      const run = lifecycle.current
      run.stopStep()
      run.controller.abort()
      run.controller = new AbortController()
      const { signal } = run.controller
      driver.begin(signal, index <= run.prepared)
      run.preparing = true

      try {
        // Going Back restores the demo and replays the prefix through the same UI.
        // This also restores renamed/deleted items and avoids repeating mutations
        // against a later state of the table.
        if (index <= run.prepared) {
          await driver.closeMenus()
          findVisible(selectors.cancelModal)?.click()
          findVisible(selectors.cancelSettings)?.click()
          resetTable()
          run.prepared = -1
        }
        await driver.wait(() => !!storeRef.current?.getSnapshot().presets.views?.length, 'инициализация таблицы')
        for (let next = run.prepared + 1; next <= index; next++) {
          if (signal.aborted) return
          await definitions[next].prepare?.()
          await driver.waitForTarget(definitions[next].target)
          run.prepared = next
        }
      } catch (cause) {
        if (!signal.aborted) {
          setError(cause instanceof Error ? cause.message : 'Не удалось подготовить шаг тура')
          stop()
        }
      } finally {
        run.preparing = false
      }
    }
  })), [definitions, driver])

  useEffect(() => {
    // rc-dropdown listens on document mousedown. Keep its popup open when the
    // user clicks Next/Back in a tour tooltip, as in HiddenInterfaceTour.
    const protectTooltip = (event: MouseEvent) => {
      if (lifecycle.current.active && event.target instanceof Element &&
        event.target.closest('.hexa-ui-interactive-tour')) event.stopImmediatePropagation()
    }
    window.addEventListener('mousedown', protectTooltip, true)
    return () => {
      window.removeEventListener('mousedown', protectTooltip, true)
      stop()
    }
  }, [])

  const onStepChange = (index: number) => {
    lifecycle.current.stopStep()
    const { advanceOn, isDone } = definitions[index]
    if (!advanceOn) return
    let frame = 0
    let advancing = false
    const onClick = (event: MouseEvent) => {
      if (advancing || lifecycle.current.preparing || !(event.target instanceof Element)) return
      if (!event.target.closest(advanceOn)) return
      // Let the actual control handle the click before preparing the next step.
      advancing = true
      const advance = () => {
        if (!lifecycle.current.active) return
        if (isDone && !isDone()) {
          frame = requestAnimationFrame(advance)
          return
        }
        findVisible(selectors.tourNext)?.click()
      }
      frame = requestAnimationFrame(advance)
    }
    window.addEventListener('click', onClick, true)
    lifecycle.current.stopStep = () => {
      window.removeEventListener('click', onClick, true)
      cancelAnimationFrame(frame)
    }
  }

  const restart = () => {
    stop()
    lifecycle.current.prepared = -1
    setError(undefined)
    setWelcome(true)
    setTourActive(false)
    setSession(value => value + 1)
    resetTable()
  }

  return (
    <div id="presets-how-it-works-example">
      <div style={{ marginBottom: 16 }}>
        <Button mode="secondary" onClick={restart} testId="presets-tour-restart">Пройти тур заново</Button>
      </div>
      {error && <p role="alert">{error}. Нажмите «Пройти тур заново».</p>}
      {tourActive && (
        <style>{`
          [data-testid="${tableId}-presets-menu"] [data-testid="preset-actions"] {
            visibility: visible;
          }
        `}</style>
      )}
      <Notification />
      <PopupConfigProvider usePortal>
        <Table<MockRow>
          key={tableKey}
          testId={tableId}
          columns={columns}
          dataSource={dataSource}
          presets={presets}
          pagination={{ pageSize: 20, showSizeChanger: true }}
          rowSelection={{ builtInRowSelection: true }}
          resizingMode="scroll"
          useFiltersSidebar
          toolbar={{
            showColumns: true,
            showGrouping: true,
            showFilterSidebar: true,
            right: items => [<ObserveTable key="observe" storeRef={storeRef} />, ...items]
          }}
        />
      </PopupConfigProvider>
      {!error && (
        <Onboarding
          key={session}
          testId="presets-how-it-works-onboarding"
          variant="tour"
          visible={welcome}
          header="Как работают пресеты таблицы"
          content={
            'Пройдём полный путь: применим пресет, изменим таблицу, увидим индикатор, сохраним и обновим настройки. ' +
            'Проверим ширину колонок, действия, сброс, удаление и режимы View. ' +
            'Нажимайте подсвеченные элементы или Next — тур выполнит действие за вас.'
          }
          onTryNow={() => { lifecycle.current.active = true; setTourActive(true); setWelcome(false) }}
          onSkip={() => setWelcome(false)}
          onCancel={() => setWelcome(false)}
          tour={{
            steps,
            onStepChange,
            width: 400,
            zIndex: 2000,
            onFinish: () => {
              setTourActive(false)
              stop()
              document.body.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
              findVisible(selectors.cancelModal)?.click()
              findVisible(selectors.cancelSettings)?.click()
            }
          }}
        />
      )}
    </div>
  )
}
