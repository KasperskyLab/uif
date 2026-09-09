import{M as i,R as e,H as d}from"./iframe-DedYZBTA.js";import{w as p}from"./withMeta-DvkmiJqW.js";import{G as r}from"./Grid-y5IvP__E.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-ZmDutUur.js";import"./blocks-Jd3tffSd.js";import"./index-1habROHK.js";import"./TextReducer-DfctGdJH.js";import"./SubComponents-bNxy1m5y.js";import"./TextWithTruncation-9ZCEnufi.js";import"./ArrowDownSolid-Ckv4ljMR.js";import"./ArrowRightSolid-ZNfuOHa8.js";import"./Divider-CSCFEdMt.js";import"./Badge-MGlXnKsn.js";import"./type-8et6jEI2.js";import"./colors-BWEb3wBP.js";import"./Indicator-Bx9eTEZ-.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./StatusOkOutline-b1x4d3lq.js";import"./Markdown-Bfn0KgDg.js";import"./index-_nYjx9Ua.js";const c={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,inBuilder:"Используется под названием «Grid»"},l="Grid",u="Компонент для композиции элементов на странице с помощью грид системы",g="Расположение элементов на странице и внутри самостоятельных блоков",y={dod:c,component:l,description:u,usage:g},O={title:"Hexa UI Components/Layout/Grid",component:r,argTypes:{cols:{control:{type:"number",min:1}},layoutProperty:{control:"object"}},args:{layoutProperty:{gap:"grouped"},testId:"grid-test-id",klId:"grid-kl-id"},parameters:{badges:[i.stable,i.reviewedByDesign],docs:{page:p(y)}}},b=d.div`
  width: 100%;
  height: 100%;
  border : solid 2px blue;
  text-align: center;
  font-weight: bold;
`,G=Array(28).fill("empty value"),t={render:m=>e.createElement(e.Fragment,null,e.createElement(r,{...m},G.map((f,o)=>e.createElement(r.Item,{key:o},e.createElement(b,null,"Widget #",o+1)))))};var a,s,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: GridProps) => {
    return <>
        <Grid {...args}>
          {defaultArray.map((el, i) => <Grid.Item key={i}>
              <Widget>Widget #{i + 1}</Widget>
            </Grid.Item>)}
        </Grid>
      </>;
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const S=["Basic"];export{t as Basic,S as __namedExportsOrder,O as default};
