import{r as l,R as n,N as H}from"./iframe-DedYZBTA.js";import{S as M}from"./StatesMatrix-CFxsS3T3.js";import{T as _}from"./Textbox-B-hgsSTM.js";import{R as o}from"./Radio-Cpvj7bye.js";import{r as A}from"./Radio.stories-Bc38D2J4.js";import"./preload-helper-Dp1pzeXC.js";import"./i18n-GMt4C5be.js";import"./useGlobalStyles-DdWamh97.js";import"./InputMasked-Bbhb0bxg.js";import"./input-CAqmA_rE.js";import"./index-Chjiymov.js";import"./useThemedTextbox-CnXfBV1i.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-Su5-ronh.js";import"./InputNumber-ZzYxxSm4.js";import"./index-DTSNSACu.js";import"./omit-DXgDXInf.js";import"./type-8et6jEI2.js";import"./SearchOutlined-DnINVVX9.js";import"./button-D1isEG_A.js";import"./wave-MdFmrsKf.js";import"./useMergedState-Rc5-DXZ5.js";import"./InputPassword-C-5Li4PE.js";import"./Button-Dn3YNhT7.js";import"./Dropdown-C8Jtav0F.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BEs9Hbuo.js";import"./focus-CS35CTr_.js";import"./ArrowRight-DWYHjndK.js";import"./Toggle-B_SlzXxU.js";import"./AdditionalContent-nPPwbP5q.js";import"./HelpMessage-BT7POId6.js";import"./FormLabel-a_agw1kt.js";import"./Tag-BKPu3-sD.js";import"./TextReducer-DfctGdJH.js";import"./index-D9mMt9l0.js";import"./colors-BWEb3wBP.js";import"./Group-3Po5iaS9.js";import"./Divider-CSCFEdMt.js";import"./Loader-C9846UWr.js";import"./index-DlVZRnRV.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-OcpnRZV_.js";import"./useTranslation-od-Kmf1k.js";import"./IconResolver-DW8XVFKA.js";import"./Placeholder-DXWNW80D.js";import"./useId-D-iZuP_C.js";import"./generateId-BXJELych.js";import"./index-Cgmls7nb.js";import"./index-B_L1GtX7.js";import"./propPresentation-BNIeMkgM.js";import"./blocks-Jd3tffSd.js";import"./index-1habROHK.js";import"./resolveDesignControls-CFhBuB_d.js";const Ge={title:"Hexa UI Components/Radio/Stories",component:o,tags:["!autodocs"],...A},N=[{key:"default",label:"Default"},{key:"hover",label:"Hover"},{key:"active",label:"Active"},{key:"readonly",label:"Readonly",readonly:!0},{key:"disabled",label:"Disabled",disabled:!0}],j=[{key:"unselected",label:"Unselected",selected:!1,invalid:!1},{key:"selected",label:"Selected",selected:!0,invalid:!1},{key:"invalid-unselected",label:"Invalid Unselected",selected:!1,invalid:!0},{key:"invalid-selected",label:"Invalid Selected",selected:!0,invalid:!0}],z=(e,t)=>n.createElement(o,{vertical:!1,value:t.selected?"v":void 0,onChange:()=>{},disabled:e.disabled,readonly:e.readonly,invalid:t.invalid,options:[{label:"Radio",value:"v"}]}),i={parameters:{controls:{include:[]},layout:"fullscreen"},render:()=>n.createElement(M,{rows:N,columns:j,renderCell:z})},B=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3",disabled:!0}],p={render:e=>{const[t,a]=l.useState();return n.createElement(o,{...e,value:t,onChange:r=>a(r.target.value),options:B})}},u={render:e=>{const[t,a]=l.useState();return n.createElement(o,{...e,value:t,onChange:r=>a(r.target.value),options:B,vertical:!1})},name:"Inline Options"},F=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2",description:"Дополнительное описание опции"},{label:"Option 3",value:"3"}],d={render:e=>{const[t,a]=l.useState();return n.createElement(o,{...e,value:t,onChange:r=>a(r.target.value),options:F})},name:"With Description"},c={render:e=>{const[t,a]=l.useState(),r=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2",tooltip:"Подсказка к опции"},{label:"Option 3",value:"3"}];return n.createElement(H,{getPopupContainer:()=>document.body},n.createElement(o,{...e,value:t,onChange:s=>a(s.target.value),options:r}))},name:"With Tooltip"},m={render:e=>{const[t,a]=l.useState(),r=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2",description:"Описание опции",dependentElement:n.createElement(_,{placeholder:"Зависимый элемент"})},{label:"Option 3",value:"3"}];return n.createElement(o,{...e,value:t,onChange:s=>a(s.target.value),options:r})},name:"With Dependent Element"},v={render:e=>{const[t,a]=l.useState(),r=[{label:"Option 1",value:"1",required:!0},{label:"Option 2",value:"2",required:!0},{label:"Option 3",value:"3"}];return n.createElement(o,{...e,value:t,onChange:s=>a(s.target.value),options:r})}};var g,b,O;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: []
    },
    layout: 'fullscreen'
  },
  render: () => <StatesMatrix rows={stateRows} columns={variantColumns} renderCell={renderStateCell} />
}`,...(O=(b=i.parameters)==null?void 0:b.docs)==null?void 0:O.source}}};var S,h,C;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string>();
    return <Radio {...args} value={value} onChange={e => setValue(e.target.value)} options={basicOptions} />;
  }
}`,...(C=(h=p.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var f,R,y;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string>();
    return <Radio {...args} value={value} onChange={e => setValue(e.target.value)} options={basicOptions} vertical={false} />;
  },
  name: 'Inline Options'
}`,...(y=(R=u.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var E,V,D;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string>();
    return <Radio {...args} value={value} onChange={e => setValue(e.target.value)} options={withDescriptionOptions} />;
  },
  name: 'With Description'
}`,...(D=(V=d.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var W,P,x;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string>();
    const tooltipOptions: RadioProps['options'] = [{
      label: 'Option 1',
      value: '1'
    }, {
      label: 'Option 2',
      value: '2',
      tooltip: 'Подсказка к опции'
    }, {
      label: 'Option 3',
      value: '3'
    }];
    return <PopupConfigProvider getPopupContainer={() => document.body}>
        <Radio {...args} value={value} onChange={e => setValue(e.target.value)} options={tooltipOptions} />
      </PopupConfigProvider>;
  },
  name: 'With Tooltip'
}`,...(x=(P=c.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var k,q,I;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string>();
    const dependentOptions: RadioProps['options'] = [{
      label: 'Option 1',
      value: '1'
    }, {
      label: 'Option 2',
      value: '2',
      description: 'Описание опции',
      dependentElement: <Textbox placeholder="Зависимый элемент" />
    }, {
      label: 'Option 3',
      value: '3'
    }];
    return <Radio {...args} value={value} onChange={e => setValue(e.target.value)} options={dependentOptions} />;
  },
  name: 'With Dependent Element'
}`,...(I=(q=m.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var T,w,U;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string>();
    const requiredOptions: RadioProps['options'] = [{
      label: 'Option 1',
      value: '1',
      required: true
    }, {
      label: 'Option 2',
      value: '2',
      required: true
    }, {
      label: 'Option 3',
      value: '3'
    }];
    return <Radio {...args} value={value} onChange={e => setValue(e.target.value)} options={requiredOptions} />;
  }
}`,...(U=(w=v.parameters)==null?void 0:w.docs)==null?void 0:U.source}}};const Je=["States","Basic","InlineOptions","WithDescription","WithTooltip","WithDependentElement","Required"];export{p as Basic,u as InlineOptions,v as Required,i as States,m as WithDependentElement,d as WithDescription,c as WithTooltip,Je as __namedExportsOrder,Ge as default};
