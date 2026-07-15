import{R as e,L as f,G as g}from"./iframe-4-PRSI1I.js";import{w as I}from"./withDesignControls-DTwO-e1q.js";import{w as J}from"./withMeta-BwOuJ6tr.js";import{r as z}from"./StoryComponents-BWv8uEx9.js";import{T as C}from"./Tag-B3SARhhR.js";import{S as s}from"./StatusCard-DhzU7Xi5.js";import"./preload-helper-Dp1pzeXC.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./DocPageLayout-CZPyVaN8.js";import"./blocks-yA_hxWl_.js";import"./TextReducer-JHIejSuK.js";import"./SubComponents-EaKLKwRG.js";import"./TextWithTruncation-BuGmQSH-.js";import"./Badge-B3_Y1H2J.js";import"./index-C0IykO9V.js";import"./colors-DQ3Fg32p.js";import"./type-Bla-MjNb.js";import"./Divider-Cb8Cmzqg.js";import"./Indicator-D1HJCmfp.js";import"./Grid-CDQgOgKy.js";import"./FormLabel-CoXJxjwh.js";import"./index-B-OY55d_.js";import"./omit-DXgDXInf.js";import"./wave-DF9O9Ycp.js";import"./Group-D8YF7Z5T.js";import"./Button-D2E54Ulj.js";import"./Dropdown-BZXGqesC.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-vUrjsNbx.js";import"./useMergedState-5V6OeSqY.js";import"./focus-C8_PqSex.js";import"./imaskDateOptionsGenerator-CH929rNC.js";import"./index-Chjiymov.js";import"./Loader-CzWCOjAf.js";import"./index-CJ8XlVHE.js";import"./Toggle-Cpn23pdP.js";import"./AdditionalContent-CRQIPW1O.js";import"./HelpMessage-B93eXAoX.js";import"./ArrowRight-AkM1Q671.js";import"./v4-BoP187Zn.js";import"./button-DY_DOuYn.js";import"./ShieldOkSolid-CrpA8lfM.js";import"./StatusOkSolid-BlTeMzOD.js";import"./StatusWarningSolid-BzJvADyF.js";const L={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0,pixsoView:!0},_="StatusCard",H="",R="Status card — компонент, предназначенный для явного отображения статуса сущности или устройства.",W="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=114165%3A168896",Y="https://pixso.net/app/design/Ow2DRZgqJfIkE2mJSKYHVg",h={dod:L,component:_,description:H,usage:R,designLink:W,pixsoView:Y},M=["success","warning","critical","error"],q=["small","medium","large"],K=["default","shield"],m=()=>e.createElement(e.Fragment,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",e.createElement(f,{href:"#"},"Nullam nulla")," purus, aliquam at massa at, imperdiet malesuada neque. Sed mollis ",e.createElement(f,{href:"#"},"accumsan")," quam ac ultrices. Vestibulum rhoncus ante sit amet gravida ornare."),p=()=>e.createElement("span",null,e.createElement(C,{mode:"purple",interactive:!0,outlined:!0},"Custom content"),e.createElement(C,{mode:"violet",interactive:!0,outlined:!0},"More custom content")),u=[{text:"Action 1",onClick:()=>alert("Action 1")},{text:"Action 2",onClick:()=>alert("Action 2")},{text:"Action 3",onClick:()=>alert("Action 3")}],Ie={component:s,title:"Hexa UI Components/Status Card",...I({meta:{argTypes:{mode:{control:"select",options:M},size:{control:"radio",options:q},iconVariant:{control:"radio",options:K},actions:{control:"boolean"},description:{control:"boolean"},children:{control:"boolean"}},args:{title:"Title",image:!0,description:!0,children:!0,mode:"success",size:"medium",iconVariant:"default",testId:"status-card-test-id",klId:"status-card-kl-id"},parameters:{badges:[g.stable,g.reviewedByDesign],docs:{page:J(h)},design:h.pixsoView}}})},a={render:({actions:t,description:n,children:r,...o})=>e.createElement(s,{...o,actions:t?u:void 0,description:n?e.createElement(m,null):void 0},r?e.createElement(p,null):null)},c={render:({actions:t,description:n,children:r,...o})=>z(M.map(i=>({label:i,content:e.createElement(s,{...o,mode:i,actions:t?u:void 0,description:n?e.createElement(m,null):void 0},r?e.createElement(p,null):null)}))),argTypes:{mode:{control:!1}},args:{children:!1}},l={render:({actions:t,description:n,children:r,...o})=>z(q.map(i=>({label:i,content:e.createElement(s,{...o,size:i,actions:t?u:void 0,description:n?e.createElement(m,null):void 0},r?e.createElement(p,null):null)}))),argTypes:{size:{control:!1}},args:{children:!1}},d={render:({actions:t,description:n,children:r,...o})=>e.createElement(s,{...o,actions:t?u:void 0,description:n?e.createElement(m,null):void 0},r?e.createElement(p,null):null),argTypes:{actions:{control:!1}},args:{actions:!0}};var S,D,E;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: ({
    actions,
    description,
    children,
    ...rest
  }) => <StatusCardComponent {...rest} actions={actions ? defaultActions : undefined} description={description ? <DefaultDescription /> : undefined}>
      {children ? <DefaultChildren /> : null}
    </StatusCardComponent>
}`,...(E=(D=a.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var T,b,A;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: ({
    actions,
    description,
    children,
    ...rest
  }) => renderVariants(statusCardModes.map(mode => ({
    label: mode,
    content: <StatusCardComponent {...rest} mode={mode} actions={actions ? defaultActions : undefined} description={description ? <DefaultDescription /> : undefined}>
            {children ? <DefaultChildren /> : null}
          </StatusCardComponent>
  })), true),
  argTypes: {
    mode: {
      control: false
    }
  },
  args: {
    children: false
  }
}`,...(A=(b=c.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var v,k,y;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: ({
    actions,
    description,
    children,
    ...rest
  }) => renderVariants(statusCardSizes.map(size => ({
    label: size,
    content: <StatusCardComponent {...rest} size={size} actions={actions ? defaultActions : undefined} description={description ? <DefaultDescription /> : undefined}>
            {children ? <DefaultChildren /> : null}
          </StatusCardComponent>
  })), true),
  argTypes: {
    size: {
      control: false
    }
  },
  args: {
    children: false
  }
}`,...(y=(k=l.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var V,w,x;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: ({
    actions,
    description,
    children,
    ...rest
  }) => <StatusCardComponent {...rest} actions={actions ? defaultActions : undefined} description={description ? <DefaultDescription /> : undefined}>
      {children ? <DefaultChildren /> : null}
    </StatusCardComponent>,
  argTypes: {
    actions: {
      control: false
    }
  },
  args: {
    actions: true
  }
}`,...(x=(w=d.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const Je=["StatusCard","Mode","Size","WithActions"];export{c as Mode,l as Size,a as StatusCard,d as WithActions,Je as __namedExportsOrder,Ie as default};
