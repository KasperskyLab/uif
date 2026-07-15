import { act, render } from '@testing-library/react'
import React from 'react'

import { Table } from '../test-utils/shared'

describe('Table virtualizedtableforantd4 (VTable)', () => {
  it('removes its passive scroll listener from the table body on unmount', async () => {
    const proto = EventTarget.prototype as any
    const origAdd = proto.addEventListener
    const origRemove = proto.removeEventListener
    const entries: { t: EventTarget, l: unknown, passive: boolean }[] = []

    const isPassive = (opts: unknown) =>
      typeof opts === 'object' && opts !== null && (opts as any).passive === true

    proto.addEventListener = function (this: EventTarget, type: string, listener: unknown, opts: unknown) {
      if (type === 'scroll' && listener) entries.push({ t: this, l: listener, passive: isPassive(opts) })
      return origAdd.call(this, type, listener, opts)
    }
    proto.removeEventListener = function (this: EventTarget, type: string, listener: unknown, opts: unknown) {
      if (type === 'scroll' && listener) {
        const i = entries.findIndex((e) => e.t === this && e.l === listener)
        if (i >= 0) entries.splice(i, 1)
      }
      return origRemove.call(this, type, listener, opts)
    }

    const pageGetter = jest.fn((page: number) => (
      Array.from({ length: 2 }, (_, i) => {
        const id = (page - 1) * 2 + i + 1
        return { key: id, name: `n${id}`, description: `d${id}` }
      })
    ))

    try {
      let result: ReturnType<typeof render>
      await act(async () => {
        result = render(
          <Table
            pagination={{
              virtualInfiniteScroll: true,
              total: 100,
              pageSize: 10,
              rowHeight: 40,
              tableBodyHeight: 400,
              infiniteScrollPageGetter: pageGetter
            } as any}
          />
        )
      })

      const { container, unmount } = result!
      const body = container.querySelector('.ant-table-body') as HTMLElement

      expect(body).toBeTruthy()
      expect(entries.some((e) => e.t === body && e.passive)).toBe(true)

      await act(async () => { unmount() })

      expect(entries.filter((e) => e.t === body && e.passive)).toHaveLength(0)
    } finally {
      proto.addEventListener = origAdd
      proto.removeEventListener = origRemove
    }
  })
})
