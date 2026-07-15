import{T as he}from"./Palette-CL2qD4Vl.js";import{O as pe,c as Ce,G as M,R as e,S as x,r as z,T as Se,H as ge}from"./iframe-4-PRSI1I.js";import{a as ve}from"./StoryComponents-BWv8uEx9.js";import{B as xe}from"./Button-D2E54Ulj.js";import{T as ye}from"./Textbox-Dh9d3MYi.js";import{o as ue}from"./Advertisement-DDkY5S4P.js";import{o as Ee}from"./Placeholder-DoG1ulbQ.js";import{M as Me}from"./meta-B-Z3XW2E.js";import{T as o}from"./Tag-B3SARhhR.js";import{T as k}from"./TagReductionGroup-pjrO6_W7.js";import"./preload-helper-Dp1pzeXC.js";import"./Divider-Cb8Cmzqg.js";import"./FormLabel-CoXJxjwh.js";import"./Markdown-BenFmRMk.js";import"./shouldForwardProp-Cdy-RLhZ.js";import"./Dropdown-BZXGqesC.js";import"./KeyCode-c5NdJp32.js";import"./isEqual-vUrjsNbx.js";import"./useMergedState-5V6OeSqY.js";import"./focus-C8_PqSex.js";import"./omit-DXgDXInf.js";import"./imaskDateOptionsGenerator-CH929rNC.js";import"./index-Chjiymov.js";import"./TextReducer-JHIejSuK.js";import"./Loader-CzWCOjAf.js";import"./index-CJ8XlVHE.js";import"./index-C0IykO9V.js";import"./type-Bla-MjNb.js";import"./Toggle-Cpn23pdP.js";import"./AdditionalContent-CRQIPW1O.js";import"./HelpMessage-B93eXAoX.js";import"./wave-DF9O9Ycp.js";import"./ArrowRight-AkM1Q671.js";import"./v4-BoP187Zn.js";import"./button-DY_DOuYn.js";import"./useGlobalStyles-B7OAA5LN.js";import"./index-BQ6-O6_F.js";import"./SearchOutlined-p7LyB4Dy.js";import"./useThemedTextbox-Dn-Jpe9n.js";import"./typesHelpers-tpz7Of7L.js";import"./useClassNamedTextbox-BHoVbt8U.js";import"./InputNumber-DjFWqf89.js";import"./DownOutlined-Dw9vwDGv.js";import"./ArrowUpMicro-CYNyv5Qa.js";import"./InputPassword-DhvDhl9J.js";import"./IconResolver-CjN0_zDB.js";import"./StatusNoThreadSolid-CUKz-e_F.js";import"./StatusOkSolid-D4PIpJ4i.js";import"./useTranslation-jUtuSwd5.js";import"./index-B-OY55d_.js";import"./colors-DQ3Fg32p.js";import"./Group-D8YF7Z5T.js";import"./useImmutableRef-1MDvpLDO.js";import"./useResizeObserver-8Hk-mg1Z.js";const fr={title:"Hexa UI Components/Tag/Stories",component:o,tags:["!autodocs"],parameters:{badges:[M.stable,M.reviewedByDesign],design:Me.pixsoView}},ze=ge.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
  align-items: center;
`,n=r=>e.createElement(x,{gap:16,direction:"horizontal"},e.createElement(ze,null,pe.map((a,t)=>e.createElement("div",{key:a+t},e.createElement(o,{...r,key:a,mode:a},`I'm a ${a} tag`),a!=="ai"&&e.createElement(o,{...r,key:`${a}-outlined`,mode:a,onClose:()=>alert("outlined tag"),outlined:!0},`I'm a ${a} outlined tag`))))),s={render:r=>e.createElement(x,{gap:4,direction:"horizontal"},e.createElement(o,{...r},`I'm a ${r.mode} tag`),e.createElement(o,{...r,onClose:()=>alert("outlined tag"),outlined:!0},`I'm a ${r.mode} outlined tag`)),args:{mode:"neutral"},argTypes:{mode:{options:pe,control:{type:"select"}}}},i={render:n.bind({})},l={render:n.bind({}),args:{icon:e.createElement(ue,null),size:"medium"}},m={render:n.bind({}),args:{size:"medium",closable:!0}},c={render:n.bind({}),args:{size:"medium",closable:!0,onClick:()=>alert("tag")}},d={render:n.bind({}),args:{size:"medium",closable:!0,icon:e.createElement(ue,null)}},y=r=>a=>e.createElement(x,{gap:16,direction:"horizontal"},e.createElement(o,{...a},r," tag"),e.createElement(o,{...a,closable:!0,onClose:()=>alert(`${r} closable tag`)},r," closable tag")),p={render:y("Readonly"),args:{readOnly:!0,size:"medium"}},g={render:y("Invalid"),args:{invalid:!0,size:"medium"}},u={render:y("Disabled"),args:{disabled:!0,size:"medium"}},T={args:{children:"This is a looooong long looooong long looooong long tag content that should be truncated on maxChars prop.",onClick:()=>alert("tag!"),closable:!0,onClose:()=>alert("Max chars tag"),size:"medium",truncation:{maxChars:30,tooltipPosition:"bottom",truncationSymbol:"..."}}},ke=ge.div`
  width: 30%;
  padding: 20px;
