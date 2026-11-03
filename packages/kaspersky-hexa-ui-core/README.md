# Hexa UI Core

Пакет дизайн-системы Hexa UI. Разделен на три домена: шрифты, токены типографии, токены цветов.

---

* [Установка](#установка)
* [Использование в проекте](#использование-в-проекте)
    - [Шрифты](#шрифты)
    - [Токены типографии](#токены-типографии)
    - [Токены цветов](#токены-цветов)
* [Обновление токенов](#обновление-токенов)
* [Сборка пакета](#сборка-пакета)
* [Структура пакета](#структура-пакета)
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

Светлая тема описана селекторами `:root, .theme-light, .hexa-ui-light-theme`, темная - `.theme-dark, .hexa-ui-dark-theme`.

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
+ `widgetColors`, `semanticColors` - цвета виджетов и семантические цвета, имеющие пару в темной теме
+ `themeColors` - **устаревшие** цвета, имеющие пару в темной теме
+ `allColors` - `colors` + `themeColors` + `productColors` + `componentColors`
+ `shortcutsV6` (**устаревшие**), `productColorsShortcuts`, `componentColorsShortcuts`, `widgetColorsShortcuts` - цвета, имеющие пару в темной теме (другая структура объекта)
+ `shortcuts` - `productColorsShortcuts` + `componentColorsShortcuts` + `widgetColorsShortcuts` + `shortcutsV6`

> **_ВАЖНО_**
>
> JS-объекты цветов не обновляются при обновлении токенов и остаются такими, какими были сгенерированы ранее. Актуальный источник токенов цветов — css-variables.

При SSR подключение токенов цветов происходит следующим образом:

```tsx
import '@kaspersky/hexa-ui-core/colors/tokens.css'
```

## Сборка пакета

```shell
npm run build
```

В корне пакета создается директория `/dist` со сборкой пакета в двух основных форматах: CommonJS и ESM.

```shell
npm run release
```

То же, но в директорию `deployPath` из файла `.env` (см. `.env.example`) — по умолчанию в `node_modules` соседнего пакета `@kaspersky/hexa-ui`.

## Обновление токенов

Токены цветов обновляются из CSS-файлов, экспортированных из Pixso. Файлы (`core.css`, `widgets.css`, `static.css`, `semantic.css`) кладутся в `src/colors/pixso/`, затем:

```shell
npm run check-tokens-change   # показать, что изменится, можно пропустить
npm run update-colors         # применить
```

Пошаговая инструкция для дизайнеров и описание правил преобразования для разработчиков — в [TOKENS_UPDATE.md](TOKENS_UPDATE.md).


```shell
npm run update-typography
```

Команда генерирует JSON-файл с токенами типографии из `src/typography/js` и css-variables для них.

## Структура пакета

Описание директорий, сгенерированных файлов и точек входа — в [PACKAGE_STRUCTURE.md](PACKAGE_STRUCTURE.md).
