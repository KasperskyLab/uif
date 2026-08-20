import registryData from "../generated/component-registry.json"
import type { ComponentRegistry } from "../domain/component-registry.ts"
import type { FormSchema, SchemaNode } from "../domain/form-schema.ts"
import {
  defaultElementState,
  defaultElementStyle,
  defaultFormSettings,
} from "../domain/serialization.ts"
import { createEditorStore } from "./editor-store.ts"

export const registry = registryData as unknown as ComponentRegistry

const node = (
  id: string,
  type: string,
  props: SchemaNode["props"] = {},
  children?: SchemaNode[]
): SchemaNode => ({
  id,
  type,
  props,
  meta: { buildType: "any" },
  state: { ...defaultElementState },
  style: { ...defaultElementStyle },
  ...(children?.length ? { children } : {}),
})

export const formCatalog: FormSchema[] = [
  {
    id: "user-profile",
    name: "Профиль пользователя",
    schemaVersion: 1,
    settings: {
      ...defaultFormSettings,
      title: "Профиль пользователя",
      showInNav: true,
      author: "Form team",
    },
    elements: [
      node("profile-grid", "Grid", {}, [
        node("user-name", "Textbox", { value: "", showClearButton: true }),
        node("user-role", "Select", { options: [], allowClear: true }),
        node("is-active", "Toggle"),
      ]),
      node("save-button", "Button", { text: "Сохранить", mode: "primary" }),
    ],
  },
  {
    id: "network-settings",
    name: "Сетевые настройки",
    schemaVersion: 1,
    settings: {
      ...defaultFormSettings,
      title: "Сетевые настройки",
      displayType: "details",
    },
    elements: [
      node("network-accordion", "Accordion", { withBorder: true }, [
        node(
          "address-panel",
          "AccordionPanel",
          { title: "Адрес", key: "address" },
          [
            node("host", "Textbox", { value: "", showClearButton: true }),
            node("port", "Textbox", { value: "443" }),
          ]
        ),
      ]),
    ],
  },
  {
    id: "empty-form",
    name: "Новая форма",
    schemaVersion: 1,
    settings: { ...defaultFormSettings, title: "Новая форма" },
    elements: [],
  },
]

export const editorStore = createEditorStore(registry)
editorStore.openForm(formCatalog[0])
editorStore.openForm(formCatalog[1])
editorStore.activateForm(formCatalog[0].id)

let elementSequence = 1
let formSequence = 1

export function createForm(): FormSchema {
  let id = `new-form-${formSequence++}`
  while (formCatalog.some((form) => form.id === id))
    id = `new-form-${formSequence++}`
  const form: FormSchema = {
    id,
    name: "Новая форма",
    schemaVersion: 1,
    settings: { ...defaultFormSettings, title: "Новая форма" },
    elements: [],
  }
  formCatalog.push(form)
  return form
}

export function createElement(componentType: string): SchemaNode {
  const component = registry.components.find(
    (candidate) => candidate.type === componentType
  )
  if (!component)
    throw new Error(`Component '${componentType}' is absent from registry`)
  const idBase = componentType.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
  return {
    id: `${idBase}-${elementSequence++}`,
    type: component.type,
    props: structuredClone(component.defaultProps),
    meta: structuredClone(component.defaultMeta),
    state: { ...defaultElementState },
    style: { ...defaultElementStyle },
  }
}
