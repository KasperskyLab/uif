import{G as r,R as n,S as B}from"./iframe-4-PRSI1I.js";import{g as S,c as y}from"./propPresentation-CfZ5yVim.js";import{B as t}from"./Button-D2E54Ulj.js";import{N as l,n as k,o as e}from"./Notification-D93o_TGl.js";const A="https://pixso.net/app/design/OF-jWk_0q7j2S48U-ldnAQ",C={pixsoView:A},N={noIcon:!1,description:"Body text",duration:5,withActionButton:!1},u={noIcon:{control:"boolean",description:"Скрыть иконку статуса в контейнере уведомлений"},description:{control:"text",description:"Текст уведомления"},duration:{control:"number",description:"Длительность показа в секундах; 0 — не закрывать автоматически"},withActionButton:{control:"boolean",description:"Показать кнопку действия в уведомлении"}},d={argTypes:y(u),args:{...N,testId:"notification-test-id",klId:"notification-kl-id"},parameters:{badges:[r.stable,r.reviewedByDesign],design:C.pixsoView}},w={title:"Hexa UI Components/Notification",component:l,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["notificationStorySettings"],...d},i={name:"Playground",render:({noIcon:m,description:p,duration:f,withActionButton:g})=>{n.useEffect(()=>k(),[]);const o={description:p,duration:f,actionButton:g?{title:"Go To",onClick:()=>alert("Действие")}:void 0};return n.createElement(n.Fragment,null,n.createElement(l,{noIcon:m}),n.createElement(B,{gap:8},n.createElement(t,{onClick:()=>e({...o,mode:"success"})},"success"),n.createElement(t,{onClick:()=>e.error(o)},"error"),n.createElement(t,{onClick:()=>e.warning(o)},"warning"),n.createElement(t,{onClick:()=>e.info(o)},"info"),n.createElement(t,{onClick:()=>e.ai(o)},"ai")))},parameters:{controls:{include:S(u),sort:"none"}}};var c,a,s;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Playground',
  render: ({
    noIcon,
    description,
    duration,
    withActionButton
  }) => {
    React.useEffect(() => notificationDestroy(), []);
    const commonArgs: NotificationApiParams = {
      description,
      duration,
      actionButton: withActionButton ? {
        title: 'Go To',
        onClick: () => alert('Действие')
      } : undefined
    };
    return <>
        <Notification noIcon={noIcon} />
        <Space gap={8}>
          <Button onClick={() => openNotification({
          ...commonArgs,
          mode: 'success'
        })}>success</Button>
          <Button onClick={() => openNotification.error(commonArgs)}>error</Button>
          <Button onClick={() => openNotification.warning(commonArgs)}>warning</Button>
          <Button onClick={() => openNotification.info(commonArgs)}>info</Button>
          <Button onClick={() => openNotification.ai(commonArgs)}>ai</Button>
        </Space>
      </>;
  },
  parameters: {
    controls: {
      include: getControlsInclude(notificationPropPresentation),
      sort: 'none'
    }
  }
}`,...(s=(a=i.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const E=["notificationStorySettings","Playground"],_=Object.freeze(Object.defineProperty({__proto__:null,Playground:i,__namedExportsOrder:E,default:w,notificationStorySettings:d},Symbol.toStringTag,{value:"Module"}));export{_ as N,d as n};
