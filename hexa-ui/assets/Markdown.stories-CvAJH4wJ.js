import{b as r}from"./iframe-DlY6n6Um.js";import{w as b}from"./withMeta-B77fl0Sa.js";import{s as f}from"./helpers-BytZKRkB.js";import{M}from"./Markdown-9a6sqH5b.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-mmRcymT9.js";import"./StatusOkOutline-Da-xLIRt.js";import"./shouldForwardProp-Cdy-RLhZ.js";const _={designTokens:!0,useThemedHook:!1,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0},D="Markdown",T="Компонент для отображения маркдаун-разметки",v="",x="",y={dod:_,component:D,description:T,usage:v,designLink:x},o={common:`# Заголовок первого уровня

## Заголовок второго уровня

### Заголовок третьего уровня

#### Заголовок четвертого уровня

##### Заголовок пятого уровня

###### Заголовок шестого уровня

Абзацы создаются с помощью пустой строки.

*Курсив* или _Курсив_

**Жирный** или __Жирный__

***Жирный курсив*** или ___Жирный курсив___

- Неупорядоченный список
  - Подпункт
    - Подподпункт

1. Упорядоченный список
   1. Подпункт
      1. Подподпункт

\`Код в строке\`

\`\`\`javascript
// Код в блоке
function helloWorld() {
    console.log("Hello, world!");
}
\`\`\`

~~Strikethrough~~

[Internal link](#/internal-hash-tag)

[External link](http://www.kaspersky.com)
`,table:`
| id | Vale | Description                                                                                                                                               | Site                                                  |
|----|------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| 1  | Cat  | GFM Markdown table syntax is quite simple. It does not allow row or cell spanning as well as putting multi-line text in a cell.                           | [Lorem ipsum Cat](http://www.kaspersky.com) |
| 2  | Dog  | Adjust text alignment and table borders using the options from the menu and using the toolbar buttons -- formatting is applied to all the selected cells. | [Lorem ipsum Dog](http://www.kaspersky.com) |
`,list:`
- George Washington
* John Adams
+ Thomas Jefferson
`,quote:"> Text that is a quote"},j={title:"Hexa UI Components/Markdown",component:M,argTypes:{...f(["theme","as","forwardedAs"])},args:{testId:"markdown-test-id",klId:"markdown-kl-id"},parameters:{badges:[r.stable,r.missingDesign],docs:{page:b(y)}}},e={args:{value:o.common}},s={args:{value:o.table}},a={args:{value:o.list}},t={args:{value:o.quote}};var n,i,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    value: mdVariants.common
  }
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    value: mdVariants.table
  }
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,u,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: mdVariants.list
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var w,k,h;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    value: mdVariants.quote
  }
}`,...(h=(k=t.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};const B=["Basic","MDTable","MDList","MDQuote"];export{e as Basic,a as MDList,t as MDQuote,s as MDTable,B as __namedExportsOrder,j as default};
