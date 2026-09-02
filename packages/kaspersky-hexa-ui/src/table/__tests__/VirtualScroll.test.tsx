import { act } from '@testing-library/react'

import { tableColumns } from '../__mocks__/filtersMockData'
import { TableTestingClass } from '../test-utils/TableTestingClass'

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
      let table: TableTestingClass
      await act(async () => {
        table = TableTestingClass.render({
          columns: tableColumns,
          pagination: {
            virtualInfiniteScroll: true,
            total: 100,
            pageSize: 10,
            rowHeight: 40,
            tableBodyHeight: 400,
            infiniteScrollPageGetter: pageGetter as any
          }
        })
      })

      const body = table!.getBody()

      expect(body).toBeTruthy()
      expect(entries.some((e) => e.t === body && e.passive)).toBe(true)

      await act(async () => { table.unmount() })

      expect(entries.filter((e) => e.t === body && e.passive)).toHaveLength(0)
    } finally {
      proto.addEventListener = origAdd
      proto.removeEventListener = origRemove
    }
  })
})
