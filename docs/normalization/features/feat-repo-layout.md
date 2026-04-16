# Фича: структура кода в репозитории

**Родитель:** репозиторий.

---

## Описание

Расположение документации, пакетов приложений и **shared** DSL в монорепозитории.

---

## Дерево (ориентир)

```
docs/normalization/
  README.md
  roadmap.md
  tooling.md
  features/           # каталог фич
  plans/              # требования по эпикам
packages/kaspersky-ui-normalization-tool/
  src/utils/directoryHandleStorage.ts
  src/utils/formUrlSync.ts
  src/types/form-dsl.ts
  src/controls/
  src/components/
packages/kaspersky-ui-normalization-transpile-viewer/
  src/utils/directoryHandleStorage.ts
  src/utils/formUrlSync.ts
  src/types/form-dsl.ts
  src/components/FormRenderer.tsx
shared/types/form.ts
shared/normalization-form-dsl/
  form-dsl.ts
  form-dsl-core.ts
  parse-form-ts.ts
  load-form-dsl-runtime.ts
  form-dsl-browser-runtime.ts
  transpile-config-hook-module.ts
```

---

## Ссылки

- Пакеты: `README.md` / `AGENTS.md` внутри каждого пакета
