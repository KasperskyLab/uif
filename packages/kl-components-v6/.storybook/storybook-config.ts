import { version as v6 } from '../package.json'
const hostName = 'https://127.0.0.1'
const localhost = 'localhost:6006'
export default {
  storybook: {
    versions: {
      availableVersions: [
        { id: 3, title: 'alpha', href: 'v6', semver: v6 }
      ],
      hostname: hostName,
      localhost
    }
  }
}
