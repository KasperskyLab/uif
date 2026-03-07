import React from 'react'

import { Space } from '@kaspersky/hexa-ui'

import { CardImage } from '../../components/CardImage/CardImage'

import ButtonImage from './assets/Button.svg?react'
import DangerImage from './assets/danger.svg?react'
import DangerOutImage from './assets/dangerOut.svg?react'
import LoadingImage from './assets/loading.svg?react'
import PrimaryImage from './assets/primary.svg?react'
import SecondaryImage from './assets/secondary.svg?react'
import SizeImage from './assets/size.svg?react'
import StatesImage from './assets/states.svg?react'
import TertiaryImage from './assets/tertiary.svg?react'

const mockTexts = [
  `Основная кнопка, предназначенная для акцентирования внимания на ключевых действиях. Например кнопка «Сохранить» в форме
  Основная кнопка так же обозначает стартовое действие, продолжение шага последовательного сценария или завершение работы с формой
  На странице рекомендуется использовать только одну основную кнопку, за исключением случаев, когда одинаковое действие требуется для ряда однородных и равнозначных элементов`,
  'Второстепенная кнопка, предназначенная для дополнительных действий, которые не являются основными, но все же важны',
  'Используется для действий с низким приоритетом или вспомогательных действий, которые должны быть доступны, но не привлекать много внимания',
  'Основная кнопка для деструктивных действий с наивысшим приоритетом, которые требуют особого внимания пользователя. Эти действия обычно необратимы и могут иметь серьёзные последствия, например, удаление учетной записи, сброс всех настроек или удаление важной информации',
  'Второстепенная кнопка для деструктивных действий с меньшим приоритетом, которые не являются основными на странице, но всё же требуют подтверждения. Эта кнопка должна быть менее заметной, чем Destructive Primary, но всё же давать пользователю понять, что действие может привести к удалению или изменению данных'
]

export const contentTabOneAnchors = [
  { id: 'button-anatomy', label: 'Анатомия' },
  { id: 'button-mode', label: 'Mode' },
  { id: 'button-size', label: 'Size' },
  { id: 'button-state', label: 'State' },
  { id: 'button-loading', label: 'Loading' }
]

function ContentTabOne () {
  return (
    <>
      <CardImage title="Анатомия" titlePaddingTop={false} idTitle={contentTabOneAnchors[0].id}>
        <ButtonImage />
      </CardImage>

      <Space gap="grouped">
        <CardImage title="Mode" subTitle="mode = primary" colorTitle="secondary" text={mockTexts[0]} idTitle={contentTabOneAnchors[1].id} mode="white">
          <PrimaryImage />
        </CardImage>
        <CardImage subTitle="mode = secondary" colorTitle="secondary" text={mockTexts[1]}>
          <SecondaryImage />
        </CardImage>
        <CardImage subTitle="mode = tertiary" colorTitle="secondary" text={mockTexts[2]}>
          <TertiaryImage />
        </CardImage>
        <CardImage subTitle="mode = dangerFilled" colorTitle="secondary" text={mockTexts[3]} mode="red">
          <DangerImage />
        </CardImage>
        <CardImage subTitle="mode = dangerOutlined" colorTitle="secondary" text={mockTexts[4]} mode="red">
          <DangerOutImage />
        </CardImage>
      </Space>

      <CardImage title="Size" subTitle="Минимальная ширина кнопки 80 px, максимальная не ограничена и зависит от ширины текста" idTitle={contentTabOneAnchors[2].id}>
        <SizeImage />
      </CardImage>

      <CardImage title="State" idTitle={contentTabOneAnchors[3].id}>
        <StatesImage />
      </CardImage>

      <CardImage title="Loading" subTitle="loader всегда спозиционирован посередине кнопки во всех размерах" idTitle={contentTabOneAnchors[4].id}>
        <LoadingImage />
      </CardImage>
    </>
  )
}

export default ContentTabOne
