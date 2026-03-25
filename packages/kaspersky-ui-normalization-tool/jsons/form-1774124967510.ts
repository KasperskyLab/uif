export default {
  name: "Демо: сетка и таблица",
  id: "form-1774124967517",
  elements: [
    {
      "type": "grid",
      "id": "grid-1774124980818-7sslddg",
      "rows": 2,
      "cols": 2,
      "children": [
        {
          "type": "text",
          "id": "text-1774124983057-g88o6vy",
          "configHook": () => import("./handlers/text.config-hook.ts")
        },
        {
          "type": "input",
          "id": "demo-button-text-source",
          "text": "Текст кнопки (state)",
          "value": "Значение из формы",
          "placeholder": "Меняется подпись кнопки"
        },
        null,
        {
          "type": "button",
          "id": "button-1774124998740-k5kscyr",
          "configHook": () => import("./handlers/button.config-hook.ts")
        }
      ]
    },
    {
      "type": "table",
      "id": "table-demo-main",
      "rows": 2,
      "cols": 3,
      "children": [
        null,
        {
          "type": "text",
          "id": "text-table-1",
          "configHook": () => import("./handlers/text.config-hook.ts")
        },
        {
          "type": "button",
          "id": "button-table-1",
          "configHook": () => import("./handlers/button.config-hook.ts")
        },
        {
          "type": "text",
          "id": "text-table-plain"
        },
        {
          "type": "button",
          "id": "button-table-2",
          "configHook": () => import("./handlers/button.config-hook.ts")
        },
        {
          "type": "text",
          "id": "text-table-2",
          "configHook": () => import("./handlers/text.config-hook.ts")
        }
      ],
      "emptyText": "Нет данных в ячейках",
      "rowMode": "standard",
      "columnVerticalAlign": "middle",
      "toolbar": {
        "left": [
          {
            "type": "button",
            "key": "add",
            "label": "Добавить"
          },
          {
            "type": "divider",
            "key": "d1"
          },
          {
            "type": "button",
            "key": "refresh",
            "label": "Обновить"
          }
        ],
        "right": [
          {
            "type": "button",
            "key": "export",
            "label": "Экспорт"
          }
        ]
      },
      "configHook": () => import("./handlers/table.config-hook.ts")
    }
  ]
}
