import assert from "node:assert/strict"
import fs from "node:fs"
import Ajv2020 from "ajv/dist/2020.js"
import { createEditorStore } from "../src/modules/history-store/editor-store.ts"
import { validateFormSemantics } from "../src/modules/semantic-validator/semantic-validator.ts"
import { normalizeFormSchema } from "../src/modules/schema-builder/serialization.ts"

const registry = JSON.parse(
  fs.readFileSync(
    new URL("../src/modules/component-registry/generated.json", import.meta.url),
    "utf8"
  )
)
const dispatcherSchema = JSON.parse(
  fs.readFileSync(
    new URL("../schemas/form.schema.json", import.meta.url),
    "utf8"
  )
)
const v1Schema = JSON.parse(
  fs.readFileSync(
    new URL("../schemas/v1/form.schema.json", import.meta.url),
    "utf8"
  )
)
const schemaValidator = new Ajv2020({ allErrors: true, strict: false })
schemaValidator.addSchema(v1Schema)
const validateMachineSchema = schemaValidator.compile(dispatcherSchema)
const node = (id, type, extra = {}) => ({
  id,
  type,
  props: {},
  meta: { buildType: "any" },
  ...extra,
})
const form = {
  id: "smoke-form",
  name: "Smoke form",
  schemaVersion: 1,
  elements: [],
}

const store = createEditorStore(registry)
assert.deepEqual(store.openForm(form), { ok: true })
assert.deepEqual(store.addElement(node("accordion", "Accordion")), { ok: true })
assert.equal(
  store.addElement(node("nested-accordion", "Accordion"), "accordion").ok,
  false
)
assert.deepEqual(store.addElement(node("field", "Textbox"), "accordion"), {
  ok: true,
})
assert.equal(store.getState().tabs[0].dirty, true)
assert.equal(store.getState().tabs[0].canUndo, true)
assert.deepEqual(store.selectElement("field"), { ok: true })
assert.deepEqual(store.removeElement("accordion"), { ok: true })
assert.equal(store.getState().tabs[0].selectedElementId, null)
assert.equal(store.getState().tabs[0].form.elements.length, 0)
assert.deepEqual(store.undo(), { ok: true })
assert.equal(store.getState().tabs[0].form.elements[0].children[0].id, "field")
assert.deepEqual(store.redo(), { ok: true })
assert.equal(store.getState().tabs[0].form.elements.length, 0)
assert.deepEqual(store.undo(), { ok: true })
assert.deepEqual(store.markSaved(), { ok: true })
assert.equal(store.getState().tabs[0].dirty, false)

const cyclicForm = {
  id: "cyclic-form",
  name: "Cyclic form",
  schemaVersion: 1,
  elements: [
    node("a", "Textbox", {
      dependencies: [
        {
          id: "a-dependency",
          property: "visible",
          value: true,
          condition: {
            source: { type: "element", elementId: "b" },
            operator: "truthy",
          },
        },
      ],
    }),
    node("b", "Textbox", {
      dependencies: [
        {
          id: "b-dependency",
          property: "visible",
          value: true,
          condition: {
            source: { type: "element", elementId: "a" },
            operator: "truthy",
          },
        },
      ],
    }),
  ],
}
const diagnostics = validateFormSemantics(cyclicForm, registry)
assert.equal(
  diagnostics.filter((entry) => entry.code === "CYCLIC_DEPENDENCY").length,
  2
)
assert.equal(
  diagnostics
    .filter((entry) => entry.code === "CYCLIC_DEPENDENCY")
    .every((entry) => !entry.blocking),
  true
)

const invalidForm = {
  ...cyclicForm,
  id: "invalid-form",
  elements: [node("duplicate", "Button"), node("duplicate", "Button")],
}
assert.equal(
  validateFormSemantics(invalidForm, registry).some(
    (entry) => entry.code === "DUPLICATE_ELEMENT_ID" && entry.blocking
  ),
  true
)

for (const fixtureName of ["minimal.v1.json", "full.v1.json"]) {
  const fixture = JSON.parse(
    fs.readFileSync(
      new URL(`../fixtures/forms/${fixtureName}`, import.meta.url),
      "utf8"
    )
  )
  assert.equal(
    validateMachineSchema(fixture),
    true,
    `${fixtureName}: ${JSON.stringify(validateMachineSchema.errors)}`
  )
}

