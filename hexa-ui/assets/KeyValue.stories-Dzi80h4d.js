import{H as s,a1 as L,ak as E,w as F,u as B,R as a,b as D,L as H,r as _}from"./iframe-DlY6n6Um.js";import{w as O}from"./withMeta-B77fl0Sa.js";import{s as z}from"./helpers-BytZKRkB.js";import{B as $}from"./Button-CgqUalcg.js";import{a as G}from"./Checkbox-lkNIXc0L.js";import{T as o}from"./Textbox-BkTLkszj.js";import{R as j}from"./Radio-Br6rqD2P.js";import{T as y}from"./Tag-Cd3srqW9.js";import{F as U}from"./FormLabel-CKFB06hk.js";import{s as k}from"./shouldForwardProp-Cdy-RLhZ.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-mmRcymT9.js";import"./StatusOkOutline-Da-xLIRt.js";import"./Dropdown-WtVSJYv5.js";import"./KeyCode-B45xthVk.js";import"./Overflow-wC_Ss__i.js";import"./focus-oe9vj3c6.js";import"./type-Cyafuwrq.js";import"./Loader-BjmnRfIR.js";import"./index-CY9qp4ym.js";import"./Divider-BzNbSw2T.js";import"./ArrowRight-Db3Ij3DE.js";import"./v4-BoP187Zn.js";import"./button-CjggZd63.js";import"./wave-CgaPvuQn.js";import"./AdditionalContent-D1SVuAXm.js";import"./HelpMessage-CfUPOaMw.js";import"./useId-4A31Gjf8.js";import"./generateId-BXJELych.js";import"./index-DGKnGyLh.js";import"./index-BG3JBUTS.js";import"./useGlobalStyles-DCO_4ztA.js";import"./useThemedTextbox-Bmu1H12-.js";import"./typesHelpers-tpz7Of7L.js";import"./input-mXow91b_.js";import"./index-Chjiymov.js";import"./index-BbitUTuv.js";import"./Advertisement-3jfyM1bF.js";import"./ArrowRightMini-DrTKhp28.js";import"./ArrowDown-ChGYdLEl.js";import"./ArrowLeft-5XogGUFt.js";import"./Calendar-C5pFsewt.js";import"./ArrowUp1-BNZdUcIS.js";import"./ExpandUp-DEeB5DsT.js";import"./Server-YIrZe1tb.js";import"./ArrowForward-B1fQsntD.js";import"./Upload-C_N43VAI.js";import"./StatusDangerOutlineSquare-BLZQfahy.js";import"./Help-CdI7ei6S.js";import"./Kira-YbMWu56z.js";import"./Menu2-BBlUvDgt.js";import"./Menu3-B3FR9-ED.js";import"./Unpin-COYC_WLU.js";import"./Placeholder-DRo8POZa.js";import"./Plus-dack3gHw.js";import"./Search1-BZ2VNUxD.js";import"./Settings-KwZGj1kH.js";import"./SettingsGear-9Bvyt4bA.js";import"./StatusDangerSolid1-Db-Ba1Fd.js";import"./StatusOkSolid-IKyijn-S.js";import"./ArrowRight-D3WqXJji.js";import"./StatusWarningOutline-Dy0bueyW.js";import"./StatusDangerSolid1-Dpju5bSe.js";import"./ShieldOkSolid-D-1MqZXL.js";import"./StatusWarningSolid-C-5m-AdQ.js";import"./ArrowDownSolid-BE7bAzAG.js";import"./ArrowRightSolid-BZEyC8P2.js";import"./AccountSearch-Dofz33BR.js";import"./Connection-DgyNCf1D.js";import"./SearchOutlined-CqDp9aMg.js";import"./useTranslation-CGS-Ff88.js";import"./IconResolver-k9Mxg6Vr.js";import"./index-i_d8OMNH.js";import"./ResizeInput-DtUKzJyg.js";import"./index-iGBsBt8Q.js";import"./Popover-D8ys_ap7.js";import"./index-C_Mi6W7z.js";import"./TextReducer-mTsc_fVR.js";import"./Group-C50_emtp.js";import"./index-q41KpsCE.js";import"./colors-Cs2HIvKh.js";import"./Markdown-9a6sqH5b.js";const N=L(),A=s.div`
  ${({gridLayout:e})=>{if(e){let r="display: grid;";return e.cols&&(r+=`grid-template-columns: ${e.cols.join(" ")};`),e.rows&&(r+=`grid-template-rows: ${e.rows.join(" ")};`),r}return"display: flex;"}}
  ${({labelPosition:e})=>{switch(e){case"right":return{flexDirection:"row-reverse"};case"top":return{flexDirection:"column"};case"aside":return{flexDirection:"row"};case"none":return{flexDirection:"row"};default:return{flexDirection:"row"}}}}
`,J=s.div.withConfig({shouldForwardProp:k})`
  display: flex;
  flex-direction: column;

  ${({padding:e})=>`
    gap: ${e}px;
  `}
  
  ${e=>e.gridLayout&&"width: 100%;"}
`,Q=s.div.withConfig({shouldForwardProp:k})`
  display: flex;
  align-items: start;
  color: ${N("enabled.keyColor")};
  
  ${e=>!(e.labelPosition==="top"||e.gridLayout)&&"min-width: 235px; max-width: 235px;"}

  ${e=>e.labelPosition==="right"&&`margin-left: ${E[10]}px;`}

  ${e=>`
    margin-right: ${e.keysMargin}px;
    margin-top: ${e.verticalOffset}px;
  `}
`,X=s.div.withConfig({shouldForwardProp:k})`
  display: flex;
  align-items: start;
  white-space: pre-wrap;
  color: ${N("enabled.valueColor")};
`,Y=e=>F(e,{componentName:"keyValue",defaultValues:{}}),d=e=>{const r=Y(e),i=B(r);return a.createElement(Z,{...i})},Z=e=>{const{data:r,padding:i=E[8],wrapperClasses:g={},cssConfig:f,labelPosition:v="aside",gridLayout:c,keysMargin:P=16,keyRequired:W=!1,keyMode:S="secondary",keyTooltip:M,testAttributes:l}=e,I=t=>a.isValidElement(t)&&((t==null?void 0:t.type)===$||(t==null?void 0:t.type)===o||(t==null?void 0:t.type)===o.Textarea)?6:0;return a.createElement(J,{...l,padding:i,gridLayout:c},r==null?void 0:r.map((t,h)=>{const p=`${l==null?void 0:l["kl-id"]}-${t.key??h}`;return a.createElement(A,{key:t.key??h,labelPosition:v,gridLayout:c},a.createElement(Q,{"kl-id":`kv-key-${p}`,"data-testid":`kv-key-${p}`,"data-role":"kv-key",gridLayout:!!c,className:g.keyClassName,cssConfig:f,labelPosition:v,keysMargin:P,verticalOffset:I(t.pairValue)},a.createElement(U,{required:W,mode:S,tooltip:M},t.pairKey)),a.createElement(X,{"kl-id":`kv-value-${p}`,"data-testid":`kv-value-${p}`,"data-role":"kv-value",className:g.valueClassName,cssConfig:f},t.pairValue instanceof String?a.createElement("span",null,t.pairValue):t.pairValue))}))};d.__docgenInfo={description:"@deprecated Use FieldSet instead. It has FieldSet.KeyValueMapper for quick replacement",methods:[],displayName:"KeyValue",props:{gridLayout:{required:!1,tsType:{name:"GridProps['layout']",raw:"GridProps['layout']"},description:"Set key-value view as grid and apply config from gridLayout"},keyRequired:{required:!1,tsType:{name:"boolean"},description:"Is key label required"},keyTooltip:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Key label tooltip"},keyMode:{required:!1,tsType:{name:"FormLabelMode"},description:"Key label mode"},labelPosition:{required:!1,tsType:{name:"LabelPosition"},description:"Key label position"},data:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  pairKey: React.ReactNode,
  pairValue: React.ReactNode,
  key?: React.Key
}`,signature:{properties:[{key:"pairKey",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"pairValue",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"key",value:{name:"ReactKey",raw:"React.Key",required:!1}}]}}],raw:"KeyValuePair[]"},description:"Key-value pairs (use unique `key` prop in `KeyValuePair` to avoid rerendering of `data` list)"},rowHeight:{required:!1,tsType:{name:"number"},description:"Row height"},padding:{required:!1,tsType:{name:"number"},description:"Padding between key-value pairs"},keysMargin:{required:!1,tsType:{name:"number"},description:"Right margin of key"},wrapperClasses:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  keyClassName?: string,
  valueClassName?: string
}`,signature:{properties:[{key:"keyClassName",value:{name:"string",required:!1}},{key:"valueClassName",value:{name:"string",required:!1}}]}},description:"Wrapper classes"},theme:{required:!1,tsType:{name:"Theme"},description:"Custom theme"}}};const ee={designTokens:!0,useThemedHook:!0,unitTests:!0,screenshotTests:!1,migration:!0,apiTable:!0,storybook:!0,pixsoView:!0},ae="KeyValue",te="Используется для структурирования информации.",re="Компонент KeyValue. Применим для нередактируемых данных и форм с полями ввода.",ie={dod:ee,component:ae,usage:te,description:re},oe=[{pairKey:"Input",pairValue:a.createElement(o,{placeholder:"Text"})},{pairKey:"Textarea",pairValue:a.createElement(o.Textarea,{placeholder:"Text area"})},{pairKey:"Button",pairValue:a.createElement($,{size:"medium",mode:"primary"},"Button")},{pairKey:"Checkbox Group",pairValue:a.createElement(G,{options:[{label:"One",value:"1"},{label:"Two",value:"2"},{label:"Three",value:"3"}],direction:"vertical"})},{pairKey:"Radio",pairValue:a.createElement(j,{options:[{label:"One",value:"1"},{label:"Two",value:"2"},{label:"Three",value:"3"}],vertical:!0})},{pairKey:"Tag Group",pairValue:a.createElement("div",null,a.createElement(y,{mode:"red",size:"small"},"Tag"),a.createElement(y,{mode:"marengo",size:"small"},"Tag"),a.createElement(y,{mode:"marina",size:"small"},"Tag"))},{pairKey:"Link",pairValue:a.createElement(H,{href:"#",target:"_blank",size:"medium"},"Link")}],Ma={title:"Deprecated/KeyValue",component:d,argTypes:{keyTooltip:{control:{type:"text"}},...z(["theme","data","rowHeight","padding","wrapperClasses"])},args:{labelPosition:"aside",keyRequired:!1,keyMode:"secondary",data:oe,keysMargin:16,testId:"key-value-test-id",klId:"key-value-kl-id"},parameters:{badges:[D.deprecated],deprecatedLink:"Hexa UI Components/FieldSet",docs:{page:O(ie)}}},n={},se=s.div`
  ${({keyWidth:e,valueWidth:r})=>`
    .kl-custom-key {
      min-width: ${e}px;
    }
      
    .kl-custom-value {
      width: ${r}px;
    }
  `}
`,m={render:({keyWidth:e,valueWidth:r,...i})=>a.createElement(se,{keyWidth:e,valueWidth:r},a.createElement(d,{...i,wrapperClasses:{keyClassName:"kl-custom-key",valueClassName:"kl-custom-value"}})),args:{keyWidth:200,valueWidth:400}},u={render:()=>{const[e,r]=_.useState("");return a.createElement(d,{data:[{key:"unique_key",pairKey:"Input",pairValue:a.createElement(o,{value:e,onChange:i=>{r(i)}})}]})}};var V,w,T;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:"{}",...(T=(w=n.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var K,b,C;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: ({
    keyWidth,
    valueWidth,
    ...rest
  }: KeyValueCustomClassesProps) => {
    return <KeyValueWrapper keyWidth={keyWidth} valueWidth={valueWidth}>
        <KeyValue {...rest} wrapperClasses={{
        keyClassName: 'kl-custom-key',
        valueClassName: 'kl-custom-value'
      }} />
      </KeyValueWrapper>;
  },
  args: {
    keyWidth: 200,
    valueWidth: 400
  }
}`,...(C=(b=m.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var x,R,q;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <KeyValue data={[{
      key: 'unique_key',
      pairKey: 'Input',
      pairValue: <Textbox value={value} onChange={(newValue: string) => {
        setValue(newValue);
      }} />
    }]} />;
  }
}`,...(q=(R=u.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};const Ia=["Basic","CustomClasses","KeyValueWithUpdateValueState"];export{n as Basic,m as CustomClasses,u as KeyValueWithUpdateValueState,Ia as __namedExportsOrder,Ma as default};
