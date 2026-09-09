import{M as r}from"./iframe-DedYZBTA.js";import{w as b}from"./withMeta-DvkmiJqW.js";import{s as f}from"./helpers-BytZKRkB.js";import{Markdown as M}from"./Markdown-Bfn0KgDg.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-ZmDutUur.js";import"./blocks-Jd3tffSd.js";import"./index-1habROHK.js";import"./TextReducer-DfctGdJH.js";import"./SubComponents-bNxy1m5y.js";import"./TextWithTruncation-9ZCEnufi.js";import"./ArrowDownSolid-Ckv4ljMR.js";import"./ArrowRightSolid-ZNfuOHa8.js";import"./Divider-CSCFEdMt.js";import"./Badge-MGlXnKsn.js";import"./type-8et6jEI2.js";import"./colors-BWEb3wBP.js";import"./Indicator-Bx9eTEZ-.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./StatusOkOutline-b1x4d3lq.js";import"./Grid-y5IvP__E.js";import"./index-_nYjx9Ua.js";const _={designTokens:!0,useThemedHook:!1,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0,inBuilder:"Используется под названием «Markdown»"},D="Markdown",T="Компонент для отображения маркдаун-разметки",v="",x="",y={dod:_,component:D,description:T,usage:v,designLink:x},a={common:`# Заголовок первого уровня

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
`,quote:"> Text that is a quote"},U={title:"Other/Markdown",component:M,argTypes:{...f(["theme","as","forwardedAs"])},args:{testId:"markdown-test-id",klId:"markdown-kl-id"},parameters:{badges:[r.stable,r.missingDesign],docs:{page:b(y)}}},e={args:{value:a.common}},t={args:{value:a.table}},o={args:{value:a.list}},s={args:{value:a.quote}};var n,i,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    value: mdVariants.common
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var l,p,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    value: mdVariants.table
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    value: mdVariants.list
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var w,k,h;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    value: mdVariants.quote
  }
}`,...(h=(k=s.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};const X=["Basic","MDTable","MDList","MDQuote"];export{e as Basic,o as MDList,s as MDQuote,t as MDTable,X as __namedExportsOrder,U as default};
