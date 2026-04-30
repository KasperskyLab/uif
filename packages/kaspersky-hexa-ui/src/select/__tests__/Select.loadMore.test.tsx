import { ConfigProvider } from '@design-system/context'
import { act, render, waitFor } from '@testing-library/react'
import React from 'react'

import { LoadingTrigger } from '../helpers'
import { Select } from '../Select'
import { SelectProps } from '../types'

const OriginalIntersectionObserver = global.IntersectionObserver

function makeEntry (isIntersecting: boolean): IntersectionObserverEntry {
  const target = document.createElement('div')
  return {
    boundingClientRect: target.getBoundingClientRect(),
    intersectionRatio: isIntersecting ? 1 : 0,
    intersectionRect: {} as DOMRectReadOnly,
    isIntersecting,
    rootBounds: null,
    target,
    time: 0
  }
}

/**
 * jsdom has no layout; we invoke the observer callback explicitly.
 * Uses the latest registered callback — mirrors the active observer instance.
 */
function setupIntersectionObserverMock (): {
  fire: (isIntersecting: boolean) => void
  instances: IntersectionObserverCallback[]
} {
  const instances: IntersectionObserverCallback[] = []

  global.IntersectionObserver = jest.fn((cb: IntersectionObserverCallback) => {
    instances.push(cb)
    return {
      disconnect: jest.fn(),
      observe: jest.fn(),
      unobserve: jest.fn(),
      takeRecords: jest.fn(() => [])
    } as unknown as IntersectionObserver
  }) as unknown as typeof IntersectionObserver

  const fire = (isIntersecting: boolean): void => {
    act(() => {
      const cb = instances.length ? instances[instances.length - 1] : undefined
      if (!cb) {
        return
      }
      cb([makeEntry(isIntersecting)], {} as IntersectionObserver)
    })
  }

  return { instances, fire }
}

function ScrollBox ({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div
      style={{ height: 80, overflowY: 'auto', width: 200 }}
    >
      {children}
    </div>
  )
}

async function flushAnimationFrame (): Promise<void> {
  await act(async () => {
    await new Promise<void>(resolve => requestAnimationFrame(() => resolve()))
  })
}

/** RTL is configured with testIdAttribute=kl-id; Load-more Loader only sets data-testid. */
function queryLoadMoreSpinner (): HTMLElement | null {
  return document.querySelector('[data-testid="select-option-loading-more"]')
}

describe('LoadingTrigger', () => {
  afterEach(() => {
    global.IntersectionObserver = OriginalIntersectionObserver
  })

  test('does not call onLoad until intersection callback reports visible', () => {
    const onLoad = jest.fn()
    setupIntersectionObserverMock()

    render(
      <ConfigProvider>
        <ScrollBox>
          <LoadingTrigger onLoad={onLoad} />
        </ScrollBox>
      </ConfigProvider>
    )

    expect(onLoad).not.toHaveBeenCalled()
  })

  test('calls onLoad once on transition to intersecting', () => {
    const onLoad = jest.fn()
    const { fire } = setupIntersectionObserverMock()

    render(
      <ConfigProvider>
        <ScrollBox>
          <LoadingTrigger onLoad={onLoad} />
        </ScrollBox>
      </ConfigProvider>
    )

    fire(true)
    expect(onLoad).toHaveBeenCalledTimes(1)

    fire(true)
    expect(onLoad).toHaveBeenCalledTimes(1)
  })

  test('fires again after leaving intersecting viewport and re-entering (rising edge)', () => {
    const onLoad = jest.fn()
    const { fire } = setupIntersectionObserverMock()

    render(
      <ConfigProvider>
        <ScrollBox>
          <LoadingTrigger onLoad={onLoad} />
        </ScrollBox>
      </ConfigProvider>
    )

    fire(true)
    expect(onLoad).toHaveBeenCalledTimes(1)

    fire(false)
    fire(true)
    expect(onLoad).toHaveBeenCalledTimes(2)
  })

  test('uses latest onLoad after re-render without extra invocations until intersection repeats', () => {
    const first = jest.fn()
    const second = jest.fn()
    const { fire } = setupIntersectionObserverMock()

    const { rerender } = render(
      <ConfigProvider>
        <ScrollBox>
          <LoadingTrigger onLoad={first} />
        </ScrollBox>
      </ConfigProvider>
    )

    fire(true)
    expect(first).toHaveBeenCalledTimes(1)
    expect(second).not.toHaveBeenCalled()

    rerender(
      <ConfigProvider>
        <ScrollBox>
          <LoadingTrigger onLoad={second} />
        </ScrollBox>
      </ConfigProvider>
    )

    expect(second).not.toHaveBeenCalled()

    fire(false)
    fire(true)
    expect(second).toHaveBeenCalledTimes(1)
    expect(first).toHaveBeenCalledTimes(1)
  })

  test('defer connecting observer until animation frame when no scroll ancestor yet', async () => {
    const onLoad = jest.fn()
    const instances: IntersectionObserverCallback[] = []

    global.IntersectionObserver = jest.fn((cb: IntersectionObserverCallback) => {
      instances.push(cb)
      return {
        disconnect: jest.fn(),
        observe: jest.fn(),
        unobserve: jest.fn(),
        takeRecords: jest.fn(() => [])
      } as unknown as IntersectionObserver
    }) as unknown as typeof IntersectionObserver

    render(
      <ConfigProvider>
        {/* no overflow:auto between trigger and viewport — waits rAF before IO */}
        <div style={{ height: 40 }}>
          <LoadingTrigger onLoad={onLoad} />
        </div>
      </ConfigProvider>
    )

    expect(onLoad).not.toHaveBeenCalled()
    expect(instances.length).toBe(0)

    await flushAnimationFrame()

    expect(instances.length).toBeGreaterThanOrEqual(1)
    expect(onLoad).not.toHaveBeenCalled()

    act(() => {
      const cb = instances.length ? instances[instances.length - 1] : undefined
      cb?.([makeEntry(true)], {} as IntersectionObserver)
    })
    expect(onLoad).toHaveBeenCalledTimes(1)
  })
})

