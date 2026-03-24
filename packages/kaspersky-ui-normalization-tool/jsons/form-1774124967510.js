export default {
  name: "",
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
          "defaultValue": "Hello world!",
          "text": "Текст"
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
    }
  ]
}
