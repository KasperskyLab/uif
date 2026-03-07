import { ReactNode } from 'react'

export const cardImageModes = [
  'grey',
  'red',
  'white'
]

export type CardImageModes = typeof cardImageModes[number]

export type CardImageProps = {
  /* Иллюстрация / контент слева (обычно SVG ) */
  children: ReactNode,
  /* Основной заголовок над карточкой (H2) */
  title?: string,
  /* Возможность изменить backgroud children'а (default grey)*/
  mode?: CardImageModes
  /* Подзаголовок под основным заголовком (BTR2) */
  subTitle?: string,
  /* Цвет подзаголовка (также влияет на нижний отступ подзаголовка) */
  colorTitle?: 'primary' | 'secondary',
  /* Текстовое описание справа от изображения */
  text?: string,
  /* Нужен ли дополнительный верхний отступ у заголовка (32px, если true) */
  titlePaddingTop?: boolean,
  /* id для заголовка, используется для якорных ссылок */
  idTitle?: string,
  /* Ширина области с изображением (если не задана — используется 396px или 100% в зависимости от наличия текста) */
  widthImage?: number,
  /* Высота области с изображением (по умолчанию 184px, если не задана) */
  heightImage?: number,
  className?: string
}

export type CSSVars = React.CSSProperties & {
  ['--card-image-w']?: string
  ['--card-image-h']?: string
}