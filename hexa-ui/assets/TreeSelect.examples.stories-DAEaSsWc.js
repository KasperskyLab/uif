import{T}from"./Palette-DXL8UiT3.js";import{a as k,T as n}from"./TreeSelect-CgurQRVt.js";import{c as v,r as g,R as i}from"./iframe-DedYZBTA.js";import{S as w,t as N}from"./TreeSelect.stories-C0dxQiCm.js";import"./WithGlobalStyles-Dptm3X0S.js";import"./useGlobalStyles-DdWamh97.js";import"./Select-xZT8Da8H.js";import"./TextReducer-DfctGdJH.js";import"./FormLabel-a_agw1kt.js";import"./preload-helper-Dp1pzeXC.js";import"./Tag-BKPu3-sD.js";import"./index-D9mMt9l0.js";import"./omit-DXgDXInf.js";import"./type-8et6jEI2.js";import"./colors-BWEb3wBP.js";import"./wave-MdFmrsKf.js";import"./Group-3Po5iaS9.js";import"./index-DlVZRnRV.js";import"./useMergedState-Rc5-DXZ5.js";import"./KeyCode-c5NdJp32.js";import"./index-SJNK96pD.js";import"./addEventListener-XwZ_2C5f.js";import"./Portal-CZOHXnhR.js";import"./isEqual-BEs9Hbuo.js";import"./regeneratorRuntime-D6qV2PU5.js";import"./pickAttrs-C2PClXaq.js";import"./List-Dn04FqKX.js";import"./IconSearch-tU4SVZjn.js";import"./Indicator-Bx9eTEZ-.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./v4-BoP187Zn.js";import"./useTranslation-od-Kmf1k.js";import"./Checkbox-CNZ65EGY.js";import"./AdditionalContent-nPPwbP5q.js";import"./HelpMessage-BT7POId6.js";import"./useId-D-iZuP_C.js";import"./generateId-BXJELych.js";import"./index-RNU6oZ57.js";import"./index-B_L1GtX7.js";import"./Loader-C9846UWr.js";import"./Divider-CSCFEdMt.js";import"./Tree-DIlayO6k.js";import"./Tree-BbkTKoxh.js";import"./SettingsGear-Cl0aLKMC.js";import"./ArrowDownSolid-Ckv4ljMR.js";import"./Radio-Cpvj7bye.js";import"./index-Cgmls7nb.js";import"./iconUtil-DxrXKhw9.js";import"./SearchOutlined-DnINVVX9.js";import"./propPresentation-BNIeMkgM.js";import"./blocks-Jd3tffSd.js";import"./index-1habROHK.js";import"./typesHelpers-tpz7Of7L.js";const E=[{title:"Node1",value:"Node1",key:"0-0",children:[{title:"Child Node1",value:"Child Node1",key:"0-0-0"}]},{title:"Node2",value:"Node2",key:"0-1",children:[{title:"Child Node3",value:"Child Node3",key:"0-1-0"},{title:"Child Node4",value:"Child Node4",key:"0-1-1"},{title:"Child Node5",value:"Child Node5",key:"0-1-2"}]}],Le={title:"Hexa UI Components/TreeSelect/Stories",component:n,tags:["!autodocs"],...N},r={render:e=>{const[a,s]=g.useState();return i.createElement(n,{...e,value:a,onChange:s})},args:{showSearch:!0,allowClear:!0,treeDefaultExpandAll:!0,treeData:w}},{SHOW_ALL:L}=k,t={render:e=>{const[a,s]=g.useState(["Node1"]);return i.createElement(n,{...e,onChange:s,value:a})},args:{allowClear:!0,treeData:E,treeCheckable:!0,treeLine:{showLeafIcon:!1},showCheckedStrategy:L,showArrow:!0}},o={args:{source:{tree:v.tree}},render:e=>i.createElement(T,{...e})};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: TreeSelectProps) => {
    const [value, setValue] = useState<string>();
    return <TreeSelect {...args} value={value} onChange={setValue} />;
  },
  args: {
    showSearch: true,
    allowClear: true,
    treeDefaultExpandAll: true,
    treeData: STUB_SIMPLE
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,u,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: TreeSelectProps) => {
    const [value, setValue] = useState(['Node1']);
    return <TreeSelect {...args} onChange={setValue} value={value} />;
  },
  args: {
    allowClear: true,
    treeData: STUB_CHECKABLE,
    treeCheckable: true,
    treeLine: {
      showLeafIcon: false
    },
    showCheckedStrategy: SHOW_ALL,
    showArrow: true
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var h,C,S;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    source: {
      tree: componentColors.tree
    }
  },
  render: args => <ThemedPalette {...args} />
}`,...(S=(C=o.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const fe=["Basic","Checkable","ColorTokens"];export{r as Basic,t as Checkable,o as ColorTokens,fe as __namedExportsOrder,Le as default};
