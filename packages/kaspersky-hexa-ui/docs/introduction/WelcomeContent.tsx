/// <reference path="./welcome-styles.d.ts" />
import React, { useEffect, useState } from 'react'
import { Button, Link, Text } from '@kaspersky/hexa-ui'
import { DocPageLayout } from '@sb/components/Documentation'

import './Welcome.css'
import { version as hexaVersion } from '../../package.json'
import { HexaHero } from './HexaHero'
import { WelcomeArt, MemberAvatar } from './WelcomeArt'
import { WelcomeSections } from './WelcomeSections'
import { findDocsEntry, getManagerUrl, makeDocsHref, componentStats } from './welcomeRoutes'
import {
  leads,
  dsDesigners,
  dsDevelopers,
  contributors,
  type TeamMember,
} from './WelcomeData'
import type { IndexEntry } from './welcomeRoutes'
type IndexState = {
  entries: IndexEntry[]
  status: 'loading' | 'ready' | 'error'
  managerUrl: string
}

function useIndex(): IndexState {
  const [state, setState] = useState<IndexState>({ entries: [], status: 'loading', managerUrl: '' })
  useEffect(() => {
    const controller = new AbortController()
    const managerUrl = getManagerUrl(window.location.href, (() => {
      try { return window.parent.location.href } catch { return undefined }
    })())
    const indexUrl = new URL('index.json', managerUrl)
    fetch(indexUrl.href, { signal: controller.signal })
      .then(response => {
        if (!response.ok) throw new Error('Storybook index unavailable')
        return response.json()
      })
      .then(data => {
        if (!data.entries || typeof data.entries !== 'object') throw new Error('Invalid Storybook index')
        setState({ entries: Object.values(data.entries).filter((entry): entry is IndexEntry =>
          typeof entry === 'object' && entry !== null &&
          'id' in entry && typeof entry.id === 'string' &&
          'title' in entry && typeof entry.title === 'string' &&
          'type' in entry && typeof entry.type === 'string'
        ), status: 'ready', managerUrl })
      })
      .catch(() => {
        if (!controller.signal.aborted) setState({ entries: [], status: 'error', managerUrl })
      })
    return () => controller.abort()
  }, [])
  return state
}

const routes = {
  components: ['Components/Overview', 'Components/Витрина компонентов', "Hexa UI Components/Витрина компонентов"],
  designers: ['Introduction/Для дизайнеров'],
  developers: ['Introduction/Для разработчиков'],
  changelog: ['Introduction/Changelog', 'Changelog'],
  welcome: ['Introduction/Welcome'],
  ecosystem: ['Ecosystem/Обзор'],
  testing: ['Testing/Тестовые атрибуты', "Docs/Работа с тестовыми атрибутами (testId, klId, useTestAttribute)"],
  colors: ['Foundations/Colors', "Design Tokens/Colors"],
  spacing: ['Foundations/Spacing & Layout', "Design Tokens/Sizing & Spacing"],
  install: ['Work with HEXA/Подключение и вклад/Установка и инициализация', "Docs/Установка и инициализация"],
  architecture: ['Work with HEXA/Правила работы/Архитектура компонентов', "Docs/Архитектура компонентов"],
  development: ['Work with HEXA/Правила работы/Разработка компонентов', "Docs/Разработка компонентов"],
  typing: ['Work with HEXA/Правила работы/Типизация компонентов', "Docs/Типизация компонентов"],
  migration: ['Work with HEXA/Версии и миграция/Переход на Hexa UI', "Docs/Переход на Hexa UI"],
} as const

type RouteKey = keyof typeof routes

