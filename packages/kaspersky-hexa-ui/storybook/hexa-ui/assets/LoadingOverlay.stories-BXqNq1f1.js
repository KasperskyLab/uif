import{u as y,R as e,aa as g,ay as f,H as h,b as m,P as v}from"./iframe-zz6a49H8.js";import{w as b}from"./withDesignControls-Cqk9De58.js";import{w as x}from"./withMeta-CjSZnBk7.js";import{L as w}from"./Loader-Y1gOuUZF.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-Buhf4xpe.js";import"./StatusOkOutline-BBn674wO.js";import"./index-BNCbYTB0.js";import"./type-CR-gS43P.js";const L=f(),k=h.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${L.background};
  opacity: 90%;
`;function a({className:t,description:s,size:i,theme:r,...o}){const{testAttributes:u}=y(o);return e.createElement(k,{className:g(t,r),...u,...o},e.createElement(w,{size:i,tip:s,theme:r}))}a.defaultProps={size:"medium"};a.__docgenInfo={description:"",methods:[],displayName:"LoadingOverlay",props:{className:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'large'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"}}};const O="LoadingOverlay",C="",T="Компонент накладывается поверх контента и сообщает пользователю о процессе загрузки. Он блокирует взаимодействие с интерфейсом до завершения загрузки",E="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=2749%3A1",I="https://pixso.net/app/design/i8fXxTZRpzYH0MorPCNhzA",d={component:O,description:C,usage:T,designLink:E,pixsoView:I},M={title:"Hexa UI Components/LoadingOverlay",component:a,...b({componentName:"loadingOverlay",meta:{argTypes:{description:{control:"text"},size:{control:{type:"inline-radio"},options:["medium","large"],table:{defaultValue:{summary:"medium"},type:{summary:"medium | large"}}}},args:{description:"help text",testId:"loading-overlay-test-id"},parameters:{badges:[m.stable,m.reviewedByDesign],design:d.pixsoView,docs:{page:x(d)}}}})};function N({children:t,style:s,...i}){return e.createElement("div",{...i,style:{border:"1px solid grey",height:300,padding:20,position:"relative",width:500,...s}},t)}const n={render:t=>e.createElement(N,null,e.createElement(a,{...t}),e.createElement(v,null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")),name:"Loading Overlay"};var p,l,c;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    return <Container>
      <LoadingOverlay {...args} />
      <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</P>
    </Container>;
  },
  name: 'Loading Overlay'
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const R=["Basic"];export{n as Basic,R as __namedExportsOrder,M as default};
