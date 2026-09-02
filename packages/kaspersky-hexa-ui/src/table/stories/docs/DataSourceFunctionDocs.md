### Серверное получение данных (`dataSourceFunction`)

Когда данных много и держать их все на клиенте нельзя, вместо массива `dataSource` таблице передают
функцию `dataSourceFunction`. С этого момента таблица **перестаёт обрабатывать данные сама**: пагинация,
сортировка, фильтрация, поиск и группировка уходят на бэкенд. Таблица лишь сообщает функции, что хочет
пользователь (какая страница, что ввели в поиск, по чему сортируют и т. д.), а функция возвращает готовую
страницу строк и общее их количество.

> **Пример в Storybook:** [dataSourceFunction](./?path=/story/hexa-ui-components-table-datasourcefunction--data-source-function)

> **NB!** `dataSource` (клиентский массив) и `dataSourceFunction` — **взаимоисключающие**. Если задать оба,
> для отрисовки победит результат функции, но клиентский `dataSource` всё равно лишний раз дёрнет
> `onDataSourceChange`. Выбирайте что-то одно.

#### Базовый пример

Функция получает объект с параметрами запроса и возвращает `Promise` с `rows` и `totalCount`:

```tsx
type ProductRow = TableRecord & {
  // ...
}

export function SomeProductTable ({ columns }: ProductTableProps) {
  // Функцию ОБЯЗАТЕЛЬНО мемоизируем — иначе каждый рендер будет запускать лишний перезапрос.
  const dataSourceFunction = useCallback<TableDataSourceFunction<ProductRow>>(
    async ({ page, pageSize, params, sorting }) => {
      const res = await api.getProducts({
        offset: page * pageSize,
        limit: pageSize,
        search: params?.searchString,
        groupBy: params?.groupBy,
        filters: params?.filters,
        sortField: sorting?.field,
        sortAsc: sorting?.isAsc
      })

      return { rows: res.items, totalCount: res.total }
    },
    []
  )

  return (
    <Table
      columns={columns}
      dataSourceFunction={dataSourceFunction}
      pagination={{ pageSize: 50 }}
    />
  )
}
```

#### Что таблица передаёт в функцию

В аргументе приходит всё, что нужно, чтобы собрать запрос к серверу:

- `page` — номер страницы, **считая с нуля**. В UI страницы нумеруются с 1, а в функцию приходит `current − 1`.
- `pageSize` — размер страницы.
- `params.searchString` — то, что пользователь ввёл в поиск тулбара.
- `params.groupBy` — ключ колонки, по которой сейчас группируют.
- `params.filters` — активные sidebar-фильтры (массив, может быть пустым).
- `sorting.isAsc` — направление сортировки (`true` — по возрастанию).
- `sorting.field` / `sorting.attribute` — по какому полю/атрибуту сортировать. 

#### Что нужно вернуть

- `rows` — строки **одной страницы**, уже отфильтрованные/отсортированные сервером.
- `totalCount` — сколько всего строк по всем страницам. **Без него таблица не знает, сколько страниц
  рисовать** — в серверном режиме длину набора она сама не считает.
- Необязательные флаги: `isDefaultSortDisabled`, `isClientGroupsSortingDisabled`.

#### Как это связано с остальными фичами таблицы

Все фичи «просто работают» — пользователь взаимодействует с таблицей как обычно, а результат его действий
прилетает в `dataSourceFunction`:

| Пользователь делает | В функцию приходит |
|---|---|
| Переходит на другую страницу | `page` (0-based), а `totalCount` из ответа рисует пагинацию |
| Сортирует колонку | `sorting` (клиентская сортировка при этом выключена) |
| Печатает в поиск тулбара | `params.searchString` |
| Выбирает колонку группировки | `params.groupBy` |
| Применяет sidebar-фильтр или автосгенерированный enum-фильтр в колонке (`showEnumFiltersInColumn: true`) | `params.filters` |

Про **выбор строк** при серверной пагинации (стратегии include/exclude, `deselectedRowKeys`,
предвыбранные строки) — см. отдельный раздел [Выбор строк](#выбор-строк).

> **NB!** Предикатные фильтры из дропдауна колонки (`filters: [...]` в описании колонки) до сервера
> **не доходят** — на бэкенд уезжают только sidebar-фильтры. Для серверной фильтрации используйте sidebar
> или enum-фильтры колонки с `showEnumFiltersInColumn`.

#### Обновление данных вручную (refresh)

Иногда данные нужно перезапросить теми же параметрами — например, по кнопке «Обновить». Для этого в `ref`
таблицы есть метод `triggerDataSourceFunction()`:

> **Пример в Storybook:** [triggerDataSourceFunction](./?path=/story/hexa-ui-components-table-datasourcefunction--trigger-data-source-function)

```tsx
export function SomeProductTable ({ dataSourceFunction, columns }: ProductTableProps) {
  const tableRef = useRef<TableRef | null>(null)

  return (
    <Table
      ref={tableRef}
      columns={columns}
      dataSourceFunction={dataSourceFunction}
      // Кнопка «Обновить» в тулбаре просто перезапрашивает текущую страницу
      toolbar={{ onRefresh: () => tableRef.current?.triggerDataSourceFunction?.() }}
    />
  )
}
```

#### Загрузка и пустое состояние

Пока функция выполняется, таблица находится в состоянии загрузки: если передан `loaderProps`, показывается
спиннер, а `emptyText` **не мигает** «нет данных» до прихода первого ответа. Спиннер появляется снова на
каждом перезапросе (смена страницы, сортировки, фильтра), а старые строки остаются на экране, пока не придут
новые. Когда сервер вернул пустой набор — показывается `emptyText`.

#### Трансформация строк и уведомление об изменениях

- `patchDataSource(rows)` — позволяет преобразовать строки ответа перед отрисовкой (добавить вычисляемые
  поля, отформатировать значения). Как и саму функцию, `patchDataSource` стоит мемоизировать.
- `onDataSourceChange(rows)` — вызывается после каждой успешной загрузки с финальными (уже
  patched) строками. Удобно для аналитики или синхронизации внешнего состояния. При ошибке загрузки
  **не вызывается**.

#### Подводные камни

> **NB!** Несколько вещей, о которых легко забыть:

1. **Нужна включённая пагинация.** При `pagination={false}` серверная загрузка спроектирована вокруг страничной модели — `dataSourceFunction` **не вызывается вообще**, и таблица останется пустой.
2. **Мемоизируйте функцию.** Новая ссылка на `dataSourceFunction` (а также на `patchDataSource` / `onDataSourceChange`) на каждый рендер приводит к лишним перезапросам. Держите их стабильными.
3. **Гонка ответов не защищена.** Если быстро переключать страницы/фильтры, два запроса могут «лететь» одновременно, и победит тот, чей ответ пришёл **последним** — даже если он устарел. Гасите гонку на стороне API-клиента (отмена предыдущего запроса), если это критично.
4. **`page` — с нуля.** В `dataSourceFunction` приходит `current − 1`.
5. **`totalCount` обязателен** для корректной пагинации — из него считается число страниц.
