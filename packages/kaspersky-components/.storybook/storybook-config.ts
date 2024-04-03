/**
 * Во время билда и lint-тестов для v6 мы ничего не видим за пределами директории v6.
 * А при сборке сторибука все ок.
 */
/** @ts-ignore */
import { version as v3 } from '../../v3/package.json'
/** @ts-ignore */
import { version as v5 } from '../../v5/package.json'
import { version as v6 } from '../package.json'

const hostName = 'https://kasperskylab.github.io/uif'
const localhost = 'localhost:6006'
export default {
  storybook: {
    versions: {
      availableVersions: [
        { id: 1, title: 'v3 (latest)', href: 'v3', semver: v3 },
        { id: 2, title: 'v5 (latest)', href: 'v5', semver: v5 },
        { id: 3, title: 'v6 (alpha)', href: 'v6', semver: v6 }
      ],
      hostname: hostName,
      localhost
    }
  }
}
