import { Button } from '@src/button'
import { Card } from '@src/card'
import { Grid } from '@src/grid'
import { P, Text } from '@src/typography'
import React, { FC, MouseEvent, useCallback, useState } from 'react'

import { Onboarding } from '../Onboarding'
import {
  InteractiveTourStep,
  OnboardingInfoVariantProps,
  OnboardingLink,
  OnboardingModalProps,
  OnboardingTour,
  OnboardingTourVariantProps,
  OnboardingVariant
} from '../types'

import mainImage from './assets/main.png'
import stepImage from './assets/step.png'

const imageStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

export const demoContent = (
  <Text>
    <div style={{ ...imageStyle, marginBottom: 16 }}>
      <img src={mainImage} alt="Title" />
    </div>
    <P>
      С помощью модального окна можно оповестить пользователя о каком-либо скрытом функционале, который не лежит на поверхности.
    </P>
    <P>
      Если пользователь пропустил обучение, он может вернуться к нему через баннер, расположенный в сайдбаре.
      Баннер можно закрыть, если в нём нет необходимости.
    </P>
    <P>
      Если пользователь попросил больше не напоминать о данном обновлении, баннер отображаться в меню не будет.
    </P>
  </Text>
)

const commonStep = {
  image: (
    <div style={imageStyle}>
      <img src={stepImage} alt="Image" />
    </div>
  ),
  title: 'Onboarding title',
  text: 'Value text'
}

export const demoSteps: InteractiveTourStep[] = [
  {
    target: '#tour-demo-tasks',
    ...commonStep
  },
  {
    target: '#tour-demo-devices',
    ...commonStep
  },
  {
    target: '#tour-demo-policies',
    ...commonStep
  },
  {
    target: '#tour-demo-help',
    ...commonStep
  }
]

const demoBlocks = [
  { id: 'tour-demo-tasks', title: 'Tasks', text: 'Some text' },
  { id: 'tour-demo-devices', title: 'Devices', text: 'Some text' },
  { id: 'tour-demo-policies', title: 'Policies', text: 'Some text' }
]

type TourPlaygroundArgs = Pick<
  OnboardingTour,
  'placement' |
  'closeOnEsc' |
  'width'
>

export type OnboardingDemoProps = Partial<Omit<OnboardingModalProps, 'visible'>> & TourPlaygroundArgs & {
  variant?: OnboardingVariant,
  tour?: Partial<OnboardingTour>,
  defaultDontShowAgain?: boolean,
  link?: OnboardingLink,
  linkText?: string,
  openOnMount?: boolean,
  onTryNow?: OnboardingTourVariantProps['onTryNow'],
  onSkip?: OnboardingTourVariantProps['onSkip'],
  onDontShowAgainChange?: OnboardingTourVariantProps['onDontShowAgainChange'],
  onOk?: OnboardingInfoVariantProps['onOk']
}

const preventNavigation = (event: MouseEvent<HTMLAnchorElement>) => event.preventDefault()

export const OnboardingDemo: FC<OnboardingDemoProps> = ({
  variant = 'tour',
  tour,
  defaultDontShowAgain,
  link,
  linkText,
  openOnMount = true,
  content = demoContent,
  placement,
  closeOnEsc,
  width,
  onTryNow,
  onSkip,
  onDontShowAgainChange,
  onOk,
  onCancel,
  ...modalProps
}) => {
  const [visible, setVisible] = useState(openOnMount)

  const close = useCallback(() => setVisible(false), [])
  const open = useCallback(() => setVisible(true), [])

  const handleTryNow = useCallback((dontShowAgain: boolean) => {
    onTryNow?.(dontShowAgain)
    close()
  }, [onTryNow, close])

  const handleSkip = useCallback((dontShowAgain: boolean) => {
    onSkip?.(dontShowAgain)
    close()
  }, [onSkip, close])

  const handleOk = useCallback(() => {
    onOk?.()
    close()
  }, [onOk, close])

  const handleCancel = useCallback((event: MouseEvent<HTMLElement>) => {
    onCancel?.(event)
    close()
  }, [onCancel, close])

  const variantProps: OnboardingTourVariantProps | OnboardingInfoVariantProps = variant === 'tour'
    ? {
        variant: 'tour',
        tour: {
          steps: demoSteps,
          placement,
          closeOnEsc,
          width,
          ...tour
        },
        link: link ?? (linkText ? { text: linkText, href: '#', onClick: preventNavigation } : undefined),
        defaultDontShowAgain,
        onTryNow: handleTryNow,
        onSkip: handleSkip,
        onDontShowAgainChange
      }
    : {
        variant: 'info',
        link: link ?? (linkText ? { text: linkText, href: '#', onClick: preventNavigation } : undefined),
        onOk: handleOk
      }

  return (
    <>
      <Grid cols={3}>
        {demoBlocks.map(block => (
          <Card
            // @ts-expect-error Card does not have id prop
            id={block.id}
            key={block.id}
            title={{ value: block.title }}
          >
            {block.text}
          </Card>
        ))}
        <div>
          <Button
            id="tour-demo-help"
            mode="secondary"
            text="Show onboarding"
            disabled={visible}
            onClick={open}
          />
        </div>
      </Grid>
      <Onboarding
        {...modalProps}
        {...variantProps}
        content={content}
        visible={visible}
        onCancel={handleCancel}
      />
    </>
  )
}
