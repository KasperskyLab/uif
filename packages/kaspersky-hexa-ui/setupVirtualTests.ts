import { installVirtualLayout, VirtualLayout } from './src/table/test-utils/virtualLayout'

// Set here rather than on the command line so the run works the same on every platform without
// needing cross-env. The harness reads it when it renders, which is long after this file runs.
process.env.HEXA_TABLE_VIRTUAL = '1'

/**
 * Extra setup for the whole-suite virtualization run (`HEXA_TABLE_VIRTUAL=1`). See
 * `src/table/test-utils/virtualMode.ts` for what that run is for.
 *
 * The viewport is deliberately taller than a page of rows: existing tests assert exact row counts
 * and cell positions, and they stay valid only if every row of the page is rendered. This run is
 * about the windowed body not changing behaviour; that the window actually windows is checked in
 * Virtualization.test.tsx with a small viewport.
 */
const PAGE_ROWS = 100
const ROW_HEIGHT = 40

let layout: VirtualLayout | undefined

beforeEach(() => {
  layout = installVirtualLayout({
    viewport: { width: 1600, height: PAGE_ROWS * ROW_HEIGHT },
    rowHeight: ROW_HEIGHT
  })
})

afterEach(() => {
  layout?.restore()
  layout = undefined
})
