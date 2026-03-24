# View Transpile

Веб-приложение для просмотра UI-форм, описанных в формате DSL (`.js`-файлы с `export default { name, id, elements }`). После выбора каталога формы отображаются в меню слева (в духе [Quick Start UIF](https://kasperskylab.github.io/uif/examples/quick-start/)); при выборе формы DSL преобразуется в UI на компонентах Hexa UI (Kaspersky Lab).

## Возможности

- **Выбор каталога** — при старте выбирается директория с `.js`-файлами форм (File System Access API, Chrome/Edge). Каталог **сохраняется в IndexedDB** и восстанавливается после перезагрузки страницы при сохранении разрешения браузера.
- **Меню слева** — дерево файлов форм; пункты меню отображают **имя файла** (или папки).
- **Заголовок формы** — свойство **`name`** из DSL.
- **Рендеринг формы** — объект DSL преобразуется в UI на компонентах [Hexa UI](https://github.com/KasperskyLab/uif): Button, Text, Textbox, Select, Checkbox, Radio, Toggle, Grid, Table, meta-компоненты. Все свойства компонентов передаются в Hexa UI.
- **URL** — параметр `?form=…` (относительный путь к `.js`) синхронизируется с открытой формой; при перезагрузке и восстановлении каталога форма открывается по ссылке.

## DSL (по проекту uisb)

Формат формы: `export default { name: string, id: string, elements: FormControl[] }`.  
Типы контролов: `button`, `text`, `input`, `grid`, `table`, `checkbox`, `radio`, `select`, `toggle`, `meta`.  
Структура полей — см. типы в `src/types/form-dsl.ts`.

## Развёртывание (любая ОС)

Подробная инструкция по установке, запуску и сборке на Windows, macOS и Linux — в файле **[DEPLOY.md](DEPLOY.md)**.

Кратко:

```bash
npm install
npm run dev
```

Откройте в браузере указанный адрес (например `http://localhost:5173/`), нажмите «Выбрать каталог» и укажите папку с `.js`-формами.

Сборка для продакшена: `npm run build` → результат в папке `dist/`.

## Стек

- React 17, TypeScript, Vite
- Hexa UI (@kaspersky/hexa-ui), Hexa UI Icons
