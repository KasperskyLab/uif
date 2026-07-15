import{T as f}from"./Palette-CL2qD4Vl.js";import{v}from"./typesHelpers-tpz7Of7L.js";import{R as a,c as k,G as i,r as T}from"./iframe-4-PRSI1I.js";import{w}from"./withMeta-BwOuJ6tr.js";import{s as E}from"./helpers-BytZKRkB.js";import{T as N,a as n}from"./TreeSelect-CmTDYzVL.js";import"./preload-helper-Dp1pzeXC.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./DocPageLayout-CZPyVaN8.js";import"./blocks-yA_hxWl_.js";import"./TextReducer-JHIejSuK.js";import"./SubComponents-EaKLKwRG.js";import"./TextWithTruncation-BuGmQSH-.js";import"./Badge-B3_Y1H2J.js";import"./index-C0IykO9V.js";import"./colors-DQ3Fg32p.js";import"./type-Bla-MjNb.js";import"./Divider-Cb8Cmzqg.js";import"./Indicator-D1HJCmfp.js";import"./Grid-CDQgOgKy.js";import"./WithGlobalStyles-C8LP4Zzm.js";import"./useGlobalStyles-B7OAA5LN.js";import"./Select-Bfc69stS.js";import"./Loader-CzWCOjAf.js";import"./index-CJ8XlVHE.js";import"./omit-DXgDXInf.js";import"./Tag-B3SARhhR.js";import"./index-B-OY55d_.js";import"./wave-DF9O9Ycp.js";import"./Group-D8YF7Z5T.js";import"./useMergedState-5V6OeSqY.js";import"./KeyCode-c5NdJp32.js";import"./index-8yXvUTGn.js";import"./addEventListener-DmCE5wjQ.js";import"./Portal-2eAsMGG9.js";import"./isEqual-vUrjsNbx.js";import"./regeneratorRuntime-Co2DlCyH.js";import"./pickAttrs-ACVbvRAI.js";import"./List-CY7M4ryI.js";import"./Checkbox-C_Wci0Rq.js";import"./AdditionalContent-CRQIPW1O.js";import"./HelpMessage-B93eXAoX.js";import"./useId-B0iEqS7b.js";import"./generateId-BXJELych.js";import"./v4-BoP187Zn.js";import"./FormLabel-CoXJxjwh.js";import"./index-C07DIHtC.js";import"./index-zCYDgB3k.js";import"./IconSearch-P_ay4iUp.js";import"./SearchActive-BuIUfH-Q.js";import"./useTranslation-jUtuSwd5.js";import"./Tree-appFFBib.js";import"./Radio-DUuhhrf2.js";import"./index-CsWSl5Dl.js";import"./Tree-BLyxVEuJ.js";import"./SettingsGear-Cqb3tsn_.js";import"./iconUtil-DiU6VZER.js";import"./DownOutlined-Dw9vwDGv.js";import"./SearchOutlined-p7LyB4Dy.js";const b={designTokens:!1,useThemedHook:!0,unitTests:!1,screenshotTests:!1,migration:!0,apiTable:!1,storybook:!0},y="TreeSelect",L="Компонент TreeSelect похож на Select, но значения представлены в виде дерева. Подходит для любых данных, представленных в виде иерархии",A={dod:b,component:y,usage:L},B=[{value:"parent 1",title:"parent 1",children:[{value:"parent 1-0",title:"parent 1-0",children:[{value:"leaf1",title:"leaf1"},{value:"leaf2",title:"leaf2",disabled:!0}]},{value:"parent 1-1",title:"parent 1-1",children:[{value:"leaf3",title:a.createElement("b",{style:{color:"#08c"}},"leaf3")}]}]}],D=[{title:"Node1",value:"Node1",key:"0-0",children:[{title:"Child Node1",value:"Child Node1",key:"0-0-0"}]},{title:"Node2",value:"Node2",key:"0-1",children:[{title:"Child Node3",value:"Child Node3",key:"0-1-0"},{title:"Child Node4",value:"Child Node4",key:"0-1-1"},{title:"Child Node5",value:"Child Node5",key:"0-1-2"}]}],Me={title:"Hexa UI Components/TreeSelect",component:n,argTypes:{validationStatus:{control:{type:"radio"},options:v},...E(["theme"])},args:{placeholder:"Please select",testId:"tree-select-test-id",klId:"tree-select-kl-id"},parameters:{badges:[i.stable,i.missingDesign],docs:{page:w(A)}}},t={render:e=>{const[s,l]=T.useState();return a.createElement(n,{...e,value:s,onChange:l})},args:{showSearch:!0,allowClear:!0,treeDefaultExpandAll:!0,treeData:B}},{SHOW_ALL:_}=N,r={render:e=>{const[s,l]=T.useState(["Node1"]);return a.createElement(n,{...e,onChange:l,value:s})},args:{allowClear:!0,treeData:D,treeCheckable:!0,treeLine:{showLeafIcon:!1},showCheckedStrategy:_,showArrow:!0}},o={args:{source:{tree:k.tree}},render:e=>a.createElement(f,{...e})};var p,m,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,u,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,C,S;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    source: {
      tree: componentColors.tree
    }
  },
  render: args => <ThemedPalette {...args} />
}`,...(S=(C=o.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const Oe=["Basic","Checkable","ColorTokens"];export{t as Basic,r as Checkable,o as ColorTokens,Oe as __namedExportsOrder,Me as default};
