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
import '@kaspersky/hexa-ui-core/colors/css/components/static'
import '@kaspersky/hexa-ui-core/colors/css/components/button'
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

### Ресурсы
[Hexa UI Core в Figma](https://www.figma.com/design/VI67fbmFGFm4fGJxnwQIpj/%5BB2B%5D-Hexa-UI-Core?node-id=35-3&node-type=CANVAS&t=2zVEEuu9qSgZ3SZc-0)
