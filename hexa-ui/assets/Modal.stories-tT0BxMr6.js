import{M as s,r as u,R as t}from"./iframe-DedYZBTA.js";import{g as p,b as g}from"./propPresentation-BNIeMkgM.js";import{B as b}from"./Button-Dn3YNhT7.js";import{M as C}from"./meta-CQrxV1va.js";import{M as n}from"./Modal-BClO_RqC.js";const f=["default","warning","error","success","ai"],S=["small","large"],y={mode:"default",size:"small",centered:!0,closable:!0,header:"Modal dialog",content:"This is placeholder text for the modal content."},i={mode:{control:"select",options:f},size:{control:"select",options:S},centered:{control:"boolean"},closable:{control:"boolean"},header:{control:"text"},content:{control:"text"}},c={argTypes:g(n,i),args:{...y,testId:"modal-test-id",klId:"modal-kl-id"},parameters:{badges:[s.stable,s.reviewedByDesign],design:C.pixsoView}},M={title:"Hexa UI Components/Modal",component:n,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["modalStorySettings"],...c},e={name:"Playground",parameters:{controls:{include:p(i),sort:"none"}},render:d=>{const[m,o]=u.useState(!1);return t.createElement(t.Fragment,null,t.createElement(b,{onClick:()=>o(!0)},"Open Modal"),t.createElement(n,{...d,visible:m,actions:{FIRST_ACTION:{text:"OK",onClick:()=>o(!1)},SECOND_ACTION:{text:"Cancel",mode:"secondary",onClick:()=>o(!1)}},onCancel:()=>o(!1)}))}};var a,r,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Playground',
  parameters: {
    controls: {
      include: getControlsInclude(modalPropPresentation),
      sort: 'none'
    }
  },
  render: args => {
    const [visible, setVisible] = useState(false);
    return <>
        <Button onClick={() => setVisible(true)}>
          Open Modal
        </Button>
        <ModalComponent {...args} visible={visible} actions={{
        FIRST_ACTION: {
          text: 'OK',
          onClick: () => setVisible(false)
        },
        SECOND_ACTION: {
          text: 'Cancel',
          mode: 'secondary',
          onClick: () => setVisible(false)
        }
      }} onCancel={() => setVisible(false)} />
      </>;
  }
}`,...(l=(r=e.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const x=["modalStorySettings","Playground"],k=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:x,default:M,modalStorySettings:c},Symbol.toStringTag,{value:"Module"}));export{k as M};
