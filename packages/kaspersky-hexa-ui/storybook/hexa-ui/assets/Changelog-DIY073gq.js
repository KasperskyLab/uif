import{j as n}from"./jsx-runtime-CxPCTGSc.js";import{useMDXComponents as l}from"./index-lKYyQ2c7.js";import"./iframe-zz6a49H8.js";import"./preload-helper-C1FmrZbK.js";function s(e){const i={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h3,{id:"2026-02-16",children:"2026-02-16"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix: [hexa-ui][table] add showFilterItem"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsxs(i.p,{children:["Добавлен новый проп ",n.jsx(i.code,{children:"showFilterIcon"})," в тип столбца таблицы, позволяющий явно управлять отображением иконки фильтра в заголовке, независимо от наличия активных фильтров. Компонент ",n.jsx(i.code,{children:"DropdownColumnTitle"})," теперь принимает этот проп и использует его при формировании ",n.jsx(i.code,{children:"filterIcon"}),", а также передаёт значение из конфигурации столбца через ",n.jsx(i.code,{children:"SortingAndFilters"}),". Обновлены импорты и вспомогательные функции для работы с API фильтров и их сравнением. Типы расширены комментариями и описанием нового свойства."]}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Table"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2026-02-13",children:"2026-02-13"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix:"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsxs(i.p,{children:["Добавлена поддержка атрибутов фильтров в боковой панели: расширены типы ",n.jsx(i.code,{children:"FilterAttributes"}),", ",n.jsx(i.code,{children:"FilterConfig"})," и ",n.jsx(i.code,{children:"TableColumn"}),", а также реализованы новые свойства ",n.jsx(i.code,{children:"attribute"})," и ",n.jsx(i.code,{children:"filterAttributes"}),". UI‑компоненты ",n.jsx(i.code,{children:"FilterItem"}),", ",n.jsx(i.code,{children:"FilterItemCondition"})," и ",n.jsx(i.code,{children:"SidebarFilters"})," теперь позволяют выбирать как колонку, так и её атрибут, а функция ",n.jsx(i.code,{children:"getNewFilter"})," учитывает атрибут при формировании фильтра. Обновлены мок‑данные и стили для отображения списка атрибутов, а также добавлена вспомогательная функция ",n.jsx(i.code,{children:"getFilterTitle"})," для корректного отображения заголовков фильтров с учётом атрибутов. Эти изменения позволяют пользователям задавать фильтрацию по отдельным полям внутри сложных ячеек таблицы."]}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Table"}),`
`,n.jsx(i.li,{children:"helpers"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix: up hexa core version"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Внесён объединённый PR, который обновляет версию ядра Hexa, однако в данном наборе изменений нет модификаций кода или конфигураций, влияющих на функциональность. Таким образом, текущий коммит не вносит новых функций или исправлений, а лишь применяет предыдущее обновление версии."}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"package.json"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"[hexa-ui] fix: exports for css modules for storybook"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsxs(i.p,{children:["Обновлена конфигурация Storybook: в правилах обработки стилей добавлены параметры ",n.jsx(i.code,{children:"exportLocalsConvention: 'as‑is'"})," и ",n.jsx(i.code,{children:"localIdentName: '[local]_[hash:base64:8]'"})," для корректного экспорта CSS‑модулей и предсказуемого именования классов. В секцию ",n.jsx(i.code,{children:"resolve.plugins"})," включён ",n.jsx(i.code,{children:"TsconfigPathsPlugin"}),", обеспечивающий разрешение импортов согласно ",n.jsx(i.code,{children:"tsconfig.json"}),". Эти изменения устраняют проблемы с импортом CSS‑модулей в Storybook и упрощают работу с алиасами путей."]}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:".storybook"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix: add use lineWrapping in CodeViewer"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsxs(i.p,{children:["Добавлен параметр ",n.jsx(i.code,{children:"lineWrapping"})," в типы ",n.jsx(i.code,{children:"CodeViewer"}),", позволяющий включать перенос строк в редакторе. В хуке ",n.jsx(i.code,{children:"useCodeViewer"})," условно добавляется расширение ",n.jsx(i.code,{children:"EditorView.lineWrapping"}),", когда свойство ",n.jsx(i.code,{children:"lineWrapping"})," установлено в ",n.jsx(i.code,{children:"true"}),". Это улучшает читаемость кода при работе с длинными строками без изменения существующего API."]}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Code-viewer"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2026-02-12",children:"2026-02-12"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix: revert wrong package version"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Отменено изменение версии пакета, восстановлена корректная версия без влияния на функциональность."}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"package.json"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix!: 9399167 [localization] ksc loc it, kk, pt-br update"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsxs(i.p,{children:["Обновлены файлы локализации (it‑IT, kk‑KZ, pt‑BR и др.) — перенесён год в копирайте на 2026, названия продуктов изменены с ",n.jsx(i.strong,{children:"Kaspersky Security Center 16"})," на ",n.jsx(i.strong,{children:"16.2"}),", добавлены новые подписи версии и поправлены многочисленные пользовательские строки. В UI добавлены новые подсказки (SNMP‑tooltip, описания политик аутентификации, тексты загрузчиков, сообщения об ошибках при переключении режима консоли и фоновой синхронизации) и заменены некоторые статусы («N/D» → «N/A», новые сообщения проверки и уведом"]}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"helpers"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2026-02-11",children:"2026-02-11"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix: update lodash version"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Обновлён lodash до версии 4.17.23 во всех пакетах проекта, что отражено в соответствующих yarn.lock‑файлах. Наряду с этим зафиксированы новые версии вспомогательных зависимостей (log‑symbols, logform, loose‑envify) для согласованности блоков lock‑файлов. Эти изменения устраняют уязвимости, связанные с устаревшими версиями lodash, и обеспечивают единообразие используемых библиотек."}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"package.json"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix: change ai model for pipeline"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Изменён базовый LLM‑модель с «qwen3-32B‑instruct» на «gpt‑oss‑120b», добавлены переменные окружения AI_LANG для выбора языка вывода и AI_MAX_TOKENS для ограничения количества токенов. Встроена логика ограничения размера диффа по байтам с пошаговым усечением и уведомлением в консоли, а системный запрос теперь формируется с учётом выбранного языка. Обновлена документация, отражающая новые значения переменных LLM_MODEL и AI_LANG."}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:".changelog"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2026-02-10",children:"2026-02-10"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat: add story in sidebar for textReducer"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsxs(i.p,{children:["Реализовано улучшение обработки усечения текста в компоненте ",n.jsx(i.code,{children:"TextWithTruncation"})," с поддержкой параметра ",n.jsx(i.code,{children:"lineClamp"}),", позволяющего указать количество отображаемых строк. Устаревший параметр ",n.jsx(i.code,{children:"truncate"})," заменён на ",n.jsx(i.code,{children:"lineClamp"})," для более гибкого управления отображением длинных заголовков. В компоненте ",n.jsx(i.code,{children:"NavItem"})," добавлена обработка свойства ",n.jsx(i.code,{children:"lineClamp"}),", чтобы управлять отображением заголовков в меню. Также в компоненте ",n.jsx(i.code,{children:"SidebarHeader"})," интегрирован параметр ",n.jsx(i.code,{children:"lineClamp"})," для контроля усечения заголовка боковой панели."]}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Menu"}),`
`,n.jsx(i.li,{children:"Sidebar"}),`
`,n.jsx(i.li,{children:"helpers"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix: [hexa-ui][table] add patchDataSource and onDataSourceChange"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsxs(i.p,{children:["Добавлены параметры ",n.jsx(i.code,{children:"patchDataSource"})," и ",n.jsx(i.code,{children:"onDataSourceChange"})," для настройки и отслеживания изменений в источнике данных таблицы. Реализованы соответствующие обновления логики в хуках и компонентах для корректного применения пользовательских изменений и уведомления о них. Также внесены изменения в типы для поддержки новых свойств."]}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Table"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix: [hexa-ui][table] add customFilterFunction"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsxs(i.p,{children:["Добавлена поддержка пользовательской функции фильтрации ",n.jsx(i.code,{children:"customFilterFunction"})," в компонент ",n.jsx(i.code,{children:"FilterApi"}),", что позволяет реализовать кастомную логику фильтрации данных. Внедрены тесты для проверки корректной работы данной функции, включая обработку пустых фильтров и проверку совпадений. Также обновлены типы и вспомогательные функции для обеспечения совместимости с новым интерфейсом."]}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Table"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2026-02-09",children:"2026-02-09"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix: up webpack version"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Обновлены версии зависимостей, включая webpack, acorn, browserslist и schema-utils, для улучшения совместимости и производительности сборки. Исправлены устаревшие версии библиотек, связанных с парсингом модулей и обработкой исходных карт."}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"package.json"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2026-02-06",children:"2026-02-06"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat: # 9398082 [Loc] upd RU loc"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Обновлены локализационные строки для уточнения терминологии и повышения ясности в интерфейсе. Внесены изменения в тексты, касающиеся сетевой изоляции активов и управления правилами, чтобы соответствовать новым техническим требованиям. Также добавлены уведомления и сообщения об ошибках, связанные с загрузкой и скачиванием файлов."}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"helpers"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2026-02-05",children:"2026-02-05"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"[Loc]feat:zh-Hans, zh-Hant upd"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Обновлены локализации для языков zh-Hans и zh-Hant, включая уточнение терминов, связанных с политиками, ревизиями, действиями, сообщениями и различными модулями системы. Внесены изменения в текстовые элементы интерфейса, такие как подсказки, кнопки и описания действий, чтобы повысить ясность и согласованность локализации. Также обновлены формулировки, касающиеся управления обновлениями, резервного копирования и восстановления, а также настроек для обеспечения точности перевода технических терминов."}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"helpers"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat: add markdown sanitizing"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsxs(i.p,{children:["В компонент Markdown добавлена поддержка санитизации с использованием DOMPurify для повышения безопасности. Добавлен новый параметр ",n.jsx(i.code,{children:"purify"}),", который позволяет включать или отключать очистку HTML-контента. Также обновлены импорты и типы для синхронизации с новой функциональностью."]}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Markdown"}),`
`,n.jsx(i.li,{children:"package.json"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat: [hexa-ui][table] add rowSelection for server pagination"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsxs(i.p,{children:["Добавлена поддержка ",n.jsx(i.code,{children:"rowSelection"})," для таблиц с серверной пагинацией, включая реализацию функционала выбора всех строк, текущей страницы и сброса выбора. Рефакторинг логики пагинации для корректной работы с функцией загрузки данных. Также обновлены тесты для проверки поведения выбора строк в режиме серверной пагинации."]}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Table"}),`
`,n.jsx(i.li,{children:"helpers"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"[Sidebar] fix: allow interception of Esc key presses to keep the sidebar open"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Исправлена обработка нажатия клавиши Esc для поддержания открытия боковой панели при необходимости. Добавлена возможность перехвата событий клавиатуры через глобальный слушатель. Обновлён обработчик события keydown с учётом зависимостей visible, onClose и isTopmost."}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"helpers"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2026-02-04",children:"2026-02-04"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix: add jumper prop to storybook args"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsxs(i.p,{children:["Добавлен параметр ",n.jsx(i.code,{children:"jumper"})," в аргументы компонента ",n.jsx(i.code,{children:"Pagination"})," для Storybook, что позволяет управлять отображением функции перехода между страницами. В хуке ",n.jsx(i.code,{children:"usePaginationConfig"})," реализованы логика и обработчики для поддержки параметра ",n.jsx(i.code,{children:"jumper"}),", включая его передачу в результирующий объект пагинации. Также добавлен новый стори ",n.jsx(i.code,{children:"WithJumper"}),", демонстрирующий использование данной функции в таблице."]}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Pagination"}),`
`,n.jsx(i.li,{children:"Table"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix: add webgl if supported for terminal"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsxs(i.p,{children:["Добавлена проверка поддержки WebGL2 перед загрузкой соответствующего аддона, чтобы избежать ошибок в браузерах, где он недоступен. Вместо прямой инициализации ",n.jsx(i.code,{children:"WebglAddon"})," используется функция ",n.jsx(i.code,{children:"loadWebGL2IfSupported"}),", которая возвращает обработчик освобождения ресурсов. Это улучшает совместимость и стабильность терминала. Также обновлены обработчики событий и структура загрузки аддонов."]}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Terminal"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix: preserve onClick in segmented control"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsxs(i.p,{children:["Исправлен обработчик событий ",n.jsx(i.code,{children:"onClick"})," для элементов ",n.jsx(i.code,{children:"SegmentedControlItem"}),", чтобы сохранять пользовательские обработчики кликов и вызывать их корректно. Рефакторинг логики клика позволяет избежать потери функциональности при передаче пользовательских свойств. Добавлен выпадающий список для отображения дополнительных элементов управления при наличии."]}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Segmented-control"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat: [Loc] upd RU loc"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Обновлены русские локализации для уточнения статусов лицензий, идентификаторов, категорий КИИ, параметров безопасности учетных записей, YARA-правил и ошибок при получении данных. Добавлены и изменены тексты для улучшения точности и понятности в контексте защиты, сканирования и управления активами. Также уточнены сообщения об ошибках и статусах в графическом интерфейсе."}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"helpers"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2026-02-03",children:"2026-02-03"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"[Loc]fix: zh-Hans, zh-Hant structure upd with EN strings"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Исправлены тексты на китайском языке для улучшения ясности и согласованности с английским переводом. Обновлены формулировки, такие как «转换为新格式的报告也不会包括来自运行这些版本的从属管理服务器的数据» и «所选事件将被永久删除». Добавлены новые ключевые фразы и улучшена логическая структура в разделах, связанных с правилами активации политик, событиями и управлением устройствами."}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"helpers"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat: add search in table filters"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsxs(i.p,{children:["Добавлена функциональность поиска в фильтрах таблицы для улучшения удобства выбора и управления колонками. В компонент ",n.jsx(i.code,{children:"ColumnsSelector"})," введена логика фильтрации колонок на основе значения поиска и изменена обработка сортировки с учетом поиска. Также в ",n.jsx(i.code,{children:"GroupingSelector"})," реализовано отображение только тех опций, которые соответствуют поисковому запросу. Добавлен элемент управления ",n.jsx(i.code,{children:"Search"})," в интерфейс выбора настроек таблицы."]}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Table"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2026-02-02",children:"2026-02-02"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat: [hexa-ui][table] add server pagination"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Реализована поддержка серверной пагинации для компонента таблицы, включая обновление контекста и хуков для синхронизации состояния. Добавлены функции для работы с источником данных и пагинацией, а также улучшена обработка фильтрации и сортировки. Изменены параметры контекста для передачи информации о пагинации и общем количестве записей."}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Table"}),`
`,n.jsx(i.li,{children:"helpers"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat: [Loc] upd RU loc"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:'Обновлены русскоязычные локализации для расширения функциональности статусов и сообщений, включая статусы защиты, антивирусных баз, лицензий и инцидентов. Добавлены новые параметры, такие как "Включение", "Выключение", "Сбой", и уточнены формулировки для улучшения ясности и соответствия терминологии. Также внесены изменения в интерфейс для отображения дополнительных метрик, таких как "Важность" и "Надежность".'}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"helpers"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix: add quick jumper to pagination"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsxs(i.p,{children:["Добавлен быстрый переход (quick jumper) в компонент пагинации для возможности прямого перехода на нужную страницу. Улучшена обработка стилей для элементов пагинации, включая поддержку цветовых токенов и настроек ввода. Реализовано изменение атрибута ",n.jsx(i.code,{children:"type"})," у поля ввода на ",n.jsx(i.code,{children:"number"}),", чтобы усилить семантику и контроль ввода."]}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Input"}),`
`,n.jsx(i.li,{children:"Pagination"}),`
`,n.jsx(i.li,{children:"helpers"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2026-01-30",children:"2026-01-30"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"[Loc] feat:KSC zh-Hans, zh-Hant upd"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"helpers"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"[AnchorNavigation] feat: add AnchorNavigation component"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsxs(i.p,{children:["Добавлен компонент ",n.jsx(i.code,{children:"AnchorNavigation"}),", предназначенный для навигации пользователя внутри страницы, отображая структуру контента и взаимосвязь разделов. Устаревший компонент ",n.jsx(i.code,{children:"Anchor"})," был помечен как deprecated, и его функциональность заменена новым решением. В компоненте реализована поддержка вложенных разделов, элементов после заголовков, а также обработка прокрутки и фокуса. Также внесены улучшения в ",n.jsx(i.code,{children:"TextReducer"})," и ",n.jsx(i.code,{children:"useTextReducer"}),", добавлена поддержка ",n.jsx(i.code,{children:"lineClamp"})," для многоточий и уточнена логика определения переполнения текста."]}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Anchor-links"}),`
`,n.jsx(i.li,{children:"Anchor-navigation"}),`
`,n.jsx(i.li,{children:"Submenu"}),`
`,n.jsx(i.li,{children:"Tooltip"}),`
`,n.jsx(i.li,{children:"helpers"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix: refactor table filters"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Исправлены и оптимизированы фильтры таблицы, добавлена поддержка типов FilterType.DateTime и FilterType.Enum, а также реализована проверка на пустые и дублирующиеся фильтры для улучшения стабильности и логики. Рефакторинг логики фильтрации, добавлены функции addId, removeId и validate для управления состоянием фильтров и их валидации. Удалён устаревший файл helpers.ts, его функционал интегрирован в общий код."}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Table"}),`
`,n.jsx(i.li,{children:"helpers"}),`
`,n.jsx(i.li,{children:"package.json"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix: add min/max height in TopNavigation"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Исправлены стили компонента TopNavigation для корректного отображения элементов при изменении размеров окна. Добавлены минимальная и максимальная высота для улучшения адаптивности. Также внесены изменения в позиционирование и выравнивание элементов интерфейса."}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Top-navigation"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2026-01-29",children:"2026-01-29"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix: correct styles in tree view"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsxs(i.p,{children:["Исправлены стили для корректного отображения текста в таблице, заменён класс ",n.jsx(i.code,{children:"hexa-ui-title-ellipsis"})," на ",n.jsx(i.code,{children:"hexa-ui-ellipsis"}),". Внесены изменения в CSS для поддержки ",n.jsx(i.code,{children:"inline-grid"})," и других улучшений отрисовки ячеек. Обеспечено более точное применение стилей при использовании ",n.jsx(i.code,{children:"TextReducer"})," и ",n.jsx(i.code,{children:"ExpandableText"}),"."]}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Table"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"[Toolbar] fix: remove cssConfig usage"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsxs(i.p,{children:["Удалён устаревший код, связанный с ",n.jsx(i.code,{children:"cssConfig"})," и ",n.jsx(i.code,{children:"useThemedToolbar"}),", для упрощения структуры и повышения читаемости. Вместо индивидуальных цветовых настроек для компонентов инструментальной панели используются CSS-переменные. Обновлена логика отображения элементов, включая обработку состояний кнопок и выпадающих меню. Улучшена поддержка динамического поведения компонентов, таких как поисковая панель и кнопки с раскрытием."]}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Toolbar"}),`
`,n.jsx(i.li,{children:"design-system"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2026-01-27",children:"2026-01-27"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix:"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Исправлены стили таблицы для восстановления отображения CSS в темном режиме. Добавлены настройки цвета линий и режима смешивания для корректного отображения фона диагональной таблицы. Обновлены стили для поддержки сбрасываемого отступа и прокрутки контейнера таблицы."}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Table"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2026-01-26",children:"2026-01-26"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"[hexa-ui] fix: change figma links to pixso"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Заменены все ссылки и упоминания Figma на Pixso в метаданных и документации компонентов Storybook. Обновлены описания в метафайлах и примеры использования, чтобы отражать переход на Pixso. Добавлены новые параметры и примеры, где требуется, для поддержки новой интеграции."}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Accordion"}),`
`,n.jsx(i.li,{children:"Action-button"}),`
`,n.jsx(i.li,{children:"Alert"}),`
`,n.jsx(i.li,{children:"Anchor-links"}),`
`,n.jsx(i.li,{children:"Badge"}),`
`,n.jsx(i.li,{children:"Breadcrumbs"}),`
`,n.jsx(i.li,{children:"Button"}),`
`,n.jsx(i.li,{children:"Card"}),`
`,n.jsx(i.li,{children:"Checkbox"}),`
`,n.jsx(i.li,{children:"Chip"}),`
`,n.jsx(i.li,{children:".storybook"}),`
`,n.jsx(i.li,{children:"design-system"}),`
`,n.jsx(i.li,{children:"docs"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix:"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Исправлена проблема размытых линий в таблице, добавлены параметры для настройки фона, режима ресайза, позиционирования заголовков и отображения строк. Реализованы улучшения в отображении и поведении при прокрутке, добавлена поддержка новых пропсов для гибкой настройки компонента таблицы."}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Table"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2026-01-25",children:"2026-01-25"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix: change limit token, context and remove 'Merged' in title"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Изменены параметры лимита токенов и контекста для улучшения обработки Git diff и повышения производительности генерации changelog. Убрана строка с указанием 'Merged PR' из заголовков коммитов для упрощения и улучшения читаемости. Добавлена логика обрезки diff при превышении максимального размера, чтобы избежать ошибок при работе с AI-моделями."}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:".changelog"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2026-01-23",children:"2026-01-23"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"[Loc] feat:zh-Hans, zh-Hant updated"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:'Обновлены локализации для китайских языковых версий (zh-Hans и zh-Hant), включая уточнения в терминах, таких как "SMS" вместо "简讯", "Active Directory" вместо "活动目录" и "OS" вместо "操作系统",'}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"helpers"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"[Submenu] fix: remove cssConfig usage"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsxs(i.p,{children:["Удалён код, связанный с ",n.jsx(i.code,{children:"cssConfig"})," в компоненте Submenu, включая использование в стилях и типах. Вместо этого теперь используются CSS-классы и индивидуальные стили, что упрощает логику темизации и уменьшает зависимость от конфигурации цветов. Также были внесены изменения в структуру компонентов для соответствия новой реализации."]}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"Затронутые файлы/компоненты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Submenu"}),`
`,n.jsx(i.li,{children:"design-system"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"other fix [Table]: added new rule placeholder hover transparent"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Исправлен дефолтный эффект подсветки при наведении на пустую таблицу, используемый библиотекой Ant Design. Добавлен стиль ",n.jsx(i.code,{children:"transparent"})," для ",n.jsx(i.code,{children:".ant-table-placeholder:hover"}),", чтобы сохранить фон неизменным и соответствовать визуальным требованиям интерфейса. Изменения направлены на улучшение пользовательского опыта и согласованности отображения компонентов."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Table"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2026-01-22",children:"2026-01-22"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat Polish, Turkish - KSC 16.2 Linux upd after translation"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Обновлена локализация версии 16.1 программного обеспечения Kaspersky Security Center на польский и турецкий языки, включая новые сообщения, связанные с двухфакторной аутентификацией, управлением секретными ключами, настройкой устройств и предупреждениями об истечении срока действия сертификатов."}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"helpers"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2026-01-21",children:"2026-01-21"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix 9424253] ES, MX, FR strings updated for 16,2lin"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:'Обновлены локализации для интерфейсов и сообщений в административной консоли Kaspersky Security Center, включая исправление терминов, таких как "SO" вместо "операционной системы", и уточнение формулировок для обеспечения точности и ясности. Добавлены новые строки для поддержки двухфакторной аутентификации, управление ролями в Pro View и уведомления о лицензиях. Также внесены изменения для улучшения пользовательской поддержки и соответствия требованиям безопасности.'}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"helpers"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat migrate storybook from 9.0 to 10.1"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:".storybook"}),`
`,n.jsx(i.li,{children:"design-system"}),`
`,n.jsx(i.li,{children:"package.json"}),`
`,n.jsx(i.li,{children:"tsconfig.json"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["fix react to changes in ",n.jsx(i.code,{children:"filterItems.items"})]}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Исправлен обработчик реакции на изменения в ",n.jsx(i.code,{children:"filterItems.items"}),", добавлен ",n.jsx(i.code,{children:"useEffect"})," для обновления тегов при изменении входных данных. Это улучшает синхронизацию состояния фильтров и предотвращает непредвиденное поведение при отсутствии ",n.jsx(i.code,{children:"filterApi"}),"."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Table"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2026-01-20",children:"2026-01-20"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Исправлена ошибка импорта из библиотеки Lodash, заменив ",n.jsx(i.code,{children:"isEqual"})," на ",n.jsx(i.code,{children:"get"})," для корректной работы функции получения значений. Обновлён ключ для элементов сортировки, чтобы избежать конфликтов при одинаковых ",n.jsx(i.code,{children:"sortType.key"}),", добавив зависимость от свойства сортировки. Изменения направлены на улучшение устойчивости и предсказуемости сортировки в компоненте таблицы."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Table"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat KSC Linux 16.2 - draft"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Обновлены локализации для японского и корейского языков в интерфейсе веб-консоли, включая уточнения в обозначениях операционной системы (OS), двухфакторной аутентификации и управления лицензиями. Также внесены изменения в текстовые уведомления, связанные с ограничениями функциональности, ошибками подключения и действиями над сертификатами. Добавлена поддержка новых возможностей, таких как управление секретными ключами и обработка политик аутентификации."}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"helpers"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2026-01-19",children:"2026-01-19"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix Display a react node in a field label"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Реализована поддержка ReactNode в свойстве label компонента Field для отображения произвольного контента. Добавлен новый Story для демонстрации использования кастомных лейблов и соответствующее описание одобряемых изменений внешнего вида. Обновлён тип label в FieldProps для возможности передачи JSX."}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Field"}),`
`,n.jsx(i.li,{children:".storybook"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2026-01-16",children:"2026-01-16"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix add description for indent in placeholder"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Добавлена документация и пример использования отступов в описании компонента placeholder. Объяснено, как правильно форматировать текст с отступами в шаблонных строках и JSON-файлах локализации. Изменён файл локализации, чтобы поддерживать отступы в примере описания."}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Placeholder"}),`
`,n.jsx(i.li,{children:".storybook"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix fix layout in Accordion title"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Исправлен макет заголовка компонента Accordion. Добавлен стиль для элемента ",n.jsx(i.code,{children:".rc-collapse-title"}),", чтобы его ширина всегда соответствовала 100% контейнера. Обновлены условия применения CSS-классов в зависимости от параметра ",n.jsx(i.code,{children:"withBorder"}),"."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Accordion"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2026-01-15",children:"2026-01-15"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"package.json"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat add testId for HorizontalNavItems"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Добавлены атрибуты для тестирования в компонент ",n.jsx(i.code,{children:"HorizontalNavItems"})," с использованием пропсов ",n.jsx(i.code,{children:"testId"})," и ",n.jsx(i.code,{children:"klId"}),". Обновлены типы в ",n.jsx(i.code,{children:"types.ts"}),", чтобы поддерживать новые свойства. В ",n.jsx(i.code,{children:"HorizontalNav.stories.tsx"})," добавлены примеры использования новых атрибутов для тестирования в сториях."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Horizontal-nav"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2026-01-14",children:"2026-01-14"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat Add scripts for pipelines"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Добавлены скрипты для автоматизации генерации и обновления раздела Changelog в формате MDX с использованием LLM-модели и информации из Git. Реализована проверка дубликатов дат, чтобы избежать повторов при нескольких мержах в один день. Changelog теперь интегрирован в Storybook после раздела Intro. Также обновлены пути в конфигурации ESLint для корректной обработки новых файлов."}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:".changelog"}),`
`,n.jsx(i.li,{children:".storybook"}),`
`,n.jsx(i.li,{children:"Changelog.mdx"}),`
`,n.jsx(i.li,{children:"changelog.md"}),`
`,n.jsx(i.li,{children:"package.json"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2026-01-13",children:"2026-01-13"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix add sticky header and footer"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Добавлены поддержка закрепленных заголовка и подвала в компоненте dropdown для улучшения пользовательского опыта при прокрутке меню. Внесены изменения в типы, стили и логику рендеринга, чтобы корректно обрабатывать элементы с флагом sticky. Также расширены story-примеры для демонстрации новых возможностей."}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Dropdown"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2026-01-12",children:"2026-01-12"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix fix sidebar header style"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Исправлен стиль заголовка боковой панели для улучшения отображения префиксов и постфиксов. В компонент добавлены параметры, включая ",n.jsx(i.code,{children:"truncateTitle"}),", для контроля обрезки длинных заголовков и отображения всплывающих подсказок. Рефакторинг стилей был выполнен с использованием CSS Grid и классов для более гибкой компоновки."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Sidebar"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2025-12-30",children:"2025-12-30"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix backdrop flicker when closing nested sidebars"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Исправлена проблема мерцания подложки при закрытии вложенных сайдбаров. Реализован враппер ",n.jsx(i.code,{children:"handleClose"}),", который синхронно обновляет CSS-классы перед вызовом оригинального метода ",n.jsx(i.code,{children:"onClose"}),". Это позволяет корректно назначить класс ",n.jsx(i.code,{children:"antd-sidebar-wrapper_last"})," родительскому сайдбару до начала анимации закрытия, исключая визуальные артефакты."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Sidebar"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2025-12-29",children:"2025-12-29"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Реализован новый тип элемента ",n.jsx(i.code,{children:"innerActions"})," для компонента ",n.jsx(i.code,{children:"Dropdown"}),", позволяющий вставлять интерактивные элементы, такие как чекбоксы, без закрытия попапа при клике. В компоненте таблицы улучшена реактивность состояния фильтра, добавлена логика обновления фильтров и поддержка множественного выбора через ",n.jsx(i.code,{children:"Dropdown.InnerActions"}),". Также внесены изменения в типы и стили для обеспечения корректного отображения и работы нового функционала."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Dropdown"}),`
`,n.jsx(i.li,{children:"Table"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2025-12-26",children:"2025-12-26"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix, add empty text for Table"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Исправлен отображение текста для пустой таблицы в зависимости от состояния загрузки. Теперь при активном спиннере текст не отображается, обеспечивая более точное визуальное состояние компонента. Изменения касаются логики рендера в компоненте Table."}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Table"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix, fix sorting and filter module"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Исправлен порядок обновления данных в модуле таблицы SortingAndFilters для обеспечения актуальности preparedData. Заменены useState и useEffect на useMemo для синхронизации подготовки данных с текущим dataSource во время рендера, что устраняет временные задержки и отображение устаревших значений. Сайд-эффекты, связанные с сортировкой и хранением, вынесены в отдельный useEffect для соблюдения принципа единственной ответственности. Теперь данные корректно обновляются при смене сортировки или фильтрации, избегая отображения неправильного скелетона при пустом dataSource."}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Table"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix add RO in expand"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["В компоненты ",n.jsx(i.code,{children:"Expand"})," и ",n.jsx(i.code,{children:"ExpandableText"})," был добавлен ",n.jsx(i.code,{children:"ResizeObserver"})," для более точного отслеживания изменений размеров элементов и улучшения обработки отображения текста. Реализована логика с отложенным вызовом через ",n.jsx(i.code,{children:"useResizeObserver"}),", включая новый утилитный метод ",n.jsx(i.code,{children:"resizeThrottle"}),". Также внесены изменения в стили и обработчики событий для корректного отображения кнопки разворачивания только при переполнении текста."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Expand"}),`
`,n.jsx(i.li,{children:"Expandable-text"}),`
`,n.jsx(i.li,{children:"helpers"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2025-12-25",children:"2025-12-25"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix show drag icon"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Исправлены стили для корректного отображения иконки перетаскивания в таблице с поддержкой drag-and-drop. Добавлены параметры для передачи CSS-свойств в компонент ",n.jsx(i.code,{children:"RowDraggingContainer"}),". Обновлен типизированный интерфейс для обработчиков событий перетаскивания, чтобы поддерживать обобщённый тип данных строк. Также внесены изменения в демонстрационные компоненты для поддержки обновлённого типа данных и событий перетаскивания."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Table"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2025-12-24",children:"2025-12-24"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix change popup container for table toolbar dropdown"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Изменён родительский контейнер для выпадающих списков в тулбаре таблицы, чтобы предотвратить отображение меню за пределами таблицы. Обновлён Storybook-компонент с примером использования для демонстрации нового поведения. Также отредактированы логика и тесты для корректного закрытия выпадающих элементов при клике вне области."}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Table"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix Правка отображения табов в TopNavigation"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Исправлено отображение табов в компоненте TopNavigation для устранения проблем с их шириной. Удалено ограничение максимальной ширины, чтобы позволить более гибкое отображение в зависимости от контента и окружения. Цель изменений — улучшение пользовательского интерфейса и адаптивности компонента."}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Top-navigation"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2025-12-23",children:"2025-12-23"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix add readOnly state, fix font styles in input рassword"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Добавлена поддержка состояния ",n.jsx(i.code,{children:"disabled"})," для компонента ",n.jsx(i.code,{children:"InputPassword"}),", включая отключение отображения иконки видимости при этом состоянии. Улучшены стили шрифта: выделены общие стили для текстовых полей и оптимизированы стили для поля ввода пароля и его плейсхолдера. Также обновлены тесты и сторизы для корректной передачи и проверки свойств компонента."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Input"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2025-12-22",children:"2025-12-22"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix enclose modes in quotes to suppress warnings"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Исправлено предупреждение в ToggleButton, добавлены кавычки вокруг имен режимов в списке. Это улучшает совместимость и подавляет уведомления о синтаксисе в Sass."}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Toggle-button"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat add autofocus in toolbar"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"В toolbar добавлена поддержка автофокуса, чтобы фокус автоматически устанавливался на поле ввода при открытии. Обновлены зависимости компонентов, чтобы корректно отслеживать изменение свойства autoFocus. Изменения затронули реализацию в hexa и v3 версиях компонентов."}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Input"}),`
`,n.jsx(i.li,{children:"Toolbar"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat add prop virtual storybook descr"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Добавлен новый компонент ",n.jsx(i.code,{children:"DynamicSelect"})," в Storybook с описанием двух режимов загрузки данных: автоматической и виртуализированной. Реализовано отображение документации и параметры настройки поведения компонента, включая поддержку пропса ",n.jsx(i.code,{children:"virtual"})," для оптимизации работы с большими списками. Создан отдельный файл метаданных ",n.jsx(i.code,{children:"meta.DynamicSelect.json"})," для хранения информации о дизайне и тестах компонента."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Select"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2025-12-20",children:"2025-12-20"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix show tooltip for the items hidden in the rest items menu"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:'Исправлено отображение всплывающих подсказок (tooltip) для элементов, скрытых в меню "оставшихся элементов" панели инструментов. Добавлен обработчик подсказок в логику отображения элементов панели инструментов. Обновлены тестовые сценарии для демонстрации работы tooltip на отключенных кнопках.'}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Toolbar"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2025-12-19",children:"2025-12-19"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix support testId prop for Tabs.TabPaneHead"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Добавлен поддержка свойства ",n.jsx(i.code,{children:"testId"})," для компонента ",n.jsx(i.code,{children:"Tabs.TabPaneHead"})," с целью улучшения тестирования компонен��ов. Обновлены story-файлы и тесты для использования новых пропсов. Изменения затронули передачу атрибутов и типизацию компонента."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Tabs"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Исправлены стили компонентов ",n.jsx(i.code,{children:"tree"})," и ",n.jsx(i.code,{children:"panel"}),", чтобы устранить проблемы с выравниванием и отступами. В ",n.jsx(i.code,{children:"PanelCSS"})," введена переменная ",n.jsx(i.code,{children:"--panel-padding"})," для более гибкой настройки отступов. В ",n.jsx(i.code,{children:"treeCss"})," изменены стили для элементов древовидного представления, добавлен отступ между элементами и удалена ненужная граница. Также в стори ",n.jsx(i.code,{children:"Tree.stories.tsx"})," добавлен параметр ",n.jsx(i.code,{children:"padding"}),", чтобы отразить изменения стиля в интерфейсе."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Panel"}),`
`,n.jsx(i.li,{children:"Tree"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix [console][table] add enum filter for policy table"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Добавлен фильтр типа Enum для таблицы политик, включая обработчик для получения списка вариантов и интеграцию с v6 адаптером. Реализована поддержка асинхронного получения опций и локализация меток. Также обновлены конфигурации для использования нового типа фильтра и связанной с ним функциональности."}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Table"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2025-12-18",children:"2025-12-18"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix [hexa-ui][table] remove manual sync columns width"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Удалён код, отвечающий за ручную синхронизацию ширины колонок таблицы, поскольку библиотека ",n.jsx(i.code,{children:"react-resizable"})," больше не используется. Это устраняет возможный диссонанс между фактической шириной и вычисленным значением, вызванный несоответствием типов чисел. Теперь изменение ширины колонок происходит только через прямое задание значения, что упрощает логику и повышает стабильность отображения таблицы."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Table"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2025-12-17",children:"2025-12-17"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix fix freezing select in columns settings"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Исправлена проблема с блокировкой при настройке отображения колонок в таблице. Реализовано более надежное управление флагом ",n.jsx(i.code,{children:"show"})," через ",n.jsx(i.code,{children:"map"}),", чтобы избежать мутации исходных данных. Обеспечен корректный переключение видимости колонки только если доступно, в противном случае устанавливается видимость по умолчанию."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Table"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2025-12-16",children:"2025-12-16"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix close 'rest items' dropdown when item is clicked for the 2nd time"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:['Исправлено поведение закрытия выпадающего меню "оставшихся элементов" при повторном нажатии на элемент. Добавлены параметры ',n.jsx(i.code,{children:"testId"})," ко всем элементам для улучшения тестирования и идентификации компонентов. Рефакторинг кода позволил повысить читаемость и упростить поддержку компонента Toolbar."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Toolbar"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix add missed displayName to toolbar items"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Добавлены отсутствующие имена компонентов (",n.jsx(i.code,{children:"displayName"}),") для элементов Toolbar, включая ",n.jsx(i.code,{children:"ExportItem"}),", ",n.jsx(i.code,{children:"ImportItem"})," и ",n.jsx(i.code,{children:"ImportExportItem"}),". Это улучшает читаемость в инструментах разработчика и помогает в отладке компонентов. Изменения направлены на обеспечение последовательности именования в UI-библиотеке."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Toolbar"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["fix do not рass ",n.jsx(i.code,{children:"closable"}),", ",n.jsx(i.code,{children:"mode"})," props to dom to silent react warnings"]}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Исправлено прокидывание устаревших пропсов ",n.jsx(i.code,{children:"mode"})," и ",n.jsx(i.code,{children:"closable"})," в DOM для устранения React-предупреждений в devtools. Логика обработки устаревшего ",n.jsx(i.code,{children:"mode"})," перенесена в хук ",n.jsx(i.code,{children:"useThemedAlert"}),", что улучшило структуру и читаемость кода. Добавлена проверка допустимых значений ",n.jsx(i.code,{children:"mode"})," с выводом уведомления об устаревании."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Alert"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix [hexa-ui[table] change headings in group titles"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Исправлена отображаемая стилизация заголовков групп в компоненте таблицы, изменён тип текста с ",n.jsx(i.code,{children:"BTM4"})," на ",n.jsx(i.code,{children:"BTM3"})," для соблюдения иерархии стилей. Изменения направлены на улучшение визуальной структуры и соответствия UI-дизайну."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Table"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix 9065258>[Localization] ksc loc update kk, pt-br"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Добавлено и изменено множество текстов для улучшения локализации системы. Эти изменения повышают безопасность и удобство работы с Kaspersky Security Center Cloud Console и другими компонентами безопасности в разделах двухфакторной аутентификации и настроек ОС. Также исправлены частые коды ошибок в переводах для точного отображения ошибок."}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"helpers"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2025-12-12",children:"2025-12-12"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix [hexa-ui] fake change to trigger npm publish"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Внесено фиксированное изменение для принудительного запуска публикации пакета через npm, поскольку предыдущая публикация завершилась с ошибкой. Изменения были минимальными и предназначены только для триггера CI/CD-процесса."}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Label"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2025-12-11",children:"2025-12-11"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix downgrade fork-ts-checker due to political dispute"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"package.json"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix [hexa-ui][table] fix toolbar items overlay"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Добавлена опция ",n.jsx(i.code,{children:"autoDropdown"})," для автоматического сворачивания элементов панели инструментов при уменьшении ширины экрана, заменившая устаревшее использование ",n.jsx(i.code,{children:"leftLimit"}),". Это устраняет проблему наложения элементов в таблице и улучшает отзывчивость интерфейса. В демонстрационных примерах внесены изменения для поддержки новой опции и фильтрации разделителей в левой части панели."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Table"}),`
`,n.jsx(i.li,{children:"Toolbar"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix [hexa-ui][table] add filteringAvailable property"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Добавлено свойство ",n.jsx(i.code,{children:"filteringAvailable"})," для конфигурации фильтрации колонок независимо от их отображения. Теперь фильтрация доступна для колонок, где ",n.jsx(i.code,{children:"filteringAvailable"})," установлено в ",n.jsx(i.code,{children:"true"}),", даже если ",n.jsx(i.code,{children:"show"})," равно ",n.jsx(i.code,{children:"false"}),". Рефакторинг логики определения доступных колонок для фильтра в ",n.jsx(i.code,{children:"SidebarFiltersModule"}),". Обеспечена обратная совместимость за счёт использования значения по умолчанию, соответствующего старой логике."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Table"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix add terminal color"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Добавлен цвет brightWhite для терминала в стилизации. Обновлена структура цветовой темы для поддержки новых ANSI-цветов. Изменения направлены на улучшение отображения текста в терминале и повышение читаемости."}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Terminal"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2025-12-10",children:"2025-12-10"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix use css variables in tooltip"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Исправлена реализация Tooltip для использования CSS-переменных вместо жёстко заданных значений. Обновлены стили и типы, убраны устаревшие параметры, такие как ",n.jsx(i.code,{children:"effects"})," и ",n.jsx(i.code,{children:"arrowBoxShadow"}),". Изменения направлены на улучшение совместимости и поддержку настройки темы через CSS-переменные."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Tooltip"}),`
`,n.jsx(i.li,{children:"design-system"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix update icons and core"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Обновлены библиотеки ",n.jsx(i.code,{children:"@kaspersky/hexa-ui-core"})," и ",n.jsx(i.code,{children:"@kaspersky/hexa-ui-icons"})," для использования последних версий с улучшенными функциями и исправлениями. Добавлены новые вспомогательные инструменты для работы с пакетами и упрощения задач сборки, такие как ",n.jsx(i.code,{children:"read-pkg"}),", ",n.jsx(i.code,{children:"uglify-js"}),", и ",n.jsx(i.code,{children:"tempfile"}),", что повышает надежность и производительность инфраструктуры."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"package.json"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2025-12-09",children:"2025-12-09"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix keep only eq op for bool filters, hide new operations under feature flag"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Изменения в модуле фильтров таблицы позволили оставить оператор ",n.jsx(i.code,{children:"eq"})," как единственный допустимый для булевых фильтров, а остальные операции теперь применяются только при активном флаге функции. Для этого был добавлен вспомогательный метод ",n.jsx(i.code,{children:"applyForV2"}),", возвращающий оператор только при условии, что версия фильтра равна 2. Это улучшает совместимость и позволяет управлять поддержкой новых операций через флаги."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Table"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat add toggle button to quick filter"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Добавлен компонент Toggle Button Group в Quick Filter для поддержки более гибкого управления фильтрами. Обновлены типы, стили и примеры использования, чтобы интегрировать новый компонент в интерфейс. Заменены упоминания Segmented Button на Toggle Button Group в документации и примерах, где это уместно. Изменения направлены на улучшение UX при отображении меток сверху и расширение функциональности фильтров."}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Field"}),`
`,n.jsx(i.li,{children:"Quick-filter"}),`
`,n.jsx(i.li,{children:"Toggle-button"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2025-12-08",children:"2025-12-08"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"docs deprecated mode prop in the segmented button"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Удалён устаревший ",n.jsx(i.code,{children:"mode"})," пропс из segmented button, позволяющий задавать цвет. Обновлена документация и типизация для отражения нового поведения по умолчанию — цвет всегда устанавливается как ",n.jsx(i.code,{children:"marina"}),". Изменения внесены по запросу дизайна для упрощения интерфейса компонента."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Segmented-button"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat add changelog in hexa-ui"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Добавлены скрипты и конфигурация для автоматического генерирования записей в changelog с использованием LLM, что позволяет формировать краткие и технически точные описания изменений на основе Git-диффов. Расширены NPM-скрипты для поддержки этой функциональности. Также обновлён ESLint-конфиг для включения файлов ",n.jsx(i.code,{children:".changelog/scripts"}),"."]}),`
`,n.jsx(i.li,{}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:".changelog"}),`
`,n.jsx(i.li,{children:"changelog-ai-assisted.md"}),`
`,n.jsx(i.li,{children:"package.json"}),`
`,n.jsx(i.li,{children:"tsconfig.json"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix top navigation"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Исправлен компонент верхней навигации, чтобы предотвратить отображение меню аккаунта при отсутствии свойств. Сделано условное рендеринг в ",n.jsx(i.code,{children:"TopNavigation.tsx"})," и изменено свойство ",n.jsx(i.code,{children:"title"})," в ",n.jsx(i.code,{children:"AccountMenuProps"})," на необязательное. Также была оптимизирована стилизация, заменив пару ",n.jsx(i.code,{children:"min-height"})," и ",n.jsx(i.code,{children:"max-height"})," на фиксированное значение ",n.jsx(i.code,{children:"height"}),"."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Top-navigation"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat add toggle button to field"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Добавлена поддержка компонента ",n.jsx(i.code,{children:"ToggleButtonGroup"})," в ",n.jsx(i.code,{children:"FieldSet"})," для использования в качестве управляющего элемента. Обновлены типы и отображение компонентов, чтобы включить новый тип ",n.jsx(i.code,{children:"toggle-button-group"}),". Изменены сторисы для демонстрации нового компонента в действии."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Field-set"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2025-12-05",children:"2025-12-05"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix [hexa-ui][table] add customGroupSorter"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Добавлен пользовательский сортировщик групп и реализованы тесты для проверки группировки в таблице. Рефакторинг компонента группировки с целью улучшения читаемости и использования ",n.jsx(i.code,{children:"customGroupSorter"})," вместо встроенной логики сортировки. Также обновлены типы для поддержки пользовательской сортировки групп и исправлены отступы в комментариях для улучшения документации."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Table"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix remove duplicate folder names"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Удалён дубликат из массива folderSizes, содержащего размеры иконок, чтобы избежать повторяющихся значений. Также в методе отображения иконок убраны лишние параметры, упрощающие логику отображения галереи иконок. Изменения направлены на улучшение читаемости и производительности компонента IconGallery."}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Icon"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat [Loc] upd RU loc"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:'Обновлены русскоязычные локализации для устранения семантической неоднозначности, заменив "загрузить" на "скачать" в контексте получения файлов с сервера. Также внесены изменения в описание отчётов для повышения точности терминологии.'}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"helpers"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2025-12-04",children:"2025-12-04"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat add illustration"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Добавлены новые визуальные варианты изображений для компонента Placeholder: success, failed, warning и notChecked для размеров 150 и 48 пикселей. Обновлён тип placeholderImageVariants для поддержки новых вариантов. Изменения внесены для улучшения визуального отображения состояний в интерфейсе."}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Placeholder"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix increase css specificity, remove unnecessary styles"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Увеличена специфичность CSS-селекторов в компонентах ",n.jsx(i.code,{children:"panel"})," и ",n.jsx(i.code,{children:"tree"}),", чтобы устранить конфликты стилей. Удалены ненужные стили и убраны избыточные модификаторы ",n.jsx(i.code,{children:"!important"}),", улучшая читаемость и предсказуемость отображения. Изменения направлены на стабилизацию внешнего вида компонентов при взаимодействии с состояниями узлов дерева."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Panel"}),`
`,n.jsx(i.li,{children:"Tree"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat Turkish - KSC 16.1 Linux upd after translation"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Обновлены локализованные строки для турецкого языка с целью улучшения точности терминологии и повышения ясности, особенно в контексте Active Directory, двухфакторной аутентификации и архитектуры операционной системы. Также внесены изменения в тексты для более корректного отражения действий, связанных с секретными ключами и их управлением."}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"helpers"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2025-12-03",children:"2025-12-03"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix [hexa-ui] remove lodash direct usages"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Изменены импорты из Lodash в нескольких компонентах для использования отдельных функций вместо импорта всего модуля, что улучшает tree-shaking и уменьшает размер бандла. ВDropdown, Markdown, Draggable, TenantFilter и Toolbar заменены глобальные импорты на модульные. Цель изменений — оптимизация производительности и сборки приложения."}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Dropdown"}),`
`,n.jsx(i.li,{children:"Markdown"}),`
`,n.jsx(i.li,{children:"Table"}),`
`,n.jsx(i.li,{children:"TenantFilter"}),`
`,n.jsx(i.li,{children:"Toolbar"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix Italian - KSC 16.1 Linux"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:'Исправлены формулировки, связанные с двойной аутентификацией (2FA), для повышения точности и ясности, включая обновление текстов для уведомлений, диалоговых окон и действий по управлению секретным ключом. Добавлены и обновлены локализованные строки для фильтрации и отображения операций, таких как "Contiene", "Non contiene", "Compreso in" и др., в интерфейсных компонентах и таблицах. Также внесены изменения в терминологию, касающуюся архитектуры и информации операционной системы, чтобы отразить более точные технические обозначения.'}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"helpers"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix remove picker prop from types"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Удалили устаревший пропс ",n.jsx(i.code,{children:"picker"})," из типов компонента ",n.jsx(i.code,{children:"RangePicker"}),", чтобы избежать конфликтов и повысить точность типизации. Обновили интерфейс ",n.jsx(i.code,{children:"RangePickerProps"}),", исключив ненужные свойства и улучшив согласованность с текущей реализацией. Изменения направлены на улучшение поддержки и предотвращение ошибок при использовании компонента."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Datepicker"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat add ai modes to button, modal, notification, tag"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Добавлены AI-темы для компонентов кнопки, модального окна, уведомления и тега, включая настройки цветов, стилей и отступов. Расширены типы и конфигурации для поддержки нового режима ",n.jsx(i.code,{children:"ai"}),", а также обновлены SCSS-миксины и CSS-стили для корректного отображения линейных градиентов и иконок. Также внесены изменения в сторисы для отображения новых режимов в интерфейсе разработчика."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Button"}),`
`,n.jsx(i.li,{children:"Modal"}),`
`,n.jsx(i.li,{children:"Notification"}),`
`,n.jsx(i.li,{children:"Tag"}),`
`,n.jsx(i.li,{children:"design-system"}),`
`,n.jsx(i.li,{children:"package.json"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix remove containerWidth from tabs styles"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Удалён параметр ",n.jsx(i.code,{children:"containerWidth"})," из стилей компонента ",n.jsx(i.code,{children:"Tabs"}),", чтобы устранить ненужную зависимость и упростить логику расчёта ширины. Изменены пропсы компонента ",n.jsx(i.code,{children:"StyledTabs"}),", исключив ",n.jsx(i.code,{children:"containerWidth"})," из ",n.jsx(i.code,{children:"shouldForwardProp"}),". Теперь ширина табов фиксирована на 100%, что улучшает адаптивность и упрощает поддержку компонента."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Tabs"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2025-12-02",children:"2025-12-02"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat save Hexa UI Table page size in Local Storage"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Добавлена поддержка сохранения размера страницы в таблице Hexa UI в локальное хранилище (Local Storage) с ис��ользованием пользовательского ключа ",n.jsx(i.code,{children:"storageKey"}),". В модуль ",n.jsx(i.code,{children:"Pagination"})," внедрены функции для получения и обновления значений в хранилище, а также расширены зависимости в хуке ",n.jsx(i.code,{children:"useEffect"}),". Модуль ",n.jsx(i.code,{children:"SortingAndFilters"})," также был обновлен для передачи ключа ",n.jsx(i.code,{children:"storageKey"})," внутрь компонента таблицы. Добавлен новый демо-пример сохранения размера страницы."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Table"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix [hexa-ui][table] refactor ResizableColumns"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["В модуле ",n.jsx(i.code,{children:"ResizableColumns"})," для компонента ",n.jsx(i.code,{children:"Table"})," в ",n.jsx(i.code,{children:"kaspersky-hexa-ui"})," заменён внешний библиотека ",n.jsx(i.code,{children:"react-resizable"})," на собственную реализацию для устранения проблем с производительностью. Это позволило избежать ненужного ресайза контейнера таблицы при изменении ширины колонок, что улучшило отзывчивость интерфейса. Также были добавлены стили и логика для обработки событий ресайза с использованием ",n.jsx(i.code,{children:"styled-components"}),"."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Table"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2025-12-01",children:"2025-12-01"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat Polish, Turkish - KSC 16.1 Linux upd after translation"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Расширен функционал локализации для польского и турецкого языков, добавлены новые строки и обновлены термины, связанные с фильтрацией, таблицами, 2FA и настройками. Также уточнены сообщения об ошибках, связанные с генерацией секретных ключей и проверкой лицензий. Изменения направлены на повышение точности локализации и адаптацию интерфейса под требования KSC 16.1 Linux."}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"helpers"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2025-11-27",children:"2025-11-27"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix add table placeholder min height"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"В компонент таблицы добавлен минимальный размер высоты для контейнера с expandable-строками, чтобы улучшить визуальное отображение в состоянии без данных. Также в пример (story) для пустой таблицы внедрен компонент Placeholder с центрированным текстом и изображением, обеспечивающий более информативный и согласованный интерфейс."}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Table"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix [hexa-ui][table] fix fullHeight"}),`
`]}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"description"}),n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Исправлен функционал ",n.jsx(i.code,{children:"fullHeight"})," в компоненте таблицы для корректного отображения высоты. Добавлен импорт ",n.jsx(i.code,{children:"ITableProps"})," для использования типизированных пропсов. Обновлен ",n.jsx(i.code,{children:"StyledTableContainer"}),", чтобы поддерживать передачу флага ",n.jsx(i.code,{children:"fullHeight"})," и применять стили на его основе."]}),`
`,n.jsxs(i.li,{children:["Затронутые файлы/компоненты",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Table"}),`
`]}),`
`]}),`
`]})]}),`
`,n.jsx(i.h3,{id:"2025-11-26",children:"2025-11-26"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add identificators to button & submenu row"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [KSC][Localization] de-DE translation update"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat KSC Linux 16.1"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat [Loc] upd RU loc"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-11-25",children:"2025-11-25"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [hexa-ui][table] fix creating new filter when editing other"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [Table] Fixed column filters to register correctly if sidebar filters are disabled"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-11-24",children:"2025-11-24"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix + + + + + en loc updated"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-11-21",children:"2025-11-21"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat KSC Linux 16.1 zh-Hans, zh-Hant upd after trans"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-11-20",children:"2025-11-20"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add activeKey prop to horizontal nav component"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [hexa-ui][table] fix duplicating sidebar filters"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-11-19",children:"2025-11-19"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix bump hexa-ui-core"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-11-17",children:"2025-11-17"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix remove unnecessary type"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [Hexa-ui] fix Select dropdown in Table"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix 9205594 update tokens for Terminal"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-11-14",children:"2025-11-14"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix fix esc when lost focus sidebar"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat [Loc] upd RU loc"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-11-13",children:"2025-11-13"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [KSC][Localization] de-DE translation update"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add new operations to table filters"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add new operations to table filters"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix replace static imports with dynamic ones"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-11-12",children:"2025-11-12"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [hexa-ui][table] fix table width when resizing neighbours"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix replace dynamic imports with static ones"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix KSC loc kk, pt-br update for lin16.1"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix calculate select width for tooltip correct rendering"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-11-11",children:"2025-11-11"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix change menu item styles"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix normalize file title with outer spaces"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat Turkish - KSC 16.1 Linux upd after translation"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [hexa-ui] small fixes for correct table v6 adapter work"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix Italian - KSC 16.1 Linux"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat [hexa-ui] make stickyHeader work with resizing-mode: scroll"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-11-10",children:"2025-11-10"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix dont trigger model value override when value set to undefined"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add function getTreeDataMap to index.ts file"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [HexaUi-Terminal] use new colors pallette for terminal"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-11-07",children:"2025-11-07"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat create toggle button component"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add menu stories"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add class name to quick filter component"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-11-06",children:"2025-11-06"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add data-testid to non-string sidebar title"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add padding for toast description"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix override isPressed background for toolbar button"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-11-05",children:"2025-11-05"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add password requirements popover on focus"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat 9065259 es, mx, fr updated in master for Lin16"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [hexa-ui][table] fix Toolbar chips and DateRangeFilters"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-11-01",children:"2025-11-01"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix change setting of active content in submenu"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-10-31",children:"2025-10-31"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat KSC Linux 16.1 draft"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-10-30",children:"2025-10-30"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix return activeRowFromProps in Submenu"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-10-29",children:"2025-10-29"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix Terminal add scroll"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-10-28",children:"2025-10-28"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix edit condition for set notification duration"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat [hexa-ui] add prop padding"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [hexa-ui][table] fix dataSource with isServerPagination"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-10-27",children:"2025-10-27"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix react warnings"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-10-24",children:"2025-10-24"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix [NEXT] Fix status icon alignment"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-10-22",children:"2025-10-22"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix fix tooltip in reductions when hasEmptyCellDash: true"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [hexa-ui][table] save columns width, sorting and filters"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-10-21",children:"2025-10-21"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat  [Loc] upd RU loc"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix make sure onScroll with isEnd = true is called"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-10-20",children:"2025-10-20"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [hexa-ui][table] fix sticky toolbar"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix move virtualizedtableforantd4 into hexa-ui"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-10-17",children:"2025-10-17"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix use pageSizeOptions from props in paginationModule"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [hexa-ui][table] fix localization hook usage"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [hexa-ui][table] add row disabled hint"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix hide empty storybook docs items"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix show drag icon in the correct place in virtual table"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [hexa-ui[[table] fix dataSource, init FilterApi condition"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-10-16",children:"2025-10-16"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [DLP Plugin] There is no field limitation Custom filter"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [hexa-ui][table] fix late changing groupBy"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [hexa-ui][table] fix toolbar types"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [hexa-ui][table] add default value for empty grouping"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat [hexa-ui] integrate FilterApi for column and sidebar filters"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix change available titleLevel sizes to h4, h5, h6 in LockGroup"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-10-15",children:"2025-10-15"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add onclick callback and make content optional"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix sort storybook controls alphabetically"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-10-14",children:"2025-10-14"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:'fix Sidebar stories — added "Expadnable", removed "With Pagination"'}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix remove console errors & warnings"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-10-13",children:"2025-10-13"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix 9086715 adds passing data-testid in tree component"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-10-10",children:"2025-10-10"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix move Gallery component to hexa-ui"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add _wrapInSpan prop to action button"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix allow export from helpers folder"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add integerOnly prop"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix Prop typing does not work for the Space component"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-10-09",children:"2025-10-09"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add isTooltipVisible prop for Link"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix react warnings"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix # 9069170 wizard footer buttons localization in console"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat  [Loc] upd ru loc"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-10-07",children:"2025-10-07"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix Incorrect icon in TreeSelect component"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [hexa-ui] fix console errors"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-10-05",children:"2025-10-05"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix table when hasEmptyCellDash: true and ellipsis: true"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-10-03",children:"2025-10-03"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix mistakes in kaspersky in files"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add Toolbar.Button for export"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add test attributes to SegmentedButtonItem"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-10-02",children:"2025-10-02"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix prevent dropdown shift during scroll by attaching to table container"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix up date-fns"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add status to lock group"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-10-02-1",children:"2025-10-02"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat add compact padding panel"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-10-01",children:"2025-10-01"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-09-30",children:"2025-09-30"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix zh-Hans, zh-Hant upd according to EN structure"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat allow to click loading split button dropdown"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-09-29",children:"2025-09-29"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add description to submenu item"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix fix cosmetic issues"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-09-26",children:"2025-09-26"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix cancel does not reset unapplied column selection"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add important for disabled state"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-09-25",children:"2025-09-25"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix checkbox option tooltip"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat update hexa-ui readme"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix do not set width if it's zero"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-09-24",children:"2025-09-24"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat, add indicator for sidebar filter"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add text-reducer for long text handling in table columns"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:'fix fix unnecessary strict requirement for "style" prop in Space'}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix 9020658 - Indicator position in tabs changed, available colors reduced"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-09-23",children:"2025-09-23"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [HexaUI-Terminal] use canvas render instead of dom"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix fix styles for gear icon in tree"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add TextReducer custom className"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-09-22",children:"2025-09-22"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix change expand button margins"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix table sidebarfilters data testid"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat [Loc] upd RU loc"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add TagReductionGroup to hexa-ui components list"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-09-19",children:"2025-09-19"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix change popover min height"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-09-18",children:"2025-09-18"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix rename favorites into bookmarks"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-09-17",children:"2025-09-17"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix Dropdown.Submenu background when overlay prop is not json"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-09-16",children:"2025-09-16"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix update separator color on focus to match design specs"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-09-15",children:"2025-09-15"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix align accordion stories with figma"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix 8996506 adds new prop for fav button"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-09-12",children:"2025-09-12"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat [Loc] upd RU loc"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix fix disabled state styles"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat KSC Linux 16 translation update - ja, ko"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-09-11",children:"2025-09-11"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat don't show pagination if dataSource is empty"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix + + en loc updated"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-09-10",children:"2025-09-10"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add prevent-tab-change prop to block tab navigation"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix replace antd with rc in accordion"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [KSC][Localization]Translation update"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-09-09",children:"2025-09-09"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix 8968312 fixes test id for panel"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-09-08",children:"2025-09-08"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix fix sidebar opening order"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add divider under filter sidebar header"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-09-05",children:"2025-09-05"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat  [Loc] upd RU loc"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix made Wizard Sidebar content height 100%"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add horizontal nav to top navigation"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-09-04",children:"2025-09-04"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix make tree list not interactive"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix 8967308 sidebar header subtitle incorrect style"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix 8967905 tabs indicator style"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat Добавление testId-атрибутов для экшенов в футере визарда"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-09-03",children:"2025-09-03"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat license card component"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix fix badge not showing when number is 0 in tabpanehead"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add ConfigProvider to Dropdown"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix use theme to set up dark-theme class"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-09-02",children:"2025-09-02"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix remove disabled prop in account button"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add prefixCls to DropdownMenu"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add test attributes to Dropdown item"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-09-01",children:"2025-09-01"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add some props to column filters"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat [hexa-ui] add FilterApi for Table"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix maintain backward compatibility of dropdown"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-08-29",children:"2025-08-29"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix formatted number input value"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [Dev][Hosted] Правка ширины боковой панели"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix layout upgrades"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-08-28",children:"2025-08-28"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix do not show settings button if showColumns and showGrouping are false"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix maintain backward compatibility of menu item"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix revert default gap for Space"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-08-27",children:"2025-08-27"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add callback onTitleClick for TopNavigation component"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-08-26",children:"2025-08-26"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-08-25",children:"2025-08-25"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix update state for error tree"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat use rc-dropdown instead of antd"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-08-22",children:"2025-08-22"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix radio option tooltip"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-08-21",children:"2025-08-21"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat implement Top navigation component"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix Fixed DropdownItemProps['children'] to allow DropdownItemProps[]"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-08-20",children:"2025-08-20"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat KSC Windows 15.1 U2 translation update - ja, ko"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"other fixed OverflowSpan not to leak ResizeObserver on unmount"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix toolbar search icon"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-08-19",children:"2025-08-19"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add yara language support to code viewer"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix @kaspersky/hexa-ui: language update"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-08-18",children:"2025-08-18"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix support string gap for Space and Grid"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat # 8782476 [Loc] upd RU loc"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-08-15",children:"2025-08-15"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix Design review"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat @kaspersky/hexa-ui: useLocale"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat pass fav icon into menu"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-08-14",children:"2025-08-14"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix make action button sticky in tree node"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add avbility to expand favorites via props"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add field label padding for hexa-upload"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-08-13",children:"2025-08-13"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix switch pin icons"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-08-11",children:"2025-08-11"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix remove unused modal styles"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat 8855694 fixes types"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-08-08",children:"2025-08-08"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat add localization for menu"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-08-07",children:"2025-08-07"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix hexa-ui: fix storybook bug"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix hexa-ui: skip firing onItemsChanged on init"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix support description in select options"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-08-06",children:"2025-08-06"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat replace favskeys"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat hexa-ui: pass icons in menu and add callback for toggle items"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add date input to quick-filters"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add elementBefore to filter row in table"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-08-05",children:"2025-08-05"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add icon token code viewer"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-08-01",children:"2025-08-01"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix add overflow: hidden style to sidebar title"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-07-31",children:"2025-07-31"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix fix auto dropdown toolbar flexsidebar"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add markdown and textAlign to Placeholder description"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix update peer dependencies"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix align alert icon"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix remove addonBefore, addonAfter from input types"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-07-30",children:"2025-07-30"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat upgrade storybook"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-07-29",children:"2025-07-29"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix add treeNode bg color & custom icons"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-07-28",children:"2025-07-28"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix use path to get value for table filter"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix fix selector padding to resolve RTL alignment"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-07-25",children:"2025-07-25"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix text wrapping"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix up dependencies"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix up eslint & typescript"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-07-24",children:"2025-07-24"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix RTL checkbox-label spacing issue"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add onClientSearch prop to table"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-07-23",children:"2025-07-23"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-07-22",children:"2025-07-22"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [hexa-ui][table] refactor filters view"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix use the right text color for popup content"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-07-21",children:"2025-07-21"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix fix dropdown comments"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix fix multiline rendering in HelpMessage"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat lint @kaspersky/hexa-ui"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add leftLimit prop to TableToolbar interface"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-07-18",children:"2025-07-18"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat [Loc] upd RU loc"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add css modules to action button"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-07-17",children:"2025-07-17"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix update brace expansion resolve"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix handle 3rd party styles by hexa-ui"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [hexa-ui] add docs and tests for table filters"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat change ExpandableText icon"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-07-16",children:"2025-07-16"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix resolve gap between table and pagination"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix update disabled button background in toolbar"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix fix table grouping, add new prop for disabling group sorting"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-07-14",children:"2025-07-14"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:'fix update select padding to show full description "100 / page"'}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-07-11",children:"2025-07-11"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat [hexa-ui] add terminal resize handler"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-07-09",children:"2025-07-09"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-07-08",children:"2025-07-08"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix remove overflow table header in loading for static header"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-07-07",children:"2025-07-07"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [hexa-ui] add TextDiff component"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add config for table sidebar tabs"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-07-03",children:"2025-07-03"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix simplify inputs"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix do not cover the input number with arrows"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix use server side total for infinite scroll"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix en loc updated"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-07-02",children:"2025-07-02"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix update transitive tar-fs to version 2.1.3"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix focus ring for inputs"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-07-01",children:"2025-07-01"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix fix cursor pagination condition"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-06-30",children:"2025-06-30"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat, table filters: add getAvailableOptions support, add custom filter for server side, fix types"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix pass cursor pagination prop to table pagination"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add card titleSize prop"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix use persistent id between renders for Radio, Checkbox"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat [Loc] upd RU loc"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-06-27",children:"2025-06-27"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix adjust table settings style"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [hexa-ui] terminal data-transfer addon"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix align wizard footer buttons to the right"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-06-26",children:"2025-06-26"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add cursor pagination to table"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix padding page headers"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-06-25",children:"2025-06-25"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix hexa-ui add terminal optimization"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsxs(i.p,{children:["fix add ",n.jsx(i.code,{children:"dropdownMaxHeight"})," prop to Select"]}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add wizard component"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-06-24",children:"2025-06-24"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix revert onDropdownFiltersChange callback"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat support table server filtering"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-06-23",children:"2025-06-23"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix hide drag&drop area if a file selected and only 1 file can be selected"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-06-20",children:"2025-06-20"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix remove display: flex from table cell for correct table tree display"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix rename view mode in CodeCompare hexa-ui"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-06-19",children:"2025-06-19"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix Add exports for table filters"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-06-18",children:"2025-06-18"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat export table context"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix handle situation when maxTagCount equals to 'responsive'"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-06-17",children:"2025-06-17"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix remove ThemeProvider from TenantFilter component"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add story for tags with actions"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-06-13",children:"2025-06-13"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-06-10",children:"2025-06-10"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat change design of terminal"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add restoreCurrentWhenDataChange prop to filtering story"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix filter if one end of the date range is specified"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix use dataIndex in handlePropertyChange function"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix increase selectors weight to skip overriding in nwc"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-06-09",children:"2025-06-09"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add SplitButton component"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add possibility not to clear the search value automatically"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-06-06",children:"2025-06-06"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix add highlighted readonly state"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-06-04",children:"2025-06-04"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add an example of a table virtualization"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix fix table filtering types"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-06-03",children:"2025-06-03"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix select styles"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix fix select dropdown styles"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-05-30",children:"2025-05-30"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat use css modules for Button"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat Translation update for ES, MX, FR"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-05-29",children:"2025-05-29"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat Linux 15.4 zh-Hans, zh-Hant upd after trans"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat update hexa-ui CodeViewer component"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix fix code viewer colors"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-05-28",children:"2025-05-28"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat # 8530951 [Loc] upd RU loc"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat Turkish - KSC 15.4 Linux upd after translation + pre-publishing task"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-05-27",children:"2025-05-27"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix 8530943> ksc loc pt-br, kk update"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix replace ts tokens with css vars"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add styleless markdown to Field's description and tooltip by default"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix fix select component null value usage"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat Polish - KSC 15.4 Linux upd after translation"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-05-26",children:"2025-05-26"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix testId for Reset button of filters tags"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat KSC Linux 15.4 translation update - ko"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-05-23",children:"2025-05-23"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix + en loc updated"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat KSC Linux 15.4 translation update - ja"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat # 8530951 [Loc] upd RU loc"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix remove border coming from prev version of antd"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix circular imports"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat # 8530951 [Loc] upd RU loc"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-05-22",children:"2025-05-22"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix Italian - KSC 15.4 Linux"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-05-21",children:"2025-05-21"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat zh-Hans, zh-Hant upd after trans"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat # 850951 [Loc] upd RU loc"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat use color tokens in hexa-ui CodeCompare"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix hide clear all button if there are no filters & fix pagination in story"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-05-20",children:"2025-05-20"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix uploader localization"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix reorder table modules"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-05-19",children:"2025-05-19"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add defaultActiveKey & onChange in DetailsPage"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix make sure the first symbol in id is a letter"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-05-16",children:"2025-05-16"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix fix filter labels and toolbar integration module"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-05-15",children:"2025-05-15"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix change column resizer styles"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix init expandable config with passed props"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-05-13",children:"2025-05-13"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat Polish, Turkish - KSC 15.4 Linux"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix Italian - KSC 15.4 Linux"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add tests for filters & fix application of filters"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-05-07",children:"2025-05-07"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat [Loc] upd RU loc"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat create terminal component"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-05-06",children:"2025-05-06"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix changed column color in hexa-ui CodeCompare"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-05-05",children:"2025-05-05"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix + en loc updated"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix change select value of filter"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-04-30",children:"2025-04-30"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add CodeCompare to hexa-ui"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat Turkish - KSC 15.4 Linux"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-04-28",children:"2025-04-28"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat # 8530951 [Loc] upd RU loc"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix forward ref to Textarea"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-04-25",children:"2025-04-25"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix+ +en loc updated"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix modal footer buttons"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-04-24",children:"2025-04-24"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat KSC Linux 15.4 translation update"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix align number filters"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat # 8530951 [Loc] upd RU loc"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-04-23",children:"2025-04-23"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add 'popoverPlacement' prop to Field"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix Italian - KSC 15.4 Linux"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix fix radio label testId"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-04-22",children:"2025-04-22"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix replace ts tokens with css vars"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add defaultActiveTab prop & fix types"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-04-21",children:"2025-04-21"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat allow to control fileList for Uploader"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix user can not select the time sometimes"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-04-18",children:"2025-04-18"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-04-17",children:"2025-04-17"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix add missed kilobytes -> bytes conversion"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-04-15",children:"2025-04-15"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix fix table tree expand icon margin"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix mark filters sidebar as experimental feature"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-04-14",children:"2025-04-14"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add sticky total summary to table"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add testId to submenu items & change activeKey, defaultActiveKey, onChange logic"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-04-10",children:"2025-04-10"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix ChineseTrad - KSC 15.3 Linux Hexa upd"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add sidebar subheader wrapper"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add LoadingOverlay"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-04-09",children:"2025-04-09"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat Polish - KSC 15.3 Linux including hexa upd according to en-US"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-04-08",children:"2025-04-08"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix prevent auto-creating tags in select"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix replace @kaspersky/icons with @kaspersky/hexa-ui-icons"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-04-07",children:"2025-04-07"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix submenu design review"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-04-03",children:"2025-04-03"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix set the popover arrow on trigger target when popover is shifted due to lack of space"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-04-02",children:"2025-04-02"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix set the default time correctly when a day is selected"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix IT, zh-Hans upd according to EN structure with EN strings"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-04-01",children:"2025-04-01"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix line break in notification words"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-03-31",children:"2025-03-31"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix 8223068 - en loc updated"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-03-28",children:"2025-03-28"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add position: relative to sidebar content"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add getPopupContainer prop to Field & FormLabel"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat # 8204366 [Loc] upd RU loc"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix fix grouped tabs header position"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-03-27",children:"2025-03-27"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix add note about pagination.total prop"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-03-26",children:"2025-03-26"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-03-25",children:"2025-03-25"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix remove overflow: hidden for tabs container"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add stories for popover & tooltip within scrollable container"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add warning about row key to table tree stories"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-03-24",children:"2025-03-24"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix fix calendar onchange call with value prop"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-03-21",children:"2025-03-21"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-03-20",children:"2025-03-20"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix support backward compatibility in card contract"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-03-19",children:"2025-03-19"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix add IconResolver"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-03-17",children:"2025-03-17"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix [hexa-ui][uploader] add showProgress prop"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-03-14",children:"2025-03-14"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat add placeholder component"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-03-13",children:"2025-03-13"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix fix calendar dropdown switch when date set. Add test for it"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-03-12",children:"2025-03-12"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix add padding when show counter is on"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-03-11",children:"2025-03-11"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix add uploader to field set"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-03-10",children:"2025-03-10"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix remove undesired font family from bundles"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add number of tooltips in storybook perfom story"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add blur for timeinput"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-03-07",children:"2025-03-07"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix occurring error after opening modal in dev env"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix 8382878 changes word wrap for notification"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-03-06",children:"2025-03-06"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix fix onOpenChange call and showTime format conflict"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-03-05",children:"2025-03-05"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add validationStatus prop to TreeSelect"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add multiline support for dropdown item description"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix increase clickable area of tree node arrow icon"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-03-04",children:"2025-03-04"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix update button loading state styles"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat IT, zh-Hans, zh-Hant upd after trans"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-03-03",children:"2025-03-03"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix fix rerenders on dependencies check"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-02-28",children:"2025-02-28"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add EmptyCellDash module"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix fix onchange time value in date and range picker"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-02-27",children:"2025-02-27"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix update color tokens in components"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-02-26",children:"2025-02-26"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix fix masked textbox story"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat turn on esm modules for hexa-ui"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-02-25",children:"2025-02-25"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat add onExpand prop form expandable text"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-02-24",children:"2025-02-24"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix fix bad encode in design description in storybook"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat KSC Linux 15.3 translation update - ja, ko"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat 8223060][KSC][Localization] Translation update for ES, MX, FR"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-02-21",children:"2025-02-21"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix IT, zh-Hans, zh-Hant upd after trans and bf"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat Polish - KSC 15.3 Linux"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [KSC][Localization] Translation update"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix prepare passed format for datepicker"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix Do not switch pages on every data change when client-side"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-02-20",children:"2025-02-20"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix + + en loc updated"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat [Loc] upd RU loc"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [KSC][Localization]Translation update"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-02-19",children:"2025-02-19"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [Toggle][composition] add toggle composition"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [Menu] add status for user in menu"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [Form-Label] add tags prop in form-label and tests"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix change compact table row height"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat [Loc] upd RU loc"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add invalid border to tree"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-02-18",children:"2025-02-18"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix + + + Shana review - en loc updated"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix replace icon with right one"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-02-17",children:"2025-02-17"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add props for virtual scroll in tree component"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [Badge] change title to tooltip, composition stories"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add quick filter component"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat [Loc] upd RU loc"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat test bump"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-02-15",children:"2025-02-15"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat review design for LockGroup"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-02-14",children:"2025-02-14"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix downgrade rc-select to 14.1.2 to support backward compatibility"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix + en loc updated"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix + en loc updated"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-02-13",children:"2025-02-13"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [hexa-ui] add TagReductionGroup"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix fix font variant styles"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-02-12",children:"2025-02-12"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix export all components & add tests for it"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add note about table resizing"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:'feat build es6 modules"'}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-02-11",children:"2025-02-11"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat KSC Linux 15.3 IT, zh-Hans, zh-Hant upd according to EN"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix remove antd usage in Select"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix remove isItemSelectedIconVisible prop from Select"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix skip react service params if clone columns"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add CONTRIBUTING.md"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-02-07",children:"2025-02-07"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat # 8204366 [LOC] upd RU loc"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add status card component"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix make linting required in hexa-ui packages"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix + + en loc updated"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-02-06",children:"2025-02-06"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add tooltip to minimized menu items"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix support Select as uncontrolled component"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-02-04",children:"2025-02-04"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat KSC Linux 15.3 translation update"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add Uploader"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-02-03",children:"2025-02-03"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add size prop to badge"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [KSC][Localization] Translation update"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-01-31",children:"2025-01-31"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix fix accordion styles"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-01-30",children:"2025-01-30"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix add @codemirror package to resolutions"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-01-29",children:"2025-01-29"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix show what props are displayed at the moment"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [hexa-ui] add PageHeader"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-01-28",children:"2025-01-28"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix fix tabs & toolbar tooltip flickering"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix change padding"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix protect markdown form crash if value is passed as undefined"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-01-27",children:"2025-01-27"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat [KSC][Localization] Translation update for ES, MX, FR"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix upgrade vulnerable library store2"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-01-24",children:"2025-01-24"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix KSC Linux 15.3 IT, zh-Hans, zh-Hant upd according to EN"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat use yarn-deduplicate"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix fix tabs tooltip flickering & add new prop for tooltip"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-01-23",children:"2025-01-23"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix fix some test attrs"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-01-22",children:"2025-01-22"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix storybook"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix @babel/traverse deps minimization"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-01-21",children:"2025-01-21"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add colors usage guide"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat build es6 modules"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [hexa-ui] fix field labelType"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [hexa-ui] fix field width"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add static data-testid"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat Polish - KSC 15.3 Linux"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-01-20",children:"2025-01-20"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add ProgressBar component"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add activeKey, onChange & contentClassName props"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix fix token search in palette"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix Reductions hook fix"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-01-17",children:"2025-01-17"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix refactor badge stories"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-01-16",children:"2025-01-16"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix right use test attributes, more inside attrs and test for it"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix return deleted prop to toolbar button"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [hexa-ui] remove space in SectionMessage"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-01-15",children:"2025-01-15"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat [Loc] KSC Linux 15.3 IT, zh-Hans, zh-Hant upd after trans"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-01-14",children:"2025-01-14"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix pass data-testid to Radio label"}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-01-13",children:"2025-01-13"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix refactor alert stories"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [hexa-ui] add status group and orientation for tag and status"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add inverted color for loader"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2025-01-10",children:"2025-01-10"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add tooltip to dropdown item"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix set active style for table quick filter"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-12-27",children:"2024-12-27"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [hexa-ui] add dependentElement to checkbox, radio and toggle"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add indicator to toolbar button icon"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-12-26",children:"2024-12-26"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat update codemirror in hexa ui"}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-12-23",children:"2024-12-23"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix fix multiselect height"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [hexa-ui] incorrect input padding"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-12-16",children:"2024-12-16"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix adjust text field labels shrink"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix fix textarea's words counter appearance at disabled state"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-12-13",children:"2024-12-13"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat add osmp web coverage team"}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-12-09",children:"2024-12-09"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add scroll to tbody for header not shift"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix recalculate Popover max width once showLimitSize is changed"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-12-05",children:"2024-12-05"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix change merge function from other package to lodash"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [HexaUI] fix width of SegmentedControl"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-12-04",children:"2024-12-04"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add types reexport from design system"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix restore correct checking of tree nodes"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix show disabled checkbox for disabled tree node"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add new props to accordion"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-12-03",children:"2024-12-03"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix up webpack, up es5-ext in hexa-ui"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix refactor button stories"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add readonly to Select props"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix details page design review"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-12-02",children:"2024-12-02"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add new modes to action button & divider"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat replace tabs with submenu in details page"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix bump @kaspersky/dev-tools to 2.32.0, fix linting for ui packages"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-11-29",children:"2024-11-29"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix added missed attrs after migration"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat replace js tokens with css variables"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add submenu component"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-11-28",children:"2024-11-28"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat improve hexa-ui & hexa-ui-core documentation"}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-11-27",children:"2024-11-27"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix white space under tabs More button"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix toolbar autoDropdown behaviour"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix throw tests  attributes for key value mapper"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-11-26",children:"2024-11-26"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix remove full value in TimeInput [Hexa-UI]"}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-11-25",children:"2024-11-25"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix [KSC][Localization]Translation update"}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-11-22",children:"2024-11-22"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix disable virtual scroll in treeselect"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add prop and possibility to set testattrs to fieldset mapper"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix notification design review"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-11-21",children:"2024-11-21"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [HexaUI] fix incorrect height of selection cell in Table"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add tooltip to disabled button in toolbar"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-11-20",children:"2024-11-20"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix add product colors to theme config"}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-11-19",children:"2024-11-19"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix upgrade express in @kaspersky/hexa-ui"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [HexaUI] change hideOnSinglePage condition"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix hover styles for tree checkbox"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix show controls for Tree in storybook"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-11-18",children:"2024-11-18"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix export card from package"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat KSC Linux 15.2 IT, zh-Hans, zh-Hant upd after trans"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add flag to make tag responsive"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-11-13",children:"2024-11-13"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix При удалении всех дочерних тенантов не удалять родительский в фильтре тенантов"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix change table tree styles & add story with icon column"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-11-12",children:"2024-11-12"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add select story with status component"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix Support line break for KeyValue"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add 'disabled' prop for the entire Accordion"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix deprecate 'size' in favor of 'gap' prop in Space"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix fix focus state"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-11-07",children:"2024-11-07"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix fix nwc styles crash on select open"}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-11-06",children:"2024-11-06"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix override antd styles in toggle"}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-11-05",children:"2024-11-05"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix calculate correct total row count"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add color tokens story to all components"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-11-02",children:"2024-11-02"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix remove unnecessary casting in select"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat 8017776 [KSC][Localization] Translation update for es, mx, fr"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix override antd styles in toggle"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:'fix in children tabs button "more" blink'}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-11-01",children:"2024-11-01"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [HexaUI] custom paddings for textbox and select in table cell"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat KSC Linux 15.2 translation update - ko"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix mark place prop as deprecated & change default value for duration"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix import fonts to hexa ui"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat update tokens for components"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-10-31",children:"2024-10-31"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix accordion styles"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat Стандартное поведение дерева для фильтра тенантов"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-10-30",children:"2024-10-30"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add import export button in toolbar"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat move to USR pt2"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-10-29",children:"2024-10-29"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat KSC Linux 15.2 translation update - ja"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add aliases to color tokens table in storybook"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-10-28",children:"2024-10-28"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix [KSC][Localization]Translation update"}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-10-25",children:"2024-10-25"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix action button position inside notification"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add custom format prop in RangePicker"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix clean up notifications"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-10-23",children:"2024-10-23"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [Hexa-UI][v3] fix pagination"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix revert removing URL input"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat updates tree type"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-10-22",children:"2024-10-22"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add new color tokens table to storybook"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat upd RU loc"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix + + en loc updated"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-10-21",children:"2024-10-21"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat remove deprecated from @kaspersky/hexa-ui"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add i18n to textarea words counter"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix replace typography tokens from design-system with ones from @kaspersky/hexa-ui-core"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add details page component"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-10-15",children:"2024-10-15"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix add setMaxSizes prop to popover"}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-10-14",children:"2024-10-14"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix KSC zh-Hans, zh-Hant hexa + tutorial updated"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [Hexa-UI][v3] add hideOnSinglePage prop to pagination modules"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [HexaUI] fix some multiselect issues"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [KSC][Localization]Translation update"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add description prop to dropdown item"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-10-13",children:"2024-10-13"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix fix hidden tab blink"}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-10-11",children:"2024-10-11"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add the output of the final link to storybook-v6-pr pipeline"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add interactive prop and storybook story for card"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-10-10",children:"2024-10-10"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add control for allowClear in select stories"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add infoTooltip prop to tabs"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat 7875929 [KSC][Localization] Translation update for ES, MX, FR"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix remove custom docs container"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-10-09",children:"2024-10-09"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix override eslint packages correctly"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"other OSMP-DOCKER миграция в USR"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [HexaUI] stick informationCard footer to the bottom"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix disabled input layout"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-10-07",children:"2024-10-07"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat add card component"}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-10-04",children:"2024-10-04"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add data-validationstatus to notifications"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix fix vertical tabs"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix quotes for eslint"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-10-03",children:"2024-10-03"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat add new tokens to components"}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-10-01",children:"2024-10-01"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix replace official storybook story source addon with custom one"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-09-30",children:"2024-09-30"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix fix tabs inside tabs issue"}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-09-27",children:"2024-09-27"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix remove unsupported date formats"}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-09-26",children:"2024-09-26"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix add warning about missing component information in storybook"}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-09-25",children:"2024-09-25"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix fix gap between toggle and label"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix breadcrumbs design review"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-09-24",children:"2024-09-24"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat select - new loading more and loading error states"}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-09-23",children:"2024-09-23"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix added error and invalid props to data-validationstatus deps"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add new tokens to breadcrumbs"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix remove redundant styles in select"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add new tokens to components"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add custom padding if table cell contains select"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-09-21",children:"2024-09-21"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat add breadcrumbs component"}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-09-18",children:"2024-09-18"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [hexa-ui] use just internal radio style in table"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [HexaUI] Put asterisk in correct place"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix update dates formats according recent convention"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-09-17",children:"2024-09-17"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat add new tokens to components"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix Replace margin between Toolbar, FilterItems and Table by gap"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-09-16",children:"2024-09-16"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix added missing validationstatus html tag for tests"}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-09-15",children:"2024-09-15"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix update express"}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-09-12",children:"2024-09-12"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add story for three ways to trigger popover"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix fix colors for blacktheme"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-09-11",children:"2024-09-11"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix tabs bug represent"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add missing testIds in table header dropdown"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-09-10",children:"2024-09-10"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix react warnings"}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-09-09",children:"2024-09-09"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix remove icons from dev dependencies"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix translation update - zh-Hant-TW"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix change table radio styles"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix title width for FormTrigger"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat improve @kaspersky/hexa-ui-core package"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-09-06",children:"2024-09-06"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix add logo for storybook dark theme"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix 7887657 trims label attr for select option"}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-09-05",children:"2024-09-05"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix kl-id for lock group"}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-09-04",children:"2024-09-04"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix Loc IT, zh-Hans, zh-Hant updated after trans"}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-09-03",children:"2024-09-03"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"feat 7669731> ksc loc pt-br, pl, kk hexa update"}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-09-02",children:"2024-09-02"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix Loc upd hexa-ui"}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-08-30",children:"2024-08-30"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix refactor locales and add  date extraction in format hook"}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-08-29",children:"2024-08-29"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix kl-id for filters"}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-08-28",children:"2024-08-28"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"fix kl-id in key value"}),`
`]}),`
`,n.jsx(i.h3,{id:"2024-08-27",children:"2024-08-27"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"feat KSC Hexa UI loc update - ja, ko"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix"}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsx(i.p,{children:"fix [HexaUI] Add SegmentedButton isStretch prop"}),`
`]}),`
`]})]})}function h(e={}){const{wrapper:i}={...l(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(s,{...e})}):s(e)}export{h as default};
