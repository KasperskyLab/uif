/**
 * Во время билда и lint-тестов для hexa-ui мы ничего не видим за пределами директории hexa-ui.
 * А при сборке сторибука все ок.
 */
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
