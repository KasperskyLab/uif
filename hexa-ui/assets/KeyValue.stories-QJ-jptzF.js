import{H as s,a1 as L,ak as E,w as F,u as B,R as a,b as D,L as H,r as _}from"./iframe-DWiAMwiJ.js";import{w as O}from"./withMeta-B2KnXlKz.js";import{s as z}from"./helpers-BytZKRkB.js";import{B as $}from"./Button-BrJGDNr9.js";import{a as G}from"./Checkbox-AbL1mmdL.js";import{T as o}from"./Textbox-DxSJLgj4.js";import{R as j}from"./Radio-DOH6p_pf.js";import{T as y}from"./Tag-Ddqi07m5.js";import{F as U}from"./FormLabel-3k_y6lu4.js";import{s as k}from"./shouldForwardProp-Cdy-RLhZ.js";import"./preload-helper-C1FmrZbK.js";import"./Grid-BdvuFLTH.js";import"./StatusOkOutline-DhcbM8A-.js";import"./Dropdown-C5JsUnEM.js";import"./KeyCode-DZ_meC3q.js";import"./Overflow-D-4-IOlY.js";import"./focus-T92Dz4Sb.js";import"./type-C6K9kL-Y.js";import"./Loader-BAjDiBRp.js";import"./index-DP9ivqwc.js";import"./Divider-2J9VGgGt.js";import"./ArrowRight-B_N7ww3P.js";import"./v4-BoP187Zn.js";import"./button-1_tA5xjV.js";import"./wave-K91TzWO2.js";import"./AdditionalContent-WBgNJf1T.js";import"./HelpMessage-DLJCj5oS.js";import"./useId-BdUcWATo.js";import"./generateId-BXJELych.js";import"./index-Bqo6raRA.js";import"./index-zHCMoV2c.js";import"./useGlobalStyles-C2pT-V_L.js";import"./useThemedTextbox-Diajtsuj.js";import"./typesHelpers-tpz7Of7L.js";import"./input-B2s7HE4W.js";import"./index-Chjiymov.js";import"./index-8QxItO3f.js";import"./Advertisement-DQfHSyu3.js";import"./ArrowRightMini-gPkOxSsi.js";import"./ArrowDown-BWs0l36g.js";import"./ArrowLeft-Ca8_fh7u.js";import"./Calendar-B8-PfgEK.js";import"./ArrowUp1-4Klx2RsA.js";import"./ExpandUp-CqB9PCAl.js";import"./Server-CqYK749A.js";import"./ArrowForward-BBk6FIb2.js";import"./Upload-DmaAd2fn.js";import"./StatusDangerOutlineSquare-Bzm3Eoq6.js";import"./Help-YhEHVOjk.js";import"./Kira-SE3dw07D.js";import"./Menu2-Cfz9uuSl.js";import"./Menu3-C3jJ5KoC.js";import"./Unpin-Czyy1NW_.js";import"./Placeholder-gcAYBGfm.js";import"./Plus-ByoKRrZB.js";import"./Search1-DApd6p3S.js";import"./Settings-5jwRFjQg.js";import"./SettingsGear-B1jFuWrT.js";import"./StatusDangerSolid1-gO3LFKBN.js";import"./StatusOkSolid-C6wKLFlN.js";import"./ArrowRight-CV4HYDj1.js";import"./StatusWarningOutline-0cyyh55g.js";import"./StatusDangerSolid1-DYC207cf.js";import"./ShieldOkSolid-D3HJcw0N.js";import"./StatusWarningSolid-C36ARmkY.js";import"./ArrowDownSolid-Ba6dQsXh.js";import"./ArrowRightSolid-DIn4kfpv.js";import"./AccountSearch-DdOVR_-H.js";import"./Connection-Bgg7EE29.js";import"./SearchOutlined-CTsJ0sxq.js";import"./useTranslation-bJGh7SA8.js";import"./IconResolver-Ce2cmlNb.js";import"./index-D30NZVvd.js";import"./ResizeInput-BWC4sQmQ.js";import"./index-B8Jci6V6.js";import"./Popover-aWS8RO_S.js";import"./index-BIg4Rq82.js";import"./TextReducer-C-XmrgW7.js";import"./Group-DSKN_3Aa.js";import"./index-BwymO1JM.js";import"./colors-CMfgFrbo.js";import"./Markdown-BpV2EpEd.js";const N=L(),A=s.div`
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
