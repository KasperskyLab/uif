import{R as e,a as N,P as s,Y as J,M as f}from"./iframe-DedYZBTA.js";import{w as Q}from"./withDesignControls-DTwO-e1q.js";import{w as U}from"./withMeta-DvkmiJqW.js";import{r as g}from"./StoryComponents--bOGC0xv.js";import{B as W}from"./Button-Dn3YNhT7.js";import{D as Z}from"./Dropdown-C8Jtav0F.js";import{T as j}from"./Tag-BKPu3-sD.js";import{P as n}from"./Placeholder-DvzGvHTV.js";import"./preload-helper-Dp1pzeXC.js";import"./DocPageLayout-ZmDutUur.js";import"./blocks-Jd3tffSd.js";import"./index-1habROHK.js";import"./TextReducer-DfctGdJH.js";import"./SubComponents-bNxy1m5y.js";import"./TextWithTruncation-9ZCEnufi.js";import"./ArrowDownSolid-Ckv4ljMR.js";import"./ArrowRightSolid-ZNfuOHa8.js";import"./Divider-CSCFEdMt.js";import"./Badge-MGlXnKsn.js";import"./type-8et6jEI2.js";import"./colors-BWEb3wBP.js";import"./Indicator-Bx9eTEZ-.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./StatusOkOutline-b1x4d3lq.js";import"./Grid-y5IvP__E.js";import"./Markdown-Bfn0KgDg.js";import"./index-_nYjx9Ua.js";import"./FormLabel-a_agw1kt.js";import"./button-D1isEG_A.js";import"./omit-DXgDXInf.js";import"./wave-MdFmrsKf.js";import"./Loader-C9846UWr.js";import"./index-DlVZRnRV.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BEs9Hbuo.js";import"./useMergedState-Rc5-DXZ5.js";import"./focus-CS35CTr_.js";import"./ArrowRight-DWYHjndK.js";import"./Toggle-B_SlzXxU.js";import"./AdditionalContent-nPPwbP5q.js";import"./HelpMessage-BT7POId6.js";import"./v4-BoP187Zn.js";import"./index-D9mMt9l0.js";import"./Group-3Po5iaS9.js";const I=["base","filled"],H=["small","medium"],q=["error403","error404","error503","noData","success","failed","warning","notChecked","noLicense","notFound","configurationExport","preparing","noAccess","deleting","unavailable","onMaintenance"],K={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0,pixsoView:!0},O="Placeholder",$="",G="Используется для временного отображения пустого состояния или заглушки.",X="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=57566%3A246710",ee="https://pixso.net/app/design/PkHTgp7W7hNqL5wjZdffhQ",h={dod:K,component:O,description:$,usage:G,designLink:X,pixsoView:ee},te=["-",...q],Ge={component:n,title:"Hexa UI Components/Placeholder",...Q({meta:{argTypes:{actionButtons:{control:"boolean"},actionLinks:{control:"boolean"},mode:{control:"radio",options:I},size:{control:"radio",options:H},image:{control:"select",options:te},textAlign:{control:"radio",options:["left","center","right"]}},args:{image:"noData",title:"Placeholder title",description:"Description",textAlign:"center",mode:"base",size:"medium",testId:"placeholder-test-id",klId:"placeholder-kl-id"},parameters:{badges:[f.stable,f.reviewedByDesign],docs:{page:U(h)},design:h.pixsoView}}})},o=({actionButtons:t,actionLinks:r,image:u,...Y})=>({image:u==="-"?void 0:u,actionButtons:t?[{text:"Button",mode:"primary"},{text:"Button"}]:void 0,actionLinks:r?[{text:"Link"}]:void 0,...Y}),a={render:t=>e.createElement(n,{...o(t)})},i={render:t=>g(I.map(r=>({label:r,content:e.createElement(n,{...o(t),mode:r})}))),argTypes:{mode:{control:!1}}},l={render:t=>g(H.map(r=>({label:r,content:e.createElement(n,{...o(t),size:r})}))),argTypes:{size:{control:!1}}},c={render:t=>e.createElement(e.Fragment,null,e.createElement(N,{mode:"info",closable:!1},e.createElement(s,null,"Responsible for displaying the illustrated part of the placeholder. The list of available illustrations is preset and limited."),e.createElement(s,null,"Отвечает за отображение иллюстрированной части плейсхолдера. Список доступных иллюстраций преднастроен и ограничен.")),e.createElement(n,{...o(t)}))},ne=[{children:"Variant 1"},{children:"Variant 2"},{children:"Variant 3"}],oe=e.createElement(W,{iconAfter:e.createElement(J,null)},"Button"),re=e.createElement(Z,{overlay:ne,trigger:["click"]},oe),p={render:t=>g([{label:"actionButtons",content:e.createElement(n,{...o({...t,actionButtons:!0})})},{label:"actionLinks",content:e.createElement(n,{...o({...t,actionLinks:!0})})},{label:"dropdown",content:e.createElement(n,{...o({...t,actionButtons:!0}),actionButtons:re})}],!0,"medium"),argTypes:{size:{control:!1}}},d={args:{title:"Description Formatting",description:`**bold**
  _italic_
  ~~strike~~
  \`inline code\`
  [link](https://example.com/)`},render:t=>e.createElement(e.Fragment,null,e.createElement(N,{mode:"info",title:"DescriptionFormatting",closable:!1},e.createElement(s,null,"Для отображение отступов для description используйте \\n"),e.createElement(s,null,e.createElement("code",null,"const description = `Text1\\nText2`")," (1 отступ) ",e.createElement("br",null),e.createElement("code",null,"const description = `Text1\\n\\nText2`")," (2 отступа) ",e.createElement("br",null)),e.createElement(s,null,"Для выделения текста и добавления ссылок - Markdown")),e.createElement("div",{style:{width:420,minHeight:280}},e.createElement(n,{...o(t),textAlign:"left"}))),argTypes:{description:{control:"text"},textAlign:{control:!1},title:{control:!1}}},m={args:{title:"Description React Node",description:e.createElement("div",null,e.createElement(j,null,"Tag"),"Несколько строк ",e.createElement("br",null),"ReactNode")},render:t=>e.createElement(n,{...o(t),textAlign:"left"}),argTypes:{description:{control:!1},textAlign:{control:!1},title:{control:!1}}};var b,x,T;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <PlaceholderComponent {...processArgs(args)} />
}`,...(T=(x=a.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var E,P,k;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => renderVariants(placeholderModes.map(mode => ({
    label: mode,
    content: <PlaceholderComponent {...processArgs(args)} mode={mode} />
  })), true),
  argTypes: {
    mode: {
      control: false
    }
  }
}`,...(k=(P=i.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var A,y,w;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => renderVariants(placeholderSizes.map(size => ({
    label: size,
    content: <PlaceholderComponent {...processArgs(args)} size={size} />
  })), true),
  argTypes: {
    size: {
      control: false
    }
  }
}`,...(w=(y=l.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var D,B,S;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <>
      <SectionMessage mode="info" closable={false}>
        <P>Responsible for displaying the illustrated part of the placeholder. The list of available illustrations is preset and limited.</P>
        <P>Отвечает за отображение иллюстрированной части плейсхолдера. Список доступных иллюстраций преднастроен и ограничен.</P>
      </SectionMessage>
      <PlaceholderComponent {...processArgs(args)} />
    </>
}`,...(S=(B=c.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var M,v,z;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
  }, {
    label: 'dropdown',
    content: <PlaceholderComponent {...processArgs({
      ...args,
      actionButtons: true
    })} actionButtons={dropdown} />
  }], true, 'medium'),
  argTypes: {
    size: {
      control: false
    }
  }
}`,...(z=(v=p.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var V,C,L;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: 'Description Formatting',
    description: '**bold**\\n  _italic_\\n  ~~strike~~\\n  \`inline code\`\\n  [link](https://example.com/)'
  },
  render: args => <>
      <SectionMessage mode="info" title="DescriptionFormatting" closable={false}>
        <P>Для отображение отступов для description используйте \\n</P>
        <P>
          <code>const description = \`Text1\\nText2\`</code> (1 отступ) <br />
          <code>const description = \`Text1\\n\\nText2\`</code> (2 отступа) <br />
        </P>
        <P>Для выделения текста и добавления ссылок - Markdown</P>
      </SectionMessage>
      <div style={{
      width: 420,
      minHeight: 280
    }}>
        <PlaceholderComponent {...processArgs(args)} textAlign="left" />
      </div>
    </>,
  argTypes: {
    description: {
      control: 'text'
    },
    textAlign: {
      control: false
    },
    title: {
      control: false
    }
  }
}`,...(L=(C=d.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var F,R,_;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    title: 'Description React Node',
    description: <div>
        <Tag>Tag</Tag>
        Несколько строк <br />ReactNode
      </div>
  },
  render: args => <PlaceholderComponent {...processArgs(args)} textAlign="left" />,
  argTypes: {
    description: {
      control: false
    },
    textAlign: {
      control: false
    },
    title: {
      control: false
    }
  }
}`,...(_=(R=m.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};const Xe=["Placeholder","Mode","Size","Image","Actions","DescriptionFormatting","DescriptionReactNode"];export{p as Actions,d as DescriptionFormatting,m as DescriptionReactNode,c as Image,i as Mode,a as Placeholder,l as Size,Xe as __namedExportsOrder,Ge as default};
