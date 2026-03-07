import{H as k,a1 as S,a0 as v,a5 as C,u as x,R as s,b as d}from"./iframe-zz6a49H8.js";import{w as V}from"./withMeta-CjSZnBk7.js";import{r as w}from"./StoryComponents-C4fwEYRs.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-Buhf4xpe.js";import"./StatusOkOutline-BBn674wO.js";import"./Divider-DNO5OI2y.js";import"./FormLabel-BcyH9HgS.js";import"./Markdown-Dd69RiPx.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Popover-B2Trw9mJ.js";import"./Tag-DxDPN1QL.js";import"./TextReducer-CXi1K97e.js";import"./StatusDangerSolid1-CvSXOBl-.js";import"./Group-DXZR9jfV.js";import"./index-C1mxiEMc.js";import"./type-CR-gS43P.js";import"./colors-Pn4JZYjC.js";import"./wave-CA5Glh0A.js";const o=S(),T=k.div``,E=v`
  height: ${o("height")};
  border-radius: ${o("height")};
  width: ${({$width:e})=>e?`${e}px`:"100%"};
  background: ${e=>e.$background?`${o("background")(e)}`:"transparent"};

  ${T} {
    background: ${o("color")};
    height: ${o("height")};
    border-radius: ${o("height")};
    width: ${({$trackWidth:e})=>e}%;
    transition: width 1s;
    transition-timing-function: ease-in-out;
 }
`,M=e=>C(e,{componentName:"progressBar",defaultValues:{mode:"critical",size:"medium"}}),q=k.div.withConfig({shouldForwardProp:e=>!["cssConfig"].includes(e)})`${E}`,i=e=>{const r=M(e),p=x(r);return s.createElement(_,{...p})},_=({track:e=0,background:r=!0,width:p,testAttributes:P,...$})=>s.createElement(q,{$background:r,$width:p,$trackWidth:e>=0&&e<=100?e:0,...P,...$},s.createElement(T,null));i.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{track:{required:!1,tsType:{name:"number"},description:"Size of active progress bar (from 0% to 100%)"},background:{required:!1,tsType:{name:"boolean"},description:"Whether background is visible"},width:{required:!1,tsType:{name:"number"},description:"Width in pixels"},theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"},mode:{required:!0,tsType:{name:"progressBarModes[number]",raw:"typeof progressBarModes[number]"},description:"Color mode"},size:{required:!1,tsType:{name:"progressBarSizes[number]",raw:"typeof progressBarSizes[number]"},description:"Size"}}};const H={designTokens:!0,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!1,apiTable:!1,storybook:!0,pixsoView:!0},I="ProgressBar",W="",A="Progress bar — компонент, предназначенный для отображения прогресса выполнения какого-либо процесса или для графического отображения количественного показателя.",D="https://pixso.net/app/design/_JQDYkYJW0yUZVsKeoSybw?icon_type=1&page-id=30239%3A103014",R="https://pixso.net/app/design/z5T--auQwugkuiBVOERlzA",m={dod:H,component:I,description:W,usage:A,designLink:D,pixsoView:R},z=["critical","warning","success","accent","neutralBold","neutralSubtle","orange","grass","violet","purple","coldgray"],F=["small","medium","large"],ie={component:i,title:"Hexa UI Components/Progress Bar",argTypes:{mode:{control:"select",options:z}},args:{track:50,background:!0,mode:"critical",size:"medium",testId:"progress-bar-test-id",klId:"progress-bar-kl-id"},parameters:{badges:[d.stable,d.reviewedByDesign],docs:{page:V(m)},design:m.pixsoView}},t={},a={render:e=>w(z.map(r=>({label:r,content:s.createElement("div",{style:{margin:"auto"}},s.createElement(i,{...e,mode:r,width:200,track:50}))})),!0,"medium"),argTypes:{mode:{control:!1}}},n={render:e=>w(F.map(r=>({label:r,content:s.createElement("div",{style:{margin:"auto"}},s.createElement(i,{...e,size:r,width:200,track:50}))})),!0),argTypes:{size:{control:!1}}};var c,u,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var l,h,b;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: props => renderVariants(progressBarModes.map(mode => ({
    label: mode,
    content: <div style={{
      margin: 'auto'
    }}>
            <ProgressBarComponent {...props} mode={mode} width={200} track={50} />
          </div>
  })), true, 'medium'),
  argTypes: {
    mode: {
      control: false
    }
  }
}`,...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,y,B;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: props => renderVariants(progressBarSizes.map(size => ({
    label: size,
    content: <div style={{
      margin: 'auto'
    }}>
            <ProgressBarComponent {...props} size={size} width={200} track={50} />
          </div>
  })), true),
  argTypes: {
    size: {
      control: false
    }
  }
}`,...(B=(y=n.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const pe=["ProgressBar","Mode","Size"];export{a as Mode,t as ProgressBar,n as Size,pe as __namedExportsOrder,ie as default};
