# DSL: типизация и shared-код (роадмап п.2.1)

**Статус п.2.1:** закрыт (переход на TS, shared-модуль, только `.ts` формы, реэкспорты, тесты). **П.2.2** (типизация динамических `import()`) — отдельно, см. [roadmap §2.2](../roadmap.md#normalization-roadmap-p22). Общий контекст: [roadmap §2](../roadmap.md) и [tooling → типизация](../tooling.md#normalization-dsl-typing-loading).

---

## Принятые решения (согласовано)

1. **Shared-код в монорепозитории без отдельного пакета.** Типы и логика DSL живут в **одном общем месте** в дереве репозитория; **normalization-tool** и **transpile-viewer** **импортируют** этот код (например через **path alias** в `tsconfig` + **`resolve.alias` в Vite**, или иной согласованный способ). **Отдельный workspace-пакет с собственным `package.json`** под DSL **не вводим** — нет второго «npm-пакета», только общий исходный модуль.
2. **`FormSlice.state`** — **гибкий** контракт (ориентир: `Record<string, unknown>`), без обязательной выверки ключей по `schema` на этапе п.2.1.
3. **П.2.2 (отложено)** — типизация и единый контракт **динамических импортов** (`import()` формы, `configHook`, handlers) **вне** закрытого скоупа п.2.1; см. [roadmap §2.2](../roadmap.md#normalization-roadmap-p22).

---

## Скоуп п.2.1 (сделано)

1. **Единый модуль DSL:** **`shared/types/form.ts`** (`FormData`), **`shared/normalization-form-dsl/form-dsl-core.ts`**, entry **`form-dsl.ts`**.
2. **Оба приложения** подключают только **импортом** (alias `@normalization/form-dsl`): в пакетах — **реэкспорт** из `src/types/form-dsl.ts` для прежних путей в коде.
3. **Публичный типизированный API** — сигнатуры парсера/нормализации явно возвращают `FormData` (и узкие типы там, где уже безопасно).
4. **Тесты** — один набор в `shared/normalization-form-dsl/form-dsl.test.ts`, подхватывается **vitest** normalization-tool.
5. **Документация** — `AGENTS.md` / README: откуда импортировать типы; шаблон для авторов **`.ts`** форм (тип `FormData` из общего модуля).

**Критерий закрытия п.2.1:** общий модуль подключён **импортом** в оба инструмента, формы — **`.ts`**, парсинг **`parseFormTs`**, тесты зелёные, дублирования полного `form-dsl` нет; п.2.2 остаётся отдельным пунктом ([§2.2](../roadmap.md#normalization-roadmap-p22), прежний якорь [#normalization-roadmap-p21](../roadmap.md#normalization-roadmap-p21)).
