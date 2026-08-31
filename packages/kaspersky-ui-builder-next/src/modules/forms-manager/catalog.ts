import type { FormSchema, SchemaNode } from "../schema-model/form-schema.ts"
import { defaultElementState, defaultElementStyle, defaultFormSettings } from "../schema-builder/serialization.ts"

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

