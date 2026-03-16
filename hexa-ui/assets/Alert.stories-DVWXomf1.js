import{a1 as Q,H as y,S as T,a2 as U,a0 as Y,a3 as J,at as K,w as Z,u as G,r as X,R as e,j as ee,L as A,A as te,aj as ne,aO as oe,aP as re,aQ as ae,b,T as i}from"./iframe-DlY6n6Um.js";import{w as se}from"./withDesignControls-DgiSFIU-.js";import{w as ie}from"./withMeta-B77fl0Sa.js";import{r as h}from"./StoryComponents-5Ni7_M0_.js";import{T as le}from"./Tag-Cd3srqW9.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-mmRcymT9.js";import"./StatusOkOutline-Da-xLIRt.js";import"./Divider-BzNbSw2T.js";import"./FormLabel-CKFB06hk.js";import"./Markdown-9a6sqH5b.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-D8ys_ap7.js";import"./TextReducer-mTsc_fVR.js";import"./StatusDangerSolid1-Db-Ba1Fd.js";import"./Group-C50_emtp.js";import"./index-q41KpsCE.js";import"./type-Cyafuwrq.js";import"./colors-Cs2HIvKh.js";import"./wave-CgaPvuQn.js";const ce={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!0,storybook:!0,pixsoView:!0},de="Alert",me="",pe="Alert — это компонент, который используется для отображения важных уведомлений или сообщений, относящихся ко всему продукту. Основное назначение компонента — привлечение внимания пользователя к критически важной информации, требующей его действия или осведомлённости. Эти уведомления отображаются на всех экранах продукта, располагаясь вверху контентной области страницы, чтобы быть видимыми независимо от того, на какой странице находится пользователь. Alert не пропадает с течением времени.",ue="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=43876%3A184415",ge="https://pixso.net/app/design/R8Tue1E22g_9u5mWBIWvlQ",C={dod:ce,component:de,description:me,usage:pe,designLink:ue,pixsoView:ge},s=Q(),Te=y.span`
  min-width: 16px;
  height: 20px;
  display: flex;
  align-items: center;

  svg {
    color: ${s("icon")};
  }
`,E=y(T)`
  ${({direction:n})=>n==="horizontal"?{display:"grid",gridTemplateColumns:"1fr auto",flexDirection:"row",flexWrap:"nowrap",alignItems:"start",justifyContent:"space-between",width:"100%"}:{width:"100%"}}
`,fe={fontStretch:"normal",margin:0,...U(J.BTR3)},ye=Y`
  display: flex;
  gap: 8px;
  padding: 12px 16px 11px 16px;
  align-items: start;
  position: relative;
  border-bottom: 1px solid ${s("border")};
  background: ${s("background")};
  color: ${s("color")};
  width: ${({width:n})=>n?`${n}px`:"100%"};
  ${fe};
  
  .alert-action-separator:after {
    display: block;
    content: '';
    width: 1px;
    height: 20px;
    background: ${s("separator")};
  }
`,l=["info","success","warning","error"],he=n=>{let t=n.mode;return l.includes(t)||(K("mode",t),t="info"),Z({...n,mode:t},{componentName:"alert",defaultValues:{mode:"info"},propsToDrill:["mode"]})},xe={error:()=>e.createElement(ae,{"data-testid":"alert-error-icon","data-component-id":"icon-error"}),warning:()=>e.createElement(re,{"data-testid":"alert-warning-icon","data-component-id":"icon-warning"}),success:()=>e.createElement(oe,{"data-testid":"alert-success-icon","data-component-id":"icon-success"}),info:()=>e.createElement(ne,{"data-testid":"alert-info-icon","data-component-id":"icon-info"})},Ae=y.div.withConfig({shouldForwardProp:n=>!["cssConfig","componentId"].includes(n)})`
  ${ye}
`,a=n=>{const{actions:t,children:o,closable:r,cssConfig:x,mode:V,onClose:f,testAttributes:q,...W}=G(he(n)),[z,L]=X.useState(!0),F=xe[V],j=()=>{f==null||f(),L(!1)};return z?e.createElement(Ae,{cssConfig:x,...q,...W},e.createElement(Te,{cssConfig:x},e.createElement(F,null)),e.createElement(E,{gap:8,direction:"horizontal",align:"flex-start"},e.createElement(E,{gap:24,direction:"horizontal",align:"flex-start"},o,t&&e.createElement(T,{gap:8,className:ee(r&&"alert-action-separator"),direction:"horizontal"},t.FIRST_ACTION&&e.createElement(A,{...t.FIRST_ACTION},t.FIRST_ACTION.text),t.SECOND_ACTION&&e.createElement(A,{...t.SECOND_ACTION},t.SECOND_ACTION.text))),r&&e.createElement(te,{size:"large",onClick:()=>j()}))):null};a.displayName="Alert";a.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{theme:{required:!1,tsType:{name:"ThemeKey"},description:"Custom theme"},mode:{required:!0,tsType:{name:"alertModes[number]",raw:"typeof alertModes[number]"},description:"Color mode"},closable:{required:!1,tsType:{name:"boolean"},description:"If alert can be closed"},actions:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"unknown"},{name:"signature",type:"object",raw:`{
  text?: string,
  onClick?: MouseEventHandler<HTMLElement> | undefined
}`,signature:{properties:[{key:"text",value:{name:"string",required:!1}},{key:"onClick",value:{name:"union",raw:"MouseEventHandler<HTMLElement> | undefined",elements:[{name:"MouseEventHandler",elements:[{name:"HTMLElement"}],raw:"MouseEventHandler<HTMLElement>"},{name:"undefined"}],required:!1}}]}}],raw:"Record<keyof typeof ActionsMap, ActionType>"}],raw:"Partial<Record<keyof typeof ActionsMap, ActionType>>"},description:`Actions set
Use the actions prop to let users act on the content in the section message.`},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback on close"},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Width in pixels"}}};const We={title:"Hexa UI Components/Alert",component:a,...se({componentName:"alert",meta:{argTypes:{mode:{control:"select",options:l},actions:{control:"boolean"},width:{control:{type:"number",min:0,max:2e3,step:1}}},args:{mode:"info",closable:!1,children:"You can swap «children»",testId:"alert-test-id",klId:"alert-kl-id"},parameters:{badges:[b.stable,b.reviewedByDesign],docs:{page:ie(C)},design:C.pixsoView}}})},c={FIRST_ACTION:{text:"Action",onClick:()=>console.log("Action1")}},d={render:({actions:n,...t})=>e.createElement(a,{...t,actions:n?c:void 0})},m={render:({children:n,actions:t,...o})=>h(l.map(r=>({label:r,content:e.createElement(a,{...o,mode:r,actions:t?c:void 0},e.createElement(i,{type:"BTR3"},n))})),!0),argTypes:{mode:{control:!1}}},p={render:({children:n,...t})=>h(l.map(o=>({label:o,content:e.createElement(a,{...t,mode:o,actions:c},e.createElement(i,{type:"BTR3"},n))})),!0),argTypes:{mode:{control:!1},actions:{control:!1}}},u={render:({children:n,actions:t,...o})=>h(l.map(r=>({label:r,content:e.createElement(a,{...o,mode:r,actions:t?c:void 0,closable:!0},e.createElement(i,{type:"BTR3"},n))})),!0),argTypes:{mode:{control:!1},closable:{control:!1}}},g={render:({actions:n,...t})=>e.createElement(a,{...t,actions:n?c:void 0}),args:{children:e.createElement(T,{gap:8},e.createElement(T,null,e.createElement(le,{outlined:!0},"Tag"),e.createElement(i,{type:"H6"},"Custom title")),e.createElement(i,null,"With multiple lines"))}};var w,S,k;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: ({
    actions,
    ...rest
  }: StoryAlertProps) => <AlertComponent {...rest} actions={actions ? actionsButtons : undefined} />
}`,...(k=(S=d.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var I,M,v;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: ({
    children,
    actions,
    ...rest
  }: StoryAlertProps) => renderVariants(alertModes.map(mode => ({
    label: mode,
    content: <AlertComponent {...rest} mode={mode} actions={actions ? actionsButtons : undefined}>
            <Text type="BTR3">{children}</Text>
          </AlertComponent>
  })), true),
  argTypes: {
    mode: {
      control: false
    }
  }
}`,...(v=(M=m.parameters)==null?void 0:M.docs)==null?void 0:v.source}}};var B,R,N;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: ({
    children,
    ...rest
  }: StoryAlertProps) => renderVariants(alertModes.map(mode => ({
    label: mode,
    content: <AlertComponent {...rest} mode={mode} actions={actionsButtons}>
            <Text type="BTR3">{children}</Text>
          </AlertComponent>
  })), true),
  argTypes: {
    mode: {
      control: false
    },
    actions: {
      control: false
    }
  }
}`,...(N=(R=p.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var H,_,$;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: ({
    children,
    actions,
    ...rest
  }: StoryAlertProps) => renderVariants(alertModes.map(mode => ({
    label: mode,
    content: <AlertComponent {...rest} mode={mode} actions={actions ? actionsButtons : undefined} closable>
            <Text type="BTR3">{children}</Text>
          </AlertComponent>
  })), true),
  argTypes: {
    mode: {
      control: false
    },
    closable: {
      control: false
    }
  }
}`,...($=(_=u.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var O,P,D;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: ({
    actions,
    ...rest
  }: StoryAlertProps) => <AlertComponent {...rest} actions={actions ? actionsButtons : undefined} />,
  args: {
    children: <Space gap={8}>
        <Space>
          <Tag outlined>Tag</Tag>
          <Text type="H6">Custom title</Text>
        </Space>
        <Text>With multiple lines</Text>
      </Space>
  }
}`,...(D=(P=g.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};const ze=["Alert","Mode","Action","Closable","Children"];export{p as Action,d as Alert,g as Children,u as Closable,m as Mode,ze as __namedExportsOrder,We as default};