const normalized = normalizeFormSchema(
  {
    id: "normalization-form",
    name: "Normalization form",
    schemaVersion: 1,
    elements: [
      node("normalized-input", "Textbox", {
        props: { options: [], enabled: false, emptyObject: {} },
      }),
    ],
  },
  registry
)
assert.equal(normalized.settings?.showInNav, false)
assert.equal(normalized.elements[0].state?.visible, true)
assert.equal(normalized.elements[0].style?.controlWidth, 0)
assert.equal(normalized.elements[0].props.enabled, false)
assert.deepEqual(normalized.elements[0].props.options, [])
assert.deepEqual(normalized.elements[0].props.emptyObject, {})

const runtimeFunction = { type: "runtime", key: "legacyHandler" }
const legacy = {
  ...form,
  meta: { legacy: { navigationTitle: false, size: "wide", customFields: { values: [[], null, false] } } },
  settings: {
    objectType: "Device",
    dataSave: { type: "handler", function: runtimeFunction },
    customButtonsGetter: { enabled: true, function: runtimeFunction },
    actionBarAssistantBootstrapper: { enabled: true, function: runtimeFunction },
    actionBarGetButtonsHandler: { enabled: false },
    actionBarEnableOverride: true,
  },
  elements: [node("legacy", "react-wrapper", {
    props: { customParams: ' { "items": [] } ', items: [[], { empty: [] }] },
    meta: { buildType: "any", legacy: { style: { width: "50%", offsetTop: -7 } } },
    value: { source: {
      type: "functionHandler", getter: runtimeFunction, setter: runtimeFunction, initializeOnly: true,
    } },
    dependencies: [{
      id: "enabled", property: "enabled", value: true,
      condition: { source: { type: "function", function: runtimeFunction }, operator: "truthy" },
    }, {
      id: "empty-array", property: "visible", value: true,
      condition: { source: { type: "model", path: "items" }, operator: "eq", operand: { type: "literal", value: [] } },
    }],
    validation: [{
      id: "legacy-rule", name: "Legacy", type: "Legacy",
      config: { kind: "legacy", rule: { method: "range", params: { condition: ">", range: "-10--1", values: [] } } },
    }],
    children: [],
  })],
}
const originalLegacy = structuredClone(legacy)
const migrated = normalizeFormSchema(legacy, registry)
assert.equal(validateMachineSchema(migrated), true, JSON.stringify(validateMachineSchema.errors))
assert.deepEqual(legacy, originalLegacy)
assert.deepEqual(migrated.meta, legacy.meta)
assert.deepEqual(migrated.elements[0].props, legacy.elements[0].props)
assert.deepEqual(migrated.elements[0].validation, legacy.elements[0].validation)
assert.deepEqual(migrated.elements[0].dependencies, legacy.elements[0].dependencies)
assert.equal(Object.hasOwn(migrated.elements[0], "children"), false)
assert.deepEqual(normalizeFormSchema(migrated, registry), migrated)
const legacyDiagnostics = validateFormSemantics(migrated, registry)
assert.equal(legacyDiagnostics.some((entry) => entry.blocking), false)
assert.equal(legacyDiagnostics.some((entry) => entry.code === "LEGACY_VALIDATION"), true)
assert.equal(legacyDiagnostics.some((entry) => entry.code === "UNKNOWN_COMPONENT"), true)

const saved = JSON.parse(JSON.stringify(migrated))
assert.deepEqual(saved, migrated)
for (const mutate of [
  (candidate) => { delete candidate.elements[0].validation[0].config },
  (candidate) => { candidate.elements[0].dependencies[0].condition.operand = { type: "literal", value: true } },
  (candidate) => { candidate.elements[0].dependencies[0].property = "unknown" },
  (candidate) => { delete candidate.settings.customButtonsGetter.function },
]) {
  const invalid = structuredClone(saved)
  mutate(invalid)
  assert.equal(validateMachineSchema(invalid), false)
}
// Normalized payloads must not share mutable objects with the input or defaults.
migrated.elements[0].props.items.push("changed")
migrated.meta.legacy.customFields.values.push("changed")
migrated.settings.dataSave.function.key = "changed"
assert.deepEqual(legacy, originalLegacy)
const emptyStructural = normalizeFormSchema({ ...form, elements: [node("empty", "Textbox", {
  children: [], validation: [], dependencies: [],
})] }, registry)
for (const key of ["children", "validation", "dependencies"]) {
  assert.equal(Object.hasOwn(emptyStructural.elements[0], key), false)
}
assert.equal(validateMachineSchema(emptyStructural), true)
console.log("Domain smoke checks passed")