`,b={render:r=>e.createElement("div",{style:{width:"100%"}},e.createElement(Se,null,"Try to change (↔️) browser width and look at tag reaction"),e.createElement(ke,null,e.createElement(o,{...r},r.children))),args:{children:"Some medium size and responsive tag",size:"medium",isResponsive:!0}},h={args:{source:Ce.tag},render:r=>e.createElement(he,{...r})},C={render:({items:r,...a})=>{const[t,Te]=z.useState(r),[S,E]=z.useState(""),be=()=>{S!==""&&(Te(v=>[...v,{label:S}]),E(""))};return e.createElement(ve,null,e.createElement(ye,{value:S,onChange:E}),e.createElement(xe,{onClick:be},"Добавить тег"),e.createElement(k,{items:t,...a}),e.createElement(k,{items:t.map(v=>({...v,icon:e.createElement(Ee,null)})),...a}))},args:{items:[{label:"Восточно-Сибирская жд"},{label:"Забайкальская жд"},{label:"Северо-Кавказская жд"},{label:"Московская окружная жд"},{label:"Южно-Уральская жд"},{label:"Октябрьская жд"}],isMultiline:!1,reductionTag:{size:"medium",outlined:!1}},decorators:[(r,a)=>e.createElement("div",{style:{width:400}},e.createElement(r,{...a}))]};var f,w,I;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args: TagProps) => <Space gap={4} direction="horizontal">
      <Tag {...args}>
        {\`I'm a \${args.mode} tag\`}
      </Tag>
      <Tag {...args} onClose={() => alert('outlined tag')} outlined>
        {\`I'm a \${args.mode} outlined tag\`}
      </Tag>
    </Space>,
  args: {
    mode: 'neutral'
  },
  argTypes: {
    mode: {
      options: tagModes,
      control: {
        type: 'select'
      }
    }
  }
}`,...(I=(w=s.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var A,R,D;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: AllModesMock.bind({})
}`,...(D=(R=i.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var $,P,B;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: AllModesMock.bind({}),
  args: {
    icon: <Advertisement />,
    size: 'medium'
  }
}`,...(B=(P=l.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var G,O,N;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: AllModesMock.bind({}),
  args: {
    size: 'medium',
    closable: true
  }
}`,...(N=(O=m.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var H,V,W;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: AllModesMock.bind({}),
  args: {
    size: 'medium',
    closable: true,
    onClick: () => alert('tag')
  }
}`,...(W=(V=c.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var _,U,j;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: AllModesMock.bind({}),
  args: {
    size: 'medium',
    closable: true,
    icon: <Advertisement />
  }
}`,...(j=(U=d.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var q,F,J;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: DefaultAndClosableMock('Readonly'),
  args: {
    readOnly: true,
    size: 'medium'
  }
}`,...(J=(F=p.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var K,L,Q;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: DefaultAndClosableMock('Invalid'),
  args: {
    invalid: true,
    size: 'medium'
  }
}`,...(Q=(L=g.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var X,Y,Z;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: DefaultAndClosableMock('Disabled'),
  args: {
    disabled: true,
    size: 'medium'
  }
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,ae;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    children: 'This is a looooong long looooong long looooong long tag content that should be truncated on maxChars prop.',
    onClick: () => alert('tag!'),
    closable: true,
    onClose: () => alert('Max chars tag'),
    size: 'medium',
    truncation: {
      maxChars: 30,
      tooltipPosition: 'bottom',
      truncationSymbol: '...'
    }
  }
}`,...(ae=(re=T.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var oe,ne,te;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: (args: TagProps) => {
    return <div style={{
      width: '100%'
    }}>
        <Text>Try to change (↔️) browser width and look at tag reaction</Text>
        <Container>
          <Tag {...args}>
            {args.children}
          </Tag>
        </Container>
      </div>;
  },
  args: {
    children: 'Some medium size and responsive tag',
    size: 'medium',
    isResponsive: true
  }
}`,...(te=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var se,ie,le;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    source: componentColors.tag
  },
  render: args => <ThemedPalette {...args} />
}`,...(le=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var me,ce,de;C.parameters={...C.parameters,docs:{...(me=C.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: ({
    items,
    ...rest
  }: TagReductionGroupProps) => {
    const [tagItems, setTagItems] = useState(items);
    const [newTag, setNewTag] = useState('');
    const handleOnTagAdd = () => {
      if (newTag !== '') {
        setTagItems(prev => [...prev, {
          label: newTag
        }]);
        setNewTag('');
      }
    };
    return <StoryColumn>
        <Textbox value={newTag} onChange={setNewTag} />
        <Button onClick={handleOnTagAdd}>Добавить тег</Button>
        <TagReductionGroup items={tagItems} {...rest} />
        <TagReductionGroup items={tagItems.map(item => ({
        ...item,
        icon: <Placeholder />
      }))} {...rest} />
      </StoryColumn>;
  },
  args: {
    items: [{
      label: 'Восточно-Сибирская жд'
    }, {
      label: 'Забайкальская жд'
    }, {
      label: 'Северо-Кавказская жд'
    }, {
      label: 'Московская окружная жд'
    }, {
      label: 'Южно-Уральская жд'
    }, {
      label: 'Октябрьская жд'
    }],
    isMultiline: false,
    reductionTag: {
      size: 'medium',
      outlined: false
    }
  },
  decorators: [(Story, context) => <div style={{
    width: 400
  }}><Story {...context} /></div>]
}`,...(de=(ce=C.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};const wr=["Basic","AllModeVariants","TagsWithIcons","ClosableTags","ClickedTags","ClosableAndIconCombo","ReadonlyTag","InvalidTag","DisabledTag","MaxCharsTag","ResponsiveTag","ColorTokens","ReductionGroup"];export{i as AllModeVariants,s as Basic,c as ClickedTags,d as ClosableAndIconCombo,m as ClosableTags,h as ColorTokens,u as DisabledTag,g as InvalidTag,T as MaxCharsTag,p as ReadonlyTag,C as ReductionGroup,b as ResponsiveTag,l as TagsWithIcons,wr as __namedExportsOrder,fr as default};
