import assert from "node:assert/strict"
import fs from "node:fs"
import Ajv2020 from "ajv/dist/2020.js"
import { createEditorStore } from "../src/editor/editor-store.ts"
import { validateFormSemantics } from "../src/domain/semantic-validator.ts"
import { normalizeFormSchema } from "../src/domain/serialization.ts"

const registry = JSON.parse(
  fs.readFileSync(
    new URL("../src/generated/component-registry.json", import.meta.url),
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
assert.equal(Object.hasOwn(normalized.elements[0].props, "options"), false)
assert.deepEqual(normalized.elements[0].props.emptyObject, {})

console.log("Domain smoke checks passed")
