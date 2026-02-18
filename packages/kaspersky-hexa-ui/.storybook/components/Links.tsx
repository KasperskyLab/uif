import storybookConfig from '../storybook-config'

type Link = {
  id: string,
  title: string,
  href: string
}

export const links =
  storybookConfig.storybook.versions.availableVersions.reduce(
    (previousValue, version) => {
      return previousValue.concat({
        id: String(version.id),
        title: version.semver + ' ' + version.title,
        href: `${storybookConfig.storybook.versions.hostname}/${version.href}/`
      })
    },
    [] as Array<Link>
  )
