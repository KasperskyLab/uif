import{R as e,a as N,P as s,ai as Q,G as f}from"./iframe-4-PRSI1I.js";import{w as U}from"./withDesignControls-DTwO-e1q.js";import{w as W}from"./withMeta-BwOuJ6tr.js";import{r as g}from"./StoryComponents-BWv8uEx9.js";import{B as Y}from"./Button-D2E54Ulj.js";import{D as Z}from"./Dropdown-BZXGqesC.js";import{T as j}from"./Tag-B3SARhhR.js";import{P as n}from"./Placeholder-CeAbCJWA.js";import"./preload-helper-Dp1pzeXC.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./DocPageLayout-CZPyVaN8.js";import"./blocks-yA_hxWl_.js";import"./TextReducer-JHIejSuK.js";import"./SubComponents-EaKLKwRG.js";import"./TextWithTruncation-BuGmQSH-.js";import"./Badge-B3_Y1H2J.js";import"./index-C0IykO9V.js";import"./colors-DQ3Fg32p.js";import"./type-Bla-MjNb.js";import"./Divider-Cb8Cmzqg.js";import"./Indicator-D1HJCmfp.js";import"./Grid-CDQgOgKy.js";import"./FormLabel-CoXJxjwh.js";import"./Loader-CzWCOjAf.js";import"./index-CJ8XlVHE.js";import"./omit-DXgDXInf.js";import"./button-DY_DOuYn.js";import"./wave-DF9O9Ycp.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-vUrjsNbx.js";import"./useMergedState-5V6OeSqY.js";import"./focus-C8_PqSex.js";import"./imaskDateOptionsGenerator-CH929rNC.js";import"./index-Chjiymov.js";import"./Toggle-Cpn23pdP.js";import"./AdditionalContent-CRQIPW1O.js";import"./HelpMessage-B93eXAoX.js";import"./ArrowRight-AkM1Q671.js";import"./v4-BoP187Zn.js";import"./index-B-OY55d_.js";import"./Group-D8YF7Z5T.js";const I=["base","filled"],H=["small","medium"],q=["error403","error404","error503","noData","success","failed","warning","notChecked","noLicense","notFound","configurationExport","preparing","noAccess","deleting","unavailable","onMaintenance"],G={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0,pixsoView:!0},K="Placeholder",O="",$="Используется для временного отображения пустого состояния или заглушки.",X="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=57566%3A246710",ee="https://pixso.net/app/design/PkHTgp7W7hNqL5wjZdffhQ",h={dod:G,component:K,description:O,usage:$,designLink:X,pixsoView:ee},te=["-",...q],Ke={component:n,title:"Hexa UI Components/Placeholder",...U({meta:{argTypes:{actionButtons:{control:"boolean"},actionLinks:{control:"boolean"},mode:{control:"radio",options:I},size:{control:"radio",options:H},image:{control:"select",options:te},textAlign:{control:"radio",options:["left","center","right"]}},args:{image:"noData",title:"Placeholder title",description:"Description",textAlign:"center",mode:"base",size:"medium",testId:"placeholder-test-id",klId:"placeholder-kl-id"},parameters:{badges:[f.stable,f.reviewedByDesign],docs:{page:W(h)},design:h.pixsoView}}})},o=({actionButtons:t,actionLinks:r,image:u,...J})=>({image:u==="-"?void 0:u,actionButtons:t?[{text:"Button",mode:"primary"},{text:"Button"}]:void 0,actionLinks:r?[{text:"Link"}]:void 0,...J}),a={render:t=>e.createElement(n,{...o(t)})},i={render:t=>g(I.map(r=>({label:r,content:e.createElement(n,{...o(t),mode:r})}))),argTypes:{mode:{control:!1}}},l={render:t=>g(H.map(r=>({label:r,content:e.createElement(n,{...o(t),size:r})}))),argTypes:{size:{control:!1}}},c={render:t=>e.createElement(e.Fragment,null,e.createElement(N,{mode:"info",closable:!1},e.createElement(s,null,"Responsible for displaying the illustrated part of the placeholder. The list of available illustrations is preset and limited."),e.createElement(s,null,"Отвечает за отображение иллюстрированной части плейсхолдера. Список доступных иллюстраций преднастроен и ограничен.")),e.createElement(n,{...o(t)}))},ne=[{children:"Variant 1"},{children:"Variant 2"},{children:"Variant 3"}],oe=e.createElement(Y,{iconAfter:e.createElement(Q,null)},"Button"),re=e.createElement(Z,{overlay:ne,trigger:["click"]},oe),p={render:t=>g([{label:"actionButtons",content:e.createElement(n,{...o({...t,actionButtons:!0})})},{label:"actionLinks",content:e.createElement(n,{...o({...t,actionLinks:!0})})},{label:"dropdown",content:e.createElement(n,{...o({...t,actionButtons:!0}),actionButtons:re})}],!0,"medium"),argTypes:{size:{control:!1}}},d={args:{title:"Description Formatting",description:`**bold**
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
}`,...(S=(B=c.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var v,M,z;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(z=(M=p.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var V,C,L;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(_=(R=m.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};const Oe=["Placeholder","Mode","Size","Image","Actions","DescriptionFormatting","DescriptionReactNode"];export{p as Actions,d as DescriptionFormatting,m as DescriptionReactNode,c as Image,i as Mode,a as Placeholder,l as Size,Oe as __namedExportsOrder,Ke as default};
