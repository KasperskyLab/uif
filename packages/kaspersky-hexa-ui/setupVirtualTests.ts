import { installVirtualLayout, VirtualLayout } from './src/table/test-utils/virtualLayout'

process.env.HEXA_TABLE_VIRTUAL = '1'

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
