import{R as e,T as n,S as g,an as C,ao as b,ah as v,v as k,ai as w,ap as A,b as l,aq as s,ar as I,x as D}from"./iframe-zz6a49H8.js";import{w as S}from"./withMeta-CjSZnBk7.js";import{s as u,a as T}from"./helpers-BytZKRkB.js";import{M as c}from"./meta-C8fT5Hsm.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-Buhf4xpe.js";import"./StatusOkOutline-BBn674wO.js";const h=()=>e.createElement(e.Fragment,null,e.createElement(n,{type:"H4"},"Заголовки"),e.createElement(n,{type:"H6"},"Стили используются как в заголовках страниц, так и в мелких компонентах, таких как карточки и алерты"),e.createElement(g,{gap:16,direction:"vertical"},e.createElement(C,null,"Header/H1"),e.createElement(b,null,"Header/H2"),e.createElement(v,null,"Header/H3"),e.createElement(k,null,"Header/H4"),e.createElement(w,null,"Header/H5"),e.createElement(A,null,"Header/H6")));h.__docgenInfo={description:"",methods:[],displayName:"HeaderDocs"};const x=["H1","H2","H3","H4","H5","H6"],f={options:Object.keys(D.text).filter(t=>t!=="link"),control:{type:"select"}},E={options:x,control:{type:"select"},...T("H1")},V={title:"Hexa UI Components/Typography/Heading",component:s,argTypes:{storyText:{control:{type:"text"}},color:{...f},themedColor:{options:Object.keys(I["text-icons-elements"]),control:{type:"select"},...T("primary")},type:{...E},...u(["theme","as","forwardedAs","ref"])},args:{storyText:"I'm header",color:void 0,themedColor:"primary",testId:"heading-test-id",klId:"heading-kl-id"},parameters:{badges:[l.stable,l.reviewedByDesign],docs:{page:S(c,h)},design:c.pixsoView},decorators:[(t,r)=>e.createElement(g,{gap:16,direction:"vertical"},e.createElement(t,{...r}))]},o={render:t=>e.createElement(s,{color:t.color,type:t.type,...t},t.storyText," ",t.type," ",t.color),argTypes:{storyText:{control:{type:"text"}},color:{...f},type:{...E},...u(["themedColor"])}},a={render:t=>e.createElement("div",null,x.map(r=>e.createElement(s,{key:r,color:t.color,type:r,...t},"I'm header with type ",r)))};var p,d,i;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args: HeadingProps) => <Heading color={args.color} type={args.type} {...args}>
      {args.storyText} {args.type} {args.color}
    </Heading>,
  argTypes: {
    storyText: {
      control: {
        type: 'text'
      }
    },
    color: {
      ...defaultATColor
    },
    type: {
      ...defaultATType
    },
    ...sbHideControls(['themedColor'])
  }
}`,...(i=(d=o.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,y,H;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: HeadingProps) => <div>
      {defaultTypes.map(type => <Heading key={type} color={args.color} type={type} {...args}>
          I&apos;m header with type {type}
        </Heading>)}
    </div>
}`,...(H=(y=a.parameters)==null?void 0:y.docs)==null?void 0:H.source}}};const q=["Basic","AllTypes"];export{a as AllTypes,o as Basic,q as __namedExportsOrder,V as default};
