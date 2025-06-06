## Palette

Ознакомиться с текущей палитрой можно [тут](https://kasperskylab.github.io/uif/components/?path=/story/design-colors--full-palette)

Палитра предполагает наличие двух тем: светлой и темной. Цвета светлой темы имеют дополнение __Light, темной — __Dark

### Цветовые палитры

Цветовая палитра подразумевает деление на две: цвета, которые имеют темную и светлую темы, и фиксированные цвета, не меняющиеся при изменении темы

* Динамические цвета - имеют пару в темной теме
* Статичные цвета - одинаковы в темной и светлой темах
* Базовые цвета - являются базой для статичных и нестатичных палитр
* Второстепенные цвета - остаются одинаковыми в темной/светлой темах. Являются базовыми (на них могут ссылаться другие палитры), но также используются самостоятельно, н-р, в графиках

### Как работать в теме с палитрой?

* Для работы с палитрой в рамках стилизации компонента создаются объекты с цветами и размерами (если необходимо). Если у компонента несколько состояний, например, active, focus, pressed - объект имеет вид:

````

const component = {
  active: {
    ...
  },
  focus: {
    ...
  },
  pressed: {
    ...
  }
}

````

Для примера можно взять стилизацию компонента [button в dark теме](../theme/themes/dark/button.ts)

### Как добавить свою палитру?

Данный вопрос необходимо обсудить с ментейнерами проекта в рамках отдельной задачи в виде __github issue__

### Токены 

* Выгрузка цветовой палитры из фигмы производится в файл tokens/figma-colors-tokens.json.
* На его основании gulp task - updateColors строит файл с __токенами цвета__ tokens/palette.ts.

Так выглядит группа токенов палитры, которые симантически группируются в токенты тем ( ниже будет рассмотрен объект themeColors )

```json

const palette = {
  "staticblack": "rgba(13, 13, 21, 1)",
  "staticwhite": "rgba(255, 255, 255, 1)",
  "lga900": "rgba(8, 89, 165, 0.02)",
  "lga800": "rgba(15, 81, 157, 0.04)",
  "lga700": "rgba(41, 77, 117, 0.09)",
  "lga600": "rgba(29, 54, 83, 0.17)",
  "lga500": "rgba(31, 50, 71, 0.27)",
  ...
}

```

__Токены__ – это атомарная сущность в виде переменной с конкретным значением. 
__Итоговая задача токена__ - сконвертироваться в значение, которое подразумевает некоторое __css-свойство__. 
Токены Дизайн-системы __сгруппированы в смысловые группы и собраны в один объект__.

```json

export const themeColors = {
  "text-icons-elements": {
    "primary": {
      "light": "rgba(13, 13, 21, 1)", <-- staticblack из объекта palette
      "dark": "rgba(245, 248, 251, 1)"
    },
  ...
  },
  "bg": {
    "base": {
      "light": "rgba(255, 255, 255, 1)",
      "dark": "rgba(13, 13, 21, 1)"
    },
    "alternative": {
      "light": "rgba(248, 250, 252, 1)",
      "dark": "rgba(26, 25, 37, 1)"
    },
    "alternative2": {
      "light": "rgba(244, 247, 250, 1)",
      "dark": "rgba(29, 28, 40, 1)"
    }
  },
  ...
  "fixedneutralcolor_baseiconwhite": "rgba(231, 241, 253, 0.49)",
  "fixedneutralcolor_separatorwhite": "rgba(191, 197, 238, 0.12)",
  ...
}

```
## Темы

### Как устроена тема? 

__Тема__ состоит из набора __токенов__
Например, так выглядит группа токенов цвета для текста и иконок ( тема light ), каждый из алиасов ( primary ) свойства цвета (`"rgba(13, 13, 21, 1)"`) является отдельным токеном.
Аналогичная группа существует и для других тем ( например, dark)

```json
{
    light: {
        "text-icons-elements": {
          "primary": "rgba(13, 13, 21, 1)",
          "secondary": "rgba(42, 53, 65, 0.85)",
          "secondary2": "rgba(42, 53, 65, 0.7)",
        }
    }, 
    dark: {
      ...
    }
}
```

Зачастую токены можно использовать в любом контексте так как их имена носят довольно абстрактный характер


### Как добавить свою тему?

* Все темы находятся в директории themes
* По подобию с созданием уже существующих тем, необходимо создать директорию с Вашей темой ( Например: themes/midnight )
* Основным файлом внутри вышесозданной директории будет файл colors.ts, содержащий объект colors с цветами вашей темы. Объект содержит алиасы в качестве наименования цветов и вышеупомянутые __токены__ палитры.
> Важно! Базовой темой, от которой наследуются остальные является light тема. В качестве примера можно посмотреть как устроенна [Dark тема](../theme/themes/dark/colors.ts)
* Для того, чтобы компонент использовал вашу тему, для него необходимо создать отдельный файл в папке themes/ для каждой темы. Например, themes/dark/button.ts 
> Важно! Для стилизации компонента используются только Токены компонента. 
* В каждой директории темы есть index файл, который содержит агрегирующий объект темы для всех компонентов-участников этой темы. 

Ниже размерем агрегирующий объект на примере dark темы
```json

// design-system/theme/themes/dark/index.ts

import { ThemeKey, ThemeConfig } from '../../../types' 
import { COMMON_THEME } from '../common-theme'
import { colors } from './colors' <-- токены цвета темы dark -  design-system/theme/themes/dark/colors.ts
import { button, buttonSize } from './button' <-- токены компонента кнопки
import { link, linkSize } from './link'
import { badge, badgeSize } from './badge'

export const DARK_THEME: ThemeConfig = {
  ...COMMON_THEME, <-- общие токены которые участвуют во всех темах (shapes, spaces e.g)
  key: ThemeKey.Dark, <-- ключ темы 
  colors, <-- токены цвета этой темы  ( в данном случае токены цвета dark темы - design-system/theme/themes/dark/colors.ts)
  components: { <-- объект с токенами компонентов
    button: { <-- агрегация токенов для компонента <кнопка>
      colors: button({ colors, effects }), <-- токены цвета кнопки
      sizes: buttonSize <-- размерные токены кнопки
    },
    link: {  <-- агрегация токенов для компонента <link>
      colors: link({ colors, effects }),
      sizes: linkSize
    },
    badge: { <-- агрегация токенов для компонента <badge>
      colors: badge({ colors, effects }),
      sizes: badgeSize
    },

```

#### Структура

* tokens/palette.ts - Глобальные токены
* themes/*theme*/colors.ts - Aliases
* themes/*theme*/*component* - Токены компонент
* themes/light - Базовая тема. Все другие темы расширяют базовую
