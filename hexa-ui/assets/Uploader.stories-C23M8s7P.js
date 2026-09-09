import{M as s,R as o,a as f,P as S}from"./iframe-DedYZBTA.js";import{g as x,c as w}from"./propPresentation-BNIeMkgM.js";import{M}from"./meta-DGlVGJ6F.js";import{U as u}from"./Uploader-CYtRJ9rM.js";const P={description:"Максимум 8 файлов, общий размер до 320 МБ",maxCount:8,maxTotalSize:320*1024,size:"medium"},p={size:{control:"inline-radio",options:["small","medium"]},disabled:{control:"boolean"},manual:{control:"boolean"},maxCount:{control:{type:"number",min:1}},maxFileSize:{control:{type:"number",min:0}},maxTotalSize:{control:{type:"number",min:0}},showProgress:{control:"boolean"},truncateFileName:{control:"boolean"},fullHeight:{control:"boolean"},validationStatus:{control:"inline-radio",options:["default","error"]},description:{control:"text"},accept:{control:"text"},directory:{control:"boolean"}},g={argTypes:w(p),args:{...P,customRequest:h},parameters:{actions:{argTypesRegex:"^(on.*|action)"},badges:[s.stable,s.reviewedByDesign],design:M.pixsoView}},T={title:"Hexa UI Components/Uploader",component:u,tags:["!autodocs"],includeStories:["Playground"],excludeStories:["uploaderStorySettings"],...g};function h({file:r,onError:a,onProgress:n,onSuccess:l}){let t=0,i=!1;async function y(){for(;;){if(await new Promise(b=>setTimeout(b,500)),i)return;if(t+=Math.floor(Math.random()*15),t>20&&r.name.includes("error")){a==null||a(new Error("Something goes wrong."));return}else if(t<100)n==null||n({percent:t});else{l==null||l({});return}}}return y(),{abort(){i=!0}}}const e={render:r=>o.createElement("div",{style:{width:"100%"}},o.createElement(f,{closable:!1,mode:"info"},o.createElement(S,null,'Вы можете сэмулировать ошибку загрузки, выбрав файл с подстрокой "error" в имени.')),o.createElement(u,{...r,style:{marginTop:16}})),parameters:{controls:{include:x(p),sort:"none"}}};var d,c,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '100%'
  }}>
      <SectionMessage closable={false} mode="info">
        <P>Вы можете сэмулировать ошибку загрузки, выбрав файл с подстрокой &quot;error&quot; в имени.</P>
      </SectionMessage>

      <Uploader {...args} style={{
      marginTop: 16
    }} />
    </div>,
  parameters: {
    controls: {
      include: getControlsInclude(uploaderPropPresentation),
      sort: 'none'
    }
  }
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const U=["uploaderStorySettings","Playground"],R=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:U,default:T,uploaderStorySettings:g},Symbol.toStringTag,{value:"Module"}));export{R as U,g as u};
