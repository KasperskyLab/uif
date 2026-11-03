import { badges } from '@sb/badges'
import {
  buildStoryArgTypes,
  getControlsInclude,
  PropPresentationMap
} from '@sb/components/Documentation'
import { withMeta } from '@sb/components/Meta'
import { Button } from '@src/button'
import { Card } from '@src/card'
import { CodeViewer } from '@src/code-viewer'
import { Grid } from '@src/grid'
import { Markdown } from '@src/markdown'
import { Meta, StoryObj } from '@storybook/react'
import React, { FC, useState } from 'react'

import MetaData from '../__meta__/meta.json'
import { Onboarding } from '../Onboarding'

import {
  defaultArgs,
  defaultTourArgs,
  interactiveTourPropPresentation,
  onboardingPropPresentation
} from './Onboarding.controls'
import { demoContent, OnboardingDemo, OnboardingDemoProps } from './Onboarding.demo'

const tourPlaygroundKeys = [
  'placement',
  'closeOnEsc',
  'width'
] as const

const playgroundPropPresentation: PropPresentationMap = {
  ...onboardingPropPresentation,
  ...Object.fromEntries(
    tourPlaygroundKeys.map(key => [
      key,
      {
        ...interactiveTourPropPresentation[key],
        description: `${interactiveTourPropPresentation[key].description}. Передаётся через \`tour\`, только для вариации \`tour\``
      }
    ])
  )
}

export const onboardingStorySettings: Meta<OnboardingDemoProps> = {
  argTypes: buildStoryArgTypes(playgroundPropPresentation),
  args: {
    ...defaultArgs,
    ...defaultTourArgs,
    testId: 'onboarding-test-id',
    klId: 'onboarding-kl-id'
  },
  parameters: {
    badges: [badges.stable, badges.reviewedByDesign],
    docs: {
      page: withMeta(MetaData)
    }
  }
}

const meta: Meta<OnboardingDemoProps> = {
  title: 'Hexa UI Components/Onboarding',
  component: Onboarding as Meta<OnboardingDemoProps>['component'],
  tags: ['!autodocs'],
  includeStories: ['Playground', 'HowItWorks'],
  excludeStories: ['onboardingStorySettings'],
  ...onboardingStorySettings
}

export default meta

type Story = StoryObj<OnboardingDemoProps>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(playgroundPropPresentation),
      sort: 'none'
    }
  },
  render: (args: OnboardingDemoProps) => <OnboardingDemo {...args} />
}

const howItWorksInfo = `
### Как это работает
\`Onboarding\` — модальное окно поверх контента. Поведение задаётся пропом **\`variant\`**:
- **\`info\`** — простое окно с текстом и кнопкой "OK" (и опциональной ссылкой). Достаточно передать \`content\` и колбэк \`onOk\`.
- **\`tour\`** — та же модалка, но кнопка "Try now" запускает интерактивный тур по элементам страницы. Шаги задаются через \`tour.steps\` (каждый шаг указывает на \`target\` — селектор, элемент или ref).

Видимостью управляет проп \`visible\`. Закрытие — колбэки: \`onCancel\` (крестик/оверлей), \`onSkip\` (кнопка "Skip" в туре), \`onOk\` (кнопка "OK" у \`info\`).

Минимальный пример с вариацией \`tour\`:
`

const basicExample = `
import { useState } from 'react'
import { Onboarding, Button, Card, Grid } from '@kaspersky/hexa-ui'

const blocks = [
  { id: 'blocks-tasks', title: 'Tasks' },
  { id: 'blocks-devices', title: 'Devices' },
  { id: 'blocks-policies', title: 'Policies' }
]

export const BasicOnboardingTour = () => {
  const [visible, setVisible] = useState(false)

  const steps = blocks.map((block, index) => ({
    target: \`#\${block.id}\`,
    title: \`Step \${index + 1}\`,
    text: \`Тур бежит по элементу "\${block.title}"\`
  }))

  return (
    <>
      <Grid cols={3}>
        {blocks.map(block => (
          <Card key={block.id} id={block.id} title={{ value: block.title }}>
            Some text
          </Card>
        ))}
      </Grid>
      <Button text="Open onboarding" onClick={() => setVisible(true)} />
      <Onboarding
        variant="tour"
        visible={visible}
        header="What's new"
        content="Текст о скрытом функционале, о котором нужно рассказать пользователю."
        tour={{ steps, onFinish: () => setVisible(false) }}
        onCancel={() => setVisible(false)}
        onTryNow={() => {}}
        onSkip={() => setVisible(false)}
      />
    </>
  )
}
`

const BasicOnboardingDemo: FC = () => {
  const [visible, setVisible] = useState(false)

  const blocks = [
    { id: 'tour-doc-tasks', title: 'Tasks' },
    { id: 'tour-doc-devices', title: 'Devices' },
    { id: 'tour-doc-policies', title: 'Policies' }
  ]

  const steps = blocks.map((block, index) => ({
    target: `#${block.id}`,
    title: `Step ${index + 1}`,
    text: `Тур бежит по элементу "${block.title}"`
  }))

  return (
    <>
      <Grid cols={3}>
        {blocks.map(block => (
          <Card
            key={block.id}
            // @ts-expect-error Card does not have id prop
            id={block.id}
            title={{ value: block.title }}
          >
            Some text
          </Card>
        ))}
      </Grid>
      <Button text="Open onboarding" onClick={() => setVisible(true)} />
      <Onboarding
        variant="tour"
        visible={visible}
        header="What's new"
        content={demoContent}
        tour={{ steps, onFinish: () => setVisible(false) }}
        onCancel={() => setVisible(false)}
        onTryNow={() => {}}
        onSkip={() => setVisible(false)}
      />
    </>
  )
}

export const HowItWorks: Story = {
  name: 'How it works',
  render: () => (
    <>
      <Markdown value={howItWorksInfo} />
      <CodeViewer
        initialValue={basicExample}
        // @ts-expect-error костыль для стори
        language="typescript"
        readonly
        width={1400}
        height={370}
      />
      <BasicOnboardingDemo />
    </>
  ),
  parameters: {
    controls: {
      disable: true
    }
  },
  tags:['skip-visual']
}
