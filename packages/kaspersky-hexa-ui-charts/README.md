# Hexa UI Charts

Пакет дизайн-системы Hexa UI. Виджеты/графики на базе victory. 
https://commerce.nearform.com/open-source/victory/docs/introduction/

## Contribution

### Developing

#### Storybook

```sh
npm install
npm run storybook
```

#### Link as local package

Связываем локальный пакет с проектом (на примере использования yarn). Создаем ссылку на локальный пакет:
```sh
npm run watch
cd dist
yarn link
```

Используем ссылку в проекте:
```sh
yarn add @kaspersky/hexa-ui-charts
yarn link @kaspersky/hexa-ui-charts
```

Теперь любое изменение в проекте @kaspersky/hexa-ui-charts будет видно в проекте, в котором мы установили ссылку.

Чтобы убрать ссылку используйте команду:

```sh
yarn unlink @kaspersky/hexa-ui-charts
````