function RouteLink({ index, route, children, primary = false }: {
  index: IndexState
  route: RouteKey
  children: React.ReactNode
  primary?: boolean
}) {
  const entry = findDocsEntry(index.entries, routes[route])
  if (!entry) return (
    <span className="hexa-welcome-pending">
      <Text type="BTR4">{children}</Text>
      <Text type="BTR4">{index.status === 'loading' ? 'Загрузка…' : index.status === 'error' ? 'Ссылка временно недоступна' : 'Скоро будет'}</Text>
    </span>
  )
  const href = makeDocsHref(index.managerUrl, entry.id)
  if (primary) return <Button mode="primary" size="medium" onClick={() => {
    window.open(href, '_top')
  }}>{children}</Button>
  return <Link href={href} target="_top" size="medium">{children}</Link>
}

function Heading({ children, level = 2 }: { children: React.ReactNode; level?: 1 | 2 | 3 }) {
  return <Text type={level === 1 ? 'H2' : level === 2 ? 'H4' : 'H5'} htmlTag={level === 1 ? 'h1' : level === 2 ? 'h2' : 'h3'}>{children}</Text>
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="hexa-welcome-section"><Heading>{title}</Heading>{children}</section>
}

/** One real link per card: pointer, keyboard and open-in-new-tab use the same destination. */
function RoleCard({ index, route, title, description, action, art }: {
  index: IndexState
  route: RouteKey
  title: string
  description: string
  action: string
  art: string
}) {
  const entry = findDocsEntry(index.entries, routes[route])
  const content = <>
    <Heading level={3}>{title}</Heading>
    <Text type="BTR3">{description}</Text>
    <div className="hexa-role-card__art"><WelcomeArt kind={art} /></div>
    <span className="hexa-role-card__action">{action}</span>
    {!entry && <span className="hexa-role-card__status">{index.status === 'loading' ? 'Загрузка…' : index.status === 'error' ? 'Ссылка временно недоступна' : 'Скоро будет'}</span>}
  </>
  return entry
    ? <a className="hexa-role-card" href={makeDocsHref(index.managerUrl, entry.id)} target="_top">{content}</a>
    : <article className="hexa-role-card" data-unavailable>{content}</article>
}

function Page({ children, withoutNavigation = false }: { children: React.ReactNode; withoutNavigation?: boolean }) {
  const content = <div className="hexa-welcome">{children}</div>
  return withoutNavigation ? <div className="hexa-welcome-page">{content}</div> : <DocPageLayout>{content}</DocPageLayout>
}


