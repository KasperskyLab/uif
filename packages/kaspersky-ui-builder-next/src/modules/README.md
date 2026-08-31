# Модули редактора

Каждая папка отвечает за один модуль спецификации. App Shell связывает модули; общие типы вынесены в Schema Model. Прямые импорты указывают файл реализации, без промежуточных папок editor/domain и реэкспортов для старых путей.

| Папка | Назначение |
| --- | --- |
| [app-shell](./app-shell/README.md) | Собирает header, вкладки и трёхколоночный редактор. |
| [forms-manager](./forms-manager/README.md) | Управляет списком форм, поиском, созданием, открытием, закрытием, дублированием и сохранением. |
| [component-registry](./component-registry/README.md) | Описывает каталог компонентов и генерирует его из типов UI-пакета и palette.json. |
| [component-palette](./component-palette/README.md) | Показывает категории компонентов, поиск и элементы для добавления в форму. |
| [schema-view](./schema-view/README.md) | Отображает дерево формы и режимы «Схема», «JSON», «Превью». |
| [inspector](./inspector/README.md) | Редактирует локальный черновик настроек формы или выделенного элемента. |
| [form-controls](./form-controls/README.md) | Содержит команды редактора: undo/redo, сохранение, добавление, удаление и перемещение элементов. |
| [schema-builder](./schema-builder/README.md) | Создаёт элементы и нормализует схему перед использованием или сохранением. |
| [schema-validator](./schema-validator/README.md) | Проверяет форму по версионированной JSON Schema через Ajv. |
| [semantic-validator](./semantic-validator/README.md) | Проверяет ID, props, вложенность, ссылки и циклы зависимостей. |
| [persistence-adapter](./persistence-adapter/README.md) | Обеспечивает чтение и запись файлов форм и поиск файлов функций. |
| [history-store](./history-store/README.md) | Хранит открытые вкладки, выделение, историю изменений и dirty-state. |
| [schema-model](./schema-model/README.md) | Содержит общие типы формы и диагностик для остальных модулей. |

Общий UI находится в `../components`, вспомогательные функции — в `../lib`, примеры runtime-функций — в `../functions`. Это общие ресурсы, а не отдельные бизнес-модули. Node-код генератора и persistence middleware не импортируется браузерными модулями.
