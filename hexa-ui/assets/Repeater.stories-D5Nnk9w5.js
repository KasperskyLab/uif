import{R as n,b as o,H as l}from"./iframe-DlY6n6Um.js";import{w as u}from"./withMeta-B77fl0Sa.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-mmRcymT9.js";import"./StatusOkOutline-Da-xLIRt.js";const s=({component:e,data:t})=>n.createElement(n.Fragment,null,Array.isArray(t)&&typeof e=="function"&&t.map((a,y)=>e({key:y,...a})));s.__docgenInfo={description:"",methods:[],displayName:"Repeater",props:{component:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"},description:""}}};const g="Повторяет компонент несколько раз.",N={description:g},R=l.div`
  width: 700px;
`,A={title:"Unsorted/Repeater",component:s,parameters:{badges:[o.dev,o.missingDesign],docs:{page:u(N)}}},f=({name:e,className:t,key:a})=>n.createElement(d,{key:a},n.createElement("a",{className:t},e)),E=({name:e,className:t,key:a})=>n.createElement(d,{key:a},n.createElement("span",{className:t},e)),d=l.p`
  .cls1 {
    font-size: 30px
  }
  .cls2 {
    font-size: 10px
  }
`,c={Link:f,Text:E},r={render:({componentName:e,...t})=>n.createElement(R,null,n.createElement(s,{...t,component:c[e]})),args:{data:[{name:"item 1",className:"cls1"},{name:"item 2",className:"cls2"}]},argTypes:{componentName:{options:Object.keys(c),control:{type:"select"}}}};var p,m,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: ({
    componentName,
    ...rest
  }: RepeaterPropsStory) => <Wrapper>
      <Repeater {...rest} component={components[componentName]} />
    </Wrapper>,
  args: {
    data: [{
      name: 'item 1',
      className: 'cls1'
    }, {
      name: 'item 2',
      className: 'cls2'
    }]
  },
  argTypes: {
    componentName: {
      options: Object.keys(components),
      control: {
        type: 'select'
      }
    }
  }
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const _=["Basic"];export{r as Basic,_ as __namedExportsOrder,A as default};
