import{R as e,T as r,S as a,b as c,$ as n,x as E}from"./iframe-DlY6n6Um.js";import{w as M}from"./withMeta-B77fl0Sa.js";import{s as g}from"./helpers-BytZKRkB.js";import{M as p}from"./meta-C8fT5Hsm.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-mmRcymT9.js";import"./StatusOkOutline-Da-xLIRt.js";const B=()=>e.createElement(e.Fragment,null,e.createElement(r,{type:"H4"},"Body Text"),e.createElement(r,{type:"H5"},"Основной текст"),e.createElement(r,{type:"H6"},"Стили используются в некрупных элементах, таких как основной текст и заголовки"),e.createElement(a,{gap:16,direction:"vertical",align:"flex-start"},e.createElement(r,{type:"BTR2"},"Body Text/P2 Regular"),e.createElement(r,{type:"BTR3"},"Body Text/P3 Regular"),e.createElement(r,{type:"BTR4"},"Body Text/P4 Regular"),e.createElement(r,{type:"BTR5"},"Body Text/P5 Regular")),e.createElement(a,{gap:16,direction:"vertical",align:"flex-start"},e.createElement(r,{type:"BTM2"},"Body Text/P2 Medium"),e.createElement(r,{type:"BTM3"},"Body Text/P3 Medium"),e.createElement(r,{type:"BTM4"},"Body Text/P4 Medium"),e.createElement(r,{type:"BTM5"},"Body Text/P5 Medium")),e.createElement(r,{type:"H5"},"Mono текст"),e.createElement(r,{type:"H6"},"Как текст в компоненте input password, code viewer"),e.createElement(a,{gap:16,direction:"vertical",align:"flex-start"},e.createElement(r,{type:"MTR3"},"Mono Text/P3 Regular"),e.createElement(r,{type:"MTR4"},"Mono Text/P4 Regular")));B.__docgenInfo={description:"",methods:[],displayName:"TextDocs"};const u=["BTR2","BTR3","BTR4","BTR5","BTM2","BTM3","BTM4","BTM5","MTR3","MTR4"],R={options:Object.keys(E.text).filter(t=>t!=="link"),control:{type:"select"}},f={options:u,control:{type:"select"}},w={title:"Hexa UI Components/Typography/Text",component:n,argTypes:{storyText:{control:{type:"text"}},color:{...R},type:{...f},...g(["theme","as","forwardedAs","ref"])},args:{storyText:"I'm text",color:void 0,testId:"text-test-id",klId:"text-kl-id"},parameters:{badges:[c.stable,c.reviewedByDesign],docs:{page:M(p,B)},design:p.pixsoView},decorators:[(t,o)=>e.createElement(a,{gap:16,direction:"vertical"},e.createElement(t,{...o}))]},l={render:t=>e.createElement(n,{color:t.color,type:t.type,...t},[t.storyText,t.type&&`type - ${t.type}`,t.themedColor&&`themedColor - ${t.themedColor}`,t.color&&`color - ${t.color}`].filter(Boolean).join(", ")),args:{type:"BTR3",storyText:"I'm text"},argTypes:{...g(["themedColor"])}},s={render:t=>e.createElement(a,{gap:20,direction:"vertical",align:"start"},u.map(o=>e.createElement(n,{key:o,color:t.color,type:o,...t},t.storyText,",",o&&` type - ${o}`)))};var m,y,d;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: TextProps) => <Text color={args.color} type={args.type} {...args}>
      {[args.storyText, args.type && \`type - \${args.type}\`, args.themedColor && \`themedColor - \${args.themedColor}\`, args.color && \`color - \${args.color}\`].filter(Boolean).join(', ')}
    </Text>,
  args: {
    type: 'BTR3',
    storyText: 'I\\'m text'
  },
  argTypes: {
    ...sbHideControls(['themedColor'])
  }
}`,...(d=(y=l.parameters)==null?void 0:y.docs)==null?void 0:d.source}}};var i,T,x;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: TextProps) => <Space gap={20} direction="vertical" align="start">
      {defaultTypes.map(type => <Text key={type} color={args.color} type={type} {...args}>
          {args.storyText},
          {type && \` type - \${type}\`}
        </Text>)}
    </Space>
}`,...(x=(T=s.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const I=["Basic","AllTypes"];export{s as AllTypes,l as Basic,I as __namedExportsOrder,w as default};
