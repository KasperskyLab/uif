import{T as K}from"./Palette-DXL8UiT3.js";import{T as M}from"./Warnings-HAXwamkf.js";import{a as u}from"./StoryComponents--bOGC0xv.js";import{T as Q}from"./Textbox-B-hgsSTM.js";import{c as V,R as e,r as b,T as X,I as Y}from"./iframe-DedYZBTA.js";import{T as r}from"./Toggle-B_SlzXxU.js";import"./Tag-BKPu3-sD.js";import"./TextReducer-DfctGdJH.js";import"./index-D9mMt9l0.js";import"./omit-DXgDXInf.js";import"./type-8et6jEI2.js";import"./colors-BWEb3wBP.js";import"./wave-MdFmrsKf.js";import"./Group-3Po5iaS9.js";import"./FormLabel-a_agw1kt.js";import"./preload-helper-Dp1pzeXC.js";import"./Divider-CSCFEdMt.js";import"./useGlobalStyles-DdWamh97.js";import"./InputMasked-Bbhb0bxg.js";import"./input-CAqmA_rE.js";import"./index-Chjiymov.js";import"./useThemedTextbox-CnXfBV1i.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-Su5-ronh.js";import"./InputNumber-ZzYxxSm4.js";import"./index-DTSNSACu.js";import"./SearchOutlined-DnINVVX9.js";import"./button-D1isEG_A.js";import"./useMergedState-Rc5-DXZ5.js";import"./InputPassword-C-5Li4PE.js";import"./Button-Dn3YNhT7.js";import"./Dropdown-C8Jtav0F.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-BEs9Hbuo.js";import"./focus-CS35CTr_.js";import"./ArrowRight-DWYHjndK.js";import"./Loader-C9846UWr.js";import"./index-DlVZRnRV.js";import"./v4-BoP187Zn.js";import"./StatusOkSolid-OcpnRZV_.js";import"./useTranslation-od-Kmf1k.js";import"./IconResolver-DW8XVFKA.js";import"./Placeholder-DXWNW80D.js";import"./AdditionalContent-nPPwbP5q.js";import"./HelpMessage-BT7POId6.js";const ze={title:"Hexa UI Components/Toggle/Stories",component:r,tags:["!autodocs"],args:{disabled:!1,readonly:!1,loading:!1,labelPosition:"after",children:"Label"}},a={},s={args:{children:void 0}},l={render:o=>e.createElement(u,null,e.createElement(r,{...o,disabled:!0},"Label"),e.createElement(r,{...o,disabled:!0,checked:!0},"Label"))},i={render:o=>e.createElement(u,null,e.createElement(r,{...o,readonly:!0},"Label"),e.createElement(r,{...o,readonly:!0,checked:!0},"Label"))},c={render:o=>e.createElement(u,null,e.createElement(r,{...o,loading:!0},"Label"),e.createElement(r,{...o,loading:!0,checked:!0},"Label"))},m={render:o=>{const[n,z]=b.useState(!0),[G,J]=b.useState(!0),T=t=>t?"On":"Off";return e.createElement(u,null,e.createElement(r,{...o,checked:n,onChange:t=>{alert(`first: ${t}`),z(t)}},T(n)),!n&&e.createElement(X,null,"second onChange does not work"),e.createElement(r,{...o,checked:G,onChange:t=>{n&&(alert(`second: ${t}`),J(t))}},T(n)))}},p={args:{description:"Some description",dependentElement:e.createElement(Q,{placeholder:"dependentElement"})}},d={render:o=>e.createElement("div",null,e.createElement(M,{propName:"compositionTooltip"}),e.createElement("div",{style:{width:"min-content"}},e.createElement(Y,{text:o.compositionTooltip},e.createElement("span",null,e.createElement(r,{...o}))))),argTypes:{compositionTooltip:{control:"text"}},args:{compositionTooltip:"Toggle tooltip"},parameters:{controls:{exclude:/(tooltip|componentType)/}}},g={args:{source:V.toggle},render:o=>e.createElement(K,{...o})};var h,S,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(f=(S=a.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var E,C,y;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: undefined
  }
}`,...(y=(C=s.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var L,x,k;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: ToggleProps) => <StoryColumn>
      <Toggle {...args} disabled>Label</Toggle>
      <Toggle {...args} disabled checked>Label</Toggle>
    </StoryColumn>
}`,...(k=(x=l.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var v,W,P;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args: ToggleProps) => <StoryColumn>
      <Toggle {...args} readonly>Label</Toggle>
      <Toggle {...args} readonly checked>Label</Toggle>
    </StoryColumn>
}`,...(P=(W=i.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var O,w,R;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: (args: ToggleProps) => <StoryColumn>
      <Toggle {...args} loading>Label</Toggle>
      <Toggle {...args} loading checked>Label</Toggle>
    </StoryColumn>
}`,...(R=(w=c.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var $,F,A;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: (args: ToggleProps) => {
    const [first, setFirst] = useState<boolean>(true);
    const [second, setSecond] = useState<boolean>(true);
    const getLabel = (value: boolean) => value ? 'On' : 'Off';
    return <StoryColumn>
        <Toggle {...args} checked={first} onChange={value => {
        alert(\`first: \${value}\`);
        setFirst(value);
      }}>
          {getLabel(first)}
        </Toggle>
        {!first && <Text>second onChange does not work</Text>}
        <Toggle {...args} checked={second} onChange={value => {
        if (!first) return;
        alert(\`second: \${value}\`);
        setSecond(value);
      }}>
          {getLabel(first)}
        </Toggle>
      </StoryColumn>;
  }
}`,...(A=(F=m.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var B,D,I;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    description: 'Some description',
    dependentElement: <Textbox placeholder="dependentElement" />
  }
}`,...(I=(D=p.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var N,_,H;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: (args: any) => <div>
      <TooltipCompositionWarning propName="compositionTooltip" />
      <div style={{
      width: 'min-content'
    }}>
        <Tooltip text={args.compositionTooltip}>
          <span><Toggle {...args} /></span>
        </Tooltip>
      </div>
    </div>,
  argTypes: {
    compositionTooltip: {
      control: 'text'
    }
  },
  args: {
    compositionTooltip: 'Toggle tooltip'
  } as any,
  parameters: {
    controls: {
      exclude: /(tooltip|componentType)/
    }
  }
}`,...(H=(_=d.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var U,j,q;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    source: componentColors.toggle
  },
  render: args => <ThemedPalette {...args} />
}`,...(q=(j=g.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const Ge=["Basic","WithoutLabel","Disabled","Readonly","Loading","Control","WithAdditionalContent","WithTooltip","ColorTokens"];export{a as Basic,g as ColorTokens,m as Control,l as Disabled,c as Loading,i as Readonly,p as WithAdditionalContent,d as WithTooltip,s as WithoutLabel,Ge as __namedExportsOrder,ze as default};
