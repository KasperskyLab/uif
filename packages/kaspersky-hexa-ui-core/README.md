# Hexa UI Core

Пакет дизайн-системы Hexa UI. Разделен на три домена: шрифты, токены типографии, токены цветов.

---

* [Установка](#установка)
* [Использование в проекте](#использование-в-проекте)
    - [Шрифты](#шрифты)
    - [Токены типографии](#токены-типографии)
    - [Токены цветов](#токены-цветов)
* [Обновление токенов](#обновление-токенов-for-maintainers)
* [Сборка пакета](#сборка-пакета)
* [Ресурсы](#ресурсы)

---

## Установка

```shell
npm install @kaspersky/hexa-ui-core
```

## Использование в проекте

### Шрифты

```tsx
import '@kaspersky/hexa-ui-core/fonts'
```

На странице создается элемент `<style class="hexa-ui-fonts"></style>`, в котором определены источники шрифтов.

При SSR подключение шрифтов происходит следующим образом:

```tsx
import '@kaspersky/hexa-ui-core/fonts/tokens.css'
```

### Токены типографии

```tsx
import '@kaspersky/hexa-ui-core/typography/css'
```

На странице создается элемент `<style class="hexa-ui-typography"></style>`, в котором определены css-variables для токенов типографии.

```tsx
import { typography }  from '@kaspersky/hexa-ui-core/typography/js'
```

_Экспортируемые объекты и типы:_
+ `typography` - объект с токенами типографии
+ `Typography` - тип токенов типографии

При SSR подключение токенов типографии происходит следующим образом:

```tsx
import '@kaspersky/hexa-ui-core/typography/tokens.css'
```

### Токены цветов

```tsx
import '@kaspersky/hexa-ui-core/colors/css'
```

На странице создается элемент `<style class="hexa-ui-colors"></style>`, в котором определены css-variables для токенов цветов.

```tsx
import '@kaspersky/hexa-ui-core/colors/css/static'
import '@kaspersky/hexa-ui-core/colors/css/button'
```

На странице создается элемент `<style class="hexa-ui-colors-static"></style>`, в котором определены css-variables для токенов цветов из статической палитры, а также элемент `<style class="hexa-ui-colors-button"></style>`, в котором определены css-variables для токенов цветов конкретного компонента (в примере - `button`).

> **_ВАЖНО_**
>
> Возможность подключать токены цветов конкретного компонента уменьшает итоговый размер бандла, но при таком подходе важно всегда импортировать статические цвета, так как переменные для компонентов на них ссылаются.

```tsx
import { colors }  from '@kaspersky/hexa-ui-core/colors/js'
```

_Экспортируемые объекты:_
+ `colors` - цвета из статической базовой палитры (в том числе **устаревшей**)
+ `productColors` - цвета, имеющие пару в темной теме, предназначены для продуктовых команд для раскраски некоторых компонентов (например, иконок) и всего, что не является компонентом
+ `componentColors` - цвета, имеющие пару в темной теме, предназначены для раскраски компонентов библиотеки
+ `themeColors` - **устаревшие** цвета, имеющие пару в темной теме
+ `allColors` - `colors` + `themeColors` + `productColors` + `componentColors`
+ `shortcutsV6` (**устаревшие**), `productColorsShortcuts`, `componentColorsShortcuts` - цвета, имеющие пару в темной теме (другая структура объекта)
+ `shortcuts` - `productColorsShortcuts` + `componentColorsShortcuts` + `shortcutsV6`

При SSR подключение токенов цветов происходит следующим образом:

```tsx
import '@kaspersky/hexa-ui-core/colors/tokens.css'
```

### Сборка пакета

```shell
npm run build
```

В корне пакета создается директория `/dist` со сборкой пакета в двух основных форматах: CommonJS и ESM.

### Обновление токенов (for maintainers)

```shell
npm run update-colors
npm run update-typography
```

Команда `update-colors` обновляет токены цветов в пакете: создает новую палитру цветов по импортированным токенам из Figma в формате JSON, генерирует css-variables для токенов.

Команда `update-typography` обновляет токены типографии в пакете: генерирует JSON-файл с токенами типографии, генерирует css-variables для токенов.

### Обновление токенов (for designers)

_{base_path} = /full/path/to/repo/product/osmp/web/packages/packages_

Перед первым обновлением токенов однократно выполнить следующее: создать .env файл по аналогии с .env.example.

1. Перейти в директорию с пакетом компонентов @kaspersky/hexa-ui (_{base_path}/kaspersky-hexa-ui_). Установить или обновить node_modules.

```shell
npm i
```

2. Установить или обновить node_modules в пакете @kaspersky/hexa-ui-core.

```shell
npm i
```

3. Копирование токенов

#### (Pixso) [NEW]

Экспортированные из Pixso JSON-файлы с необходимыми обновлениями скопировать в `./src/colors/tokens-pixso/_`, заменив существующие. Для статических токенов название файла следующее - `static-tokens.json`, для токенов продукта - `product-tokens.json`, для семантических токенов - `semantic-tokens.json`, а для токенов виджетов - `widget-tokens.json`. Добавить только файлы, в которых есть изменения.


#### (Figma) [OLD]

Скопировать JSON-файлы (`static-tokens.json`, `product-tokens.json`, `component-tokens.json`, `widget-tokens.json`) из директории `./src/colors/tokens` в директорию `./src/colors/tokens/_`, заменив существующие.

Экспортированные из Figma JSON-файлы с необходимыми обновлениями скопировать в `./src/colors/tokens/_`, заменив существующие. Для статических токенов название файла следующее - `static-tokens.json`, для токенов продукта - `product-tokens.json`, для токенов компонентов - `component-tokens.json`, а для токенов виджетов - `widget-tokens.json`. Добавить только файлы, в которых есть изменения.

4. Выполнить команду

```shell
npm run check-tokens-change:swapped
```

Команда `check-tokens-change:swapped` проверяет, изменилась ли структура токенов, и выводит об этом информацию.

5. 

> **_ВАЖНО_**
>
> Если были добавлены токены для нового компонента в `component-tokens.json`, его нужно добавить в список `src/colors/constants.js` (в алфавитном порядке) и экспортировать из индекса (`src/index.ts`) по аналогии с другими компонентами (в алфавитном порядке).

Если структура токенов не изменилась, необходимо выполнить команду.

```shell
npm run storybook-hexa-ui
```

Команда `storybook-hexa-ui` собирает пакет с новыми токенами, копирует обновленный пакет в директорию с компонентами и запускает сторибук.

### Ресурсы
#### Hexa UI Core в Pixso

[Product tokens](https://pixso.net/app/design/Nz9aK6S6u21wvOGYfPRjAQ)  
[Semantic tokens](https://pixso.net/app/design/RvvSBi5i7wxnG0_Pg9tzdw)  
[Static tokens](https://pixso.net/app/design/Caz0XNIOHLHIG7SGkUZ53g)  
[Widget tokens](https://pixso.net/app/design/Nm37XP3kqM_HJPFAXaciuw)  

[How to create Pull Request](https://confluence.kaspersky.com/spaces/UIF/pages/992869783/How+to)
