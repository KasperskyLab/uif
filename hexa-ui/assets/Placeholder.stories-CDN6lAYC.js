import{R as e,b as u,t as D,P as d}from"./iframe-WWmuoJVo.js";import{w as R}from"./withDesignControls-4bH3LeSg.js";import{w as J}from"./withMeta-B27OU3Ju.js";import{r as m}from"./StoryComponents-_lDaatyR.js";import{P as o}from"./Placeholder-BPSrpanS.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-dYWuQKl3.js";import"./StatusOkOutline-D_mkWW8_.js";import"./Divider-2duFHEPw.js";import"./FormLabel-C5Hc4K2h.js";import"./Markdown-BGmAiIQ8.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-DwSAzC79.js";import"./Tag-CZpHHsSN.js";import"./TextReducer-9CK0p8eL.js";import"./StatusDangerSolid1-rZJr9a0y.js";import"./Group-DGlPc1vl.js";import"./index-toe1S0SQ.js";import"./type-CH-zv0M5.js";import"./colors-CeinHcp_.js";import"./wave-BKxtHpDI.js";import"./Button-CLoGc_U5.js";import"./Dropdown-BTc89UD8.js";import"./KeyCode-B_Qxrabv.js";import"./Overflow-BR2bFp5F.js";import"./focus-laSdr2Ty.js";import"./Loader-C4W-_r7-.js";import"./index-1btpB87J.js";import"./ArrowRight-zAcxCSgi.js";import"./v4-BoP187Zn.js";import"./button-CF6IFyfC.js";const I=["base","filled"],_=["small","medium"],N=["error403","error404","error503","noData","success","failed","warning","notChecked"],Q={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0,pixsoView:!0},U="Placeholder",W="",Y="Используется для временного отображения пустого состояния или заглушки.",Z="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=57566%3A246710",j="https://pixso.net/app/design/PkHTgp7W7hNqL5wjZdffhQ",h={dod:Q,component:U,description:W,usage:Y,designLink:Z,pixsoView:j},q=["-",...N],Be={component:o,title:"Hexa UI Components/Placeholder",...R({componentName:"placeholder",meta:{argTypes:{actionButtons:{control:"boolean"},actionLinks:{control:"boolean"},mode:{control:"radio",options:I},size:{control:"radio",options:_},image:{control:"select",options:q},textAlign:{control:"radio",options:["left","center","right"]}},args:{image:"noData",title:"Placeholder title",description:"Description",textAlign:"center",mode:"base",size:"medium",testId:"placeholder-test-id",klId:"placeholder-kl-id"},parameters:{badges:[u.stable,u.reviewedByDesign],docs:{page:J(h)},design:h.pixsoView}}})},n=({actionButtons:t,actionLinks:r,image:g,...H})=>({image:g==="-"?void 0:g,actionButtons:t?[{text:"Button",mode:"primary"},{text:"Button"}]:void 0,actionLinks:r?[{text:"Link"}]:void 0,...H}),s={render:t=>e.createElement(o,{...n(t)})},a={render:t=>m(I.map(r=>({label:r,content:e.createElement(o,{...n(t),mode:r})})),!0),argTypes:{mode:{control:!1}}},i={render:t=>m(_.map(r=>({label:r,content:e.createElement(o,{...n(t),size:r})})),!0),argTypes:{size:{control:!1}}},c={render:t=>e.createElement(e.Fragment,null,e.createElement(D,{mode:"info",closable:!1},e.createElement(d,null,"Responsible for displaying the illustrated part of the placeholder. The list of available illustrations is preset and limited."),e.createElement(d,null,"Отвечает за отображение иллюстрированной части плейсхолдера. Список доступных иллюстраций преднастроен и ограничен.")),e.createElement(o,{...n(t)}))},l={render:t=>m([{label:"actionButtons",content:e.createElement(o,{...n({...t,actionButtons:!0})})},{label:"actionLinks",content:e.createElement(o,{...n({...t,actionLinks:!0})})}],!0,"medium"),argTypes:{size:{control:!1}}},p={render:t=>e.createElement("div",{style:{width:"100%"}},e.createElement("h2",null,"Для отображение отступов для description используйте:"),e.createElement(D,{mode:"info",closable:!0},e.createElement(d,null,e.createElement("code",null,"const description = `Text1\\nText2`")," (1 отступ) ",e.createElement("br",null),e.createElement("code",null,"const description = `Text1\\n\\nText2`")," (2 отступа) ",e.createElement("br",null))),e.createElement(o,{...n(t),description:`Text1
Text2`})),argTypes:{description:{control:!1}}};var f,b,T;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <PlaceholderComponent {...processArgs(args)} />
}`,...(T=(b=s.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var x,P,E;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => renderVariants(placeholderModes.map(mode => ({
    label: mode,
    content: <PlaceholderComponent {...processArgs(args)} mode={mode} />
  })), true),
  argTypes: {
    mode: {
      control: false
    }
  }
}`,...(E=(P=a.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var y,k,S;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => renderVariants(placeholderSizes.map(size => ({
    label: size,
    content: <PlaceholderComponent {...processArgs(args)} size={size} />
  })), true),
  argTypes: {
    size: {
      control: false
    }
  }
}`,...(S=(k=i.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var z,A,w;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <>
      <SectionMessage mode="info" closable={false}>
        <P>Responsible for displaying the illustrated part of the placeholder. The list of available illustrations is preset and limited.</P>
        <P>Отвечает за отображение иллюстрированной части плейсхолдера. Список доступных иллюстраций преднастроен и ограничен.</P>
      </SectionMessage>
      <PlaceholderComponent {...processArgs(args)} />
    </>
}`,...(w=(A=c.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var B,L,M;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => renderVariants([{
    label: 'actionButtons',
    content: <PlaceholderComponent {...processArgs({
      ...args,
      actionButtons: true
    })} />
  }, {
    label: 'actionLinks',
    content: <PlaceholderComponent {...processArgs({
      ...args,
      actionLinks: true
    })} />
  }], true, 'medium'),
  argTypes: {
    size: {
      control: false
    }
  }
}`,...(M=(L=l.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var C,V,v;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '100%'
  }}>
      <h2>Для отображение отступов для description используйте:</h2>
      <SectionMessage mode="info" closable={true}>
        <P>
          <code>const description = \`Text1\\nText2\`</code> (1 отступ) <br />
          <code>const description = \`Text1\\n\\nText2\`</code> (2 отступа) <br />
        </P>
      </SectionMessage>
      <PlaceholderComponent {...processArgs(args)} description={'Text1\\nText2'} />
    </div>,
  argTypes: {
    description: {
      control: false
    }
  }
}`,...(v=(V=p.parameters)==null?void 0:V.docs)==null?void 0:v.source}}};const Le=["Placeholder","Mode","Size","Image","Actions","Description"];export{l as Actions,p as Description,c as Image,a as Mode,s as Placeholder,i as Size,Le as __namedExportsOrder,Be as default};