function People({ people }: { people: TeamMember[] }) {
  return (
    <ul className="hexa-team-grid">
      {people.map((person, i) => (
        <li className="hexa-team-card" key={person.name}>
          <div className="hexa-team-photo">
            {person.avatar ? (
              <img src={person.avatar} alt="" loading="lazy" decoding="async" />
            ) : (
              <MemberAvatar index={i} />
            )}
          </div>

          <div className="hexa-person-copy">
            {person.href ? (
              <Link
                href={person.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {person.name}
              </Link>
            ) : (
              <Text type="BTR3">{person.name}</Text>
            )}
            <Text type="BTR4">{person.role}</Text>
          </div>
        </li>
      ))}
    </ul>
  )
}

function TeamGroup({
  title,
  caption,
  people,
}: {
  title: string
  caption: string
  people: TeamMember[]
}) {
  return (
    <section className="hexa-team-group">
      <div className="hexa-team-group__head">
        <div className="hexa-team-group__meta">
          {title}
        </div>
        <Text type="BTR4">{caption}</Text>
      </div>

      <People people={people} />
    </section>
  )
}


export function WelcomePage() {
  const index = useIndex()
  const stats = componentStats(index.entries)
  const available = (route: RouteKey) => Boolean(findDocsEntry(index.entries, routes[route]))
  const value = (count: number) => index.status === 'ready' ? String(count) : '—'
  return <Page withoutNavigation>


    <HexaHero action={
      <RouteLink index={index} route="components" primary>
        Перейти к компонентам
      </RouteLink>
    } />

    <section className="hexa-welcome-section" aria-label="Краткая статистика библиотеки">
      <div className="hexa-welcome-stats">
        {[[value(stats.components), 'Компоненты', 'в библиотеке'], [value(stats.stories), 'Примеры', 'использования компонентов'], [`v${hexaVersion}`, 'Версия библиотеки', 'HEXA UI']].map(([count, label, detail]) => <div key={`${label}-${detail}`} className="hexa-stat"><Text type="BTR4">{label}</Text><Text type="H2">{count}</Text><Text type="BTR4">{detail}</Text></div>)}
      </div>
      {index.status !== 'ready' && <Text type="BTR4">{index.status === 'loading' ? 'Загружаем сводку библиотеки…' : 'Сводка временно недоступна.'}</Text>}
    </section>
    <div className="hexa-welcome-grid hexa-welcome-grid-two">
      <RoleCard index={index} route="designers" title="Для дизайнеров"
        description="От визуальных основ до готовых решений для ваших макетов."
        action="Начать проектирование" art="design" />
      <RoleCard index={index} route="developers" title="Для разработчиков"
        description="От подключения библиотеки до первого компонента в продукте."
        action="Начать разработку" art="development" />
    </div>
    <Section title="Разделы документации">
      <WelcomeSections items={[
        { id: 'components', title: 'Components', description: 'Готовые компоненты. От выбора элемента до настройки поведения.', disabled: !available('components'), links: <RouteLink index={index} route="components">Открыть каталог</RouteLink> },
        { id: 'foundations', title: 'Foundations', description: 'Общий визуальный язык. Цвета, типографика, сетка и отступы.', status: 'Наполняется', disabled: !available('colors'), links: <RouteLink index={index} route="colors">Изучить основы</RouteLink> },
        { id: 'work', title: 'Work with HEXA', description: 'Подключение библиотеки и правила разработки продуктовых интерфейсов.', disabled: !available('developers'), links: <RouteLink index={index} route="developers">Начать работу</RouteLink> },
        { id: 'ecosystem', title: 'Ecosystem', status: 'Скоро будет', description: 'Одна экосистема. Больше инструментов для ваших продуктов.', disabled: !available('ecosystem'), links: <RouteLink index={index} route="ecosystem">Graphs · Icons · Charts</RouteLink> },
        { id: 'testing', title: 'Testing', status: 'Наполняется', description: 'Состояния и поведение. Темы и локализации. Уверенность в результате.', disabled: !available('testing'), links: <RouteLink index={index} route="testing">Правила тестирования</RouteLink> },
        { id: 'patterns', title: 'Patterns', status: 'Скоро будет', description: 'Типовые продуктовые сценарии.' },
        { id: 'lab', title: 'Lab', status: 'Скоро будет', description: 'Компоненты в сборе. Проверка идей.' },
      ]} />
    </Section>
    
<Section title="Команда дизайн-системы">
  <div className="hexa-team-system">
    <TeamGroup
      title="Лиды"
      caption="Стратегия и развитие дизайн-системы"
      people={leads}
    />

    <TeamGroup
      title="Дизайнеры"
      caption="Визуальный язык, компоненты и паттерны"
      people={dsDesigners}
    />

    <TeamGroup
      title="Разработчики"
      caption="Реализация и развитие библиотеки"
      people={dsDevelopers}
    />
  </div>
</Section>
    <section className="hexa-contributors">
      <div><Heading>Команда UIF</Heading><Text type="BTR3">Спасибо всем, кто делает Hexa UI лучше.</Text></div>
      <People people={contributors} />
    </section>
  </Page>
}

function GuideStep({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return <article className="hexa-guide-step">
    <span className="hexa-guide-step__number" aria-hidden="true">{number}</span>
    <Heading level={3}>{title}</Heading>
    {children}
  </article>
}

export function DesignStartPage() {
  const index = useIndex()
  return <Page withoutNavigation>
    <header className="hexa-guide-hero">
      <div className="hexa-guide-hero__copy">
        <Heading level={1}>Для дизайнеров</Heading>
        <p>Визуальные основы, библиотека в Pixso и готовые компоненты для продуктовых интерфейсов.</p>
        <RouteLink index={index} route="components" primary>Выбрать компонент</RouteLink>
      </div>
      <div className="hexa-guide-hero__art"><WelcomeArt kind="design" /></div>
    </header>
    <Section title="С чего начать">
      <div className="hexa-guide-steps">
        <GuideStep number="01" title="Изучите визуальные основы">
          <p>Используйте согласованные цвета и отступы. Проверяйте, для какой темы и состояния предназначено выбранное значение.</p>
          <div className="hexa-guide-links"><RouteLink index={index} route="colors">Цвета</RouteLink><RouteLink index={index} route="spacing">Сетка и отступы</RouteLink></div>
        </GuideStep>
        <GuideStep number="02" title="Выберите готовое решение">
          <p>Найдите компонент под сценарий. Сопоставьте его назначение и ограничения с задачей, затем изучите примеры.</p>
          <RouteLink index={index} route="components">Каталог компонентов</RouteLink>
        </GuideStep>
      </div>
    </Section>
    <section className="hexa-guide-note">
      <Heading level={3}>Библиотека в Pixso</Heading>
      <p>Используйте библиотеку HEXA UI в Pixso для работы с компонентами. Если проект недоступен, уточните доступ у команды дизайн-системы.</p>
      <Link href=" target="_blank" rel="noopener noreferrer" size="medium">Открыть библиотеку в Pixso</Link>
    </section>
  </Page>
}

export function DevelopmentStartPage() {
  const index = useIndex()
  return <Page withoutNavigation>
    <header className="hexa-guide-hero">
      <div className="hexa-guide-hero__copy">
        <Heading level={1}>Для разработчиков</Heading>
        <p>Подключение HEXA UI, API компонентов и правила работы с библиотекой.</p>
        <RouteLink index={index} route="install" primary>Подключить библиотеку</RouteLink>
      </div>
      <div className="hexa-guide-hero__art"><WelcomeArt kind="development" /></div>
    </header>
    <Section title="Первый компонент в продукте">
      <div className="hexa-guide-steps">
        <GuideStep number="01" title="Подключите HEXA UI">
          <p>Следуйте инструкции по установке и инициализации: подключите необходимые стили и настройте окружение проекта.</p>
          <RouteLink index={index} route="install">Установка и инициализация</RouteLink>
        </GuideStep>
        <GuideStep number="02" title="Изучите API и примеры">
          <p>Найдите компонент, проверьте доступные параметры и события. Сравните поведение примера с вашим сценарием.</p>
          <RouteLink index={index} route="components">Каталог компонентов</RouteLink>
        </GuideStep>
      </div>
    </Section>
    <Section title="Правила разработки">
      <div className="hexa-guide-checks">
        <article><Heading level={3}>Архитектура</Heading><p>Изучите устройство компонентов и принятые правила перед доработкой библиотеки.</p><RouteLink index={index} route="architecture">Архитектура компонентов</RouteLink></article>
        <article><Heading level={3}>Реализация</Heading><p>Сверяйте структуру и поведение нового решения с правилами HEXA UI.</p><RouteLink index={index} route="development">Разработка компонентов</RouteLink></article>
        <article><Heading level={3}>Типизация</Heading><p>Проверяйте контракты свойств и событий, чтобы API компонента оставался понятным.</p><RouteLink index={index} route="typing">Типизация компонентов</RouteLink></article>
        <article><Heading level={3}>Миграция</Heading><p>Перед переходом изучите инструкции и изменения, которые затрагивают ваш продукт.</p><RouteLink index={index} route="migration">Переход на HEXA UI</RouteLink></article>
      </div>
    </Section>
    <section className="hexa-guide-note">
      <Heading level={3}>Проверяйте версию перед обновлением</Heading>
      <p>Сопоставьте используемую версию библиотеки с изменениями в релизах. Учитывайте изменение API и поведения компонентов.</p>
      <RouteLink index={index} route="changelog">Открыть Changelog</RouteLink>
    </section>
  </Page>
}
