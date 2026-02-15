# 📋 Forma — Common Form Layer

**Forma is the team way to use the React way.** ⚛️  
Config-driven forms on shared Open Source frontend infrastructure (React Hook Form, Zod, Hexa UI). No ad‑hoc logic in views — only declarative config.

## Executive Summary

**Why Forma** — A single place to enforce how the team uses RHF, Zod, and UI. Views stay thin: they use `<Forma config={...} onSubmit={...} />` and do not touch `useForm`, `Controller`, or custom Zod chains. This keeps forms consistent and easier to maintain.

**File structure (per form)** — One folder per form; config is built with `createFormaConfig({ data, ui })`.

- **Entity/** (e.g. Login/, Registration/)
  - `Entity.forma-config.ts` — schema, defaultValues, field config
  - `Entity.tsx` — view with &lt;Forma config={...} onSubmit={...} /&gt;
  - `Entity.api.ts` — client, mappers, mutations
  - `Entity.api.mock.ts` — MSW handlers

**Typical flow** — In `*.forma-config.ts`: define Zod schema via Forma validators, defaultValues, and `fields` (type, name, label, `controlProps` for Hexa props, etc.). Export `config`, schema, type, defaultValues. In the view: `<Forma config={...} onSubmit={...} />`; submit handler calls API (e.g. mutation). Custom UI in a field is allowed only through Forma: add a custom component id, register the component in Forma’s registry, use `type: 'custom'` and `component: 'YourId'` in config.

**When Forma is missing something** — **New field type:** register runtime renderer with `registerFormaFieldType('myType', MyRenderer)` and extend `FormaFieldRegistry` via module augmentation (path = where you import Forma from). **New validator:** add in `validation/` and attach to `validateFormaField` in `validation/index.ts`. **New validation message:** add key and default in `i18n/messages.ts`, use `getFormaValidationMessage(key, opts?)` in the validator. **Custom component:** add id to `FormaCustomComponentId`, implement and register in `custom-component-registry.tsx`, then `type: 'custom'`, `component: 'YourId'` in config. Do not add logic in views.

---

## Initialization & configuration

**App setup** — Wrap content with Hexa `ConfigProvider`, then `<FormaI18nInit>` (so validation messages use the same i18n as hexa-ui). FormaI18nInit uses `useTranslation()`, so the app must have `react-i18next` (e.g. same version as hexa-ui). For MSW: call `initFormaMocks(handlers)` before first render (e.g. in `main.tsx` via `prepare().then(...)`); handlers come from app mocks.

**Form config** — `createFormaConfig({ data: { schema, defaultValues }, ui: { submitLabel?, fields } })` for static forms; returns `{ schema, defaultValues, config }`. For wizards use `ui.getFields: (stepIndex) => FormaFieldConfig[]`; returns `{ schema, defaultValues, configBase, getFields }`. In the wizard view: `config = { ...configBase, fields: getFields(step) }` and use `renderActions` for Back/Next/Submit. Export schema, `z.infer<typeof schema>`, defaultValues, and config (or configBase + getFields) from the same file.

---

## API usage

**View** — `<Forma<T> config={...} onSubmit={...} />`. Optional: `title`, `description`, `isLoading`, `renderActions(ctx)` (custom buttons; when set, default submit is hidden). No direct `useForm`, `Controller`, or `zodResolver` in views.

**Fields** — Each field config supports `controlProps?: Record<string, unknown>` to pass props to the underlying Hexa control (e.g. `controlProps: { size: 'medium' }`). Forma props take precedence over `controlProps`.

**Custom component** — Only via Forma registry: (1) add id to `FormaCustomComponentId` in `Forma.types.ts`, (2) implement and register in `ui-kit-registry/custom-component-registry.tsx`, (3) in config use `type: 'custom'`, `component: 'YourId'`.

---

## Validation

Schemas use **only** Forma’s parameterized validators (`validateFormaField.*`); no raw Zod chains in app code. Resolver: `createFormaResolver(schema)` (used internally by Forma). For “field A equals field B” use `useFormaScheme(schema, fieldA, fieldB, message?)`. When `message` is omitted, validators use the i18n translator (keys `forma.validation.*`).

**Validators (summary)** — `requiredString`, `requiredSelect`, `stringMinLen`, `email`, `termsAccepted`, `string`, `boolean`, `optionalString`, `optionalBoolean`, `enumField`. Add a new one in `validation/` (e.g. `length.ts` or new file) and add to `validateFormaField` in `validation/index.ts`. New message: add key and default in `i18n/messages.ts` (FORMA_VALIDATION_KEYS, DEFAULTS, resource objects), then `getFormaValidationMessage(key, opts?)` in the validator.

---

## i18n (validation messages)

**FormaI18nInit** — Adds Forma resource bundles to i18n and calls `setFormaValidationTranslator`. Place it **inside** ConfigProvider. Default resources: `formaValidationResourceEn`, `formaValidationResourceRu` (exported by Forma). Manual wiring: `setFormaValidationTranslator((key, fallback, opts) => i18n.t(key, { ...opts, defaultValue: fallback }))` and `i18n.addResourceBundle(...)` for en/ru; use the same i18n instance as hexa-ui.

---

## Extending Forma

**New field type** — (1) Runtime: `registerFormaFieldType('myType', MyRenderer)`; renderer gets `FormaFieldRendererProps`. (2) Build-time: extend `FormaFieldRegistry` via module augmentation (`declare module '<path-to-Forma>' { interface FormaFieldRegistry { myType: FormaFieldMyType } }`). Do not edit `FormaFieldController.tsx`. Unregistered type in config → build error; augment without register → runtime error when the form renders.

**Custom component** — See **API usage** above. No custom React components as form fields except through the Forma custom-component registry.

---

## File layout & exports

- **Forma/**
  - **data/** — apiFetch, apiPost, apiGet, apiPut; useFormaGet/Post/Put (optional); initFormaMocks
    - `client.ts`
    - `query-hooks.ts`
    - `mock.ts`
  - **field-control/** — createFormaResolver(schema), FormaFieldController
    - `resolver.ts`
    - `FormaFieldController.tsx`
  - **i18n/** — messages (keys, translator, en/ru resources), FormaI18nInit
    - `messages.ts`
    - `FormaI18nInit.tsx`
  - **validation/** — validateFormaField, useFormaScheme; re-exports i18n from ../i18n/messages
    - `index.ts`
    - `messages.ts` (re-exports for validators)
    - `required.ts`, `length.ts`, `email.ts`, `terms.ts`, `optional.ts`, `enum.ts`, `refinements.ts`
  - **ui-kit-registry/** — field renderers, registerFormaFieldType, custom-component-registry
    - `field-config.types.ts`
    - `renderer.types.ts`
    - `field-renderer-registry.ts`
    - `field-renderers.tsx`
    - `custom-component-registry.tsx`
  - `createForma.ts` — createFormaConfig({ data, ui })
  - `Forma.types.ts`
  - `Forma.tsx` — &lt;Forma&gt;
  - `index.ts` — public API

**Public exports:** Forma, FormaI18nInit, registerFormaFieldType, types (FormaProps, FormaFormConfig, FormaFieldConfig, …), createFormaResolver, createFormaConfig, apiFetch, apiPost, apiGet, apiPut, initFormaMocks, useFormaGet, useFormaPost, useFormaPut, validateFormaField, useFormaScheme, setFormaValidationTranslator, formaValidationResourceEn, formaValidationResourceRu.

---

## References

- [Zod](https://zod.dev/) — schema and validation
- [React Hook Form](https://react-hook-form.com/) — form state and resolver
