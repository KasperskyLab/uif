import{G as a,R as e,H as d}from"./iframe-4-PRSI1I.js";import{w as p}from"./withMeta-BwOuJ6tr.js";import{G as r}from"./Grid-CDQgOgKy.js";import"./preload-helper-Dp1pzeXC.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./DocPageLayout-CZPyVaN8.js";import"./blocks-yA_hxWl_.js";import"./TextReducer-JHIejSuK.js";import"./SubComponents-EaKLKwRG.js";import"./TextWithTruncation-BuGmQSH-.js";import"./Badge-B3_Y1H2J.js";import"./index-C0IykO9V.js";import"./colors-DQ3Fg32p.js";import"./type-Bla-MjNb.js";import"./Divider-Cb8Cmzqg.js";import"./Indicator-D1HJCmfp.js";const c={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0},l="Grid",u="Компонент для композиции элементов на странице с помощью грид системы",g="Расположение элементов на странице и внутри самостоятельных блоков",y={dod:c,component:l,description:u,usage:g},j={title:"Hexa UI Components/Layout/Grid",component:r,argTypes:{cols:{control:{type:"number",min:1}},layoutProperty:{control:"object"}},args:{layoutProperty:{gap:"grouped"},testId:"grid-test-id",klId:"grid-kl-id"},parameters:{badges:[a.stable,a.reviewedByDesign],docs:{page:p(y)}}},b=d.div`
  width: 100%;
  height: 100%;
  border : solid 2px blue;
  text-align: center;
  font-weight: bold;
`,G=Array(28).fill("empty value"),t={render:m=>e.createElement(e.Fragment,null,e.createElement(r,{...m},G.map((f,o)=>e.createElement(r.Item,{key:o},e.createElement(b,null,"Widget #",o+1)))))};var i,s,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: GridProps) => {
    return <>
        <Grid {...args}>
          {defaultArray.map((el, i) => <Grid.Item key={i}>
              <Widget>Widget #{i + 1}</Widget>
            </Grid.Item>)}
        </Grid>
      </>;
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const C=["Basic"];export{t as Basic,C as __namedExportsOrder,j as default};
