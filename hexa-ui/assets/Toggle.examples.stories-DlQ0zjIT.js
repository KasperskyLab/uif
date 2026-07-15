import{T as K}from"./Palette-CL2qD4Vl.js";import{T as M}from"./Warnings-i-859-qY.js";import{a as u}from"./StoryComponents-BWv8uEx9.js";import{T as Q}from"./Textbox-Dh9d3MYi.js";import{c as V,R as e,r as b,T as X,v as Y}from"./iframe-4-PRSI1I.js";import{T as r}from"./Toggle-Cpn23pdP.js";import"./Tag-B3SARhhR.js";import"./TextReducer-JHIejSuK.js";import"./index-B-OY55d_.js";import"./omit-DXgDXInf.js";import"./index-C0IykO9V.js";import"./colors-DQ3Fg32p.js";import"./type-Bla-MjNb.js";import"./wave-DF9O9Ycp.js";import"./Group-D8YF7Z5T.js";import"./Divider-Cb8Cmzqg.js";import"./FormLabel-CoXJxjwh.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./useGlobalStyles-B7OAA5LN.js";import"./index-BQ6-O6_F.js";import"./SearchOutlined-p7LyB4Dy.js";import"./button-DY_DOuYn.js";import"./useMergedState-5V6OeSqY.js";import"./useThemedTextbox-Dn-Jpe9n.js";import"./typesHelpers-tpz7Of7L.js";import"./imaskDateOptionsGenerator-CH929rNC.js";import"./index-Chjiymov.js";import"./useClassNamedTextbox-BHoVbt8U.js";import"./InputNumber-DjFWqf89.js";import"./KeyCode-c5NdJp32.js";import"./DownOutlined-Dw9vwDGv.js";import"./ArrowUpMicro-CYNyv5Qa.js";import"./InputPassword-DhvDhl9J.js";import"./Button-D2E54Ulj.js";import"./Dropdown-BZXGqesC.js";import"./isEqual-vUrjsNbx.js";import"./focus-C8_PqSex.js";import"./Loader-CzWCOjAf.js";import"./index-CJ8XlVHE.js";import"./ArrowRight-AkM1Q671.js";import"./v4-BoP187Zn.js";import"./IconResolver-CjN0_zDB.js";import"./Placeholder-DoG1ulbQ.js";import"./StatusNoThreadSolid-CUKz-e_F.js";import"./StatusOkSolid-D4PIpJ4i.js";import"./useTranslation-jUtuSwd5.js";import"./preload-helper-Dp1pzeXC.js";import"./AdditionalContent-CRQIPW1O.js";import"./HelpMessage-B93eXAoX.js";const Qe={title:"Hexa UI Components/Toggle/Stories",component:r,tags:["!autodocs"],args:{disabled:!1,readonly:!1,loading:!1,labelPosition:"after",children:"Label"}},a={},s={args:{children:void 0}},l={render:o=>e.createElement(u,null,e.createElement(r,{...o,disabled:!0},"Label"),e.createElement(r,{...o,disabled:!0,checked:!0},"Label"),e.createElement(r,{...o,disabled:!0}))},i={render:o=>e.createElement(u,null,e.createElement(r,{...o,readonly:!0},"Label"),e.createElement(r,{...o,readonly:!0,checked:!0},"Label"),e.createElement(r,{...o,readonly:!0}))},c={render:o=>e.createElement(u,null,e.createElement(r,{...o,loading:!0},"Label"),e.createElement(r,{...o,loading:!0,checked:!0},"Label"),e.createElement(r,{...o,loading:!0}))},m={render:o=>{const[n,z]=b.useState(!0),[G,J]=b.useState(!0),T=t=>t?"On":"Off";return e.createElement(u,null,e.createElement(r,{...o,checked:n,onChange:t=>{alert(`first: ${t}`),z(t)}},T(n)),!n&&e.createElement(X,null,"second onChange does not work"),e.createElement(r,{...o,checked:G,onChange:t=>{n&&(alert(`second: ${t}`),J(t))}},T(n)))}},p={args:{description:"Some description",dependentElement:e.createElement(Q,{placeholder:"dependentElement"})}},d={render:o=>e.createElement("div",null,e.createElement(M,{propName:"compositionTooltip"}),e.createElement("div",{style:{width:"min-content"}},e.createElement(Y,{text:o.compositionTooltip},e.createElement("span",null,e.createElement(r,{...o}))))),argTypes:{compositionTooltip:{control:"text"}},args:{compositionTooltip:"Toggle tooltip"},parameters:{controls:{exclude:/(tooltip|componentType)/}}},g={args:{source:V.toggle},render:o=>e.createElement(K,{...o})};var h,E,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(S=(E=a.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var f,y,C;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: undefined
  }
}`,...(C=(y=s.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var L,x,k;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: ToggleProps) => <StoryColumn>
      <Toggle {...args} disabled>Label</Toggle>
      <Toggle {...args} disabled checked>Label</Toggle>
      <Toggle {...args} disabled />
    </StoryColumn>
}`,...(k=(x=l.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var v,W,P;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args: ToggleProps) => <StoryColumn>
      <Toggle {...args} readonly>Label</Toggle>
      <Toggle {...args} readonly checked>Label</Toggle>
      <Toggle {...args} readonly />
    </StoryColumn>
}`,...(P=(W=i.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var O,w,R;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: (args: ToggleProps) => <StoryColumn>
      <Toggle {...args} loading>Label</Toggle>
      <Toggle {...args} loading checked>Label</Toggle>
      <Toggle {...args} loading />
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
}`,...(A=(F=m.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var B,D,N;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    description: 'Some description',
    dependentElement: <Textbox placeholder="dependentElement" />
  }
}`,...(N=(D=p.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var _,H,I;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(I=(H=d.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var U,j,q;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    source: componentColors.toggle
  },
  render: args => <ThemedPalette {...args} />
}`,...(q=(j=g.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const Ve=["Basic","WithoutLabel","Disabled","Readonly","Loading","Control","WithAdditionalContent","WithTooltip","ColorTokens"];export{a as Basic,g as ColorTokens,m as Control,l as Disabled,c as Loading,i as Readonly,p as WithAdditionalContent,d as WithTooltip,s as WithoutLabel,Ve as __namedExportsOrder,Qe as default};
