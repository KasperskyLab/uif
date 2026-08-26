import { ConfigProvider } from '@design-system/context'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

jest.mock('virtual:hexa-ui-changelog', () => ({
  __esModule: true,
  default: [
    {
      date: '2026-08-17',
      title: 'fix: Toggle tooltip',
      commitId: 'bc84768',
      sha: 'bc8476852bf1c1bfa1f93404a398f46ceb8b851b',
      author: '@Renata Bazhanova',
      version: '6.409.6',
      description: 'Исправлено всплывающее окно Toggle.',
      affectedFilesOrComponents: ['Toggle']
    },
    {
      date: '2026-08-17',
      title: 'fix: Table filters',
      commitId: 'ff8c0fe',
      sha: 'ff8c0fe1234567890abcdef1234567890abcdef',
      author: '@Nikita Afanasyev',
      version: '6.409.5',
      description: 'Исправлены фильтры таблицы.',
      affectedFilesOrComponents: ['Table']
    },
    {
      date: '2026-08-17',
      title: 'fix: no description',
      commitId: 'deaf123',
      sha: 'deaf1234567890abcdef1234567890abcdef123',
      author: '@Nikita Afanasyev',
      version: '6.409.4',
      description: '',
      affectedFilesOrComponents: []
    }
  ]
}), { virtual: true })

jest.mock('@src/link', () => ({
  Link: ({ href, text }: { href?: string, text?: string }) => <a href={href}>{text}</a>
}))

jest.mock('@src/tag', () => ({
  Tag: ({ children }: { children?: React.ReactNode }) => <span>{children}</span>
}))

jest.mock('@src/badge', () => ({
  Badge: ({ text }: { text?: React.ReactNode }) => <span>{text}</span>
}))

jest.mock('@src/search', () => ({
  Search: ({ value, onChange, onClearClick, testId, klId }: {
    value?: string,
    onChange?: (value: string) => void,
    onClearClick?: () => void,
    testId?: string,
    klId?: string
  }) => (
    <>
      <input
        kl-id={klId ?? testId}
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
      />
      <button aria-label="clear search" onClick={onClearClick} />
    </>
  )
}))

import { ComponentChangelog } from '@sb/components/Documentation/ComponentChangelog'

describe('ComponentChangelog', () => {
  test('uses changelog typography and entry row spacing', () => {
    render(
      <ConfigProvider>
        <ComponentChangelog component="Toggle" />
      </ConfigProvider>
    )

    const title = screen.getByText('fix: Toggle tooltip')

    expect(title.closest('.sb-unstyled')).toHaveClass('root')
    expect(title.parentElement).toHaveClass('titleToggle')
    expect(title.parentElement?.parentElement).toHaveClass('entryTitle')
    expect(title.parentElement?.parentElement?.parentElement).toHaveClass('entryMain')
    expect(screen.getByText('2026-08-17').parentElement).toHaveClass('entryMeta')
    expect(screen.getByText('Исправлено всплывающее окно Toggle.')).toHaveClass('detailsDescription')
  })

  test('uses H5 for component pages and supports an H3 title for the global page', () => {
    const { rerender } = render(
      <ConfigProvider>
        <ComponentChangelog component="Toggle" />
      </ConfigProvider>
    )

    expect(screen.getByRole('heading', { name: 'Changelog', level: 5 })).toBeInTheDocument()

    rerender(
      <ConfigProvider>
        <ComponentChangelog component="Toggle" headingType="H3" />
      </ConfigProvider>
    )

    expect(screen.getByRole('heading', { name: 'Changelog', level: 3 })).toBeInTheDocument()
  })

  test('renders all changelog entries when a component is not specified', () => {
    render(
      <ConfigProvider>
        <ComponentChangelog />
      </ConfigProvider>
    )

    expect(screen.getByText('fix: Toggle tooltip')).toBeInTheDocument()
    expect(screen.getByText('fix: Table filters')).toBeInTheDocument()
  })

  test('renders affected components as badges without their markdown section heading', async () => {
    render(
      <ConfigProvider>
        <ComponentChangelog component="Toggle" />
      </ConfigProvider>
    )

    await userEvent.click(screen.getByText('fix: Toggle tooltip'))

    expect(screen.queryByText('Затронутые файлы/компоненты')).not.toBeInTheDocument()
    expect(screen.getByText('Toggle').parentElement).toHaveClass('affectedComponents')
  })

  test('renders a description without a markdown list', async () => {
    const { container } = render(
      <ConfigProvider>
        <ComponentChangelog component="Toggle" />
      </ConfigProvider>
    )

    await userEvent.click(screen.getByText('fix: Toggle tooltip'))

    const details = container.querySelector('details')

    expect(details?.querySelector('p')).toHaveTextContent('Исправлено всплывающее окно Toggle.')
    expect(details?.querySelector('ul')).toBeNull()
    expect(details?.querySelector('li')).toBeNull()
  })

  test('shows an empty-description message for an entry without details', async () => {
    render(
      <ConfigProvider>
        <ComponentChangelog />
      </ConfigProvider>
    )

    await userEvent.click(screen.getByText('fix: no description'))

    expect(screen.getByText('Нет описания')).toBeInTheDocument()
  })

  test('shows an empty-search message when the query has no matching entries', async () => {
    render(
      <ConfigProvider>
        <ComponentChangelog component="Toggle" />
      </ConfigProvider>
    )

    await userEvent.type(screen.getByTestId('component-changelog-search'), 'not-a-match')

    expect(screen.getByText('По вашему запросу ничего не найдено.')).toBeInTheDocument()
    expect(screen.queryByText('fix: Toggle tooltip')).not.toBeInTheDocument()
  })

  test('restores the entries when the search is cleared', async () => {
    render(
      <ConfigProvider>
        <ComponentChangelog component="Toggle" />
      </ConfigProvider>
    )

    await userEvent.type(screen.getByTestId('component-changelog-search'), 'not-a-match')
    await userEvent.click(screen.getByRole('button', { name: 'clear search' }))

    expect(screen.getByText('fix: Toggle tooltip')).toBeInTheDocument()
    expect(screen.queryByText('По вашему запросу ничего не найдено.')).not.toBeInTheDocument()
  })

  test('builds the commit URL from the hardcoded template and sha', () => {
    render(
      <ConfigProvider>
        <ComponentChangelog component="Toggle" />
      </ConfigProvider>
    )

    expect(screen.getByRole('link', { name: 'bc84768' })).toHaveAttribute(
      'href',
      'https://hqrndtfs.avp.ru/tfs/DefaultCollection/Monorepo/_git/Monorepo/commit/bc8476852bf1c1bfa1f93404a398f46ceb8b851b'
    )
  })
})