describe('Select hasMore', () => {
  const manyOptions = Array.from({ length: 30 }, (_, i) => ({
    label: `Option ${i}`,
    value: String(i)
  }))

  const loadMoreDefaults: Partial<SelectProps> = {
    klId: 'load-more-select',
    testId: 'load-more-select',
    open: true,
    /** rc-select warns if themed `onSearch` is passed without showSearch/tags/combobox */
    showSearch: true,
    mode: undefined,
    defaultValue: undefined,
    options: manyOptions,
    hasMore: true
  }

  afterEach(() => {
    global.IntersectionObserver = OriginalIntersectionObserver
  })

  async function renderOpenSelectWithPagination (onLoadMore: jest.Mock): Promise<{ fire: (v: boolean) => void }> {
    const { fire } = setupIntersectionObserverMock()
    render(
      <ConfigProvider>
        <Select {...loadMoreDefaults} onLoadMore={onLoadMore}/>
      </ConfigProvider>
    )
    await waitFor(() => {
      expect(queryLoadMoreSpinner()).not.toBeNull()
    })
    return { fire }
  }

  test('does not invoke onLoadMore until loading-more row intersects scroll root', async () => {
    const onLoadMore = jest.fn()
    setupIntersectionObserverMock()

    render(
      <ConfigProvider>
        <Select {...loadMoreDefaults} onLoadMore={onLoadMore}/>
      </ConfigProvider>
    )

    await waitFor(() => {
      expect(queryLoadMoreSpinner()).not.toBeNull()
    })
    expect(onLoadMore).not.toHaveBeenCalled()
  })

  test('calls onLoadMore once when sentinel enters visible area', async () => {
    const onLoadMore = jest.fn()
    const { fire } = await renderOpenSelectWithPagination(onLoadMore)

    expect(onLoadMore).not.toHaveBeenCalled()
    fire(true)
    expect(onLoadMore).toHaveBeenCalledTimes(1)

    fire(true)
    expect(onLoadMore).toHaveBeenCalledTimes(1)
  })

  test('changing onLoadMore reference does not call without intersection (mount / rerender)', async () => {
    const spy = jest.fn()
    setupIntersectionObserverMock()

    const { rerender } = render(
      <ConfigProvider>
        <Select {...loadMoreDefaults} onLoadMore={() => { spy('first') }}/>
      </ConfigProvider>
    )

    await waitFor(() => {
      expect(queryLoadMoreSpinner()).not.toBeNull()
    })
    expect(spy).not.toHaveBeenCalled()

    rerender(
      <ConfigProvider>
        <Select {...loadMoreDefaults} onLoadMore={() => { spy('second') }}/>
      </ConfigProvider>
    )

    expect(spy).not.toHaveBeenCalled()
  })
})
