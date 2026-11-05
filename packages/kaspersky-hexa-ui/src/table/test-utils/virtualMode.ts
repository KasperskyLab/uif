import { ITableProps, TableRecord } from '..'

/**
 * A whole-suite virtualization run.
 *
 * The per-module checks the virtualization needs are the table's existing tests — there is no point
 * rewriting 576 of them. Setting `HEXA_TABLE_VIRTUAL=1` makes the harness render every table with
 * virtualization on, so the same suites run a second time against the windowed body:
 *
 *   HEXA_TABLE_VIRTUAL=1 npx jest src/table --transformIgnorePatterns --maxWorkers=1 --forceExit
 *
 * The companion setup file (`setupVirtualTests.ts`) gives jsdom a viewport tall enough to hold a
 * whole page of rows. That is deliberate: with every row of the page rendered, the existing
 * assertions about row counts and cell positions stay true, and what is being checked is that the
 * windowed body does not change behaviour. The window itself — that only what is in view gets
 * rendered — is checked separately in `Virtualization.test.tsx`, which sets a small viewport.
 */
export const isVirtualTestMode = (): boolean => Boolean(process.env.HEXA_TABLE_VIRTUAL)

export const withVirtualization = <T extends TableRecord = TableRecord>(
  props: Partial<ITableProps<T>>
): Partial<ITableProps<T>> => (
  isVirtualTestMode() && props.virtualization === undefined
    ? { ...props, virtualization: true }
    : props
)
