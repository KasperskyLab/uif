import{T as N}from"./Palette-BhMnXOZq.js";import{b as l,R as o,c as x}from"./iframe-WWmuoJVo.js";import{w as T}from"./withMeta-B27OU3Ju.js";import{s as y}from"./helpers-BytZKRkB.js";import{B as t}from"./Button-CLoGc_U5.js";import{N as p,n as E,o as n}from"./Notification-DoNzMFkR.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-dYWuQKl3.js";import"./StatusOkOutline-D_mkWW8_.js";import"./Dropdown-BTc89UD8.js";import"./KeyCode-B_Qxrabv.js";import"./Overflow-BR2bFp5F.js";import"./focus-laSdr2Ty.js";import"./type-CH-zv0M5.js";import"./Loader-C4W-_r7-.js";import"./index-1btpB87J.js";import"./Divider-2duFHEPw.js";import"./ArrowRight-zAcxCSgi.js";import"./v4-BoP187Zn.js";import"./button-CF6IFyfC.js";import"./wave-BKxtHpDI.js";import"./generateId-BXJELych.js";import"./Kira-uuTNgREj.js";const w={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,designLink:!0,pixsoView:!0},S="Notification",O="Компонент Notification используетсс длс отображенис временных глобальных уведомлений. Накладываетсс поверх всей страницы.",A="Чтобы показать уведомление необходимо вызвать функцию `openNotification`. Так же необходимо отрендерить компонент `Notification`. В dom ноду стого компонента будут складыватьсс все уведомленис.",D="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=69315%3A242254",W="https://pixso.net/app/design/OF-jWk_0q7j2S48U-ldnAQ",_={dod:w,component:S,description:O,usage:A,designLink:D,pixsoView:W},eo={title:"Hexa UI Components/Notification",component:p,argTypes:{noIcon:{control:"boolean"},...y(["theme","place"])},args:{description:"Body text",duration:5,klId:"notification-kl-id",noIcon:!1,testId:"notification-test-id"},parameters:{badges:[l.stable,l.reviewedByDesign],docs:{page:T(_)}}},r={render:({noIcon:e,testId:c,...i})=>(o.useEffect(()=>E(),[]),o.createElement(o.Fragment,null,o.createElement(p,{noIcon:e,testId:c}),o.createElement(t,{onClick:()=>n({...i,mode:"success"})},"Success"),o.createElement(t,{onClick:()=>n.error(i)},"Error"),o.createElement(t,{onClick:()=>n.warning(i)},"Warning"),o.createElement(t,{onClick:()=>n.info(i)},"Info"),o.createElement(t,{onClick:()=>n.ai(i)},"AI"))),args:{actionButton:{title:"Go To",onClick:console.log}}},a={render:({id:e,noIcon:c,testId:i,theme:b,...m})=>(o.useEffect(()=>E(),[]),o.createElement(o.Fragment,null,o.createElement(p,{id:e,noIcon:c,testId:i,theme:b}),o.createElement(t,{onClick:()=>n.success({id:e,...m})},"Open the notification box"),o.createElement(t,{onClick:()=>n.error("Some error")},"Open the notification box by api with text"),o.createElement(t,{onClick:()=>n.error({id:e,...m})},"Open the notification box by api with args"))),args:{id:"notification2",actionButton:{title:"Go To",onClick:console.log}}},s={args:{source:x.toast},render:e=>o.createElement(N,{...e})};var u,d,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: ({
    noIcon,
    testId,
    ...args
  }) => {
    React.useEffect(() => notificationDestroy(), []);
    return <>
        <Notification noIcon={noIcon} testId={testId} />
        <Button onClick={() => openNotification({
        ...args,
        mode: 'success'
      })}>
          Success
        </Button>
        <Button onClick={() => openNotification.error(args)}>
          Error
        </Button>
        <Button onClick={() => openNotification.warning(args)}>
          Warning
        </Button>
        <Button onClick={() => openNotification.info(args)}>
          Info
        </Button>
        <Button onClick={() => openNotification.ai(args)}>
          AI
        </Button>
      </>;
  },
  args: {
    actionButton: {
      title: 'Go To',
      onClick: console.log
    }
  }
}`,...(f=(d=r.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var g,k,B;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: ({
    id,
    noIcon,
    testId,
    theme,
    ...args
  }) => {
    React.useEffect(() => notificationDestroy(), []);
    return <>
        <Notification id={id} noIcon={noIcon} testId={testId} theme={theme} />
        <Button onClick={() => openNotification.success({
        id,
        ...args
      })}>
          Open the notification box
        </Button>
        <Button onClick={() => openNotification.error('Some error')}>
          Open the notification box by api with text
        </Button>
        <Button onClick={() => openNotification.error({
        id,
        ...args
      })}>
          Open the notification box by api with args
        </Button>
      </>;
  },
  args: {
    id: 'notification2',
    actionButton: {
      title: 'Go To',
      onClick: console.log
    }
  }
}`,...(B=(k=a.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var C,h,I;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    source: componentColors.toast
  },
  render: args => <ThemedPalette {...args} />
}`,...(I=(h=s.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};const io=["Basic","WithActionButton","ColorTokens"];export{r as Basic,s as ColorTokens,a as WithActionButton,io as __namedExportsOrder,eo as default};
