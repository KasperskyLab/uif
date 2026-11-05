import { unwatchOverflow, watchOverflow } from '../overflowWatcher'

/**
 * The content-root branch is the part a component test cannot see: a cell's own box
 * does not change when the text inside it does, so a resize observer alone never
 * learns that the answer went stale. One MutationObserver per root covers every cell
 * under it and asks for a fresh measurement.
 */

type ResizeStub = { observe: jest.Mock, unobserve: jest.Mock, disconnect: jest.Mock }

// The watcher keeps one shared ResizeObserver for the lifetime of the module, so the
// stub is installed once and the same instance is asserted against in every test.
let resize: ResizeStub
let deliver: (entries: Array<{ target: Element }>) => void

const flush = () => new Promise(resolve => setTimeout(resolve, 0))

// jest.spyOn wraps a native class in a plain function, which cannot be `new`-ed, so
// the spy is given an implementation that builds the real thing.
const NativeMutationObserver = window.MutationObserver
const spyOnMutationObserver = () => jest
  .spyOn(window, 'MutationObserver')
  .mockImplementation(callback => new NativeMutationObserver(callback))

afterEach(() => {
  jest.restoreAllMocks()
})

beforeAll(() => {
  window.ResizeObserver = jest.fn().mockImplementation(callback => {
    deliver = callback
    resize = { observe: jest.fn(), unobserve: jest.fn(), disconnect: jest.fn() }
    return resize
  }) as never
})

const buildTable = () => {
  const table = document.createElement('table')
  const tbody = document.createElement('tbody')
  const row = document.createElement('tr')
  const first = document.createElement('td')
  const second = document.createElement('td')

  first.textContent = 'первая'
  second.textContent = 'вторая'
  row.append(first, second)
  tbody.append(row)
  table.append(tbody)
  document.body.append(table)

  return { tbody, first, second, cleanup: () => table.remove() }
}

describe('overflowWatcher: content root', () => {
  it('measures once on subscribe', () => {
    const { first, cleanup } = buildTable()
    const onMeasured = jest.fn()

    watchOverflow(first, onMeasured, { measureCallback: () => true })

    expect(onMeasured).toHaveBeenCalledWith(true)

    unwatchOverflow(first)
    cleanup()
  })

  it('asks for a fresh measurement when the content inside a watched cell changes', async () => {
    const { tbody, first, cleanup } = buildTable()

    watchOverflow(first, jest.fn(), { contentRoot: tbody, measureCallback: () => true })
    const observedBefore = resize.observe.mock.calls.length

    first.textContent = 'текст стал заметно длиннее прежнего'
    await flush()

    // re-subscribing is how the shared observer is asked to deliver again
    expect(resize.unobserve).toHaveBeenCalledWith(first)
    expect(resize.observe.mock.calls.length).toBeGreaterThan(observedBefore)

    unwatchOverflow(first)
    cleanup()
  })

  it('ignores a change outside every watched cell', async () => {
    const { tbody, first, cleanup } = buildTable()
    const outside = document.createElement('caption')

    watchOverflow(first, jest.fn(), { contentRoot: tbody, measureCallback: () => true })
    resize.unobserve.mockClear()

    tbody.append(outside)
    await flush()

    expect(resize.unobserve).not.toHaveBeenCalled()

    unwatchOverflow(first)
    cleanup()
  })

  it('keeps one observer per root however many cells share it, and disconnects on the last', () => {
    const { tbody, first, second, cleanup } = buildTable()
    const spy = spyOnMutationObserver()

    watchOverflow(first, jest.fn(), { contentRoot: tbody, measureCallback: () => false })
    watchOverflow(second, jest.fn(), { contentRoot: tbody, measureCallback: () => false })

    expect(spy).toHaveBeenCalledTimes(1)
    const disconnect = jest.spyOn(spy.mock.results[0].value as MutationObserver, 'disconnect')

    unwatchOverflow(first)
    expect(disconnect).not.toHaveBeenCalled()

    unwatchOverflow(second)
    expect(disconnect).toHaveBeenCalled()

    cleanup()
  })

  it('leaves an expanded cell alone, so re-measuring cannot take its own toggle away', () => {
    const { tbody, first, cleanup } = buildTable()
    const onMeasured = jest.fn()

    watchOverflow(first, onMeasured, { contentRoot: tbody, measureCallback: () => true })
    onMeasured.mockClear()

    first.setAttribute('data-expanded', '')
    deliver([{ target: first }])

    expect(onMeasured).not.toHaveBeenCalled()

    unwatchOverflow(first)
    cleanup()
  })
})
