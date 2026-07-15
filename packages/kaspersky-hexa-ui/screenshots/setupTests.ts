import { toMatchComponentSnapshot } from './expectToMatchComponentSnapshot'

// @ts-expect-error не используем эти тесты
expect.extend({ toMatchComponentSnapshot })
