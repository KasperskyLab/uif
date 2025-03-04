/**
 * Во время билда и lint-тестов для hexa-ui мы ничего не видим за пределами директории hexa-ui.
 * А при сборке сторибука все ок.
 */
/** @ts-ignore */
import { version as v3 } from '../../kl-components/v3/package.json'
/** @ts-ignore */
import { version as v5 } from '../../kl-components/v5/package.json'
import { version as hexaUI } from '../package.json'

const hostName = 'https://127.0.0.1'
const localhost = 'localhost:6006'
export default {
  storybook: {
    versions: {
      availableVersions: [
        { id: 3, title: 'Hexa UI (LTS)', href: 'v6', semver: hexaUI }
      ],
      hostname: hostName,
      localhost
    }
  }
}
