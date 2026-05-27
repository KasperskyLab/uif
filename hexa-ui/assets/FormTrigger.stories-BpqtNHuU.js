import{ak as a,H as n,T as y,u as b,r as e,L as w,b as d}from"./iframe-ko-fN4O0.js";import{w as F}from"./withMeta-C8MsJeBT.js";import{B as R}from"./Button-BAMDHgQb.js";import{s as B}from"./shouldForwardProp-Cdy-RLhZ.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-DmjuEKWz.js";import"./StatusOkOutline-Cn4WVFef.js";import"./Loader-iMImGdt_.js";import"./index-DcNvhb6C.js";import"./type-D7k2Xvr8.js";import"./button-B01puASn.js";import"./wave-mrEb6LZp.js";import"./Dropdown-CWozQ77e.js";import"./KeyCode-BDHZ8Wip.js";import"./Overflow-BIuCMRyD.js";import"./focus-Ch4Yfw29.js";import"./Divider-Cb94-KaG.js";import"./ArrowRight-DwyJImV1.js";import"./v4-BoP187Zn.js";const L=n.div.withConfig({shouldForwardProp:B})`
  margin-bottom: ${a[16]}px;
  display: flex;
  flex-direction: row;
  gap: ${a[8]}px;
  max-width: 710px;
`,v=n.div`
  flex: 0 0 calc(235px - ${a[8]}px);
`,l=n(y)`
  display: block;
  margin-top: 2px;
  
  span + & {
    margin-top: -1px;
  }
`;var r=(t=>(t.Link="link",t.Button="button",t))(r||{});const o=({actionText:t,description:i,onClick:p,title:m,type:f=r.Link,disabled:c,...k})=>{const E=f===r.Link,{testAttributes:x,...h}=b(k);return e.createElement(L,{...h,...x},E?e.createElement("div",null,e.createElement(w,{disabled:c,onClick:p},m),e.createElement(l,{type:"BTR4",themedColor:"secondary-solid"},i)):e.createElement(e.Fragment,null,e.createElement(v,null,e.createElement(y,{type:"BTM3",themedColor:"secondary2-solid"},m)),e.createElement("div",null,e.createElement(R,{mode:"secondary",onClick:p,disabled:c},t),e.createElement(l,{type:"BTR4",themedColor:"secondary-solid"},i))))};o.__docgenInfo={description:"",methods:[],displayName:"FormTrigger",props:{actionText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Button text"},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Description"},onClick:{required:!0,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLElement>",elements:[{name:"HTMLElement"}]},description:"Called after clicking"},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Title"},type:{required:!1,tsType:{name:"FormTriggerType"},description:"Link or Button type",defaultValue:{value:"FormTriggerType.Link",computed:!0}},role:{required:!1,tsType:{name:"string"},description:"HTML role"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable component"}}};const N={designTokens:!0,useThemedHook:!1,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0},H="FormTrigger",C="",M="",S="",q={dod:N,component:H,description:C,usage:M,designLink:S},ee={title:"Hexa UI Components/Form trigger",component:o,args:{title:"Kaspersky Security Network",description:"Kaspersky Security Network (KSN) is a cloud-based knowledge base that contains information about the reputation of files, web resources, and software. The use of data from Kaspersky Security Network ensures faster responses of the application to new threats, improves the performance of protection components, and reduces the likelihood of false positives.",actionText:"Open form",onClick:()=>alert("Form opened"),testId:"form-trigger-test-id",klId:"form-trigger-kl-id"},parameters:{badges:[d.stable,d.missingDesign],docs:{page:F(q)}}},s={render:t=>e.createElement("div",null,e.createElement(o,{...t,type:r.Button}),e.createElement(o,{...t,type:r.Button}),e.createElement(o,{...t,type:r.Link}))};var u,g,T;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args: FormTriggerProps) => <div>
      <FormTrigger {...args} type={FormTriggerType.Button} />
      <FormTrigger {...args} type={FormTriggerType.Button} />
      <FormTrigger {...args} type={FormTriggerType.Link} />
    </div>
}`,...(T=(g=s.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const te=["Basic"];export{s as Basic,te as __namedExportsOrder,ee as default};
