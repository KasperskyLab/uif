import{b as a,R as e,H as c}from"./iframe-zz6a49H8.js";import{w as m}from"./withMeta-CjSZnBk7.js";import{G as r}from"./Grid-Buhf4xpe.js";import"./preload-helper-C1FmrZbK.js";import"./StatusOkOutline-BBn674wO.js";const l={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0},p="Grid",u="Компонент для композиции элементов на странице с помощью грид системы",g="Расположение элементов на странице и внутри самостоятельных блоков",y={dod:l,component:p,description:u,usage:g},x={title:"Hexa UI Components/Layout/Grid",component:r,argTypes:{cols:{control:{type:"number",min:1}},layoutProperty:{control:"object"}},args:{layoutProperty:{gap:"grouped"},testId:"grid-test-id",klId:"grid-kl-id"},parameters:{badges:[a.stable,a.reviewedByDesign],docs:{page:m(y)}}},b=c.div`
  width: 100%;
  height: 100%;
  border : solid 2px blue;
  text-align: center;
  font-weight: bold;
`,f=Array(28).fill("empty value"),t={render:d=>e.createElement(e.Fragment,null,e.createElement(r,{...d},f.map((G,o)=>e.createElement(r.Item,{key:o},e.createElement(b,null,"Widget #",o+1)))))};var s,n,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: (args: GridProps) => {
    return <>
      <Grid {...args}>
        {defaultArray.map((el, i) => <Grid.Item key={i}>
            <Widget>Widget #{i + 1}</Widget>
          </Grid.Item>)}
      </Grid>
    </>;
  }
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const E=["Basic"];export{t as Basic,E as __namedExportsOrder,x as default};
