# Hexa UI Icons

Пак из 1800+ React иконок.

Иконки собраны на основе svg пака из [Figma](https://www.figma.com/file/sFYnrrW2tEOurX8rL2OCki/Icons?type=design&mode=design&t=SLAwY6QlYlkBdfPc-0), поддерживаемого в актуальном состоянии командой дизайнеров DRO. Иконки представлены в размерах: 8, 12, 16, 24, 32, 40, 48.

---

* [Установка в проект](#установка-в-проекте)
* [Использование в проекте](#использование-в-проекте)
* [Обновление иконок](#обновление-иконок)
* [Доработка пакета](#доработка-пакета)
* [Package.json](#package-json)
* [Сборка](#сборка-пакета)
* [SVGR](#svgr)
* [Ресурсы](#ресурсы)

---
## Установка в проект
```shell
npm install @kaspersky/hexa-ui-icons  
```

## Использование в проекте
```tsx
import { ArrowDown } from '@kaspersky/hexa-ui-icons/8'
import { Bullet } from '@kaspersky/hexa-ui-icons/12'
import { AccountLogin, Like } from '@kaspersky/hexa-ui-icons/24'
 
function Icons() {
  return (
    <>
      <ArrowDown />
      <Bullet color="red" />
      <Like color="blue" testId="like-icon" />
    </>
  )
}
```

**Props**:

| Name          | Type                                       | Default        |
| ------------- |:-----------------------------------------: |----------------|
| className     | string                                     | -              |
| color         | string                                     | 'currentColor' |
| style         | CSSProperties                              | -              |
| testId        | string                                     | -              |

---

### Обновление иконок
1. Скачиваем актуальный пак svg иконок из [Figma](https://www.figma.com/file/sFYnrrW2tEOurX8rL2OCki/Icons?type=design&mode=design&t=SLAwY6QlYlkBdfPc-0) с группировкой по размерам (слой Icons)
- ~~Не выделяя листов или иконок~~, нажимаем в сайдбаре справа на кнопку Export
> В последнее время без выделения всех иконок фигма ведет себя некорректно и экспортирует не все иконки, настоятельно рекомендуем выделять мышкой 
- В пункте Export нажимаем на `+`
- В раскрывшимся меню выбираем формат иконок SVG
- Нажимаем на три точки (дополнительные настройки) и выключаем галочки "Outline text" и "Simplify stroke"
- Нажимаем кнопку **Export {n} layers**
- Распаковываем скачанный архив - в нем будут все иконки, сгруппированные в папки по размерам. В процессе экспорта могут добавиться лишние иконки и артефакты вне папок с размерами - их можно удалить, чтобы не смущали.
- Иконки флагов при необходимости экспортируем аналогично [отсюда](https://www.figma.com/design/sFYnrrW2tEOurX8rL2OCki/Icons?node-id=5138-2770&p=f&t=I7xttk6YmF6hoT67-0)
2. Копируем svg иконки в папку src/iconsSources (если такой папки нет - нужно создать вручную), убедившись, что в названиях папок с svg иконками нет лишних пробелов (например, не должно быть '16 '). Если при копировании окажется, что существует несколько иконок с одинаковыми названиями, нужно проследить за тем, чтобы названия дубликатов содержали цифры строго начиная с единицы (_'Icon', 'Icon 1', 'Icon 2'_ вместо _'Icon' и 'Icon 2', 'Icon 3'_) 
3. Устанавливаем зависимости `npm i`, если еще не делали этого.
4. Запускаем скрипт для трансформации svg иконок в React компоненты: `npm run icons:create`
5. В папке `iconsSVGs` должны появится svg файлы с правильными именами, остальные этапы сборки происходят в PR. Можно запустить сторибук `npm run storybook` и проверить на паре новых иконок, что они корректно добавились в библиотеку.
6. Добавить запись в ChangeLog (src/stories/ChangeLog.mdx) по примеру уже сделанных записей
7. Добавляем все файлы в коммит(папка iconsSVGs, types/index.tsx и src/stories/ChangeLog.mdx)
8. Создаём PR и вливаем в мастер. Новая версия пакета иконок опубликуется автоматически

### Доработка пакета
Установите зависимости
```shell
npm i
```

Пакет выполняет три операции последовательно:
- 1. Копирование иконок из папки src/iconsSources в src/iconsSVGs, выравнивая размер иконки и имя иконки
*необходима папка src/iconsSources с папкой размера и иконкой*
`npm run icons:prepare`
- 2. Создание tsx файлов из исходников иконок лежащих в папке src/iconsSVGs
`npm run icons:transform`
- 3. Создание сборки cjs и esm из файлов tsx
*необходимы файлы tsx в папках src/[size]/.tsx*
`npm run icons:rollup`
- Есть так же обновления индекса, нужно для обновления типов
`npm run icons:updateImports`

### Package.json
- `"iconsArtifacts:clean"`: удаление разультатов сборки rollup
- `"icons:clean"`: удаление автогенерированных файлов библиотекой svgr
- `"icons:prepare"`: подготовка исходников svg файлов, переименование и копирование из папки src/iconsSources в src/iconsSVGs
- `"icons:transform"`: запуск трансформации svg иконок в компоненты react, запуск svgr
- `"icons:updateImports"`: обновление импортов для сборки
- `"icons:create"`: генерация файлов с помощью svgr
- `"icons:build"`: полная сборка пакета с удалением всех генерируемых файлов


### Сборка пакета
Для полной сборки пакета
```shell
npm run build
```
В таком случае прогоняется весь цикл от Копирование иконок из папки src/iconsSources до сборки cjs и esm. Для запуска необходима папка src/iconsSources с файлами в ней

### SVGR

Hexa UI Icons использует SVRG cli (https://react-svgr.com/) для трансформации svg иконок из Figma в React компоненты.

SVGR генерирует React компонент с svg иконкой при помощи Babel шаблона `templateIcons.js` и форматирует код с помощью Prettier. На выходе мы получаем готовый компонент.

### Ресурсы
- [Figma](https://www.figma.com/file/sFYnrrW2tEOurX8rL2OCki/Icons?type=design&mode=design&t=SLAwY6QlYlkBdfPc-0)
- [StoryBook](https://kasperskylab.github.io/uif/icons/?path=/story/icon-gallery--gallery)
